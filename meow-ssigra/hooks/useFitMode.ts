import { useCallback, useState } from 'react';
import { FitMode } from '@/types';

export const useFitMode = () => {
  const [fitMode, setFitMode] = useState<FitMode>('vertical');

  const toggleFitMode = useCallback(() => {
    setFitMode((prev) => {
      if (prev === 'vertical') return 'horizontal';
      return 'vertical';
    });
  }, []);

  return { fitMode, toggleFitMode };
};
