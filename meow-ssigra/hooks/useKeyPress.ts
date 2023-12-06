import { useCallback, useEffect } from 'react';

type Props = {
  key: string;
  onPress: () => void;
};

export const useKeyPress = ({ key, onPress }: Props) => {
  const onKeyup = useCallback(
    (e: KeyboardEvent) => {
      if (e.key !== key) return;
      onPress();
    },
    [key, onPress],
  );

  useEffect(() => {
    window.addEventListener('keyup', onKeyup);
    return () => window.removeEventListener('keyup', onKeyup);
  }, [key, onKeyup]);
};
