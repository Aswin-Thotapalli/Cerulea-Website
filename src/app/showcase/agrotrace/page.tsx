'use client';

import * as React from 'react';
import { Box, Container, Typography, Stack, Button, Divider, Chip } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined';
import QrCodeScannerOutlinedIcon from '@mui/icons-material/QrCodeScannerOutlined';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const ACCENT = '#16a34a';

const PROBLEMS = [
  { title: 'Fragmented paperwork', desc: 'APEDA certificates, phytosanitary papers, residue test reports, and fumigation records exist in silos across dozens of actors with no shared record.' },
  { title: 'MRL violations', desc: 'Maximum Residue Limit breaches detected at destination ports cause shipment rejections and market bans, often discovered too late to act.' },
  { title: 'Cold chain failures', desc: 'Temperature excursions during transit go undetected until cargo reaches the buyer, with no tamper-proof log to assign liability.' },
  { title: 'No provenance', desc: 'Buyers and regulators cannot verify the origin of a mango lot from a specific farm. Certificates are easily forged and impossible to cross-check.' },
  { title: 'Manual disputes', desc: 'Buyer claims are handled without a shared, immutable record. Both sides argue from their own data with no common ground truth.' },
  { title: 'Compliance blind spots', desc: 'No single dashboard shows an exporter which shipments are at risk of failing compliance checks before the vessel is loaded.' },
];

const PIPELINE_STAGES = [
  { step: '01', label: 'Farm Registration', actor: 'Farmer' },
  { step: '02', label: 'Lot Registration', actor: 'Exporter' },
  { step: '03', label: 'Residue Testing', actor: 'Laboratory' },
  { step: '04', label: 'Packhouse Processing', actor: 'Packhouse' },
  { step: '05', label: 'Treatment', actor: 'Treatment Facility' },
  { step: '06', label: 'Phytosanitary Clearance', actor: 'NPPO Inspector' },
  { step: '07', label: 'APEDA Certification', actor: 'APEDA Officer' },
  { step: '08', label: 'Customs Clearance', actor: 'Customs Broker' },
  { step: '09', label: 'Cold Storage', actor: 'Cold Storage' },
  { step: '10', label: 'Freight Forwarding', actor: 'Freight Forwarder' },
  { step: '11', label: 'Vessel Loading', actor: 'Shipping Line' },
  { step: '12', label: 'Arrival & Delivery', actor: 'Buyer' },
];

const FEATURES = [
  {
    icon: <QrCodeScannerOutlinedIcon />,
    title: 'Lot Management',
    desc: 'Register mango lots from named farms with GPS coordinates, variety (Alphonso, Kesar, Banganapalli, Dasheri), harvest date, and quantity. Each lot gets a unique QR code — scannable at any point in the chain to pull the full history.',
  },
  {
    icon: <FactCheckOutlinedIcon />,
    title: 'Compliance Engine',
    desc: 'Real-time compliance score (0-100%) per shipment calculated against configurable MRL rules for FSSAI, EU, Japan, and Codex standards. Warning threshold at 60%, minimum score for vessel loading at 80%. Catch violations before the ship sails.',
  },
  {
    icon: <SensorsOutlinedIcon />,
    title: 'IoT Cold Chain Monitoring',
    desc: 'Register temperature and humidity sensors and link them to shipments. Live telemetry ingested via REST API. Automatic breach detection with alerts surfaced on the exporter dashboard and shipment detail.',
  },
  {
    icon: <GavelOutlinedIcon />,
    title: 'Dispute Management',
    desc: 'Buyers initiate disputes with claimed value and supporting evidence. Exporters submit formal responses. Both parties work from the same immutable on-chain record. Resolution outcomes recorded permanently.',
  },
  {
    icon: <DashboardOutlinedIcon />,
    title: 'Multi-Role Dashboards',
    desc: '13 distinct user roles, each with a purpose-built dashboard: Exporter, Farmer, Laboratory, Packhouse, Treatment Facility, NPPO Inspector, APEDA Officer, Customs Broker, Cold Storage, Freight Forwarder, Shipping Line, Buyer, Platform Admin.',
  },
  {
    icon: <PublicOutlinedIcon />,
    title: 'Public Verification',
    desc: 'Anyone can verify a lot or shipment at agrotrace.cerulea.io/verify without logging in. The page shows farm origin, residue results, compliance score, Merkle proof, and the block in which the shipment is recorded.',
  },
  {
    icon: <HubOutlinedIcon />,
    title: 'Webhooks and Integrations',
    desc: 'Configure outbound webhooks to notify external systems on shipment status changes, compliance breaches, or block confirmations. Full delivery log per endpoint with retry logic and exponential backoff.',
  },
  {
    icon: <LockOutlinedIcon />,
    title: 'Multilingual Support',
    desc: '9 languages including English, Hindi, Marathi, Gujarati, Telugu, Tamil, Kannada, Bengali, and Punjabi. Full app-wide language switch across every screen, modal, and error message. 1,597 translation keys across 23 namespaces.',
  },
];

const VALIDATOR_NODES = ['Mumbai', 'Singapore', 'Dubai', 'Amsterdam', 'London'];

const LIVE_STATS = [
  { value: '5', label: 'Exporter organisations' },
  { value: '45', label: 'Registered mango lots' },
  { value: '20', label: 'Active shipments' },
  { value: '1,200+', label: 'Finalised blocks' },
  { value: '3,200+', label: 'On-chain transactions' },
  { value: '8', label: 'Disputes with full history' },
];

const WHY = [
  'Catch MRL violations before loading with automated compliance scoring',
  'Share a public QR-scannable provenance link with every shipment',
  'Resolve disputes faster with a shared immutable record both parties can see',
  'Prove cold chain integrity with IoT-backed temperature logs on-chain',
  'Consolidate every actor on one platform instead of WhatsApp threads and email chains',
  'APEDA, NPPO, customs, and phytosanitary workflows built in from day one',
  'White-label ready with your branding, your domain, your platform powered by Cerulea Studio',
];

export default function AgroTraceShowcasePage() {
  const [activePillar, setActivePillar] = React.useState(0);

  return (
    <Box sx={{ bgcolor: '#FAFAFA', color: '#172554', overflowX: 'hidden', pb: 0 }}>

      {/* 1. HERO */}
      <Box sx={{ pt: { xs: 16, md: 24 }, pb: { xs: 12, md: 16 }, position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '600px', background: `radial-gradient(ellipse at top, ${ACCENT}15, transparent 70%)`, pointerEvents: 'none' }} />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>

            <motion.div variants={fadeUp}>
              <Stack direction="row" spacing={1.5} justifyContent="center" alignItems="center" mb={4}>
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 2, py: 1, borderRadius: 2, bgcolor: `${ACCENT}15`, border: `1px solid ${ACCENT}30` }}>
                  <AgricultureOutlinedIcon sx={{ color: ACCENT, fontSize: 18 }} />
                  <Typography sx={{ color: ACCENT, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.72rem' }}>Built on Cerulea</Typography>
                </Box>
                <Chip label="Agriculture and Food Tech" size="small" sx={{ bgcolor: '#f0fdf4', color: ACCENT, fontWeight: 600, fontSize: '0.72rem', border: `1px solid ${ACCENT}20` }} />
              </Stack>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '4rem', md: '7rem' }, lineHeight: 1.0, letterSpacing: '-0.03em', mb: 3, color: '#172554' }}>
                AgroTrace
              </Typography>
              <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.35rem' }, color: '#475569', maxWidth: 700, mx: 'auto', lineHeight: 1.6, mb: 2, fontWeight: 500 }}>
                From Farm to Foreign Shore. Every Step on Chain.
              </Typography>
              <Typography sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, color: '#64748B', maxWidth: 760, mx: 'auto', lineHeight: 1.7, mb: 8 }}>
                A production-grade supply chain platform purpose-built for Indian mango exporters. AgroTrace digitises and immutably records every step of the mango export journey, from farm registration and residue testing through packhouse processing, phytosanitary clearance, vessel loading, and final delivery. No external SDK, no cryptocurrency, no gas fees.
              </Typography>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                <Button
                  component="a"
                  href="https://agrotrace.cerulea.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  endIcon={<OpenInNewIcon />}
                  sx={{ bgcolor: ACCENT, color: '#fff', px: 5, py: 1.75, fontSize: '1rem', fontWeight: 700, borderRadius: 2, boxShadow: `0 8px 20px -6px ${ACCENT}60`, '&:hover': { bgcolor: '#15803d', transform: 'translateY(-2px)' }, transition: 'all 0.2s' }}
                >
                  Visit AgroTrace
                </Button>
                <Button
                  component={Link}
                  href="/company/contact"
                  variant="outlined"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ px: 5, py: 1.75, fontSize: '1rem', fontWeight: 700, borderRadius: 2, borderColor: '#CBD5E1', color: '#172554', '&:hover': { borderColor: ACCENT, color: ACCENT, bgcolor: 'transparent' }, transition: 'all 0.2s' }}
                >
                  Request Sandbox Demo
                </Button>
              </Stack>
            </motion.div>

          </motion.div>
        </Container>
      </Box>

      {/* LIVE STATS STRIP */}
      <Box sx={{ bgcolor: '#172554', py: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(3, 1fr)', md: 'repeat(6, 1fr)' }, gap: 4, textAlign: 'center' }}>
            {LIVE_STATS.map((stat) => (
              <Box key={stat.label}>
                <Typography sx={{ color: '#4ade80', fontWeight: 800, fontSize: { xs: '1.75rem', md: '2.25rem' }, letterSpacing: '-0.02em', lineHeight: 1 }}>{stat.value}</Typography>
                <Typography sx={{ color: '#94A3B8', fontSize: '0.78rem', mt: 0.75, fontWeight: 500, lineHeight: 1.4 }}>{stat.label}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* 2. THE PROBLEM */}
      <Container maxWidth="lg" sx={{ mt: 20, mb: 20 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger}>
          <motion.div variants={fadeUp}>
            <Box sx={{ textAlign: 'center', mb: 10 }}>
              <Typography sx={{ color: ACCENT, fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 2 }}>The Problem</Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 800, letterSpacing: '-0.02em', mb: 3 }}>
                Indian mango exports face six recurring problems.
              </Typography>
              <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 700, mx: 'auto', lineHeight: 1.7 }}>
                Indian mango exports worth billions of dollars face challenges that cause rejections, revenue losses, and regulatory friction year after year. AgroTrace addresses each one.
              </Typography>
            </Box>
          </motion.div>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
            {PROBLEMS.map((p, i) => (
              <motion.div key={p.title} variants={fadeUp}>
                <Box sx={{ p: 4, bgcolor: '#fff', border: '1px solid #E2E8F0', borderRadius: 3, height: '100%', boxShadow: '0 2px 12px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: ACCENT, fontWeight: 900, fontSize: '1.25rem', mb: 1.5 }}>{String(i + 1).padStart(2, '0')}.</Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: '#172554', mb: 1 }}>{p.title}</Typography>
                  <Typography sx={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.7 }}>{p.desc}</Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>

      {/* 3. THE 12-STAGE PIPELINE */}
      <Box sx={{ bgcolor: '#fff', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', py: 16, mb: 20 }}>
        <Container maxWidth="lg">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <Box sx={{ textAlign: 'center', mb: 10 }}>
                <Typography sx={{ color: ACCENT, fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 2 }}>Supply Chain Flow</Typography>
                <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 800, letterSpacing: '-0.02em', mb: 3 }}>
                  12 stages. Every actor. One chain.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 700, mx: 'auto', lineHeight: 1.7 }}>
                  Every status update, certificate upload, telemetry reading, custody transfer, and compliance check is written as a transaction on AgroChain. The buyer can scan the QR on any carton and see the complete, tamper-proof history.
                </Typography>
              </Box>
            </motion.div>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 2 }}>
              {PIPELINE_STAGES.map((stage) => (
                <motion.div key={stage.step} variants={fadeUp}>
                  <Box sx={{ p: 3, border: '1px solid #E2E8F0', borderRadius: 3, position: 'relative', overflow: 'hidden', bgcolor: '#FAFAFA' }}>
                    <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, bgcolor: ACCENT }} />
                    <Typography sx={{ color: ACCENT, fontWeight: 900, fontSize: '0.7rem', letterSpacing: '0.1em', mb: 1 }}>STEP {stage.step}</Typography>
                    <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', color: '#172554', mb: 0.5 }}>{stage.label}</Typography>
                    <Typography sx={{ color: '#64748B', fontSize: '0.78rem', fontWeight: 500 }}>{stage.actor}</Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* 4. KEY FEATURES */}
      <Container maxWidth="lg" sx={{ mb: 20 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger}>
          <motion.div variants={fadeUp}>
            <Box sx={{ textAlign: 'center', mb: 10 }}>
              <Typography sx={{ color: ACCENT, fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 2 }}>Platform Features</Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 800, letterSpacing: '-0.02em' }}>
                Built for every actor in the chain.
              </Typography>
            </Box>
          </motion.div>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 4 }}>
            {FEATURES.map((f) => (
              <motion.div key={f.title} variants={fadeUp}>
                <Box sx={{ p: 4, bgcolor: '#fff', border: '1px solid #E2E8F0', borderRadius: 3, height: '100%', boxShadow: '0 2px 12px rgba(0,0,0,0.03)' }}>
                  <Box sx={{ width: 44, height: 44, borderRadius: 2, bgcolor: `${ACCENT}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: ACCENT, mb: 2.5 }}>
                    {f.icon}
                  </Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.05rem', color: '#172554', mb: 1 }}>{f.title}</Typography>
                  <Typography sx={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.75 }}>{f.desc}</Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>

      {/* 5. AGROCHAIN BLOCKCHAIN */}
      <Box sx={{ bgcolor: '#172554', py: 16, mb: 20 }}>
        <Container maxWidth="lg">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <Box sx={{ textAlign: 'center', mb: 10 }}>
                <Typography sx={{ color: '#4ade80', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 2 }}>AgroChain</Typography>
                <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 800, letterSpacing: '-0.02em', color: '#fff', mb: 3 }}>
                  The blockchain layer inside AgroTrace.
                </Typography>
                <Typography sx={{ color: '#94A3B8', fontSize: '1.1rem', maxWidth: 700, mx: 'auto', lineHeight: 1.7 }}>
                  AgroChain is an entirely internal blockchain with no external dependencies, no gas fees, and no wallet setup. Every event in the supply chain is written as a transaction, hashed into a Merkle tree, and finalised by a global validator network.
                </Typography>
              </Box>
            </motion.div>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4, mb: 10 }}>
              {[
                { label: 'Consensus', value: 'Dynamic Consensus Framework (DCF)', detail: '4-of-5 validator agreement required to finalise each block.' },
                { label: 'Block time', value: '8 seconds', detail: 'Target block time across all 5 nodes.' },
                { label: 'Integrity', value: 'SHA-256 Merkle tree', detail: 'Every block hashed and chained. Full Merkle proof generation for verification.' },
                { label: 'Storage', value: 'PostgreSQL 16', detail: 'Chain state stored in chain_blocks, chain_transactions, and chain_consensus_votes tables.' },
              ].map((item) => (
                <motion.div key={item.label} variants={fadeUp}>
                  <Box sx={{ p: 4, bgcolor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 3 }}>
                    <Typography sx={{ color: '#4ade80', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.1em', mb: 1 }}>{item.label.toUpperCase()}</Typography>
                    <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1.15rem', mb: 0.75 }}>{item.value}</Typography>
                    <Typography sx={{ color: '#94A3B8', fontSize: '0.88rem', lineHeight: 1.6 }}>{item.detail}</Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>

            <motion.div variants={fadeUp}>
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography sx={{ color: '#94A3B8', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 4 }}>5 Globally Distributed Validator Nodes</Typography>
                <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap" gap={2}>
                  {VALIDATOR_NODES.map((node) => (
                    <Box key={node} sx={{ px: 3, py: 1.5, bgcolor: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.25)', borderRadius: 2, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#4ade80' }} />
                      <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem' }}>{node}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* 6. PUBLIC VERIFICATION */}
      <Container maxWidth="lg" sx={{ mb: 20 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 8, alignItems: 'center' }}>
            <Box sx={{ flex: 1 }}>
              <motion.div variants={fadeUp}>
                <Typography sx={{ color: ACCENT, fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 2 }}>Public Verification</Typography>
                <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 800, letterSpacing: '-0.02em', mb: 3 }}>
                  Anyone can verify. No login required.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.8, mb: 4 }}>
                  International buyers, importers, customs authorities, and consumers can verify the authenticity and history of any mango lot or shipment without an account. The verification page shows farm of origin, registered variety, residue test results, compliance score, chain status, and the Merkle proof of each on-chain transaction.
                </Typography>
                <Stack spacing={1.5}>
                  {[
                    'agrotrace.cerulea.io/verify/lot/{LOT_ID}',
                    'agrotrace.cerulea.io/verify/shipment/{SHIPMENT_ID}',
                  ].map((url) => (
                    <Box key={url} sx={{ px: 3, py: 1.5, bgcolor: '#f0fdf4', border: `1px solid ${ACCENT}25`, borderRadius: 2 }}>
                      <Typography sx={{ fontFamily: 'monospace', fontSize: '0.85rem', color: ACCENT, fontWeight: 600 }}>{url}</Typography>
                    </Box>
                  ))}
                </Stack>
              </motion.div>
            </Box>
            <Box sx={{ flex: 1 }}>
              <motion.div variants={fadeUp}>
                <Box sx={{ p: 5, bgcolor: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, boxShadow: '0 10px 40px rgba(0,0,0,0.06)' }}>
                  <Typography sx={{ fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', color: '#64748B', mb: 3 }}>VERIFICATION RECORD INCLUDES</Typography>
                  <Stack spacing={2}>
                    {[
                      'Farm of origin with GPS coordinates',
                      'Registered mango variety',
                      'Pesticide residue test results (FSSAI, EU, Japan, Codex)',
                      'Compliance score against MRL standards',
                      'Chain status and transaction hash',
                      'Merkle proof for each on-chain event',
                      'Block number and consensus confirmation',
                    ].map((item) => (
                      <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ width: 20, height: 20, borderRadius: '50%', bgcolor: `${ACCENT}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: ACCENT }} />
                        </Box>
                        <Typography sx={{ fontSize: '0.92rem', color: '#172554', fontWeight: 500 }}>{item}</Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>

      {/* 7. WHY AGROTRACE */}
      <Box sx={{ bgcolor: '#fff', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', py: 16, mb: 20 }}>
        <Container maxWidth="lg">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <Box sx={{ textAlign: 'center', mb: 10 }}>
                <Typography sx={{ color: ACCENT, fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 2 }}>Why AgroTrace</Typography>
                <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 800, letterSpacing: '-0.02em' }}>
                  What it does for your business.
                </Typography>
              </Box>
            </motion.div>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3, maxWidth: 900, mx: 'auto' }}>
              {WHY.map((item, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'flex-start' }}>
                    <Box sx={{ width: 28, height: 28, borderRadius: 1.5, bgcolor: `${ACCENT}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, mt: 0.25 }}>
                      <Typography sx={{ color: ACCENT, fontWeight: 800, fontSize: '0.72rem' }}>{String(i + 1).padStart(2, '0')}</Typography>
                    </Box>
                    <Typography sx={{ color: '#172554', fontSize: '0.97rem', lineHeight: 1.7 }}>{item}</Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* 8. SHOWCASE DATA NOTE */}
      <Container maxWidth="lg" sx={{ mb: 20 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp}>
          <Box sx={{ p: { xs: 5, md: 7 }, bgcolor: '#f0fdf4', border: `1px solid ${ACCENT}25`, borderRadius: 4 }}>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={5} alignItems="flex-start">
              <Box>
                <Typography sx={{ color: ACCENT, fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 2 }}>Live Showcase Platform</Typography>
                <Typography variant="h3" sx={{ fontWeight: 800, fontSize: '1.5rem', color: '#172554', mb: 2 }}>Pre-loaded with realistic data.</Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.97rem', lineHeight: 1.8 }}>
                  The live platform at agrotrace.cerulea.io is pre-loaded with realistic showcase data across 5 exporter organisations, 45 mango lots, 20 active shipments at various pipeline stages, 8 disputes with full response history, over 1,200 finalised blocks, and over 3,200 on-chain transactions including simulated IoT temperature breaches.
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.97rem', lineHeight: 1.8, mt: 2 }}>
                  Contact Caerulean Bytechains for a demo account to explore the full platform.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0 }}>
                <Stack spacing={2}>
                  <Button
                    component="a"
                    href="https://agrotrace.cerulea.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    endIcon={<OpenInNewIcon />}
                    sx={{ bgcolor: ACCENT, color: '#fff', px: 4, py: 1.5, fontWeight: 700, borderRadius: 2, whiteSpace: 'nowrap', '&:hover': { bgcolor: '#15803d' } }}
                  >
                    Visit AgroTrace
                  </Button>
                  <Button
                    component={Link}
                    href="/company/contact"
                    variant="outlined"
                    sx={{ px: 4, py: 1.5, fontWeight: 700, borderRadius: 2, borderColor: ACCENT, color: ACCENT, '&:hover': { bgcolor: `${ACCENT}08` } }}
                  >
                    Request Demo Access
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </motion.div>
      </Container>

      {/* 9. BUILT BY */}
      <Box sx={{ bgcolor: '#172554', py: 16 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <Typography sx={{ color: '#4ade80', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 3 }}>About AgroTrace</Typography>
              <Typography variant="h2" sx={{ color: '#fff', fontSize: { xs: '1.75rem', md: '2.5rem' }, fontWeight: 800, letterSpacing: '-0.02em', mb: 4 }}>
                A Caerulean Bytechains product, built on Cerulea Studio.
              </Typography>
              <Typography sx={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: 660, mx: 'auto', mb: 6 }}>
                AgroTrace is a showcase platform built by Caerulean Bytechains to demonstrate the Cerulea Studio capability stack. Adopter organisations take full ownership and run it independently under their own branding, domain, and configuration.
              </Typography>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                <Button
                  component="a"
                  href="https://agrotrace.cerulea.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  endIcon={<OpenInNewIcon />}
                  sx={{ bgcolor: '#16a34a', color: '#fff', px: 5, py: 1.75, fontSize: '1rem', fontWeight: 700, borderRadius: 2, '&:hover': { bgcolor: '#15803d' } }}
                >
                  Visit AgroTrace
                </Button>
                <Button
                  component={Link}
                  href="/product/studio"
                  variant="outlined"
                  sx={{ px: 5, py: 1.75, fontSize: '1rem', fontWeight: 700, borderRadius: 2, borderColor: 'rgba(255,255,255,0.25)', color: '#fff', '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.05)' } }}
                >
                  How it was built
                </Button>
              </Stack>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

    </Box>
  );
}
