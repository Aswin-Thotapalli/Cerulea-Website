// src/app/company/page.tsx
'use client';
import Link from 'next/link';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import PageHeader from '@/components/blocks/PageHeader';

export default function CompanyHomePage() {
  return (
    <Box>
      <PageHeader
        title="Company"
        subtitle="Learn about the team, values, and how to contact us for partnerships, sales, or architecture reviews."
      />

      <Grid container spacing={2} sx={{ mt: 3 }}>
        {[
          { title: 'About', desc: 'Mission, values, and what we believe production infrastructure should be.', href: '/company/about' },
          { title: 'Careers', desc: 'Open roles across engineering, product, and writing.', href: '/company/careers' },
          { title: 'Contact', desc: 'Get in touch for demos, sales, or partnerships.', href: '/company/contact' },
        ].map((c) => (
          <Grid key={c.title} size={{ xs: 12, md: 4 }}>
            <Paper sx={{ p: 2.5, border: '1px solid', borderColor: 'divider', height: '100%' }}>
              <Typography variant="h3">{c.title}</Typography>
              <Typography sx={{ color: 'text.secondary', mt: 1 }}>{c.desc}</Typography>
              <Button
                component={Link}
                href={c.href}
                variant="contained"
                sx={{ mt: 2, textTransform: 'none', fontWeight: 900 }}
              >
                Open
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
