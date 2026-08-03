"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase"
import { KeyRound } from "lucide-react"

/**
 * Link-free password recovery.
 *  1. request  -> resetPasswordForEmail(email)  (Supabase emails a 6-digit code)
 *  2. verify   -> verifyOtp({ email, token, type: "recovery" })  (session)
 *  3. password -> updateUser({ password })
 *
 * NOTE: for step 1 to deliver a CODE rather than a link, the Supabase
 * "Reset Password" email template must render {{ .Token }} (see handoff note).
 */

const inputCls =
  "rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-chart-3"
const codeCls =
  "rounded-lg border border-border bg-background px-3.5 py-3 text-center text-2xl font-bold tracking-[0.5em] text-foreground outline-none transition-colors focus:border-chart-3"
const labelCls =
  "font-mono text-[11px] tracking-widest text-muted-foreground uppercase"
const btnCls =
  "mt-2 rounded-lg bg-foreground py-2.5 text-sm font-semibold text-background transition-colors hover:bg-foreground/90 disabled:opacity-60"
const linkCls =
  "text-xs font-semibold text-chart-3 hover:underline disabled:opacity-60"

type Step = "request" | "verify" | "password" | "done"

export default function ResetPage() {
  const router = useRouter()

  const [step, setStep] = useState<Step>("request")
  const [email, setEmail] = useState("")
  const [code, setCode] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [error, setError] = useState("")
  const [notice, setNotice] = useState("")
  const [loading, setLoading] = useState(false)

  const sendCode = async (e?: FormEvent) => {
    e?.preventDefault()
    setLoading(true)
    setError("")
    setNotice("")
    try {
      const supabase = createClient()
      const { error: err } = await supabase.auth.resetPasswordForEmail(
        email.trim()
      )
      if (err && !/rate limit/i.test(err.message)) {
        setError(err.message)
        return
      }
      setNotice(`If ${email.trim()} is an account, a 6-digit code is on its way.`)
      setStep("verify")
    } catch {
      setError("Could not reach the server. Check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  const verifyCode = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      const supabase = createClient()
      const { error: err } = await supabase.auth.verifyOtp({
        email: email.trim(),
        token: code.trim(),
        type: "recovery",
      })
      if (err) {
        setError(err.message || "That code is invalid or has expired.")
        return
      }
      setNotice("")
      setStep("password")
    } catch {
      setError("Could not verify the code. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const setNewPassword = async (e: FormEvent) => {
    e.preventDefault()
    if (password !== confirm) {
      setError("Passwords do not match")
      return
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters")
      return
    }
    setLoading(true)
    setError("")
    try {
      const supabase = createClient()
      const { error: err } = await supabase.auth.updateUser({ password })
      if (err) {
        setError(err.message)
        return
      }
      setStep("done")
      setTimeout(() => router.replace("/login"), 2200)
    } catch {
      setError("Could not update the password. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-5">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-10">
        <div className="mb-5 flex size-10 items-center justify-center rounded-lg bg-chart-3/10 text-chart-3">
          <KeyRound className="size-5" />
        </div>

        {error && (
          <div className="mb-5 rounded-lg border border-destructive/20 bg-destructive/5 px-4 py-2.5 text-sm text-destructive">
            {error}
          </div>
        )}
        {notice && step !== "done" && (
          <div className="mb-5 rounded-lg border border-chart-2/20 bg-chart-2/5 px-4 py-2.5 text-sm text-chart-2">
            {notice}
          </div>
        )}

        {step === "request" && (
          <>
            <h1 className="ff-title text-xl font-bold text-foreground">
              Reset password
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Enter your account email. We&apos;ll send a 6-digit code, no link
              to click.
            </p>
            <form onSubmit={sendCode} className="mt-6 flex flex-col gap-4">
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
              <button type="submit" disabled={loading} className={btnCls}>
                {loading ? "Sending…" : "Send code"}
              </button>
            </form>
            <p className="mt-6 text-center">
              <Link href="/login" className={linkCls}>
                Back to sign in
              </Link>
            </p>
          </>
        )}

        {step === "verify" && (
          <>
            <h1 className="ff-title text-xl font-bold text-foreground">
              Enter the code
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Type the 6-digit code sent to{" "}
              <strong className="text-foreground">{email.trim()}</strong>.
            </p>
            <form onSubmit={verifyCode} className="mt-6 flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className={labelCls}>6-digit code</label>
                <input
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  required
                  maxLength={6}
                  value={code}
                  onChange={(e) =>
                    setCode(e.target.value.replace(/\D/g, "").slice(0, 6))
                  }
                  placeholder="••••••"
                  className={codeCls}
                />
              </div>
              <button
                type="submit"
                disabled={loading || code.length < 6}
                className={btnCls}
              >
                {loading ? "Verifying…" : "Verify code"}
              </button>
            </form>
            <p className="mt-6 flex justify-center gap-5">
              <button
                type="button"
                onClick={() => sendCode()}
                disabled={loading}
                className={linkCls}
              >
                Resend code
              </button>
              <button
                type="button"
                onClick={() => {
                  setStep("request")
                  setCode("")
                  setError("")
                  setNotice("")
                }}
                className={linkCls}
              >
                Change email
              </button>
            </p>
          </>
        )}

        {step === "password" && (
          <>
            <h1 className="ff-title text-xl font-bold text-foreground">
              Set new password
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Choose a strong password for your account.
            </p>
            <form onSubmit={setNewPassword} className="mt-6 flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className={labelCls}>New password</label>
                <input
                  type="password"
                  required
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min. 8 characters"
                  className={inputCls}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelCls}>Confirm password</label>
                <input
                  type="password"
                  required
                  minLength={8}
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  placeholder="Repeat password"
                  className={inputCls}
                />
              </div>
              <button type="submit" disabled={loading} className={btnCls}>
                {loading ? "Updating…" : "Update password"}
              </button>
            </form>
          </>
        )}

        {step === "done" && (
          <>
            <h1 className="ff-title text-xl font-bold text-chart-2">
              Password updated
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              You can now sign in with your new password. Redirecting…
            </p>
          </>
        )}
      </div>
    </div>
  )
}
