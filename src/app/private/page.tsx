import * as React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import PageHeader from '@/components/blocks/PageHeader';
import Section from '@/components/blocks/Section';

export default function PrivatePage() {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <PageHeader
          eyebrow="Platform"
          title="Cerulea Private"
          subtitle="Cerulea Private enables enterprises and governments to deploy private chains with controlled participation, organization-owned infrastructure boundaries, and configurable governance."
        />

        <Section title="What Cerulea Private is designed for">
          <Grid container spacing={2.5}>
            {[
              {
                t: 'Isolation and controlled participation',
                d: 'Run a network where membership and participation are governed by the organization’s policy requirements.',
              },
              {
                t: 'Organization-owned hosting boundary',
                d: 'Private chains are hosted by whoever owns the private chain. Cerulea provides the structure, tooling, and management surfaces to keep deployments consistent and operable.',
              },
              {
                t: 'Custom governance and operational control',
                d: 'Private deployments can enforce organization-specific governance flows, access boundaries, and operational restrictions.',
              },
              {
                t: 'Deployment consistency',
                d: 'A standardized deployment model reduces chaos: repeatable configuration, predictable endpoints, and stable operational workflows.',
              },
            ].map((x) => (
              <Grid key={x.t} size={{ xs: 12, md: 6 }}>
                <Paper variant="outlined" sx={{ p: 3, height: '100%' }}>
                  <Typography fontWeight={950} sx={{ mb: 1 }}>{x.t}</Typography>
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{x.d}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Section>

        <Section
          title="Typical private chain requirements"
          subtitle="These are the kinds of requirements Cerulea Private is built to address in a structured way."
        >
          <Grid container spacing={2.5}>
            {[
              { t: 'Role-based access and responsibilities', d: 'Clearly model who can do what, under which conditions.' },
              { t: 'Governance workflows', d: 'Make governance explicit so change does not become ad-hoc.' },
              { t: 'Operational observability', d: 'Operators need health visibility, incident context, and traceable actions.' },
              { t: 'Integration surfaces', d: 'APIs for integrating the chain into internal systems without custom glue chaos.' },
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
