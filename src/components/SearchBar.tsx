import React, { useState, useCallback, useEffect, useRef } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  loading?: boolean;
  onClear?: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = React.memo(({
  placeholder = 'Search courses & products...',
  onSearch,
  loading = false,
  onClear,
}) => {
  const [query, setQuery] = useState('');
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);

  const handleSearch = useCallback(
    (text: string) => {
      setQuery(text);
      
      // Clear existing timer
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }

      // Debounce search with 500ms delay
      if (text.length > 0) {
        debounceTimer.current = setTimeout(() => {
          onSearch(text);
        }, 500);
      } else if (onClear) {
        onClear();
      }
    },
    [onSearch, onClear]
  );

  const handleClear = useCallback(() => {
    setQuery('');
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
    if (onClear) {
      onClear();
    }
  }, [onClear]);

  return (
    <View style={styles.container}>
      <MaterialIcons name="search" size={24} color="#6B46C1" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#999"
        value={query}
        onChangeText={handleSearch}
        editable={!loading}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {loading ? (
        <ActivityIndicator color="#6B46C1" size="small" testID="loading-indicator" />
      ) : query ? (
        <TouchableOpacity onPress={handleClear} style={styles.clearButton} testID="clear-button">
          <MaterialIcons name="close" size={20} color="#6B46C1" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingHorizontal: 12,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
  },
  clearButton: {
    padding: 4,
  },
});
