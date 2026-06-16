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
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
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
    id: 'public-dapps',
    name: 'Public Dapps',
    priceLine: '$40',
    periodLine: '/month',
    description: 'Deploy your application to the Cerulea Public L1 with dedicated validator and RPC capacity from day one.',
    buttonText: 'Get Started',
    buttonHref: 'https://studio.cerulea.io',
    highlight: false,
    accent: '#2563eb',
    features: [
      '7 validators + 2 dedicated RPC nodes',
      '100,000 transactions/month',
      '30 GB storage',
      'Deploy to Cerulea Public L1',
      'Cerulea Studio access — Public Dapps',
      'Cerulea Intelligence (AI)',
      'Standard dashboard & monitoring',
    ],
  },
  {
    id: 'private-dapps',
    name: 'Private Dapps',
    priceLine: '$30',
    periodLine: '/month',
    description: 'Launch a sovereign, fully isolated private chain with dedicated validator infrastructure.',
    buttonText: 'Get Started',
    buttonHref: 'https://studio.cerulea.io',
    highlight: false,
    accent: '#7c3aed',
    features: [
      '3 validators (tolerates 1 node failure)',
      'Shared RPC access',
      '50,000 transactions/month',
      '15 GB storage',
      'Sovereign, fully isolated private chain',
      'Cerulea Studio access — Private Dapps',
      'Cerulea Intelligence (AI)',
    ],
  },
  {
    id: 'private-dapps-pro',
    name: 'Private Dapps Pro',
    priceLine: '$60',
    periodLine: '/month',
    description: 'Higher validator redundancy and a dedicated RPC node for growing private chain deployments.',
    buttonText: 'Get Started',
    buttonHref: 'https://studio.cerulea.io',
    highlight: true,
    accent: '#7c3aed',
    features: [
      '6 validators (tolerates 2 node failures)',
      '1 dedicated RPC node included',
      '100,000 transactions/month',
      '40 GB storage',
      'Sovereign, fully isolated private chain',
      'Cerulea Studio access — Private Dapps',
      'Cerulea Intelligence (AI)',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    priceLine: null,
    periodLine: 'Contact us',
    description: 'For organisations needing custom architecture, compliance, and dedicated engineering support.',
    buttonText: 'Contact Us',
    buttonHref: '/company/contact-sales',
    highlight: false,
    accent: '#172554',
    features: [
      'Custom validator count & architecture',
      'Bring your own cloud (AWS, GCP, on-premise)',
      'Custom compliance & RBAC modules',
      'Dedicated engineering SLA',
      'Architecture review & support',
    ],
  },
];

// ─────────────────────────────────────────────
// ADD-ON PREVIEW (full list lives on /pricing/addons)
// ─────────────────────────────────────────────
const ADDON_PREVIEW = [
  { name: '+1 Validator', price: '$10/mo' },
  { name: 'Dedicated RPC Node', price: '$12/mo' },
  { name: 'Custom Domain', price: '$35 one-time' },
  { name: 'Additional Studio Seat', price: '$10/mo' },
];

// ─────────────────────────────────────────────
// COMPARISON TABLE
// ─────────────────────────────────────────────
const COMPARISON_DATA = [
  {
    category: 'Infrastructure',
    rows: [
      { feature: 'Validators',      pub: '7',                 priv: '3',         pro: '6',                ent: 'Custom' },
      { feature: 'RPC Access',      pub: '2 dedicated nodes', priv: 'Shared',    pro: '1 dedicated node', ent: 'Custom' },
      { feature: 'Transaction Cap', pub: '100,000/mo',        priv: '50,000/mo', pro: '100,000/mo',       ent: 'Custom' },
      { feature: 'Storage',         pub: '30 GB',             priv: '15 GB',     pro: '40 GB',            ent: 'Custom' },
    ],
  },
  {
    category: 'Deployment & Governance',
    rows: [
      { feature: 'Deployment Model',          pub: 'Public L1',      priv: 'Private Chain',   pro: 'Private Chain', ent: 'Private Chain' },
      { feature: 'Governance',                pub: 'Token-Weighted', priv: 'Authority-Based', pro: 'Authority-Based', ent: 'Authority / Custom' },
      { feature: 'Studio Access',             pub: 'Public Dapps',   priv: 'Private Dapps',   pro: 'Private Dapps', ent: 'Private Dapps' },
      { feature: 'Cerulea Intelligence (AI)', pub: true,             priv: true,              pro: true,            ent: true },
    ],
  },
  {
    category: 'Support',
    rows: [
      { feature: 'Dashboard',       pub: 'Standard', priv: 'Standard', pro: 'Standard',        ent: 'Enterprise Logging' },
      { feature: 'Support Channel', pub: 'Email',     priv: 'Email',    pro: 'Priority Email', ent: 'Dedicated SLA' },
    ],
  },
] as const;

// ─────────────────────────────────────────────
// FAQs
// ─────────────────────────────────────────────
const FAQS = [
  {
    q: 'How quickly will my chain be provisioned?',
    a: 'Your chain is provisioned within 24 hours of signup, often much faster. Once provisioning completes, validator and RPC infrastructure is live and your genesis configuration is ready inside Studio.',
  },
  {
    q: 'What happens if I exceed my transaction cap?',
    a: 'If you\'re on Private Dapps and exceed your transaction cap, you\'ll be upgraded to Private Dapps Pro. If you\'re already on Private Dapps Pro or Public Dapps and exceed your cap, our team will reach out to discuss custom Enterprise pricing.',
  },
  {
    q: 'Can I add more validators, storage, or RPC capacity later?',
    a: 'Yes. Additional validators, storage, and dedicated RPC nodes are available as add-ons on top of your existing tier. See the full Add-Ons page for pricing and availability.',
  },
  {
    q: 'Can I use my own domain or a branded block explorer?',
    a: 'Yes, for private chain customers. A custom domain for your Dapp frontend and a dedicated branded block explorer are both available as add-ons.',
  },
  {
    q: 'Can I add more Studio seats or API keys?',
    a: 'Additional Studio seats are available on every tier. Additional API keys beyond the included limit are available to private chain customers.',
  },
  {
    q: 'Can I upgrade from one tier to another?',
    a: 'Yes. Your Studio projects and configuration carry forward when you upgrade, whether moving from Private Dapps to Private Dapps Pro or to a custom Enterprise plan.',
  },
  {
    q: 'How does Enterprise pricing work?',
    a: 'Enterprise deployments are custom by nature. Pricing depends on validator count, hosting environment (AWS, GCP, or on-premise), compliance requirements, and SLA expectations. Get in touch to discuss your specific setup.',
  },
];

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function PricingPage() {
  return (
    <Box sx={{ bgcolor: '#FAFAFA', minHeight: '100vh', pb: 16 }}>

      {/* HERO */}
      <Box sx={{ pt: { xs: 16, md: 24 }, pb: { xs: 8, md: 10 }, position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '500px', background: 'radial-gradient(ellipse at top, rgba(37,99,235,0.1), transparent 70%)', pointerEvents: 'none' }} />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 2, py: 1, borderRadius: 2, bgcolor: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)', mb: 4 }}>
              <PaymentsOutlinedIcon sx={{ color: '#2563eb', fontSize: 20 }} />
              <Typography sx={{ color: '#2563eb', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                Transparent Pricing
              </Typography>
            </Box>
            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '3rem', md: '4.5rem' }, lineHeight: 1.05, letterSpacing: '-0.03em', mb: 4, mx: 'auto', maxWidth: 900, color: '#172554' }}>
              Deploy public or private.<br />
              <span style={{ color: '#64748B' }}>Pick the chain that fits.</span>
            </Typography>
            <Typography sx={{ color: '#475569', fontSize: { xs: '1.1rem', md: '1.25rem' }, maxWidth: 680, lineHeight: 1.6, mb: 5, mx: 'auto' }}>
              Fixed monthly pricing for public and private chain deployments. Need something larger or fully custom? Our Enterprise team will build a plan around your requirements.
            </Typography>
          </motion.div>

          {/* Provisioning banner */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 2.5, py: 1.25, borderRadius: 10, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px -4px rgba(0,0,0,0.06)' }}>
              <AccessTimeOutlinedIcon sx={{ color: '#059669', fontSize: 20 }} />
              <Typography sx={{ color: '#172554', fontWeight: 700, fontSize: '0.9rem' }}>
                Chains provisioned within 24 hours of signup
              </Typography>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* TIER CARDS */}
      <Container maxWidth="lg" sx={{ mb: 12 }}>
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

                  {/* Top section — grows to push CTA to a consistent level */}
                  <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>

                    {/* Name */}
                    <Typography sx={{ fontSize: '1.4rem', fontWeight: 800, color: '#172554', mb: 2, mt: 1.5, letterSpacing: '-0.01em' }}>
                      {tier.name}
                    </Typography>

                    {/* Price */}
                    <Box sx={{ mb: 1, display: 'flex', alignItems: 'baseline', gap: 0.5 }}>
                      {tier.priceLine && (
                        <Typography sx={{ fontSize: '2rem', fontWeight: 800, color: '#172554', lineHeight: 1, letterSpacing: '-0.02em' }}>
                          {tier.priceLine}
                        </Typography>
                      )}
                      <Typography sx={{ fontSize: tier.priceLine ? '0.95rem' : '1.35rem', color: tier.priceLine ? '#94A3B8' : '#172554', fontWeight: tier.priceLine ? 600 : 800 }}>
                        {tier.periodLine}
                      </Typography>
                    </Box>

                    {/* Description — flexGrow pushes CTA to same level across all cards */}
                    <Typography sx={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6, mb: 4, mt: 2, flexGrow: 1 }}>
                      {tier.description}
                    </Typography>

                  </Box>

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
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>

      {/* ADD-ONS PREVIEW */}
      <Container maxWidth="lg" sx={{ mb: 20 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp}>
          <Box sx={{ bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, p: { xs: 4, md: 6 }, boxShadow: '0 8px 24px -8px rgba(0,0,0,0.04)' }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' }, justifyContent: 'space-between', gap: 3, mb: 4 }}>
              <Box>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, color: '#172554', mb: 1, letterSpacing: '-0.01em' }}>
                  Extend any tier
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '0.95rem' }}>
                  Add validators, storage, RPC capacity, branding, and more on top of any plan.
                </Typography>
              </Box>
              <Link href="/pricing/addons" style={{ textDecoration: 'none', flexShrink: 0 }}>
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: '1rem !important' }} />}
                  sx={{ py: 1.25, px: 3, fontSize: '0.9rem', fontWeight: 700, borderRadius: 2, bgcolor: '#172554', '&:hover': { bgcolor: '#0f1b3d' } }}
                >
                  View All Add-Ons
                </Button>
              </Link>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 2 }}>
              {ADDON_PREVIEW.map((addon) => (
                <Box key={addon.name} sx={{ p: 2.5, borderRadius: 3, bgcolor: '#F8FAFC', border: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <AddCircleOutlineIcon sx={{ color: '#2563eb', fontSize: 20, flexShrink: 0 }} />
                  <Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#172554', lineHeight: 1.3 }}>{addon.name}</Typography>
                    <Typography sx={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>{addon.price}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
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
                  { label: 'Public Dapps', color: '#2563eb' },
                  { label: 'Private Dapps', color: '#7c3aed' },
                  { label: 'Private Dapps Pro', color: '#7c3aed', highlight: true },
                  { label: 'Enterprise', color: '#172554' },
                ].map(({ label, color, highlight }) => (
                  <Box key={label} sx={{ width: '18%', p: 3, textAlign: 'center', borderLeft: '1px solid #E2E8F0', bgcolor: highlight ? 'rgba(124,58,237,0.03)' : 'transparent' }}>
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
                      {(['pub', 'priv', 'pro', 'ent'] as const).map((key) => (
                        <Box key={key} sx={{ width: '18%', p: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', borderLeft: '1px solid #F1F5F9', bgcolor: key === 'pro' ? 'rgba(124,58,237,0.015)' : 'transparent' }}>
                          {typeof row[key as keyof typeof row] === 'boolean' ? (
                            row[key as keyof typeof row]
                              ? <CheckCircleOutlineIcon sx={{ color: key === 'pub' ? '#2563eb' : key === 'ent' ? '#172554' : '#7c3aed', fontSize: 22 }} />
                              : <RemoveIcon sx={{ color: '#CBD5E1' }} />
                          ) : (
                            <Typography sx={{ color: key === 'pro' ? '#6d28d9' : '#475569', fontSize: '0.85rem', textAlign: 'center', fontWeight: key === 'pro' ? 700 : 500 }}>
                              {row[key as keyof typeof row] as string}
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
              Common questions about tiers, transaction caps, add-ons, and Enterprise licensing.
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
