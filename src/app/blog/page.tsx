import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import { createServerSupabaseClient } from '@/lib/supabase-server';
import { isAdmin } from '@/lib/auth';
import AdminControls from '@/components/blog/AdminControls';
import BlogFeed from '@/components/blog/BlogFeed';
import type { BlogPost } from '@/lib/supabase';

export const revalidate = 0;

export default async function BlogIndexPage() {
  const supabase = await createServerSupabaseClient();
  const admin = await isAdmin();

  const query = supabase.from('blog_posts').select('*').order('created_at', { ascending: false });
  if (!admin) query.eq('published', true);

  const { data: posts } = await query;
  const blogPosts: BlogPost[] = (posts ?? []) as BlogPost[];

  return (
    <Box sx={{ bgcolor: '#FAFAFA', minHeight: '100vh', pb: 16 }}>

      {/* HERO */}
      <Box sx={{
        pt: { xs: 16, md: 24 }, pb: { xs: 10, md: 16 },
        bgcolor: '#0A192F', position: 'relative', overflow: 'hidden',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <Box sx={{
          position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none',
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }} />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, mb: 4 }}>
            <EditNoteOutlinedIcon sx={{ color: '#60A5FA', fontSize: 22 }} />
            <Typography sx={{ color: '#60A5FA', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
              Cerulea Blog
            </Typography>
          </Box>
          <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '3rem', md: '4.5rem' }, lineHeight: 1.05, letterSpacing: '-0.03em', mb: 3, color: '#FFFFFF' }}>
            Ideas, Research &<br />Perspectives.
          </Typography>
          <Typography sx={{ color: '#94A3B8', fontSize: { xs: '1.1rem', md: '1.25rem' }, lineHeight: 1.7, fontWeight: 400, maxWidth: 580 }}>
            Technical writing, strategic thinking, and notes from the team building Cerulea&apos;s infrastructure platform.
          </Typography>
        </Container>
      </Box>

      {/* FEED — handles featured hero, category filter, and post list */}
      <BlogFeed posts={blogPosts} admin={admin} />

      {/* Floating admin controls */}
      <AdminControls showNewPostButton />
    </Box>
  );
}
