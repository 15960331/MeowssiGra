import { useCallback, useState } from 'react';

type Props = {
  imageCount: number;
};

export const useMove = ({ imageCount }: Props) => {
  const [imageIndex, setImageIndex] = useState(0);

  const moveForward = useCallback(() => {
    setImageIndex((prev) => {
      const newIndex = prev + 1;
      if (newIndex >= imageCount) return prev;

      return newIndex;
    });
  }, [imageCount]);

  const moveBack = useCallback(() => {
    setImageIndex((prev) => {
      const newIndex = prev - 1;
      if (newIndex < 0) return prev;

      return newIndex;
    });
  }, []);

  const resetIndex = useCallback(() => {
    setImageIndex(0);
  }, []);

  return { imageIndex, moveForward, moveBack, resetIndex };
};
