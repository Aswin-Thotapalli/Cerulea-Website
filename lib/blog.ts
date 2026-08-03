import { createServerSupabaseClient } from "./supabase-server"
import { isAdmin } from "./auth"
import { blogPosts as staticPosts } from "@/const/blog-data"
import type { BlogPost } from "./supabase"

// View model used by the blog list cards
export type BlogCard = {
  title: string
  slug: string
  category: string
  categoryKey: "product" | "educational"
  date: string
  readTime: string
  summary: string
}

// Normalized single post used by the [slug] page. Exactly one of
// contentJson (Supabase / TipTap) or contentHtml (static) is populated.
export type BlogArticle = {
  title: string
  slug: string
  summary: string
  category: string
  date: string
  readTime: string
  coverImageUrl: string | null
  seoTitle: string | null
  seoDescription: string | null
  contentJson: Record<string, unknown> | null
  contentHtml: string | null
}

function categoryKey(category?: string | null): "product" | "educational" {
  return /product|technical/i.test(category ?? "") ? "product" : "educational"
}

function fmtDate(iso?: string | null): string {
  if (!iso) return ""
  const d = new Date(iso)
  if (isNaN(d.getTime())) return iso
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

function readTime(rt?: number | null): string {
  return rt ? `${rt} min read` : ""
}

function supabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
}

function toCard(p: BlogPost): BlogCard {
  return {
    title: p.title,
    slug: p.slug,
    category: p.category ?? "GENERAL",
    categoryKey: categoryKey(p.category),
    date: fmtDate(p.published_at ?? p.created_at),
    readTime: readTime(p.reading_time),
    summary: p.summary,
  }
}

type StaticPost = {
  title: string
  slug: string
  category: string
  date: string
  readTime: string
  summary: string
  content: string
}

function staticCards(): BlogCard[] {
  return (staticPosts as StaticPost[]).map((p) => ({
    title: p.title,
    slug: p.slug,
    category: p.category,
    categoryKey: categoryKey(p.category),
    date: p.date,
    readTime: p.readTime,
    summary: p.summary,
  }))
}

/**
 * List of blog cards. Uses Supabase when configured (published only, or all
 * for an admin), otherwise falls back to the bundled static posts so the page
 * never regresses before env vars are set.
 */
export async function getPosts(): Promise<BlogCard[]> {
  if (!supabaseConfigured()) return staticCards()
  try {
    const supabase = await createServerSupabaseClient()
    const admin = await isAdmin()
    const query = supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false })
    if (!admin) query.eq("published", true)
    const { data, error } = await query
    if (error || !data) return staticCards()
    return (data as BlogPost[]).map(toCard)
  } catch {
    return staticCards()
  }
}

/** Single post by slug, normalized for the [slug] page. */
export async function getPostBySlug(slug: string): Promise<BlogArticle | null> {
  if (supabaseConfigured()) {
    try {
      const supabase = await createServerSupabaseClient()
      const admin = await isAdmin()
      const query = supabase.from("blog_posts").select("*").eq("slug", slug)
      if (!admin) query.eq("published", true)
      const { data } = await query.single()
      if (data) {
        const p = data as BlogPost
        return {
          title: p.title,
          slug: p.slug,
          summary: p.summary,
          category: p.category ?? "GENERAL",
          date: fmtDate(p.published_at ?? p.created_at),
          readTime: readTime(p.reading_time),
          coverImageUrl: p.cover_image_url,
          seoTitle: p.seo_title,
          seoDescription: p.seo_description,
          contentJson: p.content ?? null,
          contentHtml: null,
        }
      }
    } catch {
      // fall through to static
    }
  }

  const sp = (staticPosts as StaticPost[]).find((p) => p.slug === slug)
  if (!sp) return null
  return {
    title: sp.title,
    slug: sp.slug,
    summary: sp.summary,
    category: sp.category,
    date: sp.date,
    readTime: sp.readTime,
    coverImageUrl: null,
    seoTitle: null,
    seoDescription: null,
    contentJson: null,
    contentHtml: sp.content,
  }
}

/** All slugs for generateStaticParams (static source; safe without env). */
export function getStaticSlugs(): string[] {
  return (staticPosts as StaticPost[]).map((p) => p.slug)
}
