import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  TextInput,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useCommunityStore } from '../../store/communityStore';
import { useAuthStore } from '../../store/authStore';

const CommunityScreen = ({ navigation }: any) => {
  const {
    posts,
    loading,
    error,
    fetchPosts,
    createPost,
    likePost,
    unlikePost,
    addComment,
  } = useCommunityStore();
  const { user } = useAuthStore();
  const [postContent, setPostContent] = useState('');
  const [expandedComments, setExpandedComments] = useState<string | null>(null);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleCreatePost = async () => {
    if (!postContent.trim()) {
      Alert.alert('Error', 'Please write something to share');
      return;
    }

    try {
      await createPost(postContent);
      setPostContent('');
      Alert.alert('Success', 'Post shared!');
    } catch (error) {
      Alert.alert('Error', 'Failed to create post');
    }
  };

  const handleLike = async (postId: string, isLiked: boolean) => {
    try {
      if (isLiked) {
        await unlikePost(postId);
      } else {
        await likePost(postId);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to update like');
    }
  };

  const handleAddComment = async (postId: string) => {
    if (!newComment.trim()) {
      Alert.alert('Error', 'Please write a comment');
      return;
    }

    try {
      await addComment(postId, newComment);
      setNewComment('');
      setExpandedComments(null);
      Alert.alert('Success', 'Comment added!');
    } catch (error) {
      Alert.alert('Error', 'Failed to add comment');
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Create Post */}
      <View style={styles.createPostSection}>
        <Image
          source={{
            uri: user?.profileImage || 'https://via.placeholder.com/40',
          }}
          style={styles.userImage}
        />
        <TouchableOpacity
          style={styles.createPostInput}
          onPress={() => {
            // Could open a modal for creating posts
          }}
        >
          <Text style={styles.createPostPlaceholder}>
            What's on your mind, {user?.name?.split(' ')[0]}?
          </Text>
        </TouchableOpacity>
      </View>

      {/* Posts */}
      {loading ? (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color="#6B46C1" />
        </View>
      ) : error ? (
        <View style={styles.centerContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : posts.length === 0 ? (
        <View style={styles.centerContainer}>
          <Icon name="chat-outline" size={48} color="#ccc" />
          <Text style={styles.emptyText}>No posts yet. Be the first to share!</Text>
        </View>
      ) : (
        posts.map((post) => (
          <View key={post.id} style={styles.postCard}>
            {/* Post Header */}
            <View style={styles.postHeader}>
              <View style={styles.authorRow}>
                <Image
                  source={{ uri: post.author.profileImage }}
                  style={styles.authorImage}
                />
                <View style={styles.authorInfo}>
                  <Text style={styles.authorName}>{post.author.name}</Text>
                  <Text style={styles.postTime}>{post.createdAt}</Text>
                </View>
              </View>
              <Icon name="dots-vertical" size={20} color="#999" />
            </View>

            {/* Post Content */}
            <Text style={styles.postContent}>{post.content}</Text>

            {/* Post Image */}
            {post.image && (
              <Image source={{ uri: post.image }} style={styles.postImage} />
            )}

            {/* Post Stats */}
            <View style={styles.postStats}>
              <Text style={styles.statText}>{post.likes} likes</Text>
              <Text style={styles.statText}>{post.comments.length} comments</Text>
            </View>

            {/* Post Actions */}
            <View style={styles.postActions}>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => handleLike(post.id, post.liked)}
              >
                <Icon
                  name={post.liked ? 'heart' : 'heart-outline'}
                  size={18}
                  color={post.liked ? '#d32f2f' : '#999'}
                />
                <Text style={[styles.actionText, post.liked && styles.actionTextActive]}>
                  Like
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.actionButton}
                onPress={() =>
                  setExpandedComments(
                    expandedComments === post.id ? null : post.id
                  )
                }
              >
                <Icon name="comment-outline" size={18} color="#999" />
                <Text style={styles.actionText}>Comment</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionButton}>
                <Icon name="share-outline" size={18} color="#999" />
                <Text style={styles.actionText}>Share</Text>
              </TouchableOpacity>
            </View>

            {/* Comments */}
            {post.comments.length > 0 && (
              <View style={styles.commentsPreview}>
                {post.comments.slice(0, 2).map((comment) => (
                  <View key={comment.id} style={styles.commentItem}>
                    <Text style={styles.commentAuthor}>{comment.author.name}</Text>
                    <Text style={styles.commentContent}>{comment.content}</Text>
                  </View>
                ))}
                {post.comments.length > 2 && (
                  <Text style={styles.viewMoreComments}>
                    View {post.comments.length - 2} more comments
                  </Text>
                )}
              </View>
            )}

            {/* Comment Input */}
            {expandedComments === post.id && (
              <View style={styles.commentInputSection}>
                <TextInput
                  style={styles.commentInput}
                  placeholder="Write a comment..."
                  placeholderTextColor="#999"
                  value={newComment}
                  onChangeText={setNewComment}
                  multiline
                />
                <TouchableOpacity
                  style={styles.commentSubmitButton}
                  onPress={() => handleAddComment(post.id)}
                >
                  <Icon name="send" size={18} color="#6B46C1" />
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))
      )}

      <View style={styles.bottomPadding} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  createPostSection: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 8,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  createPostInput: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  createPostPlaceholder: {
    color: '#999',
    fontSize: 14,
  },
  postCard: {
    backgroundColor: '#fff',
    marginHorizontal: 8,
    marginBottom: 8,
    borderRadius: 12,
    padding: 12,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  authorRow: {
    flexDirection: 'row',
    flex: 1,
  },
  authorImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  authorInfo: {
    justifyContent: 'center',
  },
  authorName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  postTime: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  postContent: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 12,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
  postStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    marginBottom: 8,
  },
  statText: {
    fontSize: 12,
    color: '#999',
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  actionText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 6,
  },
  actionTextActive: {
    color: '#d32f2f',
  },
  commentsPreview: {
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  commentItem: {
    marginBottom: 8,
  },
  commentAuthor: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },
  commentContent: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  viewMoreComments: {
    fontSize: 12,
    color: '#6B46C1',
    fontWeight: '600',
  },
  commentInputSection: {
    flexDirection: 'row',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    alignItems: 'flex-end',
  },
  commentInput: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 12,
    color: '#333',
    maxHeight: 80,
  },
  commentSubmitButton: {
    marginLeft: 8,
    padding: 8,
  },
  centerContainer: {
    paddingVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#d32f2f',
    fontSize: 14,
    marginTop: 12,
  },
  emptyText: {
    color: '#999',
    fontSize: 14,
    marginTop: 12,
  },
  bottomPadding: {
    height: 20,
  },
});

export default CommunityScreen;
