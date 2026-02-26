'use client';

import * as React from 'react';
import { Box, Container, Typography, Grid, Stack, Button, Divider, Slider } from '@mui/material';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
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
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import FolderSharedOutlinedIcon from '@mui/icons-material/FolderSharedOutlined';

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
    id: 'identity',
    title: '1. Patient Sovereignty',
    description: 'A patient generates a Decentralized Identifier (DID) within a secure enclave. This cryptographic identity allows them to own their medical records across all providers without a central database.',
    terminal: [
      '[SYS] Initializing Healthcare DID Enclave...',
      '[CMD] generateIdentity { type: "PATIENT", id: "P_992_ALPHA" }',
      '[AUTH] Anchoring public key 0x7B2...F11 to MedicalRegistry...',
      '[OK] Patient identity enrolled. Sovereignty established.'
    ]
  },
  {
    id: 'consent',
    title: '2. Granular Consent',
    description: 'The patient defines a cryptographic consent policy. They grant a specific doctor temporary access to a specific record (e.g., an MRI scan) using a zero-knowledge attribute check.',
    terminal: [
      '[SYS] Intercepting Consent Authorization...',
      '[CMD] grantAccess { doctor: 0x992, resource: "MRI_SCAN_7A", duration: "24H" }',
      '[AUTH] Validating patient digital signature...',
      '[OK] Consent anchored to block 2049182. Access keys generated.'
    ]
  },
  {
    id: 'exchange',
    title: '3. Encrypted Data Routing',
    description: 'When the doctor requests the record, the smart contract verifies the active consent and routes a cryptographically wrapped pointer to the doctor terminal. The data remains encrypted in transit.',
    terminal: [
      '[SYS] Processing Data Retrieval Request...',
      '[CMD] verifyConsent(Doctor: 0x992, Resource: "MRI_SCAN_7A")',
      '[SYS] Fetching encrypted pointer from off-chain storage...',
      '[OK] Data routed. Handshake established via secure relayer.'
    ]
  },
  {
    id: 'audit',
    title: '4. Permanent Audit Log',
    description: 'Every access event is cryptographically sealed on the ledger. Compliance officers can algorithmically verify HIPAA adherence by auditing the unalterable history of data handovers.',
    terminal: [
      '[SYS] Finalizing Data Exchange Event...',
      '[CMD] generateForensicHash(Exchange_ID_4821)',
      '[SYS] Writing compliance anchor to L1 block 2049190...',
      '[OK] Session terminated. Immutable audit log finalized.'
    ]
  }
];

const ANATOMY_LAYERS = [
  {
    id: 'registry',
    icon: <DataObjectOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'LAYER 01: THE PATIENT REGISTRY',
    name: 'The Sovereign Ledger',
    role: 'Identity & Metadata',
    desc: 'The foundational layer that holds the mapping between patients and their encrypted record pointers. It does not store raw medical data. It maintains the cryptographic index of ownership and authorship.',
    code: `contract PatientRegistry {\n  struct Record {\n    address patient;\n    bytes32 dataHash;\n    string storageURI;\n    bool isFrozen;\n  }\n  \n  mapping(bytes32 => Record) public medicalIndex;\n\n  function anchorRecord(bytes32 id, string calldata uri) external {\n    medicalIndex[id] = Record(msg.sender, id, uri, false);\n    emit RecordAnchored(id, msg.sender);\n  }\n}`,
    simAction: 'Simulate Identity Enroll',
    simLogs: [
      "> Initializing Patient DID: P_992_ALPHA...",
      "> Hashing MRI scan metadata pointer...",
      "> Locking authorship to wallet 0x8F1...C33...",
      "> Writing record index to Level 1 Storage...",
      "> [SUCCESS] Patient state successfully anchored."
    ]
  },
  {
    id: 'gatekeeper',
    icon: <ShieldOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'LAYER 02: CONSENT GATEKEEPER',
    name: 'The Permission Engine',
    role: 'Granular Access Control',
    desc: 'The logic center for HIPAA compliance. This module evaluates if a provider has the necessary cryptographic permission to access a record. It manages time-based access and emergency break-glass protocols.',
    code: `contract ConsentGatekeeper {\n  function hasConsent(address doctor, bytes32 recordId) external view returns (bool) {\n    Permission memory p = activePermissions[doctor][recordId];\n    return p.isValid && block.timestamp <= p.expiry;\n  }\n\n  function authorize(address doctor, bytes32 id, uint256 time) external {\n    activePermissions[doctor][id] = Permission(true, block.timestamp + time);\n  }\n}`,
    simAction: 'Simulate Consent Check',
    simLogs: [
      "> Intercepting request from Doctor 0x99A...",
      "> Querying Consent Registry for record MRI_SCAN_7A...",
      "> [PASS] Active 24-hour consent window found.",
      "> Verifying requester identity via DID attestation...",
      "> [SUCCESS] Authorization granted. Fetching data pointer."
    ]
  },
  {
    id: 'bridge',
    icon: <SyncAltOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'LAYER 03: SECURE DATA BRIDGE',
    name: 'The Exchange Router',
    role: 'Encrypted Handshakes',
    desc: 'The active engine for data movement. It facilitates the atomic exchange of record keys between patient storage and provider terminals. It ensures that data remains sharded and encrypted until reaching the authorized destination.',
    code: `function initiateTransfer(address to, bytes32 recordId) external onlyGatekeeper {\n    bytes32 keyHash = computeExchangeKey(msg.sender, to, recordId);\n    _routeEncryptedPointer(to, registry.getURI(recordId), keyHash);\n    emit DataExchanged(recordId, to, block.timestamp);\n  }`,
    simAction: 'Simulate Secure Route',
    simLogs: [
      "> Generating one-time exchange key for Doctor...",
      "> Encrypting storage pointer via AES-GCM...",
      "> Pushing cryptographically wrapped payload to Provider...",
      "> Monitoring for successful decryption signal...",
      "> [SUCCESS] Data exchange completed via secure relay."
    ]
  },
  {
    id: 'auditor',
    icon: <FactCheckOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'LAYER 04: FORENSIC AUDITOR',
    name: 'The Compliance Finalizer',
    role: 'Unalterable Logging',
    desc: 'The final layer for legal accountability. It creates a high-integrity trail of every interaction with a medical record. It is designed for regulatory auditing, proving who saw what data and exactly when.',
    code: `contract ForensicAuditor {\n  function logAccess(bytes32 recordId, address actor, string calldata action) external {\n    bytes32 auditHash = keccak256(abi.encode(recordId, actor, action, block.timestamp));\n    historicalLogs.push(auditHash);\n    emit ComplianceEvent(auditHash);\n  }\n}`,
    simAction: 'Simulate Audit Seal',
    simLogs: [
      "> Aggregating session metadata: { ID: 4821, Actor: 0x99A }...",
      "> Generating SHA-256 fingerprint of access trace...",
      "> Executing anchorAudit() on Cerulea L1...",
      "> Distributing forensic hash to compliance nodes...",
      "> [SUCCESS] Compliance trail permanently sealed."
    ]
  }
];

export default function HealthcareDataUseCasePage() {
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
        <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '500px', background: 'radial-gradient(ellipse at top, rgba(219, 39, 119, 0.1), transparent 70%)', pointerEvents: 'none' }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 2, py: 1, borderRadius: 2, bgcolor: 'rgba(219, 39, 119, 0.1)', border: '1px solid rgba(219, 39, 119, 0.2)', mb: 4 }}>
              <HealthAndSafetyOutlinedIcon sx={{ color: '#db2777', fontSize: 20 }} />
              <Typography sx={{ color: '#db2777', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                Platform Use Case
              </Typography>
            </Box>
            
            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '3rem', md: '5rem' }, lineHeight: 1.05, letterSpacing: '-0.03em', mb: 4, mx: 'auto', maxWidth: 1000, color: '#172554' }}>
              Own your medical records.<br />
              <span style={{ color: '#64748B' }}>Eradicate provider data silos.</span>
            </Typography>
            
            <Typography sx={{ color: '#475569', fontSize: { xs: '1.1rem', md: '1.3rem' }, maxWidth: 850, lineHeight: 1.6, mb: 6, mx: 'auto', fontWeight: 400 }}>
              Deploy patient sovereign health networks with granular consent management, secure cryptographic handovers, and HIPAA compliant audit trails powered by Cerulea.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
              <Button 
                href="/company/contact"
                variant="contained" 
                endIcon={<ArrowForwardIcon />} 
                sx={{ 
                  bgcolor: '#db2777', color: '#FFFFFF', px: 4, py: 2, fontSize: '1rem', fontWeight: 700, borderRadius: 2,
                  boxShadow: '0 4px 14px rgba(219, 39, 119, 0.3)',
                  '&:hover': { bgcolor: '#be185d', transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(219, 39, 119, 0.4)' },
                  transition: 'all 0.2s'
                }}
              >
                Deploy Healthcare Frameworks
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
              <Typography sx={{ color: '#db2777', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>01.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Decentralized Patient IDs</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Bypass the central patient index. Cerulea utilizes W3C compliant DIDs to give patients absolute control over their identity keys, ensuring they are the definitive root of trust for their own records.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#db2777', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>02.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Zero-Knowledge Consent</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Verify permissions without exposing data. Use ZK-Proofs to mathematically confirm a patient has granted access to a specific provider without ever recording sensitive PII on the public ledger.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#db2777', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>03.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Encrypted Record Sharding</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Medical data is encrypted and sharded before storage. The ledger only holds the cryptographic pointers and reassembly logic, ensuring data is physically resilient and practically unhackable.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#db2777', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>04.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Interoperable State Rails</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Connect disparate EMR systems. Because the consent and ownership logic exists on a universal ledger, different hospital networks can exchange records securely using the same source of truth.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#db2777', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>05.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Real-Time Compliance Audit</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Replace quarterly HIPAA audits with instant verification. Compliance officers use the ledger to audit the chronological record of data handovers, proving data integrity and privacy adherence.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#db2777', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>06.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1 }}>Programmatic Break-Glass</Typography>
              <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Enable emergency access logic. In critical situations, verified emergency personnel can bypass standard consent using a multi-sig protocol, with the event automatically flagged for forensic review.</Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>

      {/* 3. THE LIFECYCLE STATE MACHINE (Side-by-Side Locked) */}
      <Box sx={{ bgcolor: '#FFFFFF', py: 16, borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', mb: 16 }}>
        <Container maxWidth="xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <Box sx={{ textAlign: 'center', mb: 10 }}>
              <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#172554' }}>The Exchange Lifecycle</Typography>
              <Typography sx={{ color: '#475569', fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
                Follow the cryptographic progression of a medical record as it is authored, protected by consent, and securely shared with providers.
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
                        borderColor: activeStep.id === step.id ? 'rgba(219, 39, 119, 0.4)' : '#E2E8F0',
                        bgcolor: activeStep.id === step.id ? 'rgba(219, 39, 119, 0.05)' : '#FFFFFF',
                        transition: 'all 0.2s ease',
                        '&:hover': { bgcolor: activeStep.id === step.id ? 'rgba(219, 39, 119, 0.08)' : '#F8FAFC' }
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                        <CheckCircleOutlineOutlinedIcon sx={{ color: activeStep.id === step.id ? '#db2777' : '#CBD5E1', fontSize: 24 }} />
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
                  <Typography sx={{ color: '#64748B', fontSize: '0.75rem', ml: 2, fontFamily: 'monospace' }}>cerulea_health_engine.log</Typography>
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
              Cerulea manages sensitive medical data through specialized, modular smart contracts. This layered approach ensures that identity, consent, and exchange are handled with absolute cryptographic safety.
            </Typography>

            {!isDeconstructed ? (
              <Button 
                onClick={() => setIsDeconstructed(true)}
                variant="outlined" 
                endIcon={<LayersOutlinedIcon />} 
                sx={{ 
                  borderColor: '#db2777', color: '#db2777', px: 4, py: 1.5, fontSize: '1rem', fontWeight: 700, borderRadius: 2,
                  '&:hover': { bgcolor: 'rgba(219, 39, 119, 0.05)', borderColor: '#be185d' }
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
                      <Box sx={{ position: 'absolute', top: 30, bottom: 30, left: 34, width: '2px', bgcolor: 'rgba(219, 39, 119, 0.2)', zIndex: 0 }} />
                      
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
                              borderColor: activeLayer.id === layer.id ? '#db2777' : '#E2E8F0',
                              borderRadius: 3, 
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                              boxShadow: activeLayer.id === layer.id ? '0 10px 30px rgba(219, 39, 119, 0.15)' : 'none',
                              transform: activeLayer.id === layer.id ? 'translateX(10px)' : 'none'
                            }}
                          >
                            <Box sx={{ width: 48, height: 48, borderRadius: 2, bgcolor: activeLayer.id === layer.id ? 'rgba(219, 39, 119, 0.1)' : '#FFFFFF', border: '1px solid', borderColor: activeLayer.id === layer.id ? 'rgba(219, 39, 119, 0.3)' : '#E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                              <Box sx={{ color: activeLayer.id === layer.id ? '#db2777' : '#94A3B8', display: 'flex' }}>{layer.icon}</Box>
                            </Box>
                            <Box>
                              <Typography sx={{ color: activeLayer.id === layer.id ? '#db2777' : '#64748B', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', mb: 0.5, textTransform: 'uppercase' }}>
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
                            borderColor: activeTab === tab ? '#db2777' : 'transparent',
                            bgcolor: activeTab === tab ? '#FFFFFF' : 'transparent',
                            color: activeTab === tab ? '#db2777' : '#64748B',
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
                              
                              <Box sx={{ p: 3, bgcolor: 'rgba(219, 39, 119, 0.05)', borderRadius: 2, border: '1px solid rgba(219, 39, 119, 0.2)' }}>
                                <Typography sx={{ color: '#db2777', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', mb: 1 }}>PLATFORM FUNCTION</Typography>
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
              Patient-sovereign data sharing is a horizontal capability. Here is how different sectors utilize this model to un-silo medical discovery.
            </Typography>
          </Box>

          <Stack spacing={4}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(219, 39, 119, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <LocalHospitalOutlinedIcon sx={{ fontSize: 40, color: '#db2777' }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>Clinical Health Networks</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Eliminate fax machines and physical CD-ROMs. Specialty clinics utilize Cerulea to request instant, patient-authorized access to MRI scans and bloodwork from distant primary care networks, significantly reducing diagnostic time.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY DEPLOYMENTS</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#db2777' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Cross-Network EMR</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#db2777' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Radiology Exchange</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#db2777' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Emergency Break-Glass</Typography></Box>
                </Stack>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(219, 39, 119, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <DataObjectOutlinedIcon sx={{ fontSize: 40, color: '#db2777' }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>Pharmaceutical R&D</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Gather real-world evidence (RWE) directly from patient cohorts. Pharma researchers can issue tokenized incentives to patients who share anonymized clinical data, ensuring higher compliance and data diversity for clinical trials.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY DEPLOYMENTS</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#db2777' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Trial Recruitment</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#db2777' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Anonymized Telemetry</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#db2777' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Outcome Verification</Typography></Box>
                </Stack>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(219, 39, 119, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <FolderSharedOutlinedIcon sx={{ fontSize: 40, color: '#db2777' }} />
              </Box>
              <Box flexGrow={1}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#172554', mb: 1 }}>Health Insurance & Underwriting</Typography>
                <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Accelerate the underwriting process. Applicants grant insurance providers temporary, verifiable access to their ledger-anchored medical history, eliminating the manual collection of medical records and reducing policy issuance time from weeks to hours.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E2E8F0' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY DEPLOYMENTS</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#db2777' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Claims Validation</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#db2777' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>History Verification</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#db2777' }}/><Typography sx={{ fontSize: '0.9rem', color: '#172554', fontWeight: 600 }}>Risk Attribute Attestations</Typography></Box>
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
                Whether you are bridging legacy hospital databases or routing native patient mobile wallets, Cerulea provides the exact infrastructure flow required.
              </Typography>
            </Box>

            <Stack spacing={10}>
              <Box>
                <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1, textAlign: 'center' }}>Track A: Enterprise EMR Bridging</Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', mb: 6, lineHeight: 1.6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
                  For institutional health systems. Legacy HTTP requests from existing software (Epic, Cerner) are securely hashed and translated into sovereign DID identities automatically.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2, position: 'relative' }}>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '1px solid #CBD5E1', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <DomainOutlinedIcon sx={{ color: '#64748B', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Legacy EMR Core</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Epic / Cerner Database</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#64748B', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>HTTPS / REST</Typography>
                    <ArrowForwardIcon sx={{ color: '#64748B', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: 'rgba(219, 39, 119, 0.05)', border: '2px solid #db2777', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(219, 39, 119, 0.15)' }}>
                      <ApiOutlinedIcon sx={{ color: '#db2777', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Cerulea API Gateway</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Metadata Translation</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#db2777', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>WASM COMPILATION</Typography>
                    <ArrowForwardIcon sx={{ color: '#db2777', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '2px solid #059669', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(5, 150, 105, 0.15)' }}>
                      <DnsOutlinedIcon sx={{ color: '#059669', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Cerulea Private Chain</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Consortium Index Ledger</Typography>
                  </Box>
                </Box>
              </Box>

              <Divider sx={{ borderColor: '#E2E8F0' }} />

              <Box>
                <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#172554', mb: 1, textAlign: 'center' }}>Track B: Native Sovereign Health Execution</Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem', mb: 6, lineHeight: 1.6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
                  For patient DApps and decentralized clinics. Bypass legacy middle-men and route cryptographic identity signatures directly to the public execution layer.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2, position: 'relative' }}>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '1px solid #CBD5E1', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <TerminalOutlinedIcon sx={{ color: '#64748B', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Patient Mobile App</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>React DApp & Secure Vault</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#64748B', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>WALLET SIGNATURE</Typography>
                    <ArrowForwardIcon sx={{ color: '#64748B', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: 'rgba(37, 99, 235, 0.05)', border: '2px solid #2563eb', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(37, 99, 235, 0.15)' }}>
                      <FingerprintOutlinedIcon sx={{ color: '#2563eb', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', mb: 0.5 }}>Consensus Network</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#475569' }}>Consent Verification Nodes</Typography>
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
              Building custom ZK-consent circuits and unalterable medical audit registries from scratch requires specialized world-class cryptographers and massive audit budgets. Calculate your exact deployment speed using Cerulea.
            </Typography>
          </Box>

          <Box sx={{ p: { xs: 4, md: 6 }, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
            <Grid container spacing={8} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography sx={{ color: '#172554', fontWeight: 600, mb: 1 }}>Required Consent Rules & Provider Types</Typography>
                <Typography sx={{ color: '#db2777', fontSize: '3rem', fontWeight: 800, mb: 4 }}>{complexity} Rules</Typography>
                
                <Slider
                  value={complexity} onChange={handleComplexityChange} min={10} max={200} step={10}
                  sx={{ color: '#db2777', height: 8, '& .MuiSlider-thumb': { height: 24, width: 24, backgroundColor: '#fff', border: '2px solid currentColor' } }}
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

                  <Box sx={{ p: 3, bgcolor: 'rgba(219, 39, 119, 0.05)', border: '1px solid rgba(219, 39, 119, 0.2)', borderRadius: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography sx={{ fontSize: '0.75rem', color: '#db2777', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>CERULEA EXECUTION</Typography>
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
                The legacy development timeline utilizes Web3 cybersecurity benchmarks. Writing custom Zero-Knowledge circuits for HIPAA-compliant consent, negotiating HL7 FHIR data standards between providers, and deploying fragile encryption middleware for an average healthcare application takes a baseline of 12 months. Building the exact same logical architecture via Cerulea requires a baseline of 4 weeks. This acceleration is achieved because Cerulea Studio visually translates your regulatory rules into pre-audited, battle-tested WebAssembly (WASM) binaries instantly, entirely bypassing the manual coding, debugging, and external auditing phases.
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>

    </Box>
  );
}