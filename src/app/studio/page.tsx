import * as React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import PageHeader from '@/components/blocks/PageHeader';
import Section from '@/components/blocks/Section';

export default function StudioPage() {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <PageHeader
          eyebrow="Platform"
          title="Cerulea Studio"
          subtitle="Cerulea Studio is the no-code workspace where applications are defined as deployable configurations: data models, permissions, and deployment intent — without requiring a developer-facing SDK or CLI."
        />

        <Section title="What you define in Studio">
          <Grid container spacing={2.5}>
            {[
              {
                t: 'Application structure',
                d: 'Define the application’s entities, relationships, required fields, and validation requirements in a way that stays consistent across environments.',
              },
              {
                t: 'Permissions and roles',
                d: 'Define access and behavior boundaries so enterprises and governments can enforce organizational policy without rewriting application code.',
              },
              {
                t: 'Deployment intent',
                d: 'Choose whether the application is deployed as a public blockchain-backed app on Cerulea Protocol or as an organization-controlled deployment on Cerulea Private.',
              },
              {
                t: 'Operational behavior',
                d: 'Define how the system should behave after deployment: which surfaces are exposed via API, what data is on-chain, and what is immutable by design.',
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
          title="Why Studio matters"
          subtitle="The most expensive part of building blockchain-powered systems is not “writing code”, it is operationalizing deployments. Studio focuses on reducing that operational cost."
        >
          <Grid container spacing={2.5}>
            {[
              { t: 'Lower time-to-deploy', d: 'No-code definition reduces boilerplate and makes deployments repeatable.' },
              { t: 'Clear governance boundaries', d: 'Permissions and policy become explicit, inspectable and enforceable.' },
              { t: 'Consistent environments', d: 'Deployments stay consistent across development and production usage patterns.' },
              { t: 'Reduced integration friction', d: 'APIs and platform primitives replace brittle custom glue.' },
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
      </Container>
    </Box>
  );
}
