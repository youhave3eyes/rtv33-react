import { renderHook, act } from '@testing-library/react-native';
import { useCourseStore } from '../courseStore';
import { api } from '../../services/api';

jest.mock('../../services/api');

describe('courseStore', () => {
  const mockCourses = [
    {
      id: '1',
      title: 'React Native Basics',
      description: 'Learn the fundamentals',
      instructor: 'John Doe',
      image: 'image1.jpg',
      category: 'development',
      lessons: [],
      enrolled: false,
      progress: 0,
      rating: 4.5,
      reviewCount: 100,
    },
    {
      id: '2',
      title: 'Advanced TypeScript',
      description: 'Master TypeScript',
      instructor: 'Jane Smith',
      image: 'image2.jpg',
      category: 'development',
      lessons: [],
      enrolled: true,
      progress: 50,
      rating: 4.8,
      reviewCount: 200,
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    useCourseStore.setState({ courses: [], currentCourse: null, loading: false, error: null });
  });

  describe('fetchCourses', () => {
    it('should fetch courses successfully', async () => {
      (api.get as jest.Mock).mockResolvedValue({ data: mockCourses });

      const { result } = renderHook(() => useCourseStore());

      await act(async () => {
        await result.current.fetchCourses();
      });

      expect(api.get).toHaveBeenCalledWith('/courses');
      expect(result.current.courses).toEqual(mockCourses);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBeNull();
    });

    it('should handle fetch error', async () => {
      const mockError = { response: { data: { message: 'Network error' } } };
      (api.get as jest.Mock).mockRejectedValue(mockError);

      const { result } = renderHook(() => useCourseStore());

      await act(async () => {
        await result.current.fetchCourses();
      });

      expect(result.current.error).toBe('Network error');
      expect(result.current.loading).toBe(false);
    });
  });

  describe('fetchCourseById', () => {
    it('should fetch a specific course', async () => {
      const mockCourse = mockCourses[0];
      (api.get as jest.Mock).mockResolvedValue({ data: mockCourse });

      const { result } = renderHook(() => useCourseStore());

      await act(async () => {
        await result.current.fetchCourseById('1');
      });

      expect(api.get).toHaveBeenCalledWith('/courses/1');
      expect(result.current.currentCourse).toEqual(mockCourse);
    });
  });

  describe('enrollCourse', () => {
    it('should enroll in a course', async () => {
      const updatedCourse = { ...mockCourses[0], enrolled: true };
      (api.post as jest.Mock).mockResolvedValue({ data: updatedCourse });

      const { result } = renderHook(() => useCourseStore());

      // Set initial state
      act(() => {
        useCourseStore.setState({ courses: mockCourses });
      });

      await act(async () => {
        await result.current.enrollCourse('1');
      });

      expect(api.post).toHaveBeenCalledWith('/courses/1/enroll');
      const enrolledCourse = result.current.courses.find(c => c.id === '1');
      expect(enrolledCourse?.enrolled).toBe(true);
    });
  });

  describe('searchCourses', () => {
    it('should search courses', async () => {
      const searchResults = [mockCourses[0]];
      (api.get as jest.Mock).mockResolvedValue({ data: searchResults });

      const { result } = renderHook(() => useCourseStore());

      await act(async () => {
        await result.current.searchCourses('React');
      });

      expect(api.get).toHaveBeenCalledWith('/courses/search', { params: { q: 'React' } });
      expect(result.current.courses).toEqual(searchResults);
    });
  });

  describe('markLessonComplete', () => {
    it('should mark a lesson as complete', async () => {
      const mockCourse = {
        ...mockCourses[0],
        lessons: [
          { id: 'lesson1', title: 'Intro', videoUrl: 'url', duration: 10, completed: false },
        ],
      };

      (api.post as jest.Mock).mockResolvedValue({ data: { success: true } });

      const { result } = renderHook(() => useCourseStore());

      act(() => {
        useCourseStore.setState({ currentCourse: mockCourse });
      });

      await act(async () => {
        await result.current.markLessonComplete('1', 'lesson1');
      });

      expect(api.post).toHaveBeenCalledWith('/courses/1/lessons/lesson1/complete');
      expect(result.current.currentCourse?.lessons[0].completed).toBe(true);
    });
  });
});
