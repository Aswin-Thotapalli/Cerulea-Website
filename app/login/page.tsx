"use client"

import { Suspense, useState, type FormEvent } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { createClient } from "@/lib/supabase"
import { ShieldCheck } from "lucide-react"

const inputCls =
  "rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-chart-3"
const labelCls =
  "font-mono text-[11px] tracking-widest text-muted-foreground uppercase"

function LoginForm() {
  const router = useRouter()
  const params = useSearchParams()
  const next = params.get("next") || "/blog/manage"

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      const supabase = createClient()
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (signInError) {
        setError(signInError.message)
        setLoading(false)
      } else {
        router.replace(next)
      }
    } catch {
      setError(
        "Could not reach the server. Check your connection and try again."
      )
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-5">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-10">
        <div className="mb-5 flex size-10 items-center justify-center rounded-lg bg-chart-3/10 text-chart-3">
          <ShieldCheck className="size-5" />
        </div>

        <h1 className="ff-title text-xl font-bold text-foreground">Sign in</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Access the Cerulea admin. Authorised accounts only.
        </p>

        {error && (
          <div className="mt-5 rounded-lg border border-destructive/20 bg-destructive/5 px-4 py-2.5 text-sm text-destructive">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className={labelCls}>Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@cbytechains.com"
              className={inputCls}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex items-baseline justify-between">
              <label className={labelCls}>Password</label>
              <Link
                href="/login/reset"
                className="text-xs font-semibold text-chart-3 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className={inputCls}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 rounded-lg bg-foreground py-2.5 text-sm font-semibold text-background transition-colors hover:bg-foreground/90 disabled:opacity-60"
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <LoginForm />
    </Suspense>
  )
}
