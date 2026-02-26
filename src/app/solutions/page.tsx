import * as React from 'react';
import Link from 'next/link';
import { Box, Container, Grid, Paper, Typography, Button, Stack } from '@mui/material';
import PageHeader from '@/components/blocks/PageHeader';
import Section from '@/components/blocks/Section';
import { solutions } from '@/content/siteContent';

export default function SolutionsIndexPage() {
  return (
    <Box>
      <Container sx={{ py: 8 }}>
        <PageHeader
          eyebrow="Solutions"
          title="Where Cerulea is used"
          subtitle="Cerulea is infrastructure: it supports multiple industries and application types. Each solution below maps to real deployment choices: public apps, private chains, or hybrid."
        />

        <Section title="Industries & Applications" subtitle="Choose a solution to see outcomes, common pain points, and how Cerulea fits the deployment model.">
          <Grid container spacing={2.5}>
            {solutions.map((s) => (
              <Grid key={s.slug} size={{ xs: 12, md: 6 }}>
                <Paper variant="outlined" sx={{ p: 3, height: '100%' }}>
                  <Typography sx={{ fontWeight: 950, mb: 1 }}>{s.title}</Typography>
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
                    {s.subtitle}
                  </Typography>

                  <Stack direction="row" spacing={1}>
                    <Link href={`/solutions/${s.slug}`} style={{ textDecoration: 'none' }}>
                      <Button variant="contained">View</Button>
                    </Link>
                    <Link href="/company/contact" style={{ textDecoration: 'none' }}>
                      <Button variant="outlined">Talk to us</Button>
                    </Link>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Section>
      </Container>
    </Box>
  );
}
