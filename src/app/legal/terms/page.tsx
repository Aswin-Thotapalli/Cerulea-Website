import * as React from 'react';
import type { Metadata } from 'next';
import { Box, Container, Typography, Divider } from '@mui/material';

export const metadata: Metadata = {
  title: 'Terms of Service | Cerulea',
  description: 'Terms governing use of the Cerulea website and informational materials provided by Caerulean Bytechains Private Limited.',
};

const LAST_UPDATED = 'May 2026';

const sections = [
  {
    title: '1. Acceptance',
    body: `By accessing or using the Cerulea website at cerulea.io, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use this website. These Terms apply to the cerulea.io website and any related informational materials published by Caerulean Bytechains Private Limited. They do not govern the use of any Cerulea software products, APIs, or deployed infrastructure, which are governed by separate agreements entered into with our team.`,
  },
  {
    title: '2. Who we are',
    body: `Caerulean Bytechains Private Limited ("we", "Cerulea", "us") is a company incorporated under the laws of India. We develop and operate blockchain infrastructure software and services under the Cerulea brand. Contact: support@cerulea.io.`,
  },
  {
    title: '3. Permitted use',
    body: `You may access this website for lawful, personal, and informational purposes. You agree not to:

— Attempt to gain unauthorised access to any part of the website or its underlying systems.
— Use automated tools to scrape, crawl, or harvest data from the website at a rate that disrupts normal operation.
— Reproduce, distribute, or create derivative works from website content without written permission.
— Use the website in any manner that violates applicable laws or regulations in your jurisdiction.
— Submit false, misleading, or fraudulent information via the contact form or any other communication channel.`,
  },
  {
    title: '4. Intellectual property',
    body: `All content on this website — including but not limited to text, product descriptions, diagrams, design elements, brand assets, and the Cerulea name and logo — is the property of Caerulean Bytechains Private Limited or is licensed for use by us. All rights are reserved.

You may share links to this website and reference Cerulea's public product information for non-commercial informational purposes. Any other reproduction, redistribution, or commercial use requires prior written consent from Caerulean Bytechains Private Limited.`,
  },
  {
    title: '5. Contact form and communications',
    body: `When you submit the contact form on this website, you consent to us processing your name, email address, company name, and message content for the purpose of responding to your enquiry and communicating about Cerulea products and services. This information is transmitted via our email delivery provider (Resend) and is not shared with third parties beyond what is described in our Privacy Policy.

We may follow up on enquiries that appear to represent a genuine business interest. You may opt out of further communication at any time by replying to any email from us with a request to stop.`,
  },
  {
    title: '6. No warranties',
    body: `This website and all materials published on it are provided on an "as is" and "as available" basis for informational purposes only. Caerulean Bytechains Private Limited makes no representations or warranties of any kind, express or implied, regarding the accuracy, completeness, reliability, or fitness for a particular purpose of any information on this website.

Product descriptions, capability statements, and roadmap information represent our current intent and are subject to change. Nothing on this website constitutes a binding commitment regarding software functionality, availability, or timelines unless expressly agreed in a written contract with our team.`,
  },
  {
    title: '7. Limitation of liability',
    body: `To the fullest extent permitted by applicable law, Caerulean Bytechains Private Limited, its directors, employees, and affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of or inability to use this website, including but not limited to loss of data, business interruption, or reliance on information published here.

This limitation applies regardless of whether we have been advised of the possibility of such damages and regardless of the legal theory on which a claim is based.`,
  },
  {
    title: '8. Third-party links',
    body: `This website may contain links to third-party websites, documentation, or services. These links are provided for convenience only. Caerulean Bytechains Private Limited does not endorse, control, or accept responsibility for the content, privacy practices, or availability of any linked third-party site.`,
  },
  {
    title: '9. Privacy',
    body: `Use of this website is also governed by our Privacy Policy, which describes how we collect, use, and protect your information, including the analytics and session recording tools we use. Please review our Privacy Policy at cerulea.io/legal/privacy.`,
  },
  {
    title: '10. Governing law',
    body: `These Terms are governed by the laws of India. Any disputes arising from or related to these Terms or your use of this website shall be subject to the exclusive jurisdiction of the courts of India. If you access this website from outside India, you do so at your own risk and are responsible for compliance with local laws.`,
  },
  {
    title: '11. Changes to these Terms',
    body: `We may revise these Terms at any time. The "Last updated" date at the top of this page will reflect the most recent revision. Your continued use of the website after changes are published constitutes acceptance of the updated Terms. If you do not agree to revised Terms, stop using the website.`,
  },
  {
    title: '12. Contact',
    body: `Questions about these Terms: support@cerulea.io\n\nCaerulean Bytechains Private Limited\ncerulea.io`,
  },
];

export default function TermsPage() {
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
            Terms of Service
          </Typography>
          <Typography sx={{ color: '#94A3B8', fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.7 }}>
            Terms governing use of the Cerulea website and related informational materials.
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
                  <Typography key={j} sx={{ color: '#475569', lineHeight: 1.85, fontSize: '0.95rem', mb: j < section.body.split('\n\n').length - 1 ? 2 : 0, whiteSpace: 'pre-line' }}>
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
