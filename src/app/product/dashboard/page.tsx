'use client';

import * as React from 'react';
import { Box, Container, Typography, Grid, Stack, Button, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import AltRouteOutlinedIcon from '@mui/icons-material/AltRouteOutlined';
import WebhookOutlinedIcon from '@mui/icons-material/WebhookOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import { Variants } from 'framer-motion';

const LINKS = {
  dashboard: 'https://dashboard.cerulea.io',
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

export default function CeruleaDashboardPage() {
  const [copied, setCopied] = React.useState(false);
  const apiEndpoint = 'https://api.cerulea.net/v1/net-44a9b';
  const handleCopy = () => {
    navigator.clipboard.writeText(apiEndpoint).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary', overflowX: 'hidden', pb: 0 }}>
      
      {/* 1. THE HERO */}
      <Box sx={{ pt: { xs: 16, md: 24 }, pb: { xs: 12, md: 16 }, position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '500px', background: 'radial-gradient(ellipse at top, rgba(37, 99, 235, 0.1), transparent 70%)', pointerEvents: 'none' }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 2, py: 1, borderRadius: 2, bgcolor: 'rgba(37, 99, 235, 0.1)', border: '1px solid rgba(37, 99, 235, 0.2)', mb: 4 }}>
              <QueryStatsIcon sx={{ color: '#2563eb', fontSize: 20 }} />
              <Typography sx={{ color: '#2563eb', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                Cerulea Dashboard
              </Typography>
            </Box>
            
            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '3rem', md: '5.5rem' }, lineHeight: 1.05, letterSpacing: '-0.03em', mb: 4, mx: 'auto', maxWidth: 1000, color: 'text.primary' }}>
              Operational command.<br />
              <span style={{ color: 'text.secondary' }}>Absolute visibility.</span>
            </Typography>
            
            <Typography sx={{ color: 'text.secondary', fontSize: { xs: '1.2rem', md: '1.5rem' }, maxWidth: 850, lineHeight: 1.5, mb: 6, mx: 'auto', fontWeight: 400, textAlign: 'justify' }}>
              The unified control plane for your active networks. Monitor live telemetry, manage nodes, provision keys, and execute complex governance actions across your Public L1 applications and Private Sovereign Chains.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
              <Button 
                href="/company/contact"
                variant="contained" 
                endIcon={<ArrowForwardIcon />} 
                sx={{ 
                  bgcolor: '#2563eb', color: '#FFFFFF', px: 4, py: 2, fontSize: '1rem', fontWeight: 700, borderRadius: 2,
                  boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
                  '&:hover': { bgcolor: '#1d4ed8', transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(37, 99, 235, 0.4)' },
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
                  borderColor: 'divider', color: 'text.primary', px: 4, py: 2, fontSize: '1rem', fontWeight: 700, borderRadius: 2,
                  '&:hover': { borderColor: '#94A3B8', bgcolor: 'rgba(0,0,0,0.02)' }
                }}
              >
                View Documentation
              </Button>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* 2. THE TECHNICAL DEEP DIVE */}
      <Box sx={{ pb: { xs: 8, md: 12 }, mb: 0 }}>
        <Container maxWidth="lg">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            
            {/* Feature 1: Fleet/Environment Routing */}
            <Grid container spacing={8} sx={{ py: 8 }} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
              <Grid size={{ xs: 12, md: 7 }}>
                <motion.div variants={fadeUp}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: '#2563eb', borderRadius: 3, p: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 10px 30px rgba(37, 99, 235, 0.08)' }}>
                      <Box>
                        <Typography sx={{ fontSize: '0.9rem', color: 'text.primary', fontWeight: 700 }}>Public Registry App</Typography>
                        <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', mt: 0.5 }}>Target: Cerulea Public L1</Typography>
                      </Box>
                      <Box sx={{ px: 2, py: 0.5, borderRadius: 1, bgcolor: 'rgba(37, 99, 235, 0.1)', border: '1px solid rgba(37, 99, 235, 0.2)' }}>
                        <Typography sx={{ fontSize: '0.75rem', color: '#2563eb', fontWeight: 800 }}>ACTIVE</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 3, p: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.8, boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
                      <Box>
                        <Typography sx={{ fontSize: '0.9rem', color: 'text.primary', fontWeight: 700 }}>Internal Vendor Settlement</Typography>
                        <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', mt: 0.5 }}>Target: Private Sovereign Chain</Typography>
                      </Box>
                      <Box sx={{ px: 2, py: 0.5, borderRadius: 1, bgcolor: 'rgba(5, 150, 105, 0.1)', border: '1px solid rgba(5, 150, 105, 0.2)' }}>
                        <Typography sx={{ fontSize: '0.75rem', color: '#059669', fontWeight: 800 }}>HEALTHY</Typography>
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
              <Grid size={{ xs: 12, md: 5 }}>
                <motion.div variants={fadeUp}>
                  <AltRouteOutlinedIcon sx={{ fontSize: 32, color: '#2563eb', mb: 3 }} />
                  <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: 'text.primary' }}>
                    Multi-environment fleet control.
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                    Manage multiple distinct architectures from a single pane of glass.
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #2563eb', pl: 2, textAlign: 'justify' }}>
                    Whether you have deployed decentralized applications to the shared Public L1 or established strictly permissioned Private Sovereign Chains for internal workflows, Cerulea Dashboard unifies them. Switch context between environments instantly without managing multiple fragmented admin panels.
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>

            <Divider sx={{ borderColor: 'divider', my: 4 }} />

            {/* Feature 2: Unified Telemetry */}
            <Grid container spacing={8} sx={{ py: 8 }} alignItems="center">
              <Grid size={{ xs: 12, md: 5 }}>
                <motion.div variants={fadeUp}>
                  <QueryStatsIcon sx={{ fontSize: 32, color: '#2563eb', mb: 3 }} />
                  <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: 'text.primary' }}>
                    Real-time network telemetry.
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                    Stop querying multiple block explorers and RPC nodes to understand your network health.
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #2563eb', pl: 2, textAlign: 'justify' }}>
                    Cerulea Dashboard aggregates deterministic metrics directly from your deployed state. Monitor live transaction throughput, block propagation times, consensus health, and data volume utilization across all your environments from a high-density interface.
                  </Typography>
                </motion.div>
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                <motion.div variants={fadeUp}>
                  <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                    <Box sx={{ borderBottom: '1px solid', borderColor: 'divider', px: 4, py: 2, bgcolor: '#F8FAFC', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: 'text.primary' }}>Network Telemetry: Production_L1</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#10b981', boxShadow: '0 0 8px #10b981' }} />
                        <Typography sx={{ fontSize: '0.75rem', color: '#059669', fontWeight: 800 }}>SYNCED</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ p: 4, bgcolor: '#FFFFFF' }}>
                      <Grid container spacing={3}>
                        <Grid size={{ xs: 12 }}>
                          <Box sx={{ p: 2, bgcolor: '#F8FAFC', borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
                            <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', mb: 1, fontWeight: 700 }}>CURRENT BLOCK</Typography>
                            <Typography sx={{ fontSize: '1.5rem', color: 'text.primary', fontFamily: 'monospace', fontWeight: 600 }}>#14,892,041</Typography>
                          </Box>
                        </Grid>
                       <Grid size={{ xs: 6 }}>
                          <Box sx={{ p: 2, bgcolor: '#F8FAFC', borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
                            <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', mb: 1, fontWeight: 700 }}>BLOCK TIME</Typography>
                            <Typography sx={{ fontSize: '1.5rem', color: 'text.primary', fontFamily: 'monospace', fontWeight: 600 }}>1.2s <span style={{ fontSize: '0.9rem', color: '#059669', fontWeight: 700 }}>avg</span></Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>

            <Divider sx={{ borderColor: 'divider', my: 4 }} />

            {/* Feature 3: Node Provisioning */}
            <Grid container spacing={8} sx={{ py: 8 }} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
              <Grid size={{ xs: 12, md: 7 }}>
                <motion.div variants={fadeUp}>
                  <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                    <Box sx={{ borderBottom: '1px solid', borderColor: 'divider', px: 4, py: 2, bgcolor: '#F8FAFC' }}>
                      <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: 'text.primary' }}>Private Subnet Topology</Typography>
                    </Box>
                    <Stack spacing={0}>
                      <Box sx={{ px: 4, py: 2.5, borderBottom: '1px solid', borderColor: 'divider', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                          <Typography sx={{ fontSize: '0.9rem', color: 'text.primary', fontWeight: 700 }}>Validator_US_East_01</Typography>
                          <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', mt: 0.5, fontFamily: 'monospace' }}>IP: 192.168.1.104</Typography>
                        </Box>
                        <Button size="small" variant="outlined" sx={{ color: '#dc2626', borderColor: 'rgba(220, 38, 38, 0.3)', '&:hover': { bgcolor: 'rgba(220, 38, 38, 0.05)', borderColor: '#dc2626' } }}>Suspend</Button>
                      </Box>
                      <Box sx={{ px: 4, py: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: 'rgba(37, 99, 235, 0.03)' }}>
                        <Box>
                          <Typography sx={{ fontSize: '0.9rem', color: 'text.primary', fontWeight: 700 }}>Provisioning New Node...</Typography>
                          <Typography sx={{ fontSize: '0.75rem', color: '#2563eb', mt: 0.5, fontWeight: 500 }}>Syncing ledger state (45%)</Typography>
                        </Box>
                        <Box sx={{ px: 2, py: 0.5, borderRadius: 1, bgcolor: 'rgba(37, 99, 235, 0.1)', border: '1px solid rgba(37, 99, 235, 0.2)' }}>
                          <Typography sx={{ fontSize: '0.75rem', color: '#2563eb', fontWeight: 800 }}>PENDING</Typography>
                        </Box>
                      </Box>
                    </Stack>
                  </Box>
                </motion.div>
              </Grid>
              <Grid size={{ xs: 12, md: 5 }}>
                <motion.div variants={fadeUp}>
                  <DnsOutlinedIcon sx={{ fontSize: 32, color: '#2563eb', mb: 3 }} />
                  <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: 'text.primary' }}>
                    Dynamic node provisioning.
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                    Scale your private infrastructure seamlessly as your consortium grows.
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #2563eb', pl: 2, textAlign: 'justify' }}>
                    For Private Sovereign Chains, the Dashboard allows you to manage network topology directly. Whitelist new IP addresses, spin up additional validator nodes to increase fault tolerance, or suspend compromised nodes instantly without disrupting network consensus.
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>

            <Divider sx={{ borderColor: 'divider', my: 4 }} />

            {/* Feature 4: Cryptographic Key Management */}
            <Grid container spacing={8} sx={{ py: 8 }} alignItems="center">
              <Grid size={{ xs: 12, md: 5 }}>
                <motion.div variants={fadeUp}>
                  <VpnKeyOutlinedIcon sx={{ fontSize: 32, color: '#2563eb', mb: 3 }} />
                  <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: 'text.primary' }}>
                    Cryptographic key control.
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                    Your infrastructure is only as secure as the keys that operate it.
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #2563eb', pl: 2, textAlign: 'justify' }}>
                    Cerulea Dashboard provides an enterprise-grade interface for managing operational identities. Generate, assign, and rotate cryptographic keys directly from the control plane. Map specific wallet addresses to the Role-Based Access Control (RBAC) policies you defined during the architecture phase.
                  </Typography>
                </motion.div>
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                <motion.div variants={fadeUp}>
                  <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                    <Box sx={{ borderBottom: '1px solid', borderColor: 'divider', px: 4, py: 2, bgcolor: '#F8FAFC' }}>
                      <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: 'text.primary' }}>Active Key Roster</Typography>
                    </Box>
                    <Stack spacing={0}>
                      <Box sx={{ px: 4, py: 2.5, borderBottom: '1px solid', borderColor: 'divider', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                          <Typography sx={{ fontSize: '0.9rem', color: 'text.primary', fontWeight: 700 }}>Deployer_Root_Key</Typography>
                          <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', fontFamily: 'monospace', mt: 0.5 }}>0x4A2...89F1</Typography>
                        </Box>
                        <Box sx={{ px: 2, py: 0.5, borderRadius: 1, border: '1px solid rgba(37, 99, 235, 0.3)', bgcolor: 'rgba(37, 99, 235, 0.1)' }}>
                          <Typography sx={{ fontSize: '0.75rem', color: '#2563eb', fontWeight: 800 }}>Super Admin</Typography>
                        </Box>
                      </Box>
                      <Box sx={{ px: 4, py: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                          <Typography sx={{ fontSize: '0.9rem', color: 'text.primary', fontWeight: 700 }}>Oracle_Service_Key</Typography>
                          <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', fontFamily: 'monospace', mt: 0.5 }}>0x9C1...33B2</Typography>
                        </Box>
                        <Box sx={{ px: 2, py: 0.5, borderRadius: 1, border: '1px solid rgba(5, 150, 105, 0.3)', bgcolor: 'rgba(5, 150, 105, 0.1)' }}>
                          <Typography sx={{ fontSize: '0.75rem', color: '#059669', fontWeight: 800 }}>Write Only</Typography>
                        </Box>
                      </Box>
                    </Stack>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>

            <Divider sx={{ borderColor: 'divider', my: 4 }} />

            {/* Feature 5: Live Governance Execution */}
            <Grid container spacing={8} sx={{ py: 8 }} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
              <Grid size={{ xs: 12, md: 7 }}>
                <motion.div variants={fadeUp}>
                  <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                    <Box sx={{ borderBottom: '1px solid', borderColor: 'divider', px: 4, py: 2, bgcolor: '#F8FAFC' }}>
                      <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: 'text.primary' }}>Pending Governance Action</Typography>
                    </Box>
                    <Box sx={{ p: 4 }}>
                      <Typography sx={{ fontSize: '0.9rem', color: 'text.primary', fontWeight: 700, mb: 1 }}>Upgrade_Asset_Schema_v2</Typography>
                      <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary', mb: 3 }}>Initiated by: 0x4A2...89F1</Typography>
                      
                      <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ flex: 1, height: 6, bgcolor: '#F1F5F9', borderRadius: 3, overflow: 'hidden' }}>
                          <Box sx={{ width: '66%', height: '100%', bgcolor: '#d97706' }} />
                        </Box>
                        <Typography sx={{ fontSize: '0.8rem', color: '#d97706', fontWeight: 800, fontFamily: 'monospace' }}>2 / 3 SIGS</Typography>
                      </Box>

                      <Stack direction="row" spacing={2}>
                        <Button variant="contained" sx={{ flex: 1, bgcolor: '#2563eb', color: '#ffffff', fontWeight: 700, '&:hover': { bgcolor: '#1d4ed8' } }}>
                          Sign & Execute
                        </Button>
                        <Button variant="outlined" sx={{ flex: 1, borderColor: '#CBD5E1', color: 'text.primary', '&:hover': { borderColor: '#dc2626', color: '#dc2626', bgcolor: 'rgba(220, 38, 38, 0.05)' } }}>
                          Reject Action
                        </Button>
                      </Stack>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
              <Grid size={{ xs: 12, md: 5 }}>
                <motion.div variants={fadeUp}>
                  <GavelOutlinedIcon sx={{ fontSize: 32, color: '#2563eb', mb: 3 }} />
                  <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: 'text.primary' }}>
                    Execute live governance.
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                    Resolve multi-signature requirements and enforce policy updates without writing manual RPC calls.
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #2563eb', pl: 2, textAlign: 'justify' }}>
                    When a critical state transition requires consensus, Cerulea Dashboard surfaces the pending transaction. Authorized operators can review the exact payload, verify the cryptographic intent, and sign the transaction directly from the UI to reach the required multi-signature threshold.
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>

            <Divider sx={{ borderColor: 'divider', my: 4 }} />

            {/* Feature 6: Audit Logs */}
            <Grid container spacing={8} sx={{ py: 8 }} alignItems="center">
              <Grid size={{ xs: 12, md: 5 }}>
                <motion.div variants={fadeUp}>
                  <ReceiptLongOutlinedIcon sx={{ fontSize: 32, color: '#2563eb', mb: 3 }} />
                  <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: 'text.primary' }}>
                    Immutable audit trails.
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                    Enterprise compliance requires undeniable proof of execution.
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #2563eb', pl: 2, textAlign: 'justify' }}>
                    The Dashboard constantly indexes your network state, generating human-readable audit logs for every state transition, failed access attempt, and governance vote. Export these cryptographically proven logs directly to your internal compliance systems or auditor portals.
                  </Typography>
                </motion.div>
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                <motion.div variants={fadeUp}>
                  <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                    <Box sx={{ borderBottom: '1px solid', borderColor: 'divider', px: 4, py: 2, bgcolor: '#F8FAFC', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: 'text.primary' }}>System Audit Log</Typography>
                      <Button size="small" sx={{ color: '#2563eb', fontWeight: 700 }}>Export CSV</Button>
                    </Box>
                    <Box sx={{ p: 3, fontFamily: 'monospace', fontSize: '0.75rem', color: 'text.secondary', lineHeight: 2 }}>
                      <Box sx={{ display: 'flex', gap: 2 }}><Box sx={{ color: '#94A3B8' }}>14:02:11</Box> <Box sx={{ color: '#059669', fontWeight: 700 }}>[SUCCESS]</Box> <Box sx={{ color: 'text.primary' }}>Entity_Write: Asset_Registry by 0x9C1...33B2</Box></Box>
                      <Box sx={{ display: 'flex', gap: 2, bgcolor: '#F8FAFC', py: 0.5, borderRadius: 1 }}><Box sx={{ color: '#94A3B8', ml: 1 }}>14:05:43</Box> <Box sx={{ color: '#dc2626', fontWeight: 700 }}>[REVERT] </Box> <Box sx={{ color: 'text.primary' }}>Unauthorized Call: Update_Metadata by 0x2B4...11C9</Box></Box>
                      <Box sx={{ display: 'flex', gap: 2 }}><Box sx={{ color: '#94A3B8' }}>14:12:00</Box> <Box sx={{ color: '#2563eb', fontWeight: 700 }}>[GOVERN]</Box> <Box sx={{ color: 'text.primary' }}>Threshold Met (2/3): Signature added by 0x4A2...89F1</Box></Box>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>

            <Divider sx={{ borderColor: 'divider', my: 4 }} />

            {/* Feature 7: State Backups */}
            <Grid container spacing={8} sx={{ py: 8 }} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
              <Grid size={{ xs: 12, md: 7 }}>
                <motion.div variants={fadeUp}>
                  <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                    <Box sx={{ borderBottom: '1px solid', borderColor: 'divider', px: 4, py: 2, bgcolor: '#F8FAFC' }}>
                      <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: 'text.primary' }}>State Snapshots (Private Chain)</Typography>
                    </Box>
                    <Stack spacing={0}>
                      <Box sx={{ px: 4, py: 2.5, borderBottom: '1px solid', borderColor: 'divider', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                          <Typography sx={{ fontSize: '0.9rem', color: 'text.primary', fontWeight: 700 }}>Daily_Automated_Snapshot</Typography>
                          <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', mt: 0.5 }}>Block #14,800,000 • Size: 4.2 GB</Typography>
                        </Box>
                        <Button size="small" variant="outlined" sx={{ color: 'text.primary', borderColor: '#CBD5E1', '&:hover': { bgcolor: '#F8FAFC', borderColor: 'text.primary' } }}>Restore</Button>
                      </Box>
                      <Box sx={{ px: 4, py: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                          <Typography sx={{ fontSize: '0.9rem', color: 'text.primary', fontWeight: 700 }}>Pre_Migration_Manual_Backup</Typography>
                          <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', mt: 0.5 }}>Block #14,210,050 • Size: 3.8 GB</Typography>
                        </Box>
                        <Button size="small" variant="outlined" sx={{ color: 'text.primary', borderColor: '#CBD5E1', '&:hover': { bgcolor: '#F8FAFC', borderColor: 'text.primary' } }}>Restore</Button>
                      </Box>
                    </Stack>
                  </Box>
                </motion.div>
              </Grid>
              <Grid size={{ xs: 12, md: 5 }}>
                <motion.div variants={fadeUp}>
                  <SettingsBackupRestoreIcon sx={{ fontSize: 32, color: '#2563eb', mb: 3 }} />
                  <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: 'text.primary' }}>
                    State snapshots and recovery.
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                    Disaster recovery protocols for strictly isolated environments.
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #2563eb', pl: 2, textAlign: 'justify' }}>
                    For Private Sovereign Chains, you own the ledger. The Dashboard allows you to configure automated state snapshots or trigger manual backups before major logic upgrades. If an internal network fails, you can restore the complete cryptographic state to a new node cluster instantly.
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>

            <Divider sx={{ borderColor: 'divider', my: 4 }} />

            {/* Feature 8: Endpoint Management */}
            <Grid container spacing={8} sx={{ py: 8 }} alignItems="center">
              <Grid size={{ xs: 12, md: 5 }}>
                <motion.div variants={fadeUp}>
                  <WebhookOutlinedIcon sx={{ fontSize: 32, color: '#2563eb', mb: 3 }} />
                  <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: 'text.primary' }}>
                    Integration endpoint provisioning.
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.6, mb: 3, textAlign: 'justify' }}>
                    Provide your development teams with secure, stable access to the compiled network.
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #2563eb', pl: 2, textAlign: 'justify' }}>
                    The Dashboard is where your integrations begin. Generate persistent API endpoints, manage standard RPC routing, and configure outbound webhooks. When a critical state transition occurs on-chain, your traditional enterprise backend can be notified immediately without continuously polling the network.
                  </Typography>
                </motion.div>
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                <motion.div variants={fadeUp}>
                  <Box sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                    <Box sx={{ borderBottom: '1px solid', borderColor: 'divider', px: 4, py: 2, bgcolor: '#F8FAFC' }}>
                      <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: 'text.primary' }}>Network Connections</Typography>
                    </Box>
                    <Box sx={{ p: 4 }}>
                      <Box sx={{ mb: 4 }}>
                        <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', mb: 1, fontWeight: 700 }}>PRIMARY REST API ENDPOINT</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 1.5, bgcolor: '#F8FAFC', border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
                          <Typography sx={{ fontSize: '0.85rem', color: '#2563eb', fontFamily: 'monospace', fontWeight: 600 }}>{apiEndpoint}</Typography>
                          <Button size="small" onClick={handleCopy} sx={{ color: copied ? '#059669' : 'text.primary', minWidth: 'auto', p: 0.5, fontWeight: 700, transition: 'color 0.2s' }}>
                            {copied ? 'Copied!' : 'Copy'}
                          </Button>
                        </Box>
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', mb: 1, fontWeight: 700 }}>REGISTERED WEBHOOKS</Typography>
                        <Box sx={{ p: 1.5, bgcolor: '#F8FAFC', border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
                          <Typography sx={{ fontSize: '0.85rem', color: 'text.primary', fontWeight: 700, mb: 0.5 }}>On_Asset_Transfer</Typography>
                          <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', fontFamily: 'monospace' }}>POST https://internal.erp.corp/webhooks/cerulea</Typography>
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