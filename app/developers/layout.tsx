// app/(developer)/layout.tsx
import { Suspense } from "react"
import Footer from "@/components/shared/Footer"
import Nav from "@/components/shared/Nav"
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/animate-ui/components/radix/sidebar"
import AppSidebar from "@/components/shared/AppSidebar"
import { ScrollToTop } from "@/components/ScrollToTop"

export default function DeveloperLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="flex min-h-screen flex-col">
      <Nav isFull={true} />
      <SidebarProvider>
        <AppSidebar className="sticky top-22 h-[calc(100vh-5.5rem)]" />
        <SidebarInset>
          <div className="bg-background px-3 py-4 lg:px-8 lg:py-8">
            <div className="mb-4 md:hidden">
              <SidebarTrigger />
            </div>{" "}
            <Suspense fallback={null}>
              <ScrollToTop />
            </Suspense>
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
      <Footer isFull={true} />
    </section>
  )
}
