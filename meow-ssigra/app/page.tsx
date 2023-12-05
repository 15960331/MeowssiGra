'use client';

import { Button, IconButton, Text } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

import { FileInput } from '@/components/FileInput';
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
  const { imageIndex, moveForward, moveBack, resetIndex } = useMove({ imageCount: images.length });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    readImages(e);
    resetIndex();
  };

  return (
    <>
      <Header>
        <FileInput onChange={handleChange} />
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

        <IconButton
          aria-label="back button"
          size="sm"
          icon={<ArrowBackIcon />}
          onClick={moveBack}
        />
        <IconButton
          aria-label="forward button"
          size="sm"
          icon={<ArrowForwardIcon />}
          onClick={moveForward}
        />
        <Text>
          {imageIndex}/{images.length}
        </Text>
      </Header>
      <main>
        <ImageView
          src={images[imageIndex]}
          fitMode={fitMode}
        />
      </main>
    </>
  );
}
