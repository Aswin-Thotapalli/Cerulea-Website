import { createServerSupabaseClient } from './supabase-server';

const ALLOWED_EMAILS = (process.env.ADMIN_EMAILS ?? '')
  .split(',')
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

export async function getSession() {
  const supabase = await createServerSupabaseClient();
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}

export async function isAdmin(): Promise<boolean> {
  const session = await getSession();
  if (!session?.user?.email) return false;
  return ALLOWED_EMAILS.includes(session.user.email.toLowerCase());
}
