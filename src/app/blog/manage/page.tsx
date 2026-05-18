'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase';
import type { BlogPost } from '@/lib/supabase';
import { Box, Container, Typography } from '@mui/material';

const ALLOWED_EMAILS = (process.env.NEXT_PUBLIC_ADMIN_EMAILS ?? '')
  .split(',').map((e) => e.trim().toLowerCase()).filter(Boolean);

type StatusFilter = 'all' | 'published' | 'draft' | 'archived';

function effectiveStatus(p: BlogPost): 'published' | 'draft' | 'archived' {
  if (p.status === 'archived') return 'archived';
  if (p.status === 'published' || p.published) return 'published';
  return 'draft';
}

function StatusBadge({ status }: { status: 'published' | 'draft' | 'archived' }) {
  const map = {
    published: { bg: '#D1FAE5', color: '#065F46', label: 'Published' },
    draft: { bg: '#FEF3C7', color: '#92400E', label: 'Draft' },
    archived: { bg: '#F1F5F9', color: '#64748B', label: 'Archived' },
  };
  const s = map[status];
  return (
    <span style={{ background: s.bg, color: s.color, fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 4, whiteSpace: 'nowrap' }}>
      {s.label}
    </span>
  );
}

export default function ManagePage() {
  const supabase = createClient();
  const router = useRouter();

  const [authorized, setAuthorized] = useState(false);
  const [checking, setChecking] = useState(true);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      const email = session?.user?.email ?? '';
      const ok = ALLOWED_EMAILS.includes(email.toLowerCase());
      setAuthorized(ok);
      setChecking(false);
      if (ok) fetchPosts();
    });
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });
    setPosts((data ?? []) as BlogPost[]);
    setLoading(false);
  };

  const handleDelete = async (slug: string) => {
    if (!confirm('Delete this post permanently? This cannot be undone.')) return;
    setDeleting(slug);
    const { error } = await supabase.from('blog_posts').delete().eq('slug', slug);
    if (error) { alert('Delete failed: ' + error.message); setDeleting(null); return; }
    setPosts(prev => prev.filter(p => p.slug !== slug));
    setDeleting(null);
  };

  const filtered = useMemo(() => {
    return posts.filter(p => {
      const matchStatus = statusFilter === 'all' || effectiveStatus(p) === statusFilter;
      const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase());
      return matchStatus && matchSearch;
    });
  }, [posts, search, statusFilter]);

  const stats = useMemo(() => ({
    total: posts.length,
    published: posts.filter(p => effectiveStatus(p) === 'published').length,
    draft: posts.filter(p => effectiveStatus(p) === 'draft').length,
    archived: posts.filter(p => effectiveStatus(p) === 'archived').length,
  }), [posts]);

  if (checking) return null;
  if (!authorized) return (
    <Container maxWidth="sm" sx={{ pt: 20, textAlign: 'center' }}>
      <Typography variant="h5" sx={{ fontWeight: 700, color: '#0A192F', mb: 2 }}>Access Denied</Typography>
      <Typography sx={{ color: '#475569' }}>You don&apos;t have permission to manage posts.</Typography>
    </Container>
  );

  return (
    <Box sx={{ bgcolor: '#FAFAFA', minHeight: '100vh', pb: 16 }}>
      <Container maxWidth="xl" sx={{ pt: { xs: 10, md: 12 } }}>

        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 6, flexWrap: 'wrap', gap: 3 }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#0A192F', letterSpacing: '-0.02em', mb: 0.5 }}>Blog Management</Typography>
            <Typography sx={{ color: '#94A3B8', fontSize: 14 }}>
              <Link href="/blog" style={{ color: '#2563eb', textDecoration: 'none' }}>← Back to blog</Link>
            </Typography>
          </Box>
          <button onClick={() => router.push('/blog/new')} style={btnStyle('#2563eb')}>+ New post</button>
        </Box>

        {/* Stats */}
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, mb: 5 }}>
          {[
            { label: 'Total', value: stats.total, color: '#0A192F', bg: '#F8FAFC' },
            { label: 'Published', value: stats.published, color: '#065F46', bg: '#D1FAE5' },
            { label: 'Draft', value: stats.draft, color: '#92400E', bg: '#FEF3C7' },
            { label: 'Archived', value: stats.archived, color: '#64748B', bg: '#F1F5F9' },
          ].map(s => (
            <Box key={s.label} onClick={() => setStatusFilter(s.label.toLowerCase() as StatusFilter)}
              sx={{ background: s.bg, borderRadius: 2, p: 2.5, cursor: 'pointer', transition: 'transform 0.15s', '&:hover': { transform: 'translateY(-2px)' } }}>
              <Typography sx={{ fontSize: 28, fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.value}</Typography>
              <Typography sx={{ fontSize: 12, fontWeight: 600, color: s.color, mt: 0.5, opacity: 0.7 }}>{s.label}</Typography>
            </Box>
          ))}
        </Box>

        {/* Filters */}
        <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap', alignItems: 'center' }}>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search posts…"
            style={{ padding: '8px 14px', borderRadius: 8, border: '1px solid #E2E8F0', fontSize: 14, outline: 'none', minWidth: 220, fontFamily: 'inherit' }}
          />
          <Box sx={{ display: 'flex', gap: 1 }}>
            {(['all', 'published', 'draft', 'archived'] as StatusFilter[]).map(f => (
              <button key={f} onClick={() => setStatusFilter(f)}
                style={{ padding: '6px 14px', borderRadius: 6, border: '1px solid', fontSize: 13, fontWeight: 600, cursor: 'pointer', transition: 'all 0.15s', textTransform: 'capitalize', borderColor: statusFilter === f ? '#2563eb' : '#E2E8F0', background: statusFilter === f ? '#EFF6FF' : '#fff', color: statusFilter === f ? '#2563eb' : '#64748B' }}>
                {f}
              </button>
            ))}
          </Box>
        </Box>

        {/* Table */}
        <Box sx={{ background: '#fff', borderRadius: 3, border: '1px solid #E2E8F0', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
          {loading ? (
            <Box sx={{ p: 8, textAlign: 'center' }}>
              <Typography sx={{ color: '#94A3B8' }}>Loading…</Typography>
            </Box>
          ) : filtered.length === 0 ? (
            <Box sx={{ p: 8, textAlign: 'center' }}>
              <Typography sx={{ color: '#94A3B8', fontSize: 15 }}>
                {search ? `No posts matching "${search}"` : 'No posts found.'}
              </Typography>
            </Box>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
                  {['Title', 'Status', 'Category', 'Read', 'Date', 'Featured', ''].map(h => (
                    <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: 11, fontWeight: 700, color: '#94A3B8', letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((post, i) => {
                  const status = effectiveStatus(post);
                  const date = post.published_at
                    ? new Date(post.published_at).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })
                    : new Date(post.created_at).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' });
                  return (
                    <tr key={post.slug} style={{ borderBottom: i < filtered.length - 1 ? '1px solid #F1F5F9' : 'none', transition: 'background 0.15s' }}
                      onMouseEnter={e => (e.currentTarget.style.background = '#FAFAFA')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>

                      <td style={{ padding: '14px 16px', maxWidth: 320 }}>
                        <Link href={`/blog/${post.slug}`} target="_blank"
                          style={{ fontWeight: 700, color: '#0A192F', fontSize: 14, textDecoration: 'none', display: 'block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {post.title}
                        </Link>
                        <Typography sx={{ fontSize: 11, color: '#94A3B8', fontFamily: 'monospace', mt: 0.25 }}>/{post.slug}</Typography>
                      </td>

                      <td style={{ padding: '14px 16px' }}>
                        <StatusBadge status={status} />
                      </td>

                      <td style={{ padding: '14px 16px' }}>
                        <Typography sx={{ fontSize: 13, color: '#64748B' }}>{post.category || '—'}</Typography>
                      </td>

                      <td style={{ padding: '14px 16px', whiteSpace: 'nowrap' }}>
                        <Typography sx={{ fontSize: 13, color: '#64748B' }}>{post.reading_time ? `${post.reading_time} min` : '—'}</Typography>
                      </td>

                      <td style={{ padding: '14px 16px', whiteSpace: 'nowrap' }}>
                        <Typography sx={{ fontSize: 13, color: '#64748B' }}>{date}</Typography>
                      </td>

                      <td style={{ padding: '14px 16px', textAlign: 'center' }}>
                        {post.featured && <span style={{ color: '#F59E0B', fontSize: 16 }}>★</span>}
                      </td>

                      <td style={{ padding: '14px 16px' }}>
                        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
                          <button onClick={() => router.push(`/blog/edit/${post.slug}`)}
                            style={{ padding: '5px 12px', borderRadius: 6, border: '1px solid #E2E8F0', background: '#fff', fontSize: 12, fontWeight: 600, cursor: 'pointer', color: '#0A192F' }}>
                            Edit
                          </button>
                          <button onClick={() => handleDelete(post.slug)} disabled={deleting === post.slug}
                            style={{ padding: '5px 12px', borderRadius: 6, border: '1px solid #FECDD3', background: '#FFF1F2', fontSize: 12, fontWeight: 600, cursor: 'pointer', color: '#BE123C' }}>
                            {deleting === post.slug ? '…' : 'Delete'}
                          </button>
                        </Box>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </Box>

        {filtered.length > 0 && (
          <Typography sx={{ fontSize: 12, color: '#94A3B8', mt: 2, textAlign: 'right' }}>
            Showing {filtered.length} of {posts.length} posts
          </Typography>
        )}
      </Container>
    </Box>
  );
}

function btnStyle(bg: string, color = '#fff'): React.CSSProperties {
  return { background: bg, color, border: 'none', borderRadius: 8, padding: '10px 18px', fontSize: 13, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' };
}
