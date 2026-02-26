'use client';

import * as React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQBlock({ title, items }: { title: string; items: { q: string; a: string }[] }) {
  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h2" sx={{ mb: 2 }}>{title}</Typography>
      {items.map((f) => (
        <Accordion key={f.q} sx={{ border: '1px solid', borderColor: 'divider' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 900 }}>{f.q}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: 'text.secondary' }}>{f.a}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
