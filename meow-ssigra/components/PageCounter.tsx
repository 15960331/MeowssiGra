import { Text } from '@chakra-ui/react';

type Props = {
  currentPage: number;
  totalPage: number;
};

export const PageCounter: React.FC<Props> = ({ currentPage, totalPage }) => {
  return (
    <Text>
      {currentPage}/{totalPage}
    </Text>
  );
};
