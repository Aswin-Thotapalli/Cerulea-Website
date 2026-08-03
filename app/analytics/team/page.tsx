import * as React from 'react';
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { isSiteAdmin, getCurrentUserEmail } from '@/lib/site-admin';
import TeamManagement from '@/components/analytics/TeamManagement';

export const metadata: Metadata = {
  title: 'Team | Cerulea Analytics',
  robots: { index: false, follow: false },
};
export const revalidate = 0;

export default async function TeamPage() {
  const admin = await isSiteAdmin();
  if (!admin) redirect('/analytics/login');
  const currentUserEmail = await getCurrentUserEmail();
  return <TeamManagement currentUserEmail={currentUserEmail ?? ''} />;
}
