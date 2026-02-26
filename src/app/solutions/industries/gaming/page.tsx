'use client';

import * as React from 'react';
import { Box, Container, Typography, Grid, Stack, Button, Divider, Slider } from '@mui/material';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import DomainOutlinedIcon from '@mui/icons-material/DomainOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';

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

const GAMING_PILLARS = [
  {
    id: 'assets',
    icon: <ExtensionOutlinedIcon />,
    title: 'True Digital Ownership',
    legacy: 'Players spend billions on in-game items, skins, and battle passes that are permanently locked within a single publisher’s walled database. If an account is banned or a server shuts down, the user loses their entire investment.',
    execution: 'Mint in-game items as decentralized assets on the public ledger. Players gain absolute cryptographic ownership, allowing them to hold, trade, or transfer assets independently of the central game servers.',
    impact: 'Create massive, highly engaged digital economies and drastically increase player retention through genuine financial stakes.'
  },
  {
    id: 'secondary',
    icon: <StorefrontOutlinedIcon />,
    title: 'Secondary Market Capture',
    legacy: 'Gray markets for in-game item trading are plagued by fraud, chargebacks, and account theft. Game publishers capture zero revenue from these massive secondary peer to peer economies.',
    execution: 'Create official, blockchain verified trading hubs. Embed programmatic royalties directly into the item logic so the original developer automatically receives a percentage of every future secondary market resale.',
    impact: 'Eradicate black market trading fraud and unlock a massive, continuous revenue stream for game studios.'
  },
  {
    id: 'esports',
    icon: <EmojiEventsOutlinedIcon />,
    title: 'Automated Esports Escrow',
    legacy: 'Esports tournament prize pools rely on opaque organizations and manual bank transfers. Winning players and teams often face months of delays waiting for tournament organizers to release funds.',
    execution: 'Utilize programmable smart escrow. Tournament prize pools are locked cryptographically before the event begins and are automatically routed to the winning players the exact second the final match data is verified by API oracles.',
    impact: 'Restore absolute trust in esports ecosystems and guarantee instant, dispute free prize distribution.'
  },
  {
    id: 'interoperability',
    icon: <SwapHorizOutlinedIcon />,
    title: 'Cross-Game Interoperability',
    legacy: 'Items earned or purchased in one game have zero utility in another. Game ecosystems remain entirely isolated, preventing cross-promotion and stifling metaverse development.',
    execution: 'Utilize standardized, verifiable data models. An asset minted on Cerulea can be read by any authorized game engine, allowing a weapon or cosmetic skin to seamlessly port between entirely different game worlds.',
    impact: 'Pioneer the true metaverse by allowing player identity and inventories to travel seamlessly across independent titles.'
  },
  {
    id: 'creators',
    icon: <GroupsOutlinedIcon />,
    title: 'Creator & Modder Royalties',
    legacy: 'Community modders and user generated content (UGC) creators add massive value to games but struggle to monetize their work safely and transparently.',
    execution: 'Tokenize user generated content. As players download or interact with community creations, high throughput micro-transactions automatically route fractional payments directly to the creator’s wallet.',
    impact: 'Incentivize endless community driven content creation by providing guaranteed, automated compensation.'
  },
  {
    id: 'frictionless',
    icon: <SecurityOutlinedIcon />,
    title: 'Frictionless Web3 Onboarding',
    legacy: 'Traditional Web3 games force players to manage complex seed phrases, acquire volatile cryptocurrencies, and pay network gas fees just to play, destroying mainstream adoption.',
    execution: 'Implement network level gas abstraction. Publishers sponsor the transaction fees in the background, allowing players to log in with standard email accounts and trade items without ever knowing a blockchain is running under the hood.',
    impact: 'Achieve Web3 economic benefits with Web2 user experience speeds, eliminating all onboarding friction for casual gamers.'
  }
];

export default function GamingSolutionPage() {
  // Simulator State
  const [monthlyTrades, setMonthlyTrades] = React.useState<number>(2000000); 
  const handleTradeChange = (event: Event, newValue: number | number[]) => setMonthlyTrades(newValue as number);
  
  // Math Logic (Secondary market chargebacks, fraud, and database overhead)
  const legacyCostPerTrade = 0.45; 
  const ceruleaCostPerTrade = 0.005; 
  const annualLegacyCost = monthlyTrades * legacyCostPerTrade * 12;
  const annualCeruleaCost = monthlyTrades * ceruleaCostPerTrade * 12;
  const annualSavings = annualLegacyCost - annualCeruleaCost;

  const [activePillar, setActivePillar] = React.useState(GAMING_PILLARS[0]);

  return (
    <Box sx={{ bgcolor: '#FAFAFA', color: '#172554', overflowX: 'hidden', pb: 0 }}>
      
      {/* 1. THE HERO */}
      <Box sx={{ pt: { xs: 16, md: 24 }, pb: { xs: 12, md: 16 }, position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '500px', background: 'radial-gradient(ellipse at top, rgba(20, 184, 166, 0.1), transparent 70%)', pointerEvents: 'none' }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 2, py: 1, borderRadius: 2, bgcolor: 'rgba(20, 184, 166, 0.1)', border: '1px solid rgba(20, 184, 166, 0.2)', mb: 4 }}>
              <SportsEsportsOutlinedIcon sx={{ color: '#14b8a6', fontSize: 20 }} />
              <Typography sx={{ color: '#14b8a6', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                Gaming & Esports
              </Typography>
            </Box>
            
            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '3rem', md: '5rem' }, lineHeight: 1.05, letterSpacing: '-0.03em', mb: 4, mx: 'auto', maxWidth: 1000, color: '#172554' }}>
              Tokenize assets.<br />
              <span style={{ color: '#64748B' }}>Automate economies.</span>
            </Typography>
            
            <Typography sx={{ color: '#475569', fontSize: { xs: '1.1rem', md: '1.3rem' }, maxWidth: 850, lineHeight: 1.6, mb: 6, mx: 'auto', fontWeight: 400 }}>
              Cerulea provides the execution engine to launch interoperable game assets, automate secondary market royalties, and secure esports prize pools without writing complex smart contract code.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
              <Button 
                href="/company/contact"
                variant="contained" 
                endIcon={<ArrowForwardIcon />} 
                sx={{ 
                  bgcolor: '#14b8a6', color: '#FFFFFF', px: 4, py: 2, fontSize: '1rem', fontWeight: 700, borderRadius: 2,
                  boxShadow: '0 4px 14px rgba(20, 184, 166, 0.3)',
                  '&:hover': { bgcolor: '#0f766e', transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(20, 184, 166, 0.4)' },
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
              <Typography sx={{ color: '#14b8a6', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>01.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>True Digital Scarcity</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>In-game item drops can be mathematically capped. Once the maximum supply of a legendary skin is reached, it is cryptographically impossible to duplicate or generate more.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#14b8a6', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>02.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Fraud-Proof Trading</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Atomic swaps guarantee that asset transfers and payments happen simultaneously. This completely eliminates chargeback fraud and the risk of scamming in peer-to-peer player markets.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#14b8a6', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>03.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Gas-Abstracted Gameplay</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>High-throughput infrastructure allows studios to sponsor network fees for their users. Players enjoy the security of blockchain assets while experiencing standard Web2 responsiveness.</Typography>
            </Box>

            {/* ROW 2 */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#14b8a6', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>04.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Programmable Royalties</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Publishers can hardcode royalty splits into digital items. Every time a skin is resold on an open marketplace, the original developer receives an instant, automated revenue cut.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#14b8a6', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>05.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Cross-Platform Parity</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Because player inventories live on an independent public ledger rather than a centralized studio server, user assets can seamlessly integrate into console, PC, and mobile clients equally.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#14b8a6', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>06.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Decentralized Identity</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Players maintain a single cryptographic gamertag that tracks global tournament ranks, achievements, and cross-game inventories without relying on vulnerable third-party login protocols.</Typography>
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
                A single unified protocol capable of supporting vast digital economies. Select a specific operational segment below.
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
                  {GAMING_PILLARS.map((pillar) => (
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
                        borderColor: activePillar.id === pillar.id ? 'rgba(20, 184, 166, 0.4)' : '#E2E8F0',
                        bgcolor: activePillar.id === pillar.id ? 'rgba(20, 184, 166, 0.05)' : '#FFFFFF',
                        transition: 'all 0.2s ease',
                        boxShadow: activePillar.id === pillar.id ? '0 4px 12px rgba(20, 184, 166, 0.05)' : 'none',
                        '&:hover': { bgcolor: activePillar.id === pillar.id ? 'rgba(20, 184, 166, 0.08)' : '#F8FAFC' }
                      }}
                    >
                      <Box sx={{ color: activePillar.id === pillar.id ? '#14b8a6' : '#64748B', display: 'flex' }}>
                        {pillar.icon}
                      </Box>
                      <Typography sx={{ fontSize: '1.05rem', fontWeight: 700, color: activePillar.id === pillar.id ? '#172554' : '#475569' }}>
                        {pillar.title}
                      </Typography>
                      {activePillar.id === pillar.id && (
                        <ArrowForwardIcon sx={{ ml: 'auto', color: '#14b8a6', fontSize: 20 }} />
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
                      <Box sx={{ width: 48, height: 48, borderRadius: 2, bgcolor: 'rgba(20, 184, 166, 0.1)', color: '#14b8a6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                        <Box sx={{ p: 4, bgcolor: 'rgba(20, 184, 166, 0.05)', border: '1px solid rgba(20, 184, 166, 0.2)', borderRadius: 3 }}>
                          <Typography sx={{ fontSize: '0.75rem', color: '#14b8a6', fontWeight: 700, letterSpacing: '0.05em', mb: 1 }}>ARCHITECTURAL IMPACT</Typography>
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
            <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>In-Game Economy & Trade Simulator</Typography>
            <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
              Black market trading, credit card chargebacks, and server database scaling drain revenue from digital economies. Calculate your exact operational savings by migrating to Cerulea atomic execution.
            </Typography>
          </Box>

          <Box sx={{ p: { xs: 4, md: 6 }, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
            <Grid container spacing={8} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography sx={{ color: '#172554', fontWeight: 600, mb: 1 }}>Monthly Asset Trades / Transfers</Typography>
                <Typography sx={{ color: '#14b8a6', fontSize: '3rem', fontWeight: 800, mb: 4 }}>{monthlyTrades.toLocaleString('en-US')} Tx</Typography>
                
                <Slider
                  value={monthlyTrades} onChange={handleTradeChange} min={100000} max={10000000} step={100000}
                  sx={{ color: '#14b8a6', height: 8, '& .MuiSlider-thumb': { height: 24, width: 24, backgroundColor: '#fff', border: '2px solid currentColor' } }}
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
                      <Typography sx={{ fontSize: '0.8rem', color: '#475569' }}>Chargeback Fraud & Server DB Overhead</Typography>
                    </Box>
                    <Typography sx={{ fontSize: '1.75rem', color: '#172554', fontWeight: 700 }}>${Math.round(annualLegacyCost).toLocaleString('en-US')}</Typography>
                  </Box>

                  <Box sx={{ p: 3, bgcolor: 'rgba(20, 184, 166, 0.05)', border: '1px solid rgba(20, 184, 166, 0.2)', borderRadius: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography sx={{ fontSize: '0.75rem', color: '#14b8a6', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>CERULEA EXECUTION COST</Typography>
                      <Typography sx={{ fontSize: '0.8rem', color: '#475569' }}>Smart Contract Routing</Typography>
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
                The legacy calculation utilizes gaming industry benchmarks estimating the average combined operational cost of maintaining central databases, processing payment gateway fees, and absorbing credit card chargeback fraud at <strong>$0.45 USD per digital item transfer</strong>. Executing the exact same asset swap via Cerulea incurs an estimated network fee of <strong>$0.005 USD</strong>. This figure represents the computational gas cost required to automatically verify a player's digital signature and deterministically execute the asset exchange on a high throughput ledger. Because the network processes the asset transfer and the payment execution atomically, chargeback fraud and manual customer support tickets are mathematically eliminated.
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
                Whether you are bridging legacy publisher databases or integrating directly into game engines like Unity, Cerulea provides the exact infrastructure flow required.
              </Typography>
            </Box>

            <Stack spacing={10}>
              
              {/* DIAGRAM A: ENTERPRISE BRIDGING */}
              <Box>
                <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1, textAlign: 'center' }}>Track A: Studio Platform Bridging</Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', mb: 6, lineHeight: 1.6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
                  For major publishers connecting existing backend infrastructure. Legacy HTTP requests from central player databases are translated into secure Web3 transactions seamlessly.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2, position: 'relative' }}>
                  
                  {/* Node 1 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '1px solid #CBD5E1', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <DomainOutlinedIcon sx={{ color: '#64748B', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Legacy Studio Core</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>PlayFab / AWS GameLift</Typography>
                  </Box>

                  {/* Arrow 1 */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#64748B', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>HTTPS / REST</Typography>
                    <ArrowForwardIcon sx={{ color: '#64748B', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>

                  {/* Node 2 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: 'rgba(20, 184, 166, 0.05)', border: '2px solid #14b8a6', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(20, 184, 166, 0.15)' }}>
                      <ApiOutlinedIcon sx={{ color: '#14b8a6', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Cerulea API</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Translation Gateway</Typography>
                  </Box>

                  {/* Arrow 2 */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#14b8a6', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>WASM COMPILATION</Typography>
                    <ArrowForwardIcon sx={{ color: '#14b8a6', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>

                  {/* Node 3 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '2px solid #059669', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(5, 150, 105, 0.15)' }}>
                      <DnsOutlinedIcon sx={{ color: '#059669', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Cerulea Private Chains</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Sovereign Publisher State</Typography>
                  </Box>

                </Box>
              </Box>

              <Divider sx={{ borderColor: '#E2E8F0' }} />

              {/* DIAGRAM B: NATIVE WEB3 */}
              <Box>
                <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1, textAlign: 'center' }}>Track B: Native Client Execution</Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', mb: 6, lineHeight: 1.6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
                  For Web3 developers building fully decentralized economies. Bypass legacy middleware and integrate the game client directly to the public execution layer.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2, position: 'relative' }}>
                  
                  {/* Node 1 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '1px solid #CBD5E1', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <TerminalOutlinedIcon sx={{ color: '#64748B', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Game Client</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Unity / Unreal Engine</Typography>
                  </Box>

                  {/* Arrow 1 */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#64748B', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>CERULEA SDK</Typography>
                    <ArrowForwardIcon sx={{ color: '#64748B', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>

                  {/* Node 2 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: 'rgba(37, 99, 235, 0.05)', border: '2px solid #2563eb', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(37, 99, 235, 0.15)' }}>
                      <HubOutlinedIcon sx={{ color: '#2563eb', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Cerulea Public L1</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>High-Throughput Network</Typography>
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
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Asset Trading Logic</Typography>
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
              Cerulea provides dedicated infrastructure tailored for the distinct operational requirements of the global gaming and esports sector.
            </Typography>
          </Box>

          <Stack spacing={4}>
            {/* Enterprise Row */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(20, 184, 166, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <DomainOutlinedIcon sx={{ fontSize: 40, color: '#14b8a6' }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>AAA Publishers & Studios</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Enterprise studios utilize Cerulea to un-silo internal player databases, completely eliminate chargeback fraud on digital purchases, and capture massive new revenue streams by programmatically taxing secondary market trades.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY PUBLISHER USE CASES</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#14b8a6' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Secondary Market Capture</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#14b8a6' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Fraud Eradication</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#14b8a6' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Cross-IP Promotions</Typography></Box>
                </Stack>
              </Box>
            </Box>

            {/* Esports Row */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(20, 184, 166, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <EmojiEventsOutlinedIcon sx={{ fontSize: 40, color: '#14b8a6' }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>Esports Teams & Organizers</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Tournament organizers deploy Cerulea to establish verifiable prize pool escrow. Fans can crowdfund massive tournaments, and winning teams receive instant payouts via automated smart contracts the moment matches conclude.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY ESPORTS USE CASES</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#14b8a6' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Automated Prize Escrow</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#14b8a6' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Fan Token Governance</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#14b8a6' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Team Revenue Splits</Typography></Box>
                </Stack>
              </Box>
            </Box>

            {/* DApp Row */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(20, 184, 166, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <CodeOutlinedIcon sx={{ fontSize: 40, color: '#14b8a6' }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>Web3 Devs & Modders</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Forward-thinking engineers build next generation virtual economies and play-to-earn protocols on the high throughput L1. They utilize Cerulea's visual Studio to guarantee absolute smart contract security without raw Solidity code.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY CREATOR USE CASES</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#14b8a6' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>UGC Royalty Routing</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#14b8a6' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Decentralized Marketplaces</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#14b8a6' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Cross-Game Metaverses</Typography></Box>
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
            <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>The Gaming Technology Stack</Typography>
            <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 700, mx: 'auto', textAlign: 'justify' }}>
              We do not sell isolated smart contracts. We provide a vertically integrated platform specifically mapped to the strict requirements of massive multiplayer environments. It is architected to provide a standardized, highly secure pathway for migrating legacy items into programmable Web3 execution.
            </Typography>
          </Box>

          <Box sx={{ position: 'relative' }}>
            {/* The Left-Aligned Connecting Line */}
            <Box sx={{ position: 'absolute', left: 24, top: 20, bottom: 20, width: '2px', bgcolor: 'rgba(20, 184, 166, 0.2)', display: { xs: 'none', md: 'block' } }} />

            <Stack spacing={6}>
              {/* Layer 1 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#FAFAFA', border: '2px solid #14b8a6', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(20, 184, 166, 0.2)', mr: 4 }}>
                  <DnsOutlinedIcon sx={{ color: '#14b8a6', fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: '#14b8a6', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 01: VIRTUAL LEDGERS</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#172554', mb: 1 }}>Hybrid Gaming Networks</Typography>
                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Deploy an isolated Private Subnet strictly for internal publisher tracking, or launch directly onto the high-throughput Public L1 to facilitate global, open-market trading for players.
                  </Typography>
                </Box>
              </Box>

              {/* Layer 2 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#FAFAFA', border: '2px solid #14b8a6', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(20, 184, 166, 0.2)', mr: 4 }}>
                  <VpnKeyOutlinedIcon sx={{ color: '#14b8a6', fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: '#14b8a6', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 02: PLAYER KYC</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#172554', mb: 1 }}>On-Chain Gamertag Resolver</Typography>
                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Deploy the Identity module to ensure every interacting player wallet is mathematically tied to a verified platform credential, instantly blocking sybil attacks and bot farms.
                  </Typography>
                </Box>
              </Box>

              {/* Layer 3 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#FAFAFA', border: '2px solid #14b8a6', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(20, 184, 166, 0.2)', mr: 4 }}>
                  <ExtensionOutlinedIcon sx={{ color: '#14b8a6', fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: '#14b8a6', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 03: ASSET TOKENIZATION</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#172554', mb: 1 }}>Verifiable Data Models</Typography>
                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Use Cerulea Studio to visually map digital skins, esports prize pools, and automated royalty triggers into deterministically secure smart contracts without writing low level code.
                  </Typography>
                </Box>
              </Box>

              {/* Layer 4 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#FAFAFA', border: '2px solid #14b8a6', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(20, 184, 166, 0.2)', mr: 4 }}>
                  <SecurityOutlinedIcon sx={{ color: '#14b8a6', fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: '#14b8a6', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 04: ECONOMY GOVERNANCE</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#172554', mb: 1 }}>Threshold Control Framework</Typography>
                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Protect the in-game economy. Enforce strict cryptographic signatures from developers or community DAOs before any massive asset burns or inflationary mechanics are permitted to execute.
                  </Typography>
                </Box>
              </Box>

              {/* Layer 5 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#FAFAFA', border: '2px solid #14b8a6', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(20, 184, 166, 0.2)', mr: 4 }}>
                  <ApiOutlinedIcon sx={{ color: '#14b8a6', fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: '#14b8a6', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 05: GAME ENGINE BRIDGE</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#172554', mb: 1 }}>The Unity & Unreal SDKs</Typography>
                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Interact with the entire blockchain ecosystem instantly via auto-generated SDKs that natively integrate your smart contracts directly into major C++ and C# game engines.
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
                Building custom gaming blockchains from scratch requires specialized engineers and agonizing code audits. Cerulea visualizes the process, cutting deployment times significantly.
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
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 1: Economy Logic & Solidity (Months 1 to 5)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Hiring expensive Web3 developers to write custom state machines, NFT logic, and marketplace escrow entirely from scratch.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 2: Third-Party Audits (Months 6 to 8)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Paying external firms hundreds of thousands of dollars to find and patch fatal code vulnerabilities before deploying live player assets.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 3: Game Engine Middleware (Months 9 to 13)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Building fragile custom middleware to successfully translate API calls from Unity or Unreal Engine into blockchain compatible RPC payloads.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 4: Network Testing (Months 14 to 18)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Enduring a massive beta rollout phase to ensure the game client, the smart contracts, and the global player database synchronize correctly without fatal duping bugs.</Typography>
                  </Box>
                </Stack>
              </Box>

              {/* The Cerulea Way */}
              <Box sx={{ flex: 1, p: { xs: 4, md: 6 }, bgcolor: 'rgba(20, 184, 166, 0.02)', border: '1px solid rgba(20, 184, 166, 0.3)', borderRadius: 4, position: 'relative', overflow: 'hidden', boxShadow: '0 10px 40px rgba(20, 184, 166, 0.08)' }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, bgcolor: '#14b8a6' }} />
                <Typography sx={{ color: '#14b8a6', fontWeight: 700, letterSpacing: '0.05em', mb: 1, fontSize: '0.85rem' }}>CERULEA PLATFORM DEPLOYMENT</Typography>
                <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, color: '#172554', mb: 5 }}>8 to 10 Weeks</Typography>
                
                <Stack spacing={4}>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 1: Visual Asset Modeling (Weeks 1 to 2)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Use Cerulea Studio to visually map asset supplies, required trade signatures, and automated royalty triggers without writing any code.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 2: Subnet Provisioning (Weeks 3 to 4)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Deploy a Sovereign Private Chain and issue standardized validator nodes directly for publisher databases from the control dashboard.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 3: SDK Client Hookup (Weeks 5 to 7)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Connect existing Unity or Unreal Engine builds directly to auto-generated Cerulea SDKs. No custom middleware or indexing is required.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 4: Production Go-Live (Weeks 8 to 10)</Typography>
                    <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Bridge the finalized logic to the live network and begin issuing cryptographically verified in-game items with complete architectural confidence.</Typography>
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