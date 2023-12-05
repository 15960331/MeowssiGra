'use client';

import { useState } from 'react';

import { ImageReader } from '@/classes/ImageReader';
import { FileInput } from '@/components/FileInput';
import { ImageView } from '@/components/ImageView';
import { Button } from '@chakra-ui/react';
import { Header } from '@/components/Header';
import { useViewMode } from '@/hooks/useViewMode';
import { useFitMode } from '@/hooks/useFitMode';

export default function Home() {
  const [image, setImage] = useState('');
  const { viewMode, toggleViewMode } = useViewMode();
  const { fitMode, toggleFitMode } = useFitMode();

  const readImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];

    const reader = new ImageReader();
    reader.read(file, (result) => {
      setImage(result);
    });
  };

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
          src={image}
          fitMode={fitMode}
        />
      </main>
    </>
  );
}
