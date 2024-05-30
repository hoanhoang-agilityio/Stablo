import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Stablo',
  description: 'Post Block Management',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
