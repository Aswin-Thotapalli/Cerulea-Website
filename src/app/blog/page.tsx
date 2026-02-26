'use client';

import * as React from 'react';
import Link from 'next/link';
import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import { blogIndex } from '@/content/siteContent';
import { Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function BlogIndexPage() {
  return (
    <Box sx={{ bgcolor: '#FAFAFA', minHeight: '100vh', pb: 16 }}>
      
      {/* 1. EDITORIAL HERO SECTION */}
      <Box sx={{ 
        pt: { xs: 16, md: 24 }, 
        pb: { xs: 12, md: 20 }, 
        bgcolor: '#0A192F', 
        position: 'relative', 
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        {/* Subtle grid background */}
        <Box sx={{
          position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none',
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }} />

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, mb: 4 }}>
              <TerminalOutlinedIcon sx={{ color: '#60A5FA', fontSize: 20 }} />
              <Typography sx={{ color: '#60A5FA', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                Engineering Log
              </Typography>
            </Box>
            
            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '3rem', md: '4.5rem' }, lineHeight: 1.05, letterSpacing: '-0.03em', mb: 3, color: '#FFFFFF' }}>
              Architecture &<br />Infrastructure Notes.
            </Typography>
            
            <Typography sx={{ color: '#94A3B8', fontSize: { xs: '1.1rem', md: '1.25rem' }, lineHeight: 1.7, fontWeight: 400, maxWidth: 600 }}>
              Deep dives and structural frameworks detailing how Cerulea translates architectural intent into deployable blockchain networks.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* 2. THE JOURNAL LIST */}
      <Container maxWidth="md" sx={{ mt: -6, position: 'relative', zIndex: 2 }}>
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <Box sx={{ 
            bgcolor: '#FFFFFF', 
            borderRadius: 4, 
            border: '1px solid #E2E8F0',
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)',
            overflow: 'hidden'
          }}>
            {blogIndex.map((post, index) => {
              const isLast = index === blogIndex.length - 1;
              
              return (
                <motion.div variants={fadeUp} key={post.slug}>
                  <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                    <Box sx={{ 
                      p: { xs: 4, md: 5 },
                      borderBottom: isLast ? 'none' : '1px solid #E2E8F0',
                      transition: 'all 0.2s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        bgcolor: '#F8FAFC',
                        '& .arrow-icon': { transform: 'translateX(4px)', color: '#2563eb' },
                        '& .hover-accent': { opacity: 1, transform: 'scaleY(1)' }
                      }
                    }}>
                      
                      {/* Animated left border accent on hover */}
                      <Box className="hover-accent" sx={{ 
                        position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, 
                        bgcolor: '#2563eb', opacity: 0, transform: 'scaleY(0)', transformOrigin: 'center', transition: 'all 0.2s ease' 
                      }} />

                      <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 6 }} alignItems={{ xs: 'flex-start', md: 'center' }}>
                        
                        {/* Meta Column */}
                        <Box sx={{ width: { xs: '100%', md: '140px' }, flexShrink: 0 }}>
                          <Typography sx={{ color: '#94A3B8', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', mb: 0.5 }}>
                            Volume {index + 1}
                          </Typography>
                          <Typography sx={{ color: '#2563eb', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                            Platform
                          </Typography>
                        </Box>

                        {/* Content Column */}
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography variant="h3" sx={{ fontSize: '1.4rem', fontWeight: 800, color: '#0A192F', mb: 1.5, lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                            {post.title}
                          </Typography>
                          <Typography sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.65 }}>
                            {post.summary}
                          </Typography>
                        </Box>

                        {/* Action Column */}
                        <Box sx={{ flexShrink: 0, display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: '50%', bgcolor: '#FFFFFF', border: '1px solid #E2E8F0' }}>
                          <ArrowForwardIcon className="arrow-icon" sx={{ fontSize: 18, color: '#94A3B8', transition: 'all 0.2s' }} />
                        </Box>

                      </Stack>
                      
                      {/* Mobile Read More (hidden on desktop) */}
                      <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1, mt: 3 }}>
                        <Typography sx={{ color: '#0A192F', fontWeight: 700, fontSize: '0.85rem' }}>Read Log</Typography>
                        <ArrowForwardIcon className="arrow-icon" sx={{ fontSize: 16, color: '#94A3B8', transition: 'all 0.2s' }} />
                      </Box>

                    </Box>
                  </Link>
                </motion.div>
              );
            })}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}