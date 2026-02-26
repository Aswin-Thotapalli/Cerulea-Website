import * as React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import PageHeader from '@/components/blocks/PageHeader';
import Section from '@/components/blocks/Section';

export default function DashboardPage() {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <PageHeader
          eyebrow="Platform"
          title="Cerulea Dashboard"
          subtitle="Cerulea Dashboard is the operational surface to manage deployments: environment state, health visibility, operational actions, governance workflows, and integration status — across public applications and private chains."
        />

        <Section title="What you manage in Cerulea Dashboard">
          <Grid container spacing={2.5}>
            {[
              {
                t: 'Deployments and environments',
                d: 'Track and manage public application deployments and private chain deployments with clear environment boundaries.',
              },
              {
                t: 'Health and operational status',
                d: 'Visibility into key operational indicators so deployments can be operated predictably, not reactively.',
              },
              {
                t: 'Governance actions',
                d: 'A structured surface for governance workflows so change is auditable and controlled.',
              },
              {
                t: 'Integration status',
                d: 'Observe API connectivity, events, and integration points so external systems remain in sync.',
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
          title="Why a dashboard matters for blockchain infrastructure"
          subtitle="Most blockchain projects fail operationally: unclear ownership, inconsistent changes, and poor visibility. Cerulea treats operations as a first-class product surface."
        >
          <Grid container spacing={2.5}>
            {[
              { t: 'Predictable operations', d: 'Clear status and consistent control reduce operational chaos.' },
              { t: 'Safer change', d: 'Governance flows reduce risky ad-hoc modifications.' },
              { t: 'Faster debugging', d: 'Operational context makes failures diagnosable without guesswork.' },
              { t: 'Stakeholder visibility', d: 'Enterprises and governments need transparency into system state and control.' },
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
