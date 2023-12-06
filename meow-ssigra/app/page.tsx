'use client';

import { ImageView } from '@/components/ImageView';
import { Header } from '@/components/Header';
import { useImages } from '@/hooks/useImages';
import { useViewMode } from '@/hooks/useViewMode';
import { useFitMode } from '@/hooks/useFitMode';
import { useMove } from '@/hooks/useMove';

export default function Home() {
  const { images, readImages } = useImages();
  const { viewMode, toggleViewMode } = useViewMode();
  const { fitMode, toggleFitMode } = useFitMode();
  const { imageIndex, canMoveForward, canMoveBack, moveForward, moveBack, resetIndex } = useMove({
    imageCount: images.length,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    readImages(e);
    resetIndex();
  };

  return (
    <>
      <Header
        fileProps={{
          onChange: handleFileChange,
        }}
        viewModeProps={{
          viewMode,
          onClick: toggleViewMode,
        }}
        fitModeProps={{
          fitMode,
          onClick: toggleFitMode,
        }}
        backProps={{
          disabled: !canMoveBack,
          onClick: moveBack,
        }}
        forwardProps={{
          disabled: !canMoveForward,
          onClick: moveForward,
        }}
        pageCounterProps={{
          currentPage: images.length === 0 ? 0 : imageIndex + 1,
          totalPage: images.length,
        }}
      />
      <main>
        <ImageView
          src={images[imageIndex]}
          fitMode={fitMode}
        />
      </main>
    </>
  );
}
