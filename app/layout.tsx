import "./globals.css"
import type { Metadata } from "next"
import Script from "next/script"
import { TooltipProvider } from "@/components/ui/tooltip"
import { AOSInit } from "@/components/AOSInit"
import { PostHogProvider } from "@/providers/PostHogProvider"
import ScrollDepthTracker from "@/components/analytics/ScrollDepthTracker"
import WebVitalsTracker from "@/components/analytics/WebVitalsTracker"

const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID
const linkedInId = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID

const SITE_URL = "https://cerulea.io"
const SITE_DESCRIPTION =
  "Cerulea is a no-code blockchain platform by Caerulean Bytechains. Design data models, asset schemas, and governance rules visually and compile them into deployable public or private network state, no smart-contract code."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cerulea, The No-Code Blockchain Engine",
    template: "%s, Cerulea",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Cerulea",
  alternates: { canonical: "/" },
  icons: {
    icon: "/cerulea-logo.png",
    shortcut: "/favicon.ico",
    apple: "/cerulea-logo.png",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Cerulea",
    title: "Cerulea, The No-Code Blockchain Engine",
    description: SITE_DESCRIPTION,
    images: [{ url: "/cerulea-logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cerulea, The No-Code Blockchain Engine",
    description: SITE_DESCRIPTION,
    images: ["/cerulea-logo.png"],
  },
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } }
    : {}),
}

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://cerulea.io/#organization",
  name: "Caerulean Bytechains Private Limited",
  alternateName: "Cerulea",
  legalName: "Caerulean Bytechains Private Limited",
  url: "https://cerulea.io",
  logo: "https://cerulea.io/cerulea-logo.png",
  foundingDate: "2021-08-24",
  slogan: "Blockchain for Good",
  identifier: {
    "@type": "PropertyValue",
    propertyID: "CIN",
    value: "U72900TG2021PTC154300",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Secunderabad",
    addressRegion: "Telangana",
    postalCode: "500062",
    addressCountry: "IN",
  },
  sameAs: [
    "https://in.linkedin.com/company/cbytechains",
    "https://cbytechains.com",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
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
      <body className="bg-background text-foreground antialiased">
        <PostHogProvider>
          <AOSInit />
          <TooltipProvider>{children}</TooltipProvider>
          <ScrollDepthTracker />
          <WebVitalsTracker />
        </PostHogProvider>
      </body>
    </html>
  )
}
