'use client';

import * as React from 'react';
import { Box, Container, Typography, Stack, Button, Divider } from '@mui/material';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { track } from '@/lib/track';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import DomainOutlinedIcon from '@mui/icons-material/DomainOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import RouterOutlinedIcon from '@mui/icons-material/RouterOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CellTowerOutlinedIcon from '@mui/icons-material/CellTowerOutlined';
import DirectionsBoatOutlinedIcon from '@mui/icons-material/DirectionsBoatOutlined';
import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import HowToVoteOutlinedIcon from '@mui/icons-material/HowToVoteOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import VpnLockOutlinedIcon from '@mui/icons-material/VpnLockOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import CodeOffOutlinedIcon from '@mui/icons-material/CodeOffOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

// Application Data 
const applications = [
  {
    id: 'assets', icon: <AccountBalanceWalletOutlinedIcon />, title: 'Tokenized Assets & RWA', subtitle: 'Digitize real-world value.',
    components: ['Public L1', 'Cerulea Studio', 'Dashboard API'],
    workflow: ['Define token schemas and compliance metadata in Cerulea Studio.', 'Deploy to Public L1 for global shared state and verifiability.', 'Integrate existing fintech apps via auto-generated API endpoints.'],
    businessImpact: 'Instant fractional ownership with 100% verifiable provenance.', color: '#3b82f6'
  },
  {
    id: 'supply', icon: <AccountTreeOutlinedIcon />, title: 'Supply Chain Traceability', subtitle: 'Shared truth across vendors.',
    components: ['Private Chain', 'Granular RBAC', 'Webhook Integrations'],
    workflow: ['Map physical logistics steps to digital entities in Studio.', 'Provision a Sovereign Private Chain for invited vendors only.', 'Set RBAC rules so only specific handlers can update transit states.'],
    businessImpact: 'Zero reconciliation delays and tamper-evident transit logs.', color: '#10b981'
  },
  {
    id: 'identity', icon: <KeyOutlinedIcon />, title: 'Identity & Access', subtitle: 'Cryptographic authorization.',
    components: ['Public L1', 'Governance Engine', 'Cerulea AI'],
    workflow: ['Model user identity and credential verification logic visually.', 'Deploy to Public L1 to act as a universal, trustless resolver.', 'Require multi-sig consensus for issuing high-clearance credentials.'],
    businessImpact: 'Eliminate centralized honeypots with cryptographic access control.', color: '#8b5cf6'
  },
  {
    id: 'finance', icon: <AccountBalanceOutlinedIcon />, title: 'Financial Settlements', subtitle: 'Immutable inter-bank clearing.',
    components: ['Private Subnet', 'Dual VM', 'Audit Logs'],
    workflow: ['Build complex clearing logic targeting the WASM or EVM execution engine.', 'Spin up isolated nodes for participating financial institutions.', 'Export cryptographic audit logs directly to compliance teams.'],
    businessImpact: 'Real-time settlement without clearinghouse intermediaries.', color: '#eab308'
  },
  {
    id: 'defi', icon: <SwapHorizOutlinedIcon />, title: 'Decentralized Finance (DeFi)', subtitle: 'Unstoppable liquidity protocols.',
    components: ['Public L1', 'Dual VM Engine', 'Native Bridges'],
    workflow: ['Design Automated Market Maker (AMM) or lending logic in Studio.', 'Leverage Cerulea L1 sub-second finality to prevent front-running.', 'Route global liquidity using native trust-minimized bridges.'],
    businessImpact: 'High-frequency decentralized trading without network congestion.', color: '#f43f5e'
  },
  {
    id: 'gov', icon: <DomainOutlinedIcon />, title: 'Government Registries', subtitle: 'Sovereign public infrastructure.',
    components: ['Hybrid Deployment', 'Node Provisioning', 'API Webhooks'],
    workflow: ['Maintain citizen data on strictly permissioned internal private nodes.', 'Publish verifiable proof-hashes to the Cerulea Public L1.', 'Citizens verify document authenticity instantly via web portals.'],
    businessImpact: 'Eradicate bureaucratic fraud with transparent public proofs.', color: '#f97316'
  }
];

export default function HomePage() {
  const [activeApp, setActiveApp] = React.useState(applications[0]);

  return (
    <Box sx={{ bgcolor: '#FAFAFA', minHeight: '100vh', color: '#172554', pb: 0, overflowX: 'hidden' }}>
      
      {/* 1. THE HERO SECTION */}
      <Box sx={{ pt: { xs: 6, md: 8 }, pb: { xs: 10, md: 16 }, position: 'relative', overflow: 'hidden' }}>

        <Box sx={{ position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)', width: '100%', height: '1000px', background: 'radial-gradient(ellipse at top, rgba(37, 99, 235, 0.1), transparent 70%)', pointerEvents: 'none' }} />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>

            <motion.div variants={fadeUp}>
              <Typography sx={{ fontWeight: 900, fontSize: { xs: '3.5rem', md: '6.5rem' }, color: '#2563eb', letterSpacing: '0.2em', textTransform: 'uppercase', mb: 2 }}>
                CERULEA
              </Typography>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '3.5rem', sm: '5rem', md: '6.5rem' }, lineHeight: 1.05, letterSpacing: '-0.03em', mb: 4, mx: 'auto', maxWidth: 1100, color: '#172554' }}>
                The <span style={{ color: '#2563eb' }}>No-Code</span><br />
                Blockchain Engine.
              </Typography>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: { xs: 4, md: 3 }, mb: 8, maxWidth: 860, mx: 'auto' }}>
                {[
                  {
                    Icon: LayersOutlinedIcon,
                    label: 'Dapps',
                    tagline: 'Your focus should be your application, not the infrastructure beneath it. No-code means production-grade blockchain without coding a single smart contract.',
                    color: '#2563eb',
                  },
                  {
                    Icon: StorefrontOutlinedIcon,
                    label: 'SME',
                    tagline: 'No-code removes the two biggest barriers to blockchain adoption: engineering cost and time. Get production-grade infrastructure without specialist hires.',
                    color: '#7c3aed',
                  },
                  {
                    Icon: DomainOutlinedIcon,
                    label: 'Enterprise',
                    tagline: 'No-code does not mean low-power. Cerulea is built to enterprise compliance and industry infrastructure standards.',
                    color: '#0f766e',
                  },
                  {
                    Icon: AccountBalanceOutlinedIcon,
                    label: 'Government',
                    tagline: 'Governments need sovereignty, audit trails, and long-term operational certainty. No-code means you configure all three without commissioning a custom blockchain build.',
                    color: '#b45309',
                  },
                ].map((seg) => (
                  <Box key={seg.label} sx={{ px: 2, py: 3, textAlign: 'left' }}>
                    <Box sx={{ width: 52, height: 52, borderRadius: 3, bgcolor: `${seg.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <seg.Icon sx={{ fontSize: 26, color: seg.color }} />
                    </Box>
                    <Typography sx={{ fontWeight: 800, color: '#172554', fontSize: '0.95rem', mb: 1 }}>{seg.label}</Typography>
                    <Typography sx={{ color: '#64748B', fontSize: '0.82rem', lineHeight: 1.55 }}>{seg.tagline}</Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
                <Button
                  href="/product/studio"
                  variant="contained"
                  size="large"
                  onClick={() => track.ctaClick('Launch Cerulea Studio', '/product/studio', 'hero')}
                  sx={{
                    bgcolor: '#2563eb', color: '#ffffff', px: 5, py: 2, fontSize: '1.05rem', fontWeight: 700, borderRadius: 2,
                    '&:hover': { bgcolor: '#1d4ed8', transform: 'translateY(-2px)' },
                    transition: 'all 0.2s',
                    boxShadow: '0 8px 20px -6px rgba(37, 99, 235, 0.4)'
                  }}
                >
                  Launch Cerulea Studio
                </Button>
                <Button
                  href="/developers/docs"
                  variant="outlined"
                  size="large"
                  onClick={() => track.ctaClick('Read the Docs', '/developers/docs', 'hero')}
                  sx={{
                    borderColor: '#CBD5E1', color: '#172554', px: 5, py: 2, fontSize: '1.05rem', fontWeight: 700, borderRadius: 2, bgcolor: '#FFFFFF',
                    '&:hover': { borderColor: '#172554', bgcolor: '#F8FAFC' }
                  }}
                >
                  Read the Docs
                </Button>
              </Stack>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* 2. THE NO-CODE METRICS STRIP */}
      <Box sx={{ borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', bgcolor: '#FFFFFF', py: 5 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 4, alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderRight: { md: '1px solid #E2E8F0' } }}>
              <MouseOutlinedIcon sx={{ fontSize: 32, color: '#2563eb', mb: 1 }} />
              <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, color: '#172554', lineHeight: 1, mb: 0.5 }}>100% Visual</Typography>
              <Typography sx={{ color: '#64748B', fontSize: '0.85rem', fontWeight: 600 }}>Drag & Drop Architecture</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderRight: { md: '1px solid #E2E8F0' } }}>
              <TerminalOutlinedIcon sx={{ fontSize: 32, color: '#2563eb', mb: 1 }} />
              <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, color: '#172554', lineHeight: 1, mb: 0.5 }}>Zero CLI</Typography>
              <Typography sx={{ color: '#64748B', fontSize: '0.85rem', fontWeight: 600 }}>No Terminal Required</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderRight: { md: '1px solid #E2E8F0' } }}>
              <MemoryOutlinedIcon sx={{ fontSize: 32, color: '#2563eb', mb: 1 }} />
              <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, color: '#172554', lineHeight: 1, mb: 0.5 }}>WASM & EVM</Typography>
              <Typography sx={{ color: '#64748B', fontSize: '0.85rem', fontWeight: 600 }}>Dual Execution Layers</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <CloudUploadOutlinedIcon sx={{ fontSize: 32, color: '#2563eb', mb: 1 }} />
              <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, color: '#172554', lineHeight: 1, mb: 0.5 }}>1-Click Deploy</Typography>
              <Typography sx={{ color: '#64748B', fontSize: '0.85rem', fontWeight: 600 }}>Instant Testnet & Mainnet</Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 3. THE DARK BENTO BOX (Why No-Code Matters) */}
      <Box sx={{ bgcolor: '#172554', py: 20, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: 0, right: 0, width: 800, height: 800, background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 60%)', borderRadius: '50%', pointerEvents: 'none' }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 8, letterSpacing: '-0.02em', color: '#FFFFFF', maxWidth: 700 }}>
              Hand-coding smart contracts is a critical bottleneck.
            </Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 3 }}>
              
              {/* Large Bento Item */}
              <Box sx={{ gridColumn: { md: 'span 2' }, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 4, p: 6, border: '1px solid rgba(255,255,255,0.1)', position: 'relative', overflow: 'hidden' }}>
                <SpeedOutlinedIcon sx={{ fontSize: 32, color: '#60A5FA', mb: 3 }} />
                <Typography sx={{ fontSize: '1.75rem', fontWeight: 800, mb: 2, color: '#FFFFFF' }}>Accelerated Time-to-Market</Typography>
                <Typography sx={{ color: '#94A3B8', lineHeight: 1.6, fontSize: '1.05rem', maxWidth: 500 }}>
                  Bypass months of manual scaffolding. Use Cerulea Studio to map your relational data, asset schemas, and governance rules visually. The platform compiles your intent instantly into deployable network state.
                </Typography>
                <Box sx={{ position: 'absolute', bottom: -60, right: -30, opacity: 0.05 }}>
                  <CodeOffOutlinedIcon sx={{ fontSize: 300, color: '#60A5FA' }} />
                </Box>
              </Box>

              {/* Square Bento Item */}
              <Box sx={{ gridColumn: { md: 'span 1' }, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 4, p: 6, border: '1px solid rgba(255,255,255,0.1)' }}>
                <ShieldOutlinedIcon sx={{ fontSize: 32, color: '#34D399', mb: 3 }} />
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, mb: 2, color: '#FFFFFF' }}>Deterministic Security</Typography>
                <Typography sx={{ color: '#94A3B8', lineHeight: 1.6, fontSize: '1rem' }}>
                  Human error in custom contracts costs millions. Cerulea translates visual logic into pre-audited cryptographic primitives for absolute certainty.
                </Typography>
              </Box>

              {/* Wide Bento Item */}
              <Box sx={{ gridColumn: { md: 'span 3' }, bgcolor: 'transparent', borderRadius: 4, p: 6, border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { md: 'center' }, gap: 4 }}>
                <Box sx={{ flexShrink: 0, width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   <StorageOutlinedIcon sx={{ fontSize: 40, color: '#A78BFA' }} />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, mb: 1, color: '#FFFFFF' }}>No-Code does not mean Low-Power</Typography>
                  <Typography sx={{ color: '#94A3B8', lineHeight: 1.6, fontSize: '1.05rem', maxWidth: 850 }}>
                    We do not abstract away the blockchain; we structure it. You retain full control over consensus topology, validator environments, and deep RBAC permissions—you just do not have to write the boilerplate to get there.
                  </Typography>
                </Box>
              </Box>

            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* 4. THE CONNECTED PIPELINE */}
      <Box sx={{ bgcolor: '#FFFFFF', py: 20, borderBottom: '1px solid #E2E8F0' }}>
        <Container maxWidth="lg">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <Box sx={{ textAlign: 'center', mb: 12 }}>
              <Typography sx={{ color: '#2563eb', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.8rem', mb: 2 }}>
                The Pipeline
              </Typography>
              <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.02em', color: '#172554' }}>
                One unified path to execution.
              </Typography>
            </Box>

            {/* Desktop Connected Path */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, position: 'relative', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Box sx={{ position: 'absolute', top: 24, left: '10%', right: '10%', height: 2, bgcolor: '#E2E8F0', zIndex: 0 }} />
              <Box sx={{ position: 'absolute', top: 24, left: '10%', right: '50%', height: 2, background: 'linear-gradient(90deg, #3b82f6, #10b981)', zIndex: 0 }} />

              {[
                { step: '01', title: 'Design', subtitle: 'Cerulea Studio', desc: 'Map your core data models, entities, and governance rules visually.', color: '#3b82f6', active: true },
                { step: '02', title: 'Assist', subtitle: 'Cerulea Intelligence', desc: 'Accelerate your build with contextual AI scaffolding and structural guidance.', color: '#8b5cf6', active: true },
                { step: '03', title: 'Compile', subtitle: 'Execution Engine', desc: 'Deterministic translation into battle-tested WASM or EVM binaries.', color: '#10b981', active: true },
                { step: '04', title: 'Operate', subtitle: 'Platform Dashboard', desc: 'Manage nodes, webhooks, and live network telemetry seamlessly.', color: '#64748B', active: false }
              ].map((item, idx) => (
                <Box key={idx} sx={{ position: 'relative', zIndex: 1, width: '22%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <Box sx={{ width: 48, height: 48, borderRadius: '50%', bgcolor: item.active ? '#FFFFFF' : '#F8FAFC', border: `2px solid ${item.active ? item.color : '#E2E8F0'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3, boxShadow: item.active ? `0 0 15px ${item.color}40` : 'none' }}>
                    <Typography sx={{ fontWeight: 800, color: item.active ? item.color : '#94A3B8', fontSize: '0.9rem' }}>{item.step}</Typography>
                  </Box>
                  <Typography sx={{ fontSize: '1.25rem', fontWeight: 800, color: '#172554', mb: 0.5 }}>{item.title}</Typography>
                  <Typography sx={{ color: item.active ? item.color : '#64748B', fontWeight: 700, fontSize: '0.85rem', mb: 2 }}>{item.subtitle}</Typography>
                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.5 }}>{item.desc}</Typography>
                </Box>
              ))}
            </Box>

            {/* Mobile Stacked Path */}
            <Stack spacing={4} sx={{ display: { xs: 'flex', md: 'none' } }}>
              {[
                { step: '01', title: 'Design', subtitle: 'Cerulea Studio', desc: 'Map your core data models, entities, and governance rules visually.', color: '#3b82f6' },
                { step: '02', title: 'Assist', subtitle: 'Cerulea Intelligence', desc: 'Accelerate your build with contextual AI scaffolding and structural guidance.', color: '#8b5cf6' },
                { step: '03', title: 'Compile', subtitle: 'Execution Engine', desc: 'Deterministic translation into battle-tested WASM or EVM binaries.', color: '#10b981' },
                { step: '04', title: 'Operate', subtitle: 'Platform Dashboard', desc: 'Manage nodes, webhooks, and live network telemetry seamlessly.', color: '#64748B' }
              ].map((item, idx) => (
                <Box key={idx} sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
                  <Box sx={{ flexShrink: 0, width: 40, height: 40, borderRadius: '50%', border: `2px solid ${item.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography sx={{ fontWeight: 800, color: item.color, fontSize: '0.8rem' }}>{item.step}</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: '1.15rem', fontWeight: 800, color: '#172554' }}>{item.title}</Typography>
                    <Typography sx={{ color: item.color, fontWeight: 700, fontSize: '0.8rem', mb: 1 }}>{item.subtitle}</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.5 }}>{item.desc}</Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* 5. INDUSTRY MATRIX */}
      <Box sx={{ bgcolor: '#F8FAFC', py: 20 }}>
        <Container maxWidth="lg">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <Box sx={{ textAlign: 'center', mb: 10 }}>
              <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 3, letterSpacing: '-0.02em', color: '#172554' }}>
                Built for mission-critical architecture.
              </Typography>
              <Typography sx={{ color: '#475569', fontSize: '1.15rem', maxWidth: 800, mx: 'auto', lineHeight: 1.6 }}>
                Every industry has a trust bottleneck. Cerulea provides the infrastructure to solve it. Select a use case below to view the architectural blueprint and deployment workflow.
              </Typography>
            </Box>

            {/* Strict CSS Grid for guaranteed side-by-side on desktop */}
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', lg: '350px 1fr' }, 
              gap: 6, 
              alignItems: 'start' 
            }}>
              
              {/* Left Side: Scrollable List */}
              <Box sx={{ 
                maxHeight: 650, 
                overflowY: 'auto', 
                pr: 2,
                '&::-webkit-scrollbar': { width: '4px' },
                '&::-webkit-scrollbar-track': { background: 'transparent' },
                '&::-webkit-scrollbar-thumb': { background: '#CBD5E1', borderRadius: '10px' },
              }}>
                <Stack spacing={1.5}>
                  {applications.map((app) => (
                    <Box 
                      key={app.id}
                      onClick={() => setActiveApp(app)}
                      sx={{ 
                        px: 2.5, py: 2, 
                        borderRadius: 2, 
                        cursor: 'pointer',
                        border: '1px solid',
                        borderColor: activeApp.id === app.id ? app.color : 'transparent',
                        bgcolor: activeApp.id === app.id ? '#FFFFFF' : 'transparent',
                        boxShadow: activeApp.id === app.id ? '0 4px 14px rgba(0,0,0,0.05)' : 'none',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        '&:hover': { bgcolor: activeApp.id === app.id ? '#FFFFFF' : '#F1F5F9' }
                      }}
                    >
                      <Box sx={{ color: activeApp.id === app.id ? app.color : '#64748B', display: 'flex' }}>
                        {app.icon}
                      </Box>
                      <Box>
                        <Typography sx={{ fontWeight: 700, color: activeApp.id === app.id ? '#172554' : '#475569', fontSize: '0.95rem' }}>
                          {app.title}
                        </Typography>
                      </Box>
                      {activeApp.id === app.id && (
                        <ArrowForwardIcon sx={{ ml: 'auto', color: app.color, fontSize: 18 }} />
                      )}
                    </Box>
                  ))}
                </Stack>
              </Box>

              {/* Right Side: Blueprint UI */}
              <Box sx={{ 
                bgcolor: '#FFFFFF', 
                border: '1px solid #E2E8F0', 
                borderRadius: 4, 
                height: '100%',
                minHeight: 550,
                display: 'flex', 
                flexDirection: 'column',
                overflow: 'hidden',
                position: 'sticky',
                top: 100,
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)'
              }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeApp.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    {/* Header */}
                    <Box sx={{ p: 5, borderBottom: '1px solid #F1F5F9', position: 'relative', overflow: 'hidden' }}>
                      <Box sx={{ position: 'absolute', top: 0, right: 0, width: 300, height: 300, background: `radial-gradient(circle at top right, ${activeApp.color}15, transparent 70%)`, pointerEvents: 'none' }} />
                      <Typography sx={{ color: activeApp.color, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.75rem', mb: 2 }}>
                        Architecture Blueprint
                      </Typography>
                      <Typography sx={{ fontSize: '2rem', fontWeight: 800, mb: 1, color: '#172554', letterSpacing: '-0.02em' }}>
                        {activeApp.title}
                      </Typography>
                      <Typography sx={{ color: '#475569', fontSize: '1.05rem' }}>
                        {activeApp.subtitle}
                      </Typography>
                    </Box>

                    {/* Body Content */}
                    <Box sx={{ p: 5, flex: 1 }}>
                      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1.5fr' }, gap: 5 }}>
                        
                        <Box>
                          <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 800, mb: 3, letterSpacing: '0.08em' }}>
                            PLATFORM COMPONENTS
                          </Typography>
                          <Stack spacing={1.5}>
                            {activeApp.components.map((comp, i) => (
                              <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <LayersOutlinedIcon sx={{ color: activeApp.color, fontSize: 18 }} />
                                <Typography sx={{ color: '#172554', fontSize: '0.9rem', fontWeight: 600 }}>{comp}</Typography>
                              </Box>
                            ))}
                          </Stack>

                          <Box sx={{ mt: 6 }}>
                            <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 800, mb: 2, letterSpacing: '0.08em' }}>
                              BUSINESS IMPACT
                            </Typography>
                            <Typography sx={{ color: activeApp.color, fontWeight: 800, fontSize: '1.1rem', lineHeight: 1.4 }}>
                              {activeApp.businessImpact}
                            </Typography>
                          </Box>
                        </Box>
                        
                        <Box>
                          <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 800, mb: 3, letterSpacing: '0.08em' }}>
                            DEPLOYMENT WORKFLOW
                          </Typography>
                          <Stack spacing={3}>
                            {activeApp.workflow.map((step, i) => (
                              <Box key={i} sx={{ display: 'flex', gap: 2 }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 0.5 }}>
                                  <Box sx={{ width: 24, height: 24, borderRadius: '50%', bgcolor: `${activeApp.color}10`, border: `1px solid ${activeApp.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: activeApp.color, fontSize: '0.75rem', fontWeight: 800 }}>
                                    {i + 1}
                                  </Box>
                                  {i !== activeApp.workflow.length - 1 && (
                                    <Box sx={{ width: 1, height: 30, bgcolor: '#F1F5F9', my: 0.5 }} />
                                  )}
                                </Box>
                                <Typography sx={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6, pt: 0.2 }}>
                                  {step}
                                </Typography>
                              </Box>
                            ))}
                          </Stack>
                        </Box>

                      </Box>
                    </Box>
                  </motion.div>
                </AnimatePresence>
              </Box>

            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* 6. FEATURED ON BADGES */}
      <Box sx={{ bgcolor: '#FFFFFF', py: 5, borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <Container maxWidth="lg">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
            <Typography sx={{ textAlign: 'center', color: '#94A3B8', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', mb: 4 }}>
              Featured On
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 3 }}>

              {/* Product Hunt — featured + follow in one card */}
              <Box sx={{ display: 'inline-flex', alignItems: 'stretch', height: 54, border: '1px solid #E2E8F0', borderRadius: 2, bgcolor: '#fff', overflow: 'hidden', flexShrink: 0, boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
                <Box component="a"
                  href="https://www.producthunt.com/products/cerulea?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-cerulea-2"
                  target="_blank" rel="noopener noreferrer"
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 2.5, textDecoration: 'none', transition: 'bgcolor 0.15s', '&:hover': { bgcolor: '#fff8f7' } }}>
                  <Box sx={{ width: 28, height: 28, bgcolor: '#FF6154', borderRadius: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Typography sx={{ color: '#fff', fontWeight: 900, fontSize: '0.9rem', lineHeight: 1 }}>P</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: '0.55rem', color: '#999', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', lineHeight: 1 }}>Featured on</Typography>
                    <Typography sx={{ fontSize: '0.82rem', color: '#111', fontWeight: 700, lineHeight: 1.3, mt: 0.3 }}>Product Hunt</Typography>
                  </Box>
                </Box>
                <Box sx={{ width: '1px', bgcolor: '#E2E8F0', my: 1 }} />
                <Box component="a"
                  href="https://www.producthunt.com/products/cerulea?utm_source=badge-follow&utm_medium=badge&utm_source=badge-cerulea"
                  target="_blank" rel="noopener noreferrer"
                  sx={{ display: 'inline-flex', alignItems: 'center', px: 2, textDecoration: 'none', transition: 'bgcolor 0.15s', '&:hover': { bgcolor: '#fff8f7' } }}>
                  <Typography sx={{ fontSize: '0.78rem', color: '#FF6154', fontWeight: 700, whiteSpace: 'nowrap' }}>+ Follow</Typography>
                </Box>
              </Box>

              {/* Smol Launch */}
              <Box component="a" href="https://smollaunch.com" target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', alignItems: 'center', height: 54, flexShrink: 0 }}>
                <Box component="img" src="https://smollaunch.com/badges/featured.svg" alt="Featured on Smol Launch" loading="lazy" sx={{ height: 54, width: 'auto' }} />
              </Box>

              {/* SaasHub */}
              <Box component="a" href="https://www.saashub.com/cerulea?utm_source=badge&utm_campaign=badge&utm_content=cerulea&badge_variant=color&badge_kind=approved" target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', alignItems: 'center', height: 54, flexShrink: 0 }}>
                <Box component="img" src="https://cdn-b.saashub.com/img/badges/approved-color.png?v=1" alt="Approved on SaasHub" sx={{ height: 54, width: 'auto' }} />
              </Box>

              {/* Uneed */}
              <Box component="a" href="https://www.uneed.best/tool/cerulea" target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', alignItems: 'center', height: 54, flexShrink: 0 }}>
                <Box component="img" src="https://www.uneed.best/EMBED3B.png" alt="Launching Soon on Uneed" sx={{ height: 54, width: 'auto' }} />
              </Box>

            </Box>
          </motion.div>
        </Container>
      </Box>

    </Box>
  );
}