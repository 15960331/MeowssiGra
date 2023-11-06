'use client';

import { useState } from 'react';
import { Img } from '@chakra-ui/react';

import { FileInput } from '@/components/FileInput';

export default function Home() {
  const [image, setImage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];

    const reader = new ImageReader();
    reader.read(file, (result) => {
      setImage(result);
    });
  };

  return (
    <main>
      <Img
        src={image}
        alt=""
      />
      <FileInput
        onChange={handleChange}
        // onDrop={handleDrop}
      />
    </main>
  );
}
