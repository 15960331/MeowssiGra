// To use Chakra UI in server components
// https://chakra-ui.com/getting-started/nextjs-guide
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

export function Providers({ children }: Props) {
  return (
    <CacheProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  );
}
