import { createBrowserClient } from '@supabase/ssr';

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: Record<string, unknown>;
  cover_image_url: string | null;
  published: boolean;
  published_at: string | null;
  author_email: string;
  created_at: string;
  updated_at: string;
  tags: string[] | null;
  category: string | null;
  seo_title: string | null;
  seo_description: string | null;
  reading_time: number | null;
  featured: boolean | null;
  status: 'draft' | 'published' | 'archived' | null;
  scheduled_at: string | null;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export function createClient() {
  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}
