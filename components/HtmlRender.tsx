"use client"

import DOMPurify from "isomorphic-dompurify"
import parse from "html-react-parser"

interface Props {
  html: string
}

export default function HtmlRenderer({ html }: Props) {
  const cleanHtml = DOMPurify.sanitize(html)

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement
    const anchor = target.closest("a")
    if (anchor) {
      const href = anchor.getAttribute("href")
      if (href && href.startsWith("#")) {
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          e.preventDefault()
          window.history.pushState(null, "", href)
          targetElement.scrollIntoView({ behavior: "smooth" })
        }
      }
    }
  }

  return <div onClick={handleContainerClick}>{parse(cleanHtml)}</div>
}
