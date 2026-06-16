'use client';

import * as React from 'react';
import Link from 'next/link';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import { Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

type Addon = { name: string; price: string; availableTo: string };

const INFRA_ADDONS: Addon[] = [
  { name: '+1 validator', price: '$10/mo', availableTo: 'Private Dapps' },
  { name: 'Additional validators (up to +3)', price: '$10/mo each', availableTo: 'Private Dapps Pro only' },
  { name: '+10 GB storage', price: '$3/mo', availableTo: 'Either private tier' },
  { name: 'Dedicated RPC node', price: '$12/mo', availableTo: 'Private Dapps only' },
];

const BRANDING_ADDONS: Addon[] = [
  { name: 'Custom domain for Dapp frontend', price: '$35 one-time', availableTo: 'Private chain customers' },
  { name: 'Dedicated branded block explorer', price: '$40 one-time + $7/mo', availableTo: 'Private chain customers' },
  { name: 'Additional API key', price: '$15/mo per key', availableTo: 'Private chain customers' },
  { name: 'Chain data export (CSV/PDF)', price: '$10 per export', availableTo: 'Private chain customers' },
  { name: 'Additional Studio seats (beyond 2 included)', price: '$10/mo per seat', availableTo: 'Everyone, all tiers' },
];

function AddonTable({ title, items }: { title: string; items: Addon[] }) {
  return (
    <Box sx={{ mb: 10 }}>
      <Typography sx={{ fontSize: '1.4rem', fontWeight: 800, color: '#172554', mb: 3, letterSpacing: '-0.01em' }}>
        {title}
      </Typography>
      <Box sx={{ border: '1px solid #E2E8F0', borderRadius: 4, bgcolor: '#FFFFFF', overflow: 'hidden', boxShadow: '0 8px 24px -8px rgba(0,0,0,0.04)' }}>
        <Box sx={{ display: 'flex', bgcolor: '#F8FAFC', borderBottom: '2px solid #E2E8F0' }}>
          <Box sx={{ width: '46%', p: { xs: 2, md: 3 } }}>
            <Typography sx={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748B', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Add-on</Typography>
          </Box>
          <Box sx={{ width: '22%', p: { xs: 2, md: 3 }, borderLeft: '1px solid #E2E8F0' }}>
            <Typography sx={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748B', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Price</Typography>
          </Box>
          <Box sx={{ width: '32%', p: { xs: 2, md: 3 }, borderLeft: '1px solid #E2E8F0' }}>
            <Typography sx={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748B', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Available To</Typography>
          </Box>
        </Box>
        {items.map((item, i) => (
          <Box key={item.name} sx={{ display: 'flex', borderBottom: i === items.length - 1 ? 'none' : '1px solid #F1F5F9' }}>
            <Box sx={{ width: '46%', p: { xs: 2, md: 3 }, display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ color: '#172554', fontWeight: 600, fontSize: '0.9rem' }}>{item.name}</Typography>
            </Box>
            <Box sx={{ width: '22%', p: { xs: 2, md: 3 }, borderLeft: '1px solid #F1F5F9', display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ color: '#2563eb', fontWeight: 700, fontSize: '0.9rem' }}>{item.price}</Typography>
            </Box>
            <Box sx={{ width: '32%', p: { xs: 2, md: 3 }, borderLeft: '1px solid #F1F5F9', display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ color: '#475569', fontSize: '0.85rem' }}>{item.availableTo}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default function AddonsPage() {
  return (
    <Box sx={{ bgcolor: '#FAFAFA', minHeight: '100vh', pb: 16 }}>

      {/* HERO */}
      <Box sx={{ pt: { xs: 16, md: 24 }, pb: { xs: 10, md: 14 }, position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '500px', background: 'radial-gradient(ellipse at top, rgba(37,99,235,0.1), transparent 70%)', pointerEvents: 'none' }} />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Link href="/pricing" style={{ textDecoration: 'none' }}>
              <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, mb: 4, color: '#2563eb', fontSize: '0.85rem', fontWeight: 700 }}>
                <ArrowBackIcon sx={{ fontSize: 16 }} />
                Back to Pricing
              </Box>
            </Link>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 2, py: 1, borderRadius: 2, bgcolor: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)', mb: 4 }}>
              <LayersOutlinedIcon sx={{ color: '#2563eb', fontSize: 20 }} />
              <Typography sx={{ color: '#2563eb', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                Add-Ons
              </Typography>
            </Box>
            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '2.6rem', md: '3.75rem' }, lineHeight: 1.05, letterSpacing: '-0.03em', mb: 4, mx: 'auto', maxWidth: 800, color: '#172554' }}>
              Extend any tier,<br />
              <span style={{ color: '#64748B' }}>whenever you need to.</span>
            </Typography>
            <Typography sx={{ color: '#475569', fontSize: { xs: '1.05rem', md: '1.2rem' }, maxWidth: 640, lineHeight: 1.6, mx: 'auto' }}>
              Add validators, storage, RPC capacity, branding, and more on top of your existing plan at any time. No need to upgrade tiers for a single capability.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* TABLES */}
      <Container maxWidth="lg">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp}>
          <AddonTable title="Infrastructure Add-Ons" items={INFRA_ADDONS} />
          <AddonTable title="Branding, Access & Data Add-Ons" items={BRANDING_ADDONS} />
        </motion.div>

        {/* CTA */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp}>
          <Box sx={{ textAlign: 'center', mt: 4, p: { xs: 4, md: 6 }, bgcolor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: 4, boxShadow: '0 8px 24px -8px rgba(0,0,0,0.04)' }}>
            <Typography sx={{ fontSize: '1.3rem', fontWeight: 800, color: '#172554', mb: 2 }}>
              Need something that isn&rsquo;t listed here?
            </Typography>
            <Typography sx={{ color: '#475569', fontSize: '0.95rem', mb: 4, maxWidth: 480, mx: 'auto' }}>
              Larger validator counts, custom infrastructure, or anything beyond these add-ons is handled as part of an Enterprise plan.
            </Typography>
            <Link href="/company/contact-sales" style={{ textDecoration: 'none' }}>
              <Button variant="contained" sx={{ py: 1.5, px: 4, fontSize: '0.9rem', fontWeight: 700, borderRadius: 2, bgcolor: '#172554', '&:hover': { bgcolor: '#0f1b3d' } }}>
                Contact Sales
              </Button>
            </Link>
          </Box>
        </motion.div>
      </Container>

    </Box>
  );
}
