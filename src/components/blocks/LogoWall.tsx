'use client';

import * as React from 'react';
import { Box, Chip, Stack, Typography } from '@mui/material';

export default function LogoWall({ title, logos }: { title: string; logos: string[] }) {
  return (
    <Box sx={{ mt: 6 }}>
      <Typography sx={{ fontWeight: 900, mb: 2 }}>{title}</Typography>
      <Stack direction="row" flexWrap="wrap" gap={1}>
        {logos.map((l) => (
          <Chip key={l} label={l} variant="outlined" />
        ))}
      </Stack>
    </Box>
  );
}
