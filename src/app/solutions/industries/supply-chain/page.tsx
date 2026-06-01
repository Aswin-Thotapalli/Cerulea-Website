'use client';

import * as React from 'react';
import { Box, Container, Typography, Grid, Stack, Button, Divider, Slider, useTheme } from '@mui/material';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

// Icons
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QrCodeScannerOutlinedIcon from '@mui/icons-material/QrCodeScannerOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import DomainOutlinedIcon from '@mui/icons-material/DomainOutlined';
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
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

const SUPPLY_PILLARS = [
  {
    id: 'provenance',
    icon: <QrCodeScannerOutlinedIcon />,
    title: 'End-to-End Provenance',
    legacy: 'Supply chains rely on siloed databases across dozens of independent vendors. Tracing the origin of a contaminated component or raw material takes weeks of manual phone calls and email verification.',
    execution: 'Cerulea issues a permanent Digital Product Passport for every physical item. As goods move through the physical world, each vendor cryptographically signs the handover transaction onto a unified shared ledger.',
    impact: 'Achieve absolute, instantaneous visibility into the lifecycle and origin of every component in your supply chain.'
  },
  {
    id: 'telemetry',
    icon: <SensorsOutlinedIcon />,
    title: 'Cold Chain Telemetry',
    legacy: 'Pharmaceuticals and perishables rely on trust. If a container exceeds temperature thresholds during transit, carriers can alter manual logs to avoid liability for the ruined cargo.',
    execution: 'Integrate physical IoT temperature and humidity sensors directly with Cerulea Oracles. Environmental data is written to the blockchain in real-time without human intervention.',
    impact: 'Guarantee transit condition reporting and instantly assign liability the exact second a parameter is breached.'
  },
  {
    id: 'trade-finance',
    icon: <AccountBalanceOutlinedIcon />,
    title: 'Automated Trade Finance',
    legacy: 'Global trade is choked by paper Letters of Credit. Suppliers wait 30 to 90 days for capital to clear because physical shipping manifests must be mailed and manually audited by border banks.',
    execution: 'Deploy programmable escrow contracts. Capital is locked on the ledger and released to the supplier automatically the second a port authority digitally signs the receipt of goods.',
    impact: 'Accelerate supplier cash flow and eradicate document forgery from the international trade lifecycle.'
  },
  {
    id: 'customs',
    icon: <SecurityOutlinedIcon />,
    title: 'Customs & Border Clearing',
    legacy: 'Containers sit idle at ports for days while customs officials manually inspect fragmented compliance documentation, tariffs, and multi-national origin certificates.',
    execution: 'Provide border authorities with direct, read-only access to the encrypted transit history. Customs officers can verify the exact origin, weight, and tax classification before the ship even docks.',
    impact: 'Drastically reduce port holding times and eliminate demurrage fees through pre-verified digital manifests.'
  },
  {
    id: 'scope3',
    icon: <PublicOutlinedIcon />,
    title: 'Scope 3 Emission Tracking',
    legacy: 'Corporations struggle to accurately report their Scope 3 environmental impact because they rely on self-reported, unverified estimates provided by their deep-tier suppliers.',
    execution: 'Mandate that suppliers submit their carbon output data as cryptographically signed attestations. Cerulea tallies the aggregate emissions automatically into an undeniable corporate sustainability report.',
    impact: 'Eliminate greenwashing and provide regulators with highly accurate, verifiable environmental compliance data.'
  },
  {
    id: 'recalls',
    icon: <AutorenewOutlinedIcon />,
    title: 'Targeted Reverse Logistics',
    legacy: 'When a manufacturing defect is discovered, companies are forced to issue massive, costly blanket recalls because they cannot pinpoint exactly which batches contain the defective part.',
    execution: 'Query the Cerulea network to instantly trace the exact trajectory of a specific faulty component. Identify precisely which retail shelves hold the affected products without guessing.',
    impact: 'Isolate recalls to the exact affected units, saving millions in unnecessary retrieval and brand damage.'
  }
];

export default function SupplyChainSolutionPage() {
  const theme = useTheme();
  // Accent color for this page
  const pageAccent = theme.palette.success.main; // Emerald green

  const [monthlyShipments, setMonthlyShipments] = React.useState<number>(20000); 
  const handleShipmentChange = (event: Event, newValue: number | number[]) => setMonthlyShipments(newValue as number);
  
  const discrepancyRate = 0.20; 
  const resolutionCostPerDispute = 53.50; 
  const legacyCostPerMonth = (monthlyShipments * discrepancyRate) * resolutionCostPerDispute;
  const annualLegacyCost = legacyCostPerMonth * 12;

  const ceruleaCostPerShipment = 0.15; 
  const annualCeruleaCost = monthlyShipments * ceruleaCostPerShipment * 12;
  const annualSavings = annualLegacyCost - annualCeruleaCost;

  const [activePillar, setActivePillar] = React.useState(SUPPLY_PILLARS[0]);

  return (
    <Box sx={{ bgcolor: 'background.default', overflowX: 'hidden', pb: 0 }}>
      
      {/* 1. THE HERO */}
      <Box sx={{ pt: { xs: 16, md: 24 }, pb: { xs: 12, md: 16 }, position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '500px', background: `radial-gradient(ellipse at top, ${pageAccent}15, transparent 70%)`, pointerEvents: 'none' }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 2, py: 1, borderRadius: 2, bgcolor: `${pageAccent}15`, border: `1px solid ${pageAccent}30`, mb: 4 }}>
              <LocalShippingOutlinedIcon sx={{ color: pageAccent, fontSize: 20 }} />
              <Typography sx={{ color: pageAccent, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                Supply Chain & Logistics
              </Typography>
            </Box>
            
            {/* Theme h1 color applied automatically */}
            <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '5rem' }, lineHeight: 1.05, letterSpacing: '-0.03em', mb: 4, mx: 'auto', maxWidth: 1000 }}>
              Synchronized global logistics.<br />
              <span style={{ color: theme.palette.text.secondary }}>Absolute provenance.</span>
            </Typography>
            
            {/* Theme secondary text color applied */}
            <Typography sx={{ color: 'text.secondary', fontSize: { xs: '1.1rem', md: '1.3rem' }, maxWidth: 850, lineHeight: 1.6, mb: 6, mx: 'auto', fontWeight: 400 }}>
              Cerulea provides the infrastructure to trace physical goods across borders, automate freight payments, and permanently eliminate invoice discrepancies across your entire vendor network.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
              <Button 
                href="/company/contact"
                variant="contained" 
                endIcon={<ArrowForwardIcon />} 
                sx={{ 
                  bgcolor: pageAccent, color: '#FFFFFF', px: 4, py: 2, fontSize: '1rem', borderRadius: 2,
                  boxShadow: `0 4px 14px ${pageAccent}50`,
                  '&:hover': { bgcolor: theme.palette.success.dark, transform: 'translateY(-2px)', boxShadow: `0 6px 20px ${pageAccent}60` },
                  transition: 'all 0.2s'
                }}
              >
                Contact Us
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
            {/* Example of one item using theme colors */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: pageAccent, fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>01.</Typography>
              <Typography variant="h3" sx={{ fontSize: '1.25rem', mb: 1 }}>Immutable Provenance</Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Once a transit update is permanently recorded, it cannot be altered. Vendors cannot quietly edit past shipping logs to cover up delays, temperature breaches, or cargo mishandling.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: pageAccent, fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>02.</Typography>
              <Typography variant="h3" sx={{ fontSize: '1.25rem', mb: 1 }}>Multi-Vendor Parity</Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Eliminate fragmented data silos. Manufacturers, freight carriers, and port authorities all read and write to the exact same unified ledger, ensuring perfect real-time data synchronization.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: pageAccent, fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>03.</Typography>
              <Typography variant="h3" sx={{ fontSize: '1.25rem', mb: 1 }}>Automated Escrow</Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Programmable smart contracts replace manual invoicing. Capital is held securely in escrow and released to suppliers the exact second physical delivery is verified by the network.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: pageAccent, fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>04.</Typography>
              <Typography variant="h3" sx={{ fontSize: '1.25rem', mb: 1 }}>Counterfeit Mitigation</Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Digital Product Passports provide a continuous, highly verifiable chain of custody from raw material extraction to final retail purchase, drastically reducing the risk of product forgery.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: pageAccent, fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>05.</Typography>
              <Typography variant="h3" sx={{ fontSize: '1.25rem', mb: 1 }}>IoT Telemetry Ingestion</Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Physical sensors feed location and environmental data directly into the execution layer. Smart contracts act autonomously on this telemetry without requiring manual human validation.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: pageAccent, fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>06.</Typography>
              <Typography variant="h3" sx={{ fontSize: '1.25rem', mb: 1 }}>Pre-Cleared Logistics</Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>By providing regulators with a highly verified cryptographic manifest, shipments can expedite manual border inspections and clear international customs seamlessly.</Typography>
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
                A single unified protocol capable of supporting global logistical networks. Select a specific operational segment below.
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 4, alignItems: 'flex-start' }}>
              <Box sx={{ width: { xs: '100%', lg: '380px' }, flexShrink: 0, maxHeight: 600, overflowY: 'auto', pr: 2, '&::-webkit-scrollbar': { width: '6px' }, '&::-webkit-scrollbar-track': { background: '#F1F5F9', borderRadius: '10px' }, '&::-webkit-scrollbar-thumb': { background: '#CBD5E1', borderRadius: '10px' } }}>
                <Stack spacing={1.5}>
                  {SUPPLY_PILLARS.map((pillar) => (
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
          
      {/* 4. THE RECONCILIATION ROI SIMULATOR */}
      <Container maxWidth="lg" sx={{ mb: 20 }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{ fontSize: '2.5rem', mb: 2, letterSpacing: '-0.02em' }}>Document Reconciliation Simulator</Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
              Discrepancies between carrier, warehouse, and supplier databases cause massive invoice disputes. Calculate your exact capital savings by moving to Cerulea's unified ledger.
            </Typography>
          </Box>

          <Box sx={{ p: { xs: 4, md: 6 }, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 8, alignItems: 'center' }}>
              <Box sx={{ flex: 1, width: '100%' }}>
                <Typography sx={{ color: 'text.primary', fontWeight: 600, mb: 1 }}>Monthly Freight Shipments</Typography>
                <Typography sx={{ color: pageAccent, fontSize: '3rem', fontWeight: 800, mb: 4 }}>{monthlyShipments.toLocaleString('en-US')}</Typography>
                
                <Slider
                  value={monthlyShipments} onChange={handleShipmentChange} min={1000} max={100000} step={1000}
                  sx={{ color: pageAccent, height: 8, '& .MuiSlider-thumb': { height: 24, width: 24, backgroundColor: '#fff', border: '2px solid currentColor' } }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', color: 'text.secondary', fontSize: '0.85rem', mt: 1 }}>
                  <Typography>1,000</Typography>
                  <Typography>100,000+</Typography>
                </Box>
              </Box>

              <Box sx={{ flex: 1, width: '100%' }}>
                <Stack spacing={3}>
                  <Box sx={{ p: 3, bgcolor: `${theme.palette.error.main}15`, border: `1px solid ${theme.palette.error.main}30`, borderRadius: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography sx={{ fontSize: '0.75rem', color: theme.palette.error.main, fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>ESTIMATED LEGACY COST</Typography>
                      <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary' }}>20% Exception Dispute Rate</Typography>
                    </Box>
                    <Typography sx={{ fontSize: '1.75rem', color: 'text.primary', fontWeight: 700 }}>${Math.round(annualLegacyCost).toLocaleString('en-US')}</Typography>
                  </Box>

                  <Box sx={{ p: 3, bgcolor: `${pageAccent}15`, border: `1px solid ${pageAccent}30`, borderRadius: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography sx={{ fontSize: '0.75rem', color: pageAccent, fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>CERULEA EXECUTION COST</Typography>
                      <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary' }}>Network IoT Anchoring</Typography>
                    </Box>
                    <Typography sx={{ fontSize: '1.75rem', color: 'text.primary', fontWeight: 700 }}>${Math.round(annualCeruleaCost).toLocaleString('en-US')}</Typography>
                  </Box>

                  <Box sx={{ p: 3, bgcolor: `${pageAccent}15`, border: `1px solid ${pageAccent}30`, borderRadius: 3, position: 'relative', overflow: 'hidden' }}>
                    <Box sx={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '6px', bgcolor: pageAccent }} />
                    <Box sx={{ pl: 2 }}>
                      <Typography sx={{ fontSize: '0.85rem', color: pageAccent, fontWeight: 700, mb: 1, letterSpacing: '0.05em' }}>TOTAL OVERHEAD SAVED ANNUALLY</Typography>
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
                The legacy calculation utilizes 2025 benchmarks from the Institute of Finance and Management (IOFM), which estimate that up to 20 percent of global freight invoices contain data exceptions. Resolving these discrepancies requires an average of <strong>$53.50 USD</strong> in human capital and administrative labor per disputed invoice. Executing the exact same transit updates via Cerulea incurs an estimated network fee of <strong>$0.15 USD</strong> per shipment. This fee, which is slightly higher than standard financial transfers, accounts for the additional computational gas required to anchor heavy, multi-point IoT payloads (location, temperature, timestamps) directly on-chain. Because the network forces all vendors to read and write to the exact same shared ledger, data mismatching is systematically prevented, dropping the dispute rate to zero.
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>

      {/* 5. SYSTEM ARCHITECTURE DIAGRAMS (TRUE FLOWCHARTS) */}
      <Box sx={{ bgcolor: 'background.paper', py: 16, borderTop: '1px solid', borderBottom: '1px solid', borderColor: 'divider', mb: 16 }}>
        <Container maxWidth="xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <Box sx={{ textAlign: 'center', mb: 10 }}>
              <Typography variant="h2" sx={{ fontSize: '2.5rem', mb: 2, letterSpacing: '-0.02em' }}>Network & Execution Architecture</Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
                Whether you are bridging legacy tracking databases or routing live IoT sensor data, Cerulea provides the exact infrastructure flow required.
              </Typography>
            </Box>

            <Stack spacing={10}>
              
              {/* DIAGRAM A: ENTERPRISE BRIDGING */}
              <Box>
                <Typography variant="h3" sx={{ fontSize: '1.25rem', mb: 1, textAlign: 'center' }}>Track A: Enterprise Database Bridging</Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', mb: 6, lineHeight: 1.6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
                  For global manufacturers connecting existing supply chain software. Legacy HTTP requests are translated into secure Web3 transactions without system overhauls.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2, position: 'relative' }}>
                  
                  {/* Node 1 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: 'background.default', border: '1px solid', borderColor: 'divider', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <DomainOutlinedIcon sx={{ color: 'text.secondary', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: 'text.primary', mb: 0.5 }}>Legacy Core</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>SAP / Oracle ERP</Typography>
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
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: 'background.default', border: `2px solid ${pageAccent}`, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: `0 4px 14px ${pageAccent}30` }}>
                      <DnsOutlinedIcon sx={{ color: pageAccent, fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: 'text.primary', mb: 0.5 }}>Cerulea Private Chains</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>Sovereign Consortium</Typography>
                  </Box>

                </Box>
              </Box>

              <Divider />

              {/* DIAGRAM B: NATIVE WEB3 */}
              <Box>
                <Typography variant="h3" sx={{ fontSize: '1.25rem', mb: 1, textAlign: 'center' }}>Track B: Native Logistics Telemetry</Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', mb: 6, lineHeight: 1.6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
                  For real-time physical tracking without intermediaries. Freight carriers can stream raw GPS coordinates and temperature readings directly from shipping containers into autonomous escrow contracts.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2, position: 'relative' }}>
                  
                  {/* Node 1 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: 'background.default', border: '1px solid', borderColor: 'divider', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <SensorsOutlinedIcon sx={{ color: 'text.secondary', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: 'text.primary', mb: 0.5 }}>Edge Hardware</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>IoT Sensors & Scanners</Typography>
                  </Box>

                  {/* Arrow 1 */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: 'text.secondary', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>MQTT PAYLOADS</Typography>
                    <ArrowForwardIcon sx={{ color: 'text.secondary', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>

                  {/* Node 2 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: `${theme.palette.primary.main}15`, border: `2px solid ${theme.palette.primary.main}`, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: `0 4px 14px ${theme.palette.primary.main}30` }}>
                      <HubOutlinedIcon sx={{ color: theme.palette.primary.main, fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: 'text.primary', mb: 0.5 }}>Decentralized Oracles</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>Data Ingestion Nodes</Typography>
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
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: 'text.primary', mb: 0.5 }}>Cerulea Public L1</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>Escrow & Logic Triggers</Typography>
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
              Cerulea provides dedicated infrastructure tailored for the distinct operational requirements of different supply chain participants.
            </Typography>
          </Box>

          <Stack spacing={4}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: `${pageAccent}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <DomainOutlinedIcon sx={{ fontSize: 40, color: pageAccent }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: 'text.primary', mb: 1 }}>Global Manufacturers & Retailers</Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Commercial enterprises utilize Cerulea to establish unalterable data parity across their disparate supplier networks, track raw material provenance, and automatically calculate Scope 3 carbon emissions without exposing proprietary factory data.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: '1px solid', borderColor: 'divider' }}>
                <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY LOGISTICS USE CASES</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: pageAccent }}/><Typography sx={{ fontSize: '0.9rem', color: 'text.primary', fontWeight: 600 }}>Supplier Reconciliation</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: pageAccent }}/><Typography sx={{ fontSize: '0.9rem', color: 'text.primary', fontWeight: 600 }}>Targeted Product Recalls</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: pageAccent }}/><Typography sx={{ fontSize: '0.9rem', color: 'text.primary', fontWeight: 600 }}>Scope 3 Auditing</Typography></Box>
                </Stack>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: `${pageAccent}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <SecurityOutlinedIcon sx={{ fontSize: 40, color: pageAccent }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: 'text.primary', mb: 1 }}>Customs & Port Authorities</Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Border regulators deploy Cerulea to monitor the flow of international cargo, instantly verify cryptographic shipping manifests, enforce tariff calculations automatically, and identify counterfeit or contraband goods with absolute certainty.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: '1px solid', borderColor: 'divider' }}>
                <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY LOGISTICS USE CASES</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: pageAccent }}/><Typography sx={{ fontSize: '0.9rem', color: 'text.primary', fontWeight: 600 }}>Border Manifest Clearing</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: pageAccent }}/><Typography sx={{ fontSize: '0.9rem', color: 'text.primary', fontWeight: 600 }}>Counterfeit Prevention</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: pageAccent }}/><Typography sx={{ fontSize: '0.9rem', color: 'text.primary', fontWeight: 600 }}>Automated Tariff Routing</Typography></Box>
                </Stack>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: `${pageAccent}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <CodeOutlinedIcon sx={{ fontSize: 40, color: pageAccent }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: 'text.primary', mb: 1 }}>Logistics Tech Developers</Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Forward-thinking engineers build next-generation freight and trade finance protocols on the high-throughput L1. They utilize Cerulea's visual Studio to guarantee absolute smart contract security without the vulnerabilities of writing raw Solidity.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: '1px solid', borderColor: 'divider' }}>
                <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY LOGISTICS USE CASES</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: pageAccent }}/><Typography sx={{ fontSize: '0.9rem', color: 'text.primary', fontWeight: 600 }}>Decentralized Load Boards</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: pageAccent }}/><Typography sx={{ fontSize: '0.9rem', color: 'text.primary', fontWeight: 600 }}>DeFi Trade Finance</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: pageAccent }}/><Typography sx={{ fontSize: '0.9rem', color: 'text.primary', fontWeight: 600 }}>IoT Data Marketplaces</Typography></Box>
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
            <Typography variant="h2" sx={{ fontSize: '2.5rem', mb: 2, letterSpacing: '-0.02em' }}>The Logistics Technology Stack</Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', maxWidth: 700, mx: 'auto', textAlign: 'justify' }}>
              We do not sell isolated smart contracts. We provide a vertically integrated platform specifically mapped to the strict requirements of global supply chains. It is architected to provide a standardized, highly secure pathway for migrating legacy transit data into programmable Web3 execution environments.
            </Typography>
          </Box>

          <Box sx={{ position: 'relative' }}>
            <Box sx={{ position: 'absolute', left: 24, top: 20, bottom: 20, width: '2px', bgcolor: `${pageAccent}30`, display: { xs: 'none', md: 'block' } }} />

            <Stack spacing={6}>
              {/* Layer 1 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: 'background.default', border: `2px solid ${pageAccent}`, display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: `0 4px 14px ${pageAccent}30`, mr: 4 }}>
                  <DnsOutlinedIcon sx={{ color: pageAccent, fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: pageAccent, fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 01: TRANSIT NETWORKS</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: 'text.primary', mb: 1 }}>Hybrid Logistics Ledgers</Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Deploy an isolated Private Subnet strictly for a specific vendor consortium, or launch directly onto the high-throughput Public L1 to track global open-market commodity movement.
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
                    Our core engine translates the routing rules and escrow logic you design in Cerulea Studio into highly optimized WebAssembly (WASM) binaries, ensuring flawless execution on the network.
                  </Typography>
                </Box>
              </Box>

              {/* Layer 3 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: 'background.default', border: `2px solid ${pageAccent}`, display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: `0 4px 14px ${pageAccent}30`, mr: 4 }}>
                  <QrCodeScannerOutlinedIcon sx={{ color: pageAccent, fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: pageAccent, fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 03: PRODUCT PASSPORTS</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: 'text.primary', mb: 1 }}>Verifiable Data Models</Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Use Cerulea Studio to visually map physical shipping containers, raw materials, and digital bills of lading into secure smart contracts without writing low-level Solidity code.
                  </Typography>
                </Box>
              </Box>

              {/* Layer 4 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: 'background.default', border: `2px solid ${pageAccent}`, display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: `0 4px 14px ${pageAccent}30`, mr: 4 }}>
                  <VpnKeyOutlinedIcon sx={{ color: pageAccent, fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: pageAccent, fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 04: ESCROW SECURITY</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: 'text.primary', mb: 1 }}>Granular Governance</Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Protect trade finance capital. Enforce strict cryptographic signatures from authorized customs officials and warehouse managers before any escrowed payment is released to suppliers.
                  </Typography>
                </Box>
              </Box>

              {/* Layer 5 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: 'background.default', border: `2px solid ${pageAccent}`, display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: `0 4px 14px ${pageAccent}30`, mr: 4 }}>
                  <ApiOutlinedIcon sx={{ color: pageAccent, fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: pageAccent, fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 05: ERP SYSTEM BRIDGE</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: 'text.primary', mb: 1 }}>The Cerulea API</Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Interact with the entire blockchain ecosystem instantly via auto-generated REST endpoints and event-driven webhooks, bridging Web2 legacy logistics systems directly into Web3.
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
              <Typography variant="h2" sx={{ fontSize: '2.5rem', mb: 2, letterSpacing: '-0.02em' }}>Accelerated Time-to-Value</Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
                Building custom logistics blockchains from scratch requires massive external audit budgets and hardware integration delays. Cerulea visualizes the process, cutting deployment times significantly.
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 4, alignItems: 'stretch', pb: 12 }}>
              
              {/* The Traditional Way */}
              <Box sx={{ flex: 1, p: { xs: 4, md: 6 }, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 4, position: 'relative', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, bgcolor: theme.palette.error.main }} />
                <Typography sx={{ color: theme.palette.error.main, fontWeight: 700, letterSpacing: '0.05em', mb: 1, fontSize: '0.85rem' }}>TRADITIONAL BLOCKCHAIN DEVELOPMENT</Typography>
                <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, color: 'text.primary', mb: 5 }}>18 to 24 Months</Typography>
                
                <Stack spacing={4}>
                  <Box>
                    <Typography sx={{ color: 'text.primary', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 1: Architecture & Logic (Months 1 to 6)</Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Negotiating data standards across dozens of independent suppliers and writing custom state machines to track physical goods from scratch.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: 'text.primary', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 2: Hardware Integration (Months 7 to 12)</Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Building custom middleware to successfully translate raw physical sensor data and RFID scans into blockchain-compatible payloads.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: 'text.primary', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 3: Security Audits (Months 13 to 16)</Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Paying external firms to find code vulnerabilities in the custom escrow contracts before handling live, multi-million dollar trade finance.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: 'text.primary', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 4: Multi-Vendor Testing (Months 17 to 24)</Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Enduring a massive rollout phase to ensure all independent supplier databases synchronize correctly with the ledger without fatal errors.</Typography>
                  </Box>
                </Stack>
              </Box>

              {/* The Cerulea Way */}
              <Box sx={{ flex: 1, p: { xs: 4, md: 6 }, bgcolor: `${pageAccent}15`, border: `1px solid ${pageAccent}30`, borderRadius: 4, position: 'relative', overflow: 'hidden', boxShadow: `0 10px 40px ${pageAccent}15` }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, bgcolor: pageAccent }} />
                <Typography sx={{ color: pageAccent, fontWeight: 700, letterSpacing: '0.05em', mb: 1, fontSize: '0.85rem' }}>CERULEA PLATFORM DEPLOYMENT</Typography>
                <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, color: 'text.primary', mb: 5 }}>10 to 12 Weeks</Typography>
                
                <Stack spacing={4}>
                  <Box>
                    <Typography sx={{ color: 'text.primary', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 1: Visual Modeling (Weeks 1 to 3)</Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Use Cerulea Studio to visually map physical supply routes, vendor permissions, and automated escrow triggers without writing any code.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: 'text.primary', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 2: Subnet Provisioning (Weeks 4 to 6)</Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Deploy a Sovereign Private Chain and issue standardized validator nodes directly to your primary suppliers from the control dashboard.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: 'text.primary', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 3: Edge Device Hookup (Weeks 7 to 9)</Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Connect existing warehouse scanners and IoT hardware directly to auto-generated Cerulea REST APIs. No custom middleware is required.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: 'text.primary', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 4: Live Transit Execution (Weeks 10 to 12)</Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Bridge the finalized logic to the live network and begin tracking real physical cargo with complete architectural confidence.</Typography>
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