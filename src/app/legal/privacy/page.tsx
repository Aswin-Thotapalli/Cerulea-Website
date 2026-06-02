import * as React from 'react';
import type { Metadata } from 'next';
import { Box, Container, Typography, Divider } from '@mui/material';

export const metadata: Metadata = {
  title: 'Privacy Policy | Cerulea',
  description: 'How Caerulean Bytechains Private Limited collects, uses, and protects your information on the Cerulea website.',
};

const LAST_UPDATED = 'May 2026';

const sections = [
  {
    title: '1. Who we are',
    body: `Caerulean Bytechains Private Limited ("we", "our", "Cerulea") operates the website at cerulea.io. We are incorporated in India. For privacy-related queries, contact us at support@cerulea.io.`,
  },
  {
    title: '2. Information we collect',
    body: `We collect two categories of information:

Contact information — When you submit the contact form on this website, we collect your name, work email address, company or organisation name, and message content. This information is provided voluntarily by you.

Usage and technical data — When you visit cerulea.io, we automatically collect information about your visit using the analytics tools described in Section 4. This includes pages visited, time on page, scroll depth, clicks and interactions, your general geographic region (derived from IP address, not stored precisely), device type (desktop, mobile, tablet), operating system, browser type, screen resolution, and the website or search engine that referred you to us.`,
  },
  {
    title: '3. How we use your information',
    body: `We use contact information to respond to your enquiry, provide you with information about Cerulea products and services, and follow up on deployment or pilot conversations you initiate.

We use usage data to understand how visitors navigate the site, which pages and content are most valuable, where users encounter friction, and how to improve the website and product messaging. We do not sell your information to third parties under any circumstances.`,
  },
  {
    title: '4. Analytics and tracking tools',
    body: `We use the following third-party services to collect and analyse website usage data. By using this website, you consent to data being processed by these services under their respective privacy policies.

PostHog (PostHog, Inc.) — We use PostHog for analytics including page views, click tracking, custom events, and session recordings. Session recordings capture mouse movements, scrolls, and clicks within your browser session to help us understand user experience. PostHog derives geographic data (country, city, region) from your IP address. Your IP address is not stored in full. Data may be processed on servers in the United States. Privacy policy: posthog.com/privacy.

Microsoft Clarity (Microsoft Corporation) — We use Microsoft Clarity for heatmap visualisation, scroll maps, and session recordings. Clarity captures how users interact with our pages including mouse movements, clicks, and scroll behaviour. Data may be processed by Microsoft on servers in the United States. Privacy policy: privacy.microsoft.com.

If you wish to opt out of session recording, you may do so by disabling JavaScript in your browser, using a browser extension that blocks analytics scripts, or contacting us to opt out by email.`,
  },
  {
    title: '5. Infrastructure and data processors',
    body: `We work with the following service providers who process data on our behalf:

Vercel Inc. — Our website is hosted on Vercel's infrastructure. Vercel may process server logs containing IP addresses for security and reliability purposes.

Supabase Inc. — We use Supabase to store blog content and manage authenticated access to admin features. Contact form submissions are not stored in Supabase.

Resend Inc. — When you submit our contact form, your name, email, company, and message are transmitted via Resend's email delivery service to our team. Resend processes this information to deliver the email and retains send logs for a limited period per their data retention policy.

All processors are bound by data processing agreements and are required to implement appropriate security measures.`,
  },
  {
    title: '6. Cookies and local storage',
    body: `PostHog and Clarity use cookies and browser local storage to maintain anonymous visitor identifiers and session continuity. These are not used to serve advertising.

We do not use advertising cookies, retargeting pixels, or cross-site tracking technology. If you block all cookies, the website will continue to function; analytics data will simply not be collected from your session.`,
  },
  {
    title: '7. Data retention',
    body: `Contact form data — Emails received via the contact form are retained in our inbox for as long as required for business correspondence.

Analytics data — PostHog retains event data per its platform retention settings (default 1 year). Clarity retains recordings for 13 months.

We periodically review and purge data that is no longer required.`,
  },
  {
    title: '8. Your rights',
    body: `You have the right to request access to the personal data we hold about you, request correction of inaccurate data, request deletion of your data where there is no legitimate basis for continued processing, and object to processing where we rely on legitimate interests.

To exercise any of these rights, email us at support@cerulea.io with subject line "Privacy Request". We will respond within 30 days. We do not charge a fee for reasonable requests.

If you are located in the European Economic Area, you have rights under GDPR. If you are in India, your rights are governed by the Information Technology Act 2000 and applicable rules.`,
  },
  {
    title: '9. Children',
    body: `This website is not directed at individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe a minor has submitted information to us, contact us and we will delete it promptly.`,
  },
  {
    title: '10. Changes to this policy',
    body: `We may update this policy to reflect changes in our practices or applicable law. The "Last updated" date at the top of this page will reflect the revision date. Material changes will be reflected in an updated date. We encourage you to review this policy periodically.`,
  },
  {
    title: '11. Contact',
    body: `For all privacy-related questions: support@cerulea.io\n\nCaerulean Bytechains Private Limited\ncerulea.io`,
  },
];

export default function PrivacyPage() {
  return (
    <Box sx={{ bgcolor: '#FAFAFA', minHeight: '100vh', pb: 20 }}>

      {/* Hero */}
      <Box sx={{ pt: { xs: 16, md: 24 }, pb: { xs: 10, md: 14 }, bgcolor: '#0A192F', position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <Box sx={{ position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none', backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography sx={{ color: '#60A5FA', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: '0.75rem', mb: 3 }}>
            Legal
          </Typography>
          <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '2.5rem', md: '3.5rem' }, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#FFFFFF', mb: 3 }}>
            Privacy Policy
          </Typography>
          <Typography sx={{ color: '#94A3B8', fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.7 }}>
            How Caerulean Bytechains Private Limited collects, processes, and protects your information.
          </Typography>
          <Typography sx={{ color: '#475569', fontSize: '0.85rem', mt: 4 }}>Last updated: {LAST_UPDATED}</Typography>
        </Container>
      </Box>

      {/* Content */}
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, overflow: 'hidden' }}>
          {sections.map((section, i) => (
            <Box key={section.title}>
              <Box sx={{ p: { xs: 4, md: 5 } }}>
                <Typography sx={{ fontSize: '1.05rem', fontWeight: 800, color: '#0A192F', mb: 2 }}>
                  {section.title}
                </Typography>
                {section.body.split('\n\n').map((para, j) => (
                  <Typography key={j} sx={{ color: '#475569', lineHeight: 1.85, fontSize: '0.95rem', mb: j < section.body.split('\n\n').length - 1 ? 2 : 0 }}>
                    {para}
                  </Typography>
                ))}
              </Box>
              {i < sections.length - 1 && <Divider sx={{ borderColor: '#F1F5F9' }} />}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
