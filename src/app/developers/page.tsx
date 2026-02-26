import * as React from 'react';
import Link from 'next/link';
import { Box, Container, Grid, Paper, Typography, Button, Stack } from '@mui/material';
import PageHeader from '@/components/blocks/PageHeader';
import Section from '@/components/blocks/Section';

export default function DevelopersHubPage() {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <PageHeader
          eyebrow="Developers"
          title="Developer Hub"
          subtitle="This hub is structured around the real build-to-deploy lifecycle in Cerulea: understand the surfaces (Studio, Protocol/Private, Dashboard, APIs), then follow docs that map directly to deployment decisions."
        />

        <Section title="Start here">
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.5}>
            <Link href="/developers/docs" style={{ textDecoration: 'none' }}>
              <Button variant="contained">Docs</Button>
            </Link>
            <Link href="/developers/whitepaper" style={{ textDecoration: 'none' }}>
              <Button variant="outlined">Whitepaper</Button>
            </Link>
            <Link href="/product/how-it-works" style={{ textDecoration: 'none' }}>
              <Button variant="outlined">How it works</Button>
            </Link>
          </Stack>
        </Section>

        <Section title="What developers usually ask (and where to find it)">
          <Grid container spacing={2.5}>
            {[
              { t: 'How do I define an app without code?', d: 'Studio section in Docs: data model, permissions, deployment intent.' },
              { t: 'Public vs private deployment — how do I decide?', d: 'Docs: deployment models and governance boundaries.' },
              { t: 'How do I operate after deployment?', d: 'Dashboard + APIs section in Docs: operations and integrations.' },
              { t: 'What is the platform architecture?', d: 'Whitepaper: system surfaces and design rationale.' },
            ].map((x) => (
              <Grid key={x.t} size={{ xs: 12, md: 6 }}>
                <Paper variant="outlined" sx={{ p: 3 }}>
                  <Typography fontWeight={950} sx={{ mb: 1 }}>{x.t}</Typography>
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{x.d}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Section>
      </Container>
    </Box>
  );
}
