const HowWeEngineer = () => {
  const items = [
    {
      number: "01",
      title: "Deployability over theory.",
      description:
        "A system is only valuable when it can be deployed and operated predictably. We optimise Cerulea Studio for real-world runtime execution, ensuring that what you design visually is exactly what compiles and runs to the byte.",
    },
    {
      number: "02",
      title: "Explicit governance.",
      description:
        "Enterprises require clear responsibility boundaries. We do not believe in implicit permissions. Cerulea makes network ownership, read/write access, and state modification mathematically explicit.",
    },
  ]

  return (
    <div className="overflow-hidden rounded-2xl bg-card">
      {/* Header */}
      <div className="px-6 py-12 text-center" data-aos="fade-up">
        <h2
          className="text-3xl font-bold text-foreground md:text-4xl font-title"
        >
          How we engineer.
        </h2>
        <p className="mt-2 text-muted-foreground">Engineering philosophy</p>
      </div>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Content grid */}
      <div className="grid grid-cols-1 divide-y divide-border md:grid-cols-2 md:divide-x md:divide-y-0">
        {items.map((item, index) => (
          <div key={item.number} className="p-8 md:p-10" data-aos="fade-up" data-aos-delay={index * 150}>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 text-xs font-medium text-primary">
              {item.number}
            </span>
            <h3 className="mt-4 text-lg font-bold text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HowWeEngineer
