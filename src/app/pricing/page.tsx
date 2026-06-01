'use client';

import * as React from 'react';
import Link from 'next/link';
import { Box, Container, Typography, Stack, Button, Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

// ─────────────────────────────────────────────
// TIER DATA
// ─────────────────────────────────────────────
const TIERS = [
  {
    id: 'sandbox',
    name: 'Sandbox',
    eyebrow: 'Free',
    priceLine: 'Free',
    periodLine: 'forever · no credit card',
    description:
      'Explore the full Cerulea platform on the testnet. Build, test, and validate your entire architecture with zero cost and zero commitment.',
    buttonText: 'Start Building',
    buttonHref: 'https://studio.cerulea.io',
    highlight: false,
    accent: '#059669',
    badge: null,
    footerNote: 'Testnet only — no mainnet or live deployments.',
    features: [
      'Full Cerulea Studio access',
      'Cerulea Intelligence (AI)',
      'Testnet deployments (unlimited)',
      'Dashboard (testnet view)',
      'Community support',
    ],
  },
  {
    id: 'developer',
    name: 'Developer',
    eyebrow: 'Public L1',
    priceLine: null,
    periodLine: 'usage-based',
    description:
      'For teams ready to go live. Deploy production applications to the Cerulea Public L1 and integrate with real-world systems.',
    buttonText: 'Contact Sales',
    buttonHref: '/company/contact-sales',
    highlight: false,
    accent: '#2563eb',
    badge: null,
    footerNote: null,
    features: [
      'Everything in Sandbox',
      'Public L1 mainnet deployments',
      'Production RPC access',
      'Standard telemetry dashboard',
      'Email support',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    eyebrow: 'Public L1',
    priceLine: null,
    periodLine: 'usage-based',
    description:
      'For scaling applications. Dedicated infrastructure, higher limits, and hands-on architecture support from our engineering team.',
    buttonText: 'Contact Sales',
    buttonHref: '/company/contact-sales',
    highlight: true,
    accent: '#2563eb',
    badge: 'Most Popular',
    footerNote: null,
    features: [
      'Everything in Developer',
      'Dedicated indexing nodes',
      'Unlimited RPC requests',
      'Advanced telemetry dashboard',
      'Architecture consultations',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    eyebrow: 'Private Chain',
    priceLine: null,
    periodLine: 'annual licensing',
    description:
      'For organisations deploying sovereign Private Chains with complete governance control, compliance requirements, and dedicated engineering support.',
    buttonText: 'Contact Sales',
    buttonHref: '/company/contact-sales',
    highlight: false,
    accent: '#7c3aed',
    badge: null,
    footerNote: null,
    features: [
      'Sovereign Private Chain deployment',
      'Bring your own cloud (AWS, GCP)',
      'Custom compliance & RBAC modules',
      'Node architecture review',
      '24/7 dedicated engineering SLA',
    ],
  },
];

// ─────────────────────────────────────────────
// COMPARISON TABLE
// ─────────────────────────────────────────────
const COMPARISON_DATA = [
  {
    category: 'Infrastructure & Execution',
    rows: [
      { feature: 'Deployment Model',        sandbox: 'Testnet Only',   dev: 'Public L1',          pro: 'Public L1',            ent: 'Private Chain' },
      { feature: 'Infrastructure Hosting',  sandbox: 'Shared Testnet', dev: 'Network Validators', pro: 'Dedicated Nodes',      ent: 'Cloud / On-Premise' },
      { feature: 'Live / Mainnet Deploy',   sandbox: false,            dev: true,                 pro: true,                   ent: true },
      { feature: 'Staging & Testnets',      sandbox: true,             dev: true,                 pro: true,                   ent: true },
    ],
  },
  {
    category: 'Cerulea Studio & Governance',
    rows: [
      { feature: 'Visual Architecture Builder', sandbox: true,     dev: true,                 pro: true,              ent: true },
      { feature: 'Cerulea Intelligence (AI)',    sandbox: true,     dev: true,                 pro: true,              ent: true },
      { feature: 'Governance Model',            sandbox: 'Testnet', dev: 'Token-Weighted',     pro: 'Token-Weighted',  ent: 'Authority / Custom' },
      { feature: 'Compliance Modules',          sandbox: false,     dev: false,                pro: false,             ent: true },
    ],
  },
  {
    category: 'Support & Operations',
    rows: [
      { feature: 'Telemetry Dashboard',   sandbox: 'Basic', dev: 'Standard', pro: 'Advanced', ent: 'Enterprise Logging' },
      { feature: 'Architecture Review',   sandbox: false,   dev: false,       pro: false,       ent: true },
      { feature: 'Support Channel',       sandbox: 'Community', dev: 'Email', pro: 'Priority Email', ent: 'Dedicated SLA' },
    ],
  },
];

// ─────────────────────────────────────────────
// FAQs
// ─────────────────────────────────────────────
const FAQS = [
  {
    q: 'What can I build on the free Sandbox tier?',
    a: 'Everything. The Sandbox gives you full access to Cerulea Studio, Cerulea Intelligence, and the Dashboard — all on the testnet. You can design data models, configure governance rules, compile and deploy contracts, and simulate transactions. The only restriction is that deployments stay on the testnet; no mainnet or live-production traffic is allowed on the free tier.',
  },
  {
    q: 'How does pricing work for the paid tiers?',
    a: 'Paid tiers are priced based on your usage — the environments you deploy to, transaction volumes, RPC bandwidth, and operational requirements. Because every team\'s footprint is different, we discuss pricing directly rather than publishing fixed numbers. Reach out via the Contact Sales form and we\'ll put together a clear proposal.',
  },
  {
    q: 'How does Private Chain (Enterprise) pricing work?',
    a: 'Private Chain deployments are custom by nature. Pricing depends on the number of validator nodes, your hosting environment (AWS, GCP, or on-premise), compliance requirements, and SLA expectations. Since you host the infrastructure, Cerulea charges a software licensing and orchestration fee. Get in touch to discuss your specific setup.',
  },
  {
    q: 'Can I upgrade from Sandbox to a paid tier later?',
    a: 'Yes — your Studio projects and compiled schemas carry forward. When you\'re ready to deploy to mainnet, simply contact our sales team and we\'ll get you set up on the right plan without starting from scratch.',
  },
];

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function PricingPage() {
  return (
    <Box sx={{ bgcolor: '#FAFAFA', minHeight: '100vh', pb: 16 }}>

      {/* HERO */}
      <Box sx={{ pt: { xs: 16, md: 24 }, pb: { xs: 12, md: 16 }, position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '500px', background: 'radial-gradient(ellipse at top, rgba(37,99,235,0.1), transparent 70%)', pointerEvents: 'none' }} />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 2, py: 1, borderRadius: 2, bgcolor: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)', mb: 4 }}>
              <PaymentsOutlinedIcon sx={{ color: '#2563eb', fontSize: 20 }} />
              <Typography sx={{ color: '#2563eb', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                Transparent Licensing
              </Typography>
            </Box>
            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '3rem', md: '4.5rem' }, lineHeight: 1.05, letterSpacing: '-0.03em', mb: 4, mx: 'auto', maxWidth: 900, color: '#172554' }}>
              Start free.<br />
              <span style={{ color: '#64748B' }}>Scale with confidence.</span>
            </Typography>
            <Typography sx={{ color: '#475569', fontSize: { xs: '1.1rem', md: '1.25rem' }, maxWidth: 680, lineHeight: 1.6, mb: 2, mx: 'auto' }}>
              Build and experiment for free on the testnet. When you&rsquo;re ready to go live, our team will put together a plan that fits your exact requirements.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* TIER CARDS */}
      <Container maxWidth="lg" sx={{ mb: 20 }}>
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
            gap: 2.5,
            alignItems: 'stretch',
          }}>
            {TIERS.map((tier) => (
              <motion.div variants={fadeUp} key={tier.id} style={{ display: 'flex' }}>
                <Box sx={{
                  width: '100%',
                  bgcolor: '#FFFFFF',
                  borderRadius: 4,
                  p: 4,
                  border: '1px solid',
                  borderColor: tier.highlight ? '#BFDBF7' : '#E2E8F0',
                  boxShadow: tier.highlight
                    ? '0 20px 40px -10px rgba(37,99,235,0.15)'
                    : '0 8px 24px -8px rgba(0,0,0,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'box-shadow 0.2s',
                  '&:hover': {
                    boxShadow: tier.highlight
                      ? '0 28px 48px -10px rgba(37,99,235,0.2)'
                      : '0 16px 36px -8px rgba(0,0,0,0.1)',
                  },
                }}>
                  {/* Top accent bar */}
                  <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, borderRadius: '4px 4px 0 0', bgcolor: tier.accent, opacity: tier.highlight ? 1 : 0.5 }} />

                  {/* Badge */}
                  {tier.badge && (
                    <Box sx={{ position: 'absolute', top: 14, right: 16, bgcolor: 'rgba(37,99,235,0.1)', color: '#2563eb', px: 1.5, py: 0.5, borderRadius: 10, fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      {tier.badge}
                    </Box>
                  )}

                  {/* Eyebrow */}
                  <Typography sx={{ color: tier.accent, fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', mb: 1, mt: 1.5 }}>
                    {tier.eyebrow}
                  </Typography>

                  {/* Name */}
                  <Typography sx={{ fontSize: '1.4rem', fontWeight: 800, color: '#172554', mb: 2, letterSpacing: '-0.01em' }}>
                    {tier.name}
                  </Typography>

                  {/* Price */}
                  <Box sx={{ mb: 1 }}>
                    {tier.priceLine && (
                      <Typography sx={{ fontSize: tier.priceLine === 'Free' ? '2.2rem' : '1.35rem', fontWeight: 800, color: tier.priceLine === 'Free' ? '#059669' : '#172554', lineHeight: 1, letterSpacing: '-0.02em' }}>
                        {tier.priceLine}
                      </Typography>
                    )}
                    <Typography sx={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600, mt: tier.priceLine ? 0.5 : 0 }}>
                      {tier.periodLine}
                    </Typography>
                  </Box>

                  {/* Description */}
                  <Typography sx={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6, mb: 4, mt: 2, flexGrow: 0, minHeight: { xl: 80 } }}>
                    {tier.description}
                  </Typography>

                  {/* CTA */}
                  <Box sx={{ mb: 4 }}>
                    <Link href={tier.buttonHref} style={{ textDecoration: 'none', display: 'block' }} {...(tier.buttonHref.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                      <Button
                        variant="outlined"
                        fullWidth
                        endIcon={<ArrowForwardIcon sx={{ fontSize: '1rem !important' }} />}
                        sx={{
                          py: 1.5, fontSize: '0.9rem', fontWeight: 700, borderRadius: 2,
                          borderColor: tier.accent,
                          color: tier.accent,
                          '&:hover': { borderColor: tier.accent, bgcolor: `${tier.accent}08` },
                        }}
                      >
                        {tier.buttonText}
                      </Button>
                    </Link>
                  </Box>

                  <Divider sx={{ mb: 3, borderColor: '#F1F5F9' }} />

                  {/* Features */}
                  <Stack spacing={2} sx={{ flexGrow: 1 }}>
                    {tier.features.map((f, i) => (
                      <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                        <CheckCircleIcon sx={{ fontSize: 18, color: tier.accent, mt: 0.15, flexShrink: 0 }} />
                        <Typography sx={{ color: '#475569', fontSize: '0.88rem', lineHeight: 1.5, fontWeight: 500 }}>
                          {f}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>

                  {/* Footer note (Sandbox only) */}
                  {tier.footerNote && (
                    <Box sx={{ mt: 3, pt: 2.5, borderTop: '1px solid #F1F5F9' }}>
                      <Typography sx={{ fontSize: '0.78rem', color: '#94A3B8', fontStyle: 'italic' }}>
                        {tier.footerNote}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>

      {/* COMPARISON TABLE */}
      <Container maxWidth="lg" sx={{ mb: 20 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{ fontSize: '2.2rem', fontWeight: 800, color: '#172554', mb: 2, letterSpacing: '-0.02em' }}>
              Compare all tiers
            </Typography>
            <Typography sx={{ color: '#475569', fontSize: '1rem' }}>
              A full breakdown of platform capabilities across every plan.
            </Typography>
          </Box>

          <Box sx={{ overflowX: 'auto' }}>
            <Box sx={{ minWidth: 860, border: '1px solid #E2E8F0', borderRadius: 4, bgcolor: '#FFFFFF', overflow: 'hidden', boxShadow: '0 8px 24px -8px rgba(0,0,0,0.04)' }}>

              {/* Header */}
              <Box sx={{ display: 'flex', bgcolor: '#F8FAFC', borderBottom: '2px solid #E2E8F0' }}>
                <Box sx={{ width: '28%', p: 3 }} />
                {[
                  { label: 'Sandbox', color: '#059669' },
                  { label: 'Developer', color: '#2563eb' },
                  { label: 'Pro', color: '#2563eb', highlight: true },
                  { label: 'Enterprise', color: '#7c3aed' },
                ].map(({ label, color, highlight }, i) => (
                  <Box key={label} sx={{ width: '18%', p: 3, textAlign: 'center', borderLeft: '1px solid #E2E8F0', bgcolor: highlight ? 'rgba(37,99,235,0.03)' : 'transparent' }}>
                    <Typography sx={{ fontWeight: 800, color: color, fontSize: '0.9rem' }}>{label}</Typography>
                  </Box>
                ))}
              </Box>

              {/* Rows */}
              {COMPARISON_DATA.map((section, sIdx) => (
                <React.Fragment key={sIdx}>
                  <Box sx={{ bgcolor: '#F1F5F9', px: 3, py: 2, borderBottom: '1px solid #E2E8F0', borderTop: sIdx > 0 ? '1px solid #E2E8F0' : 'none' }}>
                    <Typography sx={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      {section.category}
                    </Typography>
                  </Box>
                  {section.rows.map((row, rIdx) => (
                    <Box key={rIdx} sx={{ display: 'flex', borderBottom: '1px solid #F1F5F9', '&:last-child': { borderBottom: 'none' } }}>
                      <Box sx={{ width: '28%', p: 3, display: 'flex', alignItems: 'center' }}>
                        <Typography sx={{ color: '#172554', fontWeight: 600, fontSize: '0.9rem' }}>{row.feature}</Typography>
                      </Box>
                      {(['sandbox', 'dev', 'pro', 'ent'] as const).map((key, i) => (
                        <Box key={key} sx={{ width: '18%', p: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', borderLeft: '1px solid #F1F5F9', bgcolor: key === 'pro' ? 'rgba(37,99,235,0.015)' : 'transparent' }}>
                          {typeof row[key] === 'boolean' ? (
                            row[key]
                              ? <CheckCircleOutlineIcon sx={{ color: key === 'sandbox' ? '#059669' : key === 'ent' ? '#7c3aed' : '#2563eb', fontSize: 22 }} />
                              : <RemoveIcon sx={{ color: '#CBD5E1' }} />
                          ) : (
                            <Typography sx={{ color: key === 'pro' ? '#1d4ed8' : '#475569', fontSize: '0.85rem', textAlign: 'center', fontWeight: key === 'pro' ? 700 : 500 }}>
                              {row[key] as string}
                            </Typography>
                          )}
                        </Box>
                      ))}
                    </Box>
                  ))}
                </React.Fragment>
              ))}

            </Box>
          </Box>
        </motion.div>
      </Container>

      {/* FAQ */}
      <Container maxWidth="md" sx={{ mb: 16 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{ fontSize: '2.2rem', fontWeight: 800, color: '#172554', mb: 2, letterSpacing: '-0.02em' }}>
              Frequently Asked Questions
            </Typography>
            <Typography sx={{ color: '#475569', fontSize: '1rem' }}>
              Common questions about the Sandbox tier, paid plans, and private chain licensing.
            </Typography>
          </Box>

          <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, overflow: 'hidden', boxShadow: '0 8px 24px -8px rgba(0,0,0,0.04)' }}>
            {FAQS.map((faq, index) => (
              <Accordion
                key={index}
                disableGutters
                elevation={0}
                sx={{
                  bgcolor: 'transparent',
                  borderBottom: index === FAQS.length - 1 ? 'none' : '1px solid #E2E8F0',
                  '&:before': { display: 'none' },
                  '&.Mui-expanded': { m: 0 },
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#2563eb' }} />} sx={{ px: { xs: 3, md: 4 }, py: 2 }}>
                  <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: '#172554' }}>{faq.q}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: { xs: 3, md: 4 }, pb: 4, pt: 0 }}>
                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7 }}>{faq.a}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </motion.div>
      </Container>

    </Box>
  );
}
