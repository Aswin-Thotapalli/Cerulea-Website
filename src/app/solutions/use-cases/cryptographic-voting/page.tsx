'use client';

import * as React from 'react';
import { Box, Container, Typography, Grid, Stack, Button, Divider, Slider } from '@mui/material';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
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
import FingerprintOutlinedIcon from '@mui/icons-material/FingerprintOutlined';
import HowToVoteOutlinedIcon from '@mui/icons-material/HowToVoteOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';

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
    id: 'registration',
    title: '1. Voter Credentialing',
    description: 'A user proves their eligibility to vote (e.g., citizenship or shareholding) using a decentralized identity. The system issues a blind cryptographic credential that allows them to vote anonymously.',
    terminal: [
      '[SYS] Initializing Identity Resolver...',
      '[CMD] Verify Credential { type: "Citizen_ID", region: "District_12" }',
      '[AUTH] Generating blind signature for voter wallet...',
      '[OK] Voter registered. Anonymous ballot token issued.'
    ]
  },
  {
    id: 'submission',
    title: '2. Ballot Submission',
    description: 'The voter signs their choice using their private key. The choice is encrypted before being sent to the ledger, ensuring that no one, not even the network admins, can see the vote before the tally.',
    terminal: [
      '[SYS] Receiving encrypted ballot payload...',
      '[CMD] Execute castVote(Encrypted_Payload, Voter_Proof)',
      '[AUTH] Verifying ZK-Proof of eligibility...',
      '[OK] Ballot accepted and anchored to block 1977021.'
    ]
  },
  {
    id: 'tallying',
    title: '3. Homomorphic Tallying',
    description: 'Votes are counted while still encrypted. Using homomorphic encryption, the smart contract mathematically combines the encrypted choices to find the winner without ever decrypting individual ballots.',
    terminal: [
      '[SYS] Voting period closed. Starting Tally Phase...',
      '[CMD] Execute addEncryptedBallots(Election_ID_99)',
      '[SYS] Processing 150,000 cryptographic witnesses...',
      '[OK] Final aggregate sum calculated in encrypted state.'
    ]
  },
  {
    id: 'reveal',
    title: '4. Verifiable Decryption',
    description: 'The aggregate result is decrypted using a threshold of keys held by independent trustees. A mathematical proof of the tally is published, allowing anyone to verify the results are correct.',
    terminal: [
      '[SYS] Collecting 5 of 7 Trustee decryption shares...',
      '[CMD] Reveal Result { Option_A: 82%, Option_B: 18% }',
      '[SYS] Compiling proof of tally integrity...',
      '[OK] Election finalized. Results anchored for public audit.'
    ]
  }
];

const ANATOMY_LAYERS = [
  {
    id: 'ballot',
    icon: <DataObjectOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'LAYER 01: BALLOT REGISTRY',
    name: 'The Immutable Urn',
    role: 'Vote Storage',
    desc: 'The foundational layer that stores the encrypted vote payloads. It ensures that once a vote is cast, it cannot be deleted or modified. Every entry is chronologically anchored to the ledger with a cryptographic link to the previous vote.',
    code: `contract BallotRegistry {\n  struct Vote {\n    bytes32 encryptedChoice;\n    bytes zkProof;\n    uint256 blockTimestamp;\n  }\n  \n  mapping(uint256 => Vote[]) public ballots;\n\n  function castBallot(uint256 id, bytes32 choice, bytes calldata proof) external {\n    ballots[id].push(Vote(choice, proof, block.timestamp));\n    emit BallotCast(id, block.timestamp);\n  }\n}`,
    simAction: 'Simulate Vote Cast',
    simLogs: [
      "> Ingesting encrypted choice: 0x8a9b...f2e1...",
      "> Checking Level 1 Storage for duplicate signatures...",
      "> [PASS] Vote is unique and valid.",
      "> Writing ballot to persistent ledger state...",
      "> [SUCCESS] Encrypted choice secured in block 2104992."
    ]
  },
  {
    id: 'identity',
    icon: <FingerprintOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'LAYER 02: IDENTITY VERIFIER',
    name: 'The Eligibility Gate',
    role: 'Sybil Resistance',
    desc: 'This layer enforces "one person, one vote" without compromising privacy. It utilizes Zero-Knowledge proofs to verify the voter holds a valid credential from an authorized registry without revealing the voters actual identity.',
    code: `contract IdentityVerifier {\n  function verifyEligibility(bytes calldata zkProof, bytes32 nullifier) \n    external view returns (bool) \n  {\n    require(!usedNullifiers[nullifier], "Already voted");\n    require(zkSnark.verify(zkProof), "Invalid Credential");\n    return true;\n  }\n}`,
    simAction: 'Simulate ID Check',
    simLogs: [
      "> Receiving ZK-Proof from voter wallet...",
      "> Verifying nullifier 0x992...a1f against used list...",
      "> [PASS] Voter has not cast a previous ballot.",
      "> Executing ZK-SNARK verification on credential...",
      "> [SUCCESS] Eligibility confirmed. Privacy maintained."
    ]
  },
  {
    id: 'tally',
    icon: <AccountTreeOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'LAYER 03: TALLY ENGINE',
    name: 'The Consensus Counter',
    role: 'Election Logic',
    desc: 'The logic center that determines the winner. It can be configured for First-Past-The-Post, Ranked-Choice, or Quadratic voting. It aggregates the encrypted ballots into a final result using purely mathematical execution.',
    code: `contract TallyEngine {\n  function calculateTally(uint256 id) external onlyTrustees {\n    for(uint i=0; i < ballots[id].length; i++) {\n      _sumEncrypted(ballots[id][i].encryptedChoice);\n    }\n    emit TallyCompleted(id, block.timestamp);\n  }\n}`,
    simAction: 'Simulate Rank Tally',
    simLogs: [
      "> Closing voting period for Election #99...",
      "> Initializing batch aggregation protocol...",
      "> Tallying 150,000 ballots using homomorphic math...",
      "> Consolidating Option A, B, and C totals...",
      "> [SUCCESS] Final aggregate sum compiled and sealed."
    ]
  },
  {
    id: 'oracle',
    icon: <SyncAltOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'LAYER 04: RESULT ORACLE',
    name: 'The Truth Bridge',
    role: 'Outcome Anchoring',
    desc: 'The final layer that pushes the verified result to external systems (like a corporate boardroom dashboard or a government registry). It generates a cryptographic proof of the entire election that anyone can verify independently.',
    code: `contract ResultOracle {\n  function finalizeResult(uint256 id, bytes32 resultHash) external {\n    require(verifier.isTallyVerified(id, resultHash), "Integrity Fail");\n    externalRegistry.anchorResult(id, resultHash);\n    emit ElectionFinalized(id, resultHash);\n  }\n}`,
    simAction: 'Simulate Final Anchor',
    simLogs: [
      "> Compiling full election integrity proof...",
      "> Trustee quorum signed: 5 of 7 verified.",
      "> Anchoring final result hash to Government L1...",
      "> Pushing webhook to Corporate Dashboard...",
      "> [SUCCESS] Result definitively anchored for public audit."
    ]
  }
];

export default function CryptographicVotingUseCasePage() {
  const [activeStep, setActiveStep] = React.useState(LIFECYCLE_STEPS[0]);
  const [isDeconstructed, setIsDeconstructed] = React.useState(false);
  const [activeLayer, setActiveLayer] = React.useState(ANATOMY_LAYERS[0]);
  const [activeTab, setActiveTab] = React.useState<'architecture' | 'code' | 'simulate'>('architecture');
  const [simLogIndex, setSimLogIndex] = React.useState(0);
  const [isSimulating, setIsSimulating] = React.useState(false);
  
  const [complexity, setComplexity] = React.useState<number>(50); 
  const handleComplexityChange = (event: Event, newValue: number | number[]) => setComplexity(newValue as number);
  
  const legacyMonths = Math.round(12 + (complexity * 0.20));
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
        <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '500px', background: 'radial-gradient(ellipse at top, rgba(234, 88, 12, 0.1), transparent 70%)', pointerEvents: 'none' }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 2, py: 1, borderRadius: 2, bgcolor: 'rgba(234, 88, 12, 0.1)', border: '1px solid rgba(234, 88, 12, 0.2)', mb: 4 }}>
              <HowToVoteOutlinedIcon sx={{ color: '#ea580c', fontSize: 20 }} />
              <Typography sx={{ color: '#ea580c', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                Platform Use Case
              </Typography>
            </Box>
            
            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '3rem', md: '5rem' }, lineHeight: 1.05, letterSpacing: '-0.03em', mb: 4, mx: 'auto', maxWidth: 1000, color: '#172554' }}>
              Verify every ballot.<br />
              <span style={{ color: '#64748B' }}>Eradicate election tampering.</span>
            </Typography>
            
            <Typography sx={{ color: '#475569', fontSize: { xs: '1.1rem', md: '1.3rem' }, maxWidth: 850, lineHeight: 1.6, mb: 6, mx: 'auto', fontWeight: 400 }}>
              Deploy end-to-end verifiable voting frameworks for national elections, corporate boards, and DAOs. Execute tamper-proof tallies with zero-knowledge voter privacy.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
              <Button 
                href="/company/contact"
                variant="contained" 
                endIcon={<ArrowForwardIcon />} 
                sx={{ 
                  bgcolor: '#ea580c', color: '#FFFFFF', px: 4, py: 2, fontSize: '1rem', fontWeight: 700, borderRadius: 2,
                  boxShadow: '0 4px 14px rgba(234, 88, 12, 0.3)',
                  '&:hover': { bgcolor: '#c2410c', transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(234, 88, 12, 0.4)' },
                  transition: 'all 0.2s'
                }}
              >
                Deploy Voting Frameworks
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
              <Typography sx={{ color: '#ea580c', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>01.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>End-to-End Verifiability</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Every voter receives a cryptographic receipt. This allows them to verify their vote was recorded correctly without exposing their choice, while anyone can verify the final tally math is perfect.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#ea580c', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>02.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Zero-Knowledge Identity</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Bypass the privacy trade-off. Use ZK-Proofs to confirm a voter is eligible (e.g., is over 18 and a citizen) without ever recording their name or PII on the blockchain ledger.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#ea580c', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>03.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Homomorphic Tallying</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Execute mathematical operations on encrypted data. Smart contracts count the votes while they are still in their encrypted state, ensuring the result is only revealed at the deadline.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#ea580c', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>04.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Sybil Resistance</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Bind digital identities to physical biometrics or trusted government credentials. Cerulea mathematically guarantees that one human equals exactly one vote, preventing automated spam attacks.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#ea580c', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>05.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Anti-Coercion Protocols</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Deploy mix-networks or decoy ballot logic. These advanced cryptographic structures allow voters to change their minds safely, preventing external parties from verifying how they voted.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#ea580c', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>06.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Global Tally Audit</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>The entire election history is a chain of hashes. Independent observers run their own nodes to verify the election in real time, making it impossible to inject fake ballots or delete real ones.</Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>

      {/* 3. THE LIFECYCLE STATE MACHINE (Side-by-Side Locked) */}
      <Box sx={{ bgcolor: '#FFFFFF', py: 16, borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', mb: 16 }}>
        <Container maxWidth="xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <Box sx={{ textAlign: 'center', mb: 10 }}>
              <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>The Election State Machine</Typography>
              <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
                Follow the exact cryptographic progression of a digital ballot from voter credentialing to verified public reveal.
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
                        borderColor: activeStep.id === step.id ? 'rgba(234, 88, 12, 0.4)' : '#E2E8F0',
                        bgcolor: activeStep.id === step.id ? 'rgba(234, 88, 12, 0.05)' : '#FFFFFF',
                        transition: 'all 0.2s ease',
                        '&:hover': { bgcolor: activeStep.id === step.id ? 'rgba(234, 88, 12, 0.08)' : '#F8FAFC' }
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                        <CheckCircleOutlineOutlinedIcon sx={{ color: activeStep.id === step.id ? '#ea580c' : '#CBD5E1', fontSize: 24 }} />
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
                  <Typography sx={{ color: '#64748B', fontSize: '0.75rem', ml: 2, fontFamily: 'monospace' }}>cerulea_voting_engine.log</Typography>
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

      {/* 4. SMART CONTRACT ANATOMY (Exploded View) */}
      <Container maxWidth="xl" sx={{ mb: 20 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>Smart Contract Anatomy</Typography>
            <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 800, mx: 'auto', mb: 6 }}>
              Cerulea handles digital democracy through specialized, modular smart contracts. This layered approach ensures that identity, privacy, and tallies are managed with absolute mathematical integrity.
            </Typography>

            {!isDeconstructed ? (
              <Button 
                onClick={() => setIsDeconstructed(true)}
                variant="outlined" 
                endIcon={<LayersOutlinedIcon />} 
                sx={{ 
                  borderColor: '#ea580c', color: '#ea580c', px: 4, py: 1.5, fontSize: '1rem', fontWeight: 700, borderRadius: 2,
                  '&:hover': { bgcolor: 'rgba(234, 88, 12, 0.05)', borderColor: '#c2410c' }
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
                      <Box sx={{ position: 'absolute', top: 30, bottom: 30, left: 34, width: '2px', bgcolor: 'rgba(234, 88, 12, 0.2)', zIndex: 0 }} />
                      
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
                              borderColor: activeLayer.id === layer.id ? '#ea580c' : '#E2E8F0',
                              borderRadius: 3, 
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                              boxShadow: activeLayer.id === layer.id ? '0 10px 30px rgba(234, 88, 12, 0.15)' : 'none',
                              transform: activeLayer.id === layer.id ? 'translateX(10px)' : 'none'
                            }}
                          >
                            <Box sx={{ width: 48, height: 48, borderRadius: 2, bgcolor: activeLayer.id === layer.id ? 'rgba(234, 88, 12, 0.1)' : '#FFFFFF', border: '1px solid', borderColor: activeLayer.id === layer.id ? 'rgba(234, 88, 12, 0.3)' : '#E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                              <Box sx={{ color: activeLayer.id === layer.id ? '#ea580c' : '#94A3B8', display: 'flex' }}>{layer.icon}</Box>
                            </Box>
                            <Box>
                              <Typography sx={{ color: activeLayer.id === layer.id ? '#ea580c' : '#64748B', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', mb: 0.5, textTransform: 'uppercase' }}>
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
                            borderColor: activeTab === tab ? '#ea580c' : 'transparent',
                            bgcolor: activeTab === tab ? '#FFFFFF' : 'transparent',
                            color: activeTab === tab ? '#ea580c' : '#64748B',
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
                              
                              <Box sx={{ p: 3, bgcolor: 'rgba(234, 88, 12, 0.05)', borderRadius: 2, border: '1px solid rgba(234, 88, 12, 0.2)' }}>
                                <Typography sx={{ color: '#ea580c', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', mb: 1 }}>PLATFORM FUNCTION</Typography>
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
              Cryptographic voting is a horizontal capability. Here is how different sectors utilize this execution model to un-silo collective trust.
            </Typography>
          </Box>

          <Stack spacing={4}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(234, 88, 12, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <AssuredWorkloadOutlinedIcon sx={{ fontSize: 40, color: '#ea580c' }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>Public Governance & Elections</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Modernize national and local voting. Smart contracts provide a tamper-proof "digital urn" that can be audited by millions of citizens in real time, drastically reducing the cost and time required for manual ballot recounts.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY DEPLOYMENTS</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#ea580c' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>National Referendums</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#ea580c' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>District Council Votes</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#ea580c' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Citizen Registries</Typography></Box>
                </Stack>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(234, 88, 12, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <DomainOutlinedIcon sx={{ fontSize: 40, color: '#ea580c' }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>Corporate Boardrooms</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Enable frictionless proxy voting for global shareholders. Fractional shareowners cast ballots directly from their digital wallets, with the smart contract automatically executing the resulting boardroom resolution or budget payout.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY DEPLOYMENTS</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#ea580c' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Shareholder Resolutions</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#ea580c' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Budget Allocation</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#ea580c' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Executive Appointments</Typography></Box>
                </Stack>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(234, 88, 12, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <PeopleOutlinedIcon sx={{ fontSize: 40, color: '#ea580c' }} />
              </Box>
              <Box flexGrow={1}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>Unions & Cooperatives</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Decentralize member decision-making. Unions utilize quadratic voting to ensure that specialized interests are balanced fairly across the entire membership, with results anchored to a sovereign consortium ledger.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY DEPLOYMENTS</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#ea580c' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Collective Bargaining</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#ea580c' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Co-op Profit Sharing</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#ea580c' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Internal Policy Polling</Typography></Box>
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
                Whether you are bridging legacy identity databases or routing native cryptographic ballots, Cerulea provides the exact infrastructure flow required.
              </Typography>
            </Box>

            <Stack spacing={10}>
              <Box>
                <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1, textAlign: 'center' }}>Track A: Institutional Identity Bridging</Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', mb: 6, lineHeight: 1.6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
                  For governments and large enterprises. Legacy HTTP requests from existing citizen or employee databases are translated into secure ZK-ballot tokens automatically.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2, position: 'relative' }}>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '1px solid #CBD5E1', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <DomainOutlinedIcon sx={{ color: '#64748B', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Legacy ID Database</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Government / HR Server</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#64748B', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>HTTPS / REST</Typography>
                    <ArrowForwardIcon sx={{ color: '#64748B', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: 'rgba(234, 88, 12, 0.05)', border: '2px solid #ea580c', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(234, 88, 12, 0.15)' }}>
                      <ApiOutlinedIcon sx={{ color: '#ea580c', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Cerulea API Gateway</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>ZK-Token Translation</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#ea580c', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>WASM COMPILATION</Typography>
                    <ArrowForwardIcon sx={{ color: '#ea580c', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '2px solid #059669', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(5, 150, 105, 0.15)' }}>
                      <DnsOutlinedIcon sx={{ color: '#059669', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Cerulea Private Chain</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Sovereign Tally State</Typography>
                  </Box>
                </Box>
              </Box>

              <Divider sx={{ borderColor: '#E2E8F0' }} />

              <Box>
                <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1, textAlign: 'center' }}>Track B: Native Verifiable Democracy</Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', mb: 6, lineHeight: 1.6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
                  For community referendums and decentralized collectives. Bypass legacy middleware and route cryptographic choice signatures directly to the public execution layer.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2, position: 'relative' }}>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '1px solid #CBD5E1', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <TerminalOutlinedIcon sx={{ color: '#64748B', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Citizen Mobile App</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>React Client & Node JS</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#64748B', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>WALLET SIGNATURE</Typography>
                    <ArrowForwardIcon sx={{ color: '#64748B', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: 'rgba(37, 99, 235, 0.05)', border: '2px solid #2563eb', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(37, 99, 235, 0.15)' }}>
                      <BallotOutlinedIcon sx={{ color: '#2563eb', fontSize: 32 }} />
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
              Building custom homomorphic tally engines and ZK-credential registries from scratch requires specialized world-class cryptographers and massive audit budgets. Calculate your exact deployment speed using Cerulea.
            </Typography>
          </Box>

          <Box sx={{ p: { xs: 4, md: 6 }, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
            <Grid container spacing={8} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography sx={{ color: '#172554', fontWeight: 600, mb: 1 }}>Required Voting Parameters & Integrations</Typography>
                <Typography sx={{ color: '#ea580c', fontSize: '3rem', fontWeight: 800, mb: 4 }}>{complexity} Rules</Typography>
                
                <Slider
                  value={complexity} onChange={handleComplexityChange} min={10} max={200} step={10}
                  sx={{ color: '#ea580c', height: 8, '& .MuiSlider-thumb': { height: 24, width: 24, backgroundColor: '#fff', border: '2px solid currentColor' } }}
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
                      <Typography sx={{ fontSize: '0.8rem', color: '#475569' }}>Custom Cryptography & Audits</Typography>
                    </Box>
                    <Typography sx={{ fontSize: '1.75rem', color: '#172554', fontWeight: 700 }}>{legacyMonths} Months</Typography>
                  </Box>

                  <Box sx={{ p: 3, bgcolor: 'rgba(234, 88, 12, 0.05)', border: '1px solid rgba(234, 88, 12, 0.2)', borderRadius: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography sx={{ fontSize: '0.75rem', color: '#ea580c', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>CERULEA EXECUTION</Typography>
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
                The legacy development timeline utilizes Web3 cybersecurity benchmarks. Writing custom homomorphic encryption tally logic, negotiating W3C identity data standards, and deploying fragile middleware for an average voting application takes a baseline of 12 months. Building the exact same logical architecture via Cerulea requires a baseline of 4 weeks. This acceleration is achieved because Cerulea Studio visually translates your democratic rules into pre-audited, battle-tested WebAssembly (WASM) binaries instantly, entirely bypassing the manual cryptographic coding, debugging, and external auditing phases.
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>

    </Box>
  );
}