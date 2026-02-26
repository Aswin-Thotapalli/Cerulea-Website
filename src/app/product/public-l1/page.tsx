'use client';

import * as React from 'react';
import { Box, Container, Typography, Grid, Stack, Button, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import SecurityIcon from '@mui/icons-material/Security';
import MemoryIcon from '@mui/icons-material/Memory';
import PublicIcon from '@mui/icons-material/Public';
import CodeIcon from '@mui/icons-material/Code';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SpeedIcon from '@mui/icons-material/Speed';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import { Variants } from 'framer-motion';

const LINKS = {
  studio: 'https://studio.cerulea.app',
  docs: 'https://cerulea.app/docs',
  explorer: 'https://explorer.cerulea.app',
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

export default function CeruleaPublicL1Page() {
  return (
    <Box sx={{ bgcolor: '#FAFAFA', minHeight: '100vh', color: '#172554', pb: 0 }}>
      
      {/* 1. THE HERO */}
      <Box sx={{ pt: { xs: 16, md: 24 }, pb: { xs: 12, md: 16 }, position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '500px', background: 'radial-gradient(ellipse at top, rgba(59, 130, 246, 0.1), transparent 70%)', pointerEvents: 'none' }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Typography sx={{ color: '#2563eb', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.85rem', mb: 4 }}>
              Cerulea Public L1
            </Typography>
            
            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '3rem', md: '5.5rem' }, lineHeight: 1.05, letterSpacing: '-0.03em', mb: 4, mx: 'auto', maxWidth: 1000, color: '#172554' }}>
              Immutable shared state.<br />
              <span style={{ color: '#64748B' }}>Dynamic consensus.</span>
            </Typography>
            
            <Typography sx={{ color: '#475569', fontSize: { xs: '1.2rem', md: '1.5rem' }, maxWidth: 750, lineHeight: 1.5, mb: 6, mx: 'auto', fontWeight: 400 }}>
              Deploy your applications to a high-throughput public network designed for enterprise-grade verifiability. Secured by the proprietary Dynamic Consensus Framework, the Cerulea L1 delivers absolute cryptographic security without compromising on execution speed or user experience.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
              <Button 
                href="/company/contact"
                variant="contained" 
                endIcon={<ArrowForwardIcon />} 
                sx={{ 
                  bgcolor: '#2563eb', color: '#ffffff', px: 4, py: 2, fontSize: '1rem', fontWeight: 700, borderRadius: 2,
                  boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
                  '&:hover': { bgcolor: '#1d4ed8', transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(37, 99, 235, 0.4)' },
                  transition: 'all 0.2s'
                }}
              >
                Deploy to Mainnet
              </Button>
              <Button 
                href={LINKS.explorer}
                target="_blank"
                variant="outlined" 
                sx={{ 
                  borderColor: '#CBD5E1', color: '#172554', px: 4, py: 2, fontSize: '1rem', fontWeight: 700, borderRadius: 2,
                  '&:hover': { borderColor: '#94A3B8', bgcolor: 'rgba(0,0,0,0.02)' }
                }}
              >
                View Block Explorer
              </Button>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* 2. THE TECHNICAL DEEP DIVE */}
      <Container maxWidth="lg" sx={{ pb: 12 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          
          {/* Feature 1: Performance Metrics */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <SpeedIcon sx={{ fontSize: 32, color: '#2563eb', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Uncompromising execution speed.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                  Your infrastructure should never be the bottleneck for your decentralized application.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #2563eb', pl: 2, textAlign: 'justify' }}>
                  The Cerulea Public L1 is optimized for maximum transactional throughput. By decoupling execution environments and utilizing an ultra-efficient consensus layer, the network sustains tens of thousands of transactions per second with sub-second finality. Your users experience web2 speeds backed by web3 security.
                </Typography>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, p: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 6 }}>
                      <Box sx={{ p: 3, bgcolor: '#F8FAFC', borderRadius: 2, border: '1px solid #E2E8F0' }}>
                        <Typography sx={{ fontSize: '0.75rem', color: '#64748B', mb: 1, fontWeight: 800, letterSpacing: '0.05em' }}>AVG BLOCK TIME</Typography>
                        <Typography sx={{ fontSize: '2rem', color: '#172554', fontFamily: 'monospace', fontWeight: 700 }}>0.4s</Typography>
                      </Box>
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                      <Box sx={{ p: 3, bgcolor: '#F8FAFC', borderRadius: 2, border: '1px solid #E2E8F0' }}>
                        <Typography sx={{ fontSize: '0.75rem', color: '#64748B', mb: 1, fontWeight: 800, letterSpacing: '0.05em' }}>TIME TO FINALITY</Typography>
                        <Typography sx={{ fontSize: '2rem', color: '#172554', fontFamily: 'monospace', fontWeight: 700 }}>~0.8s</Typography>
                      </Box>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Box sx={{ p: 3, bgcolor: 'rgba(37, 99, 235, 0.05)', borderRadius: 2, border: '1px solid rgba(37, 99, 235, 0.2)' }}>
                        <Typography sx={{ fontSize: '0.75rem', color: '#2563eb', mb: 1, fontWeight: 800, letterSpacing: '0.05em' }}>PEAK SUSTAINED THROUGHPUT</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1 }}>
                          <Typography sx={{ fontSize: '2.5rem', color: '#172554', fontFamily: 'monospace', fontWeight: 700, lineHeight: 1 }}>45,000+</Typography>
                          <Typography sx={{ fontSize: '1rem', color: '#2563eb', fontWeight: 800, pb: 0.5 }}>TPS</Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 2: Gas Abstraction */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Box sx={{ borderBottom: '1px solid #E2E8F0', px: 4, py: 2, bgcolor: '#F8FAFC' }}>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554' }}>Network Billing Configuration</Typography>
                  </Box>
                  <Box sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, p: 2, bgcolor: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: 2 }}>
                      <Box>
                        <Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 700 }}>Sponsored Execution Enabled</Typography>
                        <Typography sx={{ fontSize: '0.8rem', color: '#475569', mt: 0.5 }}>End-users interact with this dApp at zero cost.</Typography>
                      </Box>
                      <AccountBalanceWalletIcon sx={{ color: '#10b981', fontSize: 28 }} />
                    </Box>
                    
                    <Typography sx={{ fontSize: '0.75rem', color: '#64748B', mb: 1, fontWeight: 800 }}>DEVELOPER FUNDING SOURCE</Typography>
                    <Box sx={{ p: 2, bgcolor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography sx={{ fontSize: '0.85rem', color: '#172554', fontFamily: 'monospace', fontWeight: 600 }}>Corporate Fiat Account (INR)</Typography>
                      <Typography sx={{ fontSize: '0.85rem', color: '#10b981', fontWeight: 800 }}>Active</Typography>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <AccountBalanceWalletIcon sx={{ fontSize: 32, color: '#2563eb', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Gas abstraction. Predictable economics.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                  Do not force your users to acquire volatile cryptocurrencies just to click a button.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #2563eb', pl: 2, textAlign: 'justify' }}>
                  Cerulea natively supports transaction sponsoring at the protocol level. Decentralized application developers can subsidize network fees using predictable fiat currency payments. This allows you to build completely frictionless, zero-gas onboarding experiences for your end-users while maintaining the cryptographic security of a public ledger.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 3: DCF & Validator Set */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center">
           <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <FingerprintIcon sx={{ fontSize: 32, color: '#2563eb', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Decentralized Proof of Identity.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                  Secured by the public, protected by cryptography. No corporate gatekeeping required.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #2563eb', pl: 2, textAlign: 'justify' }}>
                  The Cerulea Public L1 is secured by our proprietary <strong>Dynamic Consensus Framework (DCF)</strong>. This mechanism unites Active Proof of Stake (aPoS) with a decentralized Proof of Identity (PoI) protocol. Anyone in the public can establish a cryptographic reputation and run a validator node. By weighting consensus against both active stake and verified on-chain identity, Cerulea effectively neutralizes Sybil attacks without requiring centralized KYC.
                </Typography>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Box sx={{ borderBottom: '1px solid #E2E8F0', px: 4, py: 2, bgcolor: '#F8FAFC', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554' }}>DCF Validation Matrix: Block #14892041</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#059669', fontFamily: 'monospace', fontWeight: 700 }}>FINALIZED</Typography>
                  </Box>
                  <Box sx={{ p: 4 }}>
                    <Grid container spacing={3} sx={{ mb: 4 }}>
                      <Grid size={{ xs: 6 }}>
                        <Box sx={{ p: 2, bgcolor: '#F8FAFC', borderRadius: 2, border: '1px solid #E2E8F0' }}>
                          <Typography sx={{ fontSize: '0.75rem', color: '#64748B', mb: 1, fontWeight: 800 }}>aPoS VOTE WEIGHT</Typography>
                          <Typography sx={{ fontSize: '1.25rem', color: '#172554', fontFamily: 'monospace', fontWeight: 700 }}>82.4% <span style={{ fontSize: '0.8rem', color: '#059669' }}>Quorum</span></Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 6 }}>
                        <Box sx={{ p: 2, bgcolor: '#F8FAFC', borderRadius: 2, border: '1px solid #E2E8F0' }}>
                          <Typography sx={{ fontSize: '0.75rem', color: '#64748B', mb: 1, fontWeight: 800 }}>PoI REPUTATION SCORE</Typography>
                          <Typography sx={{ fontSize: '1.25rem', color: '#172554', fontFamily: 'monospace', fontWeight: 700 }}>98.2 <span style={{ fontSize: '0.8rem', color: '#2563eb' }}>Verified</span></Typography>
                        </Box>
                      </Grid>
                    </Grid>
                    <Box sx={{ p: 2, bgcolor: '#F8FAFC', borderRadius: 2, border: '1px solid #E2E8F0', fontFamily: 'monospace', fontSize: '0.75rem', color: '#334155', lineHeight: 1.8 }}>
                      <Box>[SYS] Initiating DCF synthesis matrix...</Box>
                      <Box sx={{ color: '#2563eb', fontWeight: 600 }}>[AUTH] Decentralized Identity signatures verified (PoI).</Box>
                      <Box sx={{ color: '#059669', fontWeight: 600 }}>[AUTH] Stake thresholds confirmed active (aPoS).</Box>
                      <Box>[SYS] State root calculated: 0x8f2d...4c1a</Box>
                      <Box sx={{ color: '#172554', mt: 1, fontWeight: 700 }}>Block appended to network state.</Box>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 4: Dual VM Execution */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, p: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Stack spacing={4}>
                    <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
                      <Box sx={{ p: 1.5, bgcolor: 'rgba(37, 99, 235, 0.05)', borderRadius: 2, border: '1px solid rgba(37, 99, 235, 0.2)' }}>
                        <MemoryIcon sx={{ color: '#2563eb' }} />
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: '1rem', color: '#172554', fontWeight: 700 }}>Native WASM Execution</Typography>
                        <Typography sx={{ fontSize: '0.85rem', color: '#475569', mt: 0.5, lineHeight: 1.6 }}>
                          High-performance execution for complex data models and intensive computational workloads. Compiled directly from Cerulea Studio.
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
                      <Box sx={{ p: 1.5, bgcolor: 'rgba(16, 185, 129, 0.05)', borderRadius: 2, border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                        <CodeIcon sx={{ color: '#10b981' }} />
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: '1rem', color: '#172554', fontWeight: 700 }}>Absolute EVM Compatibility</Typography>
                        <Typography sx={{ fontSize: '0.85rem', color: '#475569', mt: 0.5, lineHeight: 1.6 }}>
                          Full support for standard Solidity and Yul bytecode. Deploy existing smart contracts to the Cerulea network without modifying a single line of your original code.
                        </Typography>
                      </Box>
                    </Box>
                  </Stack>
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <MemoryIcon sx={{ fontSize: 32, color: '#2563eb', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Dual-environment execution.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                  The network adapts to your logic, not the other way around.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #2563eb', pl: 2, textAlign: 'justify' }}>
                  The Cerulea L1 does not force you into a single paradigm. The network architecture features a dual-execution layer capable of processing both optimized WASM binaries and standard EVM bytecode in parallel. This ensures maximum performance for native Cerulea Studio deployments while maintaining total interoperability with the broader Web3 ecosystem.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 5: Native Interoperability */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <SyncAltIcon sx={{ fontSize: 32, color: '#2563eb', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Native cross-chain bridges.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                  Your infrastructure shouldn't live in a silo. Connect directly to global liquidity and data sets.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #2563eb', pl: 2, textAlign: 'justify' }}>
                  Cerulea is built for an interconnected future. The Public L1 features cryptographically secured native bridge protocols allowing you to safely transfer assets, state data, and logic payloads directly to Ethereum, Solana, and other major global networks, spanning both EVM and non-EVM ecosystems.
                </Typography>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Box sx={{ borderBottom: '1px solid #E2E8F0', px: 4, py: 2, bgcolor: '#F8FAFC' }}>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554' }}>Cross-Chain Routing</Typography>
                  </Box>
                  <Box sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                      <Box sx={{ flex: 1, p: 2, bgcolor: 'rgba(37, 99, 235, 0.05)', border: '1px solid rgba(37, 99, 235, 0.2)', borderRadius: 2, textAlign: 'center' }}>
                        <Typography sx={{ fontSize: '0.75rem', color: '#2563eb', fontWeight: 800, mb: 0.5 }}>ORIGIN</Typography>
                        <Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 700 }}>Cerulea L1</Typography>
                      </Box>
                      <SyncAltIcon sx={{ color: '#64748B' }} />
                      <Box sx={{ flex: 1, p: 2, bgcolor: 'rgba(124, 58, 237, 0.05)', border: '1px solid rgba(124, 58, 237, 0.2)', borderRadius: 2, textAlign: 'center' }}>
                        <Typography sx={{ fontSize: '0.75rem', color: '#7c3aed', fontWeight: 800, mb: 0.5 }}>DESTINATION</Typography>
                        <Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 700 }}>Ethereum Mainnet</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ p: 2, bgcolor: '#F8FAFC', borderRadius: 2, border: '1px solid #E2E8F0', fontFamily: 'monospace', fontSize: '0.75rem', color: '#334155', lineHeight: 1.8 }}>
                      <Box>[SYS] Locking asset on Cerulea bridge contract...</Box>
                      <Box sx={{ color: '#2563eb', fontWeight: 600 }}>[AUTH] Cryptographic proof generated.</Box>
                      <Box>[SYS] Relaying proof to Ethereum target...</Box>
                      <Box sx={{ color: '#10b981', mt: 1, fontWeight: 700 }}>Transfer complete. Wrapped asset minted on target chain.</Box>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

        </motion.div>
      </Container>
    </Box>
  );
}