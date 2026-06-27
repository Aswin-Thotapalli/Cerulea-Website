import * as React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Plus_Jakarta_Sans } from 'next/font/google';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import { PostHogProvider } from '@/providers/PostHogProvider';
import ScrollDepthTracker from '@/components/analytics/ScrollDepthTracker';
import WebVitalsTracker from '@/components/analytics/WebVitalsTracker';

export const metadata: Metadata = {
  title: 'Cerulea | Enterprise Blockchain Infrastructure',
  description: 'Scalable, secure, and regulatory-compliant blockchain infrastructure for enterprise and public sector.',
  icons: {
    icon: '/cerulea-logo.png',
    shortcut: '/cerulea-logo.png',
    apple: '/cerulea-logo.png',
  },
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } }
    : {}),
};

const clarityId       = process.env.NEXT_PUBLIC_CLARITY_ID;
const linkedInId      = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
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

        {/* LinkedIn Insight Tag — B2B company-level visitor attribution */}
        {linkedInId && (
          <Script id="linkedin-insight" strategy="afterInteractive">
            {`_linkedin_partner_id="${linkedInId}";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);(function(l){if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]}var s=document.getElementsByTagName("script")[0];var b=document.createElement("script");b.type="text/javascript";b.async=true;b.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";s.parentNode.insertBefore(b,s)})(window.lintrk);`}
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
          <ScrollDepthTracker />
          <WebVitalsTracker />
        </PostHogProvider>
      </body>
    </html>
  );
}
