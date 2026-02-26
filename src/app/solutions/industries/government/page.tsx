'use client';

import * as React from 'react';
import { Box, Container, Typography, Grid, Stack, Button, Divider, Slider, useTheme } from '@mui/material';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

// Icons
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import HowToVoteOutlinedIcon from '@mui/icons-material/HowToVoteOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import DomainOutlinedIcon from '@mui/icons-material/DomainOutlined';
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';

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

const GOV_PILLARS = [
  {
    id: 'identity',
    icon: <VerifiedUserOutlinedIcon />,
    title: 'Sovereign Digital Identity',
    legacy: 'Citizens are forced to maintain fragmented physical documents and repetitive digital logins across multiple disconnected government portals, increasing the risk of widespread identity theft.',
    execution: 'Issue highly secure, zero-knowledge digital credentials. Citizens verify their identity once and use cryptographic proofs to interact with all government services without exposing their underlying private data.',
    impact: 'Consolidate public services into a single unified portal while giving citizens absolute control over their own data privacy.'
  },
  {
    id: 'voting',
    icon: <HowToVoteOutlinedIcon />,
    title: 'Cryptographic Voting',
    legacy: 'Elections rely on highly vulnerable physical ballot boxes, easily manipulated electronic voting machines, and complex manual tallying systems that erode public trust in democratic outcomes.',
    execution: 'Deploy voting logic directly onto Cerulea Private Chains. Every cast vote is immutably hashed and permanently anchored to the ledger, allowing real-time tallying without revealing the voter identity.',
    impact: 'Guarantee absolute election integrity and provide citizens with verifiable proof that their vote was counted accurately.'
  },
  {
    id: 'procurement',
    icon: <DescriptionOutlinedIcon />,
    title: 'Transparent Procurement',
    legacy: 'Public contract bidding and grant disbursements are obscured behind opaque administrative layers, creating massive vulnerabilities for graft, corruption, and bureaucratic inefficiency.',
    execution: 'Automate fund disbursements using conditional smart contracts. Taxpayer capital is held in programmable escrow and released to contractors only when specific, verifiable civic milestones are achieved.',
    impact: 'Eradicate bureaucratic fraud by making every single government expenditure fully traceable and conditionally enforced.'
  },
  {
    id: 'land',
    icon: <MapOutlinedIcon />,
    title: 'Immutable Land Registry',
    legacy: 'Property titles are maintained in outdated municipal databases or paper archives. Transferring ownership takes weeks of legal verification and is highly susceptible to forgery and title disputes.',
    execution: 'Tokenize physical real estate and anchor property deeds directly to the blockchain. Title transfers execute instantaneously with perfect historical provenance tracking.',
    impact: 'Eliminate costly title insurance requirements and reduce property transfer times from several months to a few seconds.'
  },
  {
    id: 'tax',
    icon: <GavelOutlinedIcon />,
    title: 'Automated Tax Reconciliation',
    legacy: 'Tax collection requires immense manual oversight, endless citizen audits, and heavily siloed banking reconciliation, costing governments billions in annual administrative overhead.',
    execution: 'Integrate the Cerulea API directly into corporate and municipal banking flows. Tax logic is programmed directly into digital asset transactions, calculating and routing revenue automatically upon execution.',
    impact: 'Close the tax gap by enforcing real-time compliance at the protocol level rather than relying on retroactive manual audits.'
  },
  {
    id: 'cbdc',
    icon: <CurrencyExchangeOutlinedIcon />,
    title: 'Sovereign CBDC Issuance',
    legacy: 'Central banks lack the agile infrastructure required to issue programmable fiat currencies, leaving them vulnerable to external disruptions from unregulated private stablecoins.',
    execution: 'Architect secure Central Bank Digital Currencies (CBDCs) using Cerulea Data Models. Enforce absolute control over monetary supply, citizen distribution logic, and macroeconomic tracking metrics.',
    impact: 'Modernize national monetary policy with highly programmable, instantly verifiable digital currencies.'
  }
];

export default function GovernmentSolutionPage() {
  const theme = useTheme();
  const pageAccent = theme.palette.warning.main; // Amber/Orange for government

  const [monthlyDisbursements, setMonthlyDisbursements] = React.useState<number>(50000); 
  const handleDisbursementChange = (event: Event, newValue: number | number[]) => setMonthlyDisbursements(newValue as number);
  
  const legacyCostPerTx = 18.00; 
  const ceruleaCostPerTx = 0.15; 
  const annualLegacyCost = monthlyDisbursements * legacyCostPerTx * 12;
  const annualCeruleaCost = monthlyDisbursements * ceruleaCostPerTx * 12;
  const annualSavings = annualLegacyCost - annualCeruleaCost;

  const [activePillar, setActivePillar] = React.useState(GOV_PILLARS[0]);

  return (
    <Box sx={{ bgcolor: 'background.default', overflowX: 'hidden', pb: 0 }}>
      
      {/* 1. THE HERO */}
      <Box sx={{ pt: { xs: 16, md: 24 }, pb: { xs: 12, md: 16 }, position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '500px', background: `radial-gradient(ellipse at top, ${pageAccent}15, transparent 70%)`, pointerEvents: 'none' }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 2, py: 1, borderRadius: 2, bgcolor: `${pageAccent}15`, border: `1px solid ${pageAccent}30`, mb: 4 }}>
              <AccountBalanceOutlinedIcon sx={{ color: pageAccent, fontSize: 20 }} />
              <Typography sx={{ color: pageAccent, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                Government & Public Sector
              </Typography>
            </Box>
            
            <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '5rem' }, lineHeight: 1.05, letterSpacing: '-0.03em', mb: 4, mx: 'auto', maxWidth: 1000 }}>
              Enterprise blockchain infrastructure.<br />
              <span style={{ color: theme.palette.text.secondary }}>Built for the public sector.</span>
            </Typography>
            
            <Typography sx={{ color: 'text.secondary', fontSize: { xs: '1.1rem', md: '1.3rem' }, maxWidth: 850, lineHeight: 1.6, mb: 6, mx: 'auto', fontWeight: 400 }}>
              Cerulea provides the execution engine to automate public procurement, unify fragmented municipal databases, and establish verifiable digital identity networks without exposing sensitive civic data.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
              <Button 
                href="/company/contact"
                variant="contained" 
                endIcon={<ArrowForwardIcon />} 
                sx={{ 
                  bgcolor: pageAccent, color: '#FFFFFF', px: 4, py: 2, fontSize: '1rem', borderRadius: 2,
                  boxShadow: `0 4px 14px ${pageAccent}50`,
                  '&:hover': { bgcolor: theme.palette.warning.dark, transform: 'translateY(-2px)', boxShadow: `0 6px 20px ${pageAccent}60` },
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
          <Typography variant="h2" sx={{ fontSize: '2.5rem', mb: 10, letterSpacing: '-0.02em', textAlign: 'center' }}>
            The Strategic Advantages of Blockchain
          </Typography>
          
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: { xs: 6, lg: 8 } }}>
            {/* ROW 1 */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: pageAccent, fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>01.</Typography>
              <Typography variant="h3" sx={{ fontSize: '1.25rem', mb: 1 }}>Unalterable Public Records</Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Every civic state change is permanently recorded. It becomes practically impossible for any individual actor to alter past municipal logs, property deeds, or taxation records to cover up systemic errors.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: pageAccent, fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>02.</Typography>
              <Typography variant="h3" sx={{ fontSize: '1.25rem', mb: 1 }}>Cross-Agency Parity</Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Eliminate fragmented public data silos. The Department of Motor Vehicles, taxation boards, and healthcare agencies all read and write to the exact same unified ledger, ensuring perfect real-time synchronization.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: pageAccent, fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>03.</Typography>
              <Typography variant="h3" sx={{ fontSize: '1.25rem', mb: 1 }}>Automated Fund Routing</Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Programmable smart contracts replace manual treasury checks. Taxpayer capital is held securely in escrow and disbursed to public contractors the exact second external civic milestones are verified.</Typography>
            </Box>

            {/* ROW 2 */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: pageAccent, fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>04.</Typography>
              <Typography variant="h3" sx={{ fontSize: '1.25rem', mb: 1 }}>Sovereign Data Control</Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Governments can securely provision highly restricted Private Subnets. This ensures that classified intelligence and citizen records never touch public execution layers or third-party servers.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: pageAccent, fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>05.</Typography>
              <Typography variant="h3" sx={{ fontSize: '1.25rem', mb: 1 }}>Zero-Knowledge Privacy</Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Citizens can prove their civic eligibility (age, residency, income bracket) using advanced cryptographic signatures without ever revealing the underlying sensitive documentation to the requesting agency.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: pageAccent, fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>06.</Typography>
              <Typography variant="h3" sx={{ fontSize: '1.25rem', mb: 1 }}>Cryptographic Transparency</Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Every single public expenditure is permanently hashed. Civic auditors and watchdog groups can verify historical spending data and government budgets with absolute certainty in real-time.</Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>

      {/* 3. USE CASES & APPLICATIONS */}
      <Box sx={{ bgcolor: 'background.paper', py: 16, borderTop: '1px solid', borderBottom: '1px solid', borderColor: 'divider', mb: 16 }}>
        <Container maxWidth="xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography variant="h2" sx={{ fontSize: '2.5rem', mb: 2, letterSpacing: '-0.02em' }}>Use Cases & Applications</Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', maxWidth: 700, mx: 'auto' }}>
                A single unified protocol capable of supporting vast municipal networks. Select a specific civic segment below.
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 4, alignItems: 'flex-start' }}>
              <Box sx={{ width: { xs: '100%', lg: '380px' }, flexShrink: 0, maxHeight: 600, overflowY: 'auto', pr: 2, '&::-webkit-scrollbar': { width: '6px' }, '&::-webkit-scrollbar-track': { background: '#F1F5F9', borderRadius: '10px' }, '&::-webkit-scrollbar-thumb': { background: '#CBD5E1', borderRadius: '10px' } }}>
                <Stack spacing={1.5}>
                  {GOV_PILLARS.map((pillar) => (
                    <Box 
                      key={pillar.id}
                      onClick={() => setActivePillar(pillar)}
                      sx={{ 
                        p: 2.5, display: 'flex', alignItems: 'center', gap: 2, cursor: 'pointer', borderRadius: 3, border: '1px solid',
                        borderColor: activePillar.id === pillar.id ? `${pageAccent}60` : 'divider',
                        bgcolor: activePillar.id === pillar.id ? `${pageAccent}15` : 'background.paper',
                        transition: 'all 0.2s ease',
                        boxShadow: activePillar.id === pillar.id ? `0 4px 12px ${pageAccent}15` : 'none',
                        '&:hover': { bgcolor: activePillar.id === pillar.id ? `${pageAccent}25` : 'action.hover' }
                      }}
                    >
                      <Box sx={{ color: activePillar.id === pillar.id ? pageAccent : 'text.secondary', display: 'flex' }}>
                        {pillar.icon}
                      </Box>
                      <Typography sx={{ fontSize: '1.05rem', fontWeight: 700, color: activePillar.id === pillar.id ? 'text.primary' : 'text.secondary' }}>
                        {pillar.title}
                      </Typography>
                      {activePillar.id === pillar.id && (
                        <ArrowForwardIcon sx={{ ml: 'auto', color: pageAccent, fontSize: 20 }} />
                      )}
                    </Box>
                  ))}
                </Stack>
              </Box>

              <Box sx={{ flexGrow: 1, width: '100%', p: { xs: 4, md: 6 }, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 4, minHeight: 500, position: 'relative', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                <AnimatePresence mode="wait">
                  <motion.div key={activePillar.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 5 }}>
                      <Box sx={{ width: 48, height: 48, borderRadius: 2, bgcolor: `${pageAccent}15`, color: pageAccent, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {activePillar.icon}
                      </Box>
                      <Typography variant="h2" sx={{ fontSize: '2rem', letterSpacing: '-0.02em' }}>
                        {activePillar.title}
                      </Typography>
                    </Box>

                    <Stack spacing={5}>
                      <Box>
                        <Typography sx={{ fontSize: '0.8rem', color: theme.palette.error.main, fontWeight: 700, letterSpacing: '0.1em', mb: 1.5 }}>THE LEGACY BOTTLENECK</Typography>
                        <Typography sx={{ color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.7, textAlign: 'justify' }}>{activePillar.legacy}</Typography>
                      </Box>
                      <Divider />
                      <Box>
                        <Typography sx={{ fontSize: '0.8rem', color: pageAccent, fontWeight: 700, letterSpacing: '0.1em', mb: 1.5 }}>THE CERULEA EXECUTION</Typography>
                        <Typography sx={{ color: 'text.primary', fontSize: '1.05rem', lineHeight: 1.7, textAlign: 'justify' }}>{activePillar.execution}</Typography>
                      </Box>
                      <Box sx={{ pt: 2 }}>
                        <Box sx={{ p: 4, bgcolor: `${pageAccent}15`, border: `1px solid ${pageAccent}30`, borderRadius: 3 }}>
                          <Typography sx={{ fontSize: '0.75rem', color: pageAccent, fontWeight: 700, letterSpacing: '0.05em', mb: 1 }}>ARCHITECTURAL IMPACT</Typography>
                          <Typography sx={{ color: 'text.primary', fontSize: '1.15rem', fontWeight: 600, lineHeight: 1.5, textAlign: 'justify' }}>{activePillar.impact}</Typography>
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
          
      {/* 4. THE PROCUREMENT ROI SIMULATOR */}
      <Container maxWidth="lg" sx={{ mb: 20 }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{ fontSize: '2.5rem', mb: 2, letterSpacing: '-0.02em' }}>Public Disbursement Simulator</Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
              Manual eligibility checks and inter-agency data silos severely delay public welfare and grant payouts. Calculate your exact taxpayer capital saved by migrating to Cerulea execution.
            </Typography>
          </Box>

          <Box sx={{ p: { xs: 4, md: 6 }, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 8, alignItems: 'center' }}>
              <Box sx={{ flex: 1, width: '100%' }}>
                <Typography sx={{ color: 'text.primary', fontWeight: 600, mb: 1 }}>Monthly Grants & Welfare Disbursements</Typography>
                <Typography sx={{ color: pageAccent, fontSize: '3rem', fontWeight: 800, mb: 4 }}>{monthlyDisbursements.toLocaleString('en-US')} Tx</Typography>
                
                <Slider
                  value={monthlyDisbursements} onChange={handleDisbursementChange} min={10000} max={500000} step={10000}
                  sx={{ color: pageAccent, height: 8, '& .MuiSlider-thumb': { height: 24, width: 24, backgroundColor: '#fff', border: '2px solid currentColor' } }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', color: 'text.secondary', fontSize: '0.85rem', mt: 1 }}>
                  <Typography>10,000</Typography>
                  <Typography>500,000+</Typography>
                </Box>
              </Box>

              <Box sx={{ flex: 1, width: '100%' }}>
                <Stack spacing={3}>
                  <Box sx={{ p: 3, bgcolor: `${theme.palette.error.main}15`, border: `1px solid ${theme.palette.error.main}30`, borderRadius: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography sx={{ fontSize: '0.75rem', color: theme.palette.error.main, fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>ESTIMATED LEGACY COST</Typography>
                      <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary' }}>Manual Audit & Routing</Typography>
                    </Box>
                    <Typography sx={{ fontSize: '1.75rem', color: 'text.primary', fontWeight: 700 }}>${Math.round(annualLegacyCost).toLocaleString('en-US')}</Typography>
                  </Box>

                  <Box sx={{ p: 3, bgcolor: `${pageAccent}15`, border: `1px solid ${pageAccent}30`, borderRadius: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography sx={{ fontSize: '0.75rem', color: pageAccent, fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>CERULEA EXECUTION COST</Typography>
                      <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary' }}>Smart Contract Execution</Typography>
                    </Box>
                    <Typography sx={{ fontSize: '1.75rem', color: 'text.primary', fontWeight: 700 }}>${Math.round(annualCeruleaCost).toLocaleString('en-US')}</Typography>
                  </Box>

                  <Box sx={{ p: 3, bgcolor: `${pageAccent}15`, border: `1px solid ${pageAccent}30`, borderRadius: 3, position: 'relative', overflow: 'hidden' }}>
                    <Box sx={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '6px', bgcolor: pageAccent }} />
                    <Box sx={{ pl: 2 }}>
                      <Typography sx={{ fontSize: '0.85rem', color: pageAccent, fontWeight: 700, mb: 1, letterSpacing: '0.05em' }}>TOTAL TAXPAYER CAPITAL SAVED ANNUALLY</Typography>
                      <Typography sx={{ fontSize: '3rem', color: 'text.primary', fontWeight: 800, lineHeight: 1 }}>${Math.round(annualSavings).toLocaleString('en-US')}</Typography>
                    </Box>
                  </Box>
                </Stack>
              </Box>
            </Box>

            <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid', borderColor: 'divider' }}>
              <Typography sx={{ fontSize: '0.8rem', color: 'text.primary', fontWeight: 700, mb: 1, letterSpacing: '0.05em' }}>
                METHODOLOGY
              </Typography>
              <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary', lineHeight: 1.6, textAlign: 'justify' }}>
                The legacy calculation utilizes public sector benchmarks estimating the comprehensive administrative cost to process, manually audit, and clear a single welfare payment or civic grant at <strong>$18.00 USD per transaction</strong>. This accounts for manual citizen eligibility verification, checking across disparate agency data silos, and external banking fees. Executing the exact same disbursement via Cerulea incurs an estimated network fee of <strong>$0.15 USD</strong>. This figure represents the computational gas cost to execute a WebAssembly (WASM) binary on a high-throughput network. Because the system automatically verifies citizen eligibility via on-chain data logic and routes funds directly, human administrative overhead is effectively reduced to raw code execution.
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>

      {/* 5. SYSTEM ARCHITECTURE DIAGRAMS */}
      <Box sx={{ bgcolor: 'background.paper', py: 16, borderTop: '1px solid', borderBottom: '1px solid', borderColor: 'divider', mb: 16 }}>
        <Container maxWidth="xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <Box sx={{ textAlign: 'center', mb: 10 }}>
              <Typography variant="h2" sx={{ fontSize: '2.5rem', mb: 2, letterSpacing: '-0.02em' }}>Network & Execution Architecture</Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
                Whether you are bridging isolated municipal databases or launching citizen-facing civic applications, Cerulea provides the exact infrastructure flow required.
              </Typography>
            </Box>

            <Stack spacing={10}>
              
              {/* DIAGRAM A */}
              <Box>
                <Typography variant="h3" sx={{ fontSize: '1.25rem', mb: 1, textAlign: 'center' }}>Track A: Inter-Agency Database Bridging</Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', mb: 6, lineHeight: 1.6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
                  For governmental bodies connecting existing civil software. Legacy API requests from isolated departments are translated into secure, unified Web3 transactions without overhauling current servers.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2, position: 'relative' }}>
                  
                  {/* Node 1 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: 'background.default', border: '1px solid', borderColor: 'divider', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <DomainOutlinedIcon sx={{ color: 'text.secondary', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: 'text.primary', mb: 0.5 }}>Legacy Civic Core</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>Municipal Databases</Typography>
                  </Box>

                  {/* Arrow 1 */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: 'text.secondary', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>HTTPS / REST</Typography>
                    <ArrowForwardIcon sx={{ color: 'text.secondary', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>

                  {/* Node 2 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: `${pageAccent}15`, border: `2px solid ${pageAccent}`, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: `0 4px 14px ${pageAccent}30` }}>
                      <ApiOutlinedIcon sx={{ color: pageAccent, fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: 'text.primary', mb: 0.5 }}>Cerulea API</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>Translation Gateway</Typography>
                  </Box>

                  {/* Arrow 2 */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: pageAccent, fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>WASM COMPILATION</Typography>
                    <ArrowForwardIcon sx={{ color: pageAccent, fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>

                  {/* Node 3 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: 'background.default', border: `2px solid ${theme.palette.success.main}`, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: `0 4px 14px ${theme.palette.success.main}30` }}>
                      <DnsOutlinedIcon sx={{ color: theme.palette.success.main, fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: 'text.primary', mb: 0.5 }}>Cerulea Private Chains</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>Sovereign Validation</Typography>
                  </Box>

                </Box>
              </Box>

              <Divider />

              {/* DIAGRAM B */}
              <Box>
                <Typography variant="h3" sx={{ fontSize: '1.25rem', mb: 1, textAlign: 'center' }}>Track B: Native Citizen Portals</Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', mb: 6, lineHeight: 1.6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
                  For civic tech organizations launching decentralized identity wallets or voting applications. Route logic directly to the public execution layer, bypassing centralized servers entirely.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2, position: 'relative' }}>
                  
                  {/* Node 1 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: 'background.default', border: '1px solid', borderColor: 'divider', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <TerminalOutlinedIcon sx={{ color: 'text.secondary', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: 'text.primary', mb: 0.5 }}>Citizen Portal</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>Web Interface & Wallets</Typography>
                  </Box>

                  {/* Arrow 1 */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: 'text.secondary', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>JSON-RPC</Typography>
                    <ArrowForwardIcon sx={{ color: 'text.secondary', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>

                  {/* Node 2 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: `${theme.palette.primary.main}15`, border: `2px solid ${theme.palette.primary.main}`, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: `0 4px 14px ${theme.palette.primary.main}30` }}>
                      <HubOutlinedIcon sx={{ color: theme.palette.primary.main, fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: 'text.primary', mb: 0.5 }}>Cerulea Public L1</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>Decentralized Network</Typography>
                  </Box>

                  {/* Arrow 2 */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: theme.palette.primary.main, fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>STATE EXECUTION</Typography>
                    <ArrowForwardIcon sx={{ color: theme.palette.primary.main, fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>

                  {/* Node 3 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: 'background.default', border: `2px solid ${theme.palette.secondary.main}`, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: `0 4px 14px ${theme.palette.secondary.main}30` }}>
                      <MemoryOutlinedIcon sx={{ color: theme.palette.secondary.main, fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: 'text.primary', mb: 0.5 }}>Cerulea Data Models</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>Civic Logic Execution</Typography>
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
            <Typography variant="h2" sx={{ fontSize: '2.5rem', mb: 2, letterSpacing: '-0.02em' }}>Applicability Across the Spectrum</Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', maxWidth: 700, mx: 'auto' }}>
              Cerulea provides dedicated infrastructure tailored for the distinct operational requirements of the public sector.
            </Typography>
          </Box>

          <Stack spacing={4}>
            {/* Gov Row 1 */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: `${pageAccent}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <AccountBalanceOutlinedIcon sx={{ fontSize: 40, color: pageAccent }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: 'text.primary', mb: 1 }}>Federal Governments & Central Banks</Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  National authorities deploy Cerulea to architect sovereign digital currencies (CBDCs), manage national defense supply chains, and enforce sweeping macroeconomic compliance across state agencies with absolute data sovereignty.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: '1px solid', borderColor: 'divider' }}>
                <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY MACRO USE CASES</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: pageAccent }}/><Typography sx={{ fontSize: '0.9rem', color: 'text.primary', fontWeight: 600 }}>Sovereign CBDC Issuance</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: pageAccent }}/><Typography sx={{ fontSize: '0.9rem', color: 'text.primary', fontWeight: 600 }}>National eID Frameworks</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: pageAccent }}/><Typography sx={{ fontSize: '0.9rem', color: 'text.primary', fontWeight: 600 }}>Cross-Border Trade Records</Typography></Box>
                </Stack>
              </Box>
            </Box>

            {/* Gov Row 2 */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: `${pageAccent}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <DomainOutlinedIcon sx={{ fontSize: 40, color: pageAccent }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: 'text.primary', mb: 1 }}>State & Municipal Authorities</Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Local governments utilize Cerulea to un-silo internal civic databases, tokenize municipal land registries, and automate public procurement payments without exposing citizen data to public networks.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: '1px solid', borderColor: 'divider' }}>
                <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY MUNICIPAL USE CASES</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: pageAccent }}/><Typography sx={{ fontSize: '0.9rem', color: 'text.primary', fontWeight: 600 }}>Public Procurement Escrow</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: pageAccent }}/><Typography sx={{ fontSize: '0.9rem', color: 'text.primary', fontWeight: 600 }}>Immutable Land Registry</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: pageAccent }}/><Typography sx={{ fontSize: '0.9rem', color: 'text.primary', fontWeight: 600 }}>Automated Tax Collection</Typography></Box>
                </Stack>
              </Box>
            </Box>

            {/* DApp Row */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: `${pageAccent}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <CodeOutlinedIcon sx={{ fontSize: 40, color: pageAccent }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: 'text.primary', mb: 1 }}>Civic Tech Developers & NGOs</Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Forward-thinking engineers build next-generation voting applications and transparent donation platforms on the public L1. They utilize Cerulea's visual Studio to guarantee absolute code security without vulnerabilities.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: '1px solid', borderColor: 'divider' }}>
                <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY CIVIC USE CASES</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: pageAccent }}/><Typography sx={{ fontSize: '0.9rem', color: 'text.primary', fontWeight: 600 }}>Cryptographic Voting</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: pageAccent }}/><Typography sx={{ fontSize: '0.9rem', color: 'text.primary', fontWeight: 600 }}>NGO Donation Tracking</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: pageAccent }}/><Typography sx={{ fontSize: '0.9rem', color: 'text.primary', fontWeight: 600 }}>Community DAOs</Typography></Box>
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
            <Typography variant="h2" sx={{ fontSize: '2.5rem', mb: 2, letterSpacing: '-0.02em' }}>The Public Sector Technology Stack</Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', maxWidth: 700, mx: 'auto', textAlign: 'justify' }}>
              We do not sell isolated smart contracts. We provide a vertically integrated platform specifically mapped to the strict requirements of government bodies. It is architected to provide a standardized, highly secure pathway for migrating legacy civic data into programmable execution environments.
            </Typography>
          </Box>

          <Box sx={{ position: 'relative' }}>
            {/* The Left-Aligned Connecting Line */}
            <Box sx={{ position: 'absolute', left: 24, top: 20, bottom: 20, width: '2px', bgcolor: `${pageAccent}30`, display: { xs: 'none', md: 'block' } }} />

            <Stack spacing={6}>
              {/* Layer 1 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: 'background.default', border: `2px solid ${pageAccent}`, display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: `0 4px 14px ${pageAccent}30`, mr: 4 }}>
                  <DnsOutlinedIcon sx={{ color: pageAccent, fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: pageAccent, fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 01: CIVIC NETWORKS</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: 'text.primary', mb: 1 }}>Sovereign Subnet Ledgers</Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Deploy an isolated Cerulea Private Chain strictly for municipal and federal agencies, ensuring that sensitive citizen data never interacts with public or unregulated infrastructure.
                  </Typography>
                </Box>
              </Box>

              {/* Layer 2 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: 'background.default', border: `2px solid ${pageAccent}`, display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: `0 4px 14px ${pageAccent}30`, mr: 4 }}>
                  <TerminalOutlinedIcon sx={{ color: pageAccent, fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: pageAccent, fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 02: LOGIC COMPILATION</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: 'text.primary', mb: 1 }}>The Deployment Engine</Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Our core engine translates the civic logic you design in Cerulea Studio into highly optimized WebAssembly (WASM) binaries, ensuring flawless compliance on the network.
                  </Typography>
                </Box>
              </Box>

              {/* Layer 3 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: 'background.default', border: `2px solid ${pageAccent}`, display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: `0 4px 14px ${pageAccent}30`, mr: 4 }}>
                  <DescriptionOutlinedIcon sx={{ color: pageAccent, fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: pageAccent, fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 03: RECORD TOKENIZATION</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: 'text.primary', mb: 1 }}>Cerulea Data Models</Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Use Cerulea Studio to visually map property deeds, legal contracts, and national fiat currencies into secure smart contracts without writing low-level Solidity code.
                  </Typography>
                </Box>
              </Box>

              {/* Layer 4 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: 'background.default', border: `2px solid ${pageAccent}`, display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: `0 4px 14px ${pageAccent}30`, mr: 4 }}>
                  <VpnKeyOutlinedIcon sx={{ color: pageAccent, fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: pageAccent, fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 04: MULTI-AGENCY SECURITY</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: 'text.primary', mb: 1 }}>Granular Governance</Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Enforce governmental checks and balances. Require strict cryptographic signatures from multiple independent department heads before massive public budgets can be routed.
                  </Typography>
                </Box>
              </Box>

              {/* Layer 5 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: 'background.default', border: `2px solid ${pageAccent}`, display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: `0 4px 14px ${pageAccent}30`, mr: 4 }}>
                  <ApiOutlinedIcon sx={{ color: pageAccent, fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: pageAccent, fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 05: LEGACY GOV-TECH BRIDGE</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: 'text.primary', mb: 1 }}>The Cerulea API</Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Interact with the entire blockchain ecosystem instantly via auto-generated REST endpoints, bridging aging municipal SQL databases directly into Web3.
                  </Typography>
                </Box>
              </Box>

            </Stack>
          </Box>
        </motion.div>
      </Container>

      {/* 8. TIME TO VALUE COMPARISON (FLUSHED BOTTOM) */}
      <Box sx={{ pb: 0, mb: 0 }}>
        <Container maxWidth="xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography variant="h2" sx={{ fontSize: '2.5rem', mb: 2, letterSpacing: '-0.02em' }}>Accelerated Time-to-Value</Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
                Building custom public sector blockchains requires massive external audit budgets and bureaucratic delays. Cerulea visualizes the process, cutting deployment times significantly.
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 4, alignItems: 'stretch', pb: 12 }}>
              
              {/* The Traditional Way */}
              <Box sx={{ flex: 1, p: { xs: 4, md: 6 }, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 4, position: 'relative', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, bgcolor: theme.palette.error.main }} />
                <Typography sx={{ color: theme.palette.error.main, fontWeight: 700, letterSpacing: '0.05em', mb: 1, fontSize: '0.85rem' }}>TRADITIONAL BLOCKCHAIN DEVELOPMENT</Typography>
                <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, color: 'text.primary', mb: 5 }}>24 to 36 Months</Typography>
                
                <Stack spacing={4}>
                  <Box>
                    <Typography sx={{ color: 'text.primary', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 1: Architecture & Policy (Months 1 to 8)</Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Negotiating strict data compliance across independent state agencies and writing custom state machines to track public funds from scratch.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: 'text.primary', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 2: Legacy Integration (Months 9 to 16)</Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Building complex custom middleware to successfully translate raw municipal data into functional blockchain-compatible payloads.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: 'text.primary', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 3: Security Audits (Months 17 to 24)</Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Paying external firms to hunt for code vulnerabilities in the custom escrow contracts before handling live, multi-million dollar public grants.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: 'text.primary', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 4: Multi-Agency Rollout (Months 25 to 36)</Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Enduring a massive rollout phase to ensure all independent government databases synchronize correctly with the ledger without fatal errors.</Typography>
                  </Box>
                </Stack>
              </Box>

              {/* The Cerulea Way */}
              <Box sx={{ flex: 1, p: { xs: 4, md: 6 }, bgcolor: `${pageAccent}15`, border: `1px solid ${pageAccent}30`, borderRadius: 4, position: 'relative', overflow: 'hidden', boxShadow: `0 10px 40px ${pageAccent}15` }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, bgcolor: pageAccent }} />
                <Typography sx={{ color: pageAccent, fontWeight: 700, letterSpacing: '0.05em', mb: 1, fontSize: '0.85rem' }}>CERULEA PLATFORM DEPLOYMENT</Typography>
                <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, color: 'text.primary', mb: 5 }}>16 to 20 Weeks</Typography>
                
                <Stack spacing={4}>
                  <Box>
                    <Typography sx={{ color: 'text.primary', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 1: Visual Modeling (Weeks 1 to 4)</Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Use Cerulea Studio to visually map public procurement routes, agency permissions, and automated fund triggers without writing any code.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: 'text.primary', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 2: Subnet Provisioning (Weeks 5 to 8)</Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Deploy a Sovereign Private Chain and issue standardized validator nodes directly to inter-departmental agencies from the control dashboard.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: 'text.primary', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 3: Agency Database Hookup (Weeks 9 to 14)</Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Connect existing municipal databases directly to auto-generated Cerulea REST APIs. No custom middleware is required to read and write state.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: 'text.primary', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 4: Public Go-Live (Weeks 15 to 20)</Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Bridge the finalized civic logic to the live network and begin routing taxpayer funds with complete architectural confidence.</Typography>
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