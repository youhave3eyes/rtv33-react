import { create } from 'zustand';
import { api } from '../services/api';

export interface Lesson {
  id: string;
  title: string;
  videoUrl: string;
  duration: number;
  completed: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  image: string;
  category: string;
  lessons: Lesson[];
  enrolled: boolean;
  progress: number;
  rating: number;
  reviewCount: number;
}

interface CourseStore {
  courses: Course[];
  currentCourse: Course | null;
  loading: boolean;
  error: string | null;
  
  fetchCourses: () => Promise<void>;
  fetchCourseDetail: (courseId: string) => Promise<void>;
  enrollCourse: (courseId: string) => Promise<void>;
  markLessonComplete: (courseId: string, lessonId: string) => Promise<void>;
  searchCourses: (query: string) => Promise<void>;
}

export const useCourseStore = create<CourseStore>((set) => ({
  courses: [],
  currentCourse: null,
  loading: false,
  error: null,

  fetchCourses: async () => {
    set({ loading: true, error: null });
    try {
      const response = await api.get('/courses');
      set({ courses: response.data, loading: false });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Failed to fetch courses',
        loading: false,
      });
    }
  },

  fetchCourseDetail: async (courseId: string) => {
    set({ loading: true, error: null });
    try {
      const response = await api.get(`/courses/${courseId}`);
      set({ currentCourse: response.data, loading: false });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Failed to fetch course',
        loading: false,
      });
    }
  },

  enrollCourse: async (courseId: string) => {
    try {
      await api.post(`/courses/${courseId}/enroll`);
      set((state) => ({
        currentCourse: state.currentCourse
          ? { ...state.currentCourse, enrolled: true }
          : null,
      }));
    } catch (error: any) {
      console.error('Enrollment error:', error);
      throw error;
    }
  },

  markLessonComplete: async (courseId: string, lessonId: string) => {
    try {
      await api.post(`/courses/${courseId}/lessons/${lessonId}/complete`);
      set((state) => ({
        currentCourse: state.currentCourse
          ? {
              ...state.currentCourse,
              lessons: state.currentCourse.lessons.map((lesson) =>
                lesson.id === lessonId ? { ...lesson, completed: true } : lesson
              ),
            }
          : null,
      }));
    } catch (error) {
      console.error('Mark complete error:', error);
      throw error;
    }
  },

  searchCourses: async (query: string) => {
    set({ loading: true, error: null });
    try {
      const response = await api.get('/courses/search', { params: { q: query } });
      set({ courses: response.data, loading: false });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Search failed',
        loading: false,
      });
    }
  },
}));
