import HtmlRenderer from "./HtmlRender"

// Long-form typography for the static/HTML content path. Rendered as an inline
// <style> element (like BlogRenderer) so it applies regardless of the Tailwind
// build pipeline. The TipTap/Supabase path styles itself via .ProseMirror.
const PROSE_CSS = `
.blog-prose { font-size:17px; line-height:1.85; color:#334155; }
.blog-prose h1 { font-size:2rem; font-weight:800; margin:2rem 0 .75rem; color:#0c1e45; letter-spacing:-.02em; }
.blog-prose h2 { font-size:1.6rem; font-weight:700; margin:2rem 0 .75rem; color:#0c1e45; }
.blog-prose h3 { font-size:1.3rem; font-weight:700; margin:1.5rem 0 .5rem; color:#0c1e45; }
.blog-prose h4,.blog-prose h5,.blog-prose h6 { font-size:1.1rem; font-weight:700; margin:1.25rem 0 .5rem; color:#0c1e45; }
.blog-prose p { margin-bottom:1.25rem; }
.blog-prose ul,.blog-prose ol { padding-left:1.75rem; margin-bottom:1.25rem; }
.blog-prose ul { list-style:disc; }
.blog-prose ol { list-style:decimal; }
.blog-prose li { margin-bottom:.4rem; }
.blog-prose blockquote { border-left:4px solid #2563eb; margin:2rem 0; padding:1rem 1.5rem; background:#F8FAFC; border-radius:0 10px 10px 0; font-style:italic; color:#475569; }
.blog-prose code { background:#F1F5F9; border-radius:4px; padding:2px 6px; font-size:.875em; color:#dc2626; font-family:'Courier New',monospace; }
.blog-prose pre { background:#0c1e45; color:#e2e8f0; border-radius:10px; padding:1.25rem 1.5rem; margin:1.75rem 0; overflow-x:auto; }
.blog-prose pre code { background:none; color:inherit; padding:0; }
.blog-prose hr { border:none; border-top:2px solid #E2E8F0; margin:2.5rem 0; }
.blog-prose img { max-width:100%; border-radius:10px; margin:1.5rem 0; }
.blog-prose a { color:#2563eb; text-decoration:underline; }
.blog-prose table { border-collapse:collapse; width:100%; margin:1.75rem 0; }
.blog-prose th,.blog-prose td { border:1px solid #E2E8F0; padding:10px 14px; text-align:left; }
.blog-prose th { background:#F8FAFC; font-weight:700; color:#0c1e45; }
`

export default function BlogHtml({ html }: { html: string }) {
  return (
    <>
      <style>{PROSE_CSS}</style>
      <div className="blog-prose">
        <HtmlRenderer html={html} />
      </div>
    </>
  )
}
