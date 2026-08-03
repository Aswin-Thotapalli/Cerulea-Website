import React from "react"
import SectionHeader from "@/components/SectionHeader"
import {
  Tabs,
  TabsList,
  TabsTab,
  TabsPanels,
  TabsPanel,
} from "@/components/animate-ui/components/base/tabs"
import { ArrowUpRight, Cpu, BookOpen } from "lucide-react"
import Link from "next/link"
import { getPosts, type BlogCard } from "@/lib/blog"
import AdminControls from "@/components/blog/AdminControls"

export const revalidate = 0

function PostRow({ post, index }: { post: BlogCard; index: number }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="group mb-10 flex flex-col gap-4 border-b pb-10 last:mb-0 last:border-0 last:pb-0 sm:flex-row sm:gap-8"
    >
      <div className="flex-1 space-y-4">
        <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] tracking-wider uppercase">
          <span className="font-semibold text-primary">{post.category}</span>
          {post.date && (
            <>
              <span className="text-muted-foreground/60">•</span>
              <span className="text-muted-foreground">{post.date}</span>
            </>
          )}
          {post.readTime && (
            <>
              <span className="text-muted-foreground/60">•</span>
              <span className="text-muted-foreground">{post.readTime}</span>
            </>
          )}
        </div>

        <h3 className="text-lg leading-snug font-bold text-foreground transition-colors sm:text-[22px]">
          {post.title}
        </h3>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {post.summary}
        </p>
      </div>

      <div className="hidden shrink-0 pt-2 sm:block">
        <Link
          href={`/blog/${post.slug}`}
          className="flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 hover:bg-muted"
        >
          <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
        </Link>
      </div>
    </div>
  )
}

function PostList({ posts }: { posts: BlogCard[] }) {
  if (posts.length === 0) {
    return (
      <div className="flex min-h-75 flex-col items-center justify-center rounded-3xl border bg-card p-5 shadow-sm sm:p-8 md:p-10">
        <p className="text-center text-muted-foreground">
          No articles found yet.
        </p>
      </div>
    )
  }
  return (
    <div className="flex flex-col rounded-3xl border bg-card p-5 sm:p-8 md:p-10">
      {posts.map((post, index) => (
        <PostRow key={post.slug} post={post} index={index} />
      ))}
    </div>
  )
}

function count(n: number) {
  return `${n} article${n === 1 ? "" : "s"}`
}

export default async function BlogPage() {
  const posts = await getPosts()
  const productPosts = posts.filter((p) => p.categoryKey === "product")
  const educationalPosts = posts.filter((p) => p.categoryKey === "educational")

  return (
    <div className="container mx-auto  py-8 sm:px-6 md:py-12 lg:px-8">
      <section className="bg-card" data-aos="fade-down">
        <SectionHeader
          segments={[{ label: "Cerulea / Blog" }]}
          headline1="Ideas, Research &"
          headline2="Perspectives."
          description="Technical writing, strategic thinking, and notes from the team building Cerulea's infrastructure platform."
        />
      </section>

      <div className="mt-10" data-aos="fade-up" data-aos-delay="100">
        <Tabs
          defaultValue="all"
          className="flex flex-col items-start gap-8 md:flex-row"
        >
          {/* Sidebar Topics */}
          <div
            className="w-full shrink-0 rounded-2xl border bg-card p-4 md:w-70 md:p-6"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h3 className="mb-4 pl-2 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
              Topics
            </h3>
            <TabsList className="relative flex h-auto w-full flex-row items-stretch justify-start gap-1 overflow-x-auto p-0 md:flex-col md:overflow-visible">
              <TabsTab
                value="all"
                className="data:selected:text-secondary justify-center rounded-xl px-4 py-3 font-semibold md:justify-start"
              >
                All
              </TabsTab>
              <TabsTab
                value="product"
                className="data:selected:text-secondary justify-center gap-3 rounded-xl px-4 py-3 font-medium md:justify-start"
              >
                <Cpu className="h-4 w-4 opacity-70" />
                Product & Technical
              </TabsTab>
              <TabsTab
                value="educational"
                className="data:selected:text-secondary justify-center gap-3 rounded-xl px-4 py-3 font-medium md:justify-start"
              >
                <BookOpen className="h-4 w-4 opacity-70" />
                Educational
              </TabsTab>
            </TabsList>
          </div>

          {/* Main Content Area */}
          <TabsPanels className="w-full min-w-0 flex-1">
            <TabsPanel value="all" className="w-full">
              <div className="mb-6 flex items-center justify-between pl-2">
                <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                  All Posts
                </h2>
                <span className="font-mono text-xs text-muted-foreground">
                  {count(posts.length)}
                </span>
              </div>
              <PostList posts={posts} />
            </TabsPanel>

            <TabsPanel value="product" className="w-full">
              <div className="mb-6 flex items-center justify-between pl-2">
                <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                  Product & Technical
                </h2>
                <span className="font-mono text-xs text-muted-foreground">
                  {count(productPosts.length)}
                </span>
              </div>
              <PostList posts={productPosts} />
            </TabsPanel>

            <TabsPanel value="educational" className="w-full">
              <div className="mb-6 flex items-center justify-between pl-2">
                <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                  Educational
                </h2>
                <span className="font-mono text-xs text-muted-foreground">
                  {count(educationalPosts.length)}
                </span>
              </div>
              <PostList posts={educationalPosts} />
            </TabsPanel>
          </TabsPanels>
        </Tabs>
      </div>

      <AdminControls showNewPostButton />
    </div>
  )
}
