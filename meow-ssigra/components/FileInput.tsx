import { SUPPORT_FORMAT } from '@/constants';
import { Input } from '@chakra-ui/react';

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FileInput: React.FC<Props> = ({ onChange }) => {
  const accept = Object.values(SUPPORT_FORMAT).join(', ');

  return (
    <Input
      type="file"
      accept={accept}
      multiple
      size="sm"
      width="500px"
      border="50%"
      backgroundColor="gray.300"
      onChange={onChange}
    />
  );
};
