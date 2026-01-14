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
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useShopStore } from '../../store/shopStore';

const ProductDetailScreen = ({ route, navigation }: any) => {
  const { productId } = route.params;
  const { currentProduct, loading, error, fetchProductDetail, addToCart } = useShopStore();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProductDetail(productId);
  }, [productId]);

  const handleAddToCart = () => {
    if (currentProduct) {
      addToCart(currentProduct, quantity);
      Alert.alert('Success', `${quantity} item(s) added to cart!`);
      setQuantity(1);
    }
  };

  const handleBuyNow = () => {
    if (currentProduct) {
      addToCart(currentProduct, quantity);
      navigation.navigate('Cart');
    }
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#6B46C1" />
      </View>
    );
  }

  if (error || !currentProduct) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error || 'Product not found'}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Product Image */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: currentProduct.image }} style={styles.productImage} />
        {!currentProduct.inStock && (
          <View style={styles.outOfStockBadge}>
            <Text style={styles.outOfStockText}>Out of Stock</Text>
          </View>
        )}
      </View>

      {/* Product Info */}
      <View style={styles.infoSection}>
        <View style={styles.header}>
          <View style={styles.titleColumn}>
            <Text style={styles.productName}>{currentProduct.name}</Text>
            <View style={styles.ratingRow}>
              <Icon name="star" size={18} color="#FFD700" />
              <Text style={styles.rating}>{currentProduct.rating}</Text>
              <Text style={styles.reviews}>({currentProduct.reviews} reviews)</Text>
            </View>
          </View>
          <Icon name="bookmark-outline" size={24} color="#6B46C1" />
        </View>

        <Text style={styles.category}>{currentProduct.category}</Text>

        <Text style={styles.description}>{currentProduct.description}</Text>

        {/* Price */}
        <View style={styles.priceSection}>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.price}>${currentProduct.price.toFixed(2)}</Text>
        </View>

        {/* Quantity Selector */}
        {currentProduct.inStock && (
          <View style={styles.quantitySection}>
            <Text style={styles.quantityLabel}>Quantity</Text>
            <View style={styles.quantitySelector}>
              <TouchableOpacity
                onPress={() => setQuantity(Math.max(1, quantity - 1))}
                style={styles.quantityButton}
              >
                <Icon name="minus" size={18} color="#6B46C1" />
              </TouchableOpacity>
              <Text style={styles.quantityValue}>{quantity}</Text>
              <TouchableOpacity
                onPress={() => setQuantity(quantity + 1)}
                style={styles.quantityButton}
              >
                <Icon name="plus" size={18} color="#6B46C1" />
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Details */}
        <View style={styles.detailsSection}>
          <Text style={styles.detailsTitle}>Product Details</Text>

          <View style={styles.detailItem}>
            <Icon name="truck-delivery-outline" size={20} color="#6B46C1" />
            <View style={styles.detailContent}>
              <Text style={styles.detailLabel}>Free Shipping</Text>
              <Text style={styles.detailValue}>On orders over $50</Text>
            </View>
          </View>

          <View style={styles.detailItem}>
            <Icon name="undo" size={20} color="#6B46C1" />
            <View style={styles.detailContent}>
              <Text style={styles.detailLabel}>Easy Returns</Text>
              <Text style={styles.detailValue}>30-day return policy</Text>
            </View>
          </View>

          <View style={styles.detailItem}>
            <Icon name="shield-check-outline" size={20} color="#6B46C1" />
            <View style={styles.detailContent}>
              <Text style={styles.detailLabel}>Secure Checkout</Text>
              <Text style={styles.detailValue}>100% secure payment</Text>
            </View>
          </View>
        </View>

        {/* Description Section */}
        <View style={styles.descriptionSection}>
          <Text style={styles.descriptionTitle}>About This Product</Text>
          <Text style={styles.descriptionText}>
            This conscious product is crafted with sustainable materials and ethical practices.
            We believe in creating products that are good for you and good for the planet.
          </Text>
        </View>

        {/* Action Buttons */}
        {currentProduct.inStock ? (
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.addToCartButton}
              onPress={handleAddToCart}
            >
              <Icon name="shopping-plus" size={20} color="#fff" />
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buyNowButton}
              onPress={handleBuyNow}
            >
              <Text style={styles.buyNowText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={styles.notifyButton}>
            <Icon name="bell-outline" size={20} color="#6B46C1" />
            <Text style={styles.notifyText}>Notify When Available</Text>
          </TouchableOpacity>
        )}
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
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 300,
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  outOfStockBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#d32f2f',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  outOfStockText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  infoSection: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 16,
    paddingTop: 20,
    marginTop: -20,
    zIndex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  titleColumn: {
    flex: 1,
  },
  productName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginLeft: 4,
  },
  reviews: {
    fontSize: 12,
    color: '#999',
    marginLeft: 4,
  },
  category: {
    fontSize: 12,
    color: '#6B46C1',
    fontWeight: '600',
    marginBottom: 12,
    textTransform: 'uppercase',
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 16,
  },
  priceSection: {
    marginBottom: 16,
  },
  priceLabel: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  price: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6B46C1',
  },
  quantitySection: {
    marginBottom: 20,
  },
  quantityLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 4,
    width: 140,
  },
  quantityButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityValue: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  detailsSection: {
    marginBottom: 20,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  detailsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  detailItem: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  detailContent: {
    flex: 1,
    marginLeft: 12,
  },
  detailLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },
  detailValue: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  descriptionSection: {
    marginBottom: 20,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  descriptionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 12,
    color: '#666',
    lineHeight: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: '#6B46C1',
    paddingVertical: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
  buyNowButton: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#6B46C1',
    justifyContent: 'center',
  },
  buyNowText: {
    color: '#6B46C1',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  notifyButton: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  notifyText: {
    color: '#6B46C1',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
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

export default ProductDetailScreen;
