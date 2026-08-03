export const blogPosts = [
  {
    title: "Where Blockchain Actually Helps: Real-World Applications of Cerulea",
    slug: "where-blockchain-actually-helps",
    category: "PRODUCT & TECHNICAL",
    date: "27 May 2026",
    readTime: "14 min read",
    summary:
      "This article explains where blockchain actually makes sense and where Cerulea can be useful. It focuses on use cases where multiple parties need to trust the same record, no single party should fully control that record, and the history of changes matters. The main examples are supply chain traceability, digital identity, academic and professional certificates, government records, healthcare record management, and enterprise workflow automation.",
    content: `
      <p>Blockchain technology has been surrounded by hype for years, but distinguishing its practical applications from mere buzzwords is crucial for meaningful adoption. In this article, we delve into where blockchain truly adds value and how Cerulea is designed to meet these needs.</p>
      
      <h2>The Core Value Proposition</h2>
      <p>At its heart, blockchain provides a decentralized, immutable ledger. This means it excels in scenarios where:</p>
      <ul>
        <li>Multiple distinct parties need to share and update the same data.</li>
        <li>There is a lack of absolute trust between these parties, meaning no single entity should have unilateral control.</li>
        <li>A secure, verifiable history of all transactions and changes is essential.</li>
      </ul>
      
      <h2>Real-World Use Cases</h2>
      <p>Let's look at some specific domains where this architecture solves real problems:</p>
      
      <h3>Supply Chain Traceability</h3>
      <p>Modern supply chains are complex networks involving manufacturers, logistics providers, distributors, and retailers. Tracking a product's journey from origin to consumer requires a shared system of record. Cerulea allows all participants to log events (e.g., quality checks, location updates) on a transparent ledger, ensuring authenticity and combating counterfeiting.</p>
      
      <h3>Digital Identity</h3>
      <p>Managing identity online is currently fragmented and often insecure. A blockchain-based approach allows individuals to own their identity credentials and selectively share them without relying on a central honeypot of personal data. Cerulea supports the creation of verifiable credentials that are secure and privacy-preserving.</p>
      
      <h3>Academic and Professional Certificates</h3>
      <p>Verifying educational degrees or professional certifications can be slow and prone to fraud. By issuing these credentials on Cerulea, institutions provide a tamper-proof record that employers or other organizations can instantly verify.</p>
      
      <h3>Government Records and Healthcare</h3>
      <p>From land registries to patient health records, maintaining accurate, secure, and accessible data is paramount. Cerulea ensures that records cannot be altered retroactively, providing a reliable single source of truth while strictly managing access permissions.</p>
      
      <p>Cerulea is built not just for the theoretical future of Web3, but to solve these practical, immediate challenges across various industries today.</p>
    `,
  },
  {
    title: "The Cerulea API",
    slug: "the-cerulea-api",
    category: "PRODUCT & TECHNICAL",
    date: "27 May 2026",
    readTime: "8 min read",
    summary:
      "This article explains how the Cerulea API lets teams use blockchain infrastructure through normal HTTP-based integration. The main point is that blockchain adoption often fails because integration is difficult, not because the chain itself is unavailable. Cerulea API solves this by exposing workspaces, deployments, private chains, smart contracts, validators, governance, tokens, identity, analytics, and CI/CD workflows through familiar REST and JSON-RPC interfaces.",
    content: `
      <p>One of the biggest hurdles to widespread blockchain adoption isn't the technology itself, it's the difficulty of integration. Many development teams are familiar with traditional web architectures but lack specialized blockchain expertise. The Cerulea API bridges this gap.</p>
      
      <h2>Bridging Web2 and Web3</h2>
      <p>We designed the Cerulea API to allow teams to interact with blockchain infrastructure using standard HTTP protocols. You don't need to write complex smart contracts from scratch or manage obscure cryptographic keys manually to get started.</p>
      
      <h2>Key Features of the Cerulea API</h2>
      <ul>
        <li><strong>Familiar Interfaces:</strong> Exposes blockchain functionality through standard REST and JSON-RPC endpoints.</li>
        <li><strong>Comprehensive Control:</strong> Manage everything from workspaces and deployments to private chains and validators via the API.</li>
        <li><strong>Simplified Smart Contracts:</strong> Deploy and interact with smart contracts without needing deep Solidity or Rust knowledge.</li>
        <li><strong>Built-in Governance and Identity:</strong> Manage access control, token schemas, and governance rules directly through API calls.</li>
      </ul>
      
      <p>By treating the blockchain as just another backend service, the Cerulea API empowers traditional developers to build decentralized applications with the tools they already know.</p>
    `,
  },
  {
    title: "Building Blockchain Apps Without Writing Blockchain Code",
    slug: "building-blockchain-apps",
    category: "PRODUCT & TECHNICAL",
    date: "27 May 2026",
    readTime: "8 min read",
    summary:
      "This article explains what Cerulea Studio is and what it is not. Cerulea Studio is a visual no-code interface for building blockchain infrastructure, including smart contract logic, data models, token schemas, governance rules, validator settings, access permissions, private networks, and application-specific REST APIs. It supports both Cerulea Public L1 and Cerulea Private Chains through the same interface.",
    content: `
      <p>Enter Cerulea Studio: our visual, no-code environment designed to democratize blockchain development. We believe that building on blockchain should be as intuitive as building a modern web application.</p>
      
      <h2>What is Cerulea Studio?</h2>
      <p>Cerulea Studio provides a drag-and-drop interface and visual configuration tools for defining complex blockchain architecture. It allows users to design smart contract logic, establish data models, and set up governance rules without writing a single line of specialized blockchain code.</p>
      
      <h2>Capabilities</h2>
      <ul>
        <li><strong>Visual Smart Contracts:</strong> Design business logic using a node-based interface.</li>
        <li><strong>Data and Token Modeling:</strong> Easily define custom tokens, NFTs, and structured data models.</li>
        <li><strong>Network Configuration:</strong> Spin up and configure private networks or deploy to the Cerulea Public L1 with a few clicks.</li>
        <li><strong>Access and Governance:</strong> Visually manage roles, permissions, and network governance settings.</li>
      </ul>
      
      <p>Cerulea Studio isn't just a prototyping tool; it generates production-ready configurations and REST APIs, dramatically reducing the time-to-market for decentralized applications.</p>
    `,
  },
]

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
