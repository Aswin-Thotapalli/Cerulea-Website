'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@mui/material';
import { track } from '@/lib/track';

interface Props {
  href: string;
  label: string;
  slug: string;
  title: string;
}

export default function SolutionCTA({ href, label, slug, title }: Props) {
  React.useEffect(() => {
    track.solutionViewed(slug, title);
  }, [slug, title]);

  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <Button
        variant="contained"
        size="large"
        onClick={() => track.ctaClick(label, href, 'solution-page-cta')}
      >
        {label}
      </Button>
    </Link>
  );
}
