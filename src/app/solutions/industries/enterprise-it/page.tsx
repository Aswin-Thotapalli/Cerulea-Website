'use client';

import * as React from 'react';
import { Box, Container, Typography, Grid, Stack, Button, Divider, Slider } from '@mui/material';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import DataObjectOutlinedIcon from '@mui/icons-material/DataObjectOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import DomainOutlinedIcon from '@mui/icons-material/DomainOutlined';
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';

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

const SAAS_PILLARS = [
  {
    id: 'licensing',
    icon: <ExtensionOutlinedIcon />,
    title: 'Software Licensing & DRM',
    legacy: 'SaaS companies rely on centralized license servers that are vulnerable to piracy, credential sharing, and spoofing. Furthermore, B2B software licenses are completely illiquid and cannot be resold or easily transferred.',
    execution: 'Tokenize software licenses as digital assets. Access is granted only when the user’s wallet cryptographically proves ownership of the license token, eliminating credential sharing while enabling secure, trackable B2B license transfers.',
    impact: 'Eradicate software piracy instantly and unlock new revenue models by capturing royalties on secondary market license resales.'
  },
  {
    id: 'api-billing',
    icon: <DataObjectOutlinedIcon />,
    title: 'API Micro-Monetization',
    legacy: 'Traditional payment gateways charge high flat fees per transaction. This makes charging fractions of a cent for individual API calls or AI compute requests economically impossible for SaaS platforms.',
    execution: 'Implement high-throughput payment channels on the Cerulea L1. Developers can stream fractions of a cent continuously as their applications consume your API data or compute resources.',
    impact: 'Unlock entirely new monetization models for developer tools, AI endpoints, and high-frequency data streaming.'
  },
  {
    id: 'audit-logs',
    icon: <SecurityOutlinedIcon />,
    title: 'Immutable System Logs',
    legacy: 'When an enterprise network experiences a data breach or insider threat, sophisticated attackers cover their tracks by altering or deleting central server logs, hindering forensic recovery.',
    execution: 'Stream critical application logs and database access events directly to an isolated Private Chain. Because the ledger is append-only, threat data is permanently hashed and impossible to modify or delete.',
    impact: 'Guarantee perfect forensic data integrity and comply flawlessly with strict ISO and SOC2 data governance requirements.'
  },
  {
    id: 'slas',
    icon: <HandshakeOutlinedIcon />,
    title: 'Automated SLA Enforcement',
    legacy: 'Enforcing Service Level Agreements (SLAs) for cloud uptime requires manual monitoring, lengthy client disputes, and delayed credit issuing when service guarantees are breached.',
    execution: 'Encode SLA terms directly into programmable escrow contracts. If decentralized Oracles detect that server uptime drops below 99.99%, the smart contract automatically executes the predefined refund to the client.',
    impact: 'Eliminate billing disputes, reduce customer support overhead, and provide enterprise clients with mathematically guaranteed service compensation.'
  },
  {
    id: 'sso',
    icon: <KeyOutlinedIcon />,
    title: 'Decentralized SSO (Federated Identity)',
    legacy: 'Enterprise single sign-on (SSO) relies on massive centralized providers. If the provider experiences an outage or a breach, thousands of dependent SaaS platforms and enterprise clients are locked out simultaneously.',
    execution: 'Implement decentralized identity frameworks. Users control their own cryptographic access credentials, allowing them to authenticate across multiple isolated SaaS platforms without relying on a central point of failure.',
    impact: 'Enhance platform resilience, eliminate centralized authentication honeypots, and provide a frictionless login experience.'
  },
  {
    id: 'compute',
    icon: <CloudOutlinedIcon />,
    title: 'Decentralized Cloud Provisioning',
    legacy: 'Cloud infrastructure is dominated by a few massive hyperscalers, leading to vendor lock-in, inflexible pricing, and single points of regional failure.',
    execution: 'Connect your SaaS architecture to Decentralized Physical Infrastructure Networks (DePIN). Smart contracts route compute and storage workloads to a distributed network of global providers based on real-time pricing and latency.',
    impact: 'Drastically reduce cloud infrastructure costs, eliminate vendor lock-in, and achieve true global redundancy.'
  }
];

export default function EnterpriseITSolutionPage() {
  // Simulator State
  const [monthlyTx, setMonthlyTx] = React.useState<number>(500000); 
  const handleTxChange = (event: Event, newValue: number | number[]) => setMonthlyTx(newValue as number);
  
  // Math Logic (API gateway processing fees and license audits)
  const legacyCostPerTx = 0.35; 
  const ceruleaCostPerTx = 0.005; 
  const annualLegacyCost = monthlyTx * legacyCostPerTx * 12;
  const annualCeruleaCost = monthlyTx * ceruleaCostPerTx * 12;
  const annualSavings = annualLegacyCost - annualCeruleaCost;

  const [activePillar, setActivePillar] = React.useState(SAAS_PILLARS[0]);

  return (
    <Box sx={{ bgcolor: '#FAFAFA', color: '#172554', overflowX: 'hidden', pb: 0 }}>
      
      {/* 1. THE HERO */}
      <Box sx={{ pt: { xs: 16, md: 24 }, pb: { xs: 12, md: 16 }, position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '500px', background: 'radial-gradient(ellipse at top, rgba(139, 92, 246, 0.1), transparent 70%)', pointerEvents: 'none' }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 2, py: 1, borderRadius: 2, bgcolor: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.2)', mb: 4 }}>
              <CloudOutlinedIcon sx={{ color: '#8b5cf6', fontSize: 20 }} />
              <Typography sx={{ color: '#8b5cf6', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                Enterprise IT & SaaS
              </Typography>
            </Box>
            
            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '3rem', md: '5rem' }, lineHeight: 1.05, letterSpacing: '-0.03em', mb: 4, mx: 'auto', maxWidth: 1000, color: '#172554' }}>
              Decentralize architecture.<br />
              <span style={{ color: '#64748B' }}>Automate entitlements.</span>
            </Typography>
            
            <Typography sx={{ color: '#475569', fontSize: { xs: '1.1rem', md: '1.3rem' }, maxWidth: 850, lineHeight: 1.6, mb: 6, mx: 'auto', fontWeight: 400 }}>
              Cerulea provides the execution engine to tokenize software licensing, automate API micro-billing, and generate immutable system audit logs without writing complex smart contract code.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
              <Button 
                href="/company/contact"
                variant="contained" 
                endIcon={<ArrowForwardIcon />} 
                sx={{ 
                  bgcolor: '#8b5cf6', color: '#FFFFFF', px: 4, py: 2, fontSize: '1rem', fontWeight: 700, borderRadius: 2,
                  boxShadow: '0 4px 14px rgba(139, 92, 246, 0.3)',
                  '&:hover': { bgcolor: '#7c3aed', transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(139, 92, 246, 0.4)' },
                  transition: 'all 0.2s'
                }}
              >
                Contact Enterprise Sales
              </Button>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* 2. THE STRATEGIC ADVANTAGES */}
      <Container maxWidth="lg" sx={{ mb: 20 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 10, letterSpacing: '-0.02em', textAlign: 'center', color: '#172554' }}>
            The Strategic Advantages of Blockchain
          </Typography>
          
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: { xs: 6, lg: 8 } }}>
            {/* ROW 1 */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#8b5cf6', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>01.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Frictionless Micro-Billing</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>High throughput execution completely bypasses legacy payment gateways. SaaS providers can process millions of microscopic transactions per second, capturing exact value for compute and API usage.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#8b5cf6', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>02.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Unalterable Audit Trails</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Once a system event or configuration change is recorded on the ledger, it cannot be spoofed or deleted. This provides absolute mathematical proof of compliance to enterprise clients.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#8b5cf6', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>03.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Cryptographic Access</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Replace vulnerable passwords with deterministic token checks. Users access platforms by signing a transaction with their private key, eliminating credential stuffing attacks instantly.</Typography>
            </Box>

            {/* ROW 2 */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#8b5cf6', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>04.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Automated Escrow Execution</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Programmable smart contracts execute vendor SLA payouts autonomously. Funds are released instantly or refunded to the client based entirely on verified performance metrics.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#8b5cf6', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>05.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Secondary Market Capital</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Software licenses converted to digital assets can be safely resold between B2B clients. Smart contracts route a hardcoded royalty cut back to the software publisher on every transfer.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#8b5cf6', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>06.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Unified State Management</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Eliminate fragmented internal databases. Partner integrations, distributed microservices, and global billing engines all read from the exact same shared cryptographic state.</Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>

      {/* 3. USE CASES & APPLICATIONS */}
      <Box sx={{ bgcolor: '#FFFFFF', py: 16, borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', mb: 16 }}>
        <Container maxWidth="xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>Use Cases & Applications</Typography>
              <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 700, mx: 'auto' }}>
                A single unified protocol capable of supporting complex cloud architectures. Select a specific operational segment below.
              </Typography>
            </Box>

            {/* Locked Flexbox Layout */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 4, alignItems: 'flex-start' }}>
              
              {/* Left Column: Selection List */}
              <Box sx={{ 
                width: { xs: '100%', lg: '380px' }, 
                flexShrink: 0,
                maxHeight: 600, 
                overflowY: 'auto', 
                pr: 2,
                '&::-webkit-scrollbar': { width: '6px' },
                '&::-webkit-scrollbar-track': { background: '#F1F5F9', borderRadius: '10px' },
                '&::-webkit-scrollbar-thumb': { background: '#CBD5E1', borderRadius: '10px' }
              }}>
                <Stack spacing={1.5}>
                  {SAAS_PILLARS.map((pillar) => (
                    <Box 
                      key={pillar.id}
                      onClick={() => setActivePillar(pillar)}
                      sx={{ 
                        p: 2.5, 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 2, 
                        cursor: 'pointer',
                        borderRadius: 3,
                        border: '1px solid',
                        borderColor: activePillar.id === pillar.id ? 'rgba(139, 92, 246, 0.4)' : '#E2E8F0',
                        bgcolor: activePillar.id === pillar.id ? 'rgba(139, 92, 246, 0.05)' : '#FFFFFF',
                        transition: 'all 0.2s ease',
                        boxShadow: activePillar.id === pillar.id ? '0 4px 12px rgba(139, 92, 246, 0.05)' : 'none',
                        '&:hover': { bgcolor: activePillar.id === pillar.id ? 'rgba(139, 92, 246, 0.08)' : '#F8FAFC' }
                      }}
                    >
                      <Box sx={{ color: activePillar.id === pillar.id ? '#8b5cf6' : '#64748B', display: 'flex' }}>
                        {pillar.icon}
                      </Box>
                      <Typography sx={{ fontSize: '1.05rem', fontWeight: 700, color: activePillar.id === pillar.id ? '#172554' : '#475569' }}>
                        {pillar.title}
                      </Typography>
                      {activePillar.id === pillar.id && (
                        <ArrowForwardIcon sx={{ ml: 'auto', color: '#8b5cf6', fontSize: 20 }} />
                      )}
                    </Box>
                  ))}
                </Stack>
              </Box>

              {/* Right Column: Deep Dive Panel */}
              <Box sx={{ 
                flexGrow: 1, 
                width: '100%',
                p: { xs: 4, md: 6 }, 
                bgcolor: '#FFFFFF', 
                border: '1px solid #E2E8F0', 
                borderRadius: 4, 
                minHeight: 500, 
                position: 'relative', 
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
              }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePillar.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 5 }}>
                      <Box sx={{ width: 48, height: 48, borderRadius: 2, bgcolor: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {activePillar.icon}
                      </Box>
                      <Typography sx={{ fontSize: '2rem', fontWeight: 800, color: '#172554', letterSpacing: '-0.02em' }}>
                        {activePillar.title}
                      </Typography>
                    </Box>

                    <Stack spacing={5}>
                      <Box>
                        <Typography sx={{ fontSize: '0.8rem', color: '#dc2626', fontWeight: 700, letterSpacing: '0.1em', mb: 1.5 }}>THE LEGACY BOTTLENECK</Typography>
                        <Typography sx={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7, textAlign: 'justify' }}>
                          {activePillar.legacy}
                        </Typography>
                      </Box>
                      <Divider sx={{ borderColor: '#E2E8F0' }} />
                      <Box>
                        <Typography sx={{ fontSize: '0.8rem', color: '#059669', fontWeight: 700, letterSpacing: '0.1em', mb: 1.5 }}>THE CERULEA EXECUTION</Typography>
                        <Typography sx={{ color: '#172554', fontSize: '1.05rem', lineHeight: 1.7, textAlign: 'justify' }}>
                          {activePillar.execution}
                        </Typography>
                      </Box>
                      <Box sx={{ pt: 2 }}>
                        <Box sx={{ p: 4, bgcolor: 'rgba(139, 92, 246, 0.05)', border: '1px solid rgba(139, 92, 246, 0.2)', borderRadius: 3 }}>
                          <Typography sx={{ fontSize: '0.75rem', color: '#8b5cf6', fontWeight: 700, letterSpacing: '0.05em', mb: 1 }}>ARCHITECTURAL IMPACT</Typography>
                          <Typography sx={{ color: '#172554', fontSize: '1.15rem', fontWeight: 600, lineHeight: 1.5, textAlign: 'justify' }}>
                            {activePillar.impact}
                          </Typography>
                        </Box>
                      </Box>
                    </Stack>
                  </motion.div>
                </AnimatePresence>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>
          
      {/* 4. THE ROI SIMULATOR */}
      <Container maxWidth="lg" sx={{ mb: 20 }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>API Billing & Licensing Simulator</Typography>
            <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
              Payment gateway processing fees, manual invoice generation, and complex license administration drain critical margins from SaaS providers. Calculate your exact savings by migrating to Cerulea execution.
            </Typography>
          </Box>

          <Box sx={{ p: { xs: 4, md: 6 }, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
            <Grid container spacing={8} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography sx={{ color: '#172554', fontWeight: 600, mb: 1 }}>Monthly Processed API Bills & Licenses</Typography>
                <Typography sx={{ color: '#8b5cf6', fontSize: '3rem', fontWeight: 800, mb: 4 }}>{monthlyTx.toLocaleString('en-US')} Tx</Typography>
                
                <Slider
                  value={monthlyTx} onChange={handleTxChange} min={10000} max={5000000} step={10000}
                  sx={{ color: '#8b5cf6', height: 8, '& .MuiSlider-thumb': { height: 24, width: 24, backgroundColor: '#fff', border: '2px solid currentColor' } }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', color: '#64748B', fontSize: '0.85rem', mt: 1 }}>
                  <Typography>10,000</Typography>
                  <Typography>5,000,000+</Typography>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Stack spacing={3}>
                  <Box sx={{ p: 3, bgcolor: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography sx={{ fontSize: '0.75rem', color: '#dc2626', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>ESTIMATED LEGACY COST</Typography>
                      <Typography sx={{ fontSize: '0.8rem', color: '#475569' }}>Stripe Gateway Fees & Admin Review</Typography>
                    </Box>
                    <Typography sx={{ fontSize: '1.75rem', color: '#172554', fontWeight: 700 }}>${Math.round(annualLegacyCost).toLocaleString('en-US')}</Typography>
                  </Box>

                  <Box sx={{ p: 3, bgcolor: 'rgba(139, 92, 246, 0.05)', border: '1px solid rgba(139, 92, 246, 0.2)', borderRadius: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography sx={{ fontSize: '0.75rem', color: '#8b5cf6', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>CERULEA EXECUTION COST</Typography>
                      <Typography sx={{ fontSize: '0.8rem', color: '#475569' }}>Smart Contract Settlement</Typography>
                    </Box>
                    <Typography sx={{ fontSize: '1.75rem', color: '#172554', fontWeight: 700 }}>${Math.round(annualCeruleaCost).toLocaleString('en-US')}</Typography>
                  </Box>

                  <Box sx={{ p: 3, bgcolor: 'rgba(5, 150, 105, 0.05)', border: '1px solid rgba(5, 150, 105, 0.3)', borderRadius: 3, position: 'relative', overflow: 'hidden' }}>
                    <Box sx={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '6px', bgcolor: '#059669' }} />
                    <Box sx={{ pl: 2 }}>
                      <Typography sx={{ fontSize: '0.85rem', color: '#059669', fontWeight: 700, mb: 1, letterSpacing: '0.05em' }}>TOTAL OVERHEAD SAVED ANNUALLY</Typography>
                      <Typography sx={{ fontSize: '3rem', color: '#172554', fontWeight: 800, lineHeight: 1 }}>${Math.round(annualSavings).toLocaleString('en-US')}</Typography>
                    </Box>
                  </Box>
                </Stack>
              </Grid>
            </Grid>

            {/* Strict Methodology Disclaimer */}
            <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid #E2E8F0' }}>
              <Typography sx={{ fontSize: '0.8rem', color: '#172554', fontWeight: 700, mb: 1, letterSpacing: '0.05em' }}>
                METHODOLOGY
              </Typography>
              <Typography sx={{ fontSize: '0.8rem', color: '#475569', lineHeight: 1.6, textAlign: 'justify' }}>
                The legacy calculation utilizes SaaS industry benchmarks estimating the average combined operational cost of processing a credit card invoice, calculating a usage-based tier, and issuing a B2B license verification at <strong>$0.35 USD per execution</strong>. This accounts for legacy Stripe/PayPal gateway cuts and internal sales operations labor. Executing the exact same entitlement trigger via Cerulea incurs an estimated network fee of <strong>$0.005 USD</strong>. This figure represents the computational gas cost required to automatically verify a user's cryptographic signature and deterministically route micro-payments on a high-throughput consensus engine, bypassing expensive financial middlemen entirely.
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>

      {/* 5. SYSTEM ARCHITECTURE DIAGRAMS */}
      <Box sx={{ bgcolor: '#FFFFFF', py: 16, borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', mb: 16 }}>
        <Container maxWidth="xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <Box sx={{ textAlign: 'center', mb: 10 }}>
              <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>Network & Execution Architecture</Typography>
              <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
                Whether you are bridging legacy AWS cloud infrastructure or deploying a native DApp platform, Cerulea provides the exact framework required.
              </Typography>
            </Box>

            <Stack spacing={10}>
              
              {/* DIAGRAM A: ENTERPRISE BRIDGING */}
              <Box>
                <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1, textAlign: 'center' }}>Track A: Enterprise Cloud Bridging</Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', mb: 6, lineHeight: 1.6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
                  For major software vendors connecting existing databases. Legacy HTTP requests are translated into secure Web3 transactions without overhauling core compute layers.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2, position: 'relative' }}>
                  
                  {/* Node 1 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '1px solid #CBD5E1', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <DomainOutlinedIcon sx={{ color: '#64748B', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Legacy Cloud Core</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>AWS / Azure Datacenter</Typography>
                  </Box>

                  {/* Arrow 1 */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#64748B', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>HTTPS / REST</Typography>
                    <ArrowForwardIcon sx={{ color: '#64748B', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>

                  {/* Node 2 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: 'rgba(139, 92, 246, 0.05)', border: '2px solid #8b5cf6', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(139, 92, 246, 0.15)' }}>
                      <ApiOutlinedIcon sx={{ color: '#8b5cf6', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Cerulea API</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Translation Gateway</Typography>
                  </Box>

                  {/* Arrow 2 */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#8b5cf6', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>WASM COMPILATION</Typography>
                    <ArrowForwardIcon sx={{ color: '#8b5cf6', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>

                  {/* Node 3 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '2px solid #059669', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(5, 150, 105, 0.15)' }}>
                      <DnsOutlinedIcon sx={{ color: '#059669', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Cerulea Private Chains</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Sovereign Audit Execution</Typography>
                  </Box>

                </Box>
              </Box>

              <Divider sx={{ borderColor: '#E2E8F0' }} />

              {/* DIAGRAM B: NATIVE WEB3 */}
              <Box>
                <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1, textAlign: 'center' }}>Track B: Native DApp Execution</Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', mb: 6, lineHeight: 1.6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
                  For native Web3 platforms and DePIN networks. Route API requests and licensing directly to autonomous public smart contracts.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2, position: 'relative' }}>
                  
                  {/* Node 1 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '1px solid #CBD5E1', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <TerminalOutlinedIcon sx={{ color: '#64748B', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Client Portal</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>React App & SDKs</Typography>
                  </Box>

                  {/* Arrow 1 */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#64748B', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>JSON-RPC</Typography>
                    <ArrowForwardIcon sx={{ color: '#64748B', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>

                  {/* Node 2 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: 'rgba(37, 99, 235, 0.05)', border: '2px solid #2563eb', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(37, 99, 235, 0.15)' }}>
                      <HubOutlinedIcon sx={{ color: '#2563eb', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Decentralized Oracles</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Validation Nodes</Typography>
                  </Box>

                  {/* Arrow 2 */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#2563eb', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>STATE EXECUTION</Typography>
                    <ArrowForwardIcon sx={{ color: '#2563eb', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>

                  {/* Node 3 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '2px solid #9333ea', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(147, 51, 234, 0.15)' }}>
                      <MemoryOutlinedIcon sx={{ color: '#9333ea', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Cerulea Public L1</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Licensing Logic Triggers</Typography>
                  </Box>

                </Box>
              </Box>

            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* 6. APPLICABILITY MATRIX */}
      <Container maxWidth="lg" sx={{ mb: 20 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>Applicability Across the Spectrum</Typography>
            <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 700, mx: 'auto' }}>
              Cerulea provides dedicated infrastructure tailored for the distinct operational requirements of the software and cloud computing sector.
            </Typography>
          </Box>

          <Stack spacing={4}>
            {/* Enterprise Row */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(139, 92, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <CloudOutlinedIcon sx={{ fontSize: 40, color: '#8b5cf6' }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>Enterprise SaaS Providers</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Major software vendors utilize Cerulea to establish unalterable system audit logs, automate complex B2B SLA refunds, and completely eradicate software piracy through cryptographically verified licensing.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY ENTERPRISE USE CASES</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#8b5cf6' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>SLA Escrow Automation</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#8b5cf6' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>License Tokenization</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#8b5cf6' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>SOC2 Log Immutability</Typography></Box>
                </Stack>
              </Box>
            </Box>

            {/* Cloud Row */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(139, 92, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <StorageOutlinedIcon sx={{ fontSize: 40, color: '#8b5cf6' }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>Cloud Infrastructure Networks</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Datacenters and cloud providers deploy Cerulea to monitor global compute allocation, instantly verify cryptographic access requests across federated identities, and automate high speed micro billing for resource consumption.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY INFRA USE CASES</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#8b5cf6' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>API Micro-Billing</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#8b5cf6' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Decentralized SSO</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#8b5cf6' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Compute Workload Routing</Typography></Box>
                </Stack>
              </Box>
            </Box>

            {/* DApp Row */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(139, 92, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <CodeOutlinedIcon sx={{ fontSize: 40, color: '#8b5cf6' }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>DePIN & AI Developers</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Forward-thinking engineers build Decentralized Physical Infrastructure Networks (DePIN) and decentralized AI marketplaces on the high-throughput L1. They utilize Cerulea's visual Studio to guarantee absolute smart contract security.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY DEPIN USE CASES</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#8b5cf6' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>AI Training Data Provenance</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#8b5cf6' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>GPU Resource Marketplaces</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#8b5cf6' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Storage Tokenization</Typography></Box>
                </Stack>
              </Box>
            </Box>
          </Stack>
        </motion.div>
      </Container>

      {/* 7. RECOMMENDED ARCHITECTURE (INDUSTRY MAPPED STACK) */}
      <Container maxWidth="md" sx={{ mb: 20 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>The Software Technology Stack</Typography>
            <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 700, mx: 'auto', textAlign: 'justify' }}>
              We do not sell isolated smart contracts. We provide a vertically integrated platform specifically mapped to the strict requirements of cloud operations. It is architected to provide a highly secure pathway for migrating legacy IT systems into programmable execution environments.
            </Typography>
          </Box>

          <Box sx={{ position: 'relative' }}>
            {/* The Left-Aligned Connecting Line */}
            <Box sx={{ position: 'absolute', left: 24, top: 20, bottom: 20, width: '2px', bgcolor: 'rgba(139, 92, 246, 0.2)', display: { xs: 'none', md: 'block' } }} />

            <Stack spacing={6}>
              {/* Layer 1 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#FAFAFA', border: '2px solid #8b5cf6', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(139, 92, 246, 0.2)', mr: 4 }}>
                  <DnsOutlinedIcon sx={{ color: '#8b5cf6', fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: '#8b5cf6', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 01: COMPUTE LEDGERS</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#172554', mb: 1 }}>Hybrid Cloud Networks</Typography>
                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Deploy an isolated Private Subnet strictly for internal B2B compliance logs, or launch directly onto the high-throughput Public L1 to facilitate decentralized API monetization.
                  </Typography>
                </Box>
              </Box>

              {/* Layer 2 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#FAFAFA', border: '2px solid #8b5cf6', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(139, 92, 246, 0.2)', mr: 4 }}>
                  <VpnKeyOutlinedIcon sx={{ color: '#8b5cf6', fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: '#8b5cf6', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 02: FEDERATED KYC</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#172554', mb: 1 }}>On-Chain Identity Resolver</Typography>
                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Deploy the Identity module to ensure every interacting software client or API endpoint is mathematically tied to a verified corporate credential before bandwidth is routed.
                  </Typography>
                </Box>
              </Box>

              {/* Layer 3 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#FAFAFA', border: '2px solid #8b5cf6', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(139, 92, 246, 0.2)', mr: 4 }}>
                  <ExtensionOutlinedIcon sx={{ color: '#8b5cf6', fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: '#8b5cf6', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 03: ASSET TOKENIZATION</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#172554', mb: 1 }}>Verifiable Data Models</Typography>
                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Use Cerulea Studio to visually map software licenses, SLA penalty triggers, and automated API billing structures into secure smart contracts without writing low level code.
                  </Typography>
                </Box>
              </Box>

              {/* Layer 4 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#FAFAFA', border: '2px solid #8b5cf6', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(139, 92, 246, 0.2)', mr: 4 }}>
                  <SecurityOutlinedIcon sx={{ color: '#8b5cf6', fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: '#8b5cf6', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 04: INFRASTRUCTURE GOVERNANCE</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#172554', mb: 1 }}>Threshold Control Framework</Typography>
                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Protect the core stack. Enforce strict cryptographic signatures from authorized DevOps leads before major smart contract upgrades or massive infrastructure changes are executed.
                  </Typography>
                </Box>
              </Box>

              {/* Layer 5 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#FAFAFA', border: '2px solid #8b5cf6', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(139, 92, 246, 0.2)', mr: 4 }}>
                  <ApiOutlinedIcon sx={{ color: '#8b5cf6', fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: '#8b5cf6', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 05: LEGACY CLOUD BRIDGE</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#172554', mb: 1 }}>The Operations API Gateway</Typography>
                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Interact with the entire blockchain ecosystem instantly via auto-generated REST endpoints, bridging legacy AWS, Azure, and internal ERP software directly into Web3.
                  </Typography>
                </Box>
              </Box>

            </Stack>
          </Box>
        </motion.div>
      </Container>

      {/* 8. TIME TO VALUE COMPARISON */}
      <Box sx={{ pb: 0, mb: 0 }}>
        <Container maxWidth="xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>Accelerated Time-to-Value</Typography>
              <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
                Building custom IT blockchains from scratch requires specialized engineers and massive software integration delays. Cerulea visualizes the process, cutting deployment times significantly.
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 4, alignItems: 'stretch', pb: 12 }}>
              
              {/* The Traditional Way */}
              <Box sx={{ flex: 1, p: { xs: 4, md: 6 }, bgcolor: '#FFFFFF', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: 4, position: 'relative', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, bgcolor: '#ef4444' }} />
                <Typography sx={{ color: '#ef4444', fontWeight: 700, letterSpacing: '0.05em', mb: 1, fontSize: '0.85rem' }}>TRADITIONAL BLOCKCHAIN DEVELOPMENT</Typography>
                <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, color: '#172554', mb: 5 }}>12 to 18 Months</Typography>
                
                <Stack spacing={4}>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 1: Architecture & Solidity (Months 1 to 5)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Hiring specialized Web3 developers to write custom state machines, API micro-billing logic, and licensing standards entirely from scratch.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 2: Third-Party Audits (Months 6 to 8)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Paying external firms hundreds of thousands of dollars to find and patch fatal vulnerabilities in the automated escrow code before handling client SLA capital.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 3: Cloud Middleware (Months 9 to 13)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Building fragile custom middleware to successfully translate traffic from AWS or Azure servers into blockchain compatible execution payloads.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 4: Network Testing (Months 14 to 18)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Enduring a massive beta rollout phase to ensure the custom middleware, the smart contracts, and the global SaaS client portals synchronize correctly.</Typography>
                  </Box>
                </Stack>
              </Box>

              {/* The Cerulea Way */}
              <Box sx={{ flex: 1, p: { xs: 4, md: 6 }, bgcolor: 'rgba(139, 92, 246, 0.02)', border: '1px solid rgba(139, 92, 246, 0.3)', borderRadius: 4, position: 'relative', overflow: 'hidden', boxShadow: '0 10px 40px rgba(139, 92, 246, 0.08)' }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, bgcolor: '#8b5cf6' }} />
                <Typography sx={{ color: '#8b5cf6', fontWeight: 700, letterSpacing: '0.05em', mb: 1, fontSize: '0.85rem' }}>CERULEA PLATFORM DEPLOYMENT</Typography>
                <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, color: '#172554', mb: 5 }}>8 to 10 Weeks</Typography>
                
                <Stack spacing={4}>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 1: Visual Entitlement Modeling (Weeks 1 to 2)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Use Cerulea Studio to visually map software licenses, billing triggers, and automated SLA escrow constraints without writing any code.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 2: Subnet Provisioning (Weeks 3 to 4)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Automate the deployment of the Sovereign Private Chain and B2B validator nodes directly from the control dashboard.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 3: API Gateway Hookup (Weeks 5 to 7)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Connect existing cloud infrastructure and SaaS backend servers directly to auto-generated Cerulea REST APIs. No custom middleware is required.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 4: Production Go-Live (Weeks 8 to 10)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Bridge the finalized logic to the live network and begin executing high-speed micro-billing and compliance tracking with absolute architectural confidence.</Typography>
                  </Box>
                </Stack>
              </Box>
              
            </Box>
          </motion.div>
        </Container>
      </Box>

    </Box>
  );
}