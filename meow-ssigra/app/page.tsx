'use client';

import { useState } from 'react';

import { FitMode, ViewMode } from '@/types';
import { ImageReader } from '@/classes/ImageReader';
import { FileInput } from '@/components/FileInput';
import { ImageView } from '@/components/ImageView';
import { Button } from '@chakra-ui/react';
import { Header } from '@/components/Header';

export default function Home() {
  const [image, setImage] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('normal');
  const [fitMode, setFitMode] = useState<FitMode>('vertical');

  const readImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];

    const reader = new ImageReader();
    reader.read(file, (result) => {
      setImage(result);
    });
  };

  const toggleViewMode = () => {
    setViewMode((prev) => {
      if (prev === 'normal') return 'manga';
      return 'normal';
    });
  };

  const toggleFitMode = () => {
    setFitMode((prev) => {
      if (prev === 'vertical') return 'horizontal';
      return 'vertical';
    });
  };

  return (
    <>
      <Header>
        <Button
          size="sm"
          width={100}
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
        <FileInput
          onChange={readImages}
          // onDrop={handleDrop}
        />
        <ImageView
          src={image}
          fitMode={fitMode}
        />
      </main>
    </>
  );
}
