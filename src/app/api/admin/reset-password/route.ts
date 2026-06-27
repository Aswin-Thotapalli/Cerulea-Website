import { createServerSupabaseClient } from '@/lib/supabase-server';
import { isSiteAdmin } from '@/lib/site-admin';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  if (!(await isSiteAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { email } = await req.json();
  if (!email) return NextResponse.json({ error: 'Email required' }, { status: 400 });

  const supabase = await createServerSupabaseClient();
  const origin = req.headers.get('origin') ?? process.env.NEXT_PUBLIC_SITE_URL ?? 'https://cerulea.io';

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?next=/analytics/update-password`,
  });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
