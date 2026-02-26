'use client';

import * as React from 'react';
import { Box, Container, Typography, Grid, Stack, Button, Divider, Slider } from '@mui/material';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CableOutlinedIcon from '@mui/icons-material/CableOutlined';
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
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import RouterOutlinedIcon from '@mui/icons-material/RouterOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SwapCallsOutlinedIcon from '@mui/icons-material/SwapCallsOutlined';

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
    id: 'lock',
    title: '1. Source Chain Locking',
    description: 'A user initiates a cross-chain transfer by locking an asset or state on the source chain. The smart contract anchors the transaction and emits a cryptographic message event.',
    terminal: [
      '[SYS] Initializing Cross-Chain Messenger...',
      '[CMD] lockAsset { id: "BCH_772", amount: 1000, dstChain: "ETH_L1" }',
      '[AUTH] Generating source-chain receipt hash...',
      '[OK] State locked at block 1999201. Emitting relay event.'
    ]
  },
  {
    id: 'attestation',
    title: '2. Relayer Attestation',
    description: 'Independent relayer nodes or ZK-provers detect the event. They generate a mathematical proof of the source chain state and prepare the payload for the destination network.',
    terminal: [
      '[SYS] Relayer Node_92 intercepting source event...',
      '[CMD] fetchProof(Source_Tx_0x4A2, Block: 1999201)',
      '[SYS] Generating ZK-SNARK state witness...',
      '[OK] Mathematical proof compiled. Validated across 15 nodes.'
    ]
  },
  {
    id: 'propagation',
    title: '3. Message Propagation',
    description: 'The proven payload is transmitted to the destination chain. The interoperability protocol manages the jurisdictional routing and ensures the message format is compatible with the target runtime.',
    terminal: [
      '[SYS] Pushing payload to Destination Gateway...',
      '[CMD] submitProof(Target: "ETH_L1", Payload: 0x9f2a...)',
      '[SYS] Verifying relayer signatures and ZK-witness...',
      '[OK] Message integrity verified. Routing to target logic.'
    ]
  },
  {
    id: 'mint',
    title: '4. Destination Execution',
    description: 'The destination smart contract receives the verified message and executes the final state change, such as minting a wrapped asset or triggering a remote governance vote.',
    terminal: [
      '[SYS] Receiving cross-chain execution trigger...',
      '[CMD] mintWrapped(User: 0x7B2, Original_ID: "BCH_772")',
      '[SYS] Updating destination ledger state...',
      '[OK] Interoperability cycle complete. Finality achieved.'
    ]
  }
];

const ANATOMY_LAYERS = [
  {
    id: 'messenger',
    icon: <DataObjectOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'LAYER 01: MESSENGER REGISTRY',
    name: 'The Protocol Standard',
    role: 'Universal Data Format',
    desc: 'The foundational layer defining how cross-chain packets are structured. It manages the sequence numbers, source/destination chain IDs, and the standardized payload encoding required for network-agnostic communication.',
    code: `contract MessengerRegistry {\n  struct Packet {\n    uint16 srcChainId;\n    uint16 dstChainId;\n    uint64 sequence;\n    bytes payload;\n  }\n  \n  function send(uint16 dstChainId, bytes calldata payload) external payable {\n    _outboundPackets[sequence++] = Packet(localId, dstChainId, sequence, payload);\n    emit MessageSent(dstChainId, sequence, payload);\n  }\n}`,
    simAction: 'Simulate Message Encode',
    simLogs: [
      "> Compiling cross-chain instruction for Chain_ID 102...",
      "> Encoding payload: { action: 'MINT', asset: 'CBC-77' }...",
      "> Attaching unique sequence nonce: 49122...",
      "> Writing packet metadata to source state...",
      "> [SUCCESS] Message successfully standardized for relay."
    ]
  },
  {
    id: 'hook',
    icon: <SyncAltOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'LAYER 02: BRIDGE HOOK',
    name: 'The Asset Interceptor',
    role: 'State Synchronization',
    desc: 'Bypasses siloed execution. This module handles the logic for locking or burning assets on one network and signaling the counterpart. It ensures that the total supply of tokenized value remains mathematically constant across all connected chains.',
    code: `contract BridgeHook {\n  function lockAndSignal(address asset, uint256 amt) external {\n    IERC20(asset).transferFrom(msg.sender, address(this), amt);\n    messenger.send(targetChainId, abi.encode(msg.sender, asset, amt));\n    emit AssetLocked(asset, amt, msg.sender);\n  }\n}`,
    simAction: 'Simulate Asset Lock',
    simLogs: [
      "> Intercepting lock request for 50,000 USDC...",
      "> Transferring capital to local bridge vault...",
      "> Constructing signal payload for Ethereum L1...",
      "> Triggering internal call to MessengerRegistry...",
      "> [SUCCESS] Capital isolated on source. Signal emitted."
    ]
  },
  {
    id: 'router',
    icon: <RouterOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'LAYER 03: RELAYER ROUTER',
    name: 'The Propagation Logic',
    role: 'Multi-Network Routing',
    desc: 'The networks dispatcher. It manages the incentivization and verification of independent relayer nodes. This layer ensures that messages are delivered to the correct destination gateway while preventing replay attacks.',
    code: `contract RelayerRouter {\n  function deliver(bytes calldata proof, bytes calldata message) external {\n    require(!isProcessed(keccak256(message)), "Replay Detected");\n    require(verifier.validate(proof), "Invalid Relayer Signature");\n    \n    _processMessage(message);\n    emit MessageDelivered(keccak256(message));\n  }\n}`,
    simAction: 'Simulate Route Deliver',
    simLogs: [
      "> Relayer Node_44 submitting packet proof...",
      "> Checking anti-replay registry for message hash...",
      "> [PASS] Message is unique and fresh.",
      "> Verifying aggregate signatures from validator set...",
      "> [SUCCESS] Packet authorized for destination execution."
    ]
  },
  {
    id: 'verifier',
    icon: <SecurityOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'LAYER 04: ZK-VERIFIER',
    name: 'The Mathematical Guardian',
    role: 'Trustless Finality',
    desc: 'The ultimate security layer. Instead of relying on honest-relayer assumptions, this contract uses Zero-Knowledge proofs to mathematically verify that the source chain state change actually occurred, providing trustless interoperability.',
    code: `contract ZKVerifier {\n  function verifyState(bytes32 root, bytes calldata proof) external view returns (bool) {\n    require(snarkVerifier.verify(root, proof), "Math: Invalid Proof");\n    return true;\n  }\n}`,
    simAction: 'Simulate ZK-Audit',
    simLogs: [
      "> Receiving ZK-SNARK state witness for block 1999201...",
      "> Loading source-chain state root hash...",
      "> Executing pairing-check validation on elliptic curve...",
      "> [PASS] Mathematical proof of state confirmed.",
      "> [SUCCESS] Trustless bridge finality achieved."
    ]
  }
];

export default function InteroperabilityUseCasePage() {
  const [activeStep, setActiveStep] = React.useState(LIFECYCLE_STEPS[0]);
  const [isDeconstructed, setIsDeconstructed] = React.useState(false);
  const [activeLayer, setActiveLayer] = React.useState(ANATOMY_LAYERS[0]);
  const [activeTab, setActiveTab] = React.useState<'architecture' | 'code' | 'simulate'>('architecture');
  const [simLogIndex, setSimLogIndex] = React.useState(0);
  const [isSimulating, setIsSimulating] = React.useState(false);
  
  const [complexity, setComplexity] = React.useState<number>(50); 
  const handleComplexityChange = (event: Event, newValue: number | number[]) => setComplexity(newValue as number);
  
  const legacyMonths = Math.round(12 + (complexity * 0.15));
  const ceruleaWeeks = Math.round(4 + (complexity * 0.05));

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
        <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '500px', background: 'radial-gradient(ellipse at top, rgba(124, 58, 237, 0.1), transparent 70%)', pointerEvents: 'none' }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 2, py: 1, borderRadius: 2, bgcolor: 'rgba(124, 58, 237, 0.1)', border: '1px solid rgba(124, 58, 237, 0.2)', mb: 4 }}>
              <CableOutlinedIcon sx={{ color: '#7c3aed', fontSize: 20 }} />
              <Typography sx={{ color: '#7c3aed', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                Platform Use Case
              </Typography>
            </Box>
            
            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '3rem', md: '5rem' }, lineHeight: 1.05, letterSpacing: '-0.03em', mb: 4, mx: 'auto', maxWidth: 1000, color: '#172554' }}>
              Bridge fragmented networks.<br />
              <span style={{ color: '#64748B' }}>Eradicate liquidity silos.</span>
            </Typography>
            
            <Typography sx={{ color: '#475569', fontSize: { xs: '1.1rem', md: '1.3rem' }, maxWidth: 850, lineHeight: 1.6, mb: 6, mx: 'auto', fontWeight: 400 }}>
              Deploy secure cross-chain bridges and universal state messengers. Enable seamless value and data movement between private subnets and public L1 ledgers using the Cerulea grid.
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
                Deploy Interoperability Layers
              </Button>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* 2. THE MECHANICS (Clean Numbered Grid) */}
      <Container maxWidth="lg" sx={{ mb: 20 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 10, letterSpacing: '-0.02em', textAlign: 'center', color: '#172554' }}>
            The Execution Mechanics
          </Typography>
          
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: { xs: 6, lg: 8 } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#7c3aed', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>01.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Universal State Bridging</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Bypass the limitation of isolated chains. Cerulea enables the atomic transfer of arbitrary data—not just tokens—allowing a smart contract on one network to trigger logic on another network trustlessly.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#7c3aed', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>02.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Wrapped Asset Parity</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Ensure 1:1 value matching. Smart contracts manage the locking and minting of wrapped assets, utilizing mathematical supply invariants to prevent inflationary double-spending across network boundaries.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#7c3aed', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>03.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Relayer Aggregation</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Eliminate single points of failure. The protocol utilizes a decentralized set of independent relayer nodes that must reach consensus on source chain events before the message is propagated forward.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#7c3aed', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>04.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>ZK-Light Clients</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Deploy trustless security models. Cerulea utilizes Zero-Knowledge proofs to verify the validity of destination chains without needing to download their entire history, enabling massive scalability.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#7c3aed', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>05.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Cross-Chain Governance</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Unify DAO decision-making. Stakeholders on different chains can cast votes that are aggregated into a single universal result, which then triggers autonomous execution on a primary network.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#7c3aed', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>06.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Deterministic Message Delivery</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Ensure reliability. Interop contracts use chronological sequence nonces and re-try logic to guarantee that every cross-chain message is delivered exactly once and in the correct order.</Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>

      {/* 3. THE LIFECYCLE STATE MACHINE (Side-by-Side Locked) */}
      <Box sx={{ bgcolor: '#FFFFFF', py: 16, borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', mb: 16 }}>
        <Container maxWidth="xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <Box sx={{ textAlign: 'center', mb: 10 }}>
              <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>The Interoperability Lifecycle</Typography>
              <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
                Follow the cryptographic progression of a cross-chain packet as it is encoded, relayed, verified, and settled across network boundaries.
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
                        p: 3, 
                        borderRadius: 3, 
                        cursor: 'pointer',
                        border: '1px solid',
                        borderColor: activeStep.id === step.id ? 'rgba(124, 58, 237, 0.4)' : '#E2E8F0',
                        bgcolor: activeStep.id === step.id ? 'rgba(124, 58, 237, 0.05)' : '#FFFFFF',
                        transition: 'all 0.2s ease',
                        '&:hover': { bgcolor: activeStep.id === step.id ? 'rgba(124, 58, 237, 0.08)' : '#F8FAFC' }
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                        <CheckCircleOutlineOutlinedIcon sx={{ color: activeStep.id === step.id ? '#7c3aed' : '#CBD5E1', fontSize: 24 }} />
                        <Typography sx={{ fontSize: '1.15rem', fontWeight: 800, color: activeStep.id === step.id ? '#172554' : '#64748B' }}>
                          {step.title}
                        </Typography>
                      </Box>
                      <Typography sx={{ pl: 5, color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, display: activeStep.id === step.id ? 'block' : 'none' }}>
                        {step.description}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>

              <Box sx={{ 
                flexGrow: 1,
                minWidth: 0,
                bgcolor: '#0f172a', 
                borderRadius: 4, 
                p: { xs: 4, md: 6 }, 
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <Box sx={{ display: 'flex', gap: 1, mb: 4, borderBottom: '1px solid #1e293b', pb: 2 }}>
                  <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ef4444' }} />
                  <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#f59e0b' }} />
                  <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#10b981' }} />
                  <Typography sx={{ color: '#64748B', fontSize: '0.75rem', ml: 2, fontFamily: 'monospace' }}>cerulea_bridge_engine.log</Typography>
                </Box>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                  >
                    <Stack spacing={3}>
                      {activeStep.terminal.map((log, index) => (
                        <Typography key={index} sx={{ fontFamily: 'monospace', fontSize: '1rem', color: log.includes('[OK]') ? '#10b981' : log.includes('[CMD]') ? '#38bdf8' : log.includes('[AUTH]') ? '#f59e0b' : '#e2e8f0' }}>
                          {log}
                        </Typography>
                      ))}
                    </Stack>
                  </motion.div>
                </AnimatePresence>
              </Box>

            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* 4. SMART CONTRACT ANATOMY (Interactive Exploded View) */}
      <Container maxWidth="xl" sx={{ mb: 20 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>Smart Contract Anatomy</Typography>
            <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 800, mx: 'auto', mb: 6 }}>
              Cerulea manages network interoperability through specialized, modular smart contracts. This layered approach ensures that cross-chain messages, assets, and security proofs are handled with absolute integrity.
            </Typography>

            {!isDeconstructed ? (
              <Button 
                onClick={() => setIsDeconstructed(true)}
                variant="outlined" 
                endIcon={<LayersOutlinedIcon />} 
                sx={{ 
                  borderColor: '#7c3aed', color: '#7c3aed', px: 4, py: 1.5, fontSize: '1rem', fontWeight: 700, borderRadius: 2,
                  '&:hover': { bgcolor: 'rgba(124, 58, 237, 0.05)', borderColor: '#6d28d9' }
                }}
              >
                Deconstruct Architecture
              </Button>
            ) : null}
          </Box>

          <AnimatePresence>
            {isDeconstructed && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 4, alignItems: 'stretch' }}>
                  
                  <Box sx={{ width: { xs: '100%', lg: '350px' }, flexShrink: 0 }}>
                    <Stack spacing={2} sx={{ position: 'relative' }}>
                      <Box sx={{ position: 'absolute', top: 30, bottom: 30, left: 34, width: '2px', bgcolor: 'rgba(124, 58, 237, 0.2)', zIndex: 0 }} />
                      
                      {ANATOMY_LAYERS.map((layer, index) => (
                        <motion.div
                          key={layer.id}
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.15, duration: 0.4 }}
                        >
                          <Box 
                            onClick={() => setActiveLayer(layer)}
                            sx={{ 
                              position: 'relative',
                              zIndex: 1,
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: 3, 
                              p: 2.5, 
                              bgcolor: activeLayer.id === layer.id ? '#FFFFFF' : '#FAFAFA', 
                              border: '1px solid',
                              borderColor: activeLayer.id === layer.id ? '#7c3aed' : '#E2E8F0',
                              borderRadius: 3, 
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                              boxShadow: activeLayer.id === layer.id ? '0 10px 30px rgba(124, 58, 237, 0.15)' : 'none',
                              transform: activeLayer.id === layer.id ? 'translateX(10px)' : 'none'
                            }}
                          >
                            <Box sx={{ width: 48, height: 48, borderRadius: 2, bgcolor: activeLayer.id === layer.id ? 'rgba(124, 58, 237, 0.1)' : '#FFFFFF', border: '1px solid', borderColor: activeLayer.id === layer.id ? 'rgba(124, 58, 237, 0.3)' : '#E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                              <Box sx={{ color: activeLayer.id === layer.id ? '#7c3aed' : '#94A3B8', display: 'flex' }}>{layer.icon}</Box>
                            </Box>
                            <Box>
                              <Typography sx={{ color: activeLayer.id === layer.id ? '#7c3aed' : '#64748B', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', mb: 0.5, textTransform: 'uppercase' }}>
                                {layer.role}
                              </Typography>
                              <Typography sx={{ fontSize: '1.05rem', fontWeight: 700, color: activeLayer.id === layer.id ? '#172554' : '#475569' }}>
                                {layer.name}
                              </Typography>
                            </Box>
                          </Box>
                        </motion.div>
                      ))}
                    </Stack>
                  </Box>

                  <Box sx={{ 
                    flexGrow: 1, 
                    minWidth: 0,
                    bgcolor: '#FFFFFF', 
                    borderRadius: 4, 
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden'
                  }}>
                    <Box sx={{ display: 'flex', borderBottom: '1px solid #E2E8F0', bgcolor: '#F8FAFC', overflowX: 'auto' }}>
                      {['architecture', 'code', 'simulate'].map((tab) => (
                        <Box 
                          key={tab}
                          onClick={() => setActiveTab(tab as any)}
                          sx={{ 
                            px: 4, py: 2.5, 
                            cursor: 'pointer',
                            borderBottom: '2px solid',
                            borderColor: activeTab === tab ? '#7c3aed' : 'transparent',
                            bgcolor: activeTab === tab ? '#FFFFFF' : 'transparent',
                            color: activeTab === tab ? '#7c3aed' : '#64748B',
                            fontWeight: 700,
                            fontSize: '0.85rem',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            transition: 'all 0.2s',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {tab}
                        </Box>
                      ))}
                    </Box>

                    <Box sx={{ p: { xs: 4, md: 5 }, flexGrow: 1, position: 'relative' }}>
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`${activeLayer.id}-${activeTab}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {/* TAB: ARCHITECTURE */}
                          {activeTab === 'architecture' && (
                            <Box>
                              <Typography sx={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', mb: 2 }}>
                                // COMPONENT INSPECTOR
                              </Typography>
                              <Typography sx={{ color: '#172554', fontSize: '1.75rem', fontWeight: 800, mb: 3 }}>
                                {activeLayer.name}
                              </Typography>
                              <Typography sx={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7, textAlign: 'justify', mb: 4 }}>
                                {activeLayer.desc}
                              </Typography>
                              
                              <Box sx={{ p: 3, bgcolor: 'rgba(124, 58, 237, 0.05)', borderRadius: 2, border: '1px solid rgba(124, 58, 237, 0.2)' }}>
                                <Typography sx={{ color: '#7c3aed', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', mb: 1 }}>PLATFORM FUNCTION</Typography>
                                <Typography sx={{ color: '#172554', fontSize: '0.95rem', fontWeight: 600 }}>
                                  {activeLayer.role}
                                </Typography>
                              </Box>
                            </Box>
                          )}

                          {/* TAB: CODE */}
                          {activeTab === 'code' && (
                            <Box sx={{ bgcolor: '#0f172a', borderRadius: 2, p: 3, overflowX: 'auto' }}>
                              <Typography component="pre" sx={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>
                                {activeLayer.code}
                              </Typography>
                            </Box>
                          )}

                          {/* TAB: SIMULATE */}
                          {activeTab === 'simulate' && (
                            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                                <Typography sx={{ color: '#172554', fontSize: '1.25rem', fontWeight: 700 }}>Interactive Execution</Typography>
                                <Button 
                                  variant="contained" 
                                  onClick={runSimulation}
                                  disabled={isSimulating}
                                  startIcon={<PlayArrowIcon />}
                                  sx={{ bgcolor: '#10b981', '&:hover': { bgcolor: '#059669' }, fontWeight: 700, boxShadow: 'none' }}
                                >
                                  {activeLayer.simAction}
                                </Button>
                              </Box>
                              
                              <Box sx={{ bgcolor: '#0f172a', borderRadius: 2, p: 3, flexGrow: 1, minHeight: 200 }}>
                                <Stack spacing={1.5}>
                                  {activeLayer.simLogs.slice(0, simLogIndex).map((log, idx) => (
                                    <Typography key={idx} sx={{ color: log.includes('[SUCCESS]') || log.includes('[PASS]') ? '#10b981' : '#38bdf8', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                                      {log}
                                    </Typography>
                                  ))}
                                  {isSimulating && simLogIndex < activeLayer.simLogs.length && (
                                    <Typography sx={{ color: '#64748B', fontFamily: 'monospace', fontSize: '0.9rem', animation: 'pulse 1s infinite' }}>
                                      _ processing...
                                    </Typography>
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

      {/* 5. CROSS-INDUSTRY APPLICABILITY (Matrix) */}
      <Container maxWidth="lg" sx={{ mb: 20 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>Applicability Across the Spectrum</Typography>
            <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 700, mx: 'auto' }}>
              Network Interoperability is a horizontal capability. Here is how different sectors utilize this model to un-silo fragmented infrastructure.
            </Typography>
          </Box>

          <Stack spacing={4}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(124, 58, 237, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <SwapCallsOutlinedIcon sx={{ fontSize: 40, color: '#7c3aed' }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>Institutional Liquidity Aggregation</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Unify capital across disparate subnets. Institutional banks utilize Cerulea to route stablecoin liquidity between private settlement ledgers and public L1 corridors, ensuring they always have access to global depth without silos.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY DEPLOYMENTS</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#7c3aed' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Cross-Chain Sweep</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#7c3aed' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Universal Payouts</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#7c3aed' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Netting Settlement</Typography></Box>
                </Stack>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(124, 58, 237, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <HubOutlinedIcon sx={{ fontSize: 40, color: '#7c3aed' }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>Multichain Gaming & Metaverse</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Enable interoperable digital assets. Players can move character items or land deeds between different game worlds and chains securely, with the smart contract handling the atomic burn-and-mint sequence in the background.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY DEPLOYMENTS</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#7c3aed' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Inventory Portability</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#7c3aed' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Cross-World IDs</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#7c3aed' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Metaverse Trading</Typography></Box>
                </Stack>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(124, 58, 237, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <SecurityOutlinedIcon sx={{ fontSize: 40, color: '#7c3aed' }} />
              </Box>
              <Box flexGrow={1}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>Hybrid Network Security</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Anchor private consortium state to public L1s. Enterprises run high-throughput transactions on their private Cerulea subnets while using interoperability hooks to periodically "checkpoint" the hash of their state to Ethereum for massive security.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY DEPLOYMENTS</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#7c3aed' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>L1 Checkpointing</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#7c3aed' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Audit Snapshots</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#7c3aed' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Rollup Finality</Typography></Box>
                </Stack>
              </Box>
            </Box>
          </Stack>
        </motion.div>
      </Container>

      {/* 6. SYSTEM ARCHITECTURE DIAGRAMS (Flowcharts) */}
      
      <Box sx={{ bgcolor: '#FFFFFF', py: 16, borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', mb: 16 }}>
        <Container maxWidth="xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <Box sx={{ textAlign: 'center', mb: 10 }}>
              <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>Network & Execution Architecture</Typography>
              <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
                Whether you are bridging private enterprise subnets or routing native L1 state updates, Cerulea provides the exact infrastructure flow required.
              </Typography>
            </Box>

            <Stack spacing={10}>
              <Box>
                <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1, textAlign: 'center' }}>Track A: Enterprise Subnet Bridging</Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', mb: 6, lineHeight: 1.6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
                  For corporate consortiums. Legacy HTTP events from internal private chains are securely translated into public L1 state checkpoints automatically.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2, position: 'relative' }}>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '1px solid #CBD5E1', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <DnsOutlinedIcon sx={{ color: '#64748B', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Cerulea Private Subnet</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>High-Speed Execution</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#64748B', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>MESSENGER HOOK</Typography>
                    <ArrowForwardIcon sx={{ color: '#64748B', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: 'rgba(124, 58, 237, 0.05)', border: '2px solid #7c3aed', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(124, 58, 237, 0.15)' }}>
                      <ApiOutlinedIcon sx={{ color: '#7c3aed', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Interoperability Gateway</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>State Hash Encoding</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#7c3aed', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>WASM COMPILATION</Typography>
                    <ArrowForwardIcon sx={{ color: '#7c3aed', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '2px solid #059669', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(5, 150, 105, 0.15)' }}>
                      <MemoryOutlinedIcon sx={{ color: '#059669', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Ethereum L1 / Mainnet</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Global Settlement State</Typography>
                  </Box>
                </Box>
              </Box>

              <Divider sx={{ borderColor: '#E2E8F0' }} />

              <Box>
                <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1, textAlign: 'center' }}>Track B: Native Multichain Execution</Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', mb: 6, lineHeight: 1.6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
                  For decentralized bridges and multichain DApps. Bypass legacy gateways and route cryptographic state signatures directly between public L1/L2 execution layers.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2, position: 'relative' }}>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '1px solid #CBD5E1', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <TerminalOutlinedIcon sx={{ color: '#64748B', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Multichain Interface</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>React Client & Bridge UI</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#64748B', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>WALLET SIGNATURE</Typography>
                    <ArrowForwardIcon sx={{ color: '#64748B', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: 'rgba(37, 99, 235, 0.05)', border: '2px solid #2563eb', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(37, 99, 235, 0.15)' }}>
                      <SwapCallsOutlinedIcon sx={{ color: '#2563eb', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Relayer Network</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Proof Tallying Nodes</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#2563eb', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>ZK-WITNESS</Typography>
                    <ArrowForwardIcon sx={{ color: '#2563eb', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '2px solid #9333ea', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(147, 51, 234, 0.15)' }}>
                      <LayersOutlinedIcon sx={{ color: '#9333ea', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Cerulea Public L1</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Final Payout Ledger</Typography>
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
            <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
              Building custom ZK-light clients and relayer incentivization engines from scratch requires specialized network engineers and massive audit budgets. Calculate your exact deployment speed using Cerulea.
            </Typography>
          </Box>

          <Box sx={{ p: { xs: 4, md: 6 }, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
            <Grid container spacing={8} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography sx={{ color: '#172554', fontWeight: 600, mb: 1 }}>Required Connected Networks & Assets</Typography>
                <Typography sx={{ color: '#7c3aed', fontSize: '3rem', fontWeight: 800, mb: 4 }}>{complexity} Rules</Typography>
                
                <Slider
                  value={complexity} onChange={handleComplexityChange} min={10} max={200} step={10}
                  sx={{ color: '#7c3aed', height: 8, '& .MuiSlider-thumb': { height: 24, width: 24, backgroundColor: '#fff', border: '2px solid currentColor' } }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', color: '#64748B', fontSize: '0.85rem', mt: 1 }}>
                  <Typography>Simple (10)</Typography>
                  <Typography>Complex (200)</Typography>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Stack spacing={3}>
                  <Box sx={{ p: 3, bgcolor: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography sx={{ fontSize: '0.75rem', color: '#dc2626', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>TRADITIONAL DEPLOYMENT</Typography>
                      <Typography sx={{ fontSize: '0.8rem', color: '#475569' }}>Custom Bridge Logic & Audits</Typography>
                    </Box>
                    <Typography sx={{ fontSize: '1.75rem', color: '#172554', fontWeight: 700 }}>{legacyMonths} Months</Typography>
                  </Box>

                  <Box sx={{ p: 3, bgcolor: 'rgba(124, 58, 237, 0.05)', border: '1px solid rgba(124, 58, 237, 0.2)', borderRadius: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography sx={{ fontSize: '0.75rem', color: '#7c3aed', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>CERULEA EXECUTION</Typography>
                      <Typography sx={{ fontSize: '0.8rem', color: '#475569' }}>Visual Studio & Auto-Compilation</Typography>
                    </Box>
                    <Typography sx={{ fontSize: '1.75rem', color: '#172554', fontWeight: 700 }}>{ceruleaWeeks} Weeks</Typography>
                  </Box>
                </Stack>
              </Grid>
            </Grid>

            <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid #E2E8F0' }}>
              <Typography sx={{ fontSize: '0.8rem', color: '#172554', fontWeight: 700, mb: 1, letterSpacing: '0.05em' }}>
                METHODOLOGY
              </Typography>
              <Typography sx={{ fontSize: '0.8rem', color: '#475569', lineHeight: 1.6, textAlign: 'justify' }}>
                The legacy development timeline utilizes Web3 infrastructure benchmarks. Writing custom relayer software, negotiating state standards between chains, and deploying fragile bridge middleware for an average interoperability application takes a baseline of 12 months. Building the exact same logical architecture via Cerulea requires a baseline of 4 weeks. This acceleration is achieved because Cerulea Studio visually translates your routing rules into pre-audited, battle-tested WebAssembly (WASM) binaries instantly, entirely bypassing the manual coding, debugging, and external auditing phases.
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>

    </Box>
  );
}