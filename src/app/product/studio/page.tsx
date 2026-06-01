'use client';

import * as React from 'react';
import { Box, Container, Typography, Grid, Stack, Button, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DataObjectIcon from '@mui/icons-material/DataObject';
import HubIcon from '@mui/icons-material/Hub';
import TerminalIcon from '@mui/icons-material/Terminal';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import ApiIcon from '@mui/icons-material/Api';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import { Variants } from 'framer-motion';

// Centralized URLs for easy updating later
const LINKS = {
  studio: 'https://studio.cerulea.io',
  docs: '/developers/docs',
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

export default function StudioPage() {
  return (
    <Box sx={{ bgcolor: '#FAFAFA', minHeight: '100vh', color: '#172554', pb: 16 }}>
      
      {/* 1. THE HERO */}
      <Box sx={{ pt: { xs: 16, md: 24 }, pb: { xs: 12, md: 16 }, position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '500px', background: 'radial-gradient(ellipse at top, rgba(37, 99, 235, 0.15), transparent 70%)', pointerEvents: 'none' }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Typography sx={{ color: '#3b82f6', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.85rem', mb: 4 }}>
              Cerulea Studio
            </Typography>
            
            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '3rem', md: '5.5rem' }, lineHeight: 1.05, letterSpacing: '-0.03em', mb: 4, maxWidth: 1000, color: '#172554' }}>
              Visual architecture.<br />
              <span style={{ color: '#64748B' }}>Cryptographic execution.</span>
            </Typography>
            
            <Typography sx={{ color: '#475569', fontSize: { xs: '1.2rem', md: '1.5rem' }, maxWidth: 750, lineHeight: 1.5, mb: 6, fontWeight: 400 }}>
              Stop writing smart contracts by hand. Visually construct your data models and governance rules in a drag-and-drop GUI, and let Cerulea Studio compile your logic directly into deterministic, network-ready bytecode.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
              <Button 
                href={LINKS.studio}
                target="_blank"
                variant="contained" 
                endIcon={<ArrowForwardIcon />} 
                sx={{ 
                  bgcolor: '#172554', color: '#FFFFFF', px: 4, py: 2, fontSize: '1rem', fontWeight: 600, borderRadius: 2,
                  boxShadow: '0 4px 14px rgba(23, 37, 84, 0.2)',
                  '&:hover': { bgcolor: '#1E2B4D', transform: 'translateY(-2px)' },
                  transition: 'all 0.2s'
                }}
              >
                Open Studio Environment
              </Button>
              <Button 
                href={LINKS.docs}
                target="_blank"
                variant="outlined" 
                sx={{ 
                  borderColor: '#E2E8F0', color: '#172554', px: 4, py: 2, fontSize: '1rem', fontWeight: 600, borderRadius: 2,
                  '&:hover': { borderColor: '#172554', bgcolor: 'rgba(23, 37, 84, 0.02)' }
                }}
              >
                Read the Docs
              </Button>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* 2. THE TECHNICAL DEEP DIVE */}
      <Container maxWidth="lg">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          
          {/* Feature 1: Dual VM Architecture */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center">
           <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <TerminalIcon sx={{ fontSize: 32, color: '#3b82f6', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 700, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Dual-environment compilation.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3 }}>
                  Build once, deploy anywhere. You do not need to choose between execution environments before you design your application.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #3b82f6', pl: 2 }}>
                  Cerulea Studio’s compiler natively supports both our proprietary, high-performance <strong>WASM execution environment</strong> and strict <strong>EVM compatibility</strong>. Your visual schemas are deterministically translated into Solidity or custom WASM bytecode based on your target network parameters.
                </Typography>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Box sx={{ borderBottom: '1px solid #E2E8F0', px: 3, py: 2, display: 'flex', gap: 2, bgcolor: '#FFFFFF' }}>
                    <Typography sx={{ fontSize: '0.8rem', color: '#64748B', fontFamily: 'monospace' }}>schema.json</Typography>
                    <Typography sx={{ fontSize: '0.8rem', color: '#3b82f6', fontFamily: 'monospace' }}>compiler.log</Typography>
                  </Box>
                  <Box sx={{ p: 4, fontFamily: 'monospace', fontSize: '0.85rem', color: '#475569', lineHeight: 1.8 }}>
                    <Box sx={{ color: '#059669', fontWeight: 700 }}>$ cerulea compile --target dual</Box>
                    <Box>[✓] Parsing visual entities...</Box>
                    <Box>[✓] Validating relational constraints...</Box>
                    <Box>[✓] Generating WASM artifact (0x7a...9f)</Box>
                    <Box>[✓] Generating EVM bytecode (0x60...00)</Box>
                    <Box sx={{ color: '#3b82f6', mt: 2, fontWeight: 700 }}>Ready for Deployment Engine handoff.</Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 2: Data Modeling */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 3, p: 4, position: 'relative', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 2, height: '60%', bgcolor: 'rgba(59,130,246,0.1)', zIndex: 0 }} />
                  <Stack spacing={4} sx={{ position: 'relative', zIndex: 1 }}>
                    <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', p: 2.5, borderRadius: 2, width: '70%', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                      <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', mb: 1, color: '#172554' }}>Entity: Asset_Registry</Typography>
                      <Typography sx={{ color: '#64748B', fontSize: '0.8rem', fontFamily: 'monospace' }}>+ asset_id: bytes32 (Primary Key)</Typography>
                      <Typography sx={{ color: '#64748B', fontSize: '0.8rem', fontFamily: 'monospace' }}>+ owner: address</Typography>
                    </Box>
                    <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #3b82f6', p: 2.5, borderRadius: 2, width: '70%', alignSelf: 'flex-end', boxShadow: '0 8px 16px rgba(59,130,246,0.08)' }}>
                      <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', mb: 1, color: '#172554' }}>Entity: Transfer_Log</Typography>
                      <Typography sx={{ color: '#64748B', fontSize: '0.8rem', fontFamily: 'monospace' }}>+ log_id: uint256</Typography>
                      <Typography sx={{ color: '#64748B', fontSize: '0.8rem', fontFamily: 'monospace' }}>{`->`} maps_to: Asset_Registry.asset_id</Typography>
                    </Box>
                  </Stack>
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <DataObjectIcon sx={{ fontSize: 32, color: '#3b82f6', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 700, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Map your database. We make it immutable.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3 }}>
                  Design your application's entities and relationships using familiar database architecture principles.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #3b82f6', pl: 2 }}>
                  In traditional Web3 development, translating relational schemas into on-chain state requires manually writing complex smart contracts. Cerulea Studio bridges this gap. It takes your visual models and automatically compiles them into highly optimized, tamper-evident data structures. You get the familiar experience of mapping a database, backed by the cryptographic security of a deployed smart contract.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 3: Governance */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <LockOutlinedIcon sx={{ fontSize: 32, color: '#3b82f6', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 700, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Absolute access control. Enforced on-chain.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3 }}>
                  Define who can view, modify, or execute specific state transitions before your network goes live.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #3b82f6', pl: 2 }}>
                  Configure Role-Based Access Control (RBAC) and complex multi-signature policies through a simple visual interface. Cerulea Studio embeds these rules natively into the compiled bytecode, ensuring that unauthorized state transitions are securely blocked at the network level.
                </Typography>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Box sx={{ borderBottom: '1px solid #E2E8F0', px: 4, py: 2, bgcolor: '#F8FAFC' }}>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554' }}>Policy Configuration: Transfer_Asset</Typography>
                  </Box>
                  <Stack spacing={0} sx={{ p: 0 }}>
                    <Box sx={{ px: 4, py: 3, borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', color: '#172554' }}>Required Role</Typography>
                        <Typography sx={{ fontSize: '0.8rem', color: '#64748B', mt: 0.5 }}>The actor initiating the transaction.</Typography>
                      </Box>
                      <Box sx={{ bgcolor: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)', px: 2, py: 1, borderRadius: 1.5 }}>
                        <Typography sx={{ fontSize: '0.8rem', color: '#2563eb', fontWeight: 700 }}>System_Admin</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ px: 4, py: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', color: '#172554' }}>Consensus Requirement</Typography>
                        <Typography sx={{ fontSize: '0.8rem', color: '#64748B', mt: 0.5 }}>Signatures needed to execute.</Typography>
                      </Box>
                      <Box sx={{ bgcolor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', px: 2, py: 1, borderRadius: 1.5 }}>
                        <Typography sx={{ fontSize: '0.8rem', color: '#059669', fontWeight: 700 }}>2/3 Multi-Sig</Typography>
                      </Box>
                    </Box>
                  </Stack>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 4: AI Validation */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, p: 3, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 3, pb: 2, borderBottom: '1px solid #E2E8F0' }}>
                    <ForumOutlinedIcon sx={{ color: '#7c3aed' }} />
                    <Typography sx={{ fontWeight: 700, color: '#172554', fontSize: '0.9rem' }}>Cerulea Intelligence</Typography>
                  </Stack>
                  <Stack spacing={3}>
                    <Box sx={{ alignSelf: 'flex-end', bgcolor: '#F1F5F9', p: 2, borderRadius: 2, borderBottomRightRadius: 0, maxWidth: '85%' }}>
                      <Typography sx={{ fontSize: '0.85rem', color: '#172554', fontWeight: 600 }}>How do I restrict write access for the Asset_Registry entity so only admins can modify it?</Typography>
                    </Box>
                    <Box sx={{ alignSelf: 'flex-start', bgcolor: 'rgba(124, 58, 237, 0.05)', border: '1px solid rgba(124, 58, 237, 0.2)', p: 2, borderRadius: 2, borderBottomLeftRadius: 0, maxWidth: '90%' }}>
                      <Typography sx={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.6 }}>
                        I see you have the <strong>Asset_Registry</strong> entity active in your workspace. To restrict it, you should bind a <strong>System_Admin</strong> role to its write function in the Governance module. Would you like me to highlight the exact panel for you?
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <ForumOutlinedIcon sx={{ fontSize: 32, color: '#3b82f6', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 700, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Your on-demand architectural intelligence.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3 }}>
                  Build complex networks without constantly referencing documentation. Get precise configuration help exactly when you need it.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #3b82f6', pl: 2 }}>
                  Cerulea Intelligence is natively embedded into your workspace, understanding your architectural context in real time. Instead of digging through documentation, you can query the engine directly to resolve structural bottlenecks, optimize network parameters, and securely configure permission boundaries on the fly.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 5: API Generation */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <ApiIcon sx={{ fontSize: 32, color: '#3b82f6', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 700, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Auto-generated programmatic access.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3 }}>
                  Your frontend and backend teams should not have to learn custom blockchain RPC commands.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #3b82f6', pl: 2 }}>
                  Once your architecture is compiled, Cerulea Studio automatically generates the necessary programmatic interfaces. You receive ready-to-use APIs and SDK hooks that map directly to your visual data models. Your decentralized applications (dApps) and enterprise systems can begin interacting with the deployed network immediately.
                </Typography>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Box sx={{ borderBottom: '1px solid #E2E8F0', px: 4, py: 2, bgcolor: '#FFFFFF' }}>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554' }}>Generated API Endpoint: POST /api/asset-registry</Typography>
                  </Box>
                  <Box sx={{ p: 4, fontFamily: 'monospace', fontSize: '0.85rem', color: '#334155', lineHeight: 1.6 }}>
                    <Box sx={{ color: '#7c3aed', mb: 1, fontWeight: 700 }}>const</Box> <Box component="span" sx={{ color: '#172554' }}>response = </Box> <Box component="span" sx={{ color: '#7c3aed', fontWeight: 700 }}>await</Box> <Box component="span" sx={{ color: '#2563eb' }}>ceruleaClient</Box>.assets.<Box component="span" sx={{ color: '#d97706', fontWeight: 600 }}>create</Box>(<Box component="span" sx={{ color: '#172554' }}>{`{`}</Box><br />
                    &nbsp;&nbsp;owner: <Box component="span" sx={{ color: '#059669' }}>"0x71C...9A"</Box>,<br />
                    &nbsp;&nbsp;metadata: <Box component="span" sx={{ color: '#059669' }}>"QmHash..."</Box><br />
                    <Box component="span" sx={{ color: '#172554' }}>{`}`}</Box>);<br /><br />
                    <Box sx={{ color: '#64748B', fontStyle: 'italic' }}>// Network handles signing and broadcasting natively</Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 6: State Upgrades */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, p: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Stack spacing={3}>
                    <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                      <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#94A3B8' }} />
                      <Box>
                        <Typography sx={{ fontSize: '0.85rem', color: '#172554', fontWeight: 700 }}>v1.0.0 (Archived)</Typography>
                        <Typography sx={{ fontSize: '0.8rem', color: '#64748B', mt: 0.2 }}>Initial Asset_Registry deployment.</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', position: 'relative' }}>
                      <Box sx={{ position: 'absolute', left: 5, top: -20, width: 2, height: 20, bgcolor: '#E2E8F0' }} />
                      <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#10b981', boxShadow: '0 0 10px rgba(16, 185, 129, 0.4)' }} />
                      <Box>
                        <Typography sx={{ fontSize: '0.85rem', color: '#172554', fontWeight: 700 }}>v1.1.0 (Live)</Typography>
                        <Typography sx={{ fontSize: '0.8rem', color: '#64748B', mt: 0.2 }}>Added compliance metadata fields. Proxy routed successfully.</Typography>
                      </Box>
                    </Box>
                  </Stack>
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <AltRouteIcon sx={{ fontSize: 32, color: '#3b82f6', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 700, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Safe, iterative state upgrades.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3 }}>
                  Blockchain state is immutable, but your business logic will inevitably evolve over time.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #3b82f6', pl: 2 }}>
                  Cerulea Studio handles complex schema upgrades through a secure versioning system. When you modify a live data model, it calculates the required state migration paths and deploys proxy routing under the hood. This ensures your application logic updates smoothly without compromising historical data integrity.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 7: Testnet Simulation */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <ScienceOutlinedIcon sx={{ fontSize: 32, color: '#3b82f6', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 700, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Frictionless testnet deployment.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3 }}>
                  Verify your logic in a live staging environment before pushing state to production.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #3b82f6', pl: 2 }}>
                  Before executing a mainnet deployment, Cerulea Studio provisions a one-click deployment to our public testnet or a staging private chain. You can simulate transactions, test governance boundaries, and audit logic flow in a real network environment, ensuring your architecture performs exactly as intended prior to the final production handoff.
                </Typography>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Box sx={{ borderBottom: '1px solid #E2E8F0', px: 3, py: 2, display: 'flex', alignItems: 'center', gap: 2, bgcolor: '#FFFFFF' }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#d97706', boxShadow: '0 0 8px rgba(217, 119, 6, 0.4)' }} />
                    <Typography sx={{ fontSize: '0.8rem', color: '#64748B', fontFamily: 'monospace', fontWeight: 600 }}>Cerulea Testnet Configured</Typography>
                  </Box>
                  <Box sx={{ p: 4, fontFamily: 'monospace', fontSize: '0.85rem', color: '#475569', lineHeight: 1.8 }}>
                    <Box>[✓] Testnet environment initialized.</Box>
                    <Box>[✓] Deploying WASM artifact to testnet...</Box>
                    <Box>[✓] Simulating POST /api/asset-registry...</Box>
                    <Box sx={{ color: '#059669', fontWeight: 700 }}>[✓] Transaction confirmed (Block #45902).</Box>
                    <Box sx={{ mt: 1 }}>[✓] Simulating unauthorized write access...</Box>
                    <Box sx={{ color: '#dc2626', fontWeight: 700 }}>[!] Transaction reverted: Role 'User' lacks permission.</Box>
                    <Box sx={{ color: '#3b82f6', mt: 2, fontWeight: 700 }}>Testnet verification complete. Ready for production.</Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 8: Targeted Deployment */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
                  <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid rgba(59,130,246,0.2)', borderRadius: 3, p: 4, textAlign: 'center', boxShadow: '0 10px 30px rgba(59,130,246,0.05)' }}>
                    <HubIcon sx={{ fontSize: 40, color: '#3b82f6', mb: 2, opacity: 0.9 }} />
                    <Typography sx={{ fontWeight: 800, mb: 1, color: '#172554' }}>Public L1 (DCF)</Typography>
                    <Typography sx={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 500 }}>Shared State • aPoS + PoI</Typography>
                  </Box>
                  <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: 3, p: 4, textAlign: 'center', boxShadow: '0 10px 30px rgba(16, 185, 129, 0.05)' }}>
                    <LockOutlinedIcon sx={{ fontSize: 40, color: '#10b981', mb: 2, opacity: 0.9 }} />
                    <Typography sx={{ fontWeight: 800, mb: 1, color: '#172554' }}>Standalone Private</Typography>
                    <Typography sx={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 500 }}>Sovereign Nodes • Telemetry</Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <HubIcon sx={{ fontSize: 32, color: '#3b82f6', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 700, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Targeted deployment architecture.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3 }}>
                  One architecture, completely different operational environments. Define where your logic lives with a single click.
                </Typography>
                <Stack spacing={3} sx={{ mt: 4 }}>
                  <Box sx={{ borderLeft: '2px solid #3b82f6', pl: 2 }}>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '0.95rem', mb: 0.5 }}>Target: Cerulea Public L1</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.5 }}>
                      Deploy to our shared network, secured by the proprietary <strong>Dynamic Consensus Framework (DCF)</strong>. This is a high-throughput synthesis of aPoS and Proof of Identity (PoI).
                    </Typography>
                  </Box>
                  <Box sx={{ borderLeft: '2px solid #10b981', pl: 2 }}>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '0.95rem', mb: 0.5 }}>Target: Private Sovereign Chains</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.5 }}>
                      Spin up completely isolated, standalone network instances. You retain absolute control over hosting and node participation, while Cerulea maintains seamless telemetry hooks for enterprise monitoring.
                    </Typography>
                  </Box>
                </Stack>
              </motion.div>
            </Grid>
          </Grid>

        </motion.div>
      </Container>
    </Box>
  );
}