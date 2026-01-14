import { create } from 'zustand';
import { api } from '../services/api';

export interface UserProfile {
  id: string;
  name: string;
  profileImage: string;
  bio: string;
  followers: number;
  following: number;
  postsCount: number;
}

export interface Comment {
  id: string;
  author: UserProfile;
  content: string;
  createdAt: string;
  likes: number;
}

export interface Post {
  id: string;
  author: UserProfile;
  content: string;
  image?: string;
  likes: number;
  comments: Comment[];
  createdAt: string;
  liked: boolean;
}

interface CommunityStore {
  posts: Post[];
  userProfile: UserProfile | null;
  loading: boolean;
  error: string | null;
  
  fetchPosts: () => Promise<void>;
  fetchUserProfile: (userId: string) => Promise<void>;
  createPost: (content: string, image?: string) => Promise<void>;
  likePost: (postId: string) => Promise<void>;
  unlikePost: (postId: string) => Promise<void>;
  addComment: (postId: string, content: string) => Promise<void>;
  followUser: (userId: string) => Promise<void>;
  unfollowUser: (userId: string) => Promise<void>;
}

export const useCommunityStore = create<CommunityStore>((set) => ({
  posts: [],
  userProfile: null,
  loading: false,
  error: null,

  fetchPosts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await api.get('/community/posts');
      set({ posts: response.data, loading: false });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Failed to fetch posts',
        loading: false,
      });
    }
  },

  fetchUserProfile: async (userId: string) => {
    set({ loading: true, error: null });
    try {
      const response = await api.get(`/community/users/${userId}`);
      set({ userProfile: response.data, loading: false });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Failed to fetch profile',
        loading: false,
      });
    }
  },

  createPost: async (content: string, image?: string) => {
    try {
      const response = await api.post('/community/posts', { content, image });
      set((state) => ({
        posts: [response.data, ...state.posts],
      }));
    } catch (error) {
      console.error('Failed to create post:', error);
      throw error;
    }
  },

  likePost: async (postId: string) => {
    try {
      await api.post(`/community/posts/${postId}/like`);
      set((state) => ({
        posts: state.posts.map((post) =>
          post.id === postId
            ? { ...post, likes: post.likes + 1, liked: true }
            : post
        ),
      }));
    } catch (error) {
      console.error('Failed to like post:', error);
      throw error;
    }
  },

  unlikePost: async (postId: string) => {
    try {
      await api.post(`/community/posts/${postId}/unlike`);
      set((state) => ({
        posts: state.posts.map((post) =>
          post.id === postId
            ? { ...post, likes: Math.max(0, post.likes - 1), liked: false }
            : post
        ),
      }));
    } catch (error) {
      console.error('Failed to unlike post:', error);
      throw error;
    }
  },

  addComment: async (postId: string, content: string) => {
    try {
      const response = await api.post(`/community/posts/${postId}/comments`, {
        content,
      });
      set((state) => ({
        posts: state.posts.map((post) =>
          post.id === postId
            ? { ...post, comments: [...post.comments, response.data] }
            : post
        ),
      }));
    } catch (error) {
      console.error('Failed to add comment:', error);
      throw error;
    }
  },

  followUser: async (userId: string) => {
    try {
      await api.post(`/community/users/${userId}/follow`);
      set((state) => ({
        userProfile: state.userProfile
          ? { ...state.userProfile, followers: state.userProfile.followers + 1 }
          : null,
      }));
    } catch (error) {
      console.error('Failed to follow user:', error);
      throw error;
    }
  },

  unfollowUser: async (userId: string) => {
    try {
      await api.post(`/community/users/${userId}/unfollow`);
      set((state) => ({
        userProfile: state.userProfile
          ? { ...state.userProfile, followers: Math.max(0, state.userProfile.followers - 1) }
          : null,
      }));
    } catch (error) {
      console.error('Failed to unfollow user:', error);
      throw error;
    }
  },
}));
