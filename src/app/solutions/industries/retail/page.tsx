'use client';

import * as React from 'react';
import { Box, Container, Typography, Grid, Stack, Button, Divider, Slider } from '@mui/material';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import QrCodeScannerOutlinedIcon from '@mui/icons-material/QrCodeScannerOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import DomainOutlinedIcon from '@mui/icons-material/DomainOutlined';
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';

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

const RETAIL_PILLARS = [
  {
    id: 'loyalty',
    icon: <CardGiftcardOutlinedIcon />,
    title: 'Interoperable Loyalty',
    legacy: 'Retail reward programs are completely siloed. Consumers suffer from point fatigue because rewards cannot be easily transferred, traded, or redeemed outside of a single brand ecosystem.',
    execution: 'Issue loyalty points as liquid digital assets on the Cerulea L1. Brands can form consortiums, allowing users to seamlessly trade or redeem points across partner networks without massive backend reconciliation.',
    impact: 'Turn static loyalty points into highly engaging, liquid digital economies that dramatically increase customer retention.'
  },
  {
    id: 'provenance',
    icon: <QrCodeScannerOutlinedIcon />,
    title: 'Digital Product Passports',
    legacy: 'Tracking the lifecycle of luxury goods, electronics, or sustainable fashion is nearly impossible. Counterfeiters exploit opaque supply chains, costing major brands billions in lost revenue.',
    execution: 'Mint a unique cryptographic passport for every physical item. Consumers scan an NFC chip or QR code to instantly verify the exact manufacturing origin, ethical sourcing, and previous ownership history.',
    impact: 'Eradicate counterfeiting and establish absolute brand trust through mathematically guaranteed product authenticity.'
  },
  {
    id: 'supply-chain',
    icon: <LocalShippingOutlinedIcon />,
    title: 'Supply Chain Traceability',
    legacy: 'Global fast-moving consumer goods (FMCG) rely on fragmented databases. When a recall occurs or a shipment is delayed, identifying the exact point of failure takes weeks of manual investigation.',
    execution: 'Log every transfer of custody on a shared Private Subnet. Manufacturers, logistics providers, and retailers update a single unified ledger, providing real-time visibility into the exact status of inventory.',
    impact: 'Achieve zero reconciliation delays, execute targeted product recalls in seconds, and eliminate supply chain blind spots.'
  },
  {
    id: 'warranty',
    icon: <VerifiedUserOutlinedIcon />,
    title: 'Automated Warranties',
    legacy: 'Claiming a product warranty requires consumers to save paper receipts and endure slow customer service reviews, while brands struggle to verify the legitimacy of the claims.',
    execution: 'Embed warranty logic directly into the Digital Product Passport. When a product requires repair, the smart contract automatically verifies eligibility and issues an immediate digital repair voucher.',
    impact: 'Drastically reduce customer support overhead and provide a frictionless, zero-wait post-purchase experience.'
  },
  {
    id: 'inventory',
    icon: <InventoryOutlinedIcon />,
    title: 'Trade Finance & Inventory',
    legacy: 'Retailers face massive capital lockups waiting for inventory to arrive and clear customs. Supplier invoicing involves heavy manual verification and delayed payment cycles.',
    execution: 'Utilize programmable escrow contracts. Capital is locked on the blockchain and automatically released to suppliers the exact moment IoT sensors or customs APIs verify successful physical delivery.',
    impact: 'Accelerate supplier cash flow and remove third-party trade finance intermediaries from the supply chain.'
  },
  {
    id: 'd2c',
    icon: <HandshakeOutlinedIcon />,
    title: 'D2C Community DAOs',
    legacy: 'Direct-to-Consumer engagement is limited to email newsletters and passive social media followers. Brands struggle to turn customers into active, financially aligned advocates.',
    execution: 'Launch brand-specific governance tokens. Allow your top-tier customers to submit cryptographic votes on future product designs, marketing campaigns, or charity initiatives directly on-chain.',
    impact: 'Transform passive shoppers into hyper-engaged brand ambassadors driven by genuine community ownership.'
  }
];

export default function RetailSolutionPage() {
  // Simulator State
  const [monthlyTx, setMonthlyTx] = React.useState<number>(1000000); 
  const handleTxChange = (event: Event, newValue: number | number[]) => setMonthlyTx(newValue as number);
  
  // Math Logic (Loyalty network reconciliation & gateway fees)
  const legacyCostPerTx = 0.85; 
  const ceruleaCostPerTx = 0.003; 
  const annualLegacyCost = monthlyTx * legacyCostPerTx * 12;
  const annualCeruleaCost = monthlyTx * ceruleaCostPerTx * 12;
  const annualSavings = annualLegacyCost - annualCeruleaCost;

  const [activePillar, setActivePillar] = React.useState(RETAIL_PILLARS[0]);

  return (
    <Box sx={{ bgcolor: '#FAFAFA', color: '#172554', overflowX: 'hidden', pb: 0 }}>
      
      {/* 1. THE HERO */}
      <Box sx={{ pt: { xs: 16, md: 24 }, pb: { xs: 12, md: 16 }, position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '500px', background: 'radial-gradient(ellipse at top, rgba(124, 58, 237, 0.1), transparent 70%)', pointerEvents: 'none' }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 2, py: 1, borderRadius: 2, bgcolor: 'rgba(124, 58, 237, 0.1)', border: '1px solid rgba(124, 58, 237, 0.2)', mb: 4 }}>
              <StorefrontOutlinedIcon sx={{ color: '#7c3aed', fontSize: 20 }} />
              <Typography sx={{ color: '#7c3aed', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                Retail & Consumer Goods
              </Typography>
            </Box>
            
            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '3rem', md: '5rem' }, lineHeight: 1.05, letterSpacing: '-0.03em', mb: 4, mx: 'auto', maxWidth: 1000, color: '#172554' }}>
              Tokenize loyalty.<br />
              <span style={{ color: '#64748B' }}>Verify supply chains.</span>
            </Typography>
            
            <Typography sx={{ color: '#475569', fontSize: { xs: '1.1rem', md: '1.3rem' }, maxWidth: 850, lineHeight: 1.6, mb: 6, mx: 'auto', fontWeight: 400 }}>
              Cerulea provides the execution engine to trace global inventory, issue digital product passports, and build interoperable brand loyalty programs without writing complex smart contract code.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
              <Button 
                href="/company/contact"
                variant="contained" 
                endIcon={<ArrowForwardIcon />} 
                sx={{ 
                  bgcolor: '#7c3aed', color: '#FFFFFF', px: 4, py: 2, fontSize: '1rem', fontWeight: 700, borderRadius: 2,
                  boxShadow: '0 4px 14px rgba(124, 58, 237, 0.3)',
                  '&:hover': { bgcolor: '#6d28d9', transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(124, 58, 237, 0.4)' },
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
              <Typography sx={{ color: '#7c3aed', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>01.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Interoperable Rewards</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Break down brand silos. Consumers can earn points with an airline and spend them seamlessly at a partner retail chain, managed automatically by a unified smart contract ledger.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#7c3aed', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>02.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Counterfeit Eradication</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Cryptographic signatures permanently attach a manufacturer's identity to a physical item. This provides an unforgeable layer of defense against the global counterfeit market.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#7c3aed', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>03.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Real-Time Auditing</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Consortium networks ensure that manufacturers, shipping firms, and storefronts read from the exact same inventory database, eliminating discrepancies and manual ledger reconciliation.</Typography>
            </Box>

            {/* ROW 2 */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#7c3aed', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>04.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Programmable Escrow</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>B2B payments are held securely and released instantly to suppliers only when external oracles confirm that physical delivery thresholds have been successfully met.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#7c3aed', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>05.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Secondary Market Capture</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Digital product passports can be programmed to route a percentage of every physical resale back to the original brand, turning secondary markets into an entirely new revenue stream.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#7c3aed', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>06.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Consumer Data Sovereignty</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Empower users to truly own their purchase history. Brands can request zero-party data directly from consumers via secure, cryptographically verifiable opt-in frameworks.</Typography>
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
                A single unified protocol capable of supporting complex retail operations. Select a specific operational segment below.
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
                  {RETAIL_PILLARS.map((pillar) => (
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
                        borderColor: activePillar.id === pillar.id ? 'rgba(124, 58, 237, 0.4)' : '#E2E8F0',
                        bgcolor: activePillar.id === pillar.id ? 'rgba(124, 58, 237, 0.05)' : '#FFFFFF',
                        transition: 'all 0.2s ease',
                        boxShadow: activePillar.id === pillar.id ? '0 4px 12px rgba(124, 58, 237, 0.05)' : 'none',
                        '&:hover': { bgcolor: activePillar.id === pillar.id ? 'rgba(124, 58, 237, 0.08)' : '#F8FAFC' }
                      }}
                    >
                      <Box sx={{ color: activePillar.id === pillar.id ? '#7c3aed' : '#64748B', display: 'flex' }}>
                        {pillar.icon}
                      </Box>
                      <Typography sx={{ fontSize: '1.05rem', fontWeight: 700, color: activePillar.id === pillar.id ? '#172554' : '#475569' }}>
                        {pillar.title}
                      </Typography>
                      {activePillar.id === pillar.id && (
                        <ArrowForwardIcon sx={{ ml: 'auto', color: '#7c3aed', fontSize: 20 }} />
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
                      <Box sx={{ width: 48, height: 48, borderRadius: 2, bgcolor: 'rgba(124, 58, 237, 0.1)', color: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                        <Box sx={{ p: 4, bgcolor: 'rgba(124, 58, 237, 0.05)', border: '1px solid rgba(124, 58, 237, 0.2)', borderRadius: 3 }}>
                          <Typography sx={{ fontSize: '0.75rem', color: '#7c3aed', fontWeight: 700, letterSpacing: '0.05em', mb: 1 }}>ARCHITECTURAL IMPACT</Typography>
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
            <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>Loyalty Network & Reconciliation Simulator</Typography>
            <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
              Cross-brand loyalty redemptions require heavy manual database reconciliation and API gateway fees. Calculate your exact capital savings by migrating to Cerulea atomic settlement.
            </Typography>
          </Box>

          <Box sx={{ p: { xs: 4, md: 6 }, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
            <Grid container spacing={8} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography sx={{ color: '#172554', fontWeight: 600, mb: 1 }}>Monthly Point Redemptions / Reconciliations</Typography>
                <Typography sx={{ color: '#7c3aed', fontSize: '3rem', fontWeight: 800, mb: 4 }}>{monthlyTx.toLocaleString('en-US')} Tx</Typography>
                
                <Slider
                  value={monthlyTx} onChange={handleTxChange} min={100000} max={10000000} step={100000}
                  sx={{ color: '#7c3aed', height: 8, '& .MuiSlider-thumb': { height: 24, width: 24, backgroundColor: '#fff', border: '2px solid currentColor' } }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', color: '#64748B', fontSize: '0.85rem', mt: 1 }}>
                  <Typography>100,000</Typography>
                  <Typography>10,000,000+</Typography>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Stack spacing={3}>
                  <Box sx={{ p: 3, bgcolor: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography sx={{ fontSize: '0.75rem', color: '#dc2626', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>ESTIMATED LEGACY COST</Typography>
                      <Typography sx={{ fontSize: '0.8rem', color: '#475569' }}>Clearinghouse & B2B Recon</Typography>
                    </Box>
                    <Typography sx={{ fontSize: '1.75rem', color: '#172554', fontWeight: 700 }}>${Math.round(annualLegacyCost).toLocaleString('en-US')}</Typography>
                  </Box>

                  <Box sx={{ p: 3, bgcolor: 'rgba(124, 58, 237, 0.05)', border: '1px solid rgba(124, 58, 237, 0.2)', borderRadius: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography sx={{ fontSize: '0.75rem', color: '#7c3aed', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>CERULEA EXECUTION COST</Typography>
                      <Typography sx={{ fontSize: '0.8rem', color: '#475569' }}>Smart Contract Execution</Typography>
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
                The legacy calculation utilizes retail and banking benchmarks estimating the average combined operational cost of routing, verifying, and clearing a B2B cross-brand loyalty transaction or inventory swap at <strong>$0.85 USD per event</strong>. This accounts for third party data brokers and internal accounting teams matching siloed databases. 
                Executing the exact same trigger via Cerulea incurs an estimated network fee of <strong>$0.003 USD</strong>. This figure represents the raw computational gas cost required to execute the token transfer via a WebAssembly (WASM) binary on a high throughput consensus engine. Because the network updates the balance for all parties simultaneously, manual database reconciliation is mathematically eliminated.
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
                Whether you are bridging legacy ERP databases or tracking native NFC product chips, Cerulea provides the exact infrastructure flow required.
              </Typography>
            </Box>

            <Stack spacing={10}>
              
              {/* DIAGRAM A: ENTERPRISE BRIDGING */}
              <Box>
                <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1, textAlign: 'center' }}>Track A: Enterprise ERP & POS Bridging</Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', mb: 6, lineHeight: 1.6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
                  For major retailers connecting existing point-of-sale systems. Legacy HTTP requests are translated into secure Web3 transactions without system overhauls.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2, position: 'relative' }}>
                  
                  {/* Node 1 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '1px solid #CBD5E1', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <DomainOutlinedIcon sx={{ color: '#64748B', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Legacy Retail Core</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>SAP / Salesforce POS</Typography>
                  </Box>

                  {/* Arrow 1 */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#64748B', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>HTTPS / REST</Typography>
                    <ArrowForwardIcon sx={{ color: '#64748B', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>

                  {/* Node 2 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: 'rgba(124, 58, 237, 0.05)', border: '2px solid #7c3aed', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(124, 58, 237, 0.15)' }}>
                      <ApiOutlinedIcon sx={{ color: '#7c3aed', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Cerulea API</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Translation Gateway</Typography>
                  </Box>

                  {/* Arrow 2 */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#7c3aed', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>WASM COMPILATION</Typography>
                    <ArrowForwardIcon sx={{ color: '#7c3aed', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
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
                <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1, textAlign: 'center' }}>Track B: Native Consumer DApps</Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', mb: 6, lineHeight: 1.6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
                  For product authentication and D2C engagement. Route mobile app interactions directly to autonomous public smart contracts.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2, position: 'relative' }}>
                  
                  {/* Node 1 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '1px solid #CBD5E1', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <TerminalOutlinedIcon sx={{ color: '#64748B', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Consumer Hardware</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>NFC Scans & Mobile Wallets</Typography>
                  </Box>

                  {/* Arrow 1 */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#64748B', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>JSON-RPC / REST</Typography>
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
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Tokenized Asset Logic</Typography>
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
              Cerulea provides dedicated infrastructure tailored for the distinct operational requirements of the consumer goods sector.
            </Typography>
          </Box>

          <Stack spacing={4}>
            {/* Enterprise Row */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(124, 58, 237, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <DomainOutlinedIcon sx={{ fontSize: 40, color: '#7c3aed' }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>Global FMCG & Luxury Brands</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Enterprise retailers utilize Cerulea to un-silo internal inventory databases, track global shipments in real time, and securely authenticate high value luxury goods to completely eradicate counterfeit markets.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY ENTERPRISE USE CASES</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#7c3aed' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Product Passports</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#7c3aed' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Supply Chain Auditing</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#7c3aed' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Supplier Escrow</Typography></Box>
                </Stack>
              </Box>
            </Box>

            {/* Consortium Row */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(124, 58, 237, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <HandshakeOutlinedIcon sx={{ fontSize: 40, color: '#7c3aed' }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>Loyalty Consortiums</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Airlines, hotel chains, and retail networks deploy Cerulea to establish a perfectly synchronized cryptographic ledger. This allows points to be seamlessly traded or redeemed across partner networks without expensive reconciliation.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY PARTNERSHIP USE CASES</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#7c3aed' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Interoperable Rewards</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#7c3aed' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Cross-Brand Clearing</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#7c3aed' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Customer Data Sharing</Typography></Box>
                </Stack>
              </Box>
            </Box>

            {/* DApp Row */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(124, 58, 237, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <CodeOutlinedIcon sx={{ fontSize: 40, color: '#7c3aed' }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>D2C Web3 Developers</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Forward-thinking agencies build next generation consumer engagement platforms on the high throughput L1. They utilize Cerulea's visual Studio to launch phygital collections and fan DAOs with absolute smart contract security.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY CREATOR USE CASES</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#7c3aed' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Phygital Merchandise</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#7c3aed' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Brand Governance DAOs</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#7c3aed' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Secondary Resale Markets</Typography></Box>
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
            <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>The Retail Technology Stack</Typography>
            <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 700, mx: 'auto', textAlign: 'justify' }}>
              We do not sell isolated smart contracts. We provide a vertically integrated platform specifically mapped to the strict requirements of massive consumer networks. It is architected to provide a highly secure pathway for migrating legacy inventory into programmable environments.
            </Typography>
          </Box>

          <Box sx={{ position: 'relative' }}>
            {/* The Left-Aligned Connecting Line */}
            <Box sx={{ position: 'absolute', left: 24, top: 20, bottom: 20, width: '2px', bgcolor: 'rgba(124, 58, 237, 0.2)', display: { xs: 'none', md: 'block' } }} />

            <Stack spacing={6}>
              {/* Layer 1 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#FAFAFA', border: '2px solid #7c3aed', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(124, 58, 237, 0.2)', mr: 4 }}>
                  <DnsOutlinedIcon sx={{ color: '#7c3aed', fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: '#7c3aed', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 01: CONSUMER LEDGERS</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#172554', mb: 1 }}>Hybrid Retail Networks</Typography>
                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Deploy an isolated Private Subnet strictly for internal supply chain auditing, or launch directly onto the high throughput Public L1 for global loyalty points and consumer collectibles.
                  </Typography>
                </Box>
              </Box>

              {/* Layer 2 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#FAFAFA', border: '2px solid #7c3aed', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(124, 58, 237, 0.2)', mr: 4 }}>
                  <QrCodeScannerOutlinedIcon sx={{ color: '#7c3aed', fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: '#7c3aed', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 02: PRODUCT IDENTITY</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#172554', mb: 1 }}>Digital Item Resolvers</Typography>
                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Connect physical goods to the network via NFC or RFID integration. Ensure every scanned item mathematically resolves to a verified manufacturing credential before reaching the consumer.
                  </Typography>
                </Box>
              </Box>

              {/* Layer 3 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#FAFAFA', border: '2px solid #7c3aed', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(124, 58, 237, 0.2)', mr: 4 }}>
                  <CardGiftcardOutlinedIcon sx={{ color: '#7c3aed', fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: '#7c3aed', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 03: BRAND TOKENIZATION</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#172554', mb: 1 }}>Verifiable Data Models</Typography>
                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Use Cerulea Studio to visually map loyalty rewards, product passports, and automated warranty payouts into deterministically secure smart contracts without writing low level code.
                  </Typography>
                </Box>
              </Box>

              {/* Layer 4 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#FAFAFA', border: '2px solid #7c3aed', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(124, 58, 237, 0.2)', mr: 4 }}>
                  <SecurityOutlinedIcon sx={{ color: '#7c3aed', fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: '#7c3aed', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 04: CONSORTIUM GOVERNANCE</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#172554', mb: 1 }}>Threshold Control Framework</Typography>
                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Protect partner networks. Enforce strict cryptographic signatures from participating brands before any structural changes are permitted to the shared loyalty ecosystem.
                  </Typography>
                </Box>
              </Box>

              {/* Layer 5 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#FAFAFA', border: '2px solid #7c3aed', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(124, 58, 237, 0.2)', mr: 4 }}>
                  <ApiOutlinedIcon sx={{ color: '#7c3aed', fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: '#7c3aed', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 05: LEGACY SOFTWARE BRIDGE</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#172554', mb: 1 }}>The ERP & POS API Gateway</Typography>
                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Interact with the entire blockchain ecosystem instantly via auto-generated REST endpoints that natively integrate into existing Shopify, SAP, and retail point of sale systems.
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
                Building custom retail supply chains from scratch requires specialized engineers and massive external audit budgets. Cerulea visualizes the process, cutting deployment times by 80%.
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
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 1: Brand Logic & Solidity (Months 1 to 4)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Hiring specialized Web3 developers to write custom state machines, loyalty distribution logic, and digital asset standards entirely from scratch.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 2: Third-Party Audits (Months 5 to 7)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Paying external firms hundreds of thousands of dollars to find and patch fatal vulnerabilities in the reward code before handling live customer points.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 3: ERP Middleware (Months 8 to 11)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Developing fragile off-chain workers and indexers so the brand's legacy inventory and POS software can actually read the blockchain.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 4: Network Testing (Months 12 to 18)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Enduring a grueling rollout phase to ensure the custom middleware, the smart contracts, and the global store networks communicate without fatal errors.</Typography>
                  </Box>
                </Stack>
              </Box>

              {/* The Cerulea Way */}
              <Box sx={{ flex: 1, p: { xs: 4, md: 6 }, bgcolor: 'rgba(124, 58, 237, 0.02)', border: '1px solid rgba(124, 58, 237, 0.3)', borderRadius: 4, position: 'relative', overflow: 'hidden', boxShadow: '0 10px 40px rgba(124, 58, 237, 0.08)' }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, bgcolor: '#7c3aed' }} />
                <Typography sx={{ color: '#7c3aed', fontWeight: 700, letterSpacing: '0.05em', mb: 1, fontSize: '0.85rem' }}>CERULEA PLATFORM DEPLOYMENT</Typography>
                <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, color: '#172554', mb: 5 }}>8 to 10 Weeks</Typography>
                
                <Stack spacing={4}>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 1: Visual Loyalty Modeling (Weeks 1 to 2)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Use Cerulea Studio to map brand rewards and supply chain structures visually. The engine compiles the logic into mathematically deterministic binaries instantly.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 2: Subnet Provisioning (Weeks 3 to 4)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Automate the deployment of the Sovereign Private Chain and consortium validator nodes directly from the control dashboard.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 3: API Gateway Hookup (Weeks 5 to 7)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Connect internal POS software directly to auto-generated Cerulea REST endpoints. No custom middleware or subgraphs required.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 4: Production Go-Live (Weeks 8 to 10)</Typography>
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