import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavigationItem {
  title: string
  href: string
}

interface NavigationButtonsProps {
  previous?: NavigationItem
  next?: NavigationItem
  className?: string
}

export default function NavigationButtons({
  previous,
  next,
  className,
}: NavigationButtonsProps) {
  return (
    <nav
      className={cn(
        "mt-8 flex items-center justify-between border-t border-border/50 py-4 lg:mt-16 lg:py-6",
        className
      )}
    >
      {/* Previous */}
      {previous ? (
        <Link
          href={previous.href}
          data-aos="fade-left"
          data-aos-delay="50"
          className="group ff-subtitle flex items-center gap-2 md:gap-4"
        >
          <div className="flex shrink-0 items-center justify-center rounded-full border border-border p-1.5 transition-all duration-300 group-hover:-translate-x-1 group-hover:scale-105 group-hover:border-sidebar-primary group-hover:bg-sidebar-primary/10 group-active:scale-95 md:p-2">
            <ChevronLeft className="h-3.5 w-3.5 text-muted-foreground transition-colors duration-300 group-hover:text-sidebar-primary md:h-4 md:w-4" />
          </div>

          <div>
            <p className="text-[0.625rem] font-medium tracking-[0.25em] text-muted-foreground uppercase md:text-xs">
              Previous
            </p>

            <h3 className="mt-0.5 line-clamp-1 text-sm font-semibold text-foreground transition-all duration-300 group-hover:-translate-x-0.5 group-hover:text-sidebar-primary md:mt-1 md:text-base">
              {previous.title}
            </h3>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {/* Next */}
      {next ? (
        <Link
          href={next.href}
          data-aos="fade-right"
          data-aos-delay="50"
          className="group flex items-center gap-2 text-right md:gap-4"
        >
          <div>
            <p className="text-[0.625rem] font-medium tracking-[0.25em] text-muted-foreground uppercase md:text-xs">
              Next
            </p>

            <h3 className="mt-0.5 line-clamp-1 text-sm font-semibold text-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-sidebar-primary md:mt-1 md:text-base">
              {next.title}
            </h3>
          </div>

          <div className="flex shrink-0 items-center justify-center rounded-full border border-border p-1.5 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-105 group-hover:border-sidebar-primary group-hover:bg-sidebar-primary/10 group-active:scale-95 md:p-2">
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground transition-colors duration-300 group-hover:text-sidebar-primary md:h-4 md:w-4" />
          </div>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  )
}