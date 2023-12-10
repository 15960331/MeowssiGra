import { useCallback, useState } from 'react';
import { readFiles } from '@/utils/readFiles';
import { findZip } from '@/utils/findZip';
import { readImagesFromZip } from '@/utils/readImagesFromZip';

export const useImages = () => {
  const [images, setImages] = useState<string[]>([]);

  const readImages = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;

    // TODO: setIsLoading(true);
    const zip = findZip(files);

    // TODO: display error (cant read multiple archives)
    // if (zip && files.length > 1) {}

    if (zip) {
      const result = await readImagesFromZip(zip);
      setImages(result);
      // TODO: setIsLoading(false);
      return;
    }

    const result = await readFiles(files);
    setImages(result);
    // TODO: setIsLoading(false);
  }, []);

  return { images, readImages };
};
