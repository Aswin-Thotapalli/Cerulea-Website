import { createServerSupabaseClient } from '@/lib/supabase-server';
import { isSiteAdmin } from '@/lib/site-admin';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  if (!(await isSiteAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from('site_admins')
    .select('id, email, display_name, role, invited_by, created_at')
    .order('created_at');
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ admins: data });
}

export async function POST(req: NextRequest) {
  if (!(await isSiteAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { email, display_name } = await req.json();
  if (!email) return NextResponse.json({ error: 'Email required' }, { status: 400 });

  const supabase = await createServerSupabaseClient();
  const { data: { session } } = await supabase.auth.getSession();

  const { data, error } = await supabase
    .from('site_admins')
    .insert({ email: email.toLowerCase().trim(), display_name: display_name ?? null, invited_by: session?.user?.email ?? null })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ admin: data });
}

export async function DELETE(req: NextRequest) {
  if (!(await isSiteAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { email } = await req.json();
  if (!email) return NextResponse.json({ error: 'Email required' }, { status: 400 });

  const supabase = await createServerSupabaseClient();
  const { data: { session } } = await supabase.auth.getSession();
  if (session?.user?.email?.toLowerCase() === email.toLowerCase()) {
    return NextResponse.json({ error: 'You cannot remove yourself' }, { status: 400 });
  }

  const { error } = await supabase
    .from('site_admins')
    .delete()
    .eq('email', email.toLowerCase());

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
