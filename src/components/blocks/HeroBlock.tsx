'use client';

import * as React from 'react';
import Link from 'next/link';
import { Box, Button, Stack, Typography, Paper } from '@mui/material';
import { brand } from '@/content/siteContent';

export default function HeroBlock({ headline, subheadline }: { headline: string; subheadline: string }) {
  return (
    <Paper sx={{ p: { xs: 3, md: 6 }, borderRadius: 4, border: '1px solid', borderColor: 'divider', overflow: 'hidden' }}>
      <Stack spacing={2}>
        <Typography variant="h1">{headline}</Typography>
        <Typography sx={{ color: 'text.secondary', maxWidth: 820 }}>{subheadline}</Typography>

        <Stack direction="row" spacing={1.5} sx={{ mt: 1 }}>
<Button variant="contained" component={Link} href={brand.primaryCTA.href} sx={{ textTransform: 'none', fontWeight: 900 }}>
  {brand.primaryCTA.label}
</Button>
<Button variant="outlined" component={Link} href={brand.secondaryCTA.href} sx={{ textTransform: 'none', fontWeight: 900 }}>
  {brand.secondaryCTA.label}
</Button>
        </Stack>

        <Box sx={{ mt: 2 }}>
          <Typography sx={{ color: 'text.secondary' }}>
            Example draft content (will be replaced with Cerulea content later). No placeholders or lorem ipsum used.
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}
