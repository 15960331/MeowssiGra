'use client';

import { useState } from 'react';
import styled from '@emotion/styled';

import { ImageView } from '@/components/ImageView';
import { Header } from '@/components/Header';
import { useImages } from '@/hooks/useImages';
import { useViewMode } from '@/hooks/useViewMode';
import { useFitMode } from '@/hooks/useFitMode';
import { useMove } from '@/hooks/useMove';
import { useKeyPress } from '@/hooks/useKeyPress';

const Container = styled.div`
  width: 100%;
  height: 100svh;
  background-color: #0d0d0d;
`;

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
`;

export default function Home() {
  const { images, readImages } = useImages();
  const { viewMode, toggleViewMode } = useViewMode();
  const { fitMode, toggleFitMode } = useFitMode();
  const { imageIndex, canMoveForward, canMoveBack, moveForward, moveBack, resetIndex } = useMove({
    imageCount: images.length,
  });

  useKeyPress({ key: 'a', onPress: moveBack });
  useKeyPress({ key: 'd', onPress: moveForward });
  // useKeyPress({ key: 'v', onPress: toggleViewMode });
  useKeyPress({ key: 'f', onPress: toggleFitMode });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    readImages(e);
    resetIndex();
  };

  return (
    <Container>
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
      <StyledMain>
        <ImageView
          src={images[imageIndex]}
          fitMode={fitMode}
        />
      </StyledMain>
    </Container>
  );
}
