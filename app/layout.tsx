import { Poppins } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import { Toaster } from 'sonner';
import GoogleProvider from '@/components/common/GoogleProvider';
import NextTopLoader from 'nextjs-toploader';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}  antialiased w-svw overflow-x-hidden`}>
        <NextTopLoader />
        <GoogleProvider>
          <Providers>{children}</Providers>
        </GoogleProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
