import Image from "next/image"
import logoImg from "@/assets/logo.png"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import { cn } from "@/lib/utils"

export default function Footer({ isFull = false }: { isFull?: boolean }) {
  return (
    <footer>
      <section
        className={cn(
          isFull
            ? "w-full border-t border-dashed border-border/50 bg-card px-3 py-6 md:py-4 xl:px-8"
            : "mx-auto mt-10 max-w-7xl p-6 md:p-4",
          "flex flex-col items-center justify-between gap-6 md:flex-row md:gap-4"
        )}
      >
        <Image
          src={logoImg}
          alt="Logo"
          width={200}
          height={80}
          className="h-12 w-auto md:h-16"
          data-aos="fade-in"
        />
        <div className="flex flex-wrap justify-center gap-4 text-sm md:gap-6 md:text-base">
          {footerLinks.map((link, i) => (
            <Link
              key={link.label}
              className="group relative text-foreground transition-colors duration-300 hover:text-chart-3"
              href={link.href}
              data-aos="fade-up"
              data-aos-delay={i * 75}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-chart-3 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </div>
      </section>

      <section
        className={cn(
          isFull ? "bg-card px-3 py-6 md:py-4 xl:px-8" : "p-6 md:p-4",
          "border-t border-dashed border-border/50"
        )}
      >
        <div
          className={cn(
            isFull ? "w-full" : "mx-auto max-w-7xl",
            "flex flex-col-reverse items-center justify-between gap-4 text-center text-sm md:flex-row md:text-left md:text-base"
          )}
        >
          <p>
            &copy; {new Date().getFullYear()} Caerulean Bytechains Private
            Limited. All rights reserved.
          </p>
          <div className="flex gap-4 text-xl">
            <Link
              href={"https://www.linkedin.com/#"}
              className="text-chart-3 transition-transform duration-200 hover:-translate-y-0.5 hover:scale-110"
            >
              <FaLinkedin />
            </Link>
            <Link
              href={"https://x.com/#"}
              className="transition-transform duration-200 hover:-translate-y-0.5 hover:scale-110"
            >
              <FaXTwitter />
            </Link>
            <Link
              href={"https://github.com/#"}
              className="transition-transform duration-200 hover:-translate-y-0.5 hover:scale-110"
            >
              <FaGithub />
            </Link>
          </div>
        </div>
      </section>
    </footer>
  )
}

const footerLinks = [
  {
    label: "About",
    href: "/company/about",
  },
  {
    label: "Contact",
    href: "/company/contact",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
  {
    label: "Privacy",
    href: "/company/legal?tab=privacy",
  },
  {
    label: "Terms",
    href: "/company/legal?tab=terms",
  },
]
