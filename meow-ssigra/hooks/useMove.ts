import { useCallback, useState } from 'react';

type Props = {
  imageCount: number;
};

export const useMove = ({ imageCount }: Props) => {
  const [imageIndex, setImageIndex] = useState(0);

  const canMoveForward = imageIndex < imageCount - 1;
  const canMoveBack = imageIndex > 0;

  const moveForward = useCallback(() => {
    setImageIndex((prev) => {
      if (!canMoveForward) return prev;
      return prev + 1;
    });
  }, [canMoveForward]);

  const moveBack = useCallback(() => {
    setImageIndex((prev) => {
      if (!canMoveBack) return prev;
      return prev - 1;
    });
  }, [canMoveBack]);

  const resetIndex = useCallback(() => {
    setImageIndex(0);
  }, []);

  return {
    imageIndex,
    canMoveForward,
    canMoveBack,
    moveForward,
    moveBack,
    resetIndex,
  };
};
