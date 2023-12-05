import { useCallback, useState } from 'react';
import { ViewMode } from '@/types';

export const useViewMode = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('normal');

  const toggleViewMode = useCallback(() => {
    setViewMode((prev) => {
      if (prev === 'normal') return 'manga';
      return 'normal';
    });
  }, []);

  return { viewMode, toggleViewMode };
};
