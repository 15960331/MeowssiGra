import { Button, Flex, IconButton } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

import { HEADER_HEIGHT } from '@/constants';
import { FitMode, ViewMode } from '@/types';

import { FileInput } from './FileInput';
import { PageCounter } from './PageCounter';

type Props = {
  fileProps: {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  viewModeProps: {
    viewMode: ViewMode;
    onClick: () => void;
  };
  fitModeProps: {
    fitMode: FitMode;
    onClick: () => void;
  };
  backProps: {
    disabled: boolean;
    onClick: () => void;
  };
  forwardProps: {
    disabled: boolean;
    onClick: () => void;
  };
  pageCounterProps: {
    currentPage: number;
    totalPage: number;
  };
};

export const Header: React.FC<Props> = ({
  fileProps,
  viewModeProps,
  fitModeProps,
  backProps,
  forwardProps,
  pageCounterProps,
}) => {
  return (
    <header>
      <Flex
        height={`${HEADER_HEIGHT}px`}
        width="100%"
        padding="4px"
        backgroundColor="gray.400"
        justifyContent="start"
        alignItems="center"
        gap="8px"
      >
        <FileInput onChange={fileProps.onChange} />
        <Button
          size="sm"
          width={100}
          isDisabled
          onClick={viewModeProps.onClick}
        >
          {viewModeProps.viewMode === 'normal' ? 'Normal' : 'Manga'}
        </Button>
        <Button
          size="sm"
          width={100}
          onClick={fitModeProps.onClick}
        >
          {fitModeProps.fitMode === 'vertical' ? 'Vertical' : 'Horizontal'}
        </Button>
        <IconButton
          aria-label="back button"
          size="sm"
          icon={<ArrowBackIcon />}
          isDisabled={backProps.disabled}
          onClick={backProps.onClick}
        />
        <IconButton
          aria-label="forward button"
          size="sm"
          icon={<ArrowForwardIcon />}
          isDisabled={forwardProps.disabled}
          onClick={forwardProps.onClick}
        />
        <PageCounter
          currentPage={pageCounterProps.currentPage}
          totalPage={pageCounterProps.totalPage}
        />
      </Flex>
    </header>
  );
};
