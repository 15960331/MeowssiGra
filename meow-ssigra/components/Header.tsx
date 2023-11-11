import { Flex } from '@chakra-ui/react';

type Props = {
  children: React.ReactElement;
};

export const Header: React.FC<Props> = ({ children }) => {
  return (
    <header>
      <Flex
        height="40px"
        width="100%"
        padding="4px"
        backgroundColor="gray.400"
        justifyContent="start"
        alignItems="center"
        gap="8px"
      >
        {children}
      </Flex>
    </header>
  );
};