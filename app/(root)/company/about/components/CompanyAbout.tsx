const companyAboutData = {
  timeline: [
    {
      label: "Founded",
      year: "2021",
      desc: "Caerulean Bytechains Private Limited incorporated in Hyderabad, India.",
    },
    {
      label: "Architecture",
      year: "2022",
      desc: "Core blockchain configuration engine architected and internally validated.",
    },
    {
      label: "Studio Alpha",
      year: "2023",
      desc: "Cerulea Studio enters private alpha with initial enterprise partners.",
    },
    {
      label: "Private Launch",
      year: "2024",
      desc: "Platform opens to private chain deployments across financial and enterprise verticals.",
    },
    {
      label: "Public L1",
      year: "2026",
      desc: "Cerulea Public L1 goes live. Full platform, Studio, Intelligence, Governance, generally available.",
    },
  ],
  stats: [
    { value: "100%", label: "No-code deployment" },
    { value: "3+", label: "Years self-funded" },
    { value: "2021", label: "Founded in Hyderabad" },
  ],
  quote:
    "Blockchain is a mature technology, but deploying and operating it remains fundamentally broken.",
  paragraphs: [
    "When we founded Caerulean Bytechains Private Limited (CBC) in 2021, we recognised a critical bottleneck. Organisations were spending massive amounts of time, effort, and capital just to establish usable chain operations and enterprises were stuck building bespoke, fragile deployments that barely survived past the concept phase.",
    "The industry was obsessed with low-level developer tooling, but what organisations actually needed was a repeatable, structured pathway from configuration to deployment.",
    "Over the past three years, we self-funded and engineered the solution: Cerulea. We transformed blockchain deployment from a fragmented coding exercise into a deterministic, configuration-driven engine. You map the business intent, Cerulea generates the execution.",
  ],
};

const { stats, quote, paragraphs } = companyAboutData;

const CompanyAbout = () => {
  return (
    <section>
      {/* Timeline row */}
      {/* <div className="grid bg-card grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 divide-border border-b border-border lg:divide-x">
        {timeline.map((item, index) => (
          <div key={item.year} className="px-6 py-8" data-aos="fade-up" data-aos-delay={index * 100}>
            <span className="text-[11px] font-accent font-medium tracking-widest uppercase text-muted-foreground">
              {item.label}
            </span>
            <h3 className="mt-2 font-title text-2xl font-bold text-foreground">
              {item.year}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.desc}
            </p>
          </div>
        ))}
      </div> */}

      {/* Origin section */}
      <div className="grid grid-cols-1 bg-card mt-10 lg:grid-cols-[220px_1fr]" data-aos="fade-up" data-aos-delay="200">
        <div className="border-r border-border px-6 py-14 lg:pr-10">
          <h2 className="font-title text-3xl font-bold text-foreground">
            The Origin
          </h2>
        </div>

        <div className="px-6 py-14 lg:px-10">
          <div className="bg-secondary border px-6 py-3">
            <p className="font-subtitle text-lg font-semibold text-foreground">
              {quote}
            </p>
          </div>

          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border border border-solid border-border">
            {stats.map((stat, index) => (
              <div key={stat.label} className="px-6 py-5" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="font-title text-2xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyAbout;