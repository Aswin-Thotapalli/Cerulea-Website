import { ScrollToTop } from "@/components/ScrollToTop"
import Footer from "@/components/shared/Footer"

import Nav from "@/components/shared/Nav"
import { Suspense } from "react"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section>
      <Nav />
      <div className="mx-auto min-h-screen max-w-7xl px-4">
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>

        {children}
      </div>
      <Footer />
    </section>
  )
}
