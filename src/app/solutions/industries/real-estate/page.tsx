'use client';

import * as React from 'react';
import { Box, Container, Typography, Grid, Stack, Button, Divider, Slider } from '@mui/material';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DomainOutlinedIcon from '@mui/icons-material/DomainOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';

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

const REAL_ESTATE_PILLARS = [
  {
    id: 'tokenization',
    icon: <DomainOutlinedIcon />,
    title: 'RWA Tokenization',
    legacy: 'Commercial real estate suffers from massive illiquidity. Transferring ownership requires weeks of manual legal verification, locking out international capital and preventing fractional investment.',
    execution: 'Convert physical property into highly divisible digital tokens. Using Cerulea Studio, you can visually embed strict compliance rules directly into the asset, ensuring it can only be transferred between authorized, KYC verified wallets.',
    impact: 'Unlock global liquidity pools and enable instant, fractionalized trading of previously monolithic real estate assets.'
  },
  {
    id: 'escrow',
    icon: <GavelOutlinedIcon />,
    title: 'Automated Smart Escrow',
    legacy: 'Property transactions rely on expensive, manual title and escrow companies to hold capital and verify documents, adding thousands of dollars in fees and weeks of delay to every closing.',
    execution: 'Replace paper with programmable escrow. Capital is locked cryptographically and released to the seller the exact second the digital title transfer is verified by the network.',
    impact: 'Accelerate property closings from 30 days to 30 seconds while eliminating third party holding fees.'
  },
  {
    id: 'registry',
    icon: <MapOutlinedIcon />,
    title: 'Immutable Title Registry',
    legacy: 'Property titles are maintained in outdated municipal databases or paper archives. This opacity leads to title disputes, forgery, and the mandatory requirement for costly title insurance.',
    execution: 'Record property deeds as unalterable data models on the blockchain. Once a title is anchored to the ledger, the cryptographic provenance provides absolute, undeniable proof of historical ownership.',
    impact: 'Eradicate property fraud, resolve title disputes instantly, and drastically reduce the need for title insurance.'
  },
  {
    id: 'management',
    icon: <HomeWorkOutlinedIcon />,
    title: 'Automated Property Management',
    legacy: 'Managing tenant leases, rent collection, and maintenance escrows requires fragmented accounting software and constant manual reconciliation by property managers.',
    execution: 'Deploy smart lease contracts that automatically route tenant payments, distribute dividends to fractional owners, and release maintenance funds to approved contractors upon verified work completion.',
    impact: 'Turn property management into a passive, autonomous process with perfect financial reconciliation.'
  },
  {
    id: 'zoning',
    icon: <ConstructionOutlinedIcon />,
    title: 'Transparent Zoning & Permits',
    legacy: 'Real estate developers face opaque, bureaucratic delays when navigating municipal zoning boards and construction permit approvals, stalling critical infrastructure projects.',
    execution: 'Municipalities utilize Cerulea to establish a transparent, shared ledger for all construction permits. Developers, inspectors, and city planners track approval statuses with cryptographic certainty.',
    impact: 'Streamline the real estate development pipeline and eradicate bureaucratic bottlenecks.'
  },
  {
    id: 'lending',
    icon: <AccountBalanceOutlinedIcon />,
    title: 'DeFi Mortgage Lending',
    legacy: 'Securing a mortgage requires heavy manual underwriting, credit checks, and slow loan servicing, creating massive friction for buyers and capital inefficiency for lenders.',
    execution: 'Deploy overcollateralized lending protocols where borrowing logic is hardcoded. Users deposit tokenized real estate as collateral and instantly draw stablecoin credit against it without human intervention.',
    impact: 'Instantaneous credit provisioning with mathematically guaranteed collateral safety and automated liquidations.'
  }
];

export default function RealEstateSolutionPage() {
  // Simulator State
  const [monthlyClosings, setMonthlyClosings] = React.useState<number>(2500); 
  const handleClosingChange = (event: Event, newValue: number | number[]) => setMonthlyClosings(newValue as number);
  
  // Math Logic (Title & Escrow average costs)
  const legacyCostPerClosing = 1850.00; 
  const ceruleaCostPerClosing = 4.50; 
  const annualLegacyCost = monthlyClosings * legacyCostPerClosing * 12;
  const annualCeruleaCost = monthlyClosings * ceruleaCostPerClosing * 12;
  const annualSavings = annualLegacyCost - annualCeruleaCost;

  const [activePillar, setActivePillar] = React.useState(REAL_ESTATE_PILLARS[0]);

  return (
    <Box sx={{ bgcolor: '#FAFAFA', color: '#172554', overflowX: 'hidden', pb: 0 }}>
      
      {/* 1. THE HERO */}
      <Box sx={{ pt: { xs: 16, md: 24 }, pb: { xs: 12, md: 16 }, position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '500px', background: 'radial-gradient(ellipse at top, rgba(79, 70, 229, 0.1), transparent 70%)', pointerEvents: 'none' }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 2, py: 1, borderRadius: 2, bgcolor: 'rgba(79, 70, 229, 0.1)', border: '1px solid rgba(79, 70, 229, 0.2)', mb: 4 }}>
              <DomainOutlinedIcon sx={{ color: '#4f46e5', fontSize: 20 }} />
              <Typography sx={{ color: '#4f46e5', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                Real Estate & PropTech
              </Typography>
            </Box>
            
            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '3rem', md: '5rem' }, lineHeight: 1.05, letterSpacing: '-0.03em', mb: 4, mx: 'auto', maxWidth: 1000, color: '#172554' }}>
              Tokenize property.<br />
              <span style={{ color: '#64748B' }}>Automate escrow.</span>
            </Typography>
            
            <Typography sx={{ color: '#475569', fontSize: { xs: '1.1rem', md: '1.3rem' }, maxWidth: 850, lineHeight: 1.6, mb: 6, mx: 'auto', fontWeight: 400 }}>
              Cerulea provides the execution engine to fractionalize real estate assets, automate title transfers, and permanently eliminate escrow reconciliation delays without writing complex smart contract code.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
              <Button 
                href="/company/contact"
                variant="contained" 
                endIcon={<ArrowForwardIcon />} 
                sx={{ 
                  bgcolor: '#4f46e5', color: '#FFFFFF', px: 4, py: 2, fontSize: '1rem', fontWeight: 700, borderRadius: 2,
                  boxShadow: '0 4px 14px rgba(79, 70, 229, 0.3)',
                  '&:hover': { bgcolor: '#3730a3', transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(79, 70, 229, 0.4)' },
                  transition: 'all 0.2s'
                }}
              >
                Contact Enterprise Sales
              </Button>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* 2. THE STRATEGIC ADVANTAGES (STRICT 3x2 GRID, JUSTIFIED TEXT) */}
      <Container maxWidth="lg" sx={{ mb: 20 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 10, letterSpacing: '-0.02em', textAlign: 'center', color: '#172554' }}>
            The Strategic Advantages of Blockchain
          </Typography>
          
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: { xs: 6, lg: 8 } }}>
            {/* ROW 1 */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#4f46e5', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>01.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Fractional Liquidity</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>High value commercial properties can be divided into thousands of digital shares. This dramatically lowers the barrier to entry for retail investors and unlocks massive global capital pools for asset managers.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#4f46e5', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>02.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Atomic Settlements</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Execution and title transfer occur simultaneously in milliseconds. This absolute finality ensures there are no delays, no payment rollbacks, and no costly manual reconciliation errors between counterparties.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#4f46e5', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>03.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Programmable Escrow</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Institutions can embed strict business logic and automated escrow conditions directly into the asset code itself. Capital is held securely and released exactly when network conditions are met without third parties.</Typography>
            </Box>

            {/* ROW 2 */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#4f46e5', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>04.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Global Accessibility</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Unlike traditional real estate markets, blockchain networks do not have borders. International investors can acquire and trade fractionalized property shares seamlessly without relying on fragmented foreign banking infrastructure.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#4f46e5', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>05.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Unalterable Provenance</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Once a property deed is recorded on the ledger, it cannot be altered or forged. This eliminates the need for expensive title searches and drastically reduces the systemic risk of property fraud.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#4f46e5', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>06.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Provable Auditing</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Every single network state change is permanently hashed. Regulators and compliance teams can verify historical transaction data and ownership logs with absolute mathematical certainty in real time.</Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>

      {/* 3. USE CASES & APPLICATIONS (DEEP-DIVE CONSOLE) */}
      <Box sx={{ bgcolor: '#FFFFFF', py: 16, borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', mb: 16 }}>
        <Container maxWidth="xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>Use Cases & Applications</Typography>
              <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 700, mx: 'auto' }}>
                A single unified protocol capable of supporting global property networks. Select a specific operational segment below.
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
                  {REAL_ESTATE_PILLARS.map((pillar) => (
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
                        borderColor: activePillar.id === pillar.id ? 'rgba(79, 70, 229, 0.4)' : '#E2E8F0',
                        bgcolor: activePillar.id === pillar.id ? 'rgba(79, 70, 229, 0.05)' : '#FFFFFF',
                        transition: 'all 0.2s ease',
                        boxShadow: activePillar.id === pillar.id ? '0 4px 12px rgba(79, 70, 229, 0.05)' : 'none',
                        '&:hover': { bgcolor: activePillar.id === pillar.id ? 'rgba(79, 70, 229, 0.08)' : '#F8FAFC' }
                      }}
                    >
                      <Box sx={{ color: activePillar.id === pillar.id ? '#4f46e5' : '#64748B', display: 'flex' }}>
                        {pillar.icon}
                      </Box>
                      <Typography sx={{ fontSize: '1.05rem', fontWeight: 700, color: activePillar.id === pillar.id ? '#172554' : '#475569' }}>
                        {pillar.title}
                      </Typography>
                      {activePillar.id === pillar.id && (
                        <ArrowForwardIcon sx={{ ml: 'auto', color: '#4f46e5', fontSize: 20 }} />
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
                      <Box sx={{ width: 48, height: 48, borderRadius: 2, bgcolor: 'rgba(79, 70, 229, 0.1)', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                        <Box sx={{ p: 4, bgcolor: 'rgba(79, 70, 229, 0.05)', border: '1px solid rgba(79, 70, 229, 0.2)', borderRadius: 3 }}>
                          <Typography sx={{ fontSize: '0.75rem', color: '#4f46e5', fontWeight: 700, letterSpacing: '0.05em', mb: 1 }}>ARCHITECTURAL IMPACT</Typography>
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
            <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>Title & Escrow Overhead Simulator</Typography>
            <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
              Manual escrow companies and title insurance premiums drain massive capital from real estate markets. Calculate your exact savings by migrating to Cerulea atomic execution.
            </Typography>
          </Box>

          <Box sx={{ p: { xs: 4, md: 6 }, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
            <Grid container spacing={8} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography sx={{ color: '#172554', fontWeight: 600, mb: 1 }}>Monthly Property Closings</Typography>
                <Typography sx={{ color: '#4f46e5', fontSize: '3rem', fontWeight: 800, mb: 4 }}>{monthlyClosings.toLocaleString('en-US')}</Typography>
                
                <Slider
                  value={monthlyClosings} onChange={handleClosingChange} min={100} max={10000} step={100}
                  sx={{ color: '#4f46e5', height: 8, '& .MuiSlider-thumb': { height: 24, width: 24, backgroundColor: '#fff', border: '2px solid currentColor' } }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', color: '#64748B', fontSize: '0.85rem', mt: 1 }}>
                  <Typography>100</Typography>
                  <Typography>10,000+</Typography>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Stack spacing={3}>
                  <Box sx={{ p: 3, bgcolor: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography sx={{ fontSize: '0.75rem', color: '#dc2626', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>ESTIMATED LEGACY COST</Typography>
                      <Typography sx={{ fontSize: '0.8rem', color: '#475569' }}>Manual Title & Escrow Fees</Typography>
                    </Box>
                    <Typography sx={{ fontSize: '1.75rem', color: '#172554', fontWeight: 700 }}>${Math.round(annualLegacyCost).toLocaleString('en-US')}</Typography>
                  </Box>

                  <Box sx={{ p: 3, bgcolor: 'rgba(79, 70, 229, 0.05)', border: '1px solid rgba(79, 70, 229, 0.2)', borderRadius: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography sx={{ fontSize: '0.75rem', color: '#4f46e5', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>CERULEA EXECUTION COST</Typography>
                      <Typography sx={{ fontSize: '0.8rem', color: '#475569' }}>Smart Contract Settlement</Typography>
                    </Box>
                    <Typography sx={{ fontSize: '1.75rem', color: '#172554', fontWeight: 700 }}>${Math.round(annualCeruleaCost).toLocaleString('en-US')}</Typography>
                  </Box>

                  <Box sx={{ p: 3, bgcolor: 'rgba(5, 150, 105, 0.05)', border: '1px solid rgba(5, 150, 105, 0.3)', borderRadius: 3, position: 'relative', overflow: 'hidden' }}>
                    <Box sx={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '6px', bgcolor: '#059669' }} />
                    <Box sx={{ pl: 2 }}>
                      <Typography sx={{ fontSize: '0.85rem', color: '#059669', fontWeight: 700, mb: 1, letterSpacing: '0.05em' }}>TOTAL CAPITAL SAVED ANNUALLY</Typography>
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
                The legacy calculation utilizes real estate industry benchmarks estimating the average combined administrative cost of manual title searches, escrow holding services, and legal document processing at <strong>$1,850.00 USD per closing</strong>. Executing the exact same property transfer via Cerulea incurs an estimated network fee of <strong>$4.50 USD</strong>. This figure represents the computational gas cost required to execute the conditional escrow logic via a WebAssembly (WASM) binary on a high-throughput network. Because the network processes the title transfer and the fund release atomically in the same transaction, manual third party intermediaries are mathematically eliminated.
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>

      {/* 5. SYSTEM ARCHITECTURE DIAGRAMS (TRUE FLOWCHARTS) */}
      <Box sx={{ bgcolor: '#FFFFFF', py: 16, borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', mb: 16 }}>
        <Container maxWidth="xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <Box sx={{ textAlign: 'center', mb: 10 }}>
              <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>Network & Execution Architecture</Typography>
              <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
                Whether you are bridging municipal land registries or launching native property trading platforms, Cerulea provides the exact infrastructure flow required.
              </Typography>
            </Box>

            <Stack spacing={10}>
              
              {/* DIAGRAM A: ENTERPRISE BRIDGING */}
              <Box>
                <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1, textAlign: 'center' }}>Track A: MLS & Registry Bridging</Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', mb: 6, lineHeight: 1.6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
                  For municipal governments connecting existing land databases. Legacy HTTP requests are translated into secure Web3 transactions without system overhauls.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2, position: 'relative' }}>
                  
                  {/* Node 1 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '1px solid #CBD5E1', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <DomainOutlinedIcon sx={{ color: '#64748B', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Legacy Registry Core</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Municipal SQL Database</Typography>
                  </Box>

                  {/* Arrow 1 */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#64748B', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>HTTPS / REST</Typography>
                    <ArrowForwardIcon sx={{ color: '#64748B', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>

                  {/* Node 2 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: 'rgba(79, 70, 229, 0.05)', border: '2px solid #4f46e5', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(79, 70, 229, 0.15)' }}>
                      <ApiOutlinedIcon sx={{ color: '#4f46e5', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Cerulea API</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Translation Gateway</Typography>
                  </Box>

                  {/* Arrow 2 */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#4f46e5', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>WASM COMPILATION</Typography>
                    <ArrowForwardIcon sx={{ color: '#4f46e5', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>

                  {/* Node 3 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '2px solid #059669', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(5, 150, 105, 0.15)' }}>
                      <DnsOutlinedIcon sx={{ color: '#059669', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Cerulea Private Chains</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Sovereign Execution</Typography>
                  </Box>

                </Box>
              </Box>

              <Divider sx={{ borderColor: '#E2E8F0' }} />

              {/* DIAGRAM B: NATIVE WEB3 */}
              <Box>
                <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1, textAlign: 'center' }}>Track B: Native DApp Execution</Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', mb: 6, lineHeight: 1.6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
                  For PropTech developers building fractional ownership protocols. Bypass legacy middleware and route trade logic directly to the public execution layer.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2, position: 'relative' }}>
                  
                  {/* Node 1 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '1px solid #CBD5E1', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <TerminalOutlinedIcon sx={{ color: '#64748B', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Trading Portal</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>React & Web3 Wallets</Typography>
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
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Cerulea Public L1</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Decentralized Ledger</Typography>
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
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Cerulea Data Models</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Smart Contract Logic</Typography>
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
              Cerulea provides dedicated infrastructure tailored for the distinct operational requirements of the real estate sector.
            </Typography>
          </Box>

          <Stack spacing={4}>
            {/* Enterprise Row */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(79, 70, 229, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <DomainOutlinedIcon sx={{ fontSize: 40, color: '#4f46e5' }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>Commercial Real Estate Firms</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Institutional asset managers utilize Cerulea to tokenize massive property portfolios, enabling fractional ownership models and instantly un-siloing liquidity without exposing proprietary data to public networks.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY CRE USE CASES</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#4f46e5' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Asset Tokenization</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#4f46e5' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Fractional Trading</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#4f46e5' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Automated Dividend Payouts</Typography></Box>
                </Stack>
              </Box>
            </Box>

            {/* Government Row */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(79, 70, 229, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <AccountBalanceOutlinedIcon sx={{ fontSize: 40, color: '#4f46e5' }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>Municipalities & Land Registries</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Local governments deploy Cerulea to replace archaic paper deed systems with immutable cryptographic registries. This guarantees absolute title provenance, automates tax collection on transfers, and eradicates property fraud.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY GOV USE CASES</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#4f46e5' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Immutable Title Deeds</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#4f46e5' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Automated Tax Routing</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#4f46e5' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Transparent Zoning</Typography></Box>
                </Stack>
              </Box>
            </Box>

            {/* DApp Row */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(79, 70, 229, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <CodeOutlinedIcon sx={{ fontSize: 40, color: '#4f46e5' }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>PropTech Developers</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Forward-thinking engineers build next-generation property trading platforms and decentralized mortgage protocols on the high-throughput L1. They utilize Cerulea's visual Studio to guarantee absolute smart contract security without the vulnerabilities of writing raw Solidity.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY TECH USE CASES</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#4f46e5' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Smart Escrow DApps</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#4f46e5' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>DeFi Mortgage Lending</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#4f46e5' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Property Management Software</Typography></Box>
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
            <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>The PropTech Technology Stack</Typography>
            <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 700, mx: 'auto', textAlign: 'justify' }}>
              We do not sell isolated smart contracts. We provide a vertically integrated platform specifically mapped to the strict requirements of real estate. It is architected to provide a standardized, highly secure pathway for migrating legacy property data into programmable Web3 execution environments.
            </Typography>
          </Box>

          <Box sx={{ position: 'relative' }}>
            {/* The Left-Aligned Connecting Line */}
            <Box sx={{ position: 'absolute', left: 24, top: 20, bottom: 20, width: '2px', bgcolor: 'rgba(79, 70, 229, 0.2)', display: { xs: 'none', md: 'block' } }} />

            <Stack spacing={6}>
              {/* Layer 1 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#FAFAFA', border: '2px solid #4f46e5', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(79, 70, 229, 0.2)', mr: 4 }}>
                  <DnsOutlinedIcon sx={{ color: '#4f46e5', fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: '#4f46e5', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 01: PROPERTY NETWORKS</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#172554', mb: 1 }}>Hybrid Real Estate Ledgers</Typography>
                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Deploy an isolated Private Subnet strictly for municipal land registries, or launch directly onto the high-throughput Public L1 for global retail fractional trading platforms.
                  </Typography>
                </Box>
              </Box>

              {/* Layer 2 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#FAFAFA', border: '2px solid #4f46e5', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(79, 70, 229, 0.2)', mr: 4 }}>
                  <SecurityOutlinedIcon sx={{ color: '#4f46e5', fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: '#4f46e5', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 02: KYC & AML</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#172554', mb: 1 }}>On-Chain Identity Resolver</Typography>
                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Real estate is highly regulated. Deploy the Identity module to ensure every interacting wallet address is mathematically tied to a verified identity before property tokens can be acquired.
                  </Typography>
                </Box>
              </Box>

              {/* Layer 3 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#FAFAFA', border: '2px solid #4f46e5', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(79, 70, 229, 0.2)', mr: 4 }}>
                  <AccountBalanceWalletOutlinedIcon sx={{ color: '#4f46e5', fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: '#4f46e5', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 03: ASSET TOKENIZATION</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#172554', mb: 1 }}>Verifiable Data Models</Typography>
                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Use Cerulea Studio to visually map physical property deeds, lease agreements, and dividend payouts into deterministically secure smart contracts without writing low-level code.
                  </Typography>
                </Box>
              </Box>

              {/* Layer 4 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#FAFAFA', border: '2px solid #4f46e5', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(79, 70, 229, 0.2)', mr: 4 }}>
                  <VpnKeyOutlinedIcon sx={{ color: '#4f46e5', fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: '#4f46e5', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 04: ESCROW GOVERNANCE</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#172554', mb: 1 }}>Threshold Control Framework</Typography>
                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Protect massive transactions. Enforce strict cryptographic signatures from both buyer and seller legal counsels before the smart contract releases escrowed funds.
                  </Typography>
                </Box>
              </Box>

              {/* Layer 5 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#FAFAFA', border: '2px solid #4f46e5', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(79, 70, 229, 0.2)', mr: 4 }}>
                  <ApiOutlinedIcon sx={{ color: '#4f46e5', fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: '#4f46e5', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 05: LEGACY SOFTWARE BRIDGE</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#172554', mb: 1 }}>The Cerulea API Gateway</Typography>
                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Interact with the entire blockchain ecosystem instantly via auto-generated REST endpoints that natively link to your existing property management and MLS software.
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
                Building custom property blockchains from scratch requires specialized engineers and massive external audit budgets. Cerulea visualizes the process, cutting deployment times by 80%.
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 4, alignItems: 'stretch', pb: 12 }}>
              
              {/* The Traditional Way */}
              <Box sx={{ flex: 1, p: { xs: 4, md: 6 }, bgcolor: '#FFFFFF', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: 4, position: 'relative', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, bgcolor: '#ef4444' }} />
                <Typography sx={{ color: '#ef4444', fontWeight: 700, letterSpacing: '0.05em', mb: 1, fontSize: '0.85rem' }}>TRADITIONAL BLOCKCHAIN DEVELOPMENT</Typography>
                <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, color: '#172554', mb: 5 }}>18 to 24 Months</Typography>
                
                <Stack spacing={4}>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 1: Architecture & Solidity (Months 1 to 6)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Hiring highly specialized Web3 developers to write custom state machines, escrow logic, and property token standards entirely from scratch.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 2: Third-Party Audits (Months 7 to 10)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Paying external firms hundreds of thousands of dollars to find and patch fatal vulnerabilities in the custom escrow code before holding real capital.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 3: Middleware Construction (Months 11 to 16)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Developing fragile off-chain workers, RPC nodes, and indexers so the firm's legacy property management software can actually read the data.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 4: Network Testing (Months 17 to 24)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Enduring a grueling rollout phase to ensure the custom middleware, the smart contracts, and the municipal systems communicate without fatal errors.</Typography>
                  </Box>
                </Stack>
              </Box>

              {/* The Cerulea Way */}
              <Box sx={{ flex: 1, p: { xs: 4, md: 6 }, bgcolor: 'rgba(79, 70, 229, 0.02)', border: '1px solid rgba(79, 70, 229, 0.3)', borderRadius: 4, position: 'relative', overflow: 'hidden', boxShadow: '0 10px 40px rgba(79, 70, 229, 0.08)' }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, bgcolor: '#4f46e5' }} />
                <Typography sx={{ color: '#4f46e5', fontWeight: 700, letterSpacing: '0.05em', mb: 1, fontSize: '0.85rem' }}>CERULEA PLATFORM DEPLOYMENT</Typography>
                <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, color: '#172554', mb: 5 }}>10 to 12 Weeks</Typography>
                
                <Stack spacing={4}>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 1: Visual Schema Modeling (Weeks 1 to 3)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Use Cerulea Studio to map property assets and escrow structures visually. The engine compiles the logic into mathematically deterministic binaries instantly.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 2: Subnet Provisioning (Weeks 4 to 6)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Automate the deployment of the Sovereign Private Chain and institutional validator nodes directly from the control dashboard.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 3: API Gateway Hookup (Weeks 7 to 9)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Connect internal property systems directly to auto-generated Cerulea REST endpoints. No custom middleware or subgraphs required.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 4: Production Go-Live (Weeks 10 to 12)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Instantly bridge the finalized logic to the live network with absolute confidence that the simulated testnet behavior will perfectly match production reality.</Typography>
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