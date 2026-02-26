'use client';

import * as React from 'react';
import { Box, Container, Typography, InputBase, InputAdornment, Button, Chip, Stack, useTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Icons
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import BoltIcon from '@mui/icons-material/Bolt';
import DomainIcon from '@mui/icons-material/Domain';
import SecurityIcon from '@mui/icons-material/Security';
import CellTowerIcon from '@mui/icons-material/CellTower';
import MovieIcon from '@mui/icons-material/Movie';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import FlightIcon from '@mui/icons-material/Flight';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import GavelIcon from '@mui/icons-material/Gavel';
import SchoolIcon from '@mui/icons-material/School';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LockIcon from '@mui/icons-material/Lock';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import LuggageIcon from '@mui/icons-material/Luggage';
import ConstructionIcon from '@mui/icons-material/Construction';
import StorageIcon from '@mui/icons-material/Storage';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PaletteIcon from '@mui/icons-material/Palette';

const INDUSTRIES = [
  { id: 'financial-services', title: 'Financial Services & Banking', desc: 'Real-time settlement, interbank clearing, and institutional decentralized finance.', icon: <AccountBalanceIcon />, color: '#2563eb', related: ['Cross-Border', 'Treasury & Yield'] },
  { id: 'supply-chain', title: 'Supply Chain & Logistics', desc: 'Tamper-proof transit tracking and multi-vendor reconciliation.', icon: <LocalShippingIcon />, color: '#059669', related: ['Traceability', 'IoT & DePIN'] },
  { id: 'government', title: 'Government & Public Sector', desc: 'Sovereign citizen registries, digital identity, and cryptographic voting.', icon: <AccountBalanceWalletIcon />, color: '#ea580c', related: ['Decentralized ID', 'Voting Systems'] },
  { id: 'healthcare', title: 'Healthcare & Life Sciences', desc: 'HIPAA-compliant patient records and secure pharmaceutical provenance.', icon: <HealthAndSafetyIcon />, color: '#db2777', related: ['Secure Data', 'Data Integrity'] },
  { id: 'energy', title: 'Energy & Utilities', desc: 'Verifiable carbon credit trading and smart grid telemetry.', icon: <BoltIcon />, color: '#d97706', related: ['Carbon Trading', 'IoT Infra'] },
  { id: 'real-estate', title: 'Real Estate & PropTech', desc: 'Immutable property titles, automated escrow, and fractionalized real estate.', icon: <DomainIcon />, color: '#4f46e5', related: ['RWA Tokenization', 'Smart Escrow'] },
  { id: 'insurance', title: 'Insurance', desc: 'Automated parametric payouts triggered by verifiable oracle data.', icon: <SecurityIcon />, color: '#0284c7', related: ['Parametric Payouts', 'Oracles'] },
  { id: 'telecom', title: 'Telecommunications', desc: 'Cross-carrier settlement and decentralized infrastructure provisioning.', icon: <CellTowerIcon />, color: '#7c3aed', related: ['IoT & DePIN', 'Microtransactions'] },
  { id: 'media', title: 'Media & Entertainment', desc: 'Transparent royalty distribution and permanent intellectual property registration.', icon: <MovieIcon />, color: '#e11d48', related: ['IP & Royalties', 'Streaming Pay'] },
  { id: 'retail', title: 'Retail & Consumer Goods', desc: 'Interoperable loyalty programs and counterfeit prevention.', icon: <ShoppingCartIcon />, color: '#0d9488', related: ['Loyalty Programs', 'Provenance'] },
  { id: 'agriculture', title: 'Agriculture & Food Tech', desc: 'Farm-to-table supply chain visibility and crop yield tokenization.', icon: <AgricultureIcon />, color: '#65a30d', related: ['Traceability', 'IoT Sensors'] },
  { id: 'aviation', title: 'Aviation & Aerospace', desc: 'Immutable aircraft maintenance logs and parts provenance.', icon: <FlightIcon />, color: '#0369a1', related: ['Audit Trails', 'Supply Chain'] },
  { id: 'manufacturing', title: 'Automotive & Manufacturing', desc: 'Automated machine-to-machine payments and warranty tracking.', icon: <PrecisionManufacturingIcon />, color: '#475569', related: ['IoT infra', 'Workflow Automation'] },
  { id: 'legal', title: 'Legal & Compliance', desc: 'Cryptographic evidence logs and trustless multi-party escrow.', icon: <GavelIcon />, color: '#9333ea', related: ['Smart Escrow', 'Compliance & Audit'] },
  { id: 'education', title: 'Education & Academia', desc: 'Verifiable lifelong learning credentials and research funding.', icon: <SchoolIcon />, color: '#2563eb', related: ['Decentralized ID', 'DeSci'] },
  { id: 'gaming', title: 'Gaming & Esports', desc: 'Interoperable in-game asset economies and trustless tournament payouts.', icon: <SportsEsportsIcon />, color: '#059669', related: ['Microtransactions', 'Fractional Ownership'] },
  { id: 'cybersecurity', title: 'Cybersecurity', desc: 'Decentralized public key infrastructure and zero-trust auth.', icon: <LockIcon />, color: '#dc2626', related: ['Zero-Trust', 'Data Integrity'] },
  { id: 'philanthropy', title: 'Philanthropy & Non-Profit', desc: 'Transparent fund routing and automated milestone-based grants.', icon: <VolunteerActivismIcon />, color: '#0d9488', related: ['DAOs', 'Workflow Automation'] },
  { id: 'travel', title: 'Travel & Hospitality', desc: 'Universal rewards programs and decentralized booking inventories.', icon: <LuggageIcon />, color: '#d97706', related: ['Loyalty', 'Cross-Border'] },
  { id: 'mining', title: 'Mining & Heavy Industry', desc: 'Commodity tokenization and environmental compliance tracking.', icon: <ConstructionIcon />, color: '#57534e', related: ['RWA Tokenization', 'Compliance Audit'] },
  { id: 'enterprise-it', title: 'Enterprise IT & SaaS', desc: 'Decentralized data archiving and cross-chain system integration.', icon: <StorageIcon />, color: '#0891b2', related: ['Decentralized Storage', 'Interoperability'] },
  { id: 'sports', title: 'Sports & Fan Engagement', desc: 'Direct-to-fan tokenized experiences and ticketing infrastructure.', icon: <SportsScoreIcon />, color: '#dc2626', related: ['Loyalty', 'Microtransactions'] },
  { id: 'hr', title: 'Human Resources & Talent', desc: 'Global borderless payroll and verifiable employment credentials.', icon: <PeopleAltIcon />, color: '#7c3aed', related: ['Decentralized ID', 'Workflow Automation'] },
  { id: 'art', title: 'Art & Creator Economy', desc: 'Fractionalized fine art ownership and persistent digital provenance.', icon: <PaletteIcon />, color: '#db2777', related: ['IP & Royalties', 'Fractional Ownership'] }
];

export default function IndustriesCatalogPage() {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredIndustries = INDUSTRIES.filter(industry => 
    industry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    industry.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
    industry.related.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 16 }}>
      
      {/* 1. HERO SECTION */}
      <Box sx={{ pt: { xs: 16, md: 24 }, pb: { xs: 8, md: 10 }, position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '500px', background: 'radial-gradient(ellipse at top, rgba(37, 99, 235, 0.08), transparent 70%)', pointerEvents: 'none' }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Typography sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.85rem', mb: 4 }}>
              Industry Solutions
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '3rem', sm: '3.5rem', md: '4.5rem' }, lineHeight: 1.1, letterSpacing: '-0.03em', mb: 4, maxWidth: 900 }}>
              Enterprise infrastructure.<br />
              <span style={{ color: theme.palette.text.secondary }}>Built for your sector.</span>
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: { xs: '1.1rem', md: '1.25rem' }, maxWidth: 850, lineHeight: 1.6, mb: 6, fontWeight: 400 }}>
              Generic blockchains fail in production. Cerulea provides highly tailored, regulatory-compliant data architectures designed specifically for the operational realities of your industry.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* 2. DIRECTORY TOGGLE & LIVE SEARCH BAR */}
      <Container maxWidth="lg" sx={{ mb: 6, position: 'relative', zIndex: 10 }}>
        
        {/* Toggle Bridge */}
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <Button 
            sx={{ 
              color: 'text.primary', 
              bgcolor: 'background.paper', 
              fontWeight: 700, 
              px: 3, py: 1, 
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
            }}
          >
            Browse by Industry
          </Button>
          <Button 
            component={Link} 
            href="/solutions/use-cases"
            sx={{ 
              color: 'text.secondary', 
              fontWeight: 600, 
              px: 3, py: 1, 
              borderRadius: 2,
              '&:hover': { color: 'text.primary', bgcolor: 'rgba(0,0,0,0.03)' }
            }}
          >
            Browse by Use Case
          </Button>
        </Box>

        <Box sx={{ p: 1, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 2, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
          <InputBase
            fullWidth
            placeholder="Search for an industry, use case, or specific problem..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            startAdornment={<InputAdornment position="start"><SearchIcon sx={{ color: 'text.secondary', ml: 2, mr: 1 }} /></InputAdornment>}
            sx={{ color: 'text.primary', fontSize: '1.1rem', py: 1 }}
          />
        </Box>
      </Container>

      {/* 3. HIGH-DENSITY LIST LAYOUT */}
      <Container maxWidth="lg">
        <Box sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
          <AnimatePresence>
            {filteredIndustries.map((industry) => (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                key={industry.id}
              >
                <Box 
                  component={Link}
                  href={`/solutions/industries/${industry.id}`}
                  sx={{ 
                    display: 'flex', 
                    alignItems: { xs: 'flex-start', md: 'center' },
                    flexDirection: { xs: 'column', md: 'row' },
                    p: 3, 
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    textDecoration: 'none', 
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    borderLeft: '4px solid transparent',
                    bgcolor: 'background.paper',
                    '&:hover': {
                      bgcolor: '#F8FAFC',
                      borderLeft: `4px solid ${industry.color}`,
                      '& .explore-arrow': { transform: 'translateX(6px)', color: industry.color }
                    }
                  }}
                >
                  {/* Column 1: Title & Icon */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5, width: { xs: '100%', md: '30%' }, mb: { xs: 2, md: 0 } }}>
                    <Box sx={{ width: 44, height: 44, borderRadius: 2, bgcolor: `${industry.color}15`, color: industry.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {industry.icon}
                    </Box>
                    <Typography sx={{ color: 'text.primary', fontSize: '1.05rem', fontWeight: 700 }}>
                      {industry.title}
                    </Typography>
                  </Box>

                  {/* Column 2: Description */}
                  <Box sx={{ flex: 1, pr: { xs: 0, md: 4 }, mb: { xs: 2, md: 0 } }}>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.5 }}>
                      {industry.desc}
                    </Typography>
                  </Box>

                  {/* Column 3: Core Solutions Tags */}
                  <Box sx={{ width: { xs: '100%', md: '20%' }, display: 'flex', flexWrap: 'wrap', gap: 1, mb: { xs: 2, md: 0 } }}>
                    {industry.related.map((tag, idx) => (
                      <Chip 
                        key={idx} 
                        label={tag} 
                        size="small" 
                        sx={{ bgcolor: '#F1F5F9', color: 'text.secondary', fontSize: '0.7rem', fontWeight: 600, border: '1px solid', borderColor: 'divider', borderRadius: 1 }} 
                      />
                    ))}
                  </Box>

                  {/* Column 4: Action Arrow */}
                  <Box sx={{ width: { xs: '100%', md: 'auto' }, display: 'flex', justifyContent: 'flex-end', pl: 2 }}>
                    <ArrowForwardIcon className="explore-arrow" sx={{ color: 'text.secondary', fontSize: 24, transition: 'all 0.2s ease' }} />
                  </Box>
                </Box>
              </motion.div>
            ))}
          </AnimatePresence>
        </Box>

        {filteredIndustries.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 12 }}>
            <Typography sx={{ color: 'text.primary', fontSize: '1.5rem', fontWeight: 600, mb: 2 }}>No solutions found.</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Try adjusting your search terms or view our Use Cases directory.</Typography>
            <Button variant="outlined" onClick={() => setSearchQuery('')} sx={{ mt: 4, color: 'text.primary', borderColor: 'divider' }}>
              Clear Search
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
}