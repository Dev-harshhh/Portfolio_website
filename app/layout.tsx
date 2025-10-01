import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import LenisProvider from '@/components/LenisProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Harsh Kumar - Full Stack Developer',
  description: 'Portfolio of Harsh Kumar, a passionate full stack developer specializing in React, Node.js, and modern web technologies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-900 text-white antialiased`}>
        <LenisProvider>
          <ScrollProgressBar />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}