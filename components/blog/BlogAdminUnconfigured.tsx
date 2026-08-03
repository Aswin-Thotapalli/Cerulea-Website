export const SUPABASE_CONFIGURED = Boolean(
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function BlogAdminUnconfigured() {
  return (
    <div className="mx-auto max-w-md px-4 pt-40 text-center">
      <h2 className="ff-title text-2xl font-bold text-foreground">
        Blog admin not configured
      </h2>
      <p className="mt-2 text-muted-foreground">
        Set <code className="font-mono">NEXT_PUBLIC_SUPABASE_URL</code> and{" "}
        <code className="font-mono">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> in the
        environment to enable the blog editor.
      </p>
    </div>
  )
}
