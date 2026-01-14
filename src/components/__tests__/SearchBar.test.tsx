import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { SearchBar } from '../SearchBar';

describe('SearchBar', () => {
  const mockOnSearch = jest.fn();
  const mockOnClear = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const { getByPlaceholderText } = render(
      <SearchBar onSearch={mockOnSearch} />
    );

    expect(getByPlaceholderText('Search courses & products...')).toBeTruthy();
  });

  it('should render with custom placeholder', () => {
    const { getByPlaceholderText } = render(
      <SearchBar 
        onSearch={mockOnSearch}
        placeholder="Search products..."
      />
    );

    expect(getByPlaceholderText('Search products...')).toBeTruthy();
  });

  it('should update input value when typing', () => {
    const { getByPlaceholderText } = render(
      <SearchBar onSearch={mockOnSearch} />
    );

    const input = getByPlaceholderText('Search courses & products...');
    fireEvent.changeText(input, 'test query');

    expect(input.props.value).toBe('test query');
  });

  it('should call onSearch after debounce delay', async () => {
    jest.useFakeTimers();
    
    const { getByPlaceholderText } = render(
      <SearchBar onSearch={mockOnSearch} />
    );

    const input = getByPlaceholderText('Search courses & products...');
    fireEvent.changeText(input, 'test');

    // Fast-forward time by 500ms (debounce delay)
    jest.advanceTimersByTime(500);

    await waitFor(() => {
      expect(mockOnSearch).toHaveBeenCalledWith('test');
    });

    jest.useRealTimers();
  });

  it('should not call onSearch for empty query', async () => {
    jest.useFakeTimers();

    const { getByPlaceholderText } = render(
      <SearchBar onSearch={mockOnSearch} />
    );

    const input = getByPlaceholderText('Search courses & products...');
    fireEvent.changeText(input, '');

    jest.advanceTimersByTime(500);

    expect(mockOnSearch).not.toHaveBeenCalled();

    jest.useRealTimers();
  });

  it('should clear search when clear button is pressed', () => {
    const { getByPlaceholderText, getByTestId } = render(
      <SearchBar onSearch={mockOnSearch} onClear={mockOnClear} />
    );

    const input = getByPlaceholderText('Search courses & products...');
    fireEvent.changeText(input, 'test');

    const clearButton = getByTestId('clear-button');
    fireEvent.press(clearButton);

    expect(input.props.value).toBe('');
    expect(mockOnClear).toHaveBeenCalled();
  });

  it('should show loading indicator when loading prop is true', () => {
    const { getByTestId } = render(
      <SearchBar onSearch={mockOnSearch} loading={true} />
    );

    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('should not show clear button when query is empty', () => {
    const { queryByTestId } = render(
      <SearchBar onSearch={mockOnSearch} />
    );

    expect(queryByTestId('clear-button')).toBeNull();
  });

  it('should debounce multiple rapid changes', async () => {
    jest.useFakeTimers();

    const { getByPlaceholderText } = render(
      <SearchBar onSearch={mockOnSearch} />
    );

    const input = getByPlaceholderText('Search courses & products...');
    
    // Rapid typing
    fireEvent.changeText(input, 't');
    jest.advanceTimersByTime(100);
    fireEvent.changeText(input, 'te');
    jest.advanceTimersByTime(100);
    fireEvent.changeText(input, 'tes');
    jest.advanceTimersByTime(100);
    fireEvent.changeText(input, 'test');
    
    // Advance to debounce delay
    jest.advanceTimersByTime(500);

    // Should only call once with final value
    await waitFor(() => {
      expect(mockOnSearch).toHaveBeenCalledTimes(1);
      expect(mockOnSearch).toHaveBeenCalledWith('test');
    });

    jest.useRealTimers();
  });
});
