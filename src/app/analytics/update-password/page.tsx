'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase';

export default function UpdatePasswordPage() {
  const router = useRouter();
  const [password, setPassword] = React.useState('');
  const [confirm, setConfirm] = React.useState('');
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) { setError('Passwords do not match'); return; }
    if (password.length < 8) { setError('Password must be at least 8 characters'); return; }

    setLoading(true);
    setError('');
    const supabase = createClient();
    const { error: updateError } = await supabase.auth.updateUser({ password });
    if (updateError) {
      setError(updateError.message);
      setLoading(false);
    } else {
      setSuccess(true);
      setTimeout(() => router.replace('/analytics'), 2000);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F5F5F8', fontFamily: 'var(--font-jakarta, system-ui, sans-serif)' }}>
      <div style={{ background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 16, padding: '40px 44px', maxWidth: 420, width: '100%', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
        <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(82,84,200,0.1)', border: '1px solid rgba(82,84,200,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(82,84,200,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>

        {success ? (
          <>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#059669', margin: '0 0 8px', letterSpacing: '-0.02em' }}>Password updated</h1>
            <p style={{ color: '#52526A', fontSize: 14, margin: 0 }}>Redirecting you to analytics...</p>
          </>
        ) : (
          <>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111118', margin: '0 0 4px', letterSpacing: '-0.02em' }}>Set new password</h1>
            <p style={{ color: '#52526A', fontSize: 14, margin: '0 0 28px' }}>Choose a strong password for your account.</p>

            {error && (
              <div style={{ background: 'rgba(220,38,38,0.07)', border: '1px solid rgba(220,38,38,0.2)', borderRadius: 8, padding: '10px 14px', marginBottom: 20, fontSize: 13, color: '#dc2626' }}>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: '#52526A' }}>New password</label>
                <input type="password" required minLength={8} value={password} onChange={e => setPassword(e.target.value)} placeholder="Min. 8 characters"
                  style={{ padding: '10px 14px', borderRadius: 8, border: '1px solid rgba(0,0,0,0.12)', fontSize: 14, outline: 'none', fontFamily: 'inherit', background: '#FAFAFA' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: '#52526A' }}>Confirm password</label>
                <input type="password" required minLength={8} value={confirm} onChange={e => setConfirm(e.target.value)} placeholder="Repeat password"
                  style={{ padding: '10px 14px', borderRadius: 8, border: '1px solid rgba(0,0,0,0.12)', fontSize: 14, outline: 'none', fontFamily: 'inherit', background: '#FAFAFA' }} />
              </div>
              <button type="submit" disabled={loading}
                style={{ marginTop: 6, padding: '11px 0', borderRadius: 8, border: 'none', background: loading ? '#A0A0B8' : '#5254C8', color: '#fff', fontSize: 14, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer' }}>
                {loading ? 'Updating...' : 'Update Password'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
