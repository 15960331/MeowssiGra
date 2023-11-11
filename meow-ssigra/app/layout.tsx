import type { Metadata } from 'next';
import { Providers } from './providers';

import './globals.css';

export const metadata: Metadata = {
  title: 'MeowssiGra',
  description: 'Image viewer',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
