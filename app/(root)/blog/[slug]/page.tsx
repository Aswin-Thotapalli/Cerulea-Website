import type { Metadata } from "next"
import { notFound } from "next/navigation"
import SectionHeader from "@/components/SectionHeader"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import BlogHtml from "@/components/BlogHtml"
import BlogRenderer from "@/components/BlogRenderer"
import AdminControls from "@/components/blog/AdminControls"
import { getPostBySlug, getStaticSlugs } from "@/lib/blog"

export const revalidate = 0

export function generateStaticParams() {
  return getStaticSlugs().map((slug) => ({ slug }))
}

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}
  const title = post.seoTitle || post.title
  const description = post.seoDescription || post.summary
  return {
    title,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      url: `/blog/${post.slug}`,
      images: post.coverImageUrl ? [{ url: post.coverImageUrl }] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params

  const post = await getPostBySlug(slug)
  if (!post) notFound()

  return (
    <main className="pb-16 md:pb-24">
      {/* Hero */}
      <section className="bg-card">
        <SectionHeader
          segments={[{ label: post.category }]}
          headline1={post.title}
          description={[post.date, post.readTime].filter(Boolean).join(" • ")}
          node={
            <div className="mt-8 flex justify-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full border bg-background px-5 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-all hover:bg-muted hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </div>
          }
        />
      </section>

      {/* Content */}
      <section className="mt-6 px-4 sm:px-6 md:mt-10 lg:px-8">
        <div
          className="mx-auto max-w-5xl rounded-2xl border bg-card p-6 shadow-sm sm:p-10 "
          data-aos="fade-up"
          data-aos-duration="700"
        >
          {post.contentJson ? (
            <BlogRenderer content={post.contentJson} />
          ) : (
            <BlogHtml html={post.contentHtml ?? ""} />
          )}
        </div>
      </section>

      <AdminControls postSlug={post.slug} />
    </main>
  )
}
