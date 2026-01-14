import axios, { AxiosInstance } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

export let api: AxiosInstance;

export const initializeApp = () => {
  api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
  });

  // Request interceptor to add auth token
  api.interceptors.request.use(
    async (config) => {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor to handle errors
  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response?.status === 401) {
        // Token expired, clear storage and redirect to login
        await AsyncStorage.removeItem('userToken');
        // Navigation will be handled by the app logic
      }
      return Promise.reject(error);
    }
  );

  return api;
};

export default api;
