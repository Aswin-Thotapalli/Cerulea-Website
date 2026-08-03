"use client"

import { useState, useEffect, useMemo } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { createClient } from "@/lib/supabase"
import type { BlogPost } from "@/lib/supabase"
import BlogAdminUnconfigured, {
  SUPABASE_CONFIGURED,
} from "@/components/blog/BlogAdminUnconfigured"

const ALLOWED_EMAILS = (process.env.NEXT_PUBLIC_ADMIN_EMAILS ?? "")
  .split(",")
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean)

type StatusFilter = "all" | "published" | "draft" | "archived"

function effectiveStatus(p: BlogPost): "published" | "draft" | "archived" {
  if (p.status === "archived") return "archived"
  if (p.status === "published" || p.published) return "published"
  return "draft"
}

function StatusBadge({
  status,
}: {
  status: "published" | "draft" | "archived"
}) {
  const map = {
    published: { bg: "#D1FAE5", color: "#065F46", label: "Published" },
    draft: { bg: "#FEF3C7", color: "#92400E", label: "Draft" },
    archived: { bg: "#F1F5F9", color: "#64748B", label: "Archived" },
  }
  const s = map[status]
  return (
    <span style={{ background: s.bg, color: s.color, fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 4, whiteSpace: "nowrap" }}>
      {s.label}
    </span>
  )
}

export default function ManagePage() {
  if (!SUPABASE_CONFIGURED) return <BlogAdminUnconfigured />
  return <ManagePageInner />
}

function ManagePageInner() {
  const supabase = createClient()
  const router = useRouter()

  const [authorized, setAuthorized] = useState(false)
  const [checking, setChecking] = useState(true)
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all")
  const [deleting, setDeleting] = useState<string | null>(null)

  const [categories, setCategories] = useState<string[]>([])
  const [newCategory, setNewCategory] = useState("")
  const [addingCategory, setAddingCategory] = useState(false)
  const [deletingCategory, setDeletingCategory] = useState<string | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      const email = session?.user?.email ?? ""
      const ok = ALLOWED_EMAILS.includes(email.toLowerCase())
      setAuthorized(ok)
      setChecking(false)
      if (ok) {
        fetchPosts()
        fetchCategories()
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchPosts = async () => {
    setLoading(true)
    const { data } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false })
    setPosts((data ?? []) as BlogPost[])
    setLoading(false)
  }

  const fetchCategories = async () => {
    const { data } = await supabase
      .from("blog_categories")
      .select("name")
      .order("name")
    setCategories((data ?? []).map((r: { name: string }) => r.name))
  }

  const handleAddCategory = async () => {
    const name = newCategory.trim()
    if (!name) return
    setAddingCategory(true)
    const { error } = await supabase.from("blog_categories").insert({ name })
    setAddingCategory(false)
    if (error) {
      alert("Failed to add: " + error.message)
      return
    }
    setNewCategory("")
    fetchCategories()
  }

  const handleDeleteCategory = async (name: string) => {
    if (
      !confirm(`Delete category "${name}"? Posts using it won't be affected.`)
    )
      return
    setDeletingCategory(name)
    const { error } = await supabase
      .from("blog_categories")
      .delete()
      .eq("name", name)
    setDeletingCategory(null)
    if (error) {
      alert("Failed to delete: " + error.message)
      return
    }
    setCategories((prev) => prev.filter((c) => c !== name))
  }

  const handleDelete = async (slug: string) => {
    if (!confirm("Delete this post permanently? This cannot be undone.")) return
    setDeleting(slug)
    const { error } = await supabase
      .from("blog_posts")
      .delete()
      .eq("slug", slug)
    if (error) {
      alert("Delete failed: " + error.message)
      setDeleting(null)
      return
    }
    setPosts((prev) => prev.filter((p) => p.slug !== slug))
    setDeleting(null)
  }

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchStatus =
        statusFilter === "all" || effectiveStatus(p) === statusFilter
      const matchSearch =
        !search || p.title.toLowerCase().includes(search.toLowerCase())
      return matchStatus && matchSearch
    })
  }, [posts, search, statusFilter])

  const stats = useMemo(
    () => ({
      total: posts.length,
      published: posts.filter((p) => effectiveStatus(p) === "published").length,
      draft: posts.filter((p) => effectiveStatus(p) === "draft").length,
      archived: posts.filter((p) => effectiveStatus(p) === "archived").length,
    }),
    [posts]
  )

  if (checking) return null
  if (!authorized)
    return (
      <div className="mx-auto max-w-md px-4 pt-40 text-center">
        <h2 className="ff-title text-2xl font-bold text-foreground">
          Access Denied
        </h2>
        <p className="mt-2 text-muted-foreground">
          You don&apos;t have permission to manage posts.
        </p>
      </div>
    )

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="mx-auto max-w-7xl px-4 pt-10 md:pt-12">
        {/* Header */}
        <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="ff-title mb-1 text-3xl font-extrabold tracking-tight text-foreground">
              Blog Management
            </h1>
            <Link href="/blog" className="text-sm text-chart-3 hover:underline">
              ← Back to blog
            </Link>
          </div>
          <button onClick={() => router.push("/blog/new")} style={btnStyle("#2563eb")}>
            + New post
          </button>
        </div>

        {/* Stats */}
        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: "Total", value: stats.total, color: "#0c1e45", bg: "#F8FAFC" },
            { label: "Published", value: stats.published, color: "#065F46", bg: "#D1FAE5" },
            { label: "Draft", value: stats.draft, color: "#92400E", bg: "#FEF3C7" },
            { label: "Archived", value: stats.archived, color: "#64748B", bg: "#F1F5F9" },
          ].map((s) => (
            <button
              key={s.label}
              onClick={() =>
                setStatusFilter(s.label.toLowerCase() as StatusFilter)
              }
              style={{ background: s.bg, borderRadius: 10, padding: 20, cursor: "pointer", border: "none", textAlign: "left" }}
            >
              <div style={{ fontSize: 28, fontWeight: 800, color: s.color, lineHeight: 1 }}>
                {s.value}
              </div>
              <div style={{ fontSize: 12, fontWeight: 600, color: s.color, marginTop: 4, opacity: 0.7 }}>
                {s.label}
              </div>
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search posts…"
            style={{ padding: "8px 14px", borderRadius: 8, border: "1px solid #E2E8F0", fontSize: 14, outline: "none", minWidth: 220, fontFamily: "inherit" }}
          />
          <div className="flex gap-1.5">
            {(["all", "published", "draft", "archived"] as StatusFilter[]).map(
              (f) => (
                <button
                  key={f}
                  onClick={() => setStatusFilter(f)}
                  style={{ padding: "6px 14px", borderRadius: 6, border: "1px solid", fontSize: 13, fontWeight: 600, cursor: "pointer", textTransform: "capitalize", borderColor: statusFilter === f ? "#2563eb" : "#E2E8F0", background: statusFilter === f ? "#EFF6FF" : "#fff", color: statusFilter === f ? "#2563eb" : "#64748B" }}
                >
                  {f}
                </button>
              )
            )}
          </div>
        </div>

        {/* Posts Table */}
        <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #E2E8F0", overflow: "auto", boxShadow: "0 4px 12px rgba(12,30,69,0.04)", marginBottom: 12 }}>
          {loading ? (
            <div style={{ padding: 48, textAlign: "center", color: "#94A3B8" }}>
              Loading…
            </div>
          ) : filtered.length === 0 ? (
            <div style={{ padding: 48, textAlign: "center", color: "#94A3B8", fontSize: 15 }}>
              {search ? `No posts matching "${search}"` : "No posts found."}
            </div>
          ) : (
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}>
                  {["Title", "Status", "Category", "Read", "Date", "Featured", ""].map((h) => (
                    <th key={h} style={{ padding: "12px 16px", textAlign: "left", fontSize: 11, fontWeight: 700, color: "#94A3B8", letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((post, i) => {
                  const status = effectiveStatus(post)
                  const date = post.published_at
                    ? new Date(post.published_at).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })
                    : new Date(post.created_at).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })
                  return (
                    <tr key={post.slug} style={{ borderBottom: i < filtered.length - 1 ? "1px solid #F1F5F9" : "none" }}>
                      <td style={{ padding: "14px 16px", maxWidth: 320 }}>
                        <Link href={`/blog/${post.slug}`} target="_blank" style={{ fontWeight: 700, color: "#0c1e45", fontSize: 14, textDecoration: "none", display: "block", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {post.title}
                        </Link>
                        <div style={{ fontSize: 11, color: "#94A3B8", fontFamily: "monospace", marginTop: 2 }}>
                          /{post.slug}
                        </div>
                      </td>
                      <td style={{ padding: "14px 16px" }}>
                        <StatusBadge status={status} />
                      </td>
                      <td style={{ padding: "14px 16px", fontSize: 13, color: "#64748B" }}>
                        {post.category || ", "}
                      </td>
                      <td style={{ padding: "14px 16px", whiteSpace: "nowrap", fontSize: 13, color: "#64748B" }}>
                        {post.reading_time ? `${post.reading_time} min` : ", "}
                      </td>
                      <td style={{ padding: "14px 16px", whiteSpace: "nowrap", fontSize: 13, color: "#64748B" }}>
                        {date}
                      </td>
                      <td style={{ padding: "14px 16px", textAlign: "center" }}>
                        {post.featured && (
                          <span style={{ color: "#F59E0B", fontSize: 16 }}>★</span>
                        )}
                      </td>
                      <td style={{ padding: "14px 16px" }}>
                        <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
                          <button onClick={() => router.push(`/blog/edit/${post.slug}`)} style={{ padding: "5px 12px", borderRadius: 6, border: "1px solid #E2E8F0", background: "#fff", fontSize: 12, fontWeight: 600, cursor: "pointer", color: "#0c1e45" }}>
                            Edit
                          </button>
                          <button onClick={() => handleDelete(post.slug)} disabled={deleting === post.slug} style={{ padding: "5px 12px", borderRadius: 6, border: "1px solid #FECDD3", background: "#FFF1F2", fontSize: 12, fontWeight: 600, cursor: "pointer", color: "#BE123C" }}>
                            {deleting === post.slug ? "…" : "Delete"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          )}
        </div>

        {filtered.length > 0 && (
          <p className="mb-6 text-right text-xs text-muted-foreground">
            Showing {filtered.length} of {posts.length} posts
          </p>
        )}

        {/* Categories */}
        <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #E2E8F0", overflow: "hidden", boxShadow: "0 4px 12px rgba(12,30,69,0.04)" }}>
          <div style={{ padding: 20, borderBottom: "1px solid #E2E8F0", background: "#F8FAFC", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontWeight: 800, color: "#0c1e45", fontSize: 15 }}>
                Categories
              </div>
              <div style={{ fontSize: 12, color: "#94A3B8", marginTop: 2 }}>
                Manage the categories available when writing posts.
              </div>
            </div>
            <div style={{ fontSize: 12, color: "#94A3B8" }}>
              {categories.length} categories
            </div>
          </div>

          <div style={{ padding: 20 }}>
            <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
              <input
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleAddCategory()
                }}
                placeholder="New category name…"
                style={{ flex: 1, padding: "8px 12px", borderRadius: 8, border: "1px solid #E2E8F0", fontSize: 14, outline: "none", fontFamily: "inherit" }}
              />
              <button onClick={handleAddCategory} disabled={addingCategory || !newCategory.trim()} style={btnStyle("#2563eb")}>
                {addingCategory ? "Adding…" : "+ Add"}
              </button>
            </div>

            {categories.length === 0 ? (
              <p style={{ color: "#94A3B8", fontSize: 14, textAlign: "center", padding: "20px 0" }}>
                No categories yet.
              </p>
            ) : (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {categories.map((cat) => (
                  <div key={cat} style={{ display: "flex", alignItems: "center", gap: 8, background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 8, padding: "6px 12px" }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>
                      {cat}
                    </span>
                    <button onClick={() => handleDeleteCategory(cat)} disabled={deletingCategory === cat} title={`Delete "${cat}"`} style={{ background: "none", border: "none", cursor: "pointer", color: "#94A3B8", padding: "0 2px", fontSize: 16, lineHeight: 1, display: "flex", alignItems: "center" }}>
                      {deletingCategory === cat ? "…" : "×"}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
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
    boxShadow: "0 4px 12px rgba(12,30,69,0.1)",
  }
}
