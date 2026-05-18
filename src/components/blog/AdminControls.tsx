'use client';

import { useEffect, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase';
import type { Session } from '@supabase/supabase-js';

const ALLOWED_EMAILS = (process.env.NEXT_PUBLIC_ADMIN_EMAILS ?? '')
  .split(',')
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

type Props = {
  postSlug?: string;
  showNewPostButton?: boolean;
};

export default function AdminControls({ postSlug, showNewPostButton }: Props) {
  const supabase = createClient();
  const router = useRouter();
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  const isAdmin = session?.user?.email
    ? ALLOWED_EMAILS.includes(session.user.email.toLowerCase())
    : false;

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/api/auth/callback?next=${window.location.pathname}` },
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    router.refresh();
  };

  const handleDelete = async () => {
    if (!postSlug) return;
    if (!confirm('Delete this post? This cannot be undone.')) return;
    startTransition(async () => {
      const { error } = await supabase.from('blog_posts').delete().eq('slug', postSlug);
      if (error) { alert('Delete failed: ' + error.message); return; }
      router.push('/blog');
      router.refresh();
    });
  };

  if (loading) return null;

  return (
    <div style={{
      position: 'fixed', bottom: 24, right: 24, zIndex: 1000,
      display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8,
    }}>
      {!session && (
        <button onClick={handleLogin} style={btnStyle('#0A192F', '#fff')}>
          Login
        </button>
      )}

      {session && !isAdmin && (
        <div style={{ background: '#fff1f2', border: '1px solid #fecdd3', borderRadius: 8, padding: '10px 16px', fontSize: 13, color: '#be123c', maxWidth: 220, textAlign: 'center' }}>
          <div style={{ fontWeight: 700, marginBottom: 4 }}>Access denied</div>
          <div style={{ fontSize: 12, marginBottom: 8 }}>{session.user.email} is not an admin.</div>
          <button onClick={handleLogout} style={{ ...btnStyle('#be123c', '#fff'), fontSize: 12, padding: '6px 12px' }}>Sign out</button>
        </div>
      )}

      {isAdmin && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            {showNewPostButton && (
              <button onClick={() => router.push('/blog/manage')} style={btnStyle('#0f172a', '#fff')}>
                ⚙ Manage
              </button>
            )}
            {showNewPostButton && (
              <button onClick={() => router.push('/blog/new')} style={btnStyle('#2563eb', '#fff')}>
                + New post
              </button>
            )}
            {postSlug && (
              <>
                <button onClick={() => router.push(`/blog/edit/${postSlug}`)} style={btnStyle('#0A192F', '#fff')}>
                  ✏ Edit post
                </button>
                <button onClick={handleDelete} disabled={isPending} style={btnStyle('#dc2626', '#fff')}>
                  {isPending ? 'Deleting…' : '✕ Delete'}
                </button>
              </>
            )}
            <button onClick={handleLogout} style={btnStyle('#64748B', '#fff')}>
              Sign out
            </button>
          </div>
          <div style={{ fontSize: 11, color: '#94A3B8', textAlign: 'right' }}>
            Admin: {session?.user?.email}
          </div>
        </div>
      )}
    </div>
  );
}

function btnStyle(bg: string, color: string = '#fff'): React.CSSProperties {
  return {
    background: bg, color, border: 'none', borderRadius: 8,
    padding: '10px 18px', fontSize: 13, fontWeight: 700, cursor: 'pointer',
    boxShadow: '0 4px 14px rgba(0,0,0,0.15)', whiteSpace: 'nowrap',
  };
}
