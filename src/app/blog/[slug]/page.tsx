'use client';

import * as React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Box, Container, Typography, Button, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { blogIndex } from '@/content/siteContent';
import { Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

// ----------------------------------------------------------------------
// MOCK CONTENT RENDERER
// Serves beautifully formatted typography based on the slug.
// ----------------------------------------------------------------------

function ArticleContent({ slug }: { slug: string }) {
  if (slug === 'what-is-cerulea') {
    return (
      <Box sx={{ color: '#334155', fontSize: '1.125rem', lineHeight: 1.85 }}>
        <Typography sx={{ fontSize: '1.75rem', fontWeight: 800, color: '#0A192F', mt: 6, mb: 3, letterSpacing: '-0.02em' }}>
          The Infrastructure Gap
        </Typography>
        <Typography sx={{ mb: 3 }}>
          Blockchain development has historically been a fragmented engineering exercise. To deploy a production system, teams must coordinate runtime compilation, validator configuration, cloud infrastructure provisioning, and governance wiring. Each of these layers requires specific expertise and dedicated tooling.
        </Typography>
        <Typography sx={{ mb: 3 }}>
          The result is that infrastructure becomes a bottleneck. Organizations spend months building the foundation before they can even begin designing their actual business applications.
        </Typography>
        
        <Box sx={{ my: 6, p: { xs: 3, md: 5 }, bgcolor: '#F8FAFC', borderLeft: '4px solid #2563eb', borderRadius: '0 12px 12px 0' }}>
          <Typography sx={{ fontSize: '1.25rem', fontWeight: 600, color: '#0A192F', fontStyle: 'italic', lineHeight: 1.6 }}>
            "The barrier to deploying blockchain systems has never been the idea. It has always been the execution."
          </Typography>
        </Box>

        <Typography sx={{ fontSize: '1.75rem', fontWeight: 800, color: '#0A192F', mt: 8, mb: 3, letterSpacing: '-0.02em' }}>
          What Cerulea Is
        </Typography>
        <Typography sx={{ mb: 3 }}>
          Cerulea is a fully no-code blockchain infrastructure platform. It restructures blockchain architecture into a controlled configuration framework. Organizations and developers design, deploy, and operate complete public or private blockchain systems through structured configuration alone. No code is written at any stage.
        </Typography>
        <Typography sx={{ mb: 3 }}>
          When a deployment is triggered, Cerulea generates and provisions a functioning blockchain network, validator initialization logic, smart contract execution capabilities, and monitoring surfaces.
        </Typography>

        <Typography sx={{ fontSize: '1.75rem', fontWeight: 800, color: '#0A192F', mt: 8, mb: 3, letterSpacing: '-0.02em' }}>
          What Cerulea Is Not
        </Typography>
        <Typography sx={{ mb: 3 }}>
          Cerulea is purpose-built for the infrastructure layer. It is not a smart contract IDE, a token launchpad, a consumer DeFi application, or a general SaaS host. It is the execution and governance engine that those applications run on top of.
        </Typography>
      </Box>
    );
  }

  if (slug === 'public-vs-private') {
    return (
      <Box sx={{ color: '#334155', fontSize: '1.125rem', lineHeight: 1.85 }}>
        <Typography sx={{ fontSize: '1.75rem', fontWeight: 800, color: '#0A192F', mt: 6, mb: 3, letterSpacing: '-0.02em' }}>
          An Operational Decision
        </Typography>
        <Typography sx={{ mb: 3 }}>
          The first decision inside Cerulea Studio defines the architectural topology of the system. This choice determines validator structure, governance mechanics, infrastructure ownership, and operational control boundaries. It is an operational decision, not just a technical one.
        </Typography>
        
        <Box sx={{ my: 6, p: { xs: 3, md: 5 }, bgcolor: '#F8FAFC', borderLeft: '4px solid #10b981', borderRadius: '0 12px 12px 0' }}>
          <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.1em', mb: 1 }}>
            Public L1 Model
          </Typography>
          <Typography sx={{ fontSize: '1.1rem', color: '#0A192F', lineHeight: 1.6 }}>
            Designed for open ecosystems. Choose this model if your system requires permissionless participation and community-driven governance. Infrastructure is operated by distributed network participants.
          </Typography>
        </Box>

        <Typography sx={{ mb: 3 }}>
          Public deployments lower your direct infrastructure costs but increase the coordination overhead required for governance decisions.
        </Typography>

        <Box sx={{ my: 6, p: { xs: 3, md: 5 }, bgcolor: '#F8FAFC', borderLeft: '4px solid #7c3aed', borderRadius: '0 12px 12px 0' }}>
          <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#7c3aed', textTransform: 'uppercase', letterSpacing: '0.1em', mb: 1 }}>
            Private Chain Model
          </Typography>
          <Typography sx={{ fontSize: '1.1rem', color: '#0A192F', lineHeight: 1.6 }}>
            Designed for sovereign environments. Choose this model if access must be permissioned and the organization must own the validator infrastructure. Standard for deployments facing strict compliance requirements.
          </Typography>
        </Box>

        <Typography sx={{ mb: 3 }}>
          In a Private Chain, governance authority remains inside the organization. While this model increases infrastructure responsibility, it grants the deploying organization absolute operational control and data sovereignty.
        </Typography>
      </Box>
    );
  }

  if (slug === 'no-code-to-runtime') {
    return (
      <Box sx={{ color: '#334155', fontSize: '1.125rem', lineHeight: 1.85 }}>
        <Typography sx={{ fontSize: '1.75rem', fontWeight: 800, color: '#0A192F', mt: 6, mb: 3, letterSpacing: '-0.02em' }}>
          The Illusion of Code
        </Typography>
        <Typography sx={{ mb: 3 }}>
          Most platforms that claim to simplify blockchain development merely wrap complex CLI tools in a graphical interface. Under the hood, they still generate fragile boilerplate code that a developer must eventually maintain, compile, and debug. Cerulea rejects this approach entirely.
        </Typography>
        
        <Typography sx={{ fontSize: '1.75rem', fontWeight: 800, color: '#0A192F', mt: 8, mb: 3, letterSpacing: '-0.02em' }}>
          Determinism Through Configuration
        </Typography>
        <Typography sx={{ mb: 3 }}>
          Cerulea operates on pure determinism. Every system produced by the platform is the result of explicit configuration rather than hidden automation. There are no emergent deployments and no invisible defaults influencing runtime behavior. What you configure in Cerulea Studio is exactly what runs in production.
        </Typography>
        
        <Box sx={{ my: 6, p: { xs: 3, md: 5 }, bgcolor: '#F8FAFC', borderLeft: '4px solid #f59e0b', borderRadius: '0 12px 12px 0' }}>
          <Typography sx={{ fontSize: '1.25rem', fontWeight: 600, color: '#0A192F', fontStyle: 'italic', lineHeight: 1.6 }}>
            "By removing the human engineering step between design and deployment, Cerulea eliminates syntax errors, compilation failures, and the need for external security audits."
          </Typography>
        </Box>

        <Typography sx={{ fontSize: '1.75rem', fontWeight: 800, color: '#0A192F', mt: 8, mb: 3, letterSpacing: '-0.02em' }}>
          The Compilation Engine
        </Typography>
        <Typography sx={{ mb: 3 }}>
          When a user finalizes their configuration and presses deploy, the Cerulea engine translates those visual models directly into pre-audited, battle-tested WebAssembly (WASM) binaries. These binaries are injected directly into the genesis state of the new blockchain.
        </Typography>
      </Box>
    );
  }

  // Fallback for any other valid slug
  return (
    <Box sx={{ color: '#334155', fontSize: '1.125rem', lineHeight: 1.85, mt: 6 }}>
      <Typography sx={{ mb: 3 }}>
        This is a detailed technical log regarding the architecture and deployment of {slug}. The content for this entry is currently being compiled by the engineering team.
      </Typography>
    </Box>
  );
}

// ----------------------------------------------------------------------
// MAIN PAGE COMPONENT
// ----------------------------------------------------------------------

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Safe unwrapping for Next.js 14/15 compatibility
  const resolvedParams = React.use(params as any) as { slug: string };
  const { slug } = resolvedParams;

  // Find the post metadata from the siteContent array
  const post = blogIndex.find((p) => p.slug === slug);

  // If the slug doesn't exist in our array, throw a 404
  if (!post) {
    notFound();
  }

  return (
    <Box sx={{ bgcolor: '#FFFFFF', minHeight: '100vh', pb: 16 }}>
      
      {/* 1. DARK EDITORIAL HERO */}
      <Box sx={{ 
        pt: { xs: 16, md: 24 }, 
        pb: { xs: 12, md: 16 }, 
        bgcolor: '#0A192F', 
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle grid background */}
        <Box sx={{
          position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none',
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }} />

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            
            <Link href="/blog" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '3rem' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#94A3B8', '&:hover': { color: '#60A5FA' }, transition: 'color 0.2s' }}>
                <ArrowBackIcon sx={{ fontSize: 18 }} />
                <Typography sx={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Back to Log
                </Typography>
              </Box>
            </Link>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <Typography sx={{ color: '#60A5FA', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Platform Architecture
              </Typography>
              <Typography sx={{ color: '#334155' }}>•</Typography>
              <Typography sx={{ color: '#94A3B8', fontSize: '0.85rem', fontWeight: 500 }}>
                February 2026
              </Typography>
            </Box>

            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '2.5rem', md: '3.5rem' }, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#FFFFFF', mb: 4 }}>
              {post.title}
            </Typography>

            <Typography sx={{ color: '#94A3B8', fontSize: { xs: '1.1rem', md: '1.25rem' }, lineHeight: 1.6, fontWeight: 400, borderLeft: '2px solid #60A5FA', pl: 3 }}>
              {post.summary}
            </Typography>

          </motion.div>
        </Container>
      </Box>

      {/* 2. ARTICLE BODY */}
      <Container maxWidth="md" sx={{ mt: 2 }}>
        <motion.div initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.2, duration: 0.8 } } }}>
          
          <ArticleContent slug={post.slug} />

          <Divider sx={{ my: 10, borderColor: '#E2E8F0' }} />

          {/* 3. ENGINEERED FOOTER CTA */}
          <Box sx={{ 
            textAlign: 'center', 
            p: { xs: 5, md: 8 }, 
            bgcolor: '#0A192F', 
            borderRadius: 4, 
            position: 'relative',
            overflow: 'hidden'
          }}>
            <Box sx={{ position: 'absolute', top: -100, right: -100, width: 300, height: 300, background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
            
            <Typography variant="h3" sx={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF', mb: 2, letterSpacing: '-0.02em', position: 'relative', zIndex: 1 }}>
              Bypass the engineering bottleneck.
            </Typography>
            <Typography sx={{ color: '#94A3B8', mb: 5, maxWidth: 500, mx: 'auto', fontSize: '1.1rem', position: 'relative', zIndex: 1 }}>
              Design, configure, and deploy your sovereign blockchain architecture today using Cerulea Studio.
            </Typography>
            <Link href="/company/contact" style={{ textDecoration: 'none', position: 'relative', zIndex: 1 }}>
              <Button 
                variant="contained" 
                endIcon={<ArrowForwardIcon />} 
                sx={{ 
                  bgcolor: '#2563eb', color: '#FFFFFF', px: 4, py: 1.5, fontSize: '0.95rem', fontWeight: 700, borderRadius: 2,
                  boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
                  '&:hover': { bgcolor: '#1d4ed8', transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(37, 99, 235, 0.4)' },
                  transition: 'all 0.2s'
                }}
              >
                Deploy Infrastructure
              </Button>
            </Link>
          </Box>

        </motion.div>
      </Container>
    </Box>
  );
}