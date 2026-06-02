import * as React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Box, Container, Typography, Button, Divider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { createServerSupabaseClient } from '@/lib/supabase-server';
import { isAdmin } from '@/lib/auth';
import AdminControls from '@/components/blog/AdminControls';
import BlogRenderer from '@/components/blog/BlogRenderer';
import BlogViewTracker from '@/components/analytics/BlogViewTracker';
import type { Metadata } from 'next';

export const revalidate = 0;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createServerSupabaseClient();
  const { data: post } = await supabase
    .from('blog_posts')
    .select('title, summary, seo_title, seo_description, cover_image_url')
    .eq('slug', slug)
    .single();
  if (!post) return {};
  const title = post.seo_title || `${post.title} | Cerulea Blog`;
  const description = post.seo_description || post.summary;
  return {
    title,
    description,
    openGraph: {
      title: post.seo_title || post.title,
      description,
      ...(post.cover_image_url && { images: [{ url: post.cover_image_url }] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo_title || post.title,
      description,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const supabase = await createServerSupabaseClient();
  const admin = await isAdmin();

  const { data: post } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!post) notFound();
  if (!post.published && !admin) notFound();

  const publishedDate = post.published_at
    ? new Date(post.published_at).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })
    : null;

  const tags: string[] = post.tags ?? [];
  const readingTime: number | null = post.reading_time ?? null;
  const category: string | null = post.category ?? null;

  return (
    <Box sx={{ bgcolor: '#FFFFFF', minHeight: '100vh', pb: 16 }}>

      {/* HERO */}
      <Box sx={{
        pt: { xs: 16, md: 24 }, pb: { xs: 12, md: 16 },
        bgcolor: '#0A192F', borderBottom: '1px solid rgba(255,255,255,0.05)',
        position: 'relative', overflow: 'hidden'
      }}>
        <Box sx={{
          position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none',
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }} />

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Link href="/blog" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '3rem' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#94A3B8', '&:hover': { color: '#60A5FA' }, transition: 'color 0.2s' }}>
              <ArrowBackIcon sx={{ fontSize: 18 }} />
              <Typography sx={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Back to Log
              </Typography>
            </Box>
          </Link>

          {/* Meta row */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, flexWrap: 'wrap' }}>
            {category && (
              <Typography sx={{ color: '#60A5FA', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {category}
              </Typography>
            )}
            {publishedDate && (
              <>
                {category && <Typography sx={{ color: '#334155' }}>•</Typography>}
                <Typography sx={{ color: '#94A3B8', fontSize: '0.85rem', fontWeight: 500 }}>
                  {publishedDate}
                </Typography>
              </>
            )}
            {readingTime && (
              <>
                <Typography sx={{ color: '#334155' }}>•</Typography>
                <Typography sx={{ color: '#94A3B8', fontSize: '0.85rem', fontWeight: 500 }}>
                  {readingTime} min read
                </Typography>
              </>
            )}
            {!post.published && (
              <Box sx={{ bgcolor: '#f59e0b', color: '#fff', fontSize: '0.7rem', fontWeight: 800, px: 1.5, py: 0.5, borderRadius: 10 }}>DRAFT</Box>
            )}
          </Box>

          <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '2.5rem', md: '3.5rem' }, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#FFFFFF', mb: 4 }}>
            {post.title}
          </Typography>

          <Typography sx={{ color: '#94A3B8', fontSize: { xs: '1.1rem', md: '1.25rem' }, lineHeight: 1.6, fontWeight: 400, borderLeft: '2px solid #60A5FA', pl: 3 }}>
            {post.summary}
          </Typography>

          {/* Tags */}
          {tags.length > 0 && (
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 4 }}>
              {tags.map(tag => (
                <span key={tag} style={{ background: 'rgba(255,255,255,0.08)', color: '#94A3B8', fontSize: 12, fontWeight: 600, padding: '4px 12px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.1)' }}>
                  {tag}
                </span>
              ))}
            </Box>
          )}
        </Container>
      </Box>

      {/* COVER IMAGE */}
      {post.cover_image_url && (
        <Container maxWidth="md" sx={{ mt: 6 }}>
          <Box component="img" src={post.cover_image_url} alt={post.title}
            sx={{ width: '100%', borderRadius: 3, objectFit: 'cover', maxHeight: 480 }} />
        </Container>
      )}

      {/* ARTICLE BODY */}
      <Container maxWidth="md" sx={{ mt: post.cover_image_url ? 4 : 2 }}>
        <BlogRenderer content={post.content as Record<string, unknown>} />

        <Divider sx={{ my: 10, borderColor: '#E2E8F0' }} />

        {/* FOOTER CTA */}
        <Box sx={{ textAlign: 'center', p: { xs: 5, md: 8 }, bgcolor: '#0A192F', borderRadius: 4, position: 'relative', overflow: 'hidden' }}>
          <Box sx={{ position: 'absolute', top: -100, right: -100, width: 300, height: 300, background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
          <Typography variant="h3" sx={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF', mb: 2, letterSpacing: '-0.02em', position: 'relative', zIndex: 1 }}>
            Bypass the engineering bottleneck.
          </Typography>
          <Typography sx={{ color: '#94A3B8', mb: 5, maxWidth: 500, mx: 'auto', fontSize: '1.1rem', position: 'relative', zIndex: 1 }}>
            Design, configure, and deploy your sovereign blockchain architecture today using Cerulea Studio.
          </Typography>
          <Link href="/company/contact" style={{ textDecoration: 'none', position: 'relative', zIndex: 1 }}>
            <Button variant="contained" endIcon={<ArrowForwardIcon />} sx={{ bgcolor: '#2563eb', color: '#FFFFFF', px: 4, py: 1.5, fontSize: '0.95rem', fontWeight: 700, borderRadius: 2, boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)', '&:hover': { bgcolor: '#1d4ed8', transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(37, 99, 235, 0.4)' }, transition: 'all 0.2s' }}>
              Deploy Infrastructure
            </Button>
          </Link>
        </Box>
      </Container>

      {/* Track blog post view in PostHog */}
      <BlogViewTracker slug={slug} title={post.title} category={post.category ?? undefined} />

      {/* Floating admin controls */}
      <AdminControls postSlug={slug} />
    </Box>
  );
}
