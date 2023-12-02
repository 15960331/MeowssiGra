import { ImageProps, Img } from '@chakra-ui/react';
import { FitMode } from '@/types';
import { HEADER_HEIGHT } from '@/constants';
import { getScrollbarWidth } from '@/utils/getScrollbarWidth';

type Props = { src: string; fitMode: FitMode };

export const ImageView: React.FC<Props> = ({ src, fitMode }) => {
  const styleSet: Record<FitMode, ImageProps> = {
    vertical: {
      maxHeight: `calc(100svh - ${HEADER_HEIGHT}px)`,
    },
    horizontal: {
      maxWidth: `calc(100svw - ${getScrollbarWidth}px`,
    },
  };

  return (
    <Img
      src={src}
      {...styleSet[fitMode]}
    />
  );
};
