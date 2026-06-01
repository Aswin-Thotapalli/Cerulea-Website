'use client';

import * as React from 'react';
import { Box, Container, Typography, Grid, Stack, Button, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import MoneyOffOutlinedIcon from '@mui/icons-material/MoneyOffOutlined';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import { Variants } from 'framer-motion';

const LINKS = {
  contact: '/company/contact',
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

export default function CeruleaPrivateChainsPage() {
  // Interactive states for the simulated UI buttons
  const [pruneStatus, setPruneStatus] = React.useState('Execute Prune');
  const [exportStatus, setExportStatus] = React.useState('Export CSV');

  const handlePrune = () => {
    setPruneStatus('Pruned ✓');
    setTimeout(() => setPruneStatus('Execute Prune'), 3000);
  };

  const handleExport = () => {
    setExportStatus('Exported ✓');
    setTimeout(() => setExportStatus('Export CSV'), 3000);
  };

  return (
    <Box sx={{ bgcolor: '#FAFAFA', minHeight: '100vh', color: '#172554', pb: 16 }}>
      
      {/* 1. THE HERO */}
      <Box sx={{ pt: { xs: 16, md: 24 }, pb: { xs: 12, md: 16 }, position: 'relative' }}>
        {/* Emerald Green Glow for Private Chains */}
        <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '500px', background: 'radial-gradient(ellipse at top, rgba(16, 185, 129, 0.1), transparent 70%)', pointerEvents: 'none' }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Typography sx={{ color: '#059669', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.85rem', mb: 4 }}>
              Cerulea Private Chains
            </Typography>
            
            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '3rem', md: '5.5rem' }, lineHeight: 1.05, letterSpacing: '-0.03em', mb: 4, maxWidth: 1000, color: '#172554' }}>
              Sovereign infrastructure.<br />
              <span style={{ color: '#64748B' }}>Absolute data control.</span>
            </Typography>
            
            <Typography sx={{ color: '#475569', fontSize: { xs: '1.2rem', md: '1.5rem' }, maxWidth: 750, lineHeight: 1.5, mb: 6, fontWeight: 400 }}>
              Deploy isolated, high-performance blockchain networks designed exclusively for enterprise workflows. Retain total ownership of your node topology, participant access, and historical state without exposing sensitive data to the public.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
              <Button 
                href={LINKS.contact}
                variant="contained" 
                endIcon={<ArrowForwardIcon />} 
                sx={{ 
                  bgcolor: '#10b981', color: '#ffffff', px: 4, py: 2, fontSize: '1rem', fontWeight: 700, borderRadius: 2,
                  boxShadow: '0 4px 14px rgba(16, 185, 129, 0.3)',
                  '&:hover': { bgcolor: '#059669', transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(16, 185, 129, 0.4)' },
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
                Read the Architecture Docs
              </Button>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* 2. THE TECHNICAL DEEP DIVE */}
      <Container maxWidth="lg">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          
          {/* Feature 1: Isolated Node Topology */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <DnsOutlinedIcon sx={{ fontSize: 32, color: '#059669', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Custom node topology.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3 }}>
                  Your network, your hardware. Run validator nodes entirely within your corporate firewall.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #059669', pl: 2 }}>
                  Unlike public chains where external actors secure the ledger, Cerulea Private Chains allow you to dictate exactly where the network lives. Deploy validator nodes across your preferred cloud providers (AWS, Azure) or maintain them entirely on-premise. The network state never leaves your trusted environment.
                </Typography>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Box sx={{ borderBottom: '1px solid #E2E8F0', px: 4, py: 2, bgcolor: '#F8FAFC', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554' }}>Network Topology: Settlement_Net</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#059669', fontFamily: 'monospace', fontWeight: 700 }}>4/4 PEERS SYNCED</Typography>
                  </Box>
                  <Stack spacing={0}>
                    <Box sx={{ px: 4, py: 2.5, borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 700 }}>Validator_Core_US_East</Typography>
                        <Typography sx={{ fontSize: '0.75rem', color: '#475569', fontFamily: 'monospace', mt: 0.5 }}>IP: 10.0.1.45 (AWS Private Subnet)</Typography>
                      </Box>
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#10b981', boxShadow: '0 0 8px #10b981' }} />
                    </Box>
                    <Box sx={{ px: 4, py: 2.5, borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 700 }}>Validator_Partner_EU_Central</Typography>
                        <Typography sx={{ fontSize: '0.75rem', color: '#475569', fontFamily: 'monospace', mt: 0.5 }}>IP: 172.16.0.12 (Azure VPN Link)</Typography>
                      </Box>
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#10b981', boxShadow: '0 0 8px #10b981' }} />
                    </Box>
                    <Box sx={{ px: 4, py: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 700 }}>Observer_Node_OnPrem</Typography>
                        <Typography sx={{ fontSize: '0.75rem', color: '#475569', fontFamily: 'monospace', mt: 0.5 }}>IP: 192.168.1.100 (Internal Datacenter)</Typography>
                      </Box>
                      <Box sx={{ px: 1.5, py: 0.25, borderRadius: 1, border: '1px solid rgba(37, 99, 235, 0.3)', bgcolor: 'rgba(37, 99, 235, 0.1)' }}>
                        <Typography sx={{ fontSize: '0.7rem', color: '#2563eb', fontWeight: 800 }}>READ ONLY</Typography>
                      </Box>
                    </Box>
                  </Stack>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 2: Consortium Confidentiality */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, overflow: 'hidden', p: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Typography sx={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 800, mb: 3, letterSpacing: '0.05em' }}>CONSORTIUM DATA PRIVACY</Typography>
                  <Stack spacing={3}>
                    <Box sx={{ p: 2, bgcolor: 'rgba(5, 150, 105, 0.05)', border: '1px solid rgba(5, 150, 105, 0.2)', borderRadius: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography sx={{ fontSize: '0.85rem', color: '#059669', fontWeight: 700 }}>Channel: Bank_A &lt;&gt; Bank_B</Typography>
                        <LockOutlinedIcon sx={{ color: '#059669', fontSize: 16 }} />
                      </Box>
                      <Typography sx={{ fontSize: '0.8rem', color: '#172554', fontFamily: 'monospace' }}>Payload: {"{ invoice_id: 'INV-992', amount: 450000 }"}</Typography>
                    </Box>
                    
                    <Box sx={{ textAlign: 'center' }}>
                      <SyncAltOutlinedIcon sx={{ color: '#94A3B8' }} />
                    </Box>

                    <Box sx={{ p: 2, bgcolor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography sx={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 700 }}>Observer: Bank_C (Unauthorized)</Typography>
                        <VisibilityOffOutlinedIcon sx={{ color: '#64748B', fontSize: 16 }} />
                      </Box>
                      <Typography sx={{ fontSize: '0.8rem', color: '#94A3B8', fontFamily: 'monospace' }}>Payload: [ENCRYPTED] ZKP Verified: TRUE</Typography>
                    </Box>
                  </Stack>
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <VisibilityOffOutlinedIcon sx={{ fontSize: 32, color: '#059669', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Sub-network confidentiality.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3 }}>
                  Share a ledger without exposing your business logic to competitors.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #059669', pl: 2 }}>
                  In a consortium network, not every participant should see every transaction. Cerulea supports advanced Data Confidentiality utilizing Private Channels, encrypted state payloads, and Zero-Knowledge Proofs (ZKP). Two banks can execute a trade on the shared ledger, while a third bank only sees cryptographic proof that a valid transaction occurred—never the sensitive data itself.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 3: Permissioned DCF Consensus */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <HubOutlinedIcon sx={{ fontSize: 32, color: '#059669', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Permissioned Dynamic Consensus.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3 }}>
                  Zero-gas economics backed by a strictly permissioned variant of DCF.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #059669', pl: 2 }}>
                  Private chains do not rely on volatile tokens to incentivize honest behavior. Instead, they utilize a strictly permissioned variant of our Dynamic Consensus Framework (pDCF). Validators are authenticated by enterprise identity, achieving incredibly high transactional throughput and immediate finality without the overhead of public consensus mechanisms.
                </Typography>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Box sx={{ borderBottom: '1px solid #E2E8F0', px: 4, py: 2, bgcolor: '#F8FAFC' }}>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554' }}>Consensus Engine: pDCF Active</Typography>
                  </Box>
                  <Box sx={{ p: 4, fontFamily: 'monospace', fontSize: '0.85rem', color: '#334155', lineHeight: 1.8, bgcolor: '#F8FAFC' }}>
                    <Box>[SYS] Initializing Permissioned Dynamic Consensus...</Box>
                    <Box>[INFO] Gas computation module: <span style={{ color: '#dc2626', fontWeight: 700 }}>DISABLED</span></Box>
                    <Box>[AUTH] Validating 12 authorized enterprise signatures.</Box>
                    <Box sx={{ color: '#059669', fontWeight: 700 }}>[OK] Strict pDCF Quorum reached (10/12).</Box>
                    <Box>[SYS] State transition committed to local ledger.</Box>
                    <Box sx={{ color: '#2563eb', mt: 2, fontWeight: 700 }}>Block #49921 finalized in 420ms.</Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 4: Legacy Data Migration */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, overflow: 'hidden', p: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Typography sx={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 800, mb: 3, letterSpacing: '0.05em' }}>DATA INGESTION PIPELINE</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box sx={{ width: '100%', p: 2, bgcolor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 2 }}>
                      <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 800, mb: 1 }}>LEGACY SQL (POSTGRES)</Typography>
                      <Typography sx={{ fontSize: '0.8rem', color: '#172554', fontFamily: 'monospace' }}>SELECT * FROM legacy_users;</Typography>
                    </Box>
                    <ArrowForwardIcon sx={{ transform: 'rotate(90deg)', color: '#059669', my: 1 }} />
                    <Box sx={{ width: '100%', p: 2, bgcolor: 'rgba(5, 150, 105, 0.05)', border: '1px solid rgba(5, 150, 105, 0.2)', borderRadius: 2 }}>
                      <Typography sx={{ fontSize: '0.75rem', color: '#059669', fontWeight: 800, mb: 1 }}>CERULEA ENTITY</Typography>
                      <Typography sx={{ fontSize: '0.8rem', color: '#172554', fontFamily: 'monospace' }}>Entity: Verified_User [Mapped]</Typography>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <StorageOutlinedIcon sx={{ fontSize: 32, color: '#059669', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Seamless Web2 data ingestion.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3 }}>
                  Enterprises do not start from scratch. Bring your legacy data with you.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #059669', pl: 2 }}>
                  Transitioning to a blockchain architecture shouldn't require abandoning decades of historical records. Cerulea integrates natively with industry-standard ETL tools. You can map your existing PostgreSQL, Oracle, or SAP database columns directly into your new Cerulea Studio visual models.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 5: Regulatory Compliance */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <PolicyOutlinedIcon sx={{ fontSize: 32, color: '#059669', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Native regulatory compliance.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3 }}>
                  Immutable ledgers natively conflict with GDPR and HIPAA. We fixed that.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #059669', pl: 2 }}>
                  Through the Dashboard, you can provision specific "Read-Only Auditor Nodes" granting compliance officers real-time network oversight. Furthermore, Cerulea implements cryptographic state-pruning, allowing enterprises to execute "Right to be Forgotten" (GDPR) data deletions without breaking historical hash continuity.
                </Typography>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Box sx={{ borderBottom: '1px solid #E2E8F0', px: 4, py: 2, bgcolor: '#F8FAFC', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554' }}>Compliance & Audit Portal</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#2563eb', fontFamily: 'monospace', fontWeight: 700 }}>AUDITOR NODE: ACTIVE</Typography>
                  </Box>
                  <Stack spacing={0}>
                    <Box sx={{ px: 4, py: 3, borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 700 }}>GDPR Erasure Request</Typography>
                        <Typography sx={{ fontSize: '0.8rem', color: '#475569', mt: 0.5 }}>Target: User_Entity_ID_4492</Typography>
                      </Box>
                      <Button onClick={handlePrune} size="small" variant="contained" sx={{ bgcolor: pruneStatus === 'Execute Prune' ? '#dc2626' : '#10b981', color: '#fff', minWidth: 120, fontWeight: 700 }}>
                        {pruneStatus}
                      </Button>
                    </Box>
                    <Box sx={{ px: 4, py: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 700 }}>SOC2 Access Report</Typography>
                        <Typography sx={{ fontSize: '0.8rem', color: '#475569', mt: 0.5 }}>Export 30-day RBAC interaction logs.</Typography>
                      </Box>
                      <Button onClick={handleExport} size="small" variant="outlined" sx={{ color: exportStatus === 'Export CSV' ? '#172554' : '#059669', borderColor: exportStatus === 'Export CSV' ? '#CBD5E1' : '#10b981', minWidth: 120, fontWeight: 700 }}>
                        {exportStatus}
                      </Button>
                    </Box>
                  </Stack>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          <Divider sx={{ borderColor: '#E2E8F0', my: 4 }} />

          {/* Feature 6: Hybrid Anchoring */}
          <Grid container spacing={8} sx={{ py: 8 }} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                  <Box sx={{ borderBottom: '1px solid #E2E8F0', px: 4, py: 2, bgcolor: '#F8FAFC' }}>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554' }}>Hybrid State Anchoring (Cron)</Typography>
                  </Box>
                  <Box sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                      <Box sx={{ flex: 1, p: 2, bgcolor: 'rgba(5, 150, 105, 0.05)', border: '1px solid rgba(5, 150, 105, 0.2)', borderRadius: 2, textAlign: 'center' }}>
                        <Typography sx={{ fontSize: '0.75rem', color: '#059669', fontWeight: 800, mb: 0.5 }}>PRIVATE LEDGER</Typography>
                        <Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 700 }}>Merkle Root Gen</Typography>
                      </Box>
                      <SyncAltOutlinedIcon sx={{ color: '#94A3B8' }} />
                      <Box sx={{ flex: 1, p: 2, bgcolor: 'rgba(37, 99, 235, 0.05)', border: '1px solid rgba(37, 99, 235, 0.2)', borderRadius: 2, textAlign: 'center' }}>
                        <Typography sx={{ fontSize: '0.75rem', color: '#2563eb', fontWeight: 800, mb: 0.5 }}>PUBLIC L1</Typography>
                        <Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 700 }}>Commit Hash</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ p: 2, bgcolor: '#F8FAFC', borderRadius: 2, border: '1px solid #E2E8F0', fontFamily: 'monospace', fontSize: '0.75rem', color: '#334155' }}>
                      <Box>[CRON] Compressing last 1,000 internal transactions...</Box>
                      <Box>[SYS] Zero-Knowledge State Root calculated: 0x9f8b...e2a1</Box>
                      <Box sx={{ color: '#2563eb', fontWeight: 600 }}>[RELAY] Submitting root hash to Cerulea Public L1 contract.</Box>
                      <Box sx={{ color: '#059669', mt: 1, fontWeight: 700 }}>Anchor Successful. Internal state immutably proven to public.</Box>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div variants={fadeUp}>
                <SyncAltOutlinedIcon sx={{ fontSize: 32, color: '#059669', mb: 3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>
                  Hybrid interoperability.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 3 }}>
                  Keep your data private, but prove its integrity to the world.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, borderLeft: '2px solid #059669', pl: 2 }}>
                  Private Chains do not have to exist in total isolation. You can configure Hybrid Anchoring via the Cerulea Dashboard. The network will automatically compress your private transactional data into a cryptographic proof and anchor it to the Cerulea Public L1. This provides public, irrefutable proof that your internal data hasn't been tampered with.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>

        </motion.div>
      </Container>
    </Box>
  );
}