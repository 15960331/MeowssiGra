import { Input } from '@chakra-ui/react';

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FileInput: React.FC<Props> = ({ onChange }) => {
  return (
    <Input
      type="file"
      size="sm"
      width="500px"
      border="50%"
      backgroundColor="gray.300"
      onChange={onChange}
    />
  );
};
