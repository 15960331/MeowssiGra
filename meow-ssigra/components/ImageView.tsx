import { ImageProps, Img } from '@chakra-ui/react';
import { FitMode } from '@/types';

type Props = { src: string; fitMode: FitMode };

export const ImageView: React.FC<Props> = ({ src, fitMode }) => {
  const styleSet: Record<FitMode, ImageProps> = {
    vertical: {
      maxHeight: '100svh',
    },
    horizontal: {
      maxWidth: '100svw',
    },
  };

  return (
    <Img
      src={src}
      {...styleSet[fitMode]}
    />
  );
};
