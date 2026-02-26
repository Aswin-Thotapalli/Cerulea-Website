import * as React from 'react';
import { Box, Container, Paper, Typography, Grid } from '@mui/material';
import PageHeader from '@/components/blocks/PageHeader';
import Section from '@/components/blocks/Section';

const apiGroups = [
  {
    name: 'Deployments',
    items: [
      'Create and manage deployments',
      'Environment lifecycle actions',
      'Deployment status + metadata',
    ],
  },
  {
    name: 'Operations',
    items: [
      'Operational actions with guardrails',
      'Governance-triggered actions',
      'Activity logs and traceability',
    ],
  },
  {
    name: 'Integrations',
    items: [
      'Event delivery and integration hooks',
      'External system synchronization',
      'Operational notifications and workflows',
    ],
  },
  {
    name: 'Observability surfaces',
    items: [
      'Health signals and status endpoints',
      'Environment diagnostics',
      'Audit and operator context',
    ],
  },
];

export default function ApisPage() {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <PageHeader
          eyebrow="Platform"
          title="Cerulea APIs"
          subtitle="Cerulea APIs provide programmatic access to your deployments and operations. Cerulea is no-code in Studio, so SDK/CLI are not required — APIs are the integration surface."
        />

        <Section
          title="How to think about Cerulea APIs"
          subtitle="Cerulea APIs are designed for integration, automation, and operational control — without forcing teams to write fragile glue code."
        >
          <Grid container spacing={2.5}>
            {apiGroups.map((g) => (
              <Grid key={g.name} size={{ xs: 12, md: 6 }}>
                <Paper variant="outlined" sx={{ p: 3, height: '100%' }}>
                  <Typography fontWeight={950} sx={{ mb: 1 }}>{g.name}</Typography>
                  {g.items.map((i) => (
                    <Typography key={i} sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                      • {i}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Section>

        <Section
          title="What APIs enable in real deployments"
          subtitle="This is where enterprises and governments gain confidence: predictable integration points that can be governed and monitored."
        >
          <Grid container spacing={2.5}>
            {[
              { t: 'Automation', d: 'Automate operational workflows in a controlled and auditable way.' },
              { t: 'Integration with existing systems', d: 'Connect deployments into internal workflows without rewriting everything.' },
              { t: 'Operational consistency', d: 'Standard endpoints and predictable behavior reduce deployment drift.' },
              { t: 'Governance alignment', d: 'APIs can be constrained through governance and policy expectations.' },
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
