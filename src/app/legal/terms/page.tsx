import * as React from 'react';
import { Box, Container, Paper, Typography, Stack, Divider } from '@mui/material';
import PageHeader from '@/components/blocks/PageHeader';

export default function TermsPage() {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <PageHeader
          eyebrow="Legal"
          title="Terms of Use"
          subtitle="These terms govern use of the Cerulea website and related informational materials provided by Caerulean Bytechains Private Limited."
        />

        <Paper variant="outlined" sx={{ p: { xs: 3, md: 4 }, mt: 3 }}>
          <Stack spacing={2}>
            <Typography fontWeight={950}>1. Website use</Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.9 }}>
              You may use this website for lawful purposes. You agree not to attempt to disrupt, overload, or compromise the website or its infrastructure.
            </Typography>

            <Divider />

            <Typography fontWeight={950}>2. No warranties</Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.9 }}>
              The website and materials are provided “as is” for informational purposes. We do not guarantee completeness or suitability for a specific purpose.
            </Typography>

            <Divider />

            <Typography fontWeight={950}>3. Intellectual property</Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.9 }}>
              Content on this website is owned by Caerulean Bytechains Private Limited or used with permission. You may not reproduce or redistribute it without permission.
            </Typography>

            <Divider />

            <Typography fontWeight={950}>4. Limitation of liability</Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.9 }}>
              To the fullest extent permitted by law, we are not liable for damages arising from your use of this website.
            </Typography>

            <Divider />

            <Typography fontWeight={950}>5. Changes</Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.9 }}>
              We may update these terms periodically. Continued use of the website constitutes acceptance of updated terms.
            </Typography>

            <Divider />

            <Typography fontWeight={950}>6. Contact</Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.9 }}>
              For questions, contact us via the Contact page.
            </Typography>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
