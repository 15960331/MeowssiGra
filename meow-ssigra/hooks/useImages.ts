import { useCallback, useState } from 'react';
import { readFiles } from '@/utils/readFiles';

export const useImages = () => {
  const [images, setImages] = useState<string[]>([]);

  const readImages = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;

    const result = await readFiles(files);
    setImages(result);
  }, []);

  return { images, readImages };
};
