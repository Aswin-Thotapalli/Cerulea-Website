import * as React from 'react';
import Link from 'next/link';
import { Box, Container, Typography, Stack, Divider } from '@mui/material';

export default function SiteFooter() {
  return (
    <Box sx={{ mt: 8, borderTop: '1px solid', borderColor: 'divider', bgcolor: 'background.paper' }}>
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }}>
          <Typography sx={{ fontWeight: 900 }}>
            Cerulea
          </Typography>

          <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }}>
            <Link href="/company/about" style={{ textDecoration: 'none' }}>
              <Typography sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>About</Typography>
            </Link>
            <Link href="/company/contact" style={{ textDecoration: 'none' }}>
              <Typography sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>Contact</Typography>
            </Link>
            <Link href="/company/blog" style={{ textDecoration: 'none' }}>
              <Typography sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>Resources</Typography>
            </Link>
            <Link href="/legal/privacy" style={{ textDecoration: 'none' }}>
              <Typography sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>Privacy</Typography>
            </Link>
            <Link href="/legal/terms" style={{ textDecoration: 'none' }}>
              <Typography sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>Terms</Typography>
            </Link>
          </Stack>
        </Stack>

        <Divider sx={{ my: 3 }} />

        <Typography sx={{ color: 'text.secondary', fontSize: 13, lineHeight: 1.7 }}>
          © {new Date().getFullYear()} Caerulean Bytechains Private Limited. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
