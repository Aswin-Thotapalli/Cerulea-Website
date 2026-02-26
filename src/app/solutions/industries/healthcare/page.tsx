'use client';

import * as React from 'react';
import { Box, Container, Typography, Grid, Stack, Button, Divider, Slider } from '@mui/material';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

// Icons tailored for Healthcare
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import MedicationOutlinedIcon from '@mui/icons-material/MedicationOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import DomainOutlinedIcon from '@mui/icons-material/DomainOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import EnhancedEncryptionOutlinedIcon from '@mui/icons-material/EnhancedEncryptionOutlined';

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

const HEALTHCARE_PILLARS = [
  {
    id: 'ehr',
    icon: <HealthAndSafetyOutlinedIcon />,
    title: 'Interoperable Health Records',
    legacy: 'Patient data is trapped in isolated Electronic Health Record (EHR) databases. Hospitals, specialists, and primary care physicians cannot easily share critical medical histories, leading to redundant testing and delayed care.',
    execution: 'Cerulea provides a unified, highly encrypted ledger layer. Authorized providers can securely query a patient’s complete medical history across different institutional databases using standardized endpoints.',
    impact: 'Consolidate fragmented patient data into a single, highly secure source of truth accessible instantly by authorized care teams.'
  },
  {
    id: 'billing',
    icon: <ReceiptLongOutlinedIcon />,
    title: 'Automated Claims Adjudication',
    legacy: 'Medical billing is a highly manual process. Providers wait 30 to 90 days for insurance reimbursements, with a massive percentage of claims requiring expensive human labor to rework and appeal.',
    execution: 'Deploy programmable billing contracts. Claims are submitted to the execution layer where smart contracts automatically verify patient coverage, service codes, and network rules, settling the payment instantly.',
    impact: 'Drastically reduce administrative overhead and accelerate provider cash flow by automating the insurance reimbursement cycle.'
  },
  {
    id: 'pharma',
    icon: <MedicationOutlinedIcon />,
    title: 'Pharmaceutical Traceability',
    legacy: 'Complex global supply chains make it difficult to track the origin of medications. This opacity allows counterfeit drugs to enter the market and complicates targeted batch recalls.',
    execution: 'Issue a Digital Product Passport for every pharmaceutical batch. Manufacturers, distributors, and pharmacies cryptographically sign the handover of goods onto the shared network.',
    impact: 'Achieve absolute visibility into the drug supply chain, ensuring authenticity and isolating recalls to exact affected units.'
  },
  {
    id: 'clinical',
    icon: <ScienceOutlinedIcon />,
    title: 'Clinical Trial Integrity',
    legacy: 'Research data is often stored in centralized spreadsheets. The inability to definitively prove that trial results were not altered retroactively creates friction in the regulatory approval process.',
    execution: 'Research institutions anchor clinical trial metrics directly to the ledger in real-time. The data is permanently hashed, providing undeniable proof of when the results were recorded and ensuring they remain unaltered.',
    impact: 'Provide global regulators (FDA, EMA) with unalterable, highly verifiable evidence of clinical trial integrity.'
  },
  {
    id: 'consent',
    icon: <FactCheckOutlinedIcon />,
    title: 'Patient Consent Management',
    legacy: 'Managing patient privacy preferences relies on easily misplaced paper forms and disjointed IT systems. Patients have zero visibility into which institutions are actively accessing their health data.',
    execution: 'Implement granular cryptographic governance. Patients hold sovereign control over their identity wallets, explicitly granting and revoking data access to researchers or specialists via digital signatures.',
    impact: 'Ensure strict compliance with global privacy regulations (HIPAA, GDPR) by giving patients verifiable control over their data.'
  },
  {
    id: 'telemetry',
    icon: <MonitorHeartOutlinedIcon />,
    title: 'Medical Device Telemetry',
    legacy: 'Data generated by wearable health monitors and remote medical devices is often siloed in proprietary manufacturer apps, making it difficult for primary care physicians to utilize the data effectively.',
    execution: 'Connect edge devices and health monitors directly to decentralized Oracles. Vital signs are routed securely into the patient’s unified ledger record, triggering automated alerts if parameters are breached.',
    impact: 'Establish a secure, continuous pipeline of remote patient telemetry directly to authorized clinical care teams.'
  }
];

export default function HealthcareSolutionPageLight() {
  // Simulator State
  const [monthlyClaims, setMonthlyClaims] = React.useState<number>(50000); 
  const handleClaimsChange = (event: Event, newValue: number | number[]) => setMonthlyClaims(newValue as number);
  
  // Math Logic for Medical Claims Reconciliation
  const reworkRate = 0.15;
  const reworkCostPerClaim = 25.00;
  const legacyCostPerMonth = (monthlyClaims * reworkRate) * reworkCostPerClaim;
  const annualLegacyCost = legacyCostPerMonth * 12;

  const ceruleaCostPerClaim = 0.10; 
  const annualCeruleaCost = monthlyClaims * ceruleaCostPerClaim * 12;
  const annualSavings = annualLegacyCost - annualCeruleaCost;

  const [activePillar, setActivePillar] = React.useState(HEALTHCARE_PILLARS[0]);

  return (
    <Box sx={{ bgcolor: '#FAFAFA', color: '#111827', overflowX: 'hidden', pb: 0 }}>
      
      {/* 1. THE HERO */}
      <Box sx={{ pt: { xs: 16, md: 24 }, pb: { xs: 12, md: 16 }, position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '500px', background: 'radial-gradient(ellipse at top, rgba(236, 72, 153, 0.1), transparent 70%)', pointerEvents: 'none' }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 2, py: 1, borderRadius: 2, bgcolor: 'rgba(236, 72, 153, 0.1)', border: '1px solid rgba(236, 72, 153, 0.2)', mb: 4 }}>
              <HealthAndSafetyOutlinedIcon sx={{ color: '#db2777', fontSize: 20 }} />
              <Typography sx={{ color: '#db2777', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                Healthcare & Life Sciences
              </Typography>
            </Box>
            
            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '3rem', md: '5rem' }, lineHeight: 1.05, letterSpacing: '-0.03em', mb: 4, mx: 'auto', maxWidth: 1000, color: '#111827' }}>
              Enterprise blockchain infrastructure.<br />
              <span style={{ color: '#6B7280' }}>Built for healthcare.</span>
            </Typography>
            
            <Typography sx={{ color: '#4B5563', fontSize: { xs: '1.1rem', md: '1.3rem' }, maxWidth: 850, lineHeight: 1.6, mb: 6, mx: 'auto', fontWeight: 400 }}>
              Cerulea provides the execution engine to secure patient data, automate medical billing, and trace pharmaceutical supply chains without writing complex smart contract code.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
              <Button 
                href="/company/contact"
                variant="contained" 
                endIcon={<ArrowForwardIcon />} 
                sx={{ 
                  bgcolor: '#ec4899', color: '#FFFFFF', px: 4, py: 2, fontSize: '1rem', fontWeight: 700, borderRadius: 2,
                  boxShadow: '0 4px 14px rgba(236, 72, 153, 0.3)',
                  '&:hover': { bgcolor: '#db2777', transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(236, 72, 153, 0.4)' },
                  transition: 'all 0.2s'
                }}
              >
                Schedule an Architecture Review
              </Button>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* 2. THE STRATEGIC ADVANTAGES (STRICT 3x2 GRID, JUSTIFIED TEXT) */}
      <Container maxWidth="lg" sx={{ mb: 20 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 10, letterSpacing: '-0.02em', textAlign: 'center', color: '#111827' }}>
            The Strategic Advantages of Blockchain
          </Typography>
          
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: { xs: 6, lg: 8 } }}>
            {/* ROW 1 */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#ec4899', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>01.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', mb: 1 }}>Immutable Audit Trails</Typography>
              <Typography sx={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Every single access request to a patient record is permanently recorded. Facilities can prove exactly who viewed sensitive medical data and when it occurred without relying on editable logs.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#ec4899', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>02.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', mb: 1 }}>Cross-Provider Parity</Typography>
              <Typography sx={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Eliminate fragmented diagnostic silos. Primary care clinics, testing labs, and specialized hospitals all read and write to the exact same unified ledger, ensuring perfect data synchronization.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#ec4899', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>03.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', mb: 1 }}>Programmable Settlement</Typography>
              <Typography sx={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Smart contracts replace manual claims processing. Insurance approvals are calculated automatically based on embedded policy logic, settling provider payments in seconds rather than months.</Typography>
            </Box>

            {/* ROW 2 */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#ec4899', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>04.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', mb: 1 }}>Sovereign Data Privacy</Typography>
              <Typography sx={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Healthcare consortiums can securely provision restricted Private Subnets. This ensures that Protected Health Information (PHI) never touches public execution layers or unregulated third-party servers.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#ec4899', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>05.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', mb: 1 }}>Zero-Knowledge Verification</Typography>
              <Typography sx={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Patients can cryptographically prove their insurance eligibility or vaccination status to external vendors without ever exposing the underlying sensitive medical documentation.</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#ec4899', fontWeight: 900, fontSize: '1.5rem', mb: 1 }}>06.</Typography>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', mb: 1 }}>Counterfeit Mitigation</Typography>
              <Typography sx={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify' }}>Digital Passports provide a continuous, highly verifiable chain of custody for pharmaceutical products, drastically reducing the risk of counterfeit drugs entering the hospital supply chain.</Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>

      {/* 3. USE CASES & APPLICATIONS (DEEP-DIVE CONSOLE) */}
      <Box sx={{ bgcolor: '#FFFFFF', py: 16, borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB', mb: 16 }}>
        <Container maxWidth="xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#111827' }}>Use Cases & Applications</Typography>
              <Typography sx={{ color: '#4B5563', fontSize: '1.1rem', maxWidth: 700, mx: 'auto' }}>
                A single unified protocol capable of supporting complex clinical networks. Select a specific operational segment below.
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
                '&::-webkit-scrollbar-track': { background: '#F3F4F6', borderRadius: '10px' },
                '&::-webkit-scrollbar-thumb': { background: '#D1D5DB', borderRadius: '10px' }
              }}>
                <Stack spacing={1.5}>
                  {HEALTHCARE_PILLARS.map((pillar) => (
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
                        borderColor: activePillar.id === pillar.id ? 'rgba(236, 72, 153, 0.4)' : '#E5E7EB',
                        bgcolor: activePillar.id === pillar.id ? 'rgba(236, 72, 153, 0.05)' : '#FFFFFF',
                        transition: 'all 0.2s ease',
                        boxShadow: activePillar.id === pillar.id ? '0 4px 12px rgba(236, 72, 153, 0.05)' : 'none',
                        '&:hover': { bgcolor: activePillar.id === pillar.id ? 'rgba(236, 72, 153, 0.08)' : '#F9FAFB' }
                      }}
                    >
                      <Box sx={{ color: activePillar.id === pillar.id ? '#ec4899' : '#6B7280', display: 'flex' }}>
                        {pillar.icon}
                      </Box>
                      <Typography sx={{ fontSize: '1.05rem', fontWeight: 700, color: activePillar.id === pillar.id ? '#111827' : '#4B5563' }}>
                        {pillar.title}
                      </Typography>
                      {activePillar.id === pillar.id && (
                        <ArrowForwardIcon sx={{ ml: 'auto', color: '#ec4899', fontSize: 20 }} />
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
                border: '1px solid #E5E7EB', 
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
                      <Box sx={{ width: 48, height: 48, borderRadius: 2, bgcolor: 'rgba(236, 72, 153, 0.1)', color: '#ec4899', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {activePillar.icon}
                      </Box>
                      <Typography sx={{ fontSize: '2rem', fontWeight: 800, color: '#111827', letterSpacing: '-0.02em' }}>
                        {activePillar.title}
                      </Typography>
                    </Box>

                    <Stack spacing={5}>
                      <Box>
                        <Typography sx={{ fontSize: '0.8rem', color: '#ef4444', fontWeight: 700, letterSpacing: '0.1em', mb: 1.5 }}>THE LEGACY BOTTLENECK</Typography>
                        <Typography sx={{ color: '#4B5563', fontSize: '1.05rem', lineHeight: 1.7, textAlign: 'justify' }}>
                          {activePillar.legacy}
                        </Typography>
                      </Box>
                      <Divider sx={{ borderColor: '#E5E7EB' }} />
                      <Box>
                        <Typography sx={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 700, letterSpacing: '0.1em', mb: 1.5 }}>THE CERULEA EXECUTION</Typography>
                        <Typography sx={{ color: '#111827', fontSize: '1.05rem', lineHeight: 1.7, textAlign: 'justify' }}>
                          {activePillar.execution}
                        </Typography>
                      </Box>
                      <Box sx={{ pt: 2 }}>
                        <Box sx={{ p: 4, bgcolor: 'rgba(236, 72, 153, 0.05)', border: '1px solid rgba(236, 72, 153, 0.2)', borderRadius: 3 }}>
                          <Typography sx={{ fontSize: '0.75rem', color: '#ec4899', fontWeight: 700, letterSpacing: '0.05em', mb: 1 }}>ARCHITECTURAL IMPACT</Typography>
                          <Typography sx={{ color: '#111827', fontSize: '1.15rem', fontWeight: 600, lineHeight: 1.5, textAlign: 'justify' }}>
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
          
      {/* 4. THE BILLING ROI SIMULATOR */}
      <Container maxWidth="lg" sx={{ mb: 20 }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#111827' }}>Claims Adjudication Simulator</Typography>
            <Typography sx={{ color: '#4B5563', fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
              Denied medical claims require expensive administrative labor to manually rework and appeal. Calculate your exact operational savings by shifting to automated smart contract adjudication.
            </Typography>
          </Box>

          <Box sx={{ p: { xs: 4, md: 6 }, bgcolor: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 8, alignItems: 'center' }}>
              <Box sx={{ flex: 1, width: '100%' }}>
                <Typography sx={{ color: '#111827', fontWeight: 600, mb: 1 }}>Monthly Medical Claims Processed</Typography>
                <Typography sx={{ color: '#db2777', fontSize: '3rem', fontWeight: 800, mb: 4 }}>{monthlyClaims.toLocaleString('en-US')}</Typography>
                
                <Slider
                  value={monthlyClaims} onChange={handleClaimsChange} min={5000} max={250000} step={5000}
                  sx={{ color: '#ec4899', height: 8, '& .MuiSlider-thumb': { height: 24, width: 24, backgroundColor: '#fff', border: '2px solid currentColor' } }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', color: '#6B7280', fontSize: '0.85rem', mt: 1 }}>
                  <Typography>5,000</Typography>
                  <Typography>250,000+</Typography>
                </Box>
              </Box>

              <Box sx={{ flex: 1, width: '100%' }}>
                <Stack spacing={3}>
                  <Box sx={{ p: 3, bgcolor: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography sx={{ fontSize: '0.75rem', color: '#ef4444', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>ESTIMATED LEGACY COST</Typography>
                      <Typography sx={{ fontSize: '0.8rem', color: '#4B5563' }}>Manual Claim Reworks</Typography>
                    </Box>
                    <Typography sx={{ fontSize: '1.75rem', color: '#111827', fontWeight: 700 }}>${Math.round(annualLegacyCost).toLocaleString('en-US')}</Typography>
                  </Box>

                  <Box sx={{ p: 3, bgcolor: 'rgba(236, 72, 153, 0.05)', border: '1px solid rgba(236, 72, 153, 0.2)', borderRadius: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography sx={{ fontSize: '0.75rem', color: '#ec4899', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>CERULEA EXECUTION COST</Typography>
                      <Typography sx={{ fontSize: '0.8rem', color: '#4B5563' }}>Automated Network Logic</Typography>
                    </Box>
                    <Typography sx={{ fontSize: '1.75rem', color: '#111827', fontWeight: 700 }}>${Math.round(annualCeruleaCost).toLocaleString('en-US')}</Typography>
                  </Box>

                  <Box sx={{ p: 3, bgcolor: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: 3, position: 'relative', overflow: 'hidden' }}>
                    <Box sx={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '6px', bgcolor: '#10b981' }} />
                    <Box sx={{ pl: 2 }}>
                      <Typography sx={{ fontSize: '0.85rem', color: '#10b981', fontWeight: 700, mb: 1, letterSpacing: '0.05em' }}>TOTAL OVERHEAD SAVED ANNUALLY</Typography>
                      <Typography sx={{ fontSize: '3rem', color: '#111827', fontWeight: 800, lineHeight: 1 }}>${Math.round(annualSavings).toLocaleString('en-US')}</Typography>
                    </Box>
                  </Box>
                </Stack>
              </Box>
            </Box>

            {/* Strict Methodology Disclaimer */}
            <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid #E5E7EB' }}>
              <Typography sx={{ fontSize: '0.8rem', color: '#111827', fontWeight: 700, mb: 1, letterSpacing: '0.05em' }}>
                METHODOLOGY
              </Typography>
              <Typography sx={{ fontSize: '0.8rem', color: '#4B5563', lineHeight: 1.6, textAlign: 'justify' }}>
                The legacy calculation utilizes benchmarks from the Council for Affordable Quality Healthcare (CAQH), which estimate that approximately 15 percent of all medical claims are initially denied due to coding errors or eligibility issues. Resolving these exceptions requires an average of <strong>$25.00 USD</strong> in administrative labor per reworked claim. Executing the exact same billing update via Cerulea incurs an estimated network fee of <strong>$0.10 USD</strong>. This figure represents the computational gas cost required to execute the adjudication logic via a WebAssembly (WASM) binary on a high-throughput Proof-of-Stake network, completely bypassing manual human review and eradicating standard data entry errors.
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>

      {/* 5. SYSTEM ARCHITECTURE DIAGRAMS (TRUE FLOWCHARTS) */}
      <Box sx={{ bgcolor: '#FFFFFF', py: 16, borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB', mb: 16 }}>
        <Container maxWidth="xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <Box sx={{ textAlign: 'center', mb: 10 }}>
              <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#111827' }}>Network & Execution Architecture</Typography>
              <Typography sx={{ color: '#4B5563', fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
                Whether you are bridging legacy hospital databases or routing live medical telemetry, Cerulea provides the exact infrastructure flow required.
              </Typography>
            </Box>

            <Stack spacing={10}>
              
              {/* DIAGRAM A: ENTERPRISE BRIDGING */}
              <Box>
                <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', mb: 1, textAlign: 'center' }}>Track A: Institutional EHR Bridging</Typography>
                <Typography sx={{ color: '#4B5563', fontSize: '0.95rem', mb: 6, lineHeight: 1.6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
                  For hospital networks connecting existing software. Legacy HTTP requests from patient databases are translated into highly secure Web3 transactions without system overhauls.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2, position: 'relative' }}>
                  
                  {/* Node 1 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '1px solid #D1D5DB', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <DomainOutlinedIcon sx={{ color: '#4B5563', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#111827', mb: 0.5 }}>Legacy Healthcare Core</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#6B7280' }}>Epic / Cerner EHR</Typography>
                  </Box>

                  {/* Arrow 1 */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#6B7280', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>HTTPS / REST</Typography>
                    <ArrowForwardIcon sx={{ color: '#6B7280', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>

                  {/* Node 2 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: 'rgba(236, 72, 153, 0.05)', border: '2px solid #ec4899', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(236, 72, 153, 0.15)' }}>
                      <ApiOutlinedIcon sx={{ color: '#ec4899', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#111827', mb: 0.5 }}>Cerulea API</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#6B7280' }}>Translation Gateway</Typography>
                  </Box>

                  {/* Arrow 2 */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#ec4899', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>WASM COMPILATION</Typography>
                    <ArrowForwardIcon sx={{ color: '#ec4899', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>

                  {/* Node 3 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '2px solid #10b981', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(16, 185, 129, 0.15)' }}>
                      <DnsOutlinedIcon sx={{ color: '#10b981', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#111827', mb: 0.5 }}>Cerulea Private Chains</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#6B7280' }}>HIPAA-Compliant Validation</Typography>
                  </Box>

                </Box>
              </Box>

              <Divider sx={{ borderColor: '#E5E7EB' }} />

              {/* DIAGRAM B: NATIVE WEB3 */}
              <Box>
                <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', mb: 1, textAlign: 'center' }}>Track B: Native Telehealth Execution</Typography>
                <Typography sx={{ color: '#4B5563', fontSize: '0.95rem', mb: 6, lineHeight: 1.6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
                  For modern HealthTech organizations launching decentralized patient portals. Route application logic and wearable telemetry directly to the execution layer.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2, position: 'relative' }}>
                  
                  {/* Node 1 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '1px solid #D1D5DB', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <TerminalOutlinedIcon sx={{ color: '#4B5563', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#111827', mb: 0.5 }}>Patient DApp</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#6B7280' }}>React & Identity Wallets</Typography>
                  </Box>

                  {/* Arrow 1 */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#6B7280', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>JSON-RPC</Typography>
                    <ArrowForwardIcon sx={{ color: '#6B7280', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>

                  {/* Node 2 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: 'rgba(59, 130, 246, 0.05)', border: '2px solid #3b82f6', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(59, 130, 246, 0.15)' }}>
                      <HubOutlinedIcon sx={{ color: '#3b82f6', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#111827', mb: 0.5 }}>Cerulea Public L1</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#6B7280' }}>Decentralized Network</Typography>
                  </Box>

                  {/* Arrow 2 */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 140 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#3b82f6', fontWeight: 700, mb: 0.5, letterSpacing: '0.05em' }}>STATE EXECUTION</Typography>
                    <ArrowForwardIcon sx={{ color: '#3b82f6', fontSize: 24, transform: { xs: 'rotate(90deg)', lg: 'none' } }} />
                  </Box>

                  {/* Node 3 */}
                  <Box sx={{ textAlign: 'center', width: 220 }}>
                    <Box sx={{ width: 70, height: 70, mx: 'auto', bgcolor: '#FAFAFA', border: '2px solid #a855f7', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, boxShadow: '0 4px 14px rgba(168, 85, 247, 0.15)' }}>
                      <MemoryOutlinedIcon sx={{ color: '#a855f7', fontSize: 32 }} />
                    </Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#111827', mb: 0.5 }}>Cerulea Data Models</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#6B7280' }}>Clinical Logic Execution</Typography>
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
            <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#111827' }}>Applicability Across the Spectrum</Typography>
            <Typography sx={{ color: '#4B5563', fontSize: '1.1rem', maxWidth: 700, mx: 'auto' }}>
              Cerulea provides dedicated infrastructure tailored for the distinct operational requirements of the healthcare sector.
            </Typography>
          </Box>

          <Stack spacing={4}>
            {/* Enterprise Row */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(236, 72, 153, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <DomainOutlinedIcon sx={{ fontSize: 40, color: '#ec4899' }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', mb: 1 }}>Hospitals & Provider Networks</Typography>
                <Typography sx={{ color: '#4B5563', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Clinical institutions utilize Cerulea to un-silo internal patient databases, guarantee EHR interoperability across different hospital branches, and securely manage patient consent without exposing raw PHI to the public.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E5E7EB' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY CLINICAL USE CASES</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#ec4899' }}/><Typography sx={{ fontSize: '0.9rem', color: '#111827', fontWeight: 600 }}>EHR Interoperability</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#ec4899' }}/><Typography sx={{ fontSize: '0.9rem', color: '#111827', fontWeight: 600 }}>Patient Consent Tracking</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#ec4899' }}/><Typography sx={{ fontSize: '0.9rem', color: '#111827', fontWeight: 600 }}>Medical Device Telemetry</Typography></Box>
                </Stack>
              </Box>
            </Box>

            {/* Insurance Row */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(236, 72, 153, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ShieldOutlinedIcon sx={{ fontSize: 40, color: '#ec4899' }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', mb: 1 }}>Insurance Providers & Payers</Typography>
                <Typography sx={{ color: '#4B5563', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Medical insurers deploy Cerulea to fully automate the claims adjudication process, eliminate fraudulent billing submissions, and route reimbursements to providers with absolute precision.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E5E7EB' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY PAYER USE CASES</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#ec4899' }}/><Typography sx={{ fontSize: '0.9rem', color: '#111827', fontWeight: 600 }}>Automated Adjudication</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#ec4899' }}/><Typography sx={{ fontSize: '0.9rem', color: '#111827', fontWeight: 600 }}>Fraud Eradication</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#ec4899' }}/><Typography sx={{ fontSize: '0.9rem', color: '#111827', fontWeight: 600 }}>Real-Time Reimbursements</Typography></Box>
                </Stack>
              </Box>
            </Box>

            {/* DApp Row */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: 4, alignItems: { xs: 'flex-start', md: 'center' }, gap: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: 3, bgcolor: 'rgba(236, 72, 153, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <CodeOutlinedIcon sx={{ fontSize: 40, color: '#ec4899' }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', mb: 1 }}>HealthTech Developers & Research</Typography>
                <Typography sx={{ color: '#4B5563', fontSize: '1rem', lineHeight: 1.6, textAlign: 'justify' }}>
                  Forward-thinking engineers build next-generation Decentralized Science (DeSci) applications and telemedicine portals on the public L1, utilizing visual tools to guarantee regulatory-compliant logic execution.
                </Typography>
              </Box>
              <Box sx={{ flexShrink: 0, minWidth: 220, pl: { md: 4 }, borderLeft: { md: '1px solid #E5E7EB' } }}>
                <Typography sx={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: 700, letterSpacing: '0.05em', mb: 2 }}>KEY HEALTHTECH USE CASES</Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#ec4899' }}/><Typography sx={{ fontSize: '0.9rem', color: '#111827', fontWeight: 600 }}>Clinical Trial Hashing</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#ec4899' }}/><Typography sx={{ fontSize: '0.9rem', color: '#111827', fontWeight: 600 }}>Telemedicine Portals</Typography></Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><ArrowForwardIcon sx={{ fontSize: 14, color: '#ec4899' }}/><Typography sx={{ fontSize: '0.9rem', color: '#111827', fontWeight: 600 }}>Decentralized Science (DeSci)</Typography></Box>
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
            <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#111827' }}>The Healthcare Technology Stack</Typography>
            <Typography sx={{ color: '#4B5563', fontSize: '1.1rem', maxWidth: 700, mx: 'auto', textAlign: 'justify' }}>
              We do not sell isolated smart contracts. Cerulea is a vertically integrated architecture mapped directly to the strict regulatory requirements of the medical sector. This 5-layer stack demonstrates how we eliminate fragmented third-party tools, providing a singular pathway to bridge legacy medical databases into secure Web3 environments.
            </Typography>
          </Box>

          <Box sx={{ position: 'relative' }}>
            {/* The Left-Aligned Connecting Line */}
            <Box sx={{ position: 'absolute', left: 24, top: 20, bottom: 20, width: '2px', bgcolor: 'rgba(236, 72, 153, 0.2)', display: { xs: 'none', md: 'block' } }} />

            <Stack spacing={6}>
              {/* Layer 1 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#FAFAFA', border: '2px solid #ec4899', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(236, 72, 153, 0.2)', mr: 4 }}>
                  <DnsOutlinedIcon sx={{ color: '#ec4899', fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: '#ec4899', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 01: CLINICAL NETWORKS</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#111827', mb: 1 }}>Sovereign Subnet Ledgers</Typography>
                  <Typography sx={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Deploy an isolated Cerulea Private Chain strictly for a regional hospital network, ensuring that Protected Health Information (PHI) never interacts with public infrastructure.
                  </Typography>
                </Box>
              </Box>

              {/* Layer 2 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#FAFAFA', border: '2px solid #ec4899', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(236, 72, 153, 0.2)', mr: 4 }}>
                  <TerminalOutlinedIcon sx={{ color: '#ec4899', fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: '#ec4899', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 02: LOGIC COMPILATION</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#111827', mb: 1 }}>The Deployment Engine</Typography>
                  <Typography sx={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Our core engine translates the clinical rules you design in Cerulea Studio into highly optimized WebAssembly (WASM) binaries, ensuring flawless execution on the network.
                  </Typography>
                </Box>
              </Box>

              {/* Layer 3 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#FAFAFA', border: '2px solid #ec4899', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(236, 72, 153, 0.2)', mr: 4 }}>
                  <DescriptionOutlinedIcon sx={{ color: '#ec4899', fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: '#ec4899', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 03: RECORD ARCHITECTURE</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#111827', mb: 1 }}>Cerulea Data Models</Typography>
                  <Typography sx={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Use Cerulea Studio to visually map patient identities, pharmaceutical tracking logs, and insurance claims into secure smart contracts without writing low-level code.
                  </Typography>
                </Box>
              </Box>

              {/* Layer 4 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#FAFAFA', border: '2px solid #ec4899', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(236, 72, 153, 0.2)', mr: 4 }}>
                  <EnhancedEncryptionOutlinedIcon sx={{ color: '#ec4899', fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: '#ec4899', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 04: PRIVACY GOVERNANCE</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#111827', mb: 1 }}>Threshold Consent Framework</Typography>
                  <Typography sx={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Protect patient privacy. Enforce strict cryptographic signatures from the patient or authorized clinical directors before any sensitive diagnostic data can be decrypted and shared.
                  </Typography>
                </Box>
              </Box>

              {/* Layer 5 */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#FAFAFA', border: '2px solid #ec4899', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 14px rgba(236, 72, 153, 0.2)', mr: 4 }}>
                  <ApiOutlinedIcon sx={{ color: '#ec4899', fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, p: 4, bgcolor: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Typography sx={{ color: '#ec4899', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', mb: 1 }}>LAYER 05: LEGACY EHR BRIDGE</Typography>
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: '#111827', mb: 1 }}>The Cerulea API</Typography>
                  <Typography sx={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>
                    Interact with the entire blockchain ecosystem instantly via auto-generated REST endpoints, bridging aging HL7 and FHIR database standards directly into Web3.
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
              <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, mb: 2, letterSpacing: '-0.02em', color: '#111827' }}>Accelerated Time-to-Value</Typography>
              <Typography sx={{ color: '#4B5563', fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
                Building custom healthcare blockchains requires massive external audit budgets and severe regulatory delays. Cerulea visualizes the process, cutting deployment times significantly.
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 4, alignItems: 'stretch', pb: 12 }}>
              
              {/* The Traditional Way */}
              <Box sx={{ flex: 1, p: { xs: 4, md: 6 }, bgcolor: '#FFFFFF', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: 4, position: 'relative', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, bgcolor: '#ef4444' }} />
                <Typography sx={{ color: '#ef4444', fontWeight: 700, letterSpacing: '0.05em', mb: 1, fontSize: '0.85rem' }}>TRADITIONAL BLOCKCHAIN DEVELOPMENT</Typography>
                <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, color: '#111827', mb: 5 }}>18 to 24 Months</Typography>
                
                <Stack spacing={4}>
                  <Box>
                    <Typography sx={{ color: '#111827', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 1: Architecture & Compliance (Months 1 to 6)</Typography>
                    <Typography sx={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Negotiating strict data compliance and writing custom state machines to track electronic health records entirely from scratch.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#111827', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 2: Legacy Integration (Months 7 to 12)</Typography>
                    <Typography sx={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Building complex custom middleware to successfully translate raw, fragmented Epic or Cerner database exports into blockchain-compatible payloads.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#111827', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 3: Security Audits (Months 13 to 16)</Typography>
                    <Typography sx={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Paying external firms to hunt for code vulnerabilities in the custom smart contracts before handling live, highly sensitive patient diagnostics.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#111827', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 4: Provider Rollout (Months 17 to 24)</Typography>
                    <Typography sx={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Enduring a massive rollout phase to ensure all independent hospital databases synchronize correctly with the ledger without fatal reporting errors.</Typography>
                  </Box>
                </Stack>
              </Box>

              {/* The Cerulea Way */}
              <Box sx={{ flex: 1, p: { xs: 4, md: 6 }, bgcolor: 'rgba(236, 72, 153, 0.02)', border: '1px solid rgba(236, 72, 153, 0.4)', borderRadius: 4, position: 'relative', overflow: 'hidden', boxShadow: '0 10px 40px rgba(236, 72, 153, 0.08)' }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, bgcolor: '#ec4899' }} />
                <Typography sx={{ color: '#ec4899', fontWeight: 700, letterSpacing: '0.05em', mb: 1, fontSize: '0.85rem' }}>CERULEA PLATFORM DEPLOYMENT</Typography>
                <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, color: '#111827', mb: 5 }}>12 to 14 Weeks</Typography>
                
                <Stack spacing={4}>
                  <Box>
                    <Typography sx={{ color: '#111827', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 1: Visual Modeling (Weeks 1 to 3)</Typography>
                    <Typography sx={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Use Cerulea Studio to visually map patient data flows, institutional permissions, and automated billing triggers without writing any code.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#111827', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 2: Subnet Provisioning (Weeks 4 to 6)</Typography>
                    <Typography sx={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Deploy a Sovereign Private Chain and issue standardized validator nodes directly to regional hospital partners from the control dashboard.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#111827', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 3: Database Hookup (Weeks 7 to 10)</Typography>
                    <Typography sx={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Connect existing hospital EHR systems and diagnostic software directly to auto-generated Cerulea REST APIs. No custom middleware is required.</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#111827', fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>Phase 4: Clinical Go-Live (Weeks 11 to 14)</Typography>
                    <Typography sx={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.6, textAlign: 'justify' }}>Bridge the finalized logic to the live network and begin securing real patient telemetry with complete architectural confidence.</Typography>
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