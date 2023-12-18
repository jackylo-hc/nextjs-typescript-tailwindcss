import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inconsolata } from 'next/font/google';

const inconsolata = Inconsolata({ subsets: ['latin'], display: 'auto' });

export const metadata: Metadata = {
  title: 'Title',
  description: 'Description',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>
        {children}
      </body>
    </html>
  );
}
