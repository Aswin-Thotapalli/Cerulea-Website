import * as React from 'react';
import { Box, Container, Paper, Typography, Stack, Divider } from '@mui/material';
import PageHeader from '@/components/blocks/PageHeader';

export default function PrivacyPage() {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <PageHeader
          eyebrow="Legal"
          title="Privacy Policy"
          subtitle="This policy describes how Caerulean Bytechains Private Limited collects and uses information on the Cerulea website and related communications."
        />

        <Paper variant="outlined" sx={{ p: { xs: 3, md: 4 }, mt: 3 }}>
          <Stack spacing={2}>
            <Typography fontWeight={950}>1. Information we collect</Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.9 }}>
              We may collect information you provide to us via forms or communications, such as name, email address, organization, and message content.
              We may also collect basic technical information such as browser type, device type, approximate location, and site usage events for performance and security.
            </Typography>

            <Divider />

            <Typography fontWeight={950}>2. How we use information</Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.9 }}>
              We use collected information to respond to inquiries, provide product information, improve site reliability, prevent abuse, and maintain basic security monitoring.
              We do not sell your personal information.
            </Typography>

            <Divider />

            <Typography fontWeight={950}>3. Cookies and analytics</Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.9 }}>
              The Cerulea website may use cookies or similar technologies for basic functionality and performance insights. If we use analytics tools, they are used to understand aggregate
              usage patterns, not to identify you personally without your consent.
            </Typography>

            <Divider />

            <Typography fontWeight={950}>4. Sharing</Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.9 }}>
              We may share information with service providers who help operate the website or communications, under appropriate confidentiality and security expectations.
              We may also share information if required by law.
            </Typography>

            <Divider />

            <Typography fontWeight={950}>5. Data security</Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.9 }}>
              We take reasonable measures to protect information. No internet transmission is guaranteed to be fully secure, but we design systems with security best practices and operational hygiene.
            </Typography>

            <Divider />

            <Typography fontWeight={950}>6. Contact</Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.9 }}>
              For privacy questions, contact us via the Contact page.
            </Typography>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
