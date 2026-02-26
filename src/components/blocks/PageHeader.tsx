'use client';

import * as React from 'react';
import { Paper, Typography, Stack } from '@mui/material';

export default function PageHeader({
  title,
  subtitle,
  eyebrow,
}: {
  title: string;
  subtitle: string;
  eyebrow?: string;
}) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: { xs: 3, md: 5 },
        borderRadius: 3,
        bgcolor: 'background.paper',
      }}
    >
      <Stack spacing={1.25}>
        {eyebrow ? (
          <Typography sx={{ fontWeight: 800, letterSpacing: 0.2, color: 'text.secondary' }}>
            {eyebrow}
          </Typography>
        ) : null}

        <Typography variant="h4" fontWeight={950} sx={{ letterSpacing: -0.6 }}>
          {title}
        </Typography>

        <Typography sx={{ color: 'text.secondary', fontSize: 16, lineHeight: 1.8, maxWidth: 980 }}>
          {subtitle}
        </Typography>
      </Stack>
    </Paper>
  );
}
