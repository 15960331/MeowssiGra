// 'use client';

import { Input } from '@chakra-ui/react';

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FileInput: React.FC<Props> = ({ onChange }) => {
  return (
    <Input
      type="file"
      onChange={onChange}
      // onDrop={onDrop}
    />
  );
};
