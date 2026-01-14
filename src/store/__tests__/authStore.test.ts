import { renderHook, act } from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuthStore } from '../authStore';
import { api } from '../../services/api';

jest.mock('../../services/api');

describe('authStore', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    useAuthStore.setState({ user: null, userToken: null, isLoading: false, error: null });
  });

  describe('login', () => {
    it('should successfully login a user', async () => {
      const mockUser = {
        id: '1',
        email: 'test@example.com',
        name: 'Test User',
        enrolledCourses: [],
      };
      const mockToken = 'test-token-123';

      (api.post as jest.Mock).mockResolvedValue({
        data: { user: mockUser, token: mockToken },
      });

      const { result } = renderHook(() => useAuthStore());

      await act(async () => {
        await result.current.login('test@example.com', 'password123');
      });

      expect(api.post).toHaveBeenCalledWith('/auth/login', {
        email: 'test@example.com',
        password: 'password123',
      });
      expect(AsyncStorage.setItem).toHaveBeenCalledWith('userToken', mockToken);
      expect(result.current.user).toEqual(mockUser);
      expect(result.current.userToken).toBe(mockToken);
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBeNull();
    });

    it('should handle login failure', async () => {
      const mockError = { response: { data: { message: 'Invalid credentials' } } };
      (api.post as jest.Mock).mockRejectedValue(mockError);

      const { result } = renderHook(() => useAuthStore());

      await act(async () => {
        await result.current.login('test@example.com', 'wrongpassword');
      });

      expect(result.current.error).toBe('Invalid credentials');
      expect(result.current.user).toBeNull();
      expect(result.current.isLoading).toBe(false);
    });
  });

  describe('signup', () => {
    it('should successfully signup a new user', async () => {
      const mockUser = {
        id: '1',
        email: 'newuser@example.com',
        name: 'New User',
        enrolledCourses: [],
      };
      const mockToken = 'new-token-456';

      (api.post as jest.Mock).mockResolvedValue({
        data: { user: mockUser, token: mockToken },
      });

      const { result } = renderHook(() => useAuthStore());

      await act(async () => {
        await result.current.signup('newuser@example.com', 'password123', 'New User');
      });

      expect(api.post).toHaveBeenCalledWith('/auth/signup', {
        email: 'newuser@example.com',
        password: 'password123',
        name: 'New User',
      });
      expect(result.current.user).toEqual(mockUser);
      expect(result.current.userToken).toBe(mockToken);
    });
  });

  describe('logout', () => {
    it('should successfully logout user', async () => {
      (api.post as jest.Mock).mockResolvedValue({});

      const { result } = renderHook(() => useAuthStore());

      // Set initial logged-in state
      act(() => {
        useAuthStore.setState({
          user: { id: '1', email: 'test@example.com', name: 'Test', enrolledCourses: [] },
          userToken: 'token',
        });
      });

      await act(async () => {
        await result.current.logout();
      });

      expect(api.post).toHaveBeenCalledWith('/auth/logout');
      expect(AsyncStorage.removeItem).toHaveBeenCalledWith('userToken');
      expect(result.current.user).toBeNull();
      expect(result.current.userToken).toBeNull();
    });
  });

  describe('initialize', () => {
    it('should load user from token on initialize', async () => {
      const mockToken = 'stored-token';
      const mockUser = {
        id: '1',
        email: 'test@example.com',
        name: 'Test User',
        enrolledCourses: [],
      };

      (AsyncStorage.getItem as jest.Mock).mockResolvedValue(mockToken);
      (api.get as jest.Mock).mockResolvedValue({ data: mockUser });

      const { result } = renderHook(() => useAuthStore());

      await act(async () => {
        await result.current.initialize();
      });

      expect(AsyncStorage.getItem).toHaveBeenCalledWith('userToken');
      expect(api.get).toHaveBeenCalledWith('/auth/me');
      expect(result.current.user).toEqual(mockUser);
      expect(result.current.userToken).toBe(mockToken);
    });

    it('should handle no stored token', async () => {
      (AsyncStorage.getItem as jest.Mock).mockResolvedValue(null);

      const { result } = renderHook(() => useAuthStore());

      await act(async () => {
        await result.current.initialize();
      });

      expect(result.current.user).toBeNull();
      expect(result.current.isLoading).toBe(false);
    });
  });
});
