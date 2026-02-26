'use client';

import * as React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Stack } from '@mui/material';
import { Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function AboutPage() {
  return (
    <Box sx={{ bgcolor: '#FAFAFA', minHeight: '100vh', pb: 20 }}>
      
      {/* 1. MASSIVE COMPANY HERO */}
      <Box sx={{ pt: { xs: 20, md: 30 }, pb: { xs: 16, md: 24 }, bgcolor: '#FFFFFF', borderBottom: '1px solid #E2E8F0', position: 'relative', overflow: 'hidden' }}>
        
        {/* Abstract Background Element */}
        <Box sx={{ position: 'absolute', top: -200, right: '-10%', width: 800, height: 800, background: 'radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
              <Typography sx={{ color: '#2563eb', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.85rem' }}>
                The Company
              </Typography>
              <Typography sx={{ color: '#CBD5E1' }}>•</Typography>
              <Typography sx={{ color: '#64748B', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                Est. 2021 / Hyderabad, India
              </Typography>
            </Box>
            
            <Typography variant="h1" sx={{ fontSize: { xs: '3.5rem', sm: '5rem', md: '7rem' }, fontWeight: 900, color: '#172554', lineHeight: 1, letterSpacing: '-0.03em', mb: 6, textTransform: 'uppercase' }}>
              Caerulean<br />Bytechains<br />
              <span style={{ color: '#94A3B8', fontSize: '0.6em' }}>Private Limited.</span>
            </Typography>

            <Typography sx={{ color: '#475569', fontSize: { xs: '1.25rem', md: '1.5rem' }, lineHeight: 1.6, maxWidth: 850, fontWeight: 500 }}>
              We are the engineering team behind Cerulea. Founded on the principle of "Blockchain for Good," our mandate is to eliminate the infrastructure barrier in Web3, allowing enterprises to design, compile, and deploy sovereign blockchain networks without writing a single line of smart contract code.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* 2. OUR STORY / THE PROBLEM */}
      <Container maxWidth="lg" sx={{ mt: 20 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          <Grid container spacing={8}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, color: '#172554', mb: 3, letterSpacing: '-0.02em', position: 'sticky', top: 120 }}>
                The Origin
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ color: '#475569', fontSize: '1.15rem', lineHeight: 1.8 }}>
                <Typography sx={{ mb: 4, fontWeight: 600, color: '#172554', fontSize: '1.35rem' }}>
                  Blockchain is a mature technology, but deploying and operating it remains fundamentally broken.
                </Typography>
                <Typography sx={{ mb: 4 }}>
                  When we founded Caerulean Bytechains Private Limited (CBC) in 2021, we recognized a critical bottleneck. Organizations were spending massive amounts of time, effort, and capital just to establish usable network environments. DApp developers were forced to act as infrastructure operators, and enterprises were stuck building bespoke, fragile deployments that rarely survived past the proof-of-concept phase.
                </Typography>
                <Typography sx={{ mb: 4 }}>
                  The industry was obsessed with low-level developer tooling, but what organizations actually needed was a repeatable, structured pathway from configuration to deployment. 
                </Typography>
                <Typography sx={{ mb: 4 }}>
                  Over the past three years, we self-funded and engineered the solution: Cerulea. We transformed blockchain deployment from a fragmented coding exercise into a deterministic, configuration-driven engine. You map the business intent; Cerulea generates the execution.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      {/* 3. CORE TENETS */}
      <Box sx={{ mt: 24, bgcolor: '#172554', py: 20 }}>
        <Container maxWidth="lg">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', mb: 10, letterSpacing: '-0.02em', textAlign: 'center' }}>
              How we engineer.
            </Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
              
              <Box sx={{ bgcolor: 'rgba(255,255,255,0.05)', p: 6, borderRadius: 4, border: '1px solid rgba(255,255,255,0.1)' }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', mb: 2 }}>Deployability over theory.</Typography>
                <Typography sx={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.6 }}>
                  A system is only valuable when it can be deployed and operated predictably. We optimize Cerulea Studio for real-world runtime execution, ensuring that what you design visually is exactly what compiles to the ledger.
                </Typography>
              </Box>

              <Box sx={{ bgcolor: 'rgba(255,255,255,0.05)', p: 6, borderRadius: 4, border: '1px solid rgba(255,255,255,0.1)' }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', mb: 2 }}>Explicit governance.</Typography>
                <Typography sx={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.6 }}>
                  Enterprises require clear responsibility boundaries. We do not believe in implicit permissions. Cerulea makes network ownership, read/write access, and state modification mathematically explicit.
                </Typography>
              </Box>

            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* 4. THE TEAM */}
      <Container maxWidth="lg" sx={{ mt: 24 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <Grid container spacing={8}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, color: '#172554', mb: 3, letterSpacing: '-0.02em' }}>
                Leadership
              </Typography>
              <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6 }}>
                A professionally managed organization uniting deep technology expertise with strict operational and regulatory compliance.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Stack spacing={4}>
                
                {/* Aswin */}
                <motion.div variants={fadeUp}>
                  <Box sx={{ borderTop: '2px solid #E2E8F0', pt: 4 }}>
                    <Typography sx={{ fontSize: '1.75rem', fontWeight: 800, color: '#172554', mb: 1 }}>Aswin Thotapalli</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                      <Typography sx={{ color: '#2563eb', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.85rem' }}>Co-Founder & Director of Technology</Typography>
                      <Typography sx={{ color: '#CBD5E1' }}>•</Typography>
                      <Typography sx={{ color: '#64748B', fontWeight: 600, fontSize: '0.85rem' }}>M.Tech (CSE)</Typography>
                    </Box>
                    <Typography sx={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7 }}>
                      Aswin defines the technology vision and oversees all research and development for Cerulea. He architects the core blockchain infrastructure, managing everything from network security and access control to the seamless translation of visual logic into deterministic execution environments.
                    </Typography>
                  </Box>
                </motion.div>

                {/* Anirudh */}
                <motion.div variants={fadeUp}>
                  <Box sx={{ borderTop: '1px solid #E2E8F0', pt: 4 }}>
                    <Typography sx={{ fontSize: '1.75rem', fontWeight: 800, color: '#172554', mb: 1 }}>Anirudh Thotapalli</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                      <Typography sx={{ color: '#2563eb', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.85rem' }}>Co-Founder & Director of Operations</Typography>
                      <Typography sx={{ color: '#CBD5E1' }}>•</Typography>
                      <Typography sx={{ color: '#64748B', fontWeight: 600, fontSize: '0.85rem' }}>B.Com, PGCF</Typography>
                    </Box>
                    <Typography sx={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7 }}>
                      Anirudh manages the business and commercial operations of Caerulean Bytechains. With a strong background in commerce and taxation, he ensures that the company and its enterprise deployments maintain strict regulatory and statutory compliance in accordance with applicable laws.
                    </Typography>
                  </Box>
                </motion.div>

                {/* T.S. Ajai */}
                <motion.div variants={fadeUp}>
                  <Box sx={{ borderTop: '1px solid #E2E8F0', pt: 4 }}>
                    <Typography sx={{ fontSize: '1.75rem', fontWeight: 800, color: '#172554', mb: 1 }}>T. S. Ajai</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                      <Typography sx={{ color: '#2563eb', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.85rem' }}>Angel Investor & Mentor</Typography>
                      <Typography sx={{ color: '#CBD5E1' }}>•</Typography>
                      <Typography sx={{ color: '#64748B', fontWeight: 600, fontSize: '0.85rem' }}>CA, Exec. Program Blockchain (MIT)</Typography>
                    </Box>
                    <Typography sx={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7 }}>
                      A Chartered Accountant with nearly four decades of advisory experience. T.S. Ajai provides critical strategic guidance, drawing on his extensive experience serving on the boards of listed companies and guiding startups from their inception through IPO and M&A phases.
                    </Typography>
                  </Box>
                </motion.div>

              </Stack>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

    </Box>
  );
}