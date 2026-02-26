'use client';

import * as React from 'react';
import { Box, Container, Typography, Grid, Stack, Button, Divider, Slider } from '@mui/material';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EnergySavingsLeafOutlinedIcon from '@mui/icons-material/EnergySavingsLeafOutlined';
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
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DataObjectOutlinedIcon from '@mui/icons-material/DataObjectOutlined';
import RadarOutlinedIcon from '@mui/icons-material/RadarOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import FlightOutlinedIcon from '@mui/icons-material/FlightOutlined';
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';

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
    id: 'origination',
    title: '1. Project Origination',
    description: 'A carbon sequestration project (like a reforestation initiative) is registered. The smart contract anchors its geographical coordinates, methodology, and expected baseline sequestration to the ledger.',
    terminal: [
      '[SYS] Initializing Eco-Asset Manifest...',
      '[CMD] registerProject { type: "FORESTRY", area: "AMZ_88", methodology: "VERRA_VM0047" }',
      '[AUTH] Verifying satellite coordinates and baseline data...',
      '[OK] Project registered. State anchored at block 1966020.'
    ]
  },
  {
    id: 'verification',
    title: '2. MRV Data Ingestion',
    description: 'Digital Measurement, Reporting, and Verification (dMRV) begins. IoT sensors and satellite oracles stream real-time biomass data to the contract to prove sequestration has actually occurred.',
    terminal: [
      '[SYS] Polling Biomass Satellite Oracle...',
      '[CMD] queryNDVI(proj_id: "AMZ_88", timeframe: "1YR")',
      '[SYS] Metric validated: 15,000 tonnes of CO2e sequestered.',
      '[OK] Verification successful. Authorized to mint credits.'
    ]
  },
  {
    id: 'minting',
    title: '3. Credit Tokenization',
    description: 'The smart contract mints carbon credits as non-fungible or semi-fungible tokens. Each credit holds an immutable link back to its specific batch of verified sequestration data.',
    terminal: [
      '[SYS] Executing Minting Authority protocol...',
      '[CMD] mintCredits(Project: "AMZ_88", amount: 15000, serial: "2025-BR-88")',
      '[AUTH] Sealing cryptographic proof of verification...',
      '[OK] Credits distributed to project owner wallet.'
    ]
  },
  {
    id: 'retirement',
    title: '4. Final Retirement',
    description: 'A corporation purchases the credits to offset their emissions. The smart contract "burns" the tokens, permanently removing them from circulation and issuing a verifiable retirement certificate.',
    terminal: [
      '[SYS] Detecting retirement intent from Corp_0x992...',
      '[CMD] retire(15000, reason: "FY2025_ESG_OFFSET")',
      '[SYS] Permanent burn executed. Generating cryptographic proof...',
      '[OK] Certificate issued. Double-counting mathematically impossible.'
    ]
  }
];

const ANATOMY_LAYERS = [
  {
    id: 'registry',
    icon: <DataObjectOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'LAYER 01: CREDIT REGISTRY',
    name: 'The Asset Passport',
    role: 'Identity & Metadata',
    desc: 'The foundational data layer. It manages the unique identifiers and serial numbers for every carbon credit. It stores immutable links back to the project source, vintage year, and specific methodology used for measurement.',
    code: `contract CarbonRegistry {\n  struct CreditBatch {\n    address projectOwner;\n    uint256 vintage;\n    string methodology;\n    bytes32 dataProof;\n    bool isRetired;\n  }\n  \n  mapping(uint256 => CreditBatch) public registry;\n\n  function mint(uint256 id, bytes32 proof) external onlyAuthority {\n    registry[id] = CreditBatch(msg.sender, 2025, "VM0047", proof, false);\n  }\n}`,
    simAction: 'Simulate Asset Mint',
    simLogs: [
      "> Compiling credit metadata for Vintage 2025...",
      "> Hashing project methodology documents...",
      "> Locking Project Owner ID: 0x7B2...F11...",
      "> Writing batch state to Level 1 Storage...",
      "> [SUCCESS] 15,000 credits registered on-chain."
    ]
  },
  {
    id: 'mrv',
    icon: <RadarOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'LAYER 02: MRV ORACLE',
    name: 'The Verification Hook',
    role: 'Impact Validation',
    desc: 'Bypasses manual auditors. This module connects to satellite and IoT data feeds to verify that carbon was actually sequestered before any credit is released for trade, preventing "greenwashing" at the protocol level.',
    code: `contract MRVOracle {\n  function validateImpact(uint256 projectId) external returns (bool) {\n    (uint256 carbonValue, bytes memory signature) = satelliteProvider.getLatest(projectId);\n    require(verifyProvider(signature), "Invalid Data Source");\n    return carbonValue >= threshold;\n  }\n}`,
    simAction: 'Simulate Impact Check',
    simLogs: [
      "> Querying NASA NDVI satellite data stream...",
      "> Extracting biomass density for sector BR_AMZ_88...",
      "> Mathematical verification of growth metrics...",
      "> [PASS] Delta matches requested credit volume.",
      "> [SUCCESS] Impact verified. Authorized to unlock tokens."
    ]
  },
  {
    id: 'burn',
    icon: <LocalFireDepartmentOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'LAYER 03: RETIREMENT ENGINE',
    name: 'The Burn Protocol',
    role: 'Anti-Double Counting',
    desc: 'The end-of-life executor. When a credit is used to offset an emission, this contract permanently disables the token. It creates an irreversible state change that prevents the same credit from being sold again.',
    code: `function retireCredits(uint256 batchId, uint256 amount) external {\n    require(!registry[batchId].isRetired, "Already Retired");\n    _burn(msg.sender, batchId, amount);\n    registry[batchId].isRetired = true;\n    emit OffsetCertified(msg.sender, batchId, amount);\n}`,
    simAction: 'Simulate Credit Retirement',
    simLogs: [
      "> Buyer initiating offset for 500 tonnes CO2...",
      "> Validating ownership of Batch #8842...",
      "> Executing permanent burn of 500 units...",
      "> Updating global retirement registry...",
      "> [SUCCESS] Credits destroyed. Retirement certificate generated."
    ]
  },
  {
    id: 'market',
    icon: <SyncAltOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'LAYER 04: LIQUIDITY ROUTER',
    name: 'The Atomic Market',
    role: 'Instant Settlement',
    desc: 'Eliminates OTC settlement risk. This contract bundles the credit transfer and the stablecoin payment into a single atomic transaction, ensuring project developers receive capital the exact millisecond a buyer clicks purchase.',
    code: `function atomicTrade(uint256 batchId, uint256 price) external payable {\n    address seller = registry[batchId].owner;\n    _transferCredits(seller, msg.sender, batchId);\n    payable(seller).transfer(msg.value);\n    emit TradeSettled(batchId, seller, msg.sender, msg.value);\n}`,
    simAction: 'Simulate Atomic Trade',
    simLogs: [
      "> Buyer locking 25,000 USDC in trade escrow...",
      "> Verifying Batch #8842 availability in Seller wallet...",
      "> Executing dual-state swap in single block...",
      "> [SUCCESS] Capital to developer. Credits to corporate buyer.",
      "> Transaction settled with absolute finality."
    ]
  }
];

export default function CarbonCreditsUseCasePage() {
  const [activeStep, setActiveStep] = React.useState(LIFECYCLE_STEPS[0]);
  const [isDeconstructed, setIsDeconstructed] = React.useState(false);
  const [activeLayer, setActiveLayer] = React.useState(ANATOMY_LAYERS[0]);
  const [activeTab, setActiveTab] = React.useState<'architecture' | 'code' | 'simulate'>('architecture');
  const [simLogIndex, setSimLogIndex] = React.useState(0);
  const [isSimulating, setIsSimulating] = React.useState(false);
  
  const [complexity, setComplexity] = React.useState<number>(50); 
  const handleComplexityChange = (event: Event, newValue: number | number[]) => setComplexity(newValue as number);
  
  const legacyMonths = Math.round(9 + (complexity * 0.15));
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
      
      {/* 1. HERO SECTION */}
      <Box sx={{ pt: { xs: 16, md: 24 }, pb: { xs: 12, md: 16 }, position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '500px', background: 'radial-gradient(ellipse at top, rgba(16, 185, 129, 0.1), transparent 70%)', pointerEvents: 'none' }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 2, py: 1, borderRadius: 2, bgcolor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', mb: 4 }}>
              <EnergySavingsLeafOutlinedIcon sx={{ color: '#10b981', fontSize: 20 }} />
              <Typography sx={{ color: '#10b981', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                Platform Use Case
              </Typography>
            </Box>
            
            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '3rem', md: '5rem' }, lineHeight: 1.05, letterSpacing: '-0.03em', mb: 4, mx: 'auto', maxWidth: 1000, color: '#172554' }}>
              Tokenize the atmosphere.<br />
              <span style={{ color: '#64748B' }}>Eradicate carbon double-counting.</span>
            </Typography>
            
            <Typography sx={{ color: '#475569', fontSize: { xs: '1.1rem', md: '1.3rem' }, maxWidth: 850, lineHeight: 1.6, mb: 6, mx: 'auto', fontWeight: 400 }}>
              Convert verifiable sequestration into liquid digital assets. Deploy high-integrity carbon marketplaces with real-time oracle verification and atomic retirement certificates.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
              <Button 
                href="/company/contact"
                variant="contained" 
                endIcon={<ArrowForwardIcon />} 
                sx={{ 
                  bgcolor: '#10b981', color: '#FFFFFF', px: 4, py: 2, fontSize: '1rem', fontWeight: 700, borderRadius: 2,
                  boxShadow: '0 4px 14px rgba(16, 185, 129, 0.3)',
                  '&:hover': { bgcolor: '#059669', transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(16, 185, 129, 0.4)' },
                  transition: 'all 0.2s'
                }}
              >
                Deploy Credit Frameworks
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
              <Typography sx={{ color: '#10b981', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>01.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Real-Time dMRV</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Replace slow manual audits. Smart contracts ingest satellite and IoT data to continuously verify environmental impact, ensuring that every credit represents a mathematically proven tonne of carbon.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#10b981', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>02.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Fractional Offsetting</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>High-throughput consensus enables micro-offsets. Small businesses or retail consumers can purchase fractions of a carbon credit to offset specific products or transactions instantly at checkout.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#10b981', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>03.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Verifiable Retirement</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Eradicate double-counting. When a credit is retired, the smart contract executes a permanent burn of the token and issues a cryptographic receipt linked to the specific corporate buyer.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#10b981', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>04.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Supply-Side Transparency</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Trace every credit back to its origin. Buyers can query the block height of the sequestration event, the specific drone footage or satellite scan used, and the verified project developer.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#10b981', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>05.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Automated Grant Routing</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Connect sequestration targets directly to capital. Global environmental grants are automatically released to local project operators based on verified environmental success milestones.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#10b981', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>06.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Marketplace Liquidity</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Turn environmental impact into a liquid asset class. Credits are compiled using global standards, allowing them to be traded on decentralized or enterprise marketplaces with zero OTC friction.</Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>

      {/* 3. THE LIFECYCLE STATE MACHINE */}
      <Box sx={{ bgcolor: '#FFFFFF', py: 16, borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', mb: 16 }}>
        <Container maxWidth="xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <Box sx={{ textAlign: 'center', mb: 10 }}>
              <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>The Carbon Lifecycle</Typography>
              <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
                Follow the exact cryptographic progression of an ecological offset from project initiation to corporate retirement.
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
                        borderColor: activeStep.id === step.id ? 'rgba(16, 185, 129, 0.4)' : '#E2E8F0',
                        bgcolor: activeStep.id === step.id ? 'rgba(16, 185, 129, 0.05)' : '#FFFFFF',
                        transition: 'all 0.2s ease',
                        '&:hover': { bgcolor: activeStep.id === step.id ? 'rgba(16, 185, 129, 0.08)' : '#F8FAFC' }
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                        <CheckCircleOutlineOutlinedIcon sx={{ color: activeStep.id === step.id ? '#10b981' : '#CBD5E1', fontSize: 24 }} />
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
                  <Typography sx={{ color: '#64748B', fontSize: '0.75rem', ml: 2, fontFamily: 'monospace' }}>cerulea_carbon_engine.log</Typography>
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
              Cerulea handles environmental assets through specialized, modular smart contracts. This layered approach ensures that carbon impact is verified, tokenized, and retired without any risk of double-counting.
            </Typography>
            {!isDeconstructed && (
              <Button onClick={() => setIsDeconstructed(true)} variant="outlined" endIcon={<LayersOutlinedIcon />} sx={{ borderColor: '#10b981', color: '#10b981', px: 4, py: 1.5, fontSize: '1rem', fontWeight: 700, borderRadius: 2, '&:hover': { bgcolor: 'rgba(16, 185, 129, 0.05)', borderColor: '#059669' } }}>Deconstruct Architecture</Button>
            )}
          </Box>
          <AnimatePresence>
            {isDeconstructed && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.5, ease: "easeInOut" }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 4, alignItems: 'stretch' }}>
                  <Box sx={{ width: { xs: '100%', lg: '350px' }, flexShrink: 0 }}>
                    <Stack spacing={2} sx={{ position: 'relative' }}>
                      <Box sx={{ position: 'absolute', top: 30, bottom: 30, left: 34, width: '2px', bgcolor: 'rgba(16, 185, 129, 0.2)', zIndex: 0 }} />
                      {ANATOMY_LAYERS.map((layer, index) => (
                        <motion.div key={layer.id} initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: index * 0.15, duration: 0.4 }}>
                          <Box onClick={() => setActiveLayer(layer)} sx={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 3, p: 2.5, bgcolor: activeLayer.id === layer.id ? '#FFFFFF' : '#FAFAFA', border: '1px solid', borderColor: activeLayer.id === layer.id ? '#10b981' : '#E2E8F0', borderRadius: 3, cursor: 'pointer', transition: 'all 0.2s ease', boxShadow: activeLayer.id === layer.id ? '0 10px 30px rgba(16, 185, 129, 0.15)' : 'none', transform: activeLayer.id === layer.id ? 'translateX(10px)' : 'none' }}>
                            <Box sx={{ width: 48, height: 48, borderRadius: 2, bgcolor: activeLayer.id === layer.id ? 'rgba(16, 185, 129, 0.1)' : '#FFFFFF', border: '1px solid', borderColor: activeLayer.id === layer.id ? 'rgba(16, 185, 129, 0.3)' : '#E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Box sx={{ color: activeLayer.id === layer.id ? '#10b981' : '#94A3B8', display: 'flex' }}>{layer.icon}</Box></Box>
                            <Box>
                              <Typography sx={{ color: activeLayer.id === layer.id ? '#10b981' : '#64748B', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', mb: 0.5, textTransform: 'uppercase' }}>{layer.role}</Typography>
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
                        <Box key={tab} onClick={() => setActiveTab(tab as any)} sx={{ px: 4, py: 2.5, cursor: 'pointer', borderBottom: '2px solid', borderColor: activeTab === tab ? '#10b981' : 'transparent', bgcolor: activeTab === tab ? '#FFFFFF' : 'transparent', color: activeTab === tab ? '#10b981' : '#64748B', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', transition: 'all 0.2s', whiteSpace: 'nowrap' }}>{tab}</Box>
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
                              <Box sx={{ p: 3, bgcolor: 'rgba(16, 185, 129, 0.05)', borderRadius: 2, border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                                <Typography sx={{ color: '#10b981', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', mb: 1 }}>PLATFORM FUNCTION</Typography>
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
              Carbon Credit Trading is a horizontal capability. Here is how different sectors utilize this model to accelerate the transition to Net Zero.
            </Typography>
          </Box>
          <Stack spacing={4}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><BoltOutlinedIcon sx={{ fontSize: 40, color: '#10b981' }} /></Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>Energy & Utilities</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>Automate the issuance of Renewable Energy Certificates (RECs). Solar and wind grids stream output telemetry directly to the ledger, which tokenizes the energy impact and allows utilities to sell verified offsets to industrial clients.</Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY ASSET TYPES</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#10b981' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Grid RECs</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#10b981' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Renewable Bonds</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#10b981' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Decentralized Grids</Typography></Box>
                </Stack>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><FlightOutlinedIcon sx={{ fontSize: 40, color: '#10b981' }} /></Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>Aviation & Transportation</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>Embed offsetting directly into the passenger experience. Airlines utilize high-throughput ledgers to allow millions of travelers to purchase and retire specific sequestration tokens at the point of booking.</Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY ASSET TYPES</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#10b981' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Retail Flight Offsets</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#10b981' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>SAF Provenance</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#10b981' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Fleet Emissions Logs</Typography></Box>
                </Stack>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><FactoryOutlinedIcon sx={{ fontSize: 40, color: '#10b981' }} /></Box>
              <Box flexGrow={1}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>Heavy Industry & Manufacturing</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>Manage compliance with sovereign carbon tax regimes. Industrial facilities anchor their emission telemetry to the ledger and automatically trade against their carbon allowances in a real-time decentralized order book.</Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY ASSET TYPES</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#10b981' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Emissions Allowances</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#10b981' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Compliance Audit Logs</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#10b981' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Supply Chain Scope 3</Typography></Box>
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
                Whether you are bridging legacy environmental registries or routing native Web3 impact data, Cerulea provides the exact infrastructure routing required.
              </Typography>
            </Box>
            <Stack spacing={10}>
              <Box>
                <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1, textAlign: 'center' }}>Track A: Institutional Registry Bridging</Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', mb: 6, lineHeight: 1.6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>For global carbon registries like Verra or Gold Standard. Legacy HTTP requests from existing environmental databases are translated into secure on-chain batch identifiers automatically.</Typography>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2, position: 'relative' }}>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '1px solid #CBD5E1', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}><DomainOutlinedIcon sx={{ color: '#64748B', fontSize: 32 }} /></Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Legacy Eco-Registry</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Standard Body Database</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#64748B', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>HTTPS / REST</Typography>
                    <ArrowForwardIcon sx={{ color: '#64748B', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: 'rgba(16, 185, 129, 0.05)', border: '2px solid #10b981', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(16, 185, 129, 0.15)' }}><ApiOutlinedIcon sx={{ color: '#10b981', fontSize: 32 }} /></Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Cerulea API Gateway</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Data Hashing & Verification</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#10b981', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>WASM COMPILATION</Typography>
                    <ArrowForwardIcon sx={{ color: '#10b981', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '2px solid #059669', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(5, 150, 105, 0.15)' }}><DnsOutlinedIcon sx={{ color: '#059669', fontSize: 32 }} /></Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Cerulea Private Chain</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Consortium Inventory Ledger</Typography>
                  </Box>
                </Box>
              </Box>
              <Divider sx={{ borderColor: '#E2E8F0' }} />
              <Box>
                <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1, textAlign: 'center' }}>Track B: Native Decarbonization Execution</Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', mb: 6, lineHeight: 1.6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>For decentralized climate DApps and P2P offsetting. Bypass legacy middle-men and route satellite data signatures directly to the public execution layer.</Typography>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2, position: 'relative' }}>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '1px solid #CBD5E1', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}><TerminalOutlinedIcon sx={{ color: '#64748B', fontSize: 32 }} /></Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Edge Device / App</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>IoT Sensors & Mobile Wallets</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#64748B', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>WALLET SIGNATURE</Typography>
                    <ArrowForwardIcon sx={{ color: '#64748B', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: 'rgba(37, 99, 235, 0.05)', border: '2px solid #2563eb', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(37, 99, 235, 0.15)' }}><RadarOutlinedIcon sx={{ color: '#2563eb', fontSize: 32 }} /></Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Decentralized Oracles</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Impact Data Tallying</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#2563eb', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>STATE EXECUTION</Typography>
                    <ArrowForwardIcon sx={{ color: '#2563eb', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '2px solid #9333ea', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(147, 51, 234, 0.15)' }}><MemoryOutlinedIcon sx={{ color: '#9333ea', fontSize: 32 }} /></Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Cerulea Public L1</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Final Retirement Ledger</Typography>
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
            <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>Building custom dMRV indexers and non-fungible retirement protocols from scratch requires specialized sustainability engineers and massive audit budgets. Calculate your exact deployment speed using Cerulea.</Typography>
          </Box>
          <Box sx={{ p: { xs: 4, md: 6 }, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
            <Grid container spacing={8} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography sx={{ color: '#172554', fontWeight: 600, mb: 1 }}>Required Sequestration Rules & Oracles</Typography>
                <Typography sx={{ color: '#10b981', fontSize: '3rem', fontWeight: 800, mb: 4 }}>{complexity} Rules</Typography>
                <Slider value={complexity} onChange={handleComplexityChange} min={10} max={200} step={10} sx={{ color: '#10b981', height: 8, '& .MuiSlider-thumb': { height: 24, width: 24, backgroundColor: '#fff', border: '2px solid currentColor' } }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', color: '#64748B', fontSize: '0.85rem', mt: 1 }}><Typography>Simple (10)</Typography><Typography>Complex (200)</Typography></Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Stack spacing={3}>
                  <Box sx={{ p: 3, bgcolor: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box><Typography sx={{ fontSize: '0.75rem', color: '#dc2626', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>TRADITIONAL DEPLOYMENT</Typography><Typography sx={{ fontSize: '0.8rem', color: '#475569' }}>Solidity Code & Third-Party Audits</Typography></Box>
                    <Typography sx={{ fontSize: '1.75rem', color: '#172554', fontWeight: 700 }}>{legacyMonths} Months</Typography>
                  </Box>
                  <Box sx={{ p: 3, bgcolor: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box><Typography sx={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>CERULEA EXECUTION</Typography><Typography sx={{ fontSize: '0.8rem', color: '#475569' }}>Visual Studio & Auto-Compilation</Typography></Box>
                    <Typography sx={{ fontSize: '1.75rem', color: '#172554', fontWeight: 700 }}>{ceruleaWeeks} Weeks</Typography>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
            <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid #E2E8F0' }}>
              <Typography sx={{ fontSize: '0.8rem', color: '#172554', fontWeight: 700, mb: 1, letterSpacing: '0.05em' }}>METHODOLOGY</Typography>
              <Typography sx={{ fontSize: '0.8rem', color: '#475569', lineHeight: 1.6, textAlign: 'justify' }}>The legacy development timeline utilizes ReFi infrastructure benchmarks. Writing custom ERC-721 retirement logic, negotiating data standards with satellite providers, and deploying fragile middleware for an average application takes a baseline of 9 months. Building the exact same logical architecture via Cerulea requires a baseline of 2 weeks. This acceleration is achieved because Cerulea Studio visually translates your environmental rules into pre audited, battle tested WebAssembly (WASM) binaries instantly.</Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}