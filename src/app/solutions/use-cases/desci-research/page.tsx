'use client';

import * as React from 'react';
import { Box, Container, Typography, Grid, Stack, Button, Divider, Slider } from '@mui/material';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
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
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';

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
    id: 'proposal',
    title: '1. Research Proposal',
    description: 'A scientist or lab anchors a research abstract and resource requirements to the ledger. This establishes immutable priority and authorship of the hypothesis.',
    terminal: [
      '[SYS] Initializing Research Manifest...',
      '[CMD] anchorThesis(title: "Longevity_B3", author: 0x7B2, hash: 0x89a...)',
      '[AUTH] Verifying institutional credentials...',
      '[OK] Research ID #401 initialized. Proof-of-priority established.'
    ]
  },
  {
    id: 'funding',
    title: '2. Quadratic Funding',
    description: 'The community and institutional partners contribute capital. Smart contracts utilize quadratic funding math to prioritize projects with the most unique contributors.',
    terminal: [
      '[SYS] Opening Funding Epoch 12...',
      '[CMD] Calculate match_ratio(votes: 490, total_pot: 50k USDC)',
      '[SYS] Executing algorithmic treasury distribution...',
      '[OK] 12,400 USDC routed to Research_Vault_401.'
    ]
  },
  {
    id: 'review',
    title: '3. Verifiable Peer Review',
    description: 'Independent reviewers submit cryptographic attestations. Reviewer identities are verified while their specific raw data remains private via zero-knowledge proofs.',
    terminal: [
      '[SYS] Intercepting Peer_Review_Packet...',
      '[CMD] verifyReviewer(id: 0x992, credential_hash: 0x4f2...)',
      '[AUTH] Executing ZK-Proof validation for domain expertise...',
      '[OK] Review verified. Scientific confidence metric updated.'
    ]
  },
  {
    id: 'monetization',
    title: '4. IP-NFT Issuance',
    description: 'The finalized research and resulting patents are tokenized as IP-NFTs. Licensing revenue is automatically split between the researchers, reviewers, and funders.',
    terminal: [
      '[SYS] Detecting Patent_Approval_Event...',
      '[CMD] mintIPNFT(subject: "Longevity_B3", supply: 1,000,000)',
      '[SYS] Deploying royalty splitter contract...',
      '[OK] Ownership fractionalized. Licensing revenue streams active.'
    ]
  }
];

const ANATOMY_LAYERS = [
  {
    id: 'registry',
    icon: <HistoryEduOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'LAYER 01: DATA REGISTRY',
    name: 'The Research Anchor',
    role: 'Authorship & Priority',
    desc: 'The foundational layer that holds the mathematical hash of research datasets and abstracts. It prevents "scooping" by establishing a permanent, chronological record of discovery that is globally verifiable.',
    code: `contract ResearchRegistry {\n  struct Paper {\n    address author;\n    bytes32 dataHash;\n    uint256 blockTime;\n    bool isPeerReviewed;\n  }\n  \n  mapping(uint256 => Paper) public researchState;\n\n  function anchorResearch(bytes32 hash) external {\n    researchState[paperCount++] = Paper(msg.sender, hash, block.timestamp, false);\n    emit ResearchAnchored(msg.sender, hash);\n  }\n}`,
    simAction: 'Simulate Thesis Anchor',
    simLogs: [
      "> Compiling research manifest for Project 'Alpha-Neuro'...",
      "> Generating SHA-256 fingerprint of raw lab data...",
      "> Executing anchorResearch() on Cerulea L1...",
      "> Writing authorship struct to Level 1 Storage...",
      "> [SUCCESS] Scientific priority established at block 195021."
    ]
  },
  {
    id: 'treasury',
    icon: <MonetizationOnOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'LAYER 02: FUNDING CORE',
    name: 'The Quadratic Treasury',
    role: 'Capital Distribution',
    desc: 'Bypasses traditional grant bureaucracy. This module manages capital pools and utilizes Quadratic Funding algorithms to distribute matching funds based on the breadth of community support.',
    code: `contract QuadraticTreasury {\n  function distributeMatching(uint256 projectId) external onlyAdmin {\n    uint256 match = math.calculateQF(projectVotes[projectId], totalPool);\n    require(address(this).balance >= match, "Underfunded");\n    payable(projectWallet[projectId]).transfer(match);\n  }\n}`,
    simAction: 'Simulate Match Payout',
    simLogs: [
      "> Evaluating Epoch 12 participation metrics...",
      "> Project #401 detected with 492 unique donors...",
      "> Executing Quadratic Funding formula (x = sum(sqrt(c))^2)...",
      "> Authorizing matching payout: 12,400 USDC...",
      "> [SUCCESS] Treasury funds routed autonomously to Lab."
    ]
  },
  {
    id: 'review',
    icon: <VerifiedOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'LAYER 03: REVIEW HOOK',
    name: 'The Peer-Review Engine',
    role: 'Integrity Validation',
    desc: 'A specialized credentialing hook. It allows verified subject-matter experts to sign off on research findings. The contract checks the reviewers DID (Decentralized Identity) for valid academic credentials before accepting the attestation.',
    code: `contract ReviewEngine {\n  function submitReview(uint256 paperId, bool passes) external {\n    require(identityRegistry.hasCredential(msg.sender, "PhD"), "Unauthorized");\n    registry.updateReviewStatus(paperId, passes);\n    _rewardReviewer(msg.sender);\n  }\n}`,
    simAction: 'Simulate Peer Review',
    simLogs: [
      "> Receiving signature from Reviewer 0x992...",
      "> Querying DID Registry for PhD Credential...",
      "> [PASS] Reviewer identity verified via Harvard_Registry.",
      "> Updating research status to 'Peer_Reviewed'...",
      "> [SUCCESS] Attestation anchored. Confidence metric increased."
    ]
  },
  {
    id: 'vault',
    icon: <SecurityOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'LAYER 04: IP-NFT VAULT',
    name: 'The Ownership Token',
    role: 'Monetization & Rights',
    desc: 'The final layer that tokenizes the intellectual property. It manages fractional ownership of patent rights and automatically splits licensing revenue or commercialization profits among researchers and early funders.',
    code: `contract IPVault is ERC1155 {\n  function depositRoyalty(uint256 tokenId) external payable {\n    Stake[] memory members = royaltySplits[tokenId];\n    for(uint i=0; i < members.length; i++) {\n      payable(members[i].wallet).transfer(msg.value * members[i].bps / 10000);\n    }\n  }\n}`,
    simAction: 'Simulate Royalty Split',
    simLogs: [
      "> Ingesting licensing payment: 5,000 USDC...",
      "> Querying IP-NFT cap-table for Project #401...",
      "> Calculating pro-rata splits (Researchers: 60%, Funders: 40%)...",
      "> Executing 12 parallel atomic transfers...",
      "> [SUCCESS] Revenue distributed to all stakeholders."
    ]
  }
];

export default function DeSciResearchUseCasePage() {
  const [activeStep, setActiveStep] = React.useState(LIFECYCLE_STEPS[0]);
  const [isDeconstructed, setIsDeconstructed] = React.useState(false);
  const [activeLayer, setActiveLayer] = React.useState(ANATOMY_LAYERS[0]);
  const [activeTab, setActiveTab] = React.useState<'architecture' | 'code' | 'simulate'>('architecture');
  const [simLogIndex, setSimLogIndex] = React.useState(0);
  const [isSimulating, setIsSimulating] = React.useState(false);
  
  const [complexity, setComplexity] = React.useState<number>(50); 
  const handleComplexityChange = (event: Event, newValue: number | number[]) => setComplexity(newValue as number);
  
  const legacyMonths = Math.round(12 + (complexity * 0.15));
  const ceruleaWeeks = Math.round(3 + (complexity * 0.05));

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
        <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '500px', background: 'radial-gradient(ellipse at top, rgba(13, 148, 136, 0.1), transparent 70%)', pointerEvents: 'none' }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 2, py: 1, borderRadius: 2, bgcolor: 'rgba(13, 148, 136, 0.1)', border: '1px solid rgba(13, 148, 136, 0.2)', mb: 4 }}>
              <ScienceOutlinedIcon sx={{ color: '#0d9488', fontSize: 20 }} />
              <Typography sx={{ color: '#0d9488', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                Platform Use Case
              </Typography>
            </Box>
            
            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '3rem', md: '5rem' }, lineHeight: 1.05, letterSpacing: '-0.03em', mb: 4, mx: 'auto', maxWidth: 1000, color: '#172554' }}>
              Verify research.<br />
              <span style={{ color: '#64748B' }}>Eradicate funding bottlenecks.</span>
            </Typography>
            
            <Typography sx={{ color: '#475569', fontSize: { xs: '1.1rem', md: '1.3rem' }, maxWidth: 850, lineHeight: 1.6, mb: 6, mx: 'auto', fontWeight: 400 }}>
              Deploy decentralized science frameworks for transparent R&D, peer-review attestations, and IP-NFT monetization using the Cerulea execution engine.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
              <Button 
                href="/company/contact"
                variant="contained" 
                endIcon={<ArrowForwardIcon />} 
                sx={{ 
                  bgcolor: '#0d9488', color: '#FFFFFF', px: 4, py: 2, fontSize: '1rem', fontWeight: 700, borderRadius: 2,
                  boxShadow: '0 4px 14px rgba(13, 148, 136, 0.3)',
                  '&:hover': { bgcolor: '#0f766e', transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(13, 148, 136, 0.4)' },
                  transition: 'all 0.2s'
                }}
              >
                Deploy Science Frameworks
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
              <Typography sx={{ color: '#0d9488', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>01.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Fractional Research Ownership</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Bypass monolithic institutional control. Researchers can issue fractional ownership tokens to funders and contributors, ensuring direct stake in the assets commercial future.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#0d9488', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>02.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Verifiable Data Repositories</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Eradicate p-hacking and data manipulation. Researchers anchor cryptographic hashes of raw lab datasets to the ledger, proving results were not altered prior to publication.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#0d9488', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>03.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Incentivized Peer Review</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Automate high-quality peer review. Smart contracts reward domain experts with tokens or reputation scores for verified reviews, removing the current non-compensated labor model.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#0d9488', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>04.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>IP-NFT Patenting</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Tokenize intellectual property directly at the point of discovery. Intellectual Property NFTs (IP-NFTs) manage the legal and financial rights to research outputs without legal friction.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#0d9488', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>05.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Quadratic Funding Rounds</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Deploy fair capital distribution. Smart contracts automatically match community contributions with large-scale grants, ensuring funding follows scientific utility rather than politics.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#0d9488', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>06.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Open Access State</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Remove the paywalls of legacy journals. Research results and citations are stored as accessible network state, allowing for automated, transparent impact-factor calculations.</Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>

      {/* 3. THE LIFECYCLE STATE MACHINE (Side-by-Side Locked) */}
      <Box sx={{ bgcolor: '#FFFFFF', py: 16, borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', mb: 16 }}>
        <Container maxWidth="xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <Box sx={{ textAlign: 'center', mb: 10 }}>
              <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>The Research Lifecycle</Typography>
              <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
                Follow the cryptographic progression of a scientific hypothesis from funding to verified commercialization.
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
                        borderColor: activeStep.id === step.id ? 'rgba(13, 148, 136, 0.4)' : '#E2E8F0',
                        bgcolor: activeStep.id === step.id ? 'rgba(13, 148, 136, 0.05)' : '#FFFFFF',
                        transition: 'all 0.2s ease',
                        '&:hover': { bgcolor: activeStep.id === step.id ? 'rgba(13, 148, 136, 0.08)' : '#F8FAFC' }
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                        <CheckCircleOutlineOutlinedIcon sx={{ color: activeStep.id === step.id ? '#0d9488' : '#CBD5E1', fontSize: 24 }} />
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
                  <Typography sx={{ color: '#64748B', fontSize: '0.75rem', ml: 2, fontFamily: 'monospace' }}>cerulea_desci_engine.log</Typography>
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
              Cerulea manages distributed research through specialized, modular smart contracts. This layered approach ensures scientific priority, automates funding, and protects intellectual property.
            </Typography>

            {!isDeconstructed ? (
              <Button 
                onClick={() => setIsDeconstructed(true)}
                variant="outlined" 
                endIcon={<LayersOutlinedIcon />} 
                sx={{ 
                  borderColor: '#0d9488', color: '#0d9488', px: 4, py: 1.5, fontSize: '1rem', fontWeight: 700, borderRadius: 2,
                  '&:hover': { bgcolor: 'rgba(13, 148, 136, 0.05)', borderColor: '#0f766e' }
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
                      <Box sx={{ position: 'absolute', top: 30, bottom: 30, left: 34, width: '2px', bgcolor: 'rgba(13, 148, 136, 0.2)', zIndex: 0 }} />
                      
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
                              borderColor: activeLayer.id === layer.id ? '#0d9488' : '#E2E8F0',
                              borderRadius: 3, 
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                              boxShadow: activeLayer.id === layer.id ? '0 10px 30px rgba(13, 148, 136, 0.15)' : 'none',
                              transform: activeLayer.id === layer.id ? 'translateX(10px)' : 'none'
                            }}
                          >
                            <Box sx={{ width: 48, height: 48, borderRadius: 2, bgcolor: activeLayer.id === layer.id ? 'rgba(13, 148, 136, 0.1)' : '#FFFFFF', border: '1px solid', borderColor: activeLayer.id === layer.id ? 'rgba(13, 148, 136, 0.3)' : '#E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                              <Box sx={{ color: activeLayer.id === layer.id ? '#0d9488' : '#94A3B8', display: 'flex' }}>{layer.icon}</Box>
                            </Box>
                            <Box>
                              <Typography sx={{ color: activeLayer.id === layer.id ? '#0d9488' : '#64748B', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', mb: 0.5, textTransform: 'uppercase' }}>
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
                            borderColor: activeTab === tab ? '#0d9488' : 'transparent',
                            bgcolor: activeTab === tab ? '#FFFFFF' : 'transparent',
                            color: activeTab === tab ? '#0d9488' : '#64748B',
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
                              
                              <Box sx={{ p: 3, bgcolor: 'rgba(13, 148, 136, 0.05)', borderRadius: 2, border: '1px solid rgba(13, 148, 136, 0.2)' }}>
                                <Typography sx={{ color: '#0d9488', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', mb: 1 }}>PLATFORM FUNCTION</Typography>
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
              DeSci is a horizontal architectural model. Here is how different scientific domains utilize this model to accelerate the pace of human discovery.
            </Typography>
          </Box>

          <Stack spacing={4}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(13, 148, 136, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <DnsOutlinedIcon sx={{ fontSize: 40, color: '#0d9488' }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>Biotech & Longevity</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Fund expensive, high-risk clinical trials through community-led DAOs. Decentralized ownership of therapeutic IP ensures that life-saving drugs can be commercialized without exclusively relying on Big Pharma licensing.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY DEPLOYMENTS</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#0d9488' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Clinical Trial DAOs</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#0d9488' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>IP-NFT Patenting</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#0d9488' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Open Lab Registries</Typography></Box>
                </Stack>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(13, 148, 136, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <DataObjectOutlinedIcon sx={{ fontSize: 40, color: '#0d9488' }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>Machine Learning & AI Research</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Verify the authenticity of AI training datasets. Distributed researchers contribute data and weights to foundational models, receiving micro-royalties every time the model is utilized for commercial inference.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY DEPLOYMENTS</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#0d9488' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Model Weight IP</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#0d9488' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Dataset Verification</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#0d9488' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Compute Credit Swap</Typography></Box>
                </Stack>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(13, 148, 136, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <AccountTreeOutlinedIcon sx={{ fontSize: 40, color: '#0d9488' }} />
              </Box>
              <Box flexGrow={1}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>Environmental & Climate Tech</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Anchor sensor telemetry from carbon capture facilities or solar grids. Mathematical proof of environmental impact allows for the issuance of high-integrity, non-forgeable carbon credits.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY DEPLOYMENTS</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#0d9488' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Impact Verification</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#0d9488' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Carbon Asset Minting</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#0d9488' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Green Grant Funding</Typography></Box>
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
                Whether you are bridging legacy university grant software or routing native community-led R&D, Cerulea provides the exact routing required.
              </Typography>
            </Box>

            <Stack spacing={10}>
              <Box>
                <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1, textAlign: 'center' }}>Track A: Academic Grant Bridging</Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', mb: 6, lineHeight: 1.6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
                  For universities and government research bodies. Legacy HTTP requests from existing ERP systems are translated into secure funding tokens automatically.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2, position: 'relative' }}>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '1px solid #CBD5E1', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <DomainOutlinedIcon sx={{ color: '#64748B', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Legacy Research Core</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>University Grant DB</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#64748B', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>HTTPS / REST</Typography>
                    <ArrowForwardIcon sx={{ color: '#64748B', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: 'rgba(13, 148, 136, 0.05)', border: '2px solid #0d9488', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(13, 148, 136, 0.15)' }}>
                      <ApiOutlinedIcon sx={{ color: '#0d9488', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Cerulea API Gateway</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Data Hashing & Mapping</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#0d9488', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>WASM COMPILATION</Typography>
                    <ArrowForwardIcon sx={{ color: '#0d9488', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '2px solid #059669', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(5, 150, 105, 0.15)' }}>
                      <DnsOutlinedIcon sx={{ color: '#059669', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Cerulea Private Chain</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Consortium Funding Ledger</Typography>
                  </Box>
                </Box>
              </Box>

              <Divider sx={{ borderColor: '#E2E8F0' }} />

              <Box>
                <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1, textAlign: 'center' }}>Track B: Native DeSci Ecosystem</Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', mb: 6, lineHeight: 1.6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
                  For community researchers and patient DAOs. Bypass legacy journals and route peer-review signatures directly to the public execution layer.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2, position: 'relative' }}>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '1px solid #CBD5E1', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <TerminalOutlinedIcon sx={{ color: '#64748B', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Researcher DApp</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>React Portal & Wallets</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#64748B', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>WALLET SIGNATURE</Typography>
                    <ArrowForwardIcon sx={{ color: '#64748B', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: 'rgba(37, 99, 235, 0.05)', border: '2px solid #2563eb', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(37, 99, 235, 0.15)' }}>
                      <AccountTreeOutlinedIcon sx={{ color: '#2563eb', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Consensus Network</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Validator Review Tallying</Typography>
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
              Building custom research funding math and multi-sig reviewer registries from scratch requires specialized engineers and massive audit budgets. Calculate your exact deployment speed using Cerulea.
            </Typography>
          </Box>

          <Box sx={{ p: { xs: 4, md: 6 }, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
            <Grid container spacing={8} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography sx={{ color: '#172554', fontWeight: 600, mb: 1 }}>Required Grant Parameters & Reviewers</Typography>
                <Typography sx={{ color: '#0d9488', fontSize: '3rem', fontWeight: 800, mb: 4 }}>{complexity} Rules</Typography>
                <Slider
                  value={complexity} onChange={handleComplexityChange} min={10} max={200} step={10}
                  sx={{ color: '#0d9488', height: 8, '& .MuiSlider-thumb': { height: 24, width: 24, backgroundColor: '#fff', border: '2px solid currentColor' } }}
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
                      <Typography sx={{ fontSize: '0.8rem', color: '#475569' }}>Solidity Code & Third-Party Audits</Typography>
                    </Box>
                    <Typography sx={{ fontSize: '1.75rem', color: '#172554', fontWeight: 700 }}>{legacyMonths} Months</Typography>
                  </Box>

                  <Box sx={{ p: 3, bgcolor: 'rgba(13, 148, 136, 0.05)', border: '1px solid rgba(13, 148, 136, 0.2)', borderRadius: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography sx={{ fontSize: '0.75rem', color: '#0d9488', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>CERULEA EXECUTION</Typography>
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
                The legacy development timeline utilizes R&D infrastructure benchmarks. Writing custom Quadratic Funding math, negotiating data standards with academic bodies, and deploying fragile middleware for an average research application takes a baseline of 12 months. Building the exact same logical architecture via Cerulea requires a baseline of 3 weeks. This acceleration is achieved because Cerulea Studio visually translates your discovery rules into pre audited, battle tested WebAssembly (WASM) binaries instantly, entirely bypassing the manual coding, debugging, and external auditing phases.
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>

    </Box>
  );
}