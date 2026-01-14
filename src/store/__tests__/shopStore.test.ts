import { renderHook, act } from '@testing-library/react-native';
import { useShopStore } from '../shopStore';
import { api } from '../../services/api';

jest.mock('../../services/api');

describe('shopStore', () => {
  const mockProducts = [
    {
      id: '1',
      name: 'Organic Tea',
      description: 'Premium organic tea',
      price: 29.99,
      image: 'tea.jpg',
      category: 'food',
      rating: 4.5,
      reviews: 50,
      inStock: true,
    },
    {
      id: '2',
      name: 'Crystal Set',
      description: 'Healing crystals',
      price: 49.99,
      image: 'crystals.jpg',
      category: 'wellness',
      rating: 4.8,
      reviews: 120,
      inStock: true,
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    useShopStore.setState({
      products: [],
      cart: [],
      orders: [],
      loading: false,
      error: null,
    });
  });

  describe('fetchProducts', () => {
    it('should fetch products successfully', async () => {
      (api.get as jest.Mock).mockResolvedValue({ data: mockProducts });

      const { result } = renderHook(() => useShopStore());

      await act(async () => {
        await result.current.fetchProducts();
      });

      expect(api.get).toHaveBeenCalledWith('/products');
      expect(result.current.products).toEqual(mockProducts);
      expect(result.current.loading).toBe(false);
    });

    it('should handle fetch error', async () => {
      const mockError = { response: { data: { message: 'Failed to load' } } };
      (api.get as jest.Mock).mockRejectedValue(mockError);

      const { result } = renderHook(() => useShopStore());

      await act(async () => {
        await result.current.fetchProducts();
      });

      expect(result.current.error).toBe('Failed to load');
      expect(result.current.loading).toBe(false);
    });
  });

  describe('cart management', () => {
    it('should add item to cart', () => {
      const { result } = renderHook(() => useShopStore());

      act(() => {
        result.current.addToCart(mockProducts[0]);
      });

      expect(result.current.cart).toHaveLength(1);
      expect(result.current.cart[0]).toEqual({
        ...mockProducts[0],
        cartQuantity: 1,
      });
    });

    it('should increase quantity if item already in cart', () => {
      const { result } = renderHook(() => useShopStore());

      act(() => {
        result.current.addToCart(mockProducts[0]);
        result.current.addToCart(mockProducts[0]);
      });

      expect(result.current.cart).toHaveLength(1);
      expect(result.current.cart[0].cartQuantity).toBe(2);
    });

    it('should remove item from cart', () => {
      const { result } = renderHook(() => useShopStore());

      act(() => {
        result.current.addToCart(mockProducts[0]);
        result.current.addToCart(mockProducts[1]);
      });

      expect(result.current.cart).toHaveLength(2);

      act(() => {
        result.current.removeFromCart('1');
      });

      expect(result.current.cart).toHaveLength(1);
      expect(result.current.cart[0].id).toBe('2');
    });

    it('should update item quantity', () => {
      const { result } = renderHook(() => useShopStore());

      act(() => {
        result.current.addToCart(mockProducts[0]);
      });

      act(() => {
        result.current.updateQuantity('1', 5);
      });

      expect(result.current.cart[0].cartQuantity).toBe(5);
    });

    it('should clear cart', () => {
      const { result } = renderHook(() => useShopStore());

      act(() => {
        result.current.addToCart(mockProducts[0]);
        result.current.addToCart(mockProducts[1]);
      });

      expect(result.current.cart).toHaveLength(2);

      act(() => {
        result.current.clearCart();
      });

      expect(result.current.cart).toHaveLength(0);
    });
  });

  describe('getCartTotal', () => {
    it('should calculate correct cart total', () => {
      const { result } = renderHook(() => useShopStore());

      act(() => {
        result.current.addToCart(mockProducts[0]); // 29.99 * 1
        result.current.addToCart(mockProducts[1]); // 49.99 * 1
      });

      const total = result.current.getCartTotal();
      expect(total).toBeCloseTo(79.98, 2);
    });

    it('should calculate total with multiple quantities', () => {
      const { result } = renderHook(() => useShopStore());

      act(() => {
        result.current.addToCart(mockProducts[0]);
        result.current.updateQuantity('1', 3); // 29.99 * 3 = 89.97
      });

      const total = result.current.getCartTotal();
      expect(total).toBeCloseTo(89.97, 2);
    });
  });

  describe('checkout', () => {
    it('should checkout successfully', async () => {
      const mockOrder = {
        id: 'order123',
        items: [],
        total: 79.98,
        status: 'pending' as const,
      };

      (api.post as jest.Mock).mockResolvedValue({ data: mockOrder });

      const { result } = renderHook(() => useShopStore());

      act(() => {
        result.current.addToCart(mockProducts[0]);
        result.current.addToCart(mockProducts[1]);
      });

      await act(async () => {
        await result.current.checkout();
      });

      expect(api.post).toHaveBeenCalledWith('/orders', expect.any(Object));
      expect(result.current.cart).toHaveLength(0);
    });
  });

  describe('searchProducts', () => {
    it('should search products', async () => {
      const searchResults = [mockProducts[0]];
      (api.get as jest.Mock).mockResolvedValue({ data: searchResults });

      const { result } = renderHook(() => useShopStore());

      await act(async () => {
        await result.current.searchProducts('tea');
      });

      expect(api.get).toHaveBeenCalledWith('/products/search', { params: { q: 'tea' } });
      expect(result.current.products).toEqual(searchResults);
    });
  });
});
