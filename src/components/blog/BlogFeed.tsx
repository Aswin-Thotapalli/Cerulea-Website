'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Box, Container, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import type { BlogPost } from '@/lib/supabase';

type Props = {
  posts: BlogPost[];
  admin: boolean;
};

export default function BlogFeed({ posts, admin }: Props) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = posts.map(p => p.category).filter((c): c is string => Boolean(c));
    return ['All', ...Array.from(new Set(cats))];
  }, [posts]);

  const featured = useMemo(() => posts.find(p => p.featured && (p.published || admin)), [posts, admin]);

  const filtered = useMemo(() => {
    return posts.filter(p => {
      if (activeCategory !== 'All' && p.category !== activeCategory) return false;
      return true;
    });
  }, [posts, activeCategory]);

  const nonFeaturedFiltered = featured && activeCategory === 'All'
    ? filtered.filter(p => p.slug !== featured.slug)
    : filtered;

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '200px 1fr' },
        gap: { xs: 4, md: 10 },
        alignItems: 'start',
      }}>

        {/* ── Sidebar: Topics ── */}
        <Box sx={{ position: { md: 'sticky' }, top: { md: 96 } }}>
          <Typography sx={{
            fontSize: 10, fontWeight: 800, color: '#94A3B8',
            letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2, px: 1,
          }}>
            Topics
          </Typography>

          {/* Mobile: horizontal scroll */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1, overflowX: 'auto', pb: 1, scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                padding: '6px 14px', borderRadius: 20, border: '1px solid',
                fontSize: 12, fontWeight: 600, cursor: 'pointer', transition: 'all 0.15s',
                whiteSpace: 'nowrap', flexShrink: 0,
                borderColor: activeCategory === cat ? '#2563eb' : '#E2E8F0',
                background: activeCategory === cat ? '#EFF6FF' : '#fff',
                color: activeCategory === cat ? '#1D4ED8' : '#64748B',
              }}>
                {cat}
              </button>
            ))}
          </Box>

          {/* Desktop: vertical list */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', gap: 0.5 }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                padding: '9px 12px', borderRadius: 8, border: 'none',
                fontSize: 13, fontWeight: activeCategory === cat ? 700 : 500,
                cursor: 'pointer', transition: 'all 0.15s',
                textAlign: 'left', background: activeCategory === cat ? '#EFF6FF' : 'transparent',
                color: activeCategory === cat ? '#1D4ED8' : '#475569',
              }}>
                {cat}
              </button>
            ))}
          </Box>
        </Box>

        {/* ── Main feed ── */}
        <Box>

          {/* Featured hero card */}
          {featured && activeCategory === 'All' && (
            <Link href={`/blog/${featured.slug}`} style={{ textDecoration: 'none', display: 'block', marginBottom: 24 }}>
              <Box sx={{
                background: '#fff', borderRadius: 3, border: '1px solid #E2E8F0',
                boxShadow: '0 4px 24px -4px rgba(0,0,0,0.07)', overflow: 'hidden',
                display: { xs: 'block', sm: 'grid' },
                gridTemplateColumns: featured.cover_image_url ? '1fr 1fr' : '1fr',
                transition: 'box-shadow 0.2s, transform 0.2s',
                '&:hover': { boxShadow: '0 12px 40px -8px rgba(0,0,0,0.12)', transform: 'translateY(-2px)' },
              }}>
                {featured.cover_image_url && (
                  <Box component="img" src={featured.cover_image_url} alt={featured.title}
                    sx={{ width: '100%', height: { xs: 200, sm: '100%' }, minHeight: { sm: 300 }, objectFit: 'cover', display: 'block' }} />
                )}
                <Box sx={{ p: { xs: 4, md: 5 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Box sx={{ display: 'flex', gap: 1.5, mb: 2.5, flexWrap: 'wrap', alignItems: 'center' }}>
                    <span style={{ background: '#FEF3C7', color: '#92400E', fontSize: 10, fontWeight: 800, padding: '3px 10px', borderRadius: 4, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      Featured
                    </span>
                    {featured.category && (
                      <span style={{ background: '#EFF6FF', color: '#1D4ED8', fontSize: 10, fontWeight: 800, padding: '3px 10px', borderRadius: 4, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        {featured.category}
                      </span>
                    )}
                    {!featured.published && admin && (
                      <span style={{ background: '#FECACA', color: '#991B1B', fontSize: 10, fontWeight: 800, padding: '3px 10px', borderRadius: 4 }}>DRAFT</span>
                    )}
                  </Box>

                  <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: '1.5rem', md: '1.85rem' }, color: '#0A192F', lineHeight: 1.2, mb: 2, letterSpacing: '-0.02em' }}>
                    {featured.title}
                  </Typography>

                  <Typography sx={{ color: '#475569', lineHeight: 1.7, mb: 3, fontSize: 14, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {featured.summary}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                    {featured.reading_time && (
                      <Typography sx={{ fontSize: 12, color: '#94A3B8' }}>{featured.reading_time} min read</Typography>
                    )}
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, color: '#2563eb', fontWeight: 700, fontSize: 13 }}>
                      Read article <ArrowForwardIcon sx={{ fontSize: 14 }} />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Link>
          )}

          {/* Post list */}
          {nonFeaturedFiltered.length === 0 ? (
            <Box sx={{ bgcolor: '#fff', borderRadius: 3, border: '1px solid #E2E8F0', p: 8, textAlign: 'center' }}>
              <Typography sx={{ color: '#94A3B8' }}>
                {filtered.length > 0
                  ? 'The featured post is the only one in this category.'
                  : admin ? 'No posts yet. Click "+ New post" to write your first.' : 'No posts published yet.'}
              </Typography>
            </Box>
          ) : (
            <Box sx={{ bgcolor: '#FFFFFF', borderRadius: 3, border: '1px solid #E2E8F0', boxShadow: '0 4px 24px -4px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
              {nonFeaturedFiltered.map((post, index) => {
                const isLast = index === nonFeaturedFiltered.length - 1;
                const publishedDate = post.published_at
                  ? new Date(post.published_at).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })
                  : null;

                return (
                  <Link href={`/blog/${post.slug}`} key={post.slug} style={{ textDecoration: 'none', display: 'block' }}>
                    <Box sx={{
                      p: { xs: 3, md: 4 },
                      borderBottom: isLast ? 'none' : '1px solid #F1F5F9',
                      transition: 'all 0.2s ease', position: 'relative', overflow: 'hidden',
                      display: 'flex', gap: 3, alignItems: 'flex-start',
                      '&:hover': {
                        bgcolor: '#F8FAFC',
                        '& .arrow-icon': { transform: 'translateX(4px)', color: '#2563eb' },
                        '& .hover-accent': { opacity: 1, transform: 'scaleY(1)' },
                      },
                    }}>
                      <Box className="hover-accent" sx={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, bgcolor: '#2563eb', opacity: 0, transform: 'scaleY(0)', transformOrigin: 'center', transition: 'all 0.2s ease' }} />

                      {/* Text */}
                      <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                        <Box sx={{ display: 'flex', gap: 1.5, mb: 1.5, alignItems: 'center', flexWrap: 'wrap' }}>
                          {post.category && (
                            <span style={{ background: '#EFF6FF', color: '#1D4ED8', fontSize: 10, fontWeight: 800, padding: '2px 8px', borderRadius: 4, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                              {post.category}
                            </span>
                          )}
                          {publishedDate && (
                            <Typography sx={{ fontSize: 12, color: '#94A3B8' }}>{publishedDate}</Typography>
                          )}
                          {post.reading_time && (
                            <Typography sx={{ fontSize: 12, color: '#94A3B8' }}>{post.reading_time} min read</Typography>
                          )}
                          {!post.published && admin && (
                            <span style={{ background: '#FECACA', color: '#991B1B', fontSize: 10, fontWeight: 800, padding: '2px 8px', borderRadius: 4 }}>DRAFT</span>
                          )}
                        </Box>

                        <Typography variant="h3" sx={{ fontSize: { xs: '1.05rem', md: '1.2rem' }, fontWeight: 800, color: '#0A192F', mb: 1, lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                          {post.title}
                        </Typography>

                        <Typography sx={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.65, mb: (post.tags ?? []).length > 0 ? 1.5 : 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                          {post.summary}
                        </Typography>

                        {(post.tags ?? []).length > 0 && (
                          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                            {(post.tags ?? []).map(tag => (
                              <span key={tag} style={{ background: '#F1F5F9', color: '#64748B', fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 4 }}>
                                {tag}
                              </span>
                            ))}
                          </Box>
                        )}
                      </Box>

                      {/* Thumbnail + arrow */}
                      <Box sx={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2 }}>
                        {post.cover_image_url && (
                          <Box component="img" src={post.cover_image_url} alt={post.title}
                            sx={{ width: 88, height: 64, objectFit: 'cover', borderRadius: 2, display: { xs: 'none', sm: 'block' } }} />
                        )}
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: '50%', bgcolor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                          <ArrowForwardIcon className="arrow-icon" sx={{ fontSize: 15, color: '#94A3B8', transition: 'all 0.2s' }} />
                        </Box>
                      </Box>
                    </Box>
                  </Link>
                );
              })}
            </Box>
          )}
        </Box>

      </Box>
    </Container>
  );
}
