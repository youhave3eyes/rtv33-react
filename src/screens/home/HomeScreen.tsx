import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAuthStore } from '../../store/authStore';
import { useCourseStore } from '../../store/courseStore';
import { useShopStore } from '../../store/shopStore';
import { SearchBar } from '../../components/SearchBar';

const HomeScreen = ({ navigation }: any) => {
  const { user } = useAuthStore();
  const { courses, loading: coursesLoading, fetchCourses } = useCourseStore();
  const { products, loading: productsLoading, fetchProducts } = useShopStore();

  useEffect(() => {
    fetchCourses();
    fetchProducts();
  }, []);

  const featuredCourses = courses.slice(0, 3);
  const featuredProducts = products.slice(0, 3);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TouchableOpacity 
          style={styles.searchBarTouchable}
          onPress={() => navigation.navigate('Search')}
          activeOpacity={0.7}
        >
          <Icon name="magnify" size={20} color="#6B46C1" />
          <Text style={styles.searchBarPlaceholder}>Search courses & products...</Text>
        </TouchableOpacity>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Welcome back,</Text>
          <Text style={styles.userName}>{user?.name || 'Friend'}</Text>
        </View>
        <Image
          source={{
            uri: user?.profileImage || 'https://via.placeholder.com/50',
          }}
          style={styles.profileImage}
        />
      </View>

      {/* Featured Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Raise The Vibration</Text>
        <Text style={styles.bannerSubtitle}>Learn, Shop & Connect</Text>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => navigation.navigate('Courses', { screen: 'CoursesList' })}
        >
          <Icon name="book-open" size={32} color="#6B46C1" />
          <Text style={styles.actionTitle}>Courses</Text>
          <Text style={styles.actionDesc}>Free Learning</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => navigation.navigate('Shop', { screen: 'ShopList' })}
        >
          <Icon name="shopping-bag" size={32} color="#6B46C1" />
          <Text style={styles.actionTitle}>Shop</Text>
          <Text style={styles.actionDesc}>Conscious Gear</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionCard}
          onPress={() => navigation.navigate('Community', { screen: 'CommunityHome' })}
        >
          <Icon name="people" size={32} color="#6B46C1" />
          <Text style={styles.actionTitle}>Community</Text>
          <Text style={styles.actionDesc}>Connect</Text>
        </TouchableOpacity>
      </View>

      {/* Featured Courses */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Courses</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Courses', { screen: 'CoursesList' })}>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        {coursesLoading ? (
          <ActivityIndicator color="#6B46C1" size="large" />
        ) : (
          featuredCourses.map((course) => (
            <TouchableOpacity
              key={course.id}
              style={styles.courseCard}
              onPress={() =>
                navigation.navigate('Courses', {
                  screen: 'CourseDetail',
                  params: { courseId: course.id },
                })
              }
            >
              <Image source={{ uri: course.image }} style={styles.courseImage} />
              <View style={styles.courseInfo}>
                <Text style={styles.courseTitle}>{course.title}</Text>
                <Text style={styles.courseInstructor}>{course.instructor}</Text>
                <View style={styles.courseRating}>
                  <Icon name="star" size={14} color="#FFD700" />
                  <Text style={styles.ratingText}>{course.rating}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        )}
      </View>

      {/* Featured Products */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Conscious Products</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Shop', { screen: 'ShopList' })}>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        {productsLoading ? (
          <ActivityIndicator color="#6B46C1" size="large" />
        ) : (
          <View style={styles.productGrid}>
            {featuredProducts.map((product) => (
              <TouchableOpacity
                key={product.id}
                style={styles.productCard}
                onPress={() =>
                  navigation.navigate('Shop', {
                    screen: 'ProductDetail',
                    params: { productId: product.id },
                  })
                }
              >
                <Image source={{ uri: product.image }} style={styles.productImage} />
                <Text style={styles.productName} numberOfLines={2}>
                  {product.name}
                </Text>
                <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
                <View style={styles.productRating}>
                  <Icon name="star" size={12} color="#FFD700" />
                  <Text style={styles.productRatingText}>{product.rating}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  searchBarTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  searchBarPlaceholder: {
    flex: 1,
    fontSize: 14,
    color: '#999',
    marginLeft: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#fff',
  },
  greeting: {
    fontSize: 14,
    color: '#999',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  banner: {
    backgroundColor: '#6B46C1',
    marginHorizontal: 16,
    marginVertical: 12,
    padding: 20,
    borderRadius: 12,
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  bannerSubtitle: {
    fontSize: 14,
    color: '#e0e0e0',
    marginTop: 4,
  },
  quickActions: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginVertical: 12,
    justifyContent: 'space-between',
  },
  actionCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  actionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
    marginTop: 8,
  },
  actionDesc: {
    fontSize: 10,
    color: '#999',
    marginTop: 4,
  },
  section: {
    paddingHorizontal: 16,
    marginVertical: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAll: {
    fontSize: 14,
    color: '#6B46C1',
    fontWeight: '600',
  },
  courseCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
  },
  courseImage: {
    width: 100,
    height: 100,
  },
  courseInfo: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  courseTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  courseInstructor: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  courseRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  productGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  productCard: {
    width: '31%',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    padding: 8,
  },
  productImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  productName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6B46C1',
    marginTop: 4,
  },
  productRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  productRatingText: {
    fontSize: 10,
    color: '#666',
    marginLeft: 4,
  },
});

export default HomeScreen;
