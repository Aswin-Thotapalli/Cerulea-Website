const Leadership = () => {
  const leaders = [
    {
      initial: "A",
      avatarBg: "bg-[oklch(0.6_0.12_255)]",
      name: "Aswin Thotapalli",
      role: "CO-FOUNDER & DIRECTOR OF TECHNOLOGY",
      roleColor: "text-[oklch(0.6_0.12_255)]",
      credential: "M.Tech (CSE)",
      description:
        "Aswin defines the technology vision and oversees all research and development for Cerulea. He architects the core blockchain infrastructure, managing everything from network security and access control systems to the seamless translation of visual logic into deterministic execution environments.",
    },
    {
      initial: "A",
      avatarBg: "bg-[oklch(0.55_0.1_155)]",
      name: "Anirudh Thotapalli",
      role: "CO-FOUNDER & DIRECTOR OF BUSINESS DEVELOPMENT",
      roleColor: "text-[oklch(0.55_0.1_155)]",
      credential: "B.Com, PGCF",
      description:
        "Anirudh manages the business and commercial operations of Caerulean Bytechains. With a strong background in commerce and taxation, he ensures that the company and its enterprise deployments maintain strict regulatory and statutory compliance in accordance with applicable laws.",
    },
    {
      initial: "T",
      avatarBg: "bg-extra-1",
      name: "T. S. Ajai",
      role: "ANGEL INVESTOR & MENTOR",
      roleColor: "text-extra-1",
      credential: "CA, Exec. Program Blockchain (MIT)",
      description:
        "A Chartered Accountant with nearly four decades of advisory experience. T.S. Ajai provides critical strategic guidance, drawing on his extensive experience serving on the boards of listed companies and guiding startups from their inception through IPO and M&A phases.",
    },
  ]

  const principles = [
    {
      number: "01",
      title: "Transparency",
      description: "Open configuration, no hidden defaults.",
    },
    {
      number: "02",
      title: "Determinism",
      description: "Same input always produces the same chain.",
    },
    {
      number: "03",
      title: "Sovereignty",
      description: "Operators own their keys, data, and runtime.",
    },
    {
      number: "04",
      title: "Compliance",
      description: "Built to meet regulatory obligations by design.",
    },
  ]

  return (
    <section>
      <div className="overflow-hidden bg-card">
        {/* Header */}
        <div className="flex flex-col gap-6 p-8 pb-8 md:flex-row md:items-start md:justify-between md:p-10" data-aos="fade-down">
          <div>
            <p className="text-sm text-muted-foreground">The Team</p>
            <h2 className="font-title mt-1 text-3xl font-bold text-foreground md:text-4xl">
              Leadership
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            A professionally managed organisation uniting deep technology
            expertise with strict operational and regulatory compliance.
          </p>
        </div>

        {/* Rows */}
        <div className="divide-y divide-border border border-border">
          {leaders.map((leader, index) => (
            <div key={leader.name} className="flex flex-col md:flex-row" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="shrink-0 border-border p-6 md:w-80 md:border-r">
                <div
                  className={`font-title flex h-12 w-12 items-center justify-center rounded-xl text-lg font-semibold text-secondary ${leader.avatarBg}`}
                >
                  {leader.initial}
                </div>
                <h3 className="mt-4 font-bold text-foreground">
                  {leader.name}
                </h3>
                <p
                  className={`mt-1 text-xs font-medium tracking-wide ${leader.roleColor}`}
                >
                  {leader.role}
                </p>
                <span className="mt-3 inline-block rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                  {leader.credential}
                </span>
              </div>

              {/* Right: description */}
              <div className="flex flex-1 items-center p-8 md:p-10">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {leader.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Principles */}
      <div className="mt-10 grid grid-cols-1 divide-y divide-border border border-x border-border bg-card md:grid-cols-4 md:divide-x md:divide-y-0">
        {principles.map((item, index) => (
          <div key={item.number} className="p-6" data-aos="fade-up" data-aos-delay={index * 100}>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-xs text-muted-foreground">
              {item.number}
            </span>
            <h3 className="mt-4 font-bold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Leadership
