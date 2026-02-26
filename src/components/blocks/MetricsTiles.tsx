'use client';

import * as React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';

export default function MetricsTiles({ items }: { items: { label: string; value: string }[] }) {
  return (
    <Box sx={{ mt: 6 }}>
      <Grid container spacing={2}>
        {items.map((m) => (
          <Grid key={m.label} size={{ xs: 12, md: 3 }}>
            <Paper sx={{ p: 2.5, border: '1px solid', borderColor: 'divider' }}>
              <Typography sx={{ fontWeight: 900, fontSize: 22 }}>{m.value}</Typography>
              <Typography sx={{ color: 'text.secondary' }}>{m.label}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
