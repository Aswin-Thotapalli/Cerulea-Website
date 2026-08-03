"use client"

import { useState, useMemo, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import dynamic from "next/dynamic"
import { createClient } from "@/lib/supabase"
import type { BlogPost } from "@/lib/supabase"
import BlogAdminUnconfigured, {
  SUPABASE_CONFIGURED,
} from "@/components/blog/BlogAdminUnconfigured"

const BlogEditor = dynamic(() => import("@/components/blog/BlogEditor"), {
  ssr: false,
})

const ALLOWED_EMAILS = (process.env.NEXT_PUBLIC_ADMIN_EMAILS ?? "")
  .split(",")
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean)

function calcReadingTime(content: Record<string, unknown>): number {
  const extractText = (node: unknown): string => {
    if (!node || typeof node !== "object") return ""
    const n = node as Record<string, unknown>
    if (n.type === "text" && typeof n.text === "string") return n.text
    if (Array.isArray(n.content))
      return (n.content as unknown[]).map(extractText).join(" ")
    return ""
  }
  const words = extractText(content).split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 200))
}

function TagInput({
  tags,
  onChange,
}: {
  tags: string[]
  onChange: (t: string[]) => void
}) {
  const [input, setInput] = useState("")
  const addTag = () => {
    const tag = input.trim().toLowerCase().replace(/\s+/g, "-")
    if (tag && !tags.includes(tag)) onChange([...tags, tag])
    setInput("")
  }
  return (
    <div>
      {tags.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 8 }}>
          {tags.map((tag) => (
            <span key={tag} style={{ background: "#DBEAFE", color: "#1D4ED8", borderRadius: 4, padding: "2px 8px", fontSize: 12, display: "flex", alignItems: "center", gap: 4 }}>
              {tag}
              <button
                type="button"
                onClick={() => onChange(tags.filter((t) => t !== tag))}
                style={{ background: "none", border: "none", cursor: "pointer", color: "#1D4ED8", padding: 0, fontSize: 14, lineHeight: 1, fontWeight: 700 }}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === ",") {
            e.preventDefault()
            addTag()
          }
        }}
        onBlur={addTag}
        placeholder="Type a tag, press Enter to add"
        style={{ ...inputStyle, fontSize: 13 }}
      />
    </div>
  )
}

export default function EditPostPage() {
  if (!SUPABASE_CONFIGURED) return <BlogAdminUnconfigured />
  return <EditPostPageInner />
}

function EditPostPageInner() {
  const supabase = createClient()
  const router = useRouter()
  const { slug: routeSlug } = useParams<{ slug: string }>()

  const [authorized, setAuthorized] = useState(false)
  const [checking, setChecking] = useState(true)
  const [post, setPost] = useState<BlogPost | null>(null)

  const [title, setTitle] = useState("")
  const [summary, setSummary] = useState("")
  const [content, setContent] = useState<Record<string, unknown>>({})
  const [coverUrl, setCoverUrl] = useState("")
  const [status, setStatus] = useState<"draft" | "published" | "archived">(
    "draft"
  )
  const [category, setCategory] = useState("")
  const [categories, setCategories] = useState<string[]>([])
  const [tags, setTags] = useState<string[]>([])
  const [featured, setFeatured] = useState(false)
  const [seoTitle, setSeoTitle] = useState("")
  const [seoDesc, setSeoDesc] = useState("")
  const [scheduledAt, setScheduledAt] = useState("")
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      const email = session?.user?.email ?? ""
      setAuthorized(ALLOWED_EMAILS.includes(email.toLowerCase()))
      setChecking(false)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    supabase
      .from("blog_categories")
      .select("name")
      .order("name")
      .then(({ data }) => {
        setCategories((data ?? []).map((r: { name: string }) => r.name))
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!routeSlug) return
    supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", routeSlug)
      .single()
      .then(({ data }) => {
        if (!data) return
        const p = data as BlogPost
        setPost(p)
        setTitle(p.title)
        setSummary(p.summary)
        setContent(p.content as Record<string, unknown>)
        setCoverUrl(p.cover_image_url ?? "")
        setStatus(
          (p.status as "draft" | "published" | "archived") ??
            (p.published ? "published" : "draft")
        )
        setCategory(p.category ?? "")
        setTags(p.tags ?? [])
        setFeatured(p.featured ?? false)
        setSeoTitle(p.seo_title ?? "")
        setSeoDesc(p.seo_description ?? "")
        setScheduledAt(
          p.scheduled_at
            ? new Date(p.scheduled_at).toISOString().slice(0, 16)
            : ""
        )
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeSlug])

  const readingTime = useMemo(() => calcReadingTime(content), [content])

  const handleSave = async () => {
    if (!title.trim() || !summary.trim()) {
      alert("Title and summary are required")
      return
    }
    setSaving(true)
    const published = status === "published"
    const { error } = await supabase
      .from("blog_posts")
      .update({
        title: title.trim(),
        summary: summary.trim(),
        content,
        cover_image_url: coverUrl || null,
        published,
        published_at: published
          ? (post?.published_at ?? new Date().toISOString())
          : null,
        updated_at: new Date().toISOString(),
        status,
        tags,
        category: category || null,
        seo_title: seoTitle || null,
        seo_description: seoDesc || null,
        reading_time: readingTime,
        featured,
        scheduled_at: scheduledAt ? new Date(scheduledAt).toISOString() : null,
      })
      .eq("slug", routeSlug)
    setSaving(false)
    if (error) {
      alert("Error saving: " + error.message)
      return
    }
    router.push(status === "published" ? `/blog/${routeSlug}` : "/blog/manage")
    router.refresh()
  }

  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const ext = file.name.split(".").pop()
    const { data, error } = await supabase.storage
      .from("blog-media")
      .upload(`covers/${Date.now()}.${ext}`, file, { upsert: false })
    if (error || !data) {
      alert("Upload failed: " + error?.message)
      return
    }
    setCoverUrl(
      supabase.storage.from("blog-media").getPublicUrl(data.path).data.publicUrl
    )
  }

  if (checking || !post) return null
  if (!authorized)
    return (
      <div className="mx-auto max-w-md px-4 pt-40 text-center">
        <h2 className="ff-title text-2xl font-bold text-foreground">
          Access Denied
        </h2>
      </div>
    )

  const saveLabel = saving
    ? "Saving…"
    : status === "published"
      ? post.published
        ? "Update"
        : "Publish"
      : "Save draft"

  return (
    <div className="min-h-screen bg-background pb-14">
      <div className="mx-auto max-w-7xl px-4 pt-10 md:pt-12">
        {/* Top bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push("/blog/manage")}
              style={btnStyle("#F1F5F9", "#475569")}
            >
              ← Back
            </button>
            <div>
              <h1 className="ff-title text-2xl font-extrabold tracking-tight text-foreground">
                Edit post
              </h1>
              <p className="font-mono text-xs text-muted-foreground">
                /{routeSlug}
              </p>
            </div>
          </div>
          <button onClick={handleSave} disabled={saving} style={btnStyle("#2563eb")}>
            {saveLabel}
          </button>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-[1fr_300px]">
          {/* Main content */}
          <div>
            <div className="mb-6">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Post title…"
                style={{ width: "100%", fontSize: 30, fontWeight: 800, color: "#0c1e45", border: "none", borderBottom: "2px solid #E2E8F0", borderRadius: 0, padding: "8px 0", background: "transparent", outline: "none", fontFamily: "inherit", boxSizing: "border-box" }}
              />
            </div>

            <div className="mb-4">
              <label style={labelStyle}>
                Summary{" "}
                <span style={{ color: "#94A3B8", fontWeight: 400, textTransform: "none", letterSpacing: 0, fontSize: 11 }}>
                  (shown in blog listing)
                </span>
              </label>
              <textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder="One or two sentences…"
                rows={3}
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>

            <div className="mb-4">
              <label style={labelStyle}>Cover image</label>
              <div className="flex flex-wrap items-center gap-3">
                <input type="file" accept="image/*" onChange={handleCoverUpload} style={{ fontSize: 13, color: "#475569" }} />
                {coverUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={coverUrl} alt="cover" style={{ height: 56, borderRadius: 8, objectFit: "cover", border: "1px solid #E2E8F0" }} />
                )}
              </div>
            </div>

            <div>
              <label style={labelStyle}>Content</label>
              <BlogEditor content={content} onChange={setContent} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="xl:sticky xl:top-20">
            <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 12, overflow: "hidden" }}>
              <div style={{ padding: 20, borderBottom: "1px solid #E2E8F0" }}>
                <p style={{ fontSize: 10, fontWeight: 800, color: "#94A3B8", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 18 }}>
                  Post Settings
                </p>

                <label style={labelStyle}>Status</label>
                <select value={status} onChange={(e) => setStatus(e.target.value as typeof status)} style={{ ...inputStyle, marginBottom: 16 }}>
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </select>

                <label style={labelStyle}>Category</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ ...inputStyle, marginBottom: 16 }}>
                  <option value="">None</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>

                <label style={labelStyle}>
                  Tags{" "}
                  <span style={{ color: "#94A3B8", fontWeight: 400, textTransform: "none", letterSpacing: 0, fontSize: 11 }}>
                    (Enter to add)
                  </span>
                </label>
                <TagInput tags={tags} onChange={setTags} />
              </div>

              <div style={{ padding: 20, borderBottom: "1px solid #E2E8F0" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <label style={{ ...labelStyle, marginBottom: 0 }}>Featured post</label>
                  <input type="checkbox" checked={featured} onChange={(e) => setFeatured(e.target.checked)} style={{ width: 16, height: 16, cursor: "pointer", accentColor: "#2563eb" }} />
                </div>
                <p style={{ fontSize: 11, color: "#94A3B8", marginTop: 6 }}>
                  Shown as hero on the blog listing page.
                </p>
              </div>

              <div style={{ padding: 20, borderBottom: "1px solid #E2E8F0" }}>
                <p style={{ fontSize: 10, fontWeight: 800, color: "#94A3B8", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 18 }}>
                  SEO
                </p>

                <label style={labelStyle}>
                  Meta title{" "}
                  <span style={{ color: "#94A3B8", fontWeight: 400, textTransform: "none", letterSpacing: 0, fontSize: 11 }}>
                    (optional)
                  </span>
                </label>
                <input value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} placeholder={title || "Defaults to post title"} style={{ ...inputStyle, marginBottom: 12 }} />

                <label style={labelStyle}>Meta description</label>
                <textarea value={seoDesc} onChange={(e) => setSeoDesc(e.target.value)} placeholder={summary || "Defaults to summary"} rows={3} style={{ ...inputStyle, resize: "vertical" }} />
              </div>

              <div style={{ padding: 20, borderBottom: "1px solid #E2E8F0" }}>
                <label style={labelStyle}>
                  Schedule date{" "}
                  <span style={{ color: "#94A3B8", fontWeight: 400, textTransform: "none", letterSpacing: 0, fontSize: 11 }}>
                    (reference only)
                  </span>
                </label>
                <input type="datetime-local" value={scheduledAt} onChange={(e) => setScheduledAt(e.target.value)} style={{ ...inputStyle, fontSize: 13 }} />
              </div>

              <div style={{ padding: 20, background: "#F8FAFC" }}>
                <p style={{ fontSize: 12, color: "#94A3B8", marginBottom: 16 }}>
                  Estimated reading time:{" "}
                  <strong style={{ color: "#475569" }}>{readingTime} min</strong>
                </p>
                <button onClick={handleSave} disabled={saving} style={{ ...btnStyle("#2563eb"), width: "100%" }}>
                  {saveLabel}
                </button>
                <button onClick={() => router.push("/blog/manage")} style={{ ...btnStyle("#F1F5F9", "#475569"), width: "100%", marginTop: 8 }}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 11,
  fontWeight: 800,
  color: "#374151",
  marginBottom: 6,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
}
const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "8px 12px",
  borderRadius: 6,
  border: "1px solid #E2E8F0",
  fontSize: 14,
  color: "#0c1e45",
  background: "#fff",
  outline: "none",
  fontFamily: "inherit",
  boxSizing: "border-box",
}
function btnStyle(bg: string, color = "#fff"): React.CSSProperties {
  return {
    background: bg,
    color,
    border: "none",
    borderRadius: 8,
    padding: "10px 18px",
    fontSize: 13,
    fontWeight: 700,
    cursor: "pointer",
    whiteSpace: "nowrap",
  }
}
