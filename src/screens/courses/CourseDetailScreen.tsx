import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useCourseStore } from '../../store/courseStore';

const CourseDetailScreen = ({ route, navigation }: any) => {
  const { courseId } = route.params;
  const {
    currentCourse,
    loading,
    error,
    fetchCourseDetail,
    enrollCourse,
    markLessonComplete,
  } = useCourseStore();
  const [expandedLesson, setExpandedLesson] = useState<string | null>(null);

  useEffect(() => {
    fetchCourseDetail(courseId);
  }, [courseId]);

  const handleEnroll = async () => {
    try {
      await enrollCourse(courseId);
      Alert.alert('Success', 'You have enrolled in this course!');
    } catch (error) {
      Alert.alert('Error', 'Failed to enroll in course');
    }
  };

  const handleMarkComplete = async (lessonId: string) => {
    try {
      await markLessonComplete(courseId, lessonId);
      Alert.alert('Success', 'Lesson marked as complete!');
    } catch (error) {
      Alert.alert('Error', 'Failed to mark lesson complete');
    }
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#6B46C1" />
      </View>
    );
  }

  if (error || !currentCourse) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error || 'Course not found'}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Course Image */}
      <Image source={{ uri: currentCourse.image }} style={styles.courseImage} />

      {/* Course Info */}
      <View style={styles.infoSection}>
        <View style={styles.titleRow}>
          <View style={styles.titleColumn}>
            <Text style={styles.courseTitle}>{currentCourse.title}</Text>
            <Text style={styles.instructor}>{currentCourse.instructor}</Text>
          </View>
          <Icon name="bookmark-outline" size={24} color="#6B46C1" />
        </View>

        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <Icon name="star" size={16} color="#FFD700" />
            <Text style={styles.statText}>{currentCourse.rating}</Text>
          </View>
          <View style={styles.stat}>
            <Icon name="message-text-outline" size={16} color="#999" />
            <Text style={styles.statText}>{currentCourse.reviewCount} reviews</Text>
          </View>
          <View style={styles.stat}>
            <Icon name="book-open-outline" size={16} color="#999" />
            <Text style={styles.statText}>{currentCourse.lessons.length} lessons</Text>
          </View>
        </View>

        <Text style={styles.description}>{currentCourse.description}</Text>

        {/* Enrollment Button */}
        {!currentCourse.enrolled ? (
          <TouchableOpacity style={styles.enrollButton} onPress={handleEnroll}>
            <Text style={styles.enrollButtonText}>Enroll Now - Free</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.progressSection}>
            <Text style={styles.progressTitle}>Your Progress</Text>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progress,
                  { width: `${currentCourse.progress}%` },
                ]}
              />
            </View>
            <Text style={styles.progressText}>{currentCourse.progress}% Complete</Text>
          </View>
        )}
      </View>

      {/* Lessons */}
      <View style={styles.lessonsSection}>
        <Text style={styles.lessonsSectionTitle}>Course Content</Text>
        {currentCourse.lessons.map((lesson, index) => (
          <View key={lesson.id}>
            <TouchableOpacity
              style={styles.lessonHeader}
              onPress={() =>
                setExpandedLesson(expandedLesson === lesson.id ? null : lesson.id)
              }
            >
              <View style={styles.lessonTitleRow}>
                <View style={styles.lessonNumber}>
                  <Text style={styles.lessonNumberText}>{index + 1}</Text>
                </View>
                <View style={styles.lessonTitleColumn}>
                  <Text style={styles.lessonTitle}>{lesson.title}</Text>
                  <Text style={styles.lessonDuration}>
                    {lesson.duration} min
                  </Text>
                </View>
                {lesson.completed && (
                  <Icon name="check-circle" size={20} color="#4CAF50" />
                )}
              </View>
              <Icon
                name={
                  expandedLesson === lesson.id
                    ? 'chevron-up'
                    : 'chevron-down'
                }
                size={24}
                color="#999"
              />
            </TouchableOpacity>

            {expandedLesson === lesson.id && currentCourse.enrolled && (
              <View style={styles.lessonContent}>
                <TouchableOpacity
                  style={styles.playButton}
                  onPress={() =>
                    navigation.navigate('VideoPlayer', { lesson })
                  }
                >
                  <Icon name="play-circle" size={48} color="#6B46C1" />
                  <Text style={styles.playButtonText}>Watch Video</Text>
                </TouchableOpacity>

                {!lesson.completed && (
                  <TouchableOpacity
                    style={styles.completeButton}
                    onPress={() => handleMarkComplete(lesson.id)}
                  >
                    <Icon name="check" size={18} color="#fff" />
                    <Text style={styles.completeButtonText}>Mark as Complete</Text>
                  </TouchableOpacity>
                )}
              </View>
            )}
          </View>
        ))}
      </View>

      {/* About Section */}
      <View style={styles.aboutSection}>
        <Text style={styles.aboutTitle}>About This Course</Text>
        <View style={styles.aboutItem}>
          <Icon name="clock-outline" size={20} color="#6B46C1" />
          <View style={styles.aboutContent}>
            <Text style={styles.aboutLabel}>Duration</Text>
            <Text style={styles.aboutValue}>
              {currentCourse.lessons.reduce((sum, l) => sum + l.duration, 0)} minutes
            </Text>
          </View>
        </View>

        <View style={styles.aboutItem}>
          <Icon name="tag-outline" size={20} color="#6B46C1" />
          <View style={styles.aboutContent}>
            <Text style={styles.aboutLabel}>Category</Text>
            <Text style={styles.aboutValue}>{currentCourse.category}</Text>
          </View>
        </View>
      </View>

      <View style={styles.bottomPadding} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  courseImage: {
    width: '100%',
    height: 250,
  },
  infoSection: {
    backgroundColor: '#fff',
    padding: 16,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  titleColumn: {
    flex: 1,
  },
  courseTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  instructor: {
    fontSize: 14,
    color: '#999',
  },
  statsRow: {
    flexDirection: 'row',
    marginBottom: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  stat: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 16,
  },
  enrollButton: {
    backgroundColor: '#6B46C1',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  enrollButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  progressSection: {
    marginTop: 12,
  },
  progressTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progress: {
    height: '100%',
    backgroundColor: '#4CAF50',
  },
  progressText: {
    fontSize: 12,
    color: '#999',
  },
  lessonsSection: {
    paddingHorizontal: 16,
    marginTop: 12,
    marginBottom: 12,
  },
  lessonsSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  lessonHeader: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
  },
  lessonTitleRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  lessonNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#6B46C1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  lessonNumberText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  lessonTitleColumn: {
    flex: 1,
  },
  lessonTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  lessonDuration: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  lessonContent: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  playButton: {
    alignItems: 'center',
    marginBottom: 12,
  },
  playButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B46C1',
    marginTop: 8,
  },
  completeButton: {
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
  aboutSection: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  aboutTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  aboutItem: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  aboutContent: {
    flex: 1,
    marginLeft: 12,
  },
  aboutLabel: {
    fontSize: 12,
    color: '#999',
  },
  aboutValue: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
    marginTop: 4,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#d32f2f',
    fontSize: 14,
  },
  bottomPadding: {
    height: 20,
  },
});

export default CourseDetailScreen;
