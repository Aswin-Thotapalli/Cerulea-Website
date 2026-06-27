'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { track } from '@/lib/track';

export default function NotFound() {
  const pathname = usePathname();

  React.useEffect(() => {
    track.event('page_not_found', { path: pathname ?? window.location.pathname });
  }, [pathname]);

  return (
    <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-jakarta, system-ui, sans-serif)' }}>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <div style={{ fontSize: '5rem', fontWeight: 900, color: '#E2E8F0', lineHeight: 1, marginBottom: 16 }}>404</div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#172554', marginBottom: 8, letterSpacing: '-0.02em' }}>Page not found</h1>
        <p style={{ color: '#64748B', marginBottom: 32, fontSize: '0.95rem' }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" style={{ display: 'inline-block', padding: '10px 24px', background: '#172554', color: '#fff', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem' }}>
          Back to home
        </Link>
      </div>
    </div>
  );
}
