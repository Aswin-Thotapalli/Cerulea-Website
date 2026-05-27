'use client';

import * as React from 'react';
import { Box, Container, Typography, Grid, Stack, Button, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import RuleOutlinedIcon from '@mui/icons-material/RuleOutlined';
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import { Variants } from 'framer-motion';

const LINKS = {
  studio: 'https://studio.cerulea.io',
  docs: 'https://cerulea.io/docs',
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

export default function CeruleaGovernancePage() {
  // Interactive state for the Multi-Sig Button
  const [signState, setSignState] = React.useState('Awaiting Signature');

  const handleSign = () => {
    if (signState !== 'Awaiting Signature') return;
    setSignState('Authenticating...');
    setTimeout(() => {
      setSignState('SIGNED');
    }, 1500);
  };

  return (
    <Box sx={{ bgcolor: '#FAFAFA', minHeight: '100vh', color: '#172554', pb: 0 }}>
      
      {/* 1. THE HERO */}
      <Box sx={{ pt: { xs: 16, md: 24 }, pb: { xs: 12, md: 16 }, position: 'relative' }}>
        {/* Violet Glow for Governance */}
        <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '500px', background: 'radial-gradient(ellipse at top, rgba(124, 58, 237, 0.15), transparent 70%)', pointerEvents: 'none' }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 2, py: 1, borderRadius: 2, bgcolor: 'rgba(124, 58, 237, 0.1)', border: '1px solid rgba(124, 58, 237, 0.2)', mb: 4 }}>
              <AdminPanelSettingsOutlinedIcon sx={{ color: '#7c3aed', fontSize: 20 }} />
              <Typography sx={{ color: '#7c3aed', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                Granular Governance
              </Typography>
            </Box>
            
            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '3rem', md: '5.5rem' }, lineHeight: 1.05, letterSpacing: '-0.03em', mb: 4, mx: 'auto', maxWidth: 1000, color: '#172554' }}>
              Zero-trust architecture.<br />
              <span style={{ color: '#64748B' }}>Absolute authority.</span>
            </Typography>
            
            <Typography sx={{ color: '#475569', fontSize: { xs: '1.2rem', md: '1.5rem' }, maxWidth: 850, lineHeight: 1.5, mb: 6, mx: 'auto', fontWeight: 400 }}>
              Translate your corporate compliance rules into unbreakable cryptographic law. Define exactly who can read, write, or execute data, and implement emergency protocol controls to protect your enterprise network.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
              <Button 
                href="/company/contact"
                variant="contained" 
                endIcon={<ArrowForwardIcon />} 
                sx={{ 
                  bgcolor: '#7c3aed', color: '#ffffff', px: 4, py: 2, fontSize: '1rem', fontWeight: 700, borderRadius: 2,
                  boxShadow: '0 4px 14px rgba(124, 58, 237, 0.3)',
                  '&:hover': { bgcolor: '#6d28d9', transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(124, 58, 237, 0.4)' },
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
                Read the Security Docs
              </Button>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* 2. THE TECHNICAL DEEP DIVE */}
      <Box sx={{ pb: { xs: 8, md: 12 }, mb: 0 }}>
        <Container maxWidth="lg">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            
            {/* Feature 1: Visual RBAC (Fixed Alignment) */}
            <Grid container spacing={8} sx={{ py: 8 }} alignItems="center">
              <Grid size={{ xs: 12, md: 5 }}>
                <motion.div variants={fadeUp}>
                  <AdminPanelSettingsOutlinedIcon sx={{ fontSize: 32, color: '#7c3aed', mb: 3 }} />
                  <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                    Visual Role-Based Access Control.
                  </Typography>
                  <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                    Map your exact organizational chart directly onto the blockchain.
                  </Typography>
                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #7c3aed', pl: 2, textAlign: 'justify' }}>
                    Writing custom permission modifiers manually is prone to fatal human error. Cerulea Studio provides a perfectly mapped visual RBAC matrix. You can define specific roles and assign them granular Read, Write, and Execute permissions at the specific entity or field level. The Deployment Engine instantly compiles this into battle-tested cryptographic gates.
                  </Typography>
                </motion.div>
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                <motion.div variants={fadeUp}>
                  <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                    
                    {/* Fixed Header */}
                    <Box sx={{ borderBottom: '1px solid #E2E8F0', px: 4, py: 2, bgcolor: '#F8FAFC', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554' }}>Entity: Financial_Record</Typography>
                      <Box sx={{ px: 1.5, py: 0.5, borderRadius: 1, bgcolor: 'rgba(124, 58, 237, 0.1)' }}>
                        <Typography sx={{ fontSize: '0.7rem', color: '#7c3aed', fontWeight: 800, letterSpacing: '0.05em' }}>RBAC MATRIX</Typography>
                      </Box>
                    </Box>
                    
                    {/* Fixed Matrix Layout */}
                    <Box sx={{ p: 0 }}>
                      {/* Columns Header Row */}
                      <Box sx={{ display: 'flex', borderBottom: '1px solid #E2E8F0', bgcolor: '#F8FAFC' }}>
                        <Box sx={{ width: '40%', p: 2, borderRight: '1px solid #E2E8F0' }}>
                          <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 800 }}>ROLE</Typography>
                        </Box>
                        <Box sx={{ width: '60%', display: 'flex' }}>
                          <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 800 }}>READ</Typography></Box>
                          <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 800 }}>WRITE</Typography></Box>
                          <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 800 }}>EXECUTE</Typography></Box>
                        </Box>
                      </Box>
                      
                      {/* Role Row 1 */}
                      <Box sx={{ display: 'flex', borderBottom: '1px solid #E2E8F0' }}>
                        <Box sx={{ width: '40%', p: 2, borderRight: '1px solid #E2E8F0', display: 'flex', alignItems: 'center' }}>
                          <Typography sx={{ fontSize: '0.85rem', color: '#172554', fontWeight: 700 }}>CFO_Admin</Typography>
                        </Box>
                        <Box sx={{ width: '60%', display: 'flex', py: 2 }}>
                          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}><Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#10b981' }} /></Box>
                          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}><Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#10b981' }} /></Box>
                          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}><Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#10b981' }} /></Box>
                        </Box>
                      </Box>

                      {/* Role Row 2 */}
                      <Box sx={{ display: 'flex', borderBottom: '1px solid #E2E8F0' }}>
                        <Box sx={{ width: '40%', p: 2, borderRight: '1px solid #E2E8F0', display: 'flex', alignItems: 'center' }}>
                          <Typography sx={{ fontSize: '0.85rem', color: '#172554', fontWeight: 700 }}>Data_Clerk</Typography>
                        </Box>
                        <Box sx={{ width: '60%', display: 'flex', py: 2 }}>
                          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}><Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#10b981' }} /></Box>
                          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}><Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#10b981' }} /></Box>
                          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}><Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ef4444' }} /></Box>
                        </Box>
                      </Box>

                      {/* Role Row 3 */}
                      <Box sx={{ display: 'flex' }}>
                        <Box sx={{ width: '40%', p: 2, borderRight: '1px solid #E2E8F0', display: 'flex', alignItems: 'center' }}>
                          <Typography sx={{ fontSize: '0.85rem', color: '#172554', fontWeight: 700 }}>Public_User</Typography>
                        </Box>
                        <Box sx={{ width: '60%', display: 'flex', py: 2 }}>
                          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}><Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ef4444' }} /></Box>
                          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}><Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ef4444' }} /></Box>
                          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}><Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ef4444' }} /></Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>

            <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

            {/* Feature 2: Threshold Multi-Signature (Interactive) */}
            <Grid container spacing={8} sx={{ py: 8 }} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
              <Grid size={{ xs: 12, md: 7 }}>
                <motion.div variants={fadeUp}>
                  <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, p: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                    <Typography sx={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 800, mb: 3, letterSpacing: '0.05em' }}>PENDING STATE TRANSITION</Typography>
                    <Stack spacing={2}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, bgcolor: 'rgba(124, 58, 237, 0.05)', border: '1px solid rgba(124, 58, 237, 0.2)', borderRadius: 2 }}>
                        <Box>
                          <Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 700 }}>Action: Withdraw_Treasury_Funds</Typography>
                          <Typography sx={{ fontSize: '0.8rem', color: '#475569', mt: 0.5 }}>Amount: $2,500,000 USDC</Typography>
                        </Box>
                        <Typography sx={{ fontSize: '1.2rem', color: signState === 'SIGNED' ? '#059669' : '#7c3aed', fontWeight: 800, fontFamily: 'monospace', transition: 'color 0.3s' }}>
                          {signState === 'SIGNED' ? '3 / 3' : '2 / 3'}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, bgcolor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 2 }}>
                        <Typography sx={{ fontSize: '0.85rem', color: '#475569', fontWeight: 600 }}>CEO_Wallet (0x12a...9b4)</Typography>
                        <Typography sx={{ fontSize: '0.75rem', color: '#059669', fontWeight: 700 }}>SIGNED</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, bgcolor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 2 }}>
                        <Typography sx={{ fontSize: '0.85rem', color: '#475569', fontWeight: 600 }}>CFO_Wallet (0x88c...2d1)</Typography>
                        <Typography sx={{ fontSize: '0.75rem', color: '#059669', fontWeight: 700 }}>SIGNED</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, bgcolor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 2 }}>
                        <Typography sx={{ fontSize: '0.85rem', color: '#475569', fontWeight: 600 }}>Board_Trustee (0x4f3...1a9)</Typography>
                        {signState === 'SIGNED' ? (
                          <Typography sx={{ fontSize: '0.75rem', color: '#059669', fontWeight: 700 }}>SIGNED</Typography>
                        ) : (
                          <Button 
                            onClick={handleSign}
                            size="small" 
                            variant="contained" 
                            sx={{ 
                              bgcolor: signState === 'Authenticating...' ? '#94A3B8' : '#7c3aed', 
                              color: '#ffffff', 
                              minWidth: 140,
                              fontWeight: 700,
                              boxShadow: 'none',
                              '&:hover': { bgcolor: signState === 'Authenticating...' ? '#94A3B8' : '#6d28d9', boxShadow: 'none' }
                            }}
                          >
                            {signState}
                          </Button>
                        )}
                      </Box>
                    </Stack>
                  </Box>
                </motion.div>
              </Grid>
              <Grid size={{ xs: 12, md: 5 }}>
                <motion.div variants={fadeUp}>
                  <GavelOutlinedIcon sx={{ fontSize: 32, color: '#7c3aed', mb: 3 }} />
                  <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                    Multi-signature thresholds.
                  </Typography>
                  <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                    Never rely on a single point of failure for critical business actions.
                  </Typography>
                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #7c3aed', pl: 2, textAlign: 'justify' }}>
                    For sensitive operations like transferring large assets, migrating data structures, or upgrading logic contracts, Cerulea allows you to define strict M-of-N threshold requirements. The network will freeze the pending transaction until the required number of authorized executives sign off cryptographically from the Cerulea Dashboard.
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>

            <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

            {/* Feature 3: Global Circuit Breakers */}
            <Grid container spacing={8} sx={{ py: 8 }} alignItems="center">
              <Grid size={{ xs: 12, md: 5 }}>
                <motion.div variants={fadeUp}>
                  <PanToolOutlinedIcon sx={{ fontSize: 32, color: '#7c3aed', mb: 3 }} />
                  <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                    Global circuit breakers.
                  </Typography>
                  <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                    Stop zero-day exploits in their tracks with Pausable state logic.
                  </Typography>
                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #7c3aed', pl: 2, textAlign: 'justify' }}>
                    Even audited logic can encounter unforeseen edge cases. Cerulea Governance allows you to configure global "Pause" modifiers on any smart contract deployed to the network. If an anomaly is detected, designated Admin identities can instantly halt all Read, Write, and Execute functions on a contract, securing the state while a patch is developed.
                  </Typography>
                </motion.div>
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                <motion.div variants={fadeUp}>
                  <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                    <Box sx={{ borderBottom: '1px solid #E2E8F0', px: 4, py: 2, bgcolor: 'rgba(239, 68, 68, 0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#ef4444' }}>Emergency Action Center</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#ef4444', boxShadow: '0 0 8px rgba(239, 68, 68, 0.5)' }} />
                        <Typography sx={{ fontSize: '0.75rem', color: '#ef4444', fontWeight: 800 }}>PAUSED</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ p: 4, fontFamily: 'monospace', fontSize: '0.85rem', color: '#334155', lineHeight: 2, bgcolor: '#F8FAFC' }}>
                      <Box sx={{ color: '#2563eb', fontWeight: 600 }}>$ execute call Liquid_Vault.withdraw(1000)</Box>
                      <Box sx={{ color: '#dc2626', mt: 1, fontWeight: 700 }}>[ERROR] Transaction Reverted: Contract is globally PAUSED.</Box>
                      <Box sx={{ color: '#dc2626' }}>[INFO] Execution blocked by modifier: whenNotPaused()</Box>
                      <Box sx={{ color: '#2563eb', fontWeight: 600, mt: 2 }}>$ check state Liquid_Vault.status</Box>
                      <Box sx={{ color: '#172554', fontWeight: 700 }}>STATUS: FROZEN</Box>
                      <Box sx={{ color: '#475569' }}>PAUSED_BY: 0xAdminKey_99a</Box>
                      <Box sx={{ color: '#475569' }}>TIMESTAMP: 14:02:11 UTC</Box>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>

            <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

            {/* Feature 4: Targeted Asset Freezing */}
            <Grid container spacing={8} sx={{ py: 8 }} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
              <Grid size={{ xs: 12, md: 7 }}>
                <motion.div variants={fadeUp}>
                  <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, p: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                    <Typography sx={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 800, mb: 3, letterSpacing: '0.05em' }}>COMPLIANCE BLACKLIST REGISTRY</Typography>
                    <Stack spacing={3}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, bgcolor: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: 2 }}>
                        <Box>
                          <Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 700 }}>Wallet: 0xSuspicious...44B</Typography>
                          <Typography sx={{ fontSize: '0.8rem', color: '#475569', mt: 0.5 }}>Reason: OFAC Sanctions List</Typography>
                        </Box>
                        <Box sx={{ px: 1.5, py: 0.5, borderRadius: 1, bgcolor: '#ef4444' }}>
                          <Typography sx={{ fontSize: '0.7rem', color: '#ffffff', fontWeight: 800 }}>ASSETS FROZEN</Typography>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, bgcolor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 2 }}>
                        <Box>
                          <Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 700 }}>Wallet: 0xCorporate...11C</Typography>
                          <Typography sx={{ fontSize: '0.8rem', color: '#475569', mt: 0.5 }}>Reason: Standard User</Typography>
                        </Box>
                        <Box sx={{ px: 1.5, py: 0.5, borderRadius: 1, bgcolor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                          <Typography sx={{ fontSize: '0.7rem', color: '#059669', fontWeight: 800 }}>ACTIVE</Typography>
                        </Box>
                      </Box>
                    </Stack>
                  </Box>
                </motion.div>
              </Grid>
              <Grid size={{ xs: 12, md: 5 }}>
                <motion.div variants={fadeUp}>
                  <BlockOutlinedIcon sx={{ fontSize: 32, color: '#7c3aed', mb: 3 }} />
                  <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                    Targeted asset freezing.
                  </Typography>
                  <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                    Maintain compliance by blacklisting specific bad actors instantly.
                  </Typography>
                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #7c3aed', pl: 2, textAlign: 'justify' }}>
                    When issuing tokenized real-world assets (RWA) or stablecoins, enterprise issuers must comply with regulatory sanctions. Cerulea allows central compliance teams to maintain a dynamic on-chain blacklist. When a wallet address is flagged, they are deterministically prevented from sending or receiving the regulated asset, isolating the bad actor without impacting the rest of the ecosystem.
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>

            <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

            {/* Feature 5: Contextual Policy Enforcement */}
            <Grid container spacing={8} sx={{ py: 8 }} alignItems="center">
              <Grid size={{ xs: 12, md: 5 }}>
                <motion.div variants={fadeUp}>
                  <RuleOutlinedIcon sx={{ fontSize: 32, color: '#7c3aed', mb: 3 }} />
                  <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                    Dynamic policy enforcement.
                  </Typography>
                  <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                    Permissions that adapt to real-world context and conditions.
                  </Typography>
                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #7c3aed', pl: 2, textAlign: 'justify' }}>
                    Basic access control is static. Cerulea allows you to build contextual policies that evaluate the state of the network before executing. Implement global transfer limits, enforce mandatory time-locks on large withdrawals, or trigger automated logic if suspicious activity is detected by your oracle feeds.
                  </Typography>
                </motion.div>
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                <motion.div variants={fadeUp}>
                  <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                    <Box sx={{ borderBottom: '1px solid #E2E8F0', px: 4, py: 2, bgcolor: '#F8FAFC' }}>
                      <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554' }}>Active Policy Gates</Typography>
                    </Box>
                    <Box sx={{ p: 4 }}>
                      <Box sx={{ mb: 4 }}>
                        <Typography sx={{ fontSize: '0.75rem', color: '#64748B', mb: 1, fontWeight: 800 }}>POLICY: TRANSFER_LIMIT</Typography>
                        <Box sx={{ p: 2, bgcolor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 2 }}>
                          <Typography sx={{ fontSize: '0.85rem', color: '#2563eb', fontFamily: 'monospace', fontWeight: 600 }}>REQUIRE (amount {'<='} 50,000 USD);</Typography>
                          <Typography sx={{ fontSize: '0.75rem', color: '#ef4444', mt: 1, fontWeight: 600 }}>REVERT: "Exceeds daily transfer quota."</Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: '0.75rem', color: '#64748B', mb: 1, fontWeight: 800 }}>POLICY: ESCROW_TIME_LOCK</Typography>
                        <Box sx={{ p: 2, bgcolor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 2 }}>
                          <Typography sx={{ fontSize: '0.85rem', color: '#2563eb', fontFamily: 'monospace', fontWeight: 600 }}>REQUIRE (block.timestamp {'>'} unlockTime);</Typography>
                          <Typography sx={{ fontSize: '0.75rem', color: '#059669', mt: 1, fontWeight: 600 }}>STATUS: Condition Met. Funds Unlocked.</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>

          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}