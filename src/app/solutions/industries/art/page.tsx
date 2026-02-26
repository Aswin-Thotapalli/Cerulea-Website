'use client';

import * as React from 'react';
import { Box, Container, Typography, Grid, Stack, Button, Divider, Slider } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import DomainOutlinedIcon from '@mui/icons-material/DomainOutlined';
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { Variants } from 'framer-motion';

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

const CREATOR_PILLARS = [
  {
    id: 'royalties',
    icon: <AccountBalanceWalletOutlinedIcon />,
    title: 'Automated Royalty Splits',
    legacy: 'Independent artists and musicians suffer from opaque publishing platforms that take months to calculate collaborative splits, often withholding massive percentages of revenue in administrative fees.',
    execution: 'Encode exact royalty splits directly into the digital asset logic using Cerulea Studio. When an artwork or track is sold, the smart contract instantaneously routes exact micro-payments to every contributor.',
    impact: 'Return 100 percent of allocated revenue directly to creators and reduce payout timelines from 90 days to 900 milliseconds.'
  },
  {
    id: 'provenance',
    icon: <VerifiedUserOutlinedIcon />,
    title: 'Content Provenance & Anti-AI',
    legacy: 'The explosion of generative AI has made it nearly impossible for digital artists to protect their unique styles from unauthorized scraping, while buyers struggle to verify original human-made artwork.',
    execution: 'Anchor cryptographic hashes of original files directly to the Cerulea L1 at the exact moment of creation. This establishes a globally recognized, mathematically unforgeable timestamp of original authorship.',
    impact: 'Protect creator copyright against AI scraping networks and provide collectors with absolute proof of human authorship.'
  },
  {
    id: 'fractional',
    icon: <StorefrontOutlinedIcon />,
    title: 'Fractionalized Master Rights',
    legacy: 'Historically, only wealthy labels or elite collectors could afford to invest in master recording rights or high-end fine art, completely shutting out retail fans from the financial upside of their favorite creators.',
    execution: 'Tokenize master rights or physical art pieces into thousands of fractional digital shares. Fans can invest micro-amounts to gain true verifiable ownership and a programmatic share of future distribution revenue.',
    impact: 'Transform passive fans into financially aligned stakeholders and unlock massive new funding models for independent artists.'
  },
  {
    id: 'social-tokens',
    icon: <PeopleAltOutlinedIcon />,
    title: 'Social Tokens & Fan DAOs',
    legacy: 'Platform algorithms dictate a creator’s reach, and monetization relies entirely on unpredictable ad revenue or unstable brand sponsorships, leaving creators highly vulnerable to platform policy changes.',
    execution: 'Launch a sovereign creator economy. Issue custom social tokens that grant fans voting rights in a Decentralized Autonomous Organization (DAO), exclusive Discord access, and direct influence over future creative projects.',
    impact: 'Build hyper-engaged, highly monetized independent communities that are completely immune to centralized platform algorithms.'
  },
  {
    id: 'ticketing',
    icon: <ColorLensOutlinedIcon />,
    title: 'VIP Access & Ticketing',
    legacy: 'Live exhibitions, private studio tours, and digital drops are plagued by bot networks that scalp access passes, leaving genuine fans locked out and artists with zero secondary market revenue.',
    execution: 'Issue exclusive access passes as non-fungible digital assets. Creators embed strict resale price ceilings and automated royalty kickbacks directly into the ticket code to ensure fair access.',
    impact: 'Eradicate scalper bots and automatically capture a percentage of all secondary market resales directly for the artist.'
  },
  {
    id: 'metaverse',
    icon: <CodeOutlinedIcon />,
    title: 'Cross-Platform Avatars & IP',
    legacy: 'Digital art, avatars, and 3D models are permanently locked within a single centralized platform or metaverse. If the platform shuts down, the digital asset and its value are instantly destroyed.',
    execution: 'Utilize standardized, verifiable data models. An asset minted on Cerulea can be cryptographically verified by any authorized engine, allowing digital art to seamlessly port between independent virtual worlds.',
    impact: 'Pioneer the true open metaverse by allowing creator IP to travel seamlessly across independent digital platforms.'
  }
];

export default function CreatorEconomySolutionPage() {
  // Simulator State
  const [monthlySales, setMonthlySales] = React.useState<number>(50000); 
  const handleSalesChange = (event: Event, newValue: number | number[]) => setMonthlySales(newValue as number);
  
  // Math Logic (Platform commissions & gateway fees)
  const legacyCostPerSale = 1.50; 
  const ceruleaCostPerSale = 0.02; 
  const annualLegacyCost = monthlySales * legacyCostPerSale * 12;
  const annualCeruleaCost = monthlySales * ceruleaCostPerSale * 12;
  const annualSavings = annualLegacyCost - annualCeruleaCost;

  const [activePillar, setActivePillar] = React.useState(CREATOR_PILLARS[0]);

  return (
    <Box sx={{ bgcolor: '#FAFAFA', color: '#172554', overflowX: 'hidden', pb: 0 }}>
      
      {/* 1. THE HERO */}
      <Box sx={{ pt: { xs: 16, md: 24 }, pb: { xs: 12, md: 16 }, position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '500px', background: 'radial-gradient(ellipse at top, rgba(192, 38, 211, 0.1), transparent 70%)', pointerEvents: 'none' }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 2, py: 1, borderRadius: 2, bgcolor: 'rgba(192, 38, 211, 0.1)', border: '1px solid rgba(192, 38, 211, 0.2)', mb: 4 }}>
              <BrushOutlinedIcon sx={{ color: '#c026d3', fontSize: 20 }} />
              <Typography sx={{ color: '#c026d3', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                Art & Creator Economy
              </Typography>
            </Box>
            
            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '3rem', md: '5rem' }, lineHeight: 1.05, letterSpacing: '-0.03em', mb: 4, mx: 'auto', maxWidth: 1000, color: '#172554' }}>
              Tokenize creativity.<br />
              <span style={{ color: '#64748B' }}>Automate royalties.</span>
            </Typography>
            
            <Typography sx={{ color: '#475569', fontSize: { xs: '1.1rem', md: '1.3rem' }, maxWidth: 850, lineHeight: 1.6, mb: 6, mx: 'auto', fontWeight: 400 }}>
              Cerulea provides the execution engine to fractionalize intellectual property, launch independent creator DAOs, and route global royalties instantly without writing complex smart contract code.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
              <Button 
                href="/company/contact"
                variant="contained" 
                endIcon={<ArrowForwardIcon />} 
                sx={{ 
                  bgcolor: '#c026d3', color: '#FFFFFF', px: 4, py: 2, fontSize: '1rem', fontWeight: 700, borderRadius: 2,
                  boxShadow: '0 4px 14px rgba(192, 38, 211, 0.3)',
                  '&:hover': { bgcolor: '#a21caf', transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(192, 38, 211, 0.4)' },
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
              <Typography sx={{ color: '#c026d3', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>01.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>True Digital Ownership</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Digital art and music drops can be mathematically capped. Once the maximum supply of a limited edition is reached, it is cryptographically impossible to duplicate or forge.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#c026d3', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>02.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Platform Disintermediation</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Connect artists directly with their audience. By removing massive central streaming distributors and gallery administrators, creators capture significantly higher margins on their own IP.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#c026d3', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>03.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Instant Micro-Monetization</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>High throughput execution completely bypasses legacy payment gateways. Creators can receive fractions of a cent continuously as their content is consumed or licensed.</Typography>
            </Box>

            {/* ROW 2 */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#c026d3', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>04.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Secondary Market Royalties</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Publishers can hardcode royalty splits into digital items. Every time a piece of art is resold on an open marketplace, the original creator receives an instant, automated revenue cut.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#c026d3', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>05.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Immutable Provenance</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Digital signatures permanently attach the original creator's identity to a piece of media. This provides absolute mathematical defense against unauthorized AI scraping and deepfakes.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#c026d3', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>06.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Fan & Community Governance</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Blockchains enable complex ownership models. Thousands of global fans can securely pool capital to fund an indie film or album, gaining cryptographic governance rights in return.</Typography>
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
                A single unified protocol capable of supporting diverse creative ecosystems. Select a specific operational segment below.
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
                  {CREATOR_PILLARS.map((pillar) => (
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
                        borderColor: activePillar.id === pillar.id ? 'rgba(192, 38, 211, 0.4)' : '#E2E8F0',
                        bgcolor: activePillar.id === pillar.id ? 'rgba(192, 38, 211, 0.05)' : '#FFFFFF',
                        transition: 'all 0.2s ease',
                        boxShadow: activePillar.id === pillar.id ? '0 4px 12px rgba(192, 38, 211, 0.05)' : 'none',
                        '&:hover': { bgcolor: activePillar.id === pillar.id ? 'rgba(192, 38, 211, 0.08)' : '#F8FAFC' }
                      }}
                    >
                      <Box sx={{ color: activePillar.id === pillar.id ? '#c026d3' : '#64748B', display: 'flex' }}>
                        {pillar.icon}
                      </Box>
                      <Typography sx={{ fontSize: '1.05rem', fontWeight: 700, color: activePillar.id === pillar.id ? '#172554' : '#475569' }}>
                        {pillar.title}
                      </Typography>
                      {activePillar.id === pillar.id && (
                        <ArrowForwardIcon sx={{ ml: 'auto', color: '#c026d3', fontSize: 20 }} />
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
                      <Box sx={{ width: 48, height: 48, borderRadius: 2, bgcolor: 'rgba(192, 38, 211, 0.1)', color: '#c026d3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                        <Box sx={{ p: 4, bgcolor: 'rgba(192, 38, 211, 0.05)', border: '1px solid rgba(192, 38, 211, 0.2)', borderRadius: 3 }}>
                          <Typography sx={{ fontSize: '0.75rem', color: '#c026d3', fontWeight: 700, letterSpacing: '0.05em', mb: 1 }}>ARCHITECTURAL IMPACT</Typography>
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
            <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>Creator Royalty & Distribution Simulator</Typography>
            <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
              Platform commissions, gallery cuts, and payment gateway percentages drain massive revenue from independent creators. Calculate your exact capital savings by migrating to Cerulea direct distribution.
            </Typography>
          </Box>

          <Box sx={{ p: { xs: 4, md: 6 }, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
            <Grid container spacing={8} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography sx={{ color: '#172554', fontWeight: 600, mb: 1 }}>Monthly Digital Sales & Streams</Typography>
                <Typography sx={{ color: '#c026d3', fontSize: '3rem', fontWeight: 800, mb: 4 }}>{monthlySales.toLocaleString('en-US')} Tx</Typography>
                
                <Slider
                  value={monthlySales} onChange={handleSalesChange} min={1000} max={250000} step={1000}
                  sx={{ color: '#c026d3', height: 8, '& .MuiSlider-thumb': { height: 24, width: 24, backgroundColor: '#fff', border: '2px solid currentColor' } }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', color: '#64748B', fontSize: '0.85rem', mt: 1 }}>
                  <Typography>1,000</Typography>
                  <Typography>250,000+</Typography>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Stack spacing={3}>
                  <Box sx={{ p: 3, bgcolor: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography sx={{ fontSize: '0.75rem', color: '#dc2626', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>ESTIMATED LEGACY COST</Typography>
                      <Typography sx={{ fontSize: '0.8rem', color: '#475569' }}>Platform Commissions & Gateway Fees</Typography>
                    </Box>
                    <Typography sx={{ fontSize: '1.75rem', color: '#172554', fontWeight: 700 }}>${Math.round(annualLegacyCost).toLocaleString('en-US')}</Typography>
                  </Box>

                  <Box sx={{ p: 3, bgcolor: 'rgba(192, 38, 211, 0.05)', border: '1px solid rgba(192, 38, 211, 0.2)', borderRadius: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography sx={{ fontSize: '0.75rem', color: '#c026d3', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>CERULEA EXECUTION COST</Typography>
                      <Typography sx={{ fontSize: '0.8rem', color: '#475569' }}>Smart Contract Execution</Typography>
                    </Box>
                    <Typography sx={{ fontSize: '1.75rem', color: '#172554', fontWeight: 700 }}>${Math.round(annualCeruleaCost).toLocaleString('en-US')}</Typography>
                  </Box>

                  <Box sx={{ p: 3, bgcolor: 'rgba(5, 150, 105, 0.05)', border: '1px solid rgba(5, 150, 105, 0.3)', borderRadius: 3, position: 'relative', overflow: 'hidden' }}>
                    <Box sx={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '6px', bgcolor: '#059669' }} />
                    <Box sx={{ pl: 2 }}>
                      <Typography sx={{ fontSize: '0.85rem', color: '#059669', fontWeight: 700, mb: 1, letterSpacing: '0.05em' }}>TOTAL REVENUE RECAPTURED</Typography>
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
                The legacy calculation utilizes creator economy benchmarks estimating the average combined operational cost of traditional platform commissions, payment gateway processing, and manual royalty splitting at <strong>$1.50 USD per digital transaction</strong>. Executing the exact same asset sale via Cerulea incurs an estimated network fee of <strong>$0.02 USD</strong>. This figure represents the computational gas cost required to automatically verify a buyer's digital signature and deterministically route royalty splits on a high-throughput consensus engine, completely bypassing monopolistic marketplace fees.
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
                Whether you are bridging legacy gallery databases or deploying native Web3 creator portals, Cerulea provides the exact infrastructure flow required.
              </Typography>
            </Box>

            <Stack spacing={10}>
              
              {/* DIAGRAM A: ENTERPRISE BRIDGING */}
              <Box>
                <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1, textAlign: 'center' }}>Track A: Enterprise Gallery Bridging</Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', mb: 6, lineHeight: 1.6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
                  For major galleries and agencies connecting existing CMS software. Legacy HTTP requests are translated into secure Web3 transactions without overhauling core systems.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2, position: 'relative' }}>
                  
                  {/* Node 1 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '1px solid #CBD5E1', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <DomainOutlinedIcon sx={{ color: '#64748B', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Legacy Agency Core</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Internal CMS / ERP</Typography>
                  </Box>

                  {/* Arrow 1 */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#64748B', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>HTTPS / REST</Typography>
                    <ArrowForwardIcon sx={{ color: '#64748B', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>

                  {/* Node 2 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: 'rgba(192, 38, 211, 0.05)', border: '2px solid #c026d3', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(192, 38, 211, 0.15)' }}>
                      <ApiOutlinedIcon sx={{ color: '#c026d3', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Cerulea API</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Translation Gateway</Typography>
                  </Box>

                  {/* Arrow 2 */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#c026d3', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>WASM COMPILATION</Typography>
                    <ArrowForwardIcon sx={{ color: '#c026d3', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>

                  {/* Node 3 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '2px solid #059669', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(5, 150, 105, 0.15)' }}>
                      <DnsOutlinedIcon sx={{ color: '#059669', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Cerulea Private Chains</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Sovereign Publishing State</Typography>
                  </Box>

                </Box>
              </Box>

              <Divider sx={{ borderColor: '#E2E8F0' }} />

              {/* DIAGRAM B: NATIVE WEB3 */}
              <Box>
                <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1, textAlign: 'center' }}>Track B: Native Creator DApp Execution</Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', mb: 6, lineHeight: 1.6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
                  For independent artists and decentralized marketplaces. Bypass legacy middleware and route minting logic directly to the public execution layer.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2, position: 'relative' }}>
                  
                  {/* Node 1 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '1px solid #CBD5E1', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <TerminalOutlinedIcon sx={{ color: '#64748B', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Creator Portal</Typography>
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
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Decentralized Oracles</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Data Validation Nodes</Typography>
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
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Asset Minting Logic</Typography>
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
              Cerulea provides dedicated infrastructure tailored for the distinct operational requirements of the creative sector.
            </Typography>
          </Box>

          <Stack spacing={4}>
            {/* Enterprise Row */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(192, 38, 211, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <DomainOutlinedIcon sx={{ fontSize: 40, color: '#c026d3' }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>Agencies & Fine Art Galleries</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  High-end art galleries and creative agencies utilize Cerulea to establish unalterable provenance for physical art, automate complex royalty splits between artists and curators, and tokenize massive intellectual property portfolios.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY ENTERPRISE USE CASES</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#c026d3' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Physical Art Provenance</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#c026d3' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Automated Curator Splits</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#c026d3' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>IP Syndication</Typography></Box>
                </Stack>
              </Box>
            </Box>

            {/* Platform Row */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(192, 38, 211, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <StorefrontOutlinedIcon sx={{ fontSize: 40, color: '#c026d3' }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>Digital Platforms & Marketplaces</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Streaming platforms and digital marketplaces deploy Cerulea to establish perfectly synchronized royalty ledgers. This ensures creators are paid instantly for streams or sales without waiting on massive clearinghouses.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY PLATFORM USE CASES</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#c026d3' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Instant Stream Payouts</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#c026d3' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Secondary Market Royalties</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#c026d3' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Fractional Trading Hubs</Typography></Box>
                </Stack>
              </Box>
            </Box>

            {/* DApp Row */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(192, 38, 211, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <CodeOutlinedIcon sx={{ fontSize: 40, color: '#c026d3' }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>Independent Creators & Collectives</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Forward-thinking creators build sovereign communities and Decentralized Autonomous Organizations (DAOs) on the high-throughput L1. They utilize Cerulea's visual Studio to guarantee absolute smart contract security for their social tokens.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY CREATOR USE CASES</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#c026d3' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Fan Governance DAOs</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#c026d3' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>VIP Social Tokens</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#c026d3' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Decentralized Crowdfunding</Typography></Box>
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
            <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>The Creator Technology Stack</Typography>
            <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 700, mx: 'auto', textAlign: 'justify' }}>
              We do not sell isolated smart contracts. We provide a vertically integrated platform specifically mapped to the strict requirements of digital artists and creative agencies. It is architected to provide a highly secure pathway for migrating legacy IP into programmable execution environments.
            </Typography>
          </Box>

          <Box sx={{ position: 'relative' }}>
            {/* The Left-Aligned Connecting Line */}
            <Box sx={{ position: 'absolute', left: 24, top: 20, bottom: 20, width: '2px', bgcolor: 'rgba(192, 38, 211, 0.2)', display: { xs: 'none', md: 'block' } }} />

            <Stack spacing={6}>
              {/* Layer 1 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#FAFAFA', border: '2px solid #c026d3', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(192, 38, 211, 0.2)', mr: 4 }}>
                  <DnsOutlinedIcon sx={{ color: '#c026d3', fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: '#c026d3', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 01: CREATOR LEDGERS</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#172554', mb: 1 }}>Hybrid Media Networks</Typography>
                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Deploy an isolated Private Subnet strictly for internal agency compliance, or launch directly onto the high-throughput Public L1 to facilitate global digital asset trading and fan interactions.
                  </Typography>
                </Box>
              </Box>

              {/* Layer 2 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#FAFAFA', border: '2px solid #c026d3', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(192, 38, 211, 0.2)', mr: 4 }}>
                  <VpnKeyOutlinedIcon sx={{ color: '#c026d3', fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: '#c026d3', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 02: FAN KYC</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#172554', mb: 1 }}>On-Chain Identity Resolver</Typography>
                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Deploy the Identity module to ensure every interacting buyer wallet is mathematically tied to a verified fan credential, instantly blocking sybil attacks and automated scalper bots during NFT drops.
                  </Typography>
                </Box>
              </Box>

              {/* Layer 3 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#FAFAFA', border: '2px solid #c026d3', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(192, 38, 211, 0.2)', mr: 4 }}>
                  <BrushOutlinedIcon sx={{ color: '#c026d3', fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: '#c026d3', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 03: ASSET TOKENIZATION</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#172554', mb: 1 }}>Verifiable Data Models</Typography>
                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Use Cerulea Studio to visually map digital artwork metadata, automated royalty triggers, and community voting rights into deterministically secure smart contracts without writing low level code.
                  </Typography>
                </Box>
              </Box>

              {/* Layer 4 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#FAFAFA', border: '2px solid #c026d3', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(192, 38, 211, 0.2)', mr: 4 }}>
                  <SecurityOutlinedIcon sx={{ color: '#c026d3', fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: '#c026d3', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 04: COMMUNITY GOVERNANCE</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#172554', mb: 1 }}>Threshold Control Framework</Typography>
                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Protect the creator treasury. Enforce strict cryptographic signatures from DAO token holders before massive creative fund allocations or charity donations are permitted to execute.
                  </Typography>
                </Box>
              </Box>

              {/* Layer 5 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#FAFAFA', border: '2px solid #c026d3', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(192, 38, 211, 0.2)', mr: 4 }}>
                  <ApiOutlinedIcon sx={{ color: '#c026d3', fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: '#c026d3', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 05: PLATFORM BRIDGE</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#172554', mb: 1 }}>The Creator API Gateway</Typography>
                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Interact with the entire blockchain ecosystem instantly via auto-generated REST endpoints, bridging legacy streaming platforms and gallery CMS software directly into Web3.
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
                Building custom creator blockchains from scratch requires specialized engineers and massive external audit budgets. Cerulea visualizes the process, cutting deployment times significantly.
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 4, alignItems: 'stretch', pb: 12 }}>
              
              {/* The Traditional Way */}
              <Box sx={{ flex: 1, p: { xs: 4, md: 6 }, bgcolor: '#FFFFFF', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: 4, position: 'relative', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, bgcolor: '#ef4444' }} />
                <Typography sx={{ color: '#ef4444', fontWeight: 700, letterSpacing: '0.05em', mb: 1, fontSize: '0.85rem' }}>TRADITIONAL BLOCKCHAIN DEVELOPMENT</Typography>
                <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, color: '#172554', mb: 5 }}>12 to 16 Months</Typography>
                
                <Stack spacing={4}>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 1: Copyright Logic & Solidity (Months 1 to 4)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Hiring expensive Web3 developers to write custom state machines, complex royalty structures, and digital asset standards entirely from scratch.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 2: Third-Party Audits (Months 5 to 7)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Paying external firms hundreds of thousands of dollars to find and patch fatal vulnerabilities in the royalty payout code before handling live revenue.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 3: Marketplace Middleware (Months 8 to 11)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Building fragile custom middleware to successfully translate API calls from legacy creator tools and galleries into blockchain compatible RPC payloads.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 4: Network Testing (Months 12 to 16)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Enduring a massive beta rollout phase to ensure the minting platform, the smart contracts, and the global collector database synchronize correctly.</Typography>
                  </Box>
                </Stack>
              </Box>

              {/* The Cerulea Way */}
              <Box sx={{ flex: 1, p: { xs: 4, md: 6 }, bgcolor: 'rgba(192, 38, 211, 0.02)', border: '1px solid rgba(192, 38, 211, 0.3)', borderRadius: 4, position: 'relative', overflow: 'hidden', boxShadow: '0 10px 40px rgba(192, 38, 211, 0.08)' }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, bgcolor: '#c026d3' }} />
                <Typography sx={{ color: '#c026d3', fontWeight: 700, letterSpacing: '0.05em', mb: 1, fontSize: '0.85rem' }}>CERULEA PLATFORM DEPLOYMENT</Typography>
                <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, color: '#172554', mb: 5 }}>6 to 8 Weeks</Typography>
                
                <Stack spacing={4}>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 1: Visual Asset Modeling (Weeks 1 to 2)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Use Cerulea Studio to visually map asset metadata, required split signatures, and automated royalty triggers without writing any code.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 2: Subnet Provisioning (Weeks 3 to 4)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Automate the deployment of the Sovereign Private Chain and issue standardized validator nodes directly for publisher databases from the control dashboard.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 3: Creator API Hookup (Weeks 5 to 6)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Connect existing minting portals or agency software directly to auto-generated Cerulea APIs. No custom middleware or indexing is required.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 4: Production Go-Live (Weeks 7 to 8)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Bridge the finalized logic to the live network and begin issuing cryptographically verified art assets with complete architectural confidence.</Typography>
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