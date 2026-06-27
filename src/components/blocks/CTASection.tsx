'use client';

import * as React from 'react';
import Link from 'next/link';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { brand } from '@/content/siteContent';
import { track } from '@/lib/track';

export default function CTASection({ title, subtitle, location = 'page-cta' }: { title: string; subtitle: string; location?: string }) {
  return (
    <Box sx={{ mt: 6 }}>
      <Paper sx={{ p: { xs: 3, md: 5 }, border: '1px solid', borderColor: 'divider' }}>
        <Typography variant="h3">{title}</Typography>
        <Typography sx={{ color: 'text.secondary', mt: 1 }}>{subtitle}</Typography>
        <Stack direction="row" spacing={1.5} sx={{ mt: 2 }}>
          <Button
            variant="contained"
            component={Link}
            href={brand.primaryCTA.href}
            sx={{ textTransform: 'none', fontWeight: 900 }}
            onClick={() => track.ctaClick(brand.primaryCTA.label, brand.primaryCTA.href, location)}
          >
            {brand.primaryCTA.label}
          </Button>
          <Button
            variant="outlined"
            component={Link}
            href={brand.secondaryCTA.href}
            sx={{ textTransform: 'none', fontWeight: 900 }}
            onClick={() => track.ctaClick(brand.secondaryCTA.label, brand.secondaryCTA.href, location)}
          >
            {brand.secondaryCTA.label}
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
