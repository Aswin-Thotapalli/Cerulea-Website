import React from 'react'

interface HomeSectionTitleProps {
  badge: string
  title: string
  subtitle?: string
  className?: string
}

const HomeSectionTitle = ({
  badge,
  title,
  subtitle,
  className = '',
}: HomeSectionTitleProps) => {
  return (
    <div
      className={`flex flex-col items-center gap-4 pb-2.5 text-center ${className}`}
      data-aos="fade-up"
      data-aos-duration="800"
    >
      {/* Badge */}
      <span className="ff-subtitle inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-5 py-2 text-sm font-semibold tracking-[0.15em] text-foreground/75 uppercase">
        <span className="size-1.5 rounded-full bg-primary" />
        {badge}
      </span>

      {/* Title */}
      <h2 className="ff-title max-w-4xl text-3xl font-bold text-balance text-foreground sm:text-4xl lg:text-[40px]">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">{subtitle}</p>
      )}
    </div>
  )
}

export default HomeSectionTitle