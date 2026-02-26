'use client';

import * as React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';

export default function FeatureGrid({
  title,
  items,
}: {
  title: string;
  items: { title: string; desc: string }[];
}) {
  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h2" sx={{ mb: 2 }}>{title}</Typography>
      <Grid container spacing={2}>
        {items.map((it, idx) => (
          <Grid key={idx} size={{ xs: 12, md: 4 }}>
            <Paper sx={{ p: 2.5, border: '1px solid', borderColor: 'divider' }}>
              <Typography sx={{ fontWeight: 900 }}>{it.title}</Typography>
              {it.desc ? <Typography sx={{ color: 'text.secondary', mt: 1 }}>{it.desc}</Typography> : null}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
