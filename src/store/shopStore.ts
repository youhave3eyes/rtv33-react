import { create } from 'zustand';
import { api } from '../services/api';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  quantity?: number;
}

export interface CartItem extends Product {
  cartQuantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'completed' | 'shipped' | 'delivered';
  createdAt: string;
}

interface ShopStore {
  products: Product[];
  cart: CartItem[];
  orders: Order[];
  currentProduct: Product | null;
  loading: boolean;
  error: string | null;
  
  fetchProducts: (category?: string) => Promise<void>;
  fetchProductDetail: (productId: string) => Promise<void>;
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  checkout: (paymentToken: string) => Promise<Order>;
  fetchOrders: () => Promise<void>;
  searchProducts: (query: string) => Promise<void>;
  getCartTotal: () => number;
}

export const useShopStore = create<ShopStore>((set, get) => ({
  products: [],
  cart: [],
  orders: [],
  currentProduct: null,
  loading: false,
  error: null,

  fetchProducts: async (category?: string) => {
    set({ loading: true, error: null });
    try {
      const params = category ? { category } : {};
      const response = await api.get('/products', { params });
      set({ products: response.data, loading: false });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Failed to fetch products',
        loading: false,
      });
    }
  },

  fetchProductDetail: async (productId: string) => {
    set({ loading: true, error: null });
    try {
      const response = await api.get(`/products/${productId}`);
      set({ currentProduct: response.data, loading: false });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Failed to fetch product',
        loading: false,
      });
    }
  },

  addToCart: (product: Product, quantity: number) => {
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, cartQuantity: item.cartQuantity + quantity }
              : item
          ),
        };
      }
      return {
        cart: [...state.cart, { ...product, cartQuantity: quantity }],
      };
    });
  },

  removeFromCart: (productId: string) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    }));
  },

  updateCartQuantity: (productId: string, quantity: number) => {
    if (quantity <= 0) {
      get().removeFromCart(productId);
      return;
    }
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item, cartQuantity: quantity } : item
      ),
    }));
  },

  checkout: async (paymentToken: string) => {
    try {
      const response = await api.post('/orders', {
        items: get().cart,
        paymentToken,
      });
      set({ cart: [] });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Checkout failed');
    }
  },

  fetchOrders: async () => {
    try {
      const response = await api.get('/orders');
      set({ orders: response.data });
    } catch (error) {
      console.error('Failed to fetch orders:', error);
    }
  },

  searchProducts: async (query: string) => {
    set({ loading: true, error: null });
    try {
      const response = await api.get('/products/search', { params: { q: query } });
      set({ products: response.data, loading: false });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Search failed',
        loading: false,
      });
    }
  },

  getCartTotal: () => {
    return get().cart.reduce((total, item) => total + item.price * item.cartQuantity, 0);
  },
}));
