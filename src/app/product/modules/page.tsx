import * as React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import PageHeader from '@/components/blocks/PageHeader';
import Section from '@/components/blocks/Section';

const modules = [
  {
    t: 'Cerulea Studio (No-code definition layer)',
    d: 'Define app structure, data models, permissions, and deployment intent without writing SDK/CLI code. Studio is where application logic becomes a deployable configuration.',
  },
  {
    t: 'Cerulea Protocol (Public Layer-1 foundation)',
    d: 'A modular Layer-1 network that can host blockchain-backed public applications where shared state and verifiability are required.',
  },
  {
    t: 'Cerulea Private (Private chain deployments)',
    d: 'Private chain deployments for enterprises and governments needing isolation, controlled participation, configurable governance, and organization-specific policies.',
  },
  {
    t: 'Cerulea Dashboard (Operations + governance surface)',
    d: 'A single control plane to manage environments, view status, monitor health, and perform operational actions consistently across deployments.',
  },
  {
    t: 'Cerulea APIs (Integration surface)',
    d: 'Programmatic control and integration endpoints for deployments: management actions, runtime operations, and system integrations. Designed to replace glue code with stable primitives.',
  },
  {
    t: 'AI-assisted guidance (Cross-cutting capability)',
    d: 'AI assistance is used to reduce setup errors and improve operator clarity: guided decisions, safer defaults, and explainability of configuration impacts before deployment.',
  },
];

export default function ProductModulesPage() {
  return (
    <Box sx={{ bgcolor: '#FAFAFA', minHeight: '100vh', pb: 12 }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <PageHeader
          eyebrow="Product"
          title="Modules and capabilities"
          subtitle="Cerulea is modular so different stakeholders can evaluate it cleanly. Developers see build-to-deploy flow; enterprises and governments see governance boundaries and operational safety."
        />

        <Section title="Core modules">
          <Grid container spacing={2.5}>
            {modules.map((m) => (
              <Grid key={m.t} size={{ xs: 12, md: 6 }}>
                <Paper variant="outlined" sx={{ p: 4, height: '100%', bgcolor: '#FFFFFF', borderColor: '#E2E8F0', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                  <Typography sx={{ fontWeight: 800, mb: 1.5, color: '#172554', fontSize: '1.1rem' }}>
                    {m.t}
                  </Typography>
                  <Typography sx={{ color: '#475569', lineHeight: 1.7, fontSize: '0.95rem' }}>
                    {m.d}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Section>

        <Section
          title="Why modular matters"
          subtitle="Modularity reduces platform risk: it prevents “all-or-nothing” adoption and allows deployments to expand in capability over time without redesign."
        >
          <Grid container spacing={2.5}>
            {[
              {
                t: 'Adopt what you need',
                d: 'Organizations can start with private chains or public app deployments and expand into deeper governance/operations without rebuilding.',
              },
              {
                t: 'Clear evaluation boundaries',
                d: 'Stakeholders can evaluate Studio, Protocol, Private, Dashboard, and APIs independently without confusion.',
              },
              {
                t: 'Operational consistency',
                d: 'Deployments remain consistent because the management surface and integration surfaces are standardized.',
              },
              {
                t: 'Lower implementation friction',
                d: 'No-code definition + APIs replace fragile glue code and reduce the number of moving parts teams must maintain.',
              },
            ].map((x) => (
              <Grid key={x.t} size={{ xs: 12, md: 6 }}>
                <Paper variant="outlined" sx={{ p: 4, height: '100%', bgcolor: '#FFFFFF', borderColor: '#E2E8F0', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                  <Typography sx={{ fontWeight: 800, mb: 1.5, color: '#172554', fontSize: '1.1rem' }}>
                    {x.t}
                  </Typography>
                  <Typography sx={{ color: '#475569', lineHeight: 1.7, fontSize: '0.95rem' }}>
                    {x.d}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Section>
      </Container>
    </Box>
  );
}