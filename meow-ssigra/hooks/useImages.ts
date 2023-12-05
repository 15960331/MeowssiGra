import { useCallback, useState } from 'react';
import { ImageReader } from '@/classes/ImageReader';

export const useImages = () => {
  const [images, setImages] = useState<string[]>([]);

  const readImages = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;

    const reader = new ImageReader();
    reader.read(files, (result) => {
      setImages(result);
    });
  }, []);

  return { images, readImages };
};
