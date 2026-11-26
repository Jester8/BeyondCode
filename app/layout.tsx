import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/manrope';
import '@fontsource-variable/space-grotesk';
import './globals.css';
import { SiteFooter } from '@/components/site';
import { SiteHeader } from '@/components/site-header';
import { BackToTop } from '@/components/back-to-top';

export const metadata: Metadata = {
  title: {
    default: 'Beyond Code 2027 | The Business of Tech',
    template: '%s | Beyond Code 2027',
  },
  description:
    'A focused day for 200 tech professionals to trade real numbers, honest feedback and useful introductions. Saturday 3 April 2027 in Ibadan, Nigeria.',
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-paper font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-3 focus:font-bold focus:shadow-card"
        >
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <BackToTop />
      </body>
    </html>
  );
}
