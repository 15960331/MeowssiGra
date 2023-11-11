'use client';

import { useState } from 'react';
import { AddIcon } from '@chakra-ui/icons';

import { FitMode } from '@/types';
import { ImageReader } from '@/classes/ImageReader';
import { FileInput } from '@/components/FileInput';
import { ImageView } from '@/components/ImageView';
import { IconButton, Switch } from '@chakra-ui/react';
import { Header } from '@/components/Header';

export default function Home() {
  const [image, setImage] = useState('');
  const [fitMode, setFitMode] = useState<FitMode>('vertical');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];

    const reader = new ImageReader();
    reader.read(file, (result) => {
      setImage(result);
    });
  };

  const handleFitModeChange = () => {
    setFitMode((prev) => {
      if (prev === 'vertical') return 'horizontal';
      return 'horizontal';
    });
  };

  return (
    <>
      <Header>
        <IconButton
          aria-label="load"
          size="sm"
          icon={<AddIcon />}
        />
      </Header>
      <main>
        <FileInput
          onChange={handleFileChange}
          // onDrop={handleDrop}
        />
        <Switch onChange={handleFitModeChange}>FitMode: {fitMode}</Switch>
        <ImageView
          src={image}
          fitMode={fitMode}
        />
      </main>
    </>
  );
}
