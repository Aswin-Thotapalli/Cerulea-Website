'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase';

export default function AnalyticsLoginPage() {
  const router = useRouter();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    if (signInError) {
      setError(signInError.message);
      setLoading(false);
    } else {
      router.replace('/analytics');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F5F5F8', fontFamily: 'var(--font-jakarta, system-ui, sans-serif)' }}>
      <div style={{ background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 16, padding: '40px 44px', maxWidth: 420, width: '100%', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
        {/* Logo mark */}
        <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(82,84,200,0.1)', border: '1px solid rgba(82,84,200,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(82,84,200,0.9)" strokeWidth="2" strokeLinecap="round">
            <path d="M12 2L2 7l10 5 10-5-10-5M2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>

        <h1 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111118', margin: '0 0 4px', letterSpacing: '-0.02em' }}>
          Analytics
        </h1>
        <p style={{ color: '#52526A', fontSize: 14, margin: '0 0 28px', lineHeight: 1.5 }}>
          Sign in to access the Cerulea internal dashboard.
        </p>

        {error && (
          <div style={{ background: 'rgba(220,38,38,0.07)', border: '1px solid rgba(220,38,38,0.2)', borderRadius: 8, padding: '10px 14px', marginBottom: 20, fontSize: 13, color: '#dc2626' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: '#52526A', letterSpacing: '0.02em' }}>Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@cbytechains.com"
              style={{ padding: '10px 14px', borderRadius: 8, border: '1px solid rgba(0,0,0,0.12)', fontSize: 14, outline: 'none', fontFamily: 'inherit', color: '#111118', background: '#FAFAFA', transition: 'border-color 150ms' }}
              onFocus={e => (e.target.style.borderColor = 'rgba(82,84,200,0.5)')}
              onBlur={e => (e.target.style.borderColor = 'rgba(0,0,0,0.12)')}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: '#52526A', letterSpacing: '0.02em' }}>Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{ padding: '10px 14px', borderRadius: 8, border: '1px solid rgba(0,0,0,0.12)', fontSize: 14, outline: 'none', fontFamily: 'inherit', color: '#111118', background: '#FAFAFA', transition: 'border-color 150ms' }}
              onFocus={e => (e.target.style.borderColor = 'rgba(82,84,200,0.5)')}
              onBlur={e => (e.target.style.borderColor = 'rgba(0,0,0,0.12)')}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{ marginTop: 6, padding: '11px 0', borderRadius: 8, border: 'none', background: loading ? '#A0A0B8' : '#5254C8', color: '#fff', fontSize: 14, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', transition: 'background 150ms', letterSpacing: '-0.01em' }}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
