'use client';

import * as React from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

type Admin = {
  id: string;
  email: string;
  display_name: string | null;
  role: string;
  invited_by: string | null;
  created_at: string;
};

const FONT = 'var(--font-jakarta, system-ui, sans-serif)';
const C = {
  bg: '#F5F5F8',
  surface: '#FFFFFF',
  border: 'rgba(0,0,0,0.08)',
  text: '#111118',
  sub: '#52526A',
  dim: '#8080A0',
  accent: '#5254C8',
  danger: '#dc2626',
};

export default function TeamManagement({ currentUserEmail }: { currentUserEmail: string }) {
  const router = useRouter();
  const [admins, setAdmins] = React.useState<Admin[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');
  const [newEmail, setNewEmail] = React.useState('');
  const [newName, setNewName] = React.useState('');
  const [adding, setAdding] = React.useState(false);
  const [addError, setAddError] = React.useState('');
  const [removing, setRemoving] = React.useState<string | null>(null);
  const [resetting, setResetting] = React.useState<string | null>(null);
  const [resetSent, setResetSent] = React.useState<string | null>(null);

  const fetchAdmins = async () => {
    setLoading(true);
    const res = await fetch('/api/admin/team');
    const json = await res.json();
    if (json.error) setError(json.error);
    else setAdmins(json.admins ?? []);
    setLoading(false);
  };

  React.useEffect(() => { fetchAdmins(); }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmail.trim()) return;
    setAdding(true);
    setAddError('');
    const res = await fetch('/api/admin/team', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: newEmail.trim(), display_name: newName.trim() || null }),
    });
    const json = await res.json();
    if (json.error) {
      setAddError(json.error);
    } else {
      setNewEmail('');
      setNewName('');
      fetchAdmins();
    }
    setAdding(false);
  };

  const handleRemove = async (email: string) => {
    if (!confirm(`Remove ${email} from analytics access? They will need to be re-added to log in.`)) return;
    setRemoving(email);
    const res = await fetch('/api/admin/team', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const json = await res.json();
    if (json.error) alert(json.error);
    else fetchAdmins();
    setRemoving(null);
  };

  const handleResetPassword = async (email: string) => {
    setResetting(email);
    const res = await fetch('/api/admin/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const json = await res.json();
    if (json.error) alert('Failed to send reset email: ' + json.error);
    else setResetSent(email);
    setResetting(null);
    setTimeout(() => setResetSent(null), 4000);
  };

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.replace('/analytics/login');
  };

  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.text, fontFamily: FONT }}>
      {/* Topbar */}
      <div style={{ position: 'sticky', top: 64, zIndex: 40, height: 52, backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', background: 'rgba(245,245,248,0.92)', borderBottom: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <Link href="/analytics" style={{ color: C.dim, fontSize: 13, textDecoration: 'none', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 6 }}>
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M10 13L5 8l5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Analytics
          </Link>
          <div style={{ width: 1, height: 16, background: C.border }} />
          <span style={{ fontSize: 14, fontWeight: 700, color: C.text, letterSpacing: '-0.01em' }}>Team Access</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 12, color: C.dim }}>{currentUserEmail}</span>
          <button onClick={handleSignOut} style={{ padding: '5px 12px', borderRadius: 7, border: `1px solid ${C.border}`, background: 'transparent', color: C.sub, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
            Sign Out
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 800, margin: '0 auto', padding: '40px 28px 80px' }}>

        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: C.text, margin: '0 0 6px', letterSpacing: '-0.02em' }}>Team Access</h1>
          <p style={{ color: C.sub, margin: 0, fontSize: 14, lineHeight: 1.6 }}>
            Manage who can access the analytics dashboard. Users need a Supabase account with the same email to sign in.
          </p>
        </div>

        {/* Add new admin */}
        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: '24px 28px', marginBottom: 20 }}>
          <h2 style={{ fontSize: '0.95rem', fontWeight: 700, color: C.text, margin: '0 0 16px', letterSpacing: '-0.01em' }}>Add a team member</h2>
          <form onSubmit={handleAdd} style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <input
              type="email"
              required
              placeholder="email@cbytechains.com"
              value={newEmail}
              onChange={e => setNewEmail(e.target.value)}
              style={{ flex: '1 1 220px', padding: '9px 13px', borderRadius: 8, border: `1px solid ${C.border}`, fontSize: 13, outline: 'none', fontFamily: FONT, background: '#FAFAFA', color: C.text }}
            />
            <input
              type="text"
              placeholder="Display name (optional)"
              value={newName}
              onChange={e => setNewName(e.target.value)}
              style={{ flex: '1 1 160px', padding: '9px 13px', borderRadius: 8, border: `1px solid ${C.border}`, fontSize: 13, outline: 'none', fontFamily: FONT, background: '#FAFAFA', color: C.text }}
            />
            <button
              type="submit"
              disabled={adding || !newEmail.trim()}
              style={{ padding: '9px 18px', borderRadius: 8, border: 'none', background: adding ? '#A0A0B8' : C.accent, color: '#fff', fontSize: 13, fontWeight: 700, cursor: adding ? 'not-allowed' : 'pointer', whiteSpace: 'nowrap' }}
            >
              {adding ? 'Adding...' : '+ Add'}
            </button>
          </form>
          {addError && (
            <p style={{ margin: '10px 0 0', fontSize: 13, color: C.danger }}>{addError}</p>
          )}
          <p style={{ margin: '12px 0 0', fontSize: 12, color: C.dim, lineHeight: 1.6 }}>
            Adding an email here grants analytics access. To create a login for a new user, go to{' '}
            <a href="https://supabase.com/dashboard" target="_blank" rel="noopener noreferrer" style={{ color: C.accent }}>Supabase dashboard</a>{' '}
            → Authentication → Users → Invite user.
          </p>
        </div>

        {/* Admin list */}
        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, overflow: 'hidden' }}>
          <div style={{ padding: '16px 24px', borderBottom: `1px solid ${C.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: C.text }}>Current members</span>
            <span style={{ fontSize: 12, color: C.dim }}>{admins.length} {admins.length === 1 ? 'member' : 'members'}</span>
          </div>

          {loading ? (
            <div style={{ padding: '32px 24px', textAlign: 'center', color: C.dim, fontSize: 14 }}>Loading...</div>
          ) : error ? (
            <div style={{ padding: '32px 24px', textAlign: 'center', color: C.danger, fontSize: 14 }}>{error}</div>
          ) : admins.length === 0 ? (
            <div style={{ padding: '32px 24px', textAlign: 'center', color: C.dim, fontSize: 14 }}>No members yet.</div>
          ) : (
            admins.map((admin, i) => {
              const isSelf = admin.email === currentUserEmail;
              const sentReset = resetSent === admin.email;
              const date = new Date(admin.created_at).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' });
              return (
                <div key={admin.id} style={{ padding: '16px 24px', borderBottom: i < admins.length - 1 ? `1px solid ${C.border}` : 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: 14, fontWeight: 600, color: C.text }}>{admin.display_name || admin.email}</span>
                      {isSelf && <span style={{ fontSize: 11, fontWeight: 700, color: C.accent, background: 'rgba(82,84,200,0.1)', borderRadius: 4, padding: '1px 6px' }}>you</span>}
                      <span style={{ fontSize: 11, color: C.dim, background: 'rgba(0,0,0,0.05)', borderRadius: 4, padding: '1px 6px' }}>{admin.role}</span>
                    </div>
                    {admin.display_name && <div style={{ fontSize: 12, color: C.dim, marginTop: 2 }}>{admin.email}</div>}
                    <div style={{ fontSize: 11, color: C.dim, marginTop: 2 }}>Added {date}{admin.invited_by ? ` by ${admin.invited_by}` : ''}</div>
                  </div>

                  <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
                    {sentReset ? (
                      <span style={{ fontSize: 12, color: '#059669', fontWeight: 600 }}>Reset email sent</span>
                    ) : (
                      <button
                        onClick={() => handleResetPassword(admin.email)}
                        disabled={resetting === admin.email}
                        style={{ padding: '6px 12px', borderRadius: 7, border: `1px solid ${C.border}`, background: 'transparent', color: C.sub, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}
                      >
                        {resetting === admin.email ? '...' : 'Reset password'}
                      </button>
                    )}
                    {!isSelf && (
                      <button
                        onClick={() => handleRemove(admin.email)}
                        disabled={removing === admin.email}
                        style={{ padding: '6px 12px', borderRadius: 7, border: '1px solid rgba(220,38,38,0.2)', background: 'rgba(220,38,38,0.05)', color: C.danger, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}
                      >
                        {removing === admin.email ? '...' : 'Remove'}
                      </button>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
}
