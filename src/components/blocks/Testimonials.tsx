'use client';

import * as React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';

export default function Testimonials({
  items,
}: {
  items: { quote: string; name: string; company: string }[];
}) {
  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h2" sx={{ mb: 2 }}>What teams say</Typography>
      <Grid container spacing={2}>
        {items.map((t, idx) => (
          <Grid key={idx} size={{ xs: 12, md: 6 }}>
            <Paper sx={{ p: 2.5, border: '1px solid', borderColor: 'divider' }}>
              <Typography sx={{ fontWeight: 800 }}>&ldquo;{t.quote}&rdquo;</Typography>
              <Typography sx={{ color: 'text.secondary', mt: 1 }}>
                {t.name} • {t.company}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
