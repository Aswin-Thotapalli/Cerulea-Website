import * as React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import { PostHogProvider } from '@/providers/PostHogProvider';
import ScrollDepthTracker from '@/components/analytics/ScrollDepthTracker';

export const metadata: Metadata = {
  title: 'Cerulea | Enterprise Blockchain Infrastructure',
  description: 'Scalable, secure, and regulatory-compliant blockchain infrastructure for enterprise and public sector.',
};

const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Microsoft Clarity — heatmaps, session recordings, rage-click detection */}
        {clarityId && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window,document,"clarity","script","${clarityId}");`}
          </Script>
        )}
      </head>
      <body>
        <PostHogProvider>
          <ThemeRegistry>
            <SiteHeader />
            {children}
            <SiteFooter />
          </ThemeRegistry>
          {/* Fires scroll depth events at 25/50/75/90/100% on every page */}
          <ScrollDepthTracker />
        </PostHogProvider>
      </body>
    </html>
  );
}
