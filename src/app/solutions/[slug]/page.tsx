import * as React from 'react';
import Link from 'next/link';
import { Box, Container, Paper, Typography, Stack, Button, Grid, Divider } from '@mui/material';
import PageHeader from '@/components/blocks/PageHeader';
import Section from '@/components/blocks/Section';
import { solutions } from '@/content/siteContent';

export default function SolutionDetailPage({ params }: { params: { slug: string } }) {
  const s = solutions.find((x) => x.slug === params.slug);

  if (!s) {
    return (
      <Box>
        <Container sx={{ py: 8 }}>
          <PageHeader eyebrow="Solutions" title="Not found" subtitle="This solution page does not exist." />
          <Link href="/solutions" style={{ textDecoration: 'none' }}>
            <Button variant="contained">Back to Solutions</Button>
          </Link>
        </Container>
      </Box>
    );
  }

  return (
    <Box>
      <Container sx={{ py: 8 }}>
        <PageHeader eyebrow="Solutions" title={s.title} subtitle={s.subtitle} />

        <Grid container spacing={2.5}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper variant="outlined" sx={{ p: 3, height: '100%' }}>
              <Typography sx={{ fontWeight: 950, mb: 1 }}>Who this is for</Typography>
              <Stack spacing={1}>
                {s.whoItsFor.map((x) => (
                  <Typography key={x} sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    • {x}
                  </Typography>
                ))}
              </Stack>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Paper variant="outlined" sx={{ p: 3, height: '100%' }}>
              <Typography sx={{ fontWeight: 950, mb: 1 }}>Outcomes</Typography>
              <Stack spacing={1}>
                {s.outcomes.map((x) => (
                  <Typography key={x} sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    • {x}
                  </Typography>
                ))}
              </Stack>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Paper variant="outlined" sx={{ p: 3, height: '100%' }}>
              <Typography sx={{ fontWeight: 950, mb: 1 }}>Common pain points</Typography>
              <Stack spacing={1}>
                {s.painPoints.map((x) => (
                  <Typography key={x} sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    • {x}
                  </Typography>
                ))}
              </Stack>
            </Paper>
          </Grid>
        </Grid>

        <Section title="How Cerulea helps">
          <Grid container spacing={2.5}>
            {s.howCeruleaHelps.map((x) => (
              <Grid key={x.title} size={{ xs: 12, md: 6 }}>
                <Paper variant="outlined" sx={{ p: 3, height: '100%' }}>
                  <Typography sx={{ fontWeight: 950, mb: 1 }}>{x.title}</Typography>
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.85 }}>{x.desc}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Section>

        <Paper variant="outlined" sx={{ p: 3, mt: 4 }}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.5} alignItems={{ md: 'center' }} justifyContent="space-between">
            <Box>
              <Typography sx={{ fontWeight: 950 }}>Talk to us</Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Tell us what you want to deploy (public app, private chain, or hybrid) and we’ll map the fastest path.
              </Typography>
            </Box>
            <Link href={s.cta.href} style={{ textDecoration: 'none' }}>
              <Button variant="contained" size="large">
                {s.cta.label}
              </Button>
            </Link>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
