import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/api';

interface User {
  id: string;
  email: string;
  name: string;
  profileImage?: string;
  bio?: string;
  enrolledCourses: string[];
}

interface AuthStore {
  user: User | null;
  userToken: string | null;
  isLoading: boolean;
  error: string | null;
  
  initialize: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (updates: Partial<User>) => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  userToken: null,
  isLoading: true,
  error: null,

  initialize: async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        const response = await api.get('/auth/me');
        set({ user: response.data, userToken: token, isLoading: false });
      } else {
        set({ isLoading: false });
      }
    } catch (error) {
      set({ isLoading: false });
    }
  },

  login: async (email: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await api.post('/auth/login', { email, password });
      const { token, user } = response.data;
      
      await AsyncStorage.setItem('userToken', token);
      set({ user, userToken: token, isLoading: false });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Login failed',
        isLoading: false,
      });
      throw error;
    }
  },

  signup: async (email: string, password: string, name: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await api.post('/auth/signup', { email, password, name });
      const { token, user } = response.data;
      
      await AsyncStorage.setItem('userToken', token);
      set({ user, userToken: token, isLoading: false });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Signup failed',
        isLoading: false,
      });
      throw error;
    }
  },

  logout: async () => {
    try {
      await api.post('/auth/logout');
      await AsyncStorage.removeItem('userToken');
      set({ user: null, userToken: null });
    } catch (error) {
      console.error('Logout error:', error);
    }
  },

  updateProfile: async (updates: Partial<User>) => {
    try {
      const response = await api.put('/users/profile', updates);
      set((state) => ({
        user: state.user ? { ...state.user, ...response.data } : null,
      }));
    } catch (error) {
      console.error('Profile update error:', error);
      throw error;
    }
  },
}));
