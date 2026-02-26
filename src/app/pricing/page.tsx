'use client';

import * as React from 'react';
import Link from 'next/link';
import { Box, Container, Typography, Grid, Stack, Button, Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import { Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// --- MOCK PRICING DATA ---

const TIERS = [
  {
    id: 'developer',
    name: 'Developer',
    price: '₹14,999',
    period: 'per month',
    description: 'For individuals and small teams building public dApps and executing production pilots.',
    buttonText: 'Start Building',
    buttonVariant: 'outlined' as const,
    href: '/company/contact',
    highlight: false,
    features: [
      'Access to Cerulea Studio',
      'Deploy to Cerulea Public L1',
      '100,000 RPC requests per day',
      'Standard community governance',
      'Community Discord support'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '₹99,000',
    period: 'per month',
    description: 'For scaling applications requiring dedicated indexing and staging environments.',
    buttonText: 'Upgrade to Pro',
    buttonVariant: 'contained' as const,
    href: '/company/contact',
    highlight: true,
    features: [
      'Everything in Developer',
      'Unlimited RPC requests',
      'Dedicated indexing nodes',
      'Staging and testnet environments',
      'Priority email support'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: 'yearly licensing',
    description: 'For organizations deploying sovereign Private Chains with strict compliance rules.',
    buttonText: 'Contact Sales',
    buttonVariant: 'outlined' as const,
    href: '/company/contact',
    highlight: false,
    features: [
      'Sovereign Private Chain deployment',
      'Bring your own cloud (AWS, GCP)',
      'Custom compliance and RBAC modules',
      'Node architecture review',
      '24/7 dedicated engineering SLA'
    ]
  }
];

const COMPARISON_DATA = [
  {
    category: 'Infrastructure & Execution',
    rows: [
      { feature: 'Deployment Model', dev: 'Public L1', pro: 'Public L1', ent: 'Private Chain' },
      { feature: 'Infrastructure Hosting', dev: 'Network Validators', pro: 'Dedicated Nodes', ent: 'Cloud / On-Premise' },
      { feature: 'RPC Rate Limits', dev: '100,000 / day', pro: 'Unlimited', ent: 'Custom' },
      { feature: 'Staging & Testnets', dev: false, pro: true, ent: true },
    ]
  },
  {
    category: 'Cerulea Studio & Governance',
    rows: [
      { feature: 'Visual Architecture Builder', dev: true, pro: true, ent: true },
      { feature: 'Cerulea Intelligence (AI)', dev: true, pro: true, ent: true },
      { feature: 'Governance Model', dev: 'Token-Weighted', pro: 'Token-Weighted', ent: 'Authority / Custom' },
      { feature: 'Compliance Modules', dev: false, pro: false, ent: true },
    ]
  },
  {
    category: 'Support & Operations',
    rows: [
      { feature: 'Telemetry Dashboard', dev: 'Standard', pro: 'Advanced', ent: 'Enterprise Logging' },
      { feature: 'Architecture Review', dev: false, pro: false, ent: true },
      { feature: 'Support Channel', dev: 'Community', pro: 'Priority Email', ent: 'Dedicated SLA' },
    ]
  }
];

const FAQS = [
  {
    q: 'Do I need to pay for infrastructure costs on the Public L1?',
    a: 'No. When deploying to the Cerulea Public L1, the infrastructure is maintained by decentralized network validators. Your Developer or Pro subscription covers platform access, tooling, and guaranteed RPC bandwidth. You only pay standard network gas fees for state changes.'
  },
  {
    q: 'How does Private Chain pricing work?',
    a: 'Private Chain deployments are highly custom. Pricing depends on the number of validator nodes you intend to run, specific integration requirements, and SLA expectations. Because you host the physical infrastructure on your own AWS, GCP, or On-Premise servers, Cerulea charges a software licensing and orchestration fee starting at roughly ₹8,00,000 per year.'
  },
  {
    q: 'Can we upgrade from Public L1 to a Private Chain later?',
    a: 'Yes. Cerulea Studio allows you to export your data models and application logic. However, migrating live state from a public environment to a sovereign private environment requires a formal migration and bridging protocol, which our Enterprise team will facilitate.'
  },
  {
    q: 'What forms of payment do you accept?',
    a: 'For Developer and Pro tiers, we accept major credit cards via Stripe. For Enterprise agreements, we accept bank wire transfers (RTGS/NEFT) and USDC/USDT stablecoin settlements.'
  }
];

export default function PricingPage() {
  return (
    <Box sx={{ bgcolor: '#FAFAFA', minHeight: '100vh', pb: 16 }}>
      
      {/* 1. LIGHT THEME HERO SECTION */}
      <Box sx={{ pt: { xs: 16, md: 24 }, pb: { xs: 12, md: 16 }, position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '500px', background: 'radial-gradient(ellipse at top, rgba(37, 99, 235, 0.1), transparent 70%)', pointerEvents: 'none' }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 2, py: 1, borderRadius: 2, bgcolor: 'rgba(37, 99, 235, 0.1)', border: '1px solid rgba(37, 99, 235, 0.2)', mb: 4 }}>
              <PaymentsOutlinedIcon sx={{ color: '#2563eb', fontSize: 20 }} />
              <Typography sx={{ color: '#2563eb', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                Transparent Licensing
              </Typography>
            </Box>
            
            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '3rem', md: '4.5rem' }, lineHeight: 1.05, letterSpacing: '-0.03em', mb: 4, mx: 'auto', maxWidth: 1000, color: '#172554' }}>
              Infrastructure pricing<br />
              <span style={{ color: '#64748B' }}>without the guesswork.</span>
            </Typography>
            
            <Typography sx={{ color: '#475569', fontSize: { xs: '1.1rem', md: '1.25rem' }, maxWidth: 700, lineHeight: 1.6, mb: 6, mx: 'auto', fontWeight: 400 }}>
              Predictable costs for public application deployments. Sovereign licensing models for enterprise private chains. Build with absolute clarity.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* 2. THREE-COLUMN PRICING CARDS (STRICT CSS GRID) */}
      <Container maxWidth="lg" sx={{ mb: 24 }}>
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', lg: 'repeat(3, 1fr)' }, 
            gap: 4, 
            alignItems: 'stretch' 
          }}>
            {TIERS.map((tier) => (
              <motion.div variants={fadeUp} key={tier.id} style={{ display: 'flex' }}>
                <Box sx={{
                  width: '100%',
                  bgcolor: '#FFFFFF',
                  borderRadius: 4,
                  p: { xs: 4, lg: 5 },
                  border: '1px solid',
                  borderColor: tier.highlight ? '#BFDBF7' : '#E2E8F0',
                  boxShadow: tier.highlight ? '0 20px 40px -10px rgba(37, 99, 235, 0.15)' : '0 10px 30px -10px rgba(0,0,0,0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'all 0.2s',
                  transform: tier.highlight ? { lg: 'scale(1.03)' } : 'none',
                  zIndex: tier.highlight ? 2 : 1,
                  '&:hover': {
                    boxShadow: tier.highlight ? '0 30px 50px -10px rgba(37, 99, 235, 0.2)' : '0 20px 40px -10px rgba(0,0,0,0.08)'
                  }
                }}>
                  {/* Glowing Top Accent for Highlighted Card */}
                  {tier.highlight && (
                    <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: 'linear-gradient(90deg, #3b82f6, #1d4ed8)' }} />
                  )}

                  {/* Popular Badge */}
                  {tier.highlight && (
                    <Box sx={{ position: 'absolute', top: 16, right: 20, bgcolor: 'rgba(37, 99, 235, 0.1)', color: '#2563eb', px: 1.5, py: 0.5, borderRadius: 10, fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Most Popular
                    </Box>
                  )}

                  <Typography sx={{ color: tier.highlight ? '#2563eb' : '#64748B', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', mb: 2, mt: tier.highlight ? 2 : 0 }}>
                    {tier.name}
                  </Typography>

                  <Box sx={{ mb: 2 }}>
                    <Typography sx={{ fontSize: '2.5rem', fontWeight: 800, color: '#172554', lineHeight: 1, mb: 1, letterSpacing: '-0.02em' }}>
                      {tier.price}
                    </Typography>
                    <Typography sx={{ fontSize: '0.9rem', fontWeight: 600, color: '#64748B' }}>
                      {tier.period}
                    </Typography>
                  </Box>

                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, mb: 4, minHeight: { lg: 70 } }}>
                    {tier.description}
                  </Typography>

                  <Box sx={{ mb: 4 }}>
                    <Link href={tier.href} style={{ textDecoration: 'none', width: '100%', display: 'block' }}>
                      <Button 
                        variant={tier.buttonVariant}
                        fullWidth
                        sx={{
                          py: 1.5,
                          fontSize: '0.95rem',
                          fontWeight: 700,
                          borderRadius: 2,
                          ...(tier.highlight 
                            ? { bgcolor: '#2563eb', color: '#FFFFFF', '&:hover': { bgcolor: '#1d4ed8' }, boxShadow: 'none' }
                            : { borderColor: '#CBD5E1', color: '#172554', '&:hover': { borderColor: '#172554', bgcolor: 'transparent' } }
                          )
                        }}
                      >
                        {tier.buttonText}
                      </Button>
                    </Link>
                  </Box>

                  <Divider sx={{ mb: 4, borderColor: '#E2E8F0' }} />

                  <Typography sx={{ color: '#172554', fontSize: '0.85rem', fontWeight: 800, mb: 3, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Included Features
                  </Typography>

                  <Stack spacing={2.5} sx={{ flexGrow: 1 }}>
                    {tier.features.map((feature, i) => (
                      <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                        <CheckCircleIcon sx={{ fontSize: 20, color: tier.highlight ? '#2563eb' : '#94A3B8', mt: 0.1 }} />
                        <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.5, fontWeight: 500 }}>
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>

                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>

      {/* 3. FEATURE COMPARISON MATRIX */}
      <Container maxWidth="lg" sx={{ mb: 24 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{ fontSize: '2.5rem', fontWeight: 800, color: '#172554', mb: 2, letterSpacing: '-0.02em' }}>
              Compare Capabilities
            </Typography>
            <Typography sx={{ color: '#475569', fontSize: '1.1rem' }}>
              A detailed breakdown of platform features across all architectural tiers.
            </Typography>
          </Box>

          <Box sx={{ overflowX: 'auto' }}>
            <Box sx={{ minWidth: 800, border: '1px solid #E2E8F0', borderRadius: 4, bgcolor: '#FFFFFF', overflow: 'hidden', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.03)' }}>
              
              {/* Header Row */}
              <Box sx={{ display: 'flex', bgcolor: '#F8FAFC', borderBottom: '2px solid #E2E8F0' }}>
                <Box sx={{ width: '40%', p: 3 }} />
                <Box sx={{ width: '20%', p: 3, textAlign: 'center', borderLeft: '1px solid #E2E8F0' }}>
                  <Typography sx={{ fontWeight: 800, color: '#64748B' }}>Developer</Typography>
                </Box>
                <Box sx={{ width: '20%', p: 3, textAlign: 'center', bgcolor: 'rgba(37, 99, 235, 0.03)', borderLeft: '1px solid #E2E8F0' }}>
                  <Typography sx={{ fontWeight: 800, color: '#2563eb' }}>Pro</Typography>
                </Box>
                <Box sx={{ width: '20%', p: 3, textAlign: 'center', borderLeft: '1px solid #E2E8F0' }}>
                  <Typography sx={{ fontWeight: 800, color: '#172554' }}>Enterprise</Typography>
                </Box>
              </Box>

              {/* Data Rows */}
              {COMPARISON_DATA.map((section, sIdx) => (
                <React.Fragment key={sIdx}>
                  <Box sx={{ bgcolor: '#F1F5F9', p: 2.5, borderBottom: '1px solid #E2E8F0', borderTop: sIdx > 0 ? '1px solid #E2E8F0' : 'none' }}>
                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748B', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      {section.category}
                    </Typography>
                  </Box>
                  
                  {section.rows.map((row, rIdx) => (
                    <Box key={rIdx} sx={{ display: 'flex', borderBottom: '1px solid #E2E8F0', '&:last-child': { borderBottom: 'none' } }}>
                      
                      <Box sx={{ width: '40%', p: 3, display: 'flex', alignItems: 'center' }}>
                        <Typography sx={{ color: '#172554', fontWeight: 600, fontSize: '0.95rem' }}>{row.feature}</Typography>
                      </Box>
                      
                      {/* Developer Column */}
                      <Box sx={{ width: '20%', p: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', borderLeft: '1px solid #E2E8F0' }}>
                        {typeof row.dev === 'boolean' ? (
                          row.dev ? <CheckCircleOutlineIcon sx={{ color: '#94A3B8', fontSize: 22 }} /> : <RemoveIcon sx={{ color: '#CBD5E1' }} />
                        ) : (
                          <Typography sx={{ color: '#475569', fontSize: '0.9rem', textAlign: 'center', fontWeight: 500 }}>{row.dev}</Typography>
                        )}
                      </Box>

                      {/* Pro Column */}
                      <Box sx={{ width: '20%', p: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'rgba(37, 99, 235, 0.02)', borderLeft: '1px solid #E2E8F0' }}>
                        {typeof row.pro === 'boolean' ? (
                          row.pro ? <CheckCircleIcon sx={{ color: '#2563eb', fontSize: 22 }} /> : <RemoveIcon sx={{ color: '#CBD5E1' }} />
                        ) : (
                          <Typography sx={{ color: '#1d4ed8', fontSize: '0.9rem', textAlign: 'center', fontWeight: 700 }}>{row.pro}</Typography>
                        )}
                      </Box>

                      {/* Enterprise Column */}
                      <Box sx={{ width: '20%', p: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', borderLeft: '1px solid #E2E8F0' }}>
                        {typeof row.ent === 'boolean' ? (
                          row.ent ? <CheckCircleOutlineIcon sx={{ color: '#172554', fontSize: 22 }} /> : <RemoveIcon sx={{ color: '#CBD5E1' }} />
                        ) : (
                          <Typography sx={{ color: '#172554', fontSize: '0.9rem', textAlign: 'center', fontWeight: 700 }}>{row.ent}</Typography>
                        )}
                      </Box>

                    </Box>
                  ))}
                </React.Fragment>
              ))}

            </Box>
          </Box>
        </motion.div>
      </Container>

      {/* 4. FAQ SECTION */}
      <Container maxWidth="md" sx={{ mb: 20 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{ fontSize: '2.5rem', fontWeight: 800, color: '#172554', mb: 2, letterSpacing: '-0.02em' }}>
              Frequently Asked Questions
            </Typography>
            <Typography sx={{ color: '#475569', fontSize: '1.1rem' }}>
              Details on infrastructure billing, private chain scaling, and payment methods.
            </Typography>
          </Box>

          <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, overflow: 'hidden', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.03)' }}>
            {FAQS.map((faq, index) => (
              <Accordion 
                key={index} 
                disableGutters 
                elevation={0} 
                sx={{ 
                  bgcolor: 'transparent',
                  borderBottom: index === FAQS.length - 1 ? 'none' : '1px solid #E2E8F0',
                  '&:before': { display: 'none' },
                  '&.Mui-expanded': { m: 0 }
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#2563eb' }} />} sx={{ px: { xs: 3, md: 4 }, py: 2 }}>
                  <Typography sx={{ fontSize: '1.05rem', fontWeight: 700, color: '#172554' }}>
                    {faq.q}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: { xs: 3, md: 4 }, pb: 4, pt: 0 }}>
                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7 }}>
                    {faq.a}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}