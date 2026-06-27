'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AppBar,
  Toolbar,
  Box,
  Container,
  Typography,
  Button,
  Popover,
  Stack,
  Chip,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { headerNav, MegaMenu, MegaItem, brand, getMainUrl } from '@/content/siteContent';
import { track } from '@/lib/track';

type OpenState = {
  anchorEl: HTMLElement | null;
  label: string | null;
};

// COMPACT PREMIUM MENU ITEM
function MenuItem({ item, onClose }: { item: MegaItem; onClose: () => void }) {
  return (
    <Link href={item.href} onClick={() => { onClose(); track.navClick(item.label, item.href); }} style={{ textDecoration: 'none' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 1.5,
          p: 1,
          borderRadius: 2,
          transition: 'all 0.15s ease-in-out',
          '&:hover': {
            bgcolor: '#F8FAFC',
            '& .icon-container': {
              bgcolor: 'rgba(37, 99, 235, 0.1)',
              borderColor: 'rgba(37, 99, 235, 0.2)',
              color: '#2563eb',
            },
          },
        }}
      >
        <Box
          className="icon-container"
          sx={{
            width: 28,
            height: 28,
            borderRadius: 1.5,
            bgcolor: '#F1F5F9',
            border: '1px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#64748B',
            transition: 'all 0.15s ease',
            flexShrink: 0,
            fontWeight: 700,
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            mt: 0.25,
          }}
        >
          {item.label.charAt(0)}
        </Box>

        <Box>
          <Stack direction="row" alignItems="center" spacing={1} mb={0.25}>
            <Typography sx={{ fontWeight: 600, color: '#0A192F', fontSize: '0.85rem' }}>
              {item.label}
            </Typography>
            {item.tag && (
              <Chip
                size="small"
                label={item.tag}
                sx={{
                  height: 18,
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  bgcolor: 'rgba(37, 99, 235, 0.1)',
                  color: '#2563eb',
                  border: '1px solid rgba(37, 99, 235, 0.2)',
                }}
              />
            )}
          </Stack>
          <Typography sx={{ color: '#475569', fontSize: '0.75rem', lineHeight: 1.4 }}>
            {item.description}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
}

// TIGHTENED MEGA PANEL LAYOUT WITH TWO-COLUMN SUPPORT
function MegaPanel({ menu, onClose }: { menu: MegaMenu; onClose: () => void }) {
  const isSolutions = menu.label === 'Solutions';

  return (
    <Box
      sx={{
        p: 2.5,
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        width: 'max-content',
        maxWidth: 'calc(100vw - 32px)',
        maxHeight: 'calc(100vh - 100px)',
        overflowY: 'auto',
        '&::-webkit-scrollbar': { width: '6px' },
        '&::-webkit-scrollbar-track': { background: 'transparent' },
        '&::-webkit-scrollbar-thumb': { background: '#CBD5E1', borderRadius: '10px' },
        '&::-webkit-scrollbar-thumb:hover': { background: '#94A3B8' },
      }}
    >
      <Box sx={{ display: 'flex', gap: 3 }}>
        {menu.sections.map((section, index) => (
          <React.Fragment key={section.title}>
            <Box sx={{ width: 280 }}>
              <Typography
                sx={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: '#64748B',
                  mb: 1.5,
                  ml: 1,
                  textTransform: 'uppercase',
                }}
              >
                {section.title}
              </Typography>
              <Stack spacing={0}>
                {section.items.map((item) => (
                  <MenuItem key={item.label} item={item} onClose={onClose} />
                ))}
              </Stack>
            </Box>

            {/* Vertical Divider Line between columns */}
            {index < menu.sections.length - 1 && (
              <Box sx={{ width: '1px', bgcolor: '#E2E8F0', my: 1 }} />
            )}
          </React.Fragment>
        ))}
      </Box>

      {/* Footer link for Solutions menu */}
      {isSolutions && (
        <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid #E2E8F0' }}>
          <Link href={getMainUrl('/solutions/industries')} onClick={onClose} style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#2563eb' }}>
            <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, '&:hover': { color: '#1d4ed8' } }}>View All Industries</Typography>
            <ArrowForwardIcon sx={{ fontSize: 16 }} />
          </Link>
        </Box>
      )}
    </Box>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = React.useState<OpenState>({ anchorEl: null, label: null });

  const activeMenu = React.useMemo(() => {
    const found = headerNav.find((x) => x.type === 'mega' && x.menu.label === open.label);
    return found && found.type === 'mega' ? found.menu : null;
  }, [open.label]);

  const handleOpen = (label: string) => (e: React.MouseEvent<HTMLElement>) => {
    setOpen({ anchorEl: e.currentTarget, label });
  };

  const handleClose = () => setOpen({ anchorEl: null, label: null });

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid',
        borderColor: '#E2E8F0',
      }}
    >
      <Container>
        <Toolbar disableGutters sx={{ height: 72, gap: 4 }}>
          {/* Brand */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link href={brand.homeUrl} style={{ textDecoration: 'none' }}>
              <img src="/cerulea-logo-navbar.svg" alt="Cerulea" style={{ height: 62, width: 'auto', display: 'block' }} />
            </Link>
          </Box>

          {/* Desktop nav - ALIGNED CENTER */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {headerNav.map((item) => {
              if (item.type === 'link') {
                return (
                  <Link key={item.href} href={item.href} style={{ textDecoration: 'none', display: 'flex' }} onClick={() => track.navClick(item.label, item.href)}>
                    <Button sx={{ color: '#475569', fontSize: '0.85rem', fontWeight: 600, minWidth: 'auto', px: 1.5, '&:hover': { color: '#0A192F', bgcolor: 'transparent' } }}>
                      {item.label}
                    </Button>
                  </Link>
                );
              }

              return (
                <Button
                  key={item.menu.label}
                  onMouseEnter={handleOpen(item.menu.label)}
                  onClick={handleOpen(item.menu.label)}
                  endIcon={
                    <motion.div animate={{ rotate: open.label === item.menu.label ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <KeyboardArrowDownIcon sx={{ fontSize: '1rem', opacity: 0.7 }} />
                    </motion.div>
                  }
                  sx={{
                    color: open.label === item.menu.label ? '#0A192F' : '#475569',
                    bgcolor: open.label === item.menu.label ? '#F1F5F9' : 'transparent',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    minWidth: 'auto',
                    px: 1.5,
                    '&:hover': { color: '#0A192F', bgcolor: '#F1F5F9' },
                  }}
                >
                  {item.menu.label}
                </Button>
              );
            })}
          </Box>

          {/* Right CTAs */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1.5, alignItems: 'center' }}>
            <Link href={getMainUrl('/company/contact')} style={{ textDecoration: 'none' }} onClick={() => track.ctaClick('Contact Us', '/company/contact', 'header')}>
              <Button variant="contained" sx={{ bgcolor: '#0A192F', color: '#FFFFFF', fontWeight: 700, fontSize: '0.8rem', px: 2, py: 0.75, '&:hover': { bgcolor: '#1E2B4D' } }}>
                Contact Us
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>

      {/* Modern Popover Menu */}
      <Popover
        open={Boolean(open.anchorEl)}
        anchorEl={open.anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        disableScrollLock
        slotProps={{
          paper: {
            onMouseLeave: handleClose,
            sx: {
              mt: 1,
              bgcolor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.1)',
              borderRadius: 3,
              overflow: 'hidden',
            },
          },
        }}
      >
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            >
              <MegaPanel menu={activeMenu} onClose={handleClose} />
            </motion.div>
          )}
        </AnimatePresence>
      </Popover>
    </AppBar>
  );
}