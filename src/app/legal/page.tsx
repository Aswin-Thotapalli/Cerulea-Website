'use client';

import * as React from 'react';
import Link from 'next/link';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PrivacyTipOutlinedIcon from '@mui/icons-material/PrivacyTipOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function LegalPage() {
  return (
    <Box sx={{ bgcolor: '#FAFAFA', minHeight: '100vh', pb: 20 }}>
      
      {/* HERO */}
      <Box sx={{ pt: { xs: 16, md: 24 }, pb: { xs: 8, md: 10 }, bgcolor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <Container maxWidth="md">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 800, color: '#172554', mb: 3, letterSpacing: '-0.02em' }}>
              Legal & Compliance
            </Typography>
            <Typography sx={{ color: '#475569', fontSize: '1.15rem', lineHeight: 1.6, maxWidth: 650 }}>
              Access the foundational agreements, data handling policies, and terms of service that govern the use of Cerulea software and infrastructure.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* LINKS */}
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <motion.div initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}>
          <Grid container spacing={3}>
            
            {/* Terms of Service */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <motion.div variants={fadeUp} style={{ height: '100%' }}>
                <Link href="/legal/terms" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <Box sx={{ 
                    bgcolor: '#FFFFFF', p: 4, borderRadius: 4, border: '1px solid #E2E8F0', height: '100%',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.02)', transition: 'all 0.2s ease', display: 'flex', flexDirection: 'column',
                    '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 10px 25px -5px rgba(37, 99, 235, 0.1)', borderColor: '#BFDBF7', '& .arrow': { transform: 'translateX(4px)', color: '#2563eb' } }
                  }}>
                    <DescriptionOutlinedIcon sx={{ fontSize: 32, color: '#64748B', mb: 3 }} />
                    <Typography sx={{ fontSize: '1.25rem', fontWeight: 800, color: '#172554', mb: 1 }}>Terms of Service</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, mb: 4, flexGrow: 1 }}>
                      The governing rules and operational boundaries for deploying and accessing Cerulea infrastructure.
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 'auto' }}>
                      <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '0.85rem' }}>Read Terms</Typography>
                      <ArrowForwardIcon className="arrow" sx={{ fontSize: 16, color: '#94A3B8', transition: 'all 0.2s' }} />
                    </Box>
                  </Box>
                </Link>
              </motion.div>
            </Grid>

            {/* Privacy Policy */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <motion.div variants={fadeUp} style={{ height: '100%' }}>
                <Link href="/legal/privacy" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <Box sx={{ 
                    bgcolor: '#FFFFFF', p: 4, borderRadius: 4, border: '1px solid #E2E8F0', height: '100%',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.02)', transition: 'all 0.2s ease', display: 'flex', flexDirection: 'column',
                    '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 10px 25px -5px rgba(37, 99, 235, 0.1)', borderColor: '#BFDBF7', '& .arrow': { transform: 'translateX(4px)', color: '#2563eb' } }
                  }}>
                    <PrivacyTipOutlinedIcon sx={{ fontSize: 32, color: '#64748B', mb: 3 }} />
                    <Typography sx={{ fontSize: '1.25rem', fontWeight: 800, color: '#172554', mb: 1 }}>Privacy Policy</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, mb: 4, flexGrow: 1 }}>
                      Details on how we manage, store, and protect your data across public and sovereign private environments.
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 'auto' }}>
                      <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '0.85rem' }}>Read Policy</Typography>
                      <ArrowForwardIcon className="arrow" sx={{ fontSize: 16, color: '#94A3B8', transition: 'all 0.2s' }} />
                    </Box>
                  </Box>
                </Link>
              </motion.div>
            </Grid>

          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}