import * as React from 'react';
import Link from 'next/link';
import { Box, Container, Grid, Paper, Typography, Button, Stack } from '@mui/material';
import PageHeader from '@/components/blocks/PageHeader';
import Section from '@/components/blocks/Section';

export default function ProductOverviewPage() {
  return (
    <Box sx={{ bgcolor: '#FAFAFA', minHeight: '100vh', pb: 0 }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <PageHeader
          eyebrow="Product"
          title="Cerulea Product Overview"
          subtitle="Cerulea is an AI-enabled, modular Layer-1 blockchain infrastructure platform that enables developers, enterprises, and governments to easily build, deploy, and manage customizable public and private blockchain-powered applications."
        />

        <Section
          title="What Cerulea lets you do"
          subtitle="Cerulea is built for real deployment outcomes: shipping apps, operating them safely, and running private chains for organizations that need isolation and governance."
        >
          <Grid container spacing={2.5}>
            {[
              {
                t: 'Deploy public blockchain-backed applications',
                d:
                  'Build applications using Cerulea Studio and deploy them onto Cerulea’s Layer-1 network to get blockchain guarantees where they matter: transparency, verifiability, and shared state.',
              },
              {
                t: 'Deploy private chains for organizations',
                d:
                  'Run private chains for enterprises/governments that need controlled participation, isolation, configurable governance, and organization-specific operational boundaries.',
              },
              {
                t: 'Operate everything from one dashboard',
                d:
                  'Monitor chain/app health, environments, runtime endpoints, key operational actions, and governance workflows from Cerulea Dashboard.',
              },
              {
                t: 'Integrate with external systems via Cerulea APIs',
                d:
                  'Use Cerulea APIs to automate environment management, deployment operations, event integrations, and operational controls without a separate SDK/CLI.',
              },
            ].map((x) => (
              <Grid key={x.t} size={{ xs: 12, md: 6 }}>
                <Paper 
                  variant="outlined" 
                  sx={{ 
                    p: 4, 
                    height: '100%', 
                    bgcolor: '#FFFFFF', 
                    borderColor: '#E2E8F0', 
                    borderRadius: 3,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
                  }}
                >
                  <Typography sx={{ fontWeight: 800, mb: 1.5, color: '#172554', fontSize: '1.1rem' }}>
                    {x.t}
                  </Typography>
                  <Typography sx={{ color: '#475569', lineHeight: 1.8, fontSize: '0.95rem' }}>
                    {x.d}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Section>

        <Section
          title="Navigate deeper"
          subtitle="Cerulea is intentionally broken into clean, inspectable surfaces so stakeholders can evaluate it fast."
        >
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.5}>
            <Link href="/product/how-it-works" style={{ textDecoration: 'none' }}>
              <Button 
                variant="contained" 
                sx={{ 
                  bgcolor: '#172554', 
                  color: '#FFFFFF', 
                  fontWeight: 700,
                  '&:hover': { bgcolor: '#1E2B4D' } 
                }}
              >
                How it works
              </Button>
            </Link>
            <Link href="/product/modules" style={{ textDecoration: 'none' }}>
              <Button 
                variant="outlined" 
                sx={{ 
                  borderColor: '#E2E8F0', 
                  color: '#172554', 
                  fontWeight: 700,
                  '&:hover': { borderColor: '#172554', bgcolor: 'rgba(23, 37, 84, 0.02)' }
                }}
              >
                Modules
              </Button>
            </Link>
            <Link href="/studio" style={{ textDecoration: 'none' }}>
              <Button 
                variant="outlined" 
                sx={{ 
                  borderColor: '#E2E8F0', 
                  color: '#172554', 
                  fontWeight: 700,
                  '&:hover': { borderColor: '#172554', bgcolor: 'rgba(23, 37, 84, 0.02)' }
                }}
              >
                Cerulea Studio
              </Button>
            </Link>
            <Link href="/private" style={{ textDecoration: 'none' }}>
              <Button 
                variant="outlined" 
                sx={{ 
                  borderColor: '#E2E8F0', 
                  color: '#172554', 
                  fontWeight: 700,
                  '&:hover': { borderColor: '#172554', bgcolor: 'rgba(23, 37, 84, 0.02)' }
                }}
              >
                Cerulea Private
              </Button>
            </Link>
          </Stack>
        </Section>
      </Container>
    </Box>
  );
}