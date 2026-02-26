'use client';

import * as React from 'react';
import { Box, Container, Typography, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const ROLES = [
  {
    title: 'Senior Distributed Systems Engineer',
    location: 'Remote / India',
    type: 'Engineering',
    bullets: [
      'Design and optimize the core WASM compilation engine bridging Cerulea Studio to runtime execution.',
      'Scale network topology for high-throughput enterprise private subnets.',
      'Strong background in Rust, Go, and distributed consensus mechanisms.'
    ]
  },
  {
    title: 'Solutions Architect (Enterprise)',
    location: 'Remote',
    type: 'Operations',
    bullets: [
      'Act as the technical bridge between enterprise clients and the Cerulea execution layer.',
      'Map complex compliance and RBAC requirements directly into Cerulea Studio primitives.',
      'Experience with traditional Cloud (AWS/GCP) and enterprise system architecture.'
    ]
  },
  {
    title: 'Frontend Architecture Lead',
    location: 'Remote / India',
    type: 'Engineering',
    bullets: [
      'Lead the visual evolution of Cerulea Studio—our core node-based visual builder.',
      'Ensure a zero-latency, highly deterministic user experience in the browser.',
      'Deep expertise in React, Next.js, WebGL/Canvas, and complex state management.'
    ]
  }
];

export default function CareersPage() {
  return (
    <Box sx={{ bgcolor: '#FAFAFA', minHeight: '100vh', pb: 20 }}>
      
      {/* HERO */}
      <Box sx={{ pt: { xs: 16, md: 24 }, pb: { xs: 10, md: 14 }, bgcolor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Typography sx={{ color: '#2563eb', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.8rem', mb: 3 }}>
              Careers at Cerulea
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '4rem' }, fontWeight: 800, color: '#172554', mb: 4, letterSpacing: '-0.02em' }}>
              Build the engine.
            </Typography>
            <Typography sx={{ color: '#475569', fontSize: '1.15rem', lineHeight: 1.6, maxWidth: 650, mx: 'auto' }}>
              We are a tight-knit team of engineers and architects building the definitive no-code layer for enterprise blockchain infrastructure. Join us in translating intent into execution.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* ROLES LIST */}
      <Container maxWidth="md" sx={{ mt: 10 }}>
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <Stack spacing={4}>
            {ROLES.map((role, idx) => (
              <motion.div variants={fadeUp} key={idx}>
                <Box sx={{ 
                  bgcolor: '#FFFFFF', p: { xs: 4, md: 5 }, borderRadius: 4, border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.02)', transition: 'all 0.2s',
                  '&:hover': { borderColor: '#BFDBF7', boxShadow: '0 10px 30px -10px rgba(37, 99, 235, 0.1)' }
                }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 2, mb: 3 }}>
                    <Box>
                      <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, color: '#172554', mb: 1 }}>{role.title}</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#64748B' }}>
                          <PlaceOutlinedIcon sx={{ fontSize: 16 }} />
                          <Typography sx={{ fontSize: '0.85rem', fontWeight: 600 }}>{role.location}</Typography>
                        </Box>
                        <Typography sx={{ color: '#CBD5E1' }}>•</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#2563eb' }}>
                          <TerminalOutlinedIcon sx={{ fontSize: 16 }} />
                          <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{role.type}</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  <Stack spacing={1.5} sx={{ mb: 4 }}>
                    {role.bullets.map((bullet, i) => (
                      <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                        <Box sx={{ color: '#94A3B8', mt: 0.2 }}>—</Box>
                        <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>{bullet}</Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </motion.div>
            ))}
          </Stack>

          {/* APPLICATION CTA */}
          <motion.div variants={fadeUp}>
            <Box sx={{ mt: 10, p: { xs: 5, md: 8 }, bgcolor: '#0A192F', borderRadius: 4, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <Box sx={{ position: 'absolute', top: -100, right: -100, width: 300, height: 300, background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
              
              <Typography variant="h3" sx={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF', mb: 2 }}>
                Apply or reach out
              </Typography>
              <Typography sx={{ color: '#94A3B8', mb: 5, maxWidth: 500, mx: 'auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
                Send a short intro, links to your GitHub or previous work, and what you want to build. We will reply directly with next steps.
              </Typography>
              <Button 
                href="mailto:careers@cbytechains.com"
                variant="contained" 
                endIcon={<ArrowForwardIcon />}
                sx={{ bgcolor: '#2563eb', color: '#FFFFFF', px: 4, py: 1.5, fontSize: '1rem', fontWeight: 700, borderRadius: 2, '&:hover': { bgcolor: '#1d4ed8' } }}
              >
                Email Engineering Team
              </Button>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}