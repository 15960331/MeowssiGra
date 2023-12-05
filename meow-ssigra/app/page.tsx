'use client';

import { FileInput } from '@/components/FileInput';
import { ImageView } from '@/components/ImageView';
import { Button } from '@chakra-ui/react';
import { Header } from '@/components/Header';
import { useImages } from '@/hooks/useImages';
import { useViewMode } from '@/hooks/useViewMode';
import { useFitMode } from '@/hooks/useFitMode';

export default function Home() {
  const { images, readImages } = useImages();
  const { viewMode, toggleViewMode } = useViewMode();
  const { fitMode, toggleFitMode } = useFitMode();

  return (
    <>
      <Header>
        <FileInput onChange={readImages} />
        <Button
          size="sm"
          width={100}
          isDisabled
          onClick={toggleViewMode}
        >
          {viewMode === 'normal' ? 'Normal' : 'Manga'}
        </Button>
        <Button
          size="sm"
          width={100}
          onClick={toggleFitMode}
        >
          {fitMode === 'vertical' ? 'Vertical' : 'Horizontal'}
        </Button>
      </Header>
      <main>
        <ImageView
          src={images[0]}
          fitMode={fitMode}
        />
      </main>
    </>
  );
}
