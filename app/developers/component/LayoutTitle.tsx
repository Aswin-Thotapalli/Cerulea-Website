import React from "react"

export default function LayoutTitle({
  title,
  des,
}: {
  title: string
  des: string
}) {
  return (
    <div className="mb-3 border-b border-border/50 pb-6">
      <h1
        data-aos="fade-up"
        className="ff-title text-2xl font-semibold text-foreground md:text-3xl"
      >
        {title}
      </h1>
      <p data-aos="fade-up" className="mt-1 text-sm text-muted-foreground">
        {des}
      </p>
    </div>
  )
}
