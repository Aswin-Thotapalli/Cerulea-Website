'use client';

import * as React from 'react';
import { Box, Container, Typography, Grid, Stack, Button, Divider, Slider } from '@mui/material';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
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
import SettingsInputComponentOutlinedIcon from '@mui/icons-material/SettingsInputComponentOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';

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
    id: 'request',
    title: '1. Model Request Submission',
    description: 'A developer or application submits an AI inference or training task. The request defines the required hardware parameters, such as GPU VRAM and TFLOPS, and locks the bounty in escrow.',
    terminal: [
      '[SYS] Intercepting AI Compute payload...',
      '[CMD] Define Task { type: "Inference", model: "Llama-3-70B", vram_req: "48GB" }',
      '[AUTH] Escrowing 250 USDC from requester wallet...',
      '[OK] Task anchored. Broadcasting compute requirements to worker nodes.'
    ]
  },
  {
    id: 'matching',
    title: '2. Deterministic Matching',
    description: 'The smart contract analyzes active worker telemetry. It matches the task to a verified compute provider that meets the exact hardware requirements and jurisdictional compliance rules.',
    terminal: [
      '[SYS] Scanning Global Cluster Registry...',
      '[CMD] Find Node { status: "IDLE", hardware_verified: true, region: "US_EAST" }',
      '[SYS] Selecting Provider_0x992 (A100 Cluster)...',
      '[OK] Handshake established. Routing encrypted weights to provider.'
    ]
  },
  {
    id: 'execution',
    title: '3. Off-Chain Execution',
    description: 'The worker node executes the AI task in a secure environment. The heavy computation happens off-chain, but the node generates a lightweight cryptographic proof of the execution.',
    terminal: [
      '[SYS] Initializing local WASM neural environment...',
      '[CMD] Loading model weights into VRAM...',
      '[SYS] Execution cycle started. Processing 4,096 tokens...',
      '[OK] Computation complete. Generating zk-SNARK execution proof.'
    ]
  },
  {
    id: 'verification',
    title: '4. Cryptographic Settlement',
    description: 'The smart contract verifies the cryptographic proof. If the math checks out, the escrowed funds are released to the provider instantly and the AI output is returned to the user.',
    terminal: [
      '[SYS] Receiving result and ZK-Proof on Cerulea L1...',
      '[CMD] Execute verifyExecution(proof_data, output_hash)',
      '[SYS] Verification Status: [VALID]. Releasing escrow...',
      '[OK] Rewards settled to provider. Result delivered to DApp.'
    ]
  }
];

const ANATOMY_LAYERS = [
  {
    id: 'registry',
    icon: <DataObjectOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'LAYER 01: COMPUTE REGISTRY',
    name: 'The Task Ledger',
    role: 'Job Definition',
    desc: 'The foundational data layer. It registers the exact parameters of every AI task, including the model architecture, the required hardware tier, and the cryptographic hash of the input data to ensure zero-tampering.',
    code: `contract ComputeRegistry {\n  struct AITask {\n    address requester;\n    bytes32 inputHash;\n    uint16 vramRequired;\n    uint256 bounty;\n    bool isProcessed;\n  }\n  \n  mapping(uint256 => AITask) public jobs;\n\n  function postJob(bytes32 input, uint16 vram) external payable {\n    jobs[jobCount++] = AITask(msg.sender, input, vram, msg.value, false);\n    emit JobBroadcast(jobCount, vram);\n  }\n}`,
    simAction: 'Simulate Job Anchor',
    simLogs: [
      "> Compiling task manifest for LLM Inference...",
      "> Locking 250 USDC into Task Escrow #491...",
      "> Setting hardware constraint: H100_80GB_NODE...",
      "> Writing job state to Level 1 Storage...",
      "> [SUCCESS] AI Task successfully broadcast to network."
    ]
  },
  {
    id: 'matcher',
    icon: <SettingsInputComponentOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'LAYER 02: HARDWARE MATCHER',
    name: 'The Orchestration Logic',
    role: 'Resource Pairing',
    desc: 'This module acts as the networks dispatcher. It maintains a real-time table of available GPU clusters and their performance telemetry, pairing compute supply with demand via deterministic execution.',
    code: `contract ResourceMatcher {\n  function matchWorker(uint256 jobId) external returns (address) {\n    Worker memory w = getBestIdleWorker(jobs[jobId].vramRequired);\n    require(w.addr != address(0), "No hardware available");\n    activeTasks[jobId] = w.addr;\n    return w.addr;\n  }\n}`,
    simAction: 'Simulate Node Matching',
    simLogs: [
      "> Intercepting MatchRequest for Job #491...",
      "> Querying Global Worker Registry for idle GPUs...",
      "> Node 0x4A2 (RTX 4090) rejected: Insufficient VRAM.",
      "> Node 0x7B2 (A100 Cluster) selected: Hardware Match.",
      "> [SUCCESS] Provider 0x7B2 assigned to execution path."
    ]
  },
  {
    id: 'verifier',
    icon: <SecurityOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'LAYER 03: VERIFICATION ENGINE',
    name: 'The ZK-Inference Prover',
    role: 'Mathematical Integrity',
    desc: 'The cryptographic core. It takes the output generated by the worker and its accompanying ZK-Proof to verify that the AI was actually run on the correct data without re-executing the heavy model on-chain.',
    code: `contract ZKProver {\n  function verifyAIResult(uint256 jobId, bytes calldata proof) external view returns (bool) {\n    require(verifier.verify(proof, jobs[jobId].inputHash), "Invalid Computation");\n    return true;\n  }\n}`,
    simAction: 'Simulate Result Audit',
    simLogs: [
      "> Receiving Inference Result for Job #491...",
      "> Loading ZK-SNARK verification parameters...",
      "> Cross-referencing compute trace against input hash...",
      "> [PASS] Cryptographic witness confirms valid execution.",
      "> [SUCCESS] AI output verified as authentic."
    ]
  },
  {
    id: 'rewards',
    icon: <SyncAltOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'LAYER 04: PAYMENT DISTRIBUTOR',
    name: 'The Financial Router',
    role: 'Automated Settlement',
    desc: 'The final settlement layer. Once verification is complete, this contract releases the bounty to the hardware provider and routes a small protocol fee to the network treasury, concluding the cycle.',
    code: `function finalizeJob(uint256 jobId) external onlyVerifier {\n    address worker = activeTasks[jobId];\n    uint256 payout = jobs[jobId].bounty;\n    \n    payable(worker).transfer(payout * 95 / 100);\n    payable(treasury).transfer(payout * 5 / 100);\n    delete jobs[jobId];\n}`,
    simAction: 'Simulate Bounty Release',
    simLogs: [
      "> Triggering atomic settlement for Job #491...",
      "> Calculating pro-rata worker payout (237.50 USDC)...",
      "> Calculating network protocol fee (12.50 USDC)...",
      "> Executing parallel state transfers...",
      "> [SUCCESS] Capital settled. Reward cycle finalized."
    ]
  }
];

export default function DecentralizedAIUseCasePage() {
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
        <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '500px', background: 'radial-gradient(ellipse at top, rgba(192, 38, 211, 0.1), transparent 70%)', pointerEvents: 'none' }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 2, py: 1, borderRadius: 2, bgcolor: 'rgba(192, 38, 211, 0.1)', border: '1px solid rgba(192, 38, 211, 0.2)', mb: 4 }}>
              <SmartToyOutlinedIcon sx={{ color: '#c026d3', fontSize: 20 }} />
              <Typography sx={{ color: '#c026d3', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                Platform Use Case
              </Typography>
            </Box>
            
            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '3rem', md: '5rem' }, lineHeight: 1.05, letterSpacing: '-0.03em', mb: 4, mx: 'auto', maxWidth: 1000, color: '#172554' }}>
              Verify every inference.<br />
              <span style={{ color: '#64748B' }}>Eradicate centralized AI silos.</span>
            </Typography>
            
            <Typography sx={{ color: '#475569', fontSize: { xs: '1.1rem', md: '1.3rem' }, maxWidth: 850, lineHeight: 1.6, mb: 6, mx: 'auto', fontWeight: 400 }}>
              Deploy decentralized GPU clusters and verifiable AI inference networks. Distribute compute tasks across a sovereign fabric of nodes with mathematical proof of execution.
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
                Deploy Compute Clusters
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
              <Typography sx={{ color: '#c026d3', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>01.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Verifiable Inference</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Bypass the "black box" problem. Use Zero-Knowledge proofs to mathematically verify that a specific AI model was run correctly on specific input data without re-calculating the model on-chain.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#c026d3', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>02.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Sovereign GPU Orchestration</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Eliminate reliance on centralized cloud providers. Cerulea allows organizations to build private compute grids using distributed hardware, managed entirely by smart contract governance.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#c026d3', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>03.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Automated Compute Escrow</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Requesters lock capital in an atomic vault. Funds are only released to the hardware provider once the network cryptographically validates the successful completion of the AI task.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#c026d3', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>04.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Weight Confidentiality</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Protect proprietary models. Deploy tasks using Trusted Execution Environments (TEEs) where model weights remain encrypted even while being processed by third-party hardware nodes.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#c026d3', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>05.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Edge Intelligence Bridging</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Route AI tasks directly to edge hardware. Cerulea enables low-latency localized compute for IoT and robotics while maintaining a global immutable audit trail of every decision.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#c026d3', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>06.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Incentivized Data Training</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Decentralize the training process. Distribute micro-rewards to data providers and hardware operators based on the verified mathematical contribution to model performance improvements.</Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>

      {/* 3. THE LIFECYCLE STATE MACHINE (Side-by-Side Locked) */}
      <Box sx={{ bgcolor: '#FFFFFF', py: 16, borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', mb: 16 }}>
        <Container maxWidth="xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <Box sx={{ textAlign: 'center', mb: 10 }}>
              <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>The Compute Lifecycle</Typography>
              <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
                Follow the exact cryptographic progression of an AI task from initial request to verified result settlement.
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
                        borderColor: activeStep.id === step.id ? 'rgba(192, 38, 211, 0.4)' : '#E2E8F0',
                        bgcolor: activeStep.id === step.id ? 'rgba(192, 38, 211, 0.05)' : '#FFFFFF',
                        transition: 'all 0.2s ease',
                        '&:hover': { bgcolor: activeStep.id === step.id ? 'rgba(192, 38, 211, 0.08)' : '#F8FAFC' }
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                        <CheckCircleOutlineOutlinedIcon sx={{ color: activeStep.id === step.id ? '#c026d3' : '#CBD5E1', fontSize: 24 }} />
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
                  <Typography sx={{ color: '#64748B', fontSize: '0.75rem', ml: 2, fontFamily: 'monospace' }}>cerulea_neural_engine.log</Typography>
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
              Cerulea manages distributed AI through specialized, modular smart contracts. This architecture ensures compute integrity while automating reward settlement across global GPU clusters.
            </Typography>

            {!isDeconstructed ? (
              <Button 
                onClick={() => setIsDeconstructed(true)}
                variant="outlined" 
                endIcon={<LayersOutlinedIcon />} 
                sx={{ 
                  borderColor: '#c026d3', color: '#c026d3', px: 4, py: 1.5, fontSize: '1rem', fontWeight: 700, borderRadius: 2,
                  '&:hover': { bgcolor: 'rgba(192, 38, 211, 0.05)', borderColor: '#a21caf' }
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
                      <Box sx={{ position: 'absolute', top: 30, bottom: 30, left: 34, width: '2px', bgcolor: 'rgba(192, 38, 211, 0.2)', zIndex: 0 }} />
                      
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
                              borderColor: activeLayer.id === layer.id ? '#c026d3' : '#E2E8F0',
                              borderRadius: 3, 
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                              boxShadow: activeLayer.id === layer.id ? '0 10px 30px rgba(192, 38, 211, 0.15)' : 'none',
                              transform: activeLayer.id === layer.id ? 'translateX(10px)' : 'none'
                            }}
                          >
                            <Box sx={{ width: 48, height: 48, borderRadius: 2, bgcolor: activeLayer.id === layer.id ? 'rgba(192, 38, 211, 0.1)' : '#FFFFFF', border: '1px solid', borderColor: activeLayer.id === layer.id ? 'rgba(192, 38, 211, 0.3)' : '#E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                              <Box sx={{ color: activeLayer.id === layer.id ? '#c026d3' : '#94A3B8', display: 'flex' }}>{layer.icon}</Box>
                            </Box>
                            <Box>
                              <Typography sx={{ color: activeLayer.id === layer.id ? '#c026d3' : '#64748B', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', mb: 0.5, textTransform: 'uppercase' }}>
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
                            borderColor: activeTab === tab ? '#c026d3' : 'transparent',
                            bgcolor: activeTab === tab ? '#FFFFFF' : 'transparent',
                            color: activeTab === tab ? '#c026d3' : '#64748B',
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
                              
                              <Box sx={{ p: 3, bgcolor: 'rgba(192, 38, 211, 0.05)', borderRadius: 2, border: '1px solid rgba(192, 38, 211, 0.2)' }}>
                                <Typography sx={{ color: '#c026d3', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', mb: 1 }}>PLATFORM FUNCTION</Typography>
                                <Typography sx={{ color: '#172554', fontSize: '0.95rem', fontWeight: 600 }}>
                                  {activeLayer.role}
                                </Typography>
                              </Box>
                            </Box>
                          )}

                          {activeTab === 'code' && (
                            <Box sx={{ bgcolor: '#0f172a', borderRadius: 2, p: 3, overflowX: 'auto' }}>
                              <Typography component="pre" sx={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>
                                {activeLayer.code}
                              </Typography>
                            </Box>
                          )}

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
              Decentralized AI is a horizontal capability. Here is how different sectors utilize this model to un-silo intelligence and compute power.
            </Typography>
          </Box>

          <Stack spacing={4}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(192, 38, 211, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <PsychologyOutlinedIcon sx={{ fontSize: 40, color: '#c026d3' }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>LLM Inference & Agents</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Deploy large language models across a sovereign grid. Companies can run massive model inference without sending sensitive data to a single cloud provider, ensuring privacy through distributed cryptographic execution.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY DEPLOYMENTS</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#c026d3' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Private LLM Clusters</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#c026d3' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Autonomous AI Agents</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#c026d3' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Edge NLP Processing</Typography></Box>
                </Stack>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(192, 38, 211, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MemoryOutlinedIcon sx={{ fontSize: 40, color: '#c026d3' }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>Distributed Model Training</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Train foundational models using crowdsourced hardware. The network manages the distribution of gradient updates and verifies the mathematical contribution of each worker node to prevent adversarial data poisoning.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY DEPLOYMENTS</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#c026d3' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Crowdsourced Training</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#c026d3' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Federated Learning</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#c026d3' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Fine-Tuning Markets</Typography></Box>
                </Stack>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(192, 38, 211, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <HubOutlinedIcon sx={{ fontSize: 40, color: '#c026d3' }} />
              </Box>
              <Box flexGrow={1}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>Rendering & Visual Compute</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Execute heavy visual tasks like 3D rendering or high-resolution image generation. Smart contracts handle the partitioning of frames across the network and reassemble the results after cryptographic verification.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY DEPLOYMENTS</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#c026d3' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Render Farm Networks</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#c026d3' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Generative Art Engines</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#c026d3' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Spatial Asset Design</Typography></Box>
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
                Whether you are bridging legacy enterprise AI workloads or deploying native decentralized inference, Cerulea provides the exact routing required.
              </Typography>
            </Box>

            <Stack spacing={10}>
              <Box>
                <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1, textAlign: 'center' }}>Track A: Enterprise AI Hybrid Bridging</Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', mb: 6, lineHeight: 1.6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
                  For institutional data teams. Legacy HTTP requests from internal AI pipelines are translated into secure decentralized compute tasks automatically.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2, position: 'relative' }}>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '1px solid #CBD5E1', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <DomainOutlinedIcon sx={{ color: '#64748B', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Internal AI Pipeline</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Python / PyTorch Env</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#64748B', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>HTTPS / REST</Typography>
                    <ArrowForwardIcon sx={{ color: '#64748B', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: 'rgba(192, 38, 211, 0.05)', border: '2px solid #c026d3', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(192, 38, 211, 0.15)' }}>
                      <ApiOutlinedIcon sx={{ color: '#c026d3', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Cerulea API Gateway</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Workload Translation</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#c026d3', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>WASM COMPILATION</Typography>
                    <ArrowForwardIcon sx={{ color: '#c026d3', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '2px solid #059669', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(5, 150, 105, 0.15)' }}>
                      <DnsOutlinedIcon sx={{ color: '#059669', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Cerulea Private Chain</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Sovereign Worker Registry</Typography>
                  </Box>
                </Box>
              </Box>

              <Divider sx={{ borderColor: '#E2E8F0' }} />

              <Box>
                <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1, textAlign: 'center' }}>Track B: Native Verifiable Inference</Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', mb: 6, lineHeight: 1.6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
                  For Web3 AI DApps and agents. Bypass legacy middleware and route cryptographic compute signatures directly to the public execution layer.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2, position: 'relative' }}>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '1px solid #CBD5E1', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <TerminalOutlinedIcon sx={{ color: '#64748B', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>AI Agent / DApp</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>React Client & Node JS</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#64748B', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>WALLET SIGNATURE</Typography>
                    <ArrowForwardIcon sx={{ color: '#64748B', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: 'rgba(37, 99, 235, 0.05)', border: '2px solid #2563eb', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(37, 99, 235, 0.15)' }}>
                      <HubOutlinedIcon sx={{ color: '#2563eb', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Consensus Network</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>ZK-Verifier Protocol</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#2563eb', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>STATE EXECUTION</Typography>
                    <ArrowForwardIcon sx={{ color: '#2563eb', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '2px solid #9333ea', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(147, 51, 234, 0.15)' }}>
                      <MemoryOutlinedIcon sx={{ color: '#9333ea', fontSize: 32 }} />
                    </Box>
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
            <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
              Building custom ZK-proving circuits for AI models and distributed GPU indexing software from scratch requires world-class cryptographers and massive audit budgets. Calculate your exact deployment speed using Cerulea.
            </Typography>
          </Box>

          <Box sx={{ p: { xs: 4, md: 6 }, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
            <Grid container spacing={8} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography sx={{ color: '#172554', fontWeight: 600, mb: 1 }}>Required Model Provers & Cluster Integrations</Typography>
                <Typography sx={{ color: '#c026d3', fontSize: '3rem', fontWeight: 800, mb: 4 }}>{complexity} Rules</Typography>
                
                <Slider
                  value={complexity} onChange={handleComplexityChange} min={10} max={200} step={10}
                  sx={{ color: '#c026d3', height: 8, '& .MuiSlider-thumb': { height: 24, width: 24, backgroundColor: '#fff', border: '2px solid currentColor' } }}
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
                      <Typography sx={{ fontSize: '0.8rem', color: '#475569' }}>Custom ZK-Circuitry & Audits</Typography>
                    </Box>
                    <Typography sx={{ fontSize: '1.75rem', color: '#172554', fontWeight: 700 }}>{legacyMonths} Months</Typography>
                  </Box>

                  <Box sx={{ p: 3, bgcolor: 'rgba(192, 38, 211, 0.05)', border: '1px solid rgba(192, 38, 211, 0.2)', borderRadius: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography sx={{ fontSize: '0.75rem', color: '#c026d3', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>CERULEA EXECUTION</Typography>
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
                The legacy development timeline utilizes Web3 cryptography benchmarks. Writing custom Zero-Knowledge circuits for model verification, negotiating P2P networking protocols for GPU orchestration, and deploying fragile middleware for an average AI application takes a baseline of 6 months. Building the exact same logical architecture via Cerulea requires a baseline of 2 weeks. This acceleration is achieved because Cerulea Studio visually translates your neural compute rules into pre-audited, battle-tested WebAssembly (WASM) binaries instantly, entirely bypassing the manual coding, debugging, and external auditing phases.
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>

    </Box>
  );
}