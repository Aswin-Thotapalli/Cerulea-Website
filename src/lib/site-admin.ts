import { createServerSupabaseClient } from './supabase-server';

export async function isSiteAdmin(): Promise<boolean> {
  const supabase = await createServerSupabaseClient();
  const { data: { session } } = await supabase.auth.getSession();
  if (!session?.user?.email) return false;
  const { data } = await supabase
    .from('site_admins')
    .select('id')
    .eq('email', session.user.email.toLowerCase())
    .single();
  return !!data;
}

export async function getCurrentUserEmail(): Promise<string | null> {
  const supabase = await createServerSupabaseClient();
  const { data: { session } } = await supabase.auth.getSession();
  return session?.user?.email ?? null;
}
