'use client';

import * as React from 'react';
import { Box, Container, Typography, Grid, Stack, Button, Divider, Slider } from '@mui/material';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/ManageSearch';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import DomainOutlinedIcon from '@mui/icons-material/DomainOutlined';
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import QrCodeScannerOutlinedIcon from '@mui/icons-material/QrCodeScannerOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DataObjectOutlinedIcon from '@mui/icons-material/DataObjectOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined';

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

const LIFECYCLE_STEPS = [
  {
    id: 'batching',
    title: '1. Batch Initialization',
    description: 'A manufacturer creates a digital twin for a physical production batch. Global identifiers like GTIN or serial numbers are cryptographically anchored to a Digital Product Passport.',
    terminal: [
      '[SYS] Initializing Provenance Engine...',
      '[CMD] CreateBatch { id: "BCH_992", origin: "Factory_7A", qty: 5000 }',
      '[AUTH] Generating unique SHA-256 batch fingerprint...',
      '[OK] Batch initialized and anchored to block 1955021.'
    ]
  },
  {
    id: 'custody',
    title: '2. Custody Handover',
    description: 'As goods move from the factory to a logistics provider, a multi-signature transaction reassigns the "Responsible Wallet." Both parties must sign to confirm the physical transfer.',
    terminal: [
      '[SYS] Transfer request detected from Factory_7A...',
      '[CMD] ReassignCustody(BCH_992, Logistics_Partner_Blue)',
      '[AUTH] Awaiting Logistics_Partner_Blue digital signature...',
      '[OK] Custody reassigned. Chronological handoff log updated.'
    ]
  },
  {
    id: 'environment',
    title: '3. Condition Validation',
    description: 'IoT sensors on shipping containers stream telemetry to the ledger. If temperature or humidity breaches safe limits, the batch is automatically flagged as non-compliant.',
    terminal: [
      '[SYS] Ingesting IoT telemetry for Batch BCH_992...',
      '[CMD] telemetryCheck(temp: -18.2C, threshold: < -15C)',
      '[SYS] Condition verified. Integrity remains intact.',
      '[OK] Environmental state valid. Proceeding to port entry.'
    ]
  },
  {
    id: 'receipt',
    title: '4. Final Delivery Audit',
    description: 'The retailer scans the received goods. The smart contract executes a final state change, releasing payment to the manufacturer and providing a full audit trail to the consumer.',
    terminal: [
      '[SYS] Final destination scan detected: Retail_Node_14...',
      '[CMD] Execute finalizeBatch(BCH_992)',
      '[SYS] Reconciling 14 independent custody signatures...',
      '[OK] Provenance chain complete. Releasing automated escrow.'
    ]
  }
];

const ANATOMY_LAYERS = [
  {
    id: 'registry',
    icon: <Inventory2OutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'LAYER 01: BATCH REGISTRY',
    name: 'The Asset Passport',
    role: 'Identity & Metadata',
    desc: 'The foundational layer that holds the unique identifier for every physical item or batch. It acts as a Digital Product Passport, storing immutable links to manufacturing data, raw material origins, and certifications.',
    code: `contract BatchRegistry {\n  struct Batch {\n    address manufacturer;\n    bytes32 dataHash;\n    uint256 createdAt;\n    bool isCommitted;\n  }\n  \n  mapping(bytes32 => Batch) public registry;\n\n  function initializeBatch(bytes32 id, bytes32 metadata) external {\n    registry[id] = Batch(msg.sender, metadata, block.timestamp, true);\n  }\n}`,
    simAction: 'Simulate Batch Creation',
    simLogs: [
      "> Initializing Digital Product Passport...",
      "> Hashing bill of materials (BOM) payload...",
      "> Locking manufacturer identity to batch 0x3d...4f...",
      "> Writing metadata pointer to L1 storage...",
      "> [SUCCESS] Batch permanently registered on-chain."
    ]
  },
  {
    id: 'custody',
    icon: <QrCodeScannerOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'LAYER 02: CUSTODY HOOK',
    name: 'The Transfer Interceptor',
    role: 'Multi-Sig Handovers',
    desc: 'Manages the change of ownership. It requires an atomic handshake between the current holder and the next logistics node. This prevents "phantom" shipments where goods are moved without a digital record.',
    code: `function transferCustody(bytes32 batchId, address nextHolder) external {\n  require(currentHolder[batchId] == msg.sender, "Not current holder");\n  pendingTransfers[batchId] = nextHolder;\n}\n\nfunction acceptCustody(bytes32 batchId) external {\n  require(pendingTransfers[batchId] == msg.sender, "Unauthorized");\n  currentHolder[batchId] = msg.sender;\n}`,
    simAction: 'Simulate Custody Swap',
    simLogs: [
      "> Sender (Manufacturer) initiating handoff...",
      "> Receiver (Carrier) scanning QR code identifier...",
      "> Requesting cryptographic signature from Carrier wallet...",
      "> Validating dual-party signature agreement...",
      "> [SUCCESS] Responsible party updated in ledger state."
    ]
  },
  {
    id: 'telemetry',
    icon: <SyncAltOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'LAYER 03: EVENT EMITTER',
    name: 'The State Logger',
    role: 'Chronological Telemetry',
    desc: 'A specialized engine for append-only status updates. It records real-time IoT events (e.g., "Left Port", "Customs Cleared", "Temperature Spike") without modifying the original batch identity.',
    code: `contract StateLogger {\n  event StateUpdate(bytes32 indexed batchId, string status, uint256 time);\n\n  function logEvent(bytes32 batchId, string calldata status) external onlyAuthorized {\n    emit StateUpdate(batchId, status, block.timestamp);\n    ledger.updateLatestState(batchId, status);\n  }\n}`,
    simAction: 'Simulate Event Logging',
    simLogs: [
      "> Ingesting sensor payload: GPS_Lat: 40.7, Lon: -74.0...",
      "> Mapping 'ARRIVAL_AT_PORT' status to batch 0x3d...4f...",
      "> Generating network-wide event broadcast...",
      "> Updating chronological trace history...",
      "> [SUCCESS] Event permanently anchored with block time."
    ]
  },
  {
    id: 'compliance',
    icon: <SecurityOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'LAYER 04: AUDIT LOGIC',
    name: 'The Compliance Verifier',
    role: 'Automated Certification',
    desc: 'The logic layer that allows regulators or customers to verify the entire history. It mathematically reconstructs the chain of custody to prove there are zero gaps in the data from factory to consumer.',
    code: `function verifyProvenance(bytes32 batchId) external view returns (address[] memory) {\n  return chainOfCustody[batchId];\n}\n\nfunction checkIntegrity(bytes32 batchId) external view returns (bool) {\n  return _validateFullSignatureChain(batchId);\n}`,
    simAction: 'Simulate Integrity Audit',
    simLogs: [
      "> Regulator initiating deep-dive audit of Batch BCH_992...",
      "> Reconstructing 14-point signature chain...",
      "> Verifying every block hash back to batch origin...",
      "> Checking for data tampering or missing handoffs...",
      "> [SUCCESS] Provenance chain 100% mathematically intact."
    ]
  }
];

export default function TraceabilityUseCasePage() {
  const [activeStep, setActiveStep] = React.useState(LIFECYCLE_STEPS[0]);
  
  // Smart Contract Anatomy State
  const [isDeconstructed, setIsDeconstructed] = React.useState(false);
  const [activeLayer, setActiveLayer] = React.useState(ANATOMY_LAYERS[0]);
  const [activeTab, setActiveTab] = React.useState<'architecture' | 'code' | 'simulate'>('architecture');
  const [simLogIndex, setSimLogIndex] = React.useState(0);
  const [isSimulating, setIsSimulating] = React.useState(false);
  
  const [complexity, setComplexity] = React.useState<number>(50); 
  const handleComplexityChange = (event: Event, newValue: number | number[]) => setComplexity(newValue as number);
  
  // Timeline Logic
  const legacyMonths = Math.round(6 + (complexity * 0.15));
  const ceruleaWeeks = Math.round(2 + (complexity * 0.05));

  const runSimulation = () => {
    setIsSimulating(true);
    setSimLogIndex(0);
    let currentLog = 0;
    const maxLogs = activeLayer.simLogs.length;
    
    const interval = setInterval(() => {
      currentLog++;
      setSimLogIndex(currentLog);
      if (currentLog >= maxLogs) {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 800);
  };

  React.useEffect(() => {
    setSimLogIndex(0);
    setIsSimulating(false);
  }, [activeLayer]);

  return (
    <Box sx={{ bgcolor: '#FAFAFA', color: '#172554', overflowX: 'hidden', pb: 0 }}>
      
      {/* 1. THE ACTION-ORIENTED HERO */}
      <Box sx={{ pt: { xs: 16, md: 24 }, pb: { xs: 12, md: 16 }, position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '500px', background: 'radial-gradient(ellipse at top, rgba(101, 163, 13, 0.1), transparent 70%)', pointerEvents: 'none' }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 2, py: 1, borderRadius: 2, bgcolor: 'rgba(101, 163, 13, 0.1)', border: '1px solid rgba(101, 163, 13, 0.2)', mb: 4 }}>
              <SearchIcon sx={{ color: '#65a30d', fontSize: 20 }} />
              <Typography sx={{ color: '#65a30d', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                Platform Use Case
              </Typography>
            </Box>
            
            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '3rem', md: '5rem' }, lineHeight: 1.05, letterSpacing: '-0.03em', mb: 4, mx: 'auto', maxWidth: 1000, color: '#172554' }}>
              Trace every item.<br />
              <span style={{ color: '#64748B' }}>Eradicate supply chain gaps.</span>
            </Typography>
            
            <Typography sx={{ color: '#475569', fontSize: { xs: '1.1rem', md: '1.3rem' }, maxWidth: 850, lineHeight: 1.6, mb: 6, mx: 'auto', fontWeight: 400 }}>
              Deploy end to end tracking networks with cryptographic custody handoffs, real time IoT monitoring, and unalterable Digital Product Passports.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
              <Button 
                href="/company/contact"
                variant="contained" 
                endIcon={<ArrowForwardIcon />} 
                sx={{ 
                  bgcolor: '#65a30d', color: '#FFFFFF', px: 4, py: 2, fontSize: '1rem', fontWeight: 700, borderRadius: 2,
                  boxShadow: '0 4px 14px rgba(101, 163, 13, 0.3)',
                  '&:hover': { bgcolor: '#4d7c0f', transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(101, 163, 13, 0.4)' },
                  transition: 'all 0.2s'
                }}
              >
                Deploy Traceability Networks
              </Button>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* 2. THE MECHANICS */}
      <Container maxWidth="lg" sx={{ mb: 20 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 10, letterSpacing: '-0.02em', textAlign: 'center', color: '#172554' }}>
            The Execution Mechanics
          </Typography>
          
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: { xs: 6, lg: 8 } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#65a30d', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>01.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Digital Product Passports</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Every physical asset holds a unique digital identity on the ledger. This passport aggregates all historical data, from raw material sourcing to final retail delivery, in one verifiable thread.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#65a30d', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>02.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Multi-Party Attestation</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Custody handovers require dual-party cryptographic signatures. This ensures that the digital ledger and the physical movement of goods are always perfectly synchronized across independent vendors.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#65a30d', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>03.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>IoT Condition Monitoring</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Integrate hardware sensors directly into the smart contract. If temperature or shock thresholds are breached during transit, the contract automatically triggers a compliance flag or insurance claim.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#65a30d', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>04.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Tokenized Inventory</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Convert physical shipments into liquid digital assets. This allows for automated invoice factoring and trade finance, where capital is released the moment a digital custody scan is verified.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#65a30d', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>05.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Anti-Counterfeit Proofs</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Blockchain provenance eliminates the possibility of cloning serial numbers. Each digital ID is mathematically unique and tied to a verified manufacturer wallet, exposing fakes instantly.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#65a30d', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>06.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Consumer Transparency</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Grant end-users absolute visibility. Consumers scan a product to view its entire journey, from ethical sourcing certifications to the carbon footprint generated during shipping.</Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>

      {/* 3. THE LIFECYCLE STATE MACHINE */}
      <Box sx={{ bgcolor: '#FFFFFF', py: 16, borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', mb: 16 }}>
        <Container maxWidth="xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <Box sx={{ textAlign: 'center', mb: 10 }}>
              <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>The Traceability Lifecycle</Typography>
              <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
                Follow the exact cryptographic progression of a physical product from the point of origin to final delivery.
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 6, alignItems: 'stretch' }}>
              <Box sx={{ width: { xs: '100%', lg: '45%' }, flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Stack spacing={2}>
                  {LIFECYCLE_STEPS.map((step) => (
                    <Box 
                      key={step.id}
                      onClick={() => setActiveStep(step)}
                      sx={{ 
                        p: 3, borderRadius: 3, cursor: 'pointer', border: '1px solid',
                        borderColor: activeStep.id === step.id ? 'rgba(101, 163, 13, 0.4)' : '#E2E8F0',
                        bgcolor: activeStep.id === step.id ? 'rgba(101, 163, 13, 0.05)' : '#FFFFFF',
                        transition: 'all 0.2s ease',
                        '&:hover': { bgcolor: activeStep.id === step.id ? 'rgba(101, 163, 13, 0.08)' : '#F8FAFC' }
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                        <CheckCircleOutlineOutlinedIcon sx={{ color: activeStep.id === step.id ? '#65a30d' : '#CBD5E1', fontSize: 24 }} />
                        <Typography sx={{ fontSize: '1.15rem', fontWeight: 800, color: activeStep.id === step.id ? '#172554' : '#64748B' }}>{step.title}</Typography>
                      </Box>
                      <Typography sx={{ pl: 5, color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, display: activeStep.id === step.id ? 'block' : 'none' }}>{step.description}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>

              <Box sx={{ flexGrow: 1, minWidth: 0, bgcolor: '#0f172a', borderRadius: 4, p: { xs: 4, md: 6 }, boxShadow: '0 20px 40px rgba(0,0,0,0.1)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', gap: 1, mb: 4, borderBottom: '1px solid #1e293b', pb: 2 }}>
                  <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ef4444' }} />
                  <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#f59e0b' }} />
                  <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#10b981' }} />
                  <Typography sx={{ color: '#64748B', fontSize: '0.75rem', ml: 2, fontFamily: 'monospace' }}>cerulea_provenance_engine.log</Typography>
                </Box>
                <AnimatePresence mode="wait">
                  <motion.div key={activeStep.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }} style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Stack spacing={3}>
                      {activeStep.terminal.map((log, index) => (
                        <Typography key={index} sx={{ fontFamily: 'monospace', fontSize: '1rem', color: log.includes('[OK]') ? '#10b981' : log.includes('[CMD]') ? '#38bdf8' : log.includes('[AUTH]') ? '#f59e0b' : '#e2e8f0' }}>{log}</Typography>
                      ))}
                    </Stack>
                  </motion.div>
                </AnimatePresence>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* 4. SMART CONTRACT ANATOMY */}
      
      <Container maxWidth="xl" sx={{ mb: 20 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>Smart Contract Anatomy</Typography>
            <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 800, mx: 'auto', mb: 6 }}>
              Cerulea manages global logistics through highly specialized, modular smart contracts. This layered approach ensures absolute provenance while integrating real-time physical sensor data.
            </Typography>
            {!isDeconstructed && (
              <Button onClick={() => setIsDeconstructed(true)} variant="outlined" endIcon={<LayersOutlinedIcon />} sx={{ borderColor: '#65a30d', color: '#65a30d', px: 4, py: 1.5, fontSize: '1rem', fontWeight: 700, borderRadius: 2, '&:hover': { bgcolor: 'rgba(101, 163, 13, 0.05)', borderColor: '#4d7c0f' } }}>Deconstruct Architecture</Button>
            )}
          </Box>
          <AnimatePresence>
            {isDeconstructed && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.5, ease: "easeInOut" }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 4, alignItems: 'stretch' }}>
                  <Box sx={{ width: { xs: '100%', lg: '350px' }, flexShrink: 0 }}>
                    <Stack spacing={2} sx={{ position: 'relative' }}>
                      <Box sx={{ position: 'absolute', top: 30, bottom: 30, left: 34, width: '2px', bgcolor: 'rgba(101, 163, 13, 0.2)', zIndex: 0 }} />
                      {ANATOMY_LAYERS.map((layer, index) => (
                        <motion.div key={layer.id} initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: index * 0.15, duration: 0.4 }}>
                          <Box onClick={() => setActiveLayer(layer)} sx={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 3, p: 2.5, bgcolor: activeLayer.id === layer.id ? '#FFFFFF' : '#FAFAFA', border: '1px solid', borderColor: activeLayer.id === layer.id ? '#65a30d' : '#E2E8F0', borderRadius: 3, cursor: 'pointer', transition: 'all 0.2s ease', boxShadow: activeLayer.id === layer.id ? '0 10px 30px rgba(101, 163, 13, 0.15)' : 'none', transform: activeLayer.id === layer.id ? 'translateX(10px)' : 'none' }}>
                            <Box sx={{ width: 48, height: 48, borderRadius: 2, bgcolor: activeLayer.id === layer.id ? 'rgba(101, 163, 13, 0.1)' : '#FFFFFF', border: '1px solid', borderColor: activeLayer.id === layer.id ? 'rgba(101, 163, 13, 0.3)' : '#E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Box sx={{ color: activeLayer.id === layer.id ? '#65a30d' : '#94A3B8', display: 'flex' }}>{layer.icon}</Box></Box>
                            <Box>
                              <Typography sx={{ color: activeLayer.id === layer.id ? '#65a30d' : '#64748B', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', mb: 0.5, textTransform: 'uppercase' }}>{layer.role}</Typography>
                              <Typography sx={{ fontSize: '1.05rem', fontWeight: 700, color: activeLayer.id === layer.id ? '#172554' : '#475569' }}>{layer.name}</Typography>
                            </Box>
                          </Box>
                        </motion.div>
                      ))}
                    </Stack>
                  </Box>
                  <Box sx={{ flexGrow: 1, minWidth: 0, bgcolor: '#FFFFFF', borderRadius: 4, border: '1px solid #E2E8F0', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    <Box sx={{ display: 'flex', borderBottom: '1px solid #E2E8F0', bgcolor: '#F8FAFC', overflowX: 'auto' }}>
                      {['architecture', 'code', 'simulate'].map((tab) => (
                        <Box key={tab} onClick={() => setActiveTab(tab as any)} sx={{ px: 4, py: 2.5, cursor: 'pointer', borderBottom: '2px solid', borderColor: activeTab === tab ? '#65a30d' : 'transparent', bgcolor: activeTab === tab ? '#FFFFFF' : 'transparent', color: activeTab === tab ? '#65a30d' : '#64748B', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', transition: 'all 0.2s', whiteSpace: 'nowrap' }}>{tab}</Box>
                      ))}
                    </Box>
                    <Box sx={{ p: { xs: 4, md: 5 }, flexGrow: 1, position: 'relative' }}>
                      <AnimatePresence mode="wait">
                        <motion.div key={`${activeLayer.id}-${activeTab}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                          {activeTab === 'architecture' && (
                            <Box>
                              <Typography sx={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', mb: 2 }}>// COMPONENT INSPECTOR</Typography>
                              <Typography sx={{ color: '#172554', fontSize: '1.75rem', fontWeight: 800, mb: 3 }}>{activeLayer.name}</Typography>
                              <Typography sx={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7, textAlign: 'justify', mb: 4 }}>{activeLayer.desc}</Typography>
                              <Box sx={{ p: 3, bgcolor: 'rgba(101, 163, 13, 0.05)', borderRadius: 2, border: '1px solid rgba(101, 163, 13, 0.2)' }}>
                                <Typography sx={{ color: '#65a30d', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', mb: 1 }}>PLATFORM FUNCTION</Typography>
                                <Typography sx={{ color: '#172554', fontSize: '0.95rem', fontWeight: 600 }}>{activeLayer.role}</Typography>
                              </Box>
                            </Box>
                          )}
                          {activeTab === 'code' && (
                            <Box sx={{ bgcolor: '#0f172a', borderRadius: 2, p: 3, overflowX: 'auto' }}>
                              <Typography component="pre" sx={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>{activeLayer.code}</Typography>
                            </Box>
                          )}
                          {activeTab === 'simulate' && (
                            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                                <Typography sx={{ color: '#172554', fontSize: '1.25rem', fontWeight: 700 }}>Interactive Execution</Typography>
                                <Button variant="contained" onClick={runSimulation} disabled={isSimulating} startIcon={<PlayArrowIcon />} sx={{ bgcolor: '#10b981', '&:hover': { bgcolor: '#059669' }, fontWeight: 700, boxShadow: 'none' }}>{activeLayer.simAction}</Button>
                              </Box>
                              <Box sx={{ bgcolor: '#0f172a', borderRadius: 2, p: 3, flexGrow: 1, minHeight: 200 }}>
                                <Stack spacing={1.5}>
                                  {activeLayer.simLogs.slice(0, simLogIndex).map((log, idx) => (
                                    <Typography key={idx} sx={{ color: log.includes('[SUCCESS]') || log.includes('[PASS]') ? '#10b981' : '#38bdf8', fontFamily: 'monospace', fontSize: '0.9rem' }}>{log}</Typography>
                                  ))}
                                  {isSimulating && simLogIndex < activeLayer.simLogs.length && (
                                    <Typography sx={{ color: '#64748B', fontFamily: 'monospace', fontSize: '0.9rem', animation: 'pulse 1s infinite' }}>_ processing...</Typography>
                                  )}
                                </Stack>
                              </Box>
                            </Box>
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Container>

      {/* 5. CROSS-INDUSTRY APPLICABILITY */}
      <Container maxWidth="lg" sx={{ mb: 20 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>Applicability Across the Spectrum</Typography>
            <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 700, mx: 'auto' }}>
              Supply Chain Traceability is a horizontal capability. Here is how different sectors utilize this execution model to un-silo provenance data.
            </Typography>
          </Box>
          <Stack spacing={4}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(101, 163, 13, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><LocalShippingOutlinedIcon sx={{ fontSize: 40, color: '#65a30d' }} /></Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>Pharma & Cold-Chain</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>Track vaccine and medication shipments across global corridors. Smart contracts ensure that life-saving drugs never leave their required temperature bounds, automatically invalidating the batch if compliance fails.</Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY ASSET TYPES</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#65a30d' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Biologics & Vaccines</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#65a30d' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Clinical Trial Samples</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#65a30d' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Serial Number Tracking</Typography></Box>
                </Stack>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(101, 163, 13, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><DomainOutlinedIcon sx={{ fontSize: 40, color: '#65a30d' }} /></Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>Luxury & High-Value Goods</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>Eradicate the multi-billion dollar counterfeit market. Brands issue unique Digital Twin NFTs for watches, handbags, and fine art, allowing secondary market buyers to verify authenticity with a single scan.</Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY ASSET TYPES</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#65a30d' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Luxury Watches</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#65a30d' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Designer Apparel</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#65a30d' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Memorabilia</Typography></Box>
                </Stack>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(101, 163, 13, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><AgricultureOutlinedIcon sx={{ fontSize: 40, color: '#65a30d' }} /></Box>
              <Box flexGrow={1}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>Food & Agriculture</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>Provide absolute farm-to-table visibility. Retailers scan agricultural yields to verify organic certifications, fair-trade compliance, and precise harvest locations anchored to the ledger at source.</Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY ASSET TYPES</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#65a30d' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Organic Produce</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#65a30d' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Livestock Tracking</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#65a30d' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Seafood Handovers</Typography></Box>
                </Stack>
              </Box>
            </Box>
          </Stack>
        </motion.div>
      </Container>

      {/* 6. SYSTEM ARCHITECTURE DIAGRAMS */}
      
      <Box sx={{ bgcolor: '#FFFFFF', py: 16, borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', mb: 16 }}>
        <Container maxWidth="xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <Box sx={{ textAlign: 'center', mb: 10 }}>
              <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>Network & Execution Architecture</Typography>
              <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
                Whether you are bridging legacy ERP systems or routing native QR-code signatures, Cerulea provides the exact infrastructure routing required.
              </Typography>
            </Box>
            <Stack spacing={10}>
              <Box>
                <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1, textAlign: 'center' }}>Track A: Enterprise Supply Chain Bridging</Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', mb: 6, lineHeight: 1.6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>For institutional logistics firms. Legacy HTTP requests from existing ERP databases are translated into secure provenance hashes automatically.</Typography>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2, position: 'relative' }}>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '1px solid #CBD5E1', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}><DomainOutlinedIcon sx={{ color: '#64748B', fontSize: 32 }} /></Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Legacy Logistics Core</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>SAP / Oracle WMS</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#64748B', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>HTTPS / REST</Typography>
                    <ArrowForwardIcon sx={{ color: '#64748B', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: 'rgba(101, 163, 13, 0.05)', border: '2px solid #65a30d', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(101, 163, 13, 0.15)' }}><ApiOutlinedIcon sx={{ color: '#65a30d', fontSize: 32 }} /></Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Cerulea API Gateway</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Data Hashing & Verification</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#65a30d', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>WASM COMPILATION</Typography>
                    <ArrowForwardIcon sx={{ color: '#65a30d', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '2px solid #059669', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(5, 150, 105, 0.15)' }}><DnsOutlinedIcon sx={{ color: '#059669', fontSize: 32 }} /></Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Cerulea Private Chain</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Consortium Custody State</Typography>
                  </Box>
                </Box>
              </Box>
              <Divider sx={{ borderColor: '#E2E8F0' }} />
              <Box>
                <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1, textAlign: 'center' }}>Track B: Native Peer-to-Peer Traceability</Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', mb: 6, lineHeight: 1.6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>For decentralized cooperatives and D2C brands. Bypass legacy middleware and route mobile wallet signatures directly to the public execution layer.</Typography>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2, position: 'relative' }}>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '1px solid #CBD5E1', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}><TerminalOutlinedIcon sx={{ color: '#64748B', fontSize: 32 }} /></Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Operator Mobile App</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>React DApp & QR Scanners</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#64748B', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>WALLET SIGNATURE</Typography>
                    <ArrowForwardIcon sx={{ color: '#64748B', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: 'rgba(37, 99, 235, 0.05)', border: '2px solid #2563eb', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(37, 99, 235, 0.15)' }}><AccountTreeOutlinedIcon sx={{ color: '#2563eb', fontSize: 32 }} /></Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Decentralized Oracles</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Data Consensus Nodes</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#2563eb', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>STATE EXECUTION</Typography>
                    <ArrowForwardIcon sx={{ color: '#2563eb', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '2px solid #9333ea', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(147, 51, 234, 0.15)' }}><MemoryOutlinedIcon sx={{ color: '#9333ea', fontSize: 32 }} /></Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Cerulea Public L1</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Final Settlement Ledger</Typography>
                  </Box>
                </Box>
              </Box>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* 7. BUILD VS PLATFORM TIMELINE SIMULATOR */}
      <Container maxWidth="lg" sx={{ mb: 20 }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>Accelerated Time-to-Market Simulator</Typography>
            <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>Building custom provenance indexers and multi-sig handover protocols from scratch requires massive engineering overhead. Calculate your exact deployment speed using Cerulea.</Typography>
          </Box>
          <Box sx={{ p: { xs: 4, md: 6 }, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
            <Grid container spacing={8} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography sx={{ color: '#172554', fontWeight: 600, mb: 1 }}>Required Logistics Nodes & Handover Rules</Typography>
                <Typography sx={{ color: '#65a30d', fontSize: '3rem', fontWeight: 800, mb: 4 }}>{complexity} Rules</Typography>
                <Slider value={complexity} onChange={handleComplexityChange} min={10} max={200} step={10} sx={{ color: '#65a30d', height: 8, '& .MuiSlider-thumb': { height: 24, width: 24, backgroundColor: '#fff', border: '2px solid currentColor' } }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', color: '#64748B', fontSize: '0.85rem', mt: 1 }}><Typography>Simple (10)</Typography><Typography>Complex (200)</Typography></Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Stack spacing={3}>
                  <Box sx={{ p: 3, bgcolor: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box><Typography sx={{ fontSize: '0.75rem', color: '#dc2626', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>TRADITIONAL DEPLOYMENT</Typography><Typography sx={{ fontSize: '0.8rem', color: '#475569' }}>Solidity Code & Third-Party Audits</Typography></Box>
                    <Typography sx={{ fontSize: '1.75rem', color: '#172554', fontWeight: 700 }}>{legacyMonths} Months</Typography>
                  </Box>
                  <Box sx={{ p: 3, bgcolor: 'rgba(101, 163, 13, 0.05)', border: '1px solid rgba(101, 163, 13, 0.2)', borderRadius: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box><Typography sx={{ fontSize: '0.75rem', color: '#65a30d', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>CERULEA EXECUTION</Typography><Typography sx={{ fontSize: '0.8rem', color: '#475569' }}>Visual Studio & Auto-Compilation</Typography></Box>
                    <Typography sx={{ fontSize: '1.75rem', color: '#172554', fontWeight: 700 }}>{ceruleaWeeks} Weeks</Typography>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
            <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid #E2E8F0' }}>
              <Typography sx={{ fontSize: '0.8rem', color: '#172554', fontWeight: 700, mb: 1, letterSpacing: '0.05em' }}>METHODOLOGY</Typography>
              <Typography sx={{ fontSize: '0.8rem', color: '#475569', lineHeight: 1.6, textAlign: 'justify' }}>The legacy development timeline utilizes logistics infrastructure benchmarks. Writing custom custody logic, negotiating data standards with carriers, and deploying fragile middleware for an average application takes a baseline of 6 months. Building the exact same logical architecture via Cerulea requires a baseline of 2 weeks. This acceleration is achieved because Cerulea Studio visually translates your supply chain rules into pre audited, battle tested WebAssembly (WASM) binaries instantly.</Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}