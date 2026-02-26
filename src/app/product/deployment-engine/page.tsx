'use client';

import * as React from 'react';
import { Box, Container, Typography, Grid, Stack, Button, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import AltRouteOutlinedIcon from '@mui/icons-material/AltRouteOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import CloudSyncOutlinedIcon from '@mui/icons-material/CloudSyncOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import SettingsBackupRestoreOutlinedIcon from '@mui/icons-material/SettingsBackupRestoreOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import { Variants } from 'framer-motion';

const LINKS = {
  studio: 'https://studio.cerulea.app',
  docs: 'https://cerulea.app/docs',
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function CeruleaDeploymentEnginePage() {
  const [deployStep, setDeployStep] = React.useState(0);
  const [isDeploying, setIsDeploying] = React.useState(false);

  const runSimulatedDeployment = () => {
    if (isDeploying) return;
    setIsDeploying(true);
    setDeployStep(1);
    
    setTimeout(() => setDeployStep(2), 1200);
    setTimeout(() => setDeployStep(3), 2800);
    setTimeout(() => setDeployStep(4), 4000);
    setTimeout(() => {
      setDeployStep(5);
      setIsDeploying(false);
    }, 5500);
  };

  return (
    <Box sx={{ bgcolor: '#FAFAFA', minHeight: '100vh', color: '#172554', pb: 16 }}>
      
      {/* 1. THE HERO */}
      <Box sx={{ pt: { xs: 16, md: 24 }, pb: { xs: 12, md: 16 }, position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '500px', background: 'radial-gradient(ellipse at top, rgba(245, 158, 11, 0.15), transparent 70%)', pointerEvents: 'none' }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Typography sx={{ color: '#d97706', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.85rem', mb: 4 }}>
              Cerulea Deployment Engine
            </Typography>
            
            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '3rem', md: '5.5rem' }, lineHeight: 1.05, letterSpacing: '-0.03em', mb: 4, maxWidth: 1000, color: '#172554' }}>
              From visual logic.<br />
              <span style={{ color: '#64748B' }}>To live network state.</span>
            </Typography>
            
            <Typography sx={{ color: '#475569', fontSize: { xs: '1.2rem', md: '1.5rem' }, maxWidth: 750, lineHeight: 1.5, mb: 6, fontWeight: 400 }}>
              Eliminate Web3 DevOps. The Deployment Engine is the compiler and infrastructure provisioner that translates your Studio architecture into deterministic bytecode and spins up your network instantly.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
              <Button 
                href="/company/contact"
                variant="contained" 
                endIcon={<ArrowForwardIcon />} 
                sx={{ 
                  bgcolor: '#f59e0b', color: '#ffffff', px: 4, py: 2, fontSize: '1rem', fontWeight: 700, borderRadius: 2,
                  boxShadow: '0 4px 14px rgba(245, 158, 11, 0.3)',
                  '&:hover': { bgcolor: '#d97706', transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(245, 158, 11, 0.4)' },
                  transition: 'all 0.2s'
                }}
              >
                Contact Enterprise Sales
              </Button>
              <Button 
                href={LINKS.docs}
                target="_blank"
                variant="outlined" 
                sx={{ 
                  borderColor: '#CBD5E1', color: '#172554', px: 4, py: 2, fontSize: '1rem', fontWeight: 700, borderRadius: 2,
                  '&:hover': { borderColor: '#94A3B8', bgcolor: 'rgba(0,0,0,0.02)' }
                }}
              >
                Read the DevOps Docs
              </Button>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* 2. THE TECHNICAL DEEP DIVE */}
      <Container maxWidth="lg">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          
          {/* Feature 1: Deterministic Compilation */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <TerminalOutlinedIcon sx={{ fontSize: 32, color: '#f59e0b', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Deterministic compilation.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3 }}>
                  Your visual models are translated into byte-perfect cryptographic logic.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #f59e0b', pl: 2 }}>
                  The Engine ingests the Abstract Syntax Tree (AST) generated by Cerulea Studio. It cross-references your entities against the active governance panel and deterministically compiles the result into highly optimized WASM binaries or EVM-compatible Solidity bytecode. This ensures zero drift between design and execution.
                </Typography>
                <Button 
                  onClick={runSimulatedDeployment}
                  disabled={isDeploying || deployStep === 5}
                  variant="outlined" 
                  sx={{ mt: 4, color: '#d97706', borderColor: '#d97706', fontWeight: 700, '&:hover': { bgcolor: 'rgba(245, 158, 11, 0.05)', borderColor: '#d97706' } }}
                >
                  {deployStep === 5 ? 'Deployment Complete' : isDeploying ? 'Compiling...' : 'Run Simulation Sequence'}
                </Button>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Box sx={{ borderBottom: '1px solid #E2E8F0', px: 3, py: 2, bgcolor: '#F8FAFC', display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ef4444' }} />
                      <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#f59e0b' }} />
                      <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#10b981' }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.8rem', color: '#64748B', fontFamily: 'monospace', fontWeight: 600 }}>cerulea-engine-cli</Typography>
                  </Box>
                  <Box sx={{ p: 4, fontFamily: 'monospace', fontSize: '0.85rem', color: '#334155', lineHeight: 2, minHeight: 250, bgcolor: '#F8FAFC' }}>
                    <Box sx={{ color: '#d97706', fontWeight: 700 }}>$ cerulea deploy --network mainnet --target wasm</Box>
                    
                    {deployStep >= 1 && <Box mt={1} color="#475569">[INFO] Parsing Studio Architecture JSON...</Box>}
                    {deployStep >= 2 && <Box color="#475569">[INFO] Resolving AST dependencies & Governance roles...</Box>}
                    {deployStep >= 3 && <Box sx={{ color: '#059669', fontWeight: 600 }}>[OK] AST Validated. No cyclical loops detected.</Box>}
                    {deployStep >= 4 && <Box color="#475569">[SYS] Compiling highly-optimized WASM artifact...</Box>}
                    {deployStep >= 5 && (
                      <Box sx={{ mt: 2, p: 2, bgcolor: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: 1 }}>
                        <Box sx={{ color: '#059669', fontWeight: 700 }}>[SUCCESS] Deployment broadcast to Cerulea Public L1.</Box>
                        <Box sx={{ color: '#172554' }}>Contract Address: 0x8a2...4c19</Box>
                        <Box sx={{ color: '#172554' }}>Block Hash: 0x992...e1f0</Box>
                      </Box>
                    )}
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 2: Automated Infrastructure Provisioning */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, p: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Typography sx={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 800, mb: 3, letterSpacing: '0.05em' }}>PRIVATE CHAIN PROVISIONING</Typography>
                  <Stack spacing={3}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, bgcolor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 2 }}>
                      <Box display="flex" alignItems="center" gap={2}>
                        <CloudSyncOutlinedIcon sx={{ color: '#2563eb' }} />
                        <Box>
                          <Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 700 }}>AWS Secure Enclave</Typography>
                          <Typography sx={{ fontSize: '0.8rem', color: '#475569', mt: 0.5 }}>Spinning up 3x pDCF Validator Nodes.</Typography>
                        </Box>
                      </Box>
                      <Typography sx={{ fontSize: '0.8rem', color: '#059669', fontWeight: 800 }}>AUTOMATED</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, bgcolor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 2 }}>
                      <Box display="flex" alignItems="center" gap={2}>
                        <DnsOutlinedIcon sx={{ color: '#d97706' }} />
                        <Box>
                          <Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 700 }}>RPC Endpoints & Relays</Typography>
                          <Typography sx={{ fontSize: '0.8rem', color: '#475569', mt: 0.5 }}>Configuring load-balanced RPC for API integration.</Typography>
                        </Box>
                      </Box>
                      <Typography sx={{ fontSize: '0.8rem', color: '#059669', fontWeight: 800 }}>AUTOMATED</Typography>
                    </Box>
                  </Stack>
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <RocketLaunchOutlinedIcon sx={{ fontSize: 32, color: '#f59e0b', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Zero-touch infrastructure.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3 }}>
                  Deploying a Private Chain shouldn't require hiring a Kubernetes expert.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #f59e0b', pl: 2 }}>
                  When targeting a Sovereign Private Chain, the Engine doesn't just deploy the contract code. It provisions the entire underlying network. It automatically configures secure cloud enclaves, establishes P2P node connections, generates genesis blocks, and provisions load-balanced RPC endpoints.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 3: CI/CD Pipeline Hooks */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <IntegrationInstructionsOutlinedIcon sx={{ fontSize: 32, color: '#f59e0b', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Enterprise CI/CD integration.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3 }}>
                  Cerulea fits seamlessly into the deployment pipelines your software teams already use.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #f59e0b', pl: 2 }}>
                  You don't have to break your DevOps workflows to implement blockchain. The Cerulea Deployment Engine features native webhooks and CLI tools that integrate directly into GitHub Actions, Jenkins, or GitLab. Trigger automated testnet deployments and execute Cerulea AI audits on every code commit.
                </Typography>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Box sx={{ borderBottom: '1px solid #E2E8F0', px: 4, py: 2, bgcolor: '#F8FAFC', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554' }}>Pipeline: main-branch-deploy.yml</Typography>
                  </Box>
                  <Box sx={{ p: 4, fontFamily: 'monospace', fontSize: '0.85rem', color: '#334155', lineHeight: 1.6, bgcolor: '#F8FAFC' }}>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
                      <Box sx={{ width: 16, height: 16, borderRadius: '50%', bgcolor: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography sx={{ color: '#FFFFFF', fontSize: '10px', fontWeight: 900 }}>✓</Typography>
                      </Box>
                      <Box>Run Unit Tests (Jest)</Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
                      <Box sx={{ width: 16, height: 16, borderRadius: '50%', bgcolor: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography sx={{ color: '#FFFFFF', fontSize: '10px', fontWeight: 900 }}>✓</Typography>
                      </Box>
                      <Box>Cerulea AI Security Audit (cerulea-cli audit)</Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
                      <Box sx={{ width: 16, height: 16, borderRadius: '50%', bgcolor: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography sx={{ color: '#FFFFFF', fontSize: '10px', fontWeight: 900 }}>✓</Typography>
                      </Box>
                      <Box>Deploy to Cerulea Staging Testnet</Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', opacity: 0.6 }}>
                      <Box sx={{ width: 16, height: 16, borderRadius: '50%', border: '2px solid #d97706' }} />
                      <Box sx={{ color: '#d97706', fontWeight: 600 }}>Wait for Manual Multi-Sig Approval {'->'} Mainnet</Box>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 4: Multi-Signature Deployment Approvals */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Box sx={{ borderBottom: '1px solid #E2E8F0', px: 4, py: 2, bgcolor: '#F8FAFC', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554' }}>Deployment Approval Status</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#d97706', fontFamily: 'monospace', fontWeight: 700 }}>2 / 3 SIGS REQUIRED</Typography>
                  </Box>
                  <Stack spacing={0}>
                    <Box sx={{ px: 4, py: 2.5, borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 700 }}>Lead Architect</Typography>
                        <Typography sx={{ fontSize: '0.75rem', color: '#475569', fontFamily: 'monospace', mt: 0.5 }}>0x4A2...89F1</Typography>
                      </Box>
                      <Box sx={{ px: 1.5, py: 0.25, borderRadius: 1, border: '1px solid rgba(16, 185, 129, 0.3)', bgcolor: 'rgba(16, 185, 129, 0.1)' }}>
                        <Typography sx={{ fontSize: '0.7rem', color: '#059669', fontWeight: 800 }}>SIGNED</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ px: 4, py: 2.5, borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 700 }}>CISO Security Key</Typography>
                        <Typography sx={{ fontSize: '0.75rem', color: '#475569', fontFamily: 'monospace', mt: 0.5 }}>0x9C1...33B2</Typography>
                      </Box>
                      <Box sx={{ px: 1.5, py: 0.25, borderRadius: 1, border: '1px solid rgba(16, 185, 129, 0.3)', bgcolor: 'rgba(16, 185, 129, 0.1)' }}>
                        <Typography sx={{ fontSize: '0.7rem', color: '#059669', fontWeight: 800 }}>SIGNED</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ px: 4, py: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 700 }}>QA Manager</Typography>
                        <Typography sx={{ fontSize: '0.75rem', color: '#475569', fontFamily: 'monospace', mt: 0.5 }}>0x2B4...11C9</Typography>
                      </Box>
                      <Box sx={{ px: 1.5, py: 0.25, borderRadius: 1, border: '1px solid rgba(245, 158, 11, 0.3)', bgcolor: 'rgba(245, 158, 11, 0.1)' }}>
                        <Typography sx={{ fontSize: '0.7rem', color: '#d97706', fontWeight: 800 }}>PENDING</Typography>
                      </Box>
                    </Box>
                  </Stack>
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <GavelOutlinedIcon sx={{ fontSize: 32, color: '#f59e0b', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Multi-signature deployment approvals.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3 }}>
                  In the enterprise world, pushing code to production is a highly gated process. Cerulea enforces this natively.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #f59e0b', pl: 2 }}>
                  You can configure the Engine to block any Mainnet compilation until a threshold of cryptographic signatures is met. Require approvals from your Lead Architect, QA Manager, and CISO before the deployment sequence is ever initiated.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 5: Proxy Upgrades */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <AltRouteOutlinedIcon sx={{ fontSize: 32, color: '#f59e0b', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Zero-downtime state upgrades.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3 }}>
                  Blockchains are immutable, but enterprise logic changes constantly.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #f59e0b', pl: 2 }}>
                  When you publish a change to an active Studio model, the Deployment Engine automatically implements secure Proxy routing. It deploys the new logic (v2) while pointing the immutable proxy address to it. This allows your application logic to upgrade seamlessly without breaking API connections or losing historical data.
                </Typography>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, overflow: 'hidden', p: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Typography sx={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 800, mb: 3, letterSpacing: '0.05em' }}>STATE PROXY ROUTING</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    
                    {/* User requests */}
                    <Box sx={{ p: 1.5, px: 4, bgcolor: 'rgba(37, 99, 235, 0.05)', border: '1px solid rgba(37, 99, 235, 0.2)', borderRadius: 2, mb: 2 }}>
                      <Typography sx={{ fontSize: '0.8rem', color: '#2563eb', fontWeight: 700 }}>API Requests (0xProxy...)</Typography>
                    </Box>
                    
                    <Box sx={{ width: 2, height: 20, bgcolor: '#CBD5E1' }} />
                    <Box sx={{ width: 200, height: 2, bgcolor: '#CBD5E1' }} />

                    <Box sx={{ display: 'flex', gap: 4, mt: 2 }}>
                      {/* V1 Archived */}
                      <Box sx={{ p: 2, bgcolor: '#F8FAFC', border: '1px dashed #CBD5E1', borderRadius: 2, opacity: 0.6, textAlign: 'center' }}>
                        <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600, mb: 0.5 }}>Logic v1.0.0</Typography>
                        <Typography sx={{ fontSize: '0.7rem', color: '#94A3B8' }}>Archived</Typography>
                      </Box>
                      {/* V2 Live */}
                      <Box sx={{ p: 2, bgcolor: 'rgba(245, 158, 11, 0.05)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: 2, textAlign: 'center' }}>
                        <Typography sx={{ fontSize: '0.75rem', color: '#d97706', fontWeight: 800, mb: 0.5 }}>Logic v1.1.0</Typography>
                        <Typography sx={{ fontSize: '0.7rem', color: '#b45309' }}>Active State Route</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 6: Instant Logic Rollbacks */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, p: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Typography sx={{ fontSize: '0.85rem', color: '#ef4444', fontWeight: 800, mb: 3, letterSpacing: '0.05em' }}>EMERGENCY ROLLBACK INITIATED</Typography>
                  <Stack spacing={2}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, bgcolor: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: 2 }}>
                      <SettingsBackupRestoreOutlinedIcon sx={{ color: '#ef4444' }} />
                      <Box>
                        <Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 700 }}>Severing connection to v1.1.0 (Critical Bug)</Typography>
                        <Typography sx={{ fontSize: '0.8rem', color: '#475569', mt: 0.5 }}>State Proxy routing updated successfully.</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, bgcolor: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: 2 }}>
                      <AltRouteOutlinedIcon sx={{ color: '#059669' }} />
                      <Box>
                        <Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 700 }}>Traffic routed back to v1.0.0</Typography>
                        <Typography sx={{ fontSize: '0.8rem', color: '#475569', mt: 0.5 }}>Network operations restored. 0.0s downtime recorded.</Typography>
                      </Box>
                    </Box>
                  </Stack>
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <SettingsBackupRestoreOutlinedIcon sx={{ fontSize: 32, color: '#f59e0b', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Instant logic rollbacks.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3 }}>
                  Emergency state reversion with zero user disruption.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #f59e0b', pl: 2 }}>
                  If a v2 logic upgrade contains a critical business flaw, you can instantly route API traffic back to the secure v1 contract. Because of Cerulea's Proxy Routing architecture, this rollback happens in milliseconds, completely mitigating downtime and preventing bad state transitions from reaching the ledger.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 7: Encrypted Secrets Vault */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <VpnKeyOutlinedIcon sx={{ fontSize: 32, color: '#f59e0b', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Encrypted secrets vault.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3 }}>
                  Inject environment variables securely at compile time.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #f59e0b', pl: 2 }}>
                  Smart contracts often need to talk to the real world via oracles. Hardcoding API keys is a massive vulnerability. The Deployment Engine includes a zero-knowledge secrets vault that injects environment variables directly into your execution environment. Your keys are cryptographically sealed before the code ever reaches the network.
                </Typography>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Box sx={{ borderBottom: '1px solid #E2E8F0', px: 4, py: 2, bgcolor: '#F8FAFC', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554' }}>Environment Variables (.env.prod)</Typography>
                  </Box>
                  <Box sx={{ p: 4, fontFamily: 'monospace', fontSize: '0.85rem', color: '#334155', lineHeight: 1.8, bgcolor: '#F8FAFC' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography sx={{ color: '#d97706', fontWeight: 600 }}>AWS_S3_BUCKET_KEY</Typography>
                      <Typography sx={{ color: '#059669', fontWeight: 700 }}>[ ENCRYPTED ]</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography sx={{ color: '#d97706', fontWeight: 600 }}>ORACLE_DATA_FEED_URL</Typography>
                      <Typography sx={{ color: '#172554' }}>https://api.internal.data/v2</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography sx={{ color: '#d97706', fontWeight: 600 }}>STRIPE_WEBHOOK_SECRET</Typography>
                      <Typography sx={{ color: '#059669', fontWeight: 700 }}>[ ENCRYPTED ]</Typography>
                    </Box>
                    <Divider sx={{ borderColor: '#E2E8F0', my: 2 }} />
                    <Box sx={{ color: '#2563eb', fontWeight: 600 }}>[SYS] Vault locked. Secrets injected into deployment artifact successfully.</Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 8: Testnet Staging */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, p: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                  <Typography sx={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 800, mb: 4, letterSpacing: '0.05em' }}>ENVIRONMENT TARGET</Typography>
                  <Stack direction="row" spacing={2} justifyContent="center">
                    <Box sx={{ px: 3, py: 1.5, borderRadius: 2, border: '1px dashed #CBD5E1', color: '#64748B' }}>
                      <Typography sx={{ fontSize: '0.85rem', fontWeight: 600 }}>Local Host</Typography>
                    </Box>
                    <Box sx={{ px: 3, py: 1.5, borderRadius: 2, border: '1px solid #f59e0b', bgcolor: 'rgba(245, 158, 11, 0.05)', color: '#d97706', boxShadow: '0 4px 14px rgba(245, 158, 11, 0.15)' }}>
                      <Typography sx={{ fontSize: '0.85rem', fontWeight: 800 }}>Testnet (Active)</Typography>
                    </Box>
                    <Box sx={{ px: 3, py: 1.5, borderRadius: 2, border: '1px solid #E2E8F0', color: '#64748B' }}>
                      <Typography sx={{ fontSize: '0.85rem', fontWeight: 600 }}>Mainnet L1</Typography>
                    </Box>
                  </Stack>
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <ScienceOutlinedIcon sx={{ fontSize: 32, color: '#f59e0b', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Frictionless testnet staging.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3 }}>
                  Never execute code on Mainnet without verifying it in a live sandbox first.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #f59e0b', pl: 2 }}>
                  With a single click, the Engine compiles and pushes your complete architecture to the Cerulea Testnet. Experience exactly how your state models, API endpoints, and governance rules behave in a true networked environment before committing permanent logic to production.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>

        </motion.div>
      </Container>
    </Box>
  );
}