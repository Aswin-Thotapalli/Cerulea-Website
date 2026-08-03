// components/ScrollToTop.tsx
"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function ScrollToTop() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // If there's a hash in the URL, scroll to that element instead of the top
    const hash = window.location.hash

    if (hash) {
      // Wait a tick for the page content to render before measuring position
      const id = hash.slice(1)
      const scrollToHash = () => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" })
          return true
        }
        return false
      }

      // Try immediately, then retry briefly in case content mounts async
      if (!scrollToHash()) {
        const timeout = setTimeout(scrollToHash, 100)
        return () => clearTimeout(timeout)
      }
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior })
  }, [pathname, searchParams])

  return null
}
