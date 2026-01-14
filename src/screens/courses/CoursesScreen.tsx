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
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useCourseStore } from '../../store/courseStore';

const CoursesScreen = ({ navigation }: any) => {
  const { courses, loading, error, fetchCourses, searchCourses } = useCourseStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 0) {
      searchCourses(query);
    } else {
      fetchCourses();
    }
  };

  const categories = ['all', 'wellness', 'spirituality', 'yoga', 'meditation', 'health'];

  const filteredCourses = selectedCategory === 'all'
    ? courses
    : courses.filter((course) => course.category.toLowerCase() === selectedCategory);

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="magnify" size={20} color="#999" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search courses..."
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      {/* Categories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesScroll}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryTag,
              selectedCategory === category && styles.categoryTagActive,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.categoryTextActive,
              ]}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Courses List */}
      {loading ? (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color="#6B46C1" />
        </View>
      ) : error ? (
        <View style={styles.centerContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : filteredCourses.length === 0 ? (
        <View style={styles.centerContainer}>
          <Icon name="book-outline" size={48} color="#ccc" />
          <Text style={styles.emptyText}>No courses found</Text>
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.coursesList}>
          {filteredCourses.map((course) => (
            <TouchableOpacity
              key={course.id}
              style={styles.courseCard}
              onPress={() =>
                navigation.navigate('CourseDetail', { courseId: course.id })
              }
            >
              <Image source={{ uri: course.image }} style={styles.courseImage} />
              <View style={styles.courseContent}>
                <View style={styles.courseHeader}>
                  <Text style={styles.courseTitle}>{course.title}</Text>
                  {course.enrolled && (
                    <View style={styles.enrolledBadge}>
                      <Text style={styles.enrolledText}>Enrolled</Text>
                    </View>
                  )}
                </View>
                <Text style={styles.instructor}>{course.instructor}</Text>
                <Text style={styles.description} numberOfLines={2}>
                  {course.description}
                </Text>

                <View style={styles.courseFooter}>
                  <View style={styles.rating}>
                    <Icon name="star" size={14} color="#FFD700" />
                    <Text style={styles.ratingText}>
                      {course.rating} ({course.reviewCount})
                    </Text>
                  </View>
                  {course.enrolled && (
                    <View style={styles.progressBar}>
                      <View
                        style={[
                          styles.progress,
                          { width: `${course.progress}%` },
                        ]}
                      />
                    </View>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  searchInput: {
    flex: 1,
    padding: 10,
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
  },
  categoriesScroll: {
    paddingHorizontal: 16,
    marginBottom: 12,
    backgroundColor: '#fff',
    paddingVertical: 12,
  },
  categoryTag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 8,
  },
  categoryTagActive: {
    backgroundColor: '#6B46C1',
    borderColor: '#6B46C1',
  },
  categoryText: {
    fontSize: 12,
    color: '#666',
  },
  categoryTextActive: {
    color: '#fff',
  },
  coursesList: {
    paddingHorizontal: 16,
  },
  courseCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  courseImage: {
    width: 120,
    height: 120,
  },
  courseContent: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  courseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  courseTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
  enrolledBadge: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  enrolledText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
  },
  instructor: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  description: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  courseFooter: {
    marginTop: 8,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#e0e0e0',
    borderRadius: 2,
    marginTop: 6,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#4CAF50',
  },
  centerContainer: {
    flex: 1,
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
});

export default CoursesScreen;
