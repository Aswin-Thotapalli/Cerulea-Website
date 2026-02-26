'use client';

import * as React from 'react';
import { Box, Container, Typography, InputBase, InputAdornment, Button, Chip, Stack } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Icons
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import PublicIcon from '@mui/icons-material/Public';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import RouterIcon from '@mui/icons-material/Router';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SearchIcon2 from '@mui/icons-material/ManageSearch';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import CopyrightIcon from '@mui/icons-material/Copyright';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ScienceIcon from '@mui/icons-material/Science';
import GavelIcon from '@mui/icons-material/Gavel';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import BallotIcon from '@mui/icons-material/Ballot';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import PaymentsIcon from '@mui/icons-material/Payments';
import StorageIcon from '@mui/icons-material/Storage';
import CableIcon from '@mui/icons-material/Cable';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

const USE_CASES = [
  { id: 'tokenized-assets', title: 'Real World Asset Tokenization', desc: 'Convert physical assets, real estate, and treasury bills into highly liquid digital tokens.', icon: <AccountBalanceWalletIcon />, color: '#2563eb', related: ['Real Estate', 'Financial Services'] },
  { id: 'decentralized-identity', title: 'Decentralized Identity (DID)', desc: 'Zero-trust Web2 to Web3 authentication and verifiable digital credentials.', icon: <FingerprintIcon />, color: '#7c3aed', related: ['Government', 'Healthcare'] },
  { id: 'cross-border-settlements', title: 'Cross-Border Settlements', desc: 'Bypass SWIFT and legacy clearinghouses for instant, low-cost international payments.', icon: <PublicIcon />, color: '#e11d48', related: ['Financial Services', 'Travel'] },
  { id: 'compliance-audit', title: 'Data Integrity & Audit Trails', desc: 'Generate immutable, mathematically guaranteed records for compliance reporting.', icon: <FactCheckIcon />, color: '#059669', related: ['Aviation', 'Legal & Compliance'] },
  { id: 'iot-depin', title: 'IoT & DePIN', desc: 'Secure machine-to-machine data layers and decentralized physical infrastructure.', icon: <RouterIcon />, color: '#0891b2', related: ['Supply Chain', 'Telecom'] },
  { id: 'daos-governance', title: 'DAOs & Corporate Governance', desc: 'Automate corporate decision making and shareholder voting via smart contracts.', icon: <HowToVoteIcon />, color: '#9333ea', related: ['Enterprise IT', 'Philanthropy'] },
  { id: 'cbdcs-stablecoins', title: 'CBDCs & Enterprise Stablecoins', desc: 'Architect sovereign digital currencies with strict supply auditing and minting rules.', icon: <CurrencyExchangeIcon />, color: '#d97706', related: ['Financial Services', 'Government'] },
  { id: 'parametric-insurance', title: 'Parametric Insurance Payouts', desc: 'Execute claims instantly based on deterministic rules and external oracle data.', icon: <VerifiedUserIcon />, color: '#0284c7', related: ['Insurance', 'Agriculture'] },
  { id: 'supply-chain-traceability', title: 'Traceability & Provenance', desc: 'Track physical goods across multi-vendor logistics networks with perfect data parity.', icon: <SearchIcon2 />, color: '#65a30d', related: ['Retail', 'Supply Chain'] },
  { id: 'loyalty-rewards', title: 'Loyalty & Reward Programs', desc: 'Issue interoperable, highly liquid reward points that partners can seamlessly honor.', icon: <LoyaltyIcon />, color: '#db2777', related: ['Travel', 'Retail'] },
  { id: 'ip-royalties', title: 'IP & Royalty Management', desc: 'Automate global royalty splits and register intellectual property immutably.', icon: <CopyrightIcon />, color: '#e11d48', related: ['Media', 'Art & Creator'] },
  { id: 'decentralized-ai', title: 'Decentralized AI Compute', desc: 'Verify AI training datasets and distribute compute rewards securely via WASM.', icon: <SmartToyIcon />, color: '#c026d3', related: ['Enterprise IT', 'Healthcare'] },
  { id: 'desci-research', title: 'Decentralized Science (DeSci)', desc: 'Fund academic research through multi-sig treasuries and track peer-review provenance.', icon: <ScienceIcon />, color: '#2563eb', related: ['Education', 'Healthcare'] },
  { id: 'smart-legal-escrow', title: 'Smart Legal Escrow', desc: 'Execute trustless multi-party financial agreements without third-party holding fees.', icon: <GavelIcon />, color: '#4f46e5', related: ['Legal', 'Real Estate'] },
  { id: 'carbon-credit-trading', title: 'Carbon Credit Trading', desc: 'Eradicate double-spending in corporate carbon offset markets via strict non-fungibility.', icon: <EnergySavingsLeafIcon />, color: '#059669', related: ['Energy', 'Mining'] },
  { id: 'cryptographic-voting', title: 'Cryptographic Voting Systems', desc: 'Run mathematically secure, censorship-resistant elections for public and private sectors.', icon: <BallotIcon />, color: '#ea580c', related: ['Government', 'DAOs'] },
  { id: 'workflow-automation', title: 'Enterprise Workflow Automation', desc: 'Trigger cross-departmental financial actions based on strict state changes.', icon: <AutorenewIcon />, color: '#475569', related: ['Manufacturing', 'Human Resources'] },
  { id: 'treasury-yield', title: 'Corporate Treasury & DeFi Yield', desc: 'Route idle enterprise capital into strictly whitelisted, low-risk decentralized yield protocols.', icon: <AccountTreeIcon />, color: '#d97706', related: ['Financial Services', 'Enterprise IT'] },
  { id: 'microtransactions', title: 'Microtransactions & Streaming', desc: 'Settle sub-cent transactions instantly for pay-per-use APIs, gaming, and content.', icon: <PriceCheckIcon />, color: '#0d9488', related: ['Gaming', 'Media'] },
  { id: 'decentralized-storage', title: 'Decentralized Storage & Archiving', desc: 'Anchor heavy enterprise files off-chain while keeping the cryptographic proof on-chain.', icon: <StorageIcon />, color: '#0369a1', related: ['Enterprise IT', 'Legal'] },
  { id: 'interoperability-oracles', title: 'Cross-Chain Interoperability', desc: 'Bridge state and value between private enterprise subnets and public L1 ledgers.', icon: <CableIcon />, color: '#7c3aed', related: ['Financial Services', 'Enterprise IT'] },
  { id: 'zero-trust-access', title: 'Zero-Trust Network Access', desc: 'Replace passwords with cryptographic wallet signatures for internal employee portals.', icon: <VpnKeyIcon />, color: '#dc2626', related: ['Cybersecurity', 'Telecom'] },
  { id: 'healthcare-data', title: 'Secure Healthcare Data Sharing', desc: 'Grant patients absolute ownership keys over their medical records across providers.', icon: <HealthAndSafetyIcon />, color: '#db2777', related: ['Healthcare', 'Philanthropy'] },
  { id: 'fractional-ownership', title: 'Fractional Ownership', desc: 'Split highly illiquid monolithic assets into tradable, globally accessible shares.', icon: <PaymentsIcon />, color: '#2563eb', related: ['Real Estate', 'Art & Creator'] }
];

export default function UseCasesCatalogPageLight() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredCases = USE_CASES.filter(useCase => 
    useCase.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    useCase.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
    useCase.related.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <Box sx={{ bgcolor: '#FAFAFA', minHeight: '100vh', color: '#0A192F', pb: 16 }}>
      
      {/* 1. HERO SECTION */}
      <Box sx={{ pt: { xs: 16, md: 24 }, pb: { xs: 8, md: 10 }, position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '500px', background: 'radial-gradient(ellipse at top, rgba(124, 58, 237, 0.08), transparent 70%)', pointerEvents: 'none' }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Typography sx={{ color: '#7c3aed', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.85rem', mb: 4 }}>
              Use Case Directory
            </Typography>
            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '3rem', sm: '3.5rem', md: '4.5rem' }, lineHeight: 1.1, letterSpacing: '-0.03em', mb: 4, maxWidth: 900, color: '#0A192F' }}>
              Targeted applications.<br />
              <span style={{ color: '#64748B' }}>Enterprise execution.</span>
            </Typography>
            <Typography sx={{ color: '#1E2B4D', fontSize: { xs: '1.1rem', md: '1.25rem' }, maxWidth: 850, lineHeight: 1.6, mb: 6, fontWeight: 400 }}>
              Blockchain is not a monolithic product. It is a suite of capabilities. Select your specific use case below to see how Cerulea translates your business logic into immutable infrastructure.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* 2. DIRECTORY TOGGLE & SEARCH BAR */}
      <Container maxWidth="lg" sx={{ mb: 6, position: 'relative', zIndex: 10 }}>
        
        {/* Toggle Bridge */}
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <Button 
            component={Link} 
            href="/solutions/industries"
            sx={{ 
              color: '#475569', 
              fontWeight: 600, 
              px: 3, py: 1, 
              borderRadius: 2,
              '&:hover': { color: '#0A192F', bgcolor: 'rgba(0,0,0,0.03)' }
            }}
          >
            Browse by Industry
          </Button>
          <Button 
            sx={{ 
              color: '#0A192F', 
              bgcolor: '#FFFFFF', 
              fontWeight: 700, 
              px: 3, py: 1, 
              borderRadius: 2,
              border: '1px solid #CBD5E1',
              boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
            }}
          >
            Browse by Use Case
          </Button>
        </Box>

        <Box sx={{ p: 1, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 2, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
          <InputBase
            fullWidth
            placeholder="Search for a specific technology, workflow, or solution..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            startAdornment={<InputAdornment position="start"><SearchIcon sx={{ color: '#64748B', ml: 2, mr: 1 }} /></InputAdornment>}
            sx={{ color: '#0A192F', fontSize: '1.1rem', py: 1 }}
          />
        </Box>
      </Container>

      {/* 3. HIGH-DENSITY LIST LAYOUT */}
      <Container maxWidth="lg">
        <Box sx={{ borderTop: '1px solid #E2E8F0' }}>
          <AnimatePresence>
            {filteredCases.map((useCase) => (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                key={useCase.id}
              >
                <Box 
                  component={Link}
                  href={`/solutions/use-cases/${useCase.id}`}
                  sx={{ 
                    display: 'flex', 
                    alignItems: { xs: 'flex-start', md: 'center' },
                    flexDirection: { xs: 'column', md: 'row' },
                    p: 3, 
                    borderBottom: '1px solid #E2E8F0',
                    textDecoration: 'none', 
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    borderLeft: '4px solid transparent',
                    bgcolor: '#FFFFFF',
                    '&:hover': {
                      bgcolor: '#F8FAFC',
                      borderLeft: `4px solid ${useCase.color}`,
                      '& .explore-arrow': { transform: 'translateX(6px)', color: useCase.color }
                    }
                  }}
                >
                  {/* Column 1: Title & Icon */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5, width: { xs: '100%', md: '30%' }, mb: { xs: 2, md: 0 } }}>
                    <Box sx={{ width: 44, height: 44, borderRadius: 2, bgcolor: `${useCase.color}15`, color: useCase.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {useCase.icon}
                    </Box>
                    <Typography sx={{ color: '#0A192F', fontSize: '1.05rem', fontWeight: 700 }}>
                      {useCase.title}
                    </Typography>
                  </Box>

                  {/* Column 2: Description */}
                  <Box sx={{ flex: 1, pr: { xs: 0, md: 4 }, mb: { xs: 2, md: 0 } }}>
                    <Typography sx={{ color: '#1E2B4D', fontSize: '0.95rem', lineHeight: 1.5 }}>
                      {useCase.desc}
                    </Typography>
                  </Box>

                  {/* Column 3: Core Solutions Tags */}
                  <Box sx={{ width: { xs: '100%', md: '20%' }, display: 'flex', flexWrap: 'wrap', gap: 1, mb: { xs: 2, md: 0 } }}>
                    {useCase.related.map((tag, idx) => (
                      <Chip 
                        key={idx} 
                        label={tag} 
                        size="small" 
                        sx={{ bgcolor: '#F1F5F9', color: '#334155', fontSize: '0.7rem', fontWeight: 600, border: '1px solid #E2E8F0', borderRadius: 1 }} 
                      />
                    ))}
                  </Box>

                  {/* Column 4: Action Arrow */}
                  <Box sx={{ width: { xs: '100%', md: 'auto' }, display: 'flex', justifyContent: 'flex-end', pl: 2 }}>
                    <ArrowForwardIcon className="explore-arrow" sx={{ color: '#94A3B8', fontSize: 24, transition: 'all 0.2s ease' }} />
                  </Box>
                </Box>
              </motion.div>
            ))}
          </AnimatePresence>
        </Box>

        {filteredCases.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 12 }}>
            <Typography sx={{ color: '#0A192F', fontSize: '1.5rem', fontWeight: 600, mb: 2 }}>No solutions found.</Typography>
            <Typography sx={{ color: '#1E2B4D' }}>Try adjusting your search terms or view our Industries directory.</Typography>
            <Button variant="outlined" onClick={() => setSearchQuery('')} sx={{ mt: 4, color: '#0A192F', borderColor: '#CBD5E1' }}>
              Clear Search
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
}