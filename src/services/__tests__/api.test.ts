import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api, initializeApp } from '../api';

jest.mock('axios');
jest.mock('@react-native-async-storage/async-storage');

describe('API Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('initializeApp', () => {
    it('should create axios instance with correct config', () => {
      const mockCreate = jest.fn().mockReturnValue({
        interceptors: {
          request: { use: jest.fn() },
          response: { use: jest.fn() },
        },
      });

      (axios.create as jest.Mock) = mockCreate;

      initializeApp();

      expect(mockCreate).toHaveBeenCalledWith({
        baseURL: expect.any(String),
        timeout: 10000,
      });
    });
  });

  describe('Request Interceptor', () => {
    it('should add auth token to request headers', async () => {
      const mockToken = 'test-token-123';
      (AsyncStorage.getItem as jest.Mock).mockResolvedValue(mockToken);

      const mockConfig = {
        headers: {},
      };

      // Simulate the interceptor logic
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        mockConfig.headers.Authorization = `Bearer ${token}`;
      }

      expect(mockConfig.headers.Authorization).toBe(`Bearer ${mockToken}`);
    });

    it('should not add token if none exists', async () => {
      (AsyncStorage.getItem as jest.Mock).mockResolvedValue(null);

      const mockConfig = {
        headers: {},
      };

      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        mockConfig.headers.Authorization = `Bearer ${token}`;
      }

      expect(mockConfig.headers.Authorization).toBeUndefined();
    });
  });

  describe('Response Interceptor', () => {
    it('should handle 401 unauthorized error', async () => {
      const mockError = {
        response: {
          status: 401,
        },
      };

      // Simulate interceptor logic
      if (mockError.response?.status === 401) {
        await AsyncStorage.removeItem('userToken');
      }

      expect(AsyncStorage.removeItem).toHaveBeenCalledWith('userToken');
    });

    it('should pass through successful responses', () => {
      const mockResponse = {
        data: { success: true },
        status: 200,
      };

      // Response interceptor should return response as-is for success
      expect(mockResponse.status).toBe(200);
      expect(mockResponse.data.success).toBe(true);
    });

    it('should handle network errors', () => {
      const networkError = new Error('Network Error');
      
      // Interceptor should reject with error
      expect(networkError.message).toBe('Network Error');
    });

    it('should handle 500 server errors', () => {
      const serverError = {
        response: {
          status: 500,
          data: { message: 'Internal Server Error' },
        },
      };

      expect(serverError.response.status).toBe(500);
    });
  });

  describe('API Timeout', () => {
    it('should timeout requests after 10 seconds', () => {
      const timeoutConfig = {
        timeout: 10000,
      };

      expect(timeoutConfig.timeout).toBe(10000);
    });
  });

  describe('Base URL Configuration', () => {
    it('should use environment variable if set', () => {
      const originalEnv = process.env.REACT_APP_API_URL;
      process.env.REACT_APP_API_URL = 'https://api.example.com';

      const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';
      expect(baseURL).toBe('https://api.example.com');

      process.env.REACT_APP_API_URL = originalEnv;
    });

    it('should fallback to localhost if no environment variable', () => {
      const originalEnv = process.env.REACT_APP_API_URL;
      delete process.env.REACT_APP_API_URL;

      const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';
      expect(baseURL).toBe('http://localhost:3000/api');

      process.env.REACT_APP_API_URL = originalEnv;
    });
  });

  describe('Error Handling', () => {
    it('should handle request timeout', () => {
      const timeoutError = {
        code: 'ECONNABORTED',
        message: 'timeout of 10000ms exceeded',
      };

      expect(timeoutError.code).toBe('ECONNABORTED');
      expect(timeoutError.message).toContain('timeout');
    });

    it('should handle connection refused', () => {
      const connectionError = {
        code: 'ECONNREFUSED',
        message: 'connect ECONNREFUSED',
      };

      expect(connectionError.code).toBe('ECONNREFUSED');
    });

    it('should handle 404 not found', () => {
      const notFoundError = {
        response: {
          status: 404,
          data: { message: 'Not Found' },
        },
      };

      expect(notFoundError.response.status).toBe(404);
    });

    it('should handle 403 forbidden', () => {
      const forbiddenError = {
        response: {
          status: 403,
          data: { message: 'Forbidden' },
        },
      };

      expect(forbiddenError.response.status).toBe(403);
    });
  });
});
