import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
  useWindowDimensions,
} from 'react-native';
import { useCourseStore } from '../../store/courseStore';
import { useShopStore } from '../../store/shopStore';
import { SearchBar } from '../../components/SearchBar';
import { MaterialIcons } from '@expo/vector-icons';

export const SearchScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'courses' | 'products'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const courseStore = useCourseStore();
  const shopStore = useShopStore();
  const { width } = useWindowDimensions();

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    if (query.length > 2) {
      if (activeTab === 'all' || activeTab === 'courses') {
        await courseStore.searchCourses(query);
      }
      if (activeTab === 'all' || activeTab === 'products') {
        await shopStore.searchProducts(query);
      }
    }
  };

  const handleClear = () => {
    setSearchQuery('');
  };

  const isLoading = courseStore.loading || shopStore.loading;
  const hasCourses = courseStore.courses.length > 0;
  const hasProducts = shopStore.products.length > 0;
  const showNoResults = searchQuery.length > 2 && !hasCourses && !hasProducts && !isLoading;

  const renderCourseCard = ({ item }: any) => (
    <TouchableOpacity style={styles.courseCard}>
      <Image source={{ uri: item.image }} style={styles.courseImage} />
      <View style={styles.courseContent}>
        <Text style={styles.courseTitle} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.courseInstructor} numberOfLines={1}>
          {item.instructor}
        </Text>
        <View style={styles.courseFooter}>
          <View style={styles.ratingContainer}>
            <MaterialIcons name="star" size={14} color="#FFB800" />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
          <Text style={styles.reviewCount}>({item.reviewCount})</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderProductCard = ({ item }: any) => (
    <TouchableOpacity
      style={[styles.productCard, { width: (width - 48) / 2 }]}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productContent}>
        <Text style={styles.productName} numberOfLines={2}>
          {item.name}
        </Text>
        <View style={styles.priceRatingContainer}>
          <Text style={styles.price}>${item.price}</Text>
          <View style={styles.ratingSmall}>
            <MaterialIcons name="star" size={12} color="#FFB800" />
            <Text style={styles.ratingSmallText}>{item.rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search courses & products..."
        onSearch={handleSearch}
        loading={isLoading}
        onClear={handleClear}
      />

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        {(['all', 'courses', 'products'] as const).map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#6B46C1" />
            <Text style={styles.loadingText}>Searching...</Text>
          </View>
        ) : showNoResults ? (
          <View style={styles.noResultsContainer}>
            <MaterialIcons name="search-off" size={64} color="#DDD" />
            <Text style={styles.noResultsTitle}>No Results Found</Text>
            <Text style={styles.noResultsSubtitle}>
              Try different keywords or browse our categories
            </Text>
          </View>
        ) : (
          <>
            {/* Courses Section */}
            {(activeTab === 'all' || activeTab === 'courses') && hasCourses && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>
                  Courses ({courseStore.courses.length})
                </Text>
                <FlatList
                  data={courseStore.courses}
                  renderItem={renderCourseCard}
                  keyExtractor={(item) => item.id}
                  scrollEnabled={false}
                />
              </View>
            )}

            {/* Products Section */}
            {(activeTab === 'all' || activeTab === 'products') && hasProducts && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>
                  Products ({shopStore.products.length})
                </Text>
                <FlatList
                  data={shopStore.products}
                  renderItem={renderProductCard}
                  keyExtractor={(item) => item.id}
                  numColumns={2}
                  columnWrapperStyle={styles.productRow}
                  scrollEnabled={false}
                />
              </View>
            )}

            {/* Welcome Message */}
            {!searchQuery && (
              <View style={styles.welcomeContainer}>
                <MaterialIcons name="search" size={48} color="#6B46C1" />
                <Text style={styles.welcomeTitle}>Start Searching</Text>
                <Text style={styles.welcomeText}>
                  Find courses and products that inspire you
                </Text>
              </View>
            )}
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 12,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  tab: {
    marginRight: 16,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#6B46C1',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#999',
  },
  activeTabText: {
    color: '#6B46C1',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  section: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  courseCard: {
    flexDirection: 'row',
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  courseImage: {
    width: 100,
    height: 100,
  },
  courseContent: {
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
    color: '#666',
    marginTop: 4,
  },
  courseFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
    marginLeft: 4,
  },
  reviewCount: {
    fontSize: 12,
    color: '#999',
    marginLeft: 6,
  },
  productRow: {
    justifyContent: 'space-between',
  },
  productCard: {
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  productImage: {
    width: '100%',
    height: 120,
  },
  productContent: {
    padding: 10,
  },
  productName: {
    fontSize: 13,
    fontWeight: '500',
    color: '#333',
  },
  priceRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
    color: '#6B46C1',
  },
  ratingSmall: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  ratingSmallText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#333',
    marginLeft: 3,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 200,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666',
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 300,
  },
  noResultsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginTop: 16,
  },
  noResultsSubtitle: {
    fontSize: 14,
    color: '#999',
    marginTop: 8,
    textAlign: 'center',
  },
  welcomeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 300,
    paddingVertical: 40,
  },
  welcomeTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginTop: 16,
  },
  welcomeText: {
    fontSize: 14,
    color: '#999',
    marginTop: 8,
  },
});
