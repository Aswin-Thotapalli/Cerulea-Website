import { NextResponse } from 'next/server';
import { isSiteAdmin } from '@/lib/site-admin';
import { getActiveUsers, isConfigured } from '@/lib/posthog-api';

export const revalidate = 0;

export async function GET() {
  const admin = await isSiteAdmin();
  if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!isConfigured()) return NextResponse.json({ total: 0, pages: [] });

  try {
    const data = await getActiveUsers();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ total: 0, pages: [] });
  }
}
