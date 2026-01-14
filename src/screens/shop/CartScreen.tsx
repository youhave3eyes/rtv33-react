import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useShopStore } from '../../store/shopStore';

const CartScreen = ({ navigation }: any) => {
  const { cart, removeFromCart, updateCartQuantity, getCartTotal, checkout } = useShopStore();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleRemove = (productId: string) => {
    removeFromCart(productId);
    Alert.alert('Removed', 'Item removed from cart');
  };

  const handleCheckout = async () => {
    if (cart.length === 0) {
      Alert.alert('Empty Cart', 'Please add items to your cart');
      return;
    }

    setIsCheckingOut(true);
    try {
      // In a real app, you would integrate with Stripe or another payment provider
      const order = await checkout('fake_payment_token');
      Alert.alert('Success', 'Order placed successfully!', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('ShopList'),
        },
      ]);
    } catch (error) {
      Alert.alert('Error', 'Failed to complete checkout');
    } finally {
      setIsCheckingOut(false);
    }
  };

  const subtotal = getCartTotal();
  const tax = subtotal * 0.1;
  const shipping = subtotal > 50 ? 0 : 10;
  const total = subtotal + tax + shipping;

  if (cart.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Icon name="shopping-outline" size={64} color="#ccc" />
        <Text style={styles.emptyTitle}>Your cart is empty</Text>
        <Text style={styles.emptySubtitle}>Add some conscious products to get started</Text>
        <TouchableOpacity
          style={styles.continueShoppingButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.continueShoppingText}>Continue Shopping</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.cartList} showsVerticalScrollIndicator={false}>
        {cart.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />

            <View style={styles.itemInfo}>
              <Text style={styles.itemName} numberOfLines={2}>
                {item.name}
              </Text>
              <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>

              <View style={styles.quantityRow}>
                <TouchableOpacity
                  onPress={() =>
                    updateCartQuantity(item.id, item.cartQuantity - 1)
                  }
                  style={styles.quantityButton}
                >
                  <Icon name="minus" size={16} color="#6B46C1" />
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item.cartQuantity}</Text>
                <TouchableOpacity
                  onPress={() =>
                    updateCartQuantity(item.id, item.cartQuantity + 1)
                  }
                  style={styles.quantityButton}
                >
                  <Icon name="plus" size={16} color="#6B46C1" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.itemRight}>
              <Text style={styles.itemTotal}>
                ${(item.price * item.cartQuantity).toFixed(2)}
              </Text>
              <TouchableOpacity
                onPress={() => handleRemove(item.id)}
                style={styles.removeButton}
              >
                <Icon name="trash-can-outline" size={20} color="#d32f2f" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Summary */}
      <View style={styles.summaryContainer}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Subtotal</Text>
          <Text style={styles.summaryValue}>${subtotal.toFixed(2)}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Shipping</Text>
          <Text style={styles.summaryValue}>
            {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
          </Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Tax (10%)</Text>
          <Text style={styles.summaryValue}>${tax.toFixed(2)}</Text>
        </View>

        <View style={[styles.summaryRow, styles.totalRow]}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
        </View>

        <TouchableOpacity
          style={[styles.checkoutButton, isCheckingOut && styles.checkoutButtonDisabled]}
          onPress={handleCheckout}
          disabled={isCheckingOut}
        >
          {isCheckingOut ? (
            <Text style={styles.checkoutButtonText}>Processing...</Text>
          ) : (
            <>
              <Icon name="lock-outline" size={18} color="#fff" />
              <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
            </>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.continueText}>Continue Shopping</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  cartList: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    padding: 12,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  itemName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6B46C1',
    marginTop: 4,
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityButton: {
    width: 28,
    height: 28,
    borderRadius: 4,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    marginHorizontal: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  itemRight: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  itemTotal: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  removeButton: {
    padding: 8,
  },
  summaryContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666',
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTopMargin: 12,
    marginTop: 12,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  totalValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6B46C1',
  },
  checkoutButton: {
    backgroundColor: '#6B46C1',
    flexDirection: 'row',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  checkoutButtonDisabled: {
    opacity: 0.6,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  continueButton: {
    marginTop: 12,
    paddingVertical: 12,
  },
  continueText: {
    fontSize: 14,
    color: '#6B46C1',
    fontWeight: '600',
    textAlign: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 16,
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#999',
    marginTop: 8,
  },
  continueShoppingButton: {
    backgroundColor: '#6B46C1',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 24,
  },
  continueShoppingText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default CartScreen;
