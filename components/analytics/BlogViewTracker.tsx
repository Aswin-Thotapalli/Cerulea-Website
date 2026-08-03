'use client';

import { useEffect } from 'react';
import { track } from '@/lib/track';

export default function BlogViewTracker({ slug, title, category }: { slug: string; title: string; category?: string }) {
  useEffect(() => {
    track.blogPostViewed(slug, title, category);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return null;
}
