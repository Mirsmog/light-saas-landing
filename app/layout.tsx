import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

import { cn } from '@/utils/cn';
import './globals.css';
import Header from '@/components/header';
import { Footer } from '@/components/footer';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Light Saas - Landing Page',
  description: 'Saas project on NEXT.JS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(dmSans.className, `antialiased`)}>
        <div className="flex flex-col min-h-dvh">
          <Header />
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
