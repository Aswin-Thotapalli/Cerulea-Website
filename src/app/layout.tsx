import * as React from 'react';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';

export const metadata: Metadata = {
  title: 'Cerulea | Enterprise Blockchain Infrastructure',
  description: 'Scalable, secure, and regulatory-compliant blockchain infrastructure for enterprise and public sector.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeRegistry>
        <Analytics />
      </body>
    </html>
  );
}