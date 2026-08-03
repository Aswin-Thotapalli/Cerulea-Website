import React from "react"
import LayoutTitle from "@/app/developers/component/LayoutTitle"
import NavigationButtons from "@/app/developers/component/NavigationButtons"
import HtmlRenderer from "@/components/HtmlRender"

export default function WhitepaperCompetitiveAnalysisPage() {
  return (
    <div>
      <LayoutTitle title="Competitive Analysis" des="Whitepaper" />
      <div className="min-h-[60vh]">
        <HtmlRenderer html={content} />
      </div>
      <NavigationButtons
        previous={{
          title: "Cerulea Intelligence",
          href: "/developers/whitepaper/intelligence",
        }}
        next={{
          title: "Integrations",
          href: "/developers/whitepaper/integrations",
        }}
      />
    </div>
  )
}

const content = `
  <section data-aos="fade-up" id="competitive" class="mb-14">
    <h2 class="flex items-center gap-2 text-lg font-semibold mb-4 text-sidebar-primary">
      <span class="inline-block w-1 h-5 rounded-sm bg-sidebar-primary"></span>
      Competitive Analysis
    </h2>

    <p class="leading-relaxed mb-6 text-foreground text-justify">
      Four dimensions define Cerulea's competitive position in the blockchain infrastructure market. Each chart maps the existing landscape against a distinct decision axis, plotting Cerulea against R3 Corda, Cosmos, Polkadot, and Avalanche, the four most frequently evaluated alternatives for enterprise and developer blockchain infrastructure.
    </p>

    <p class="leading-relaxed mb-6 text-foreground text-justify">
      The central finding across all four dimensions: no other platform simultaneously achieves high configurability, enterprise-grade sophistication, fast deployment, and zero code requirement. Cerulea occupies a position that requires combining those capabilities, and no alternative currently fills that space.
    </p>

    <div class="mb-10">
      <h3 class="flex items-center gap-2 text-base font-semibold mb-3 text-sidebar-primary">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-sidebar-primary"></span>
        Deployment Complexity vs Chain Flexibility
      </h3>
      <p class="leading-relaxed mb-6 text-foreground text-justify">
        Competitors achieve high flexibility only at the cost of high deployment complexity (Cosmos, Polkadot). Cerulea achieves maximum chain configurability with the lowest deployment complexity on the market, no code, no custom runtime engineering required.
      </p>

      <div class="rounded-xl border border-sidebar-primary/20 overflow-hidden bg-[#F4F8FA]">
        <svg viewBox="0 0 820 680" xmlns="http://www.w3.org/2000/svg" font-family="'Segoe UI',Arial,sans-serif">
          <rect width="820" height="680" fill="#F4F8FA" rx="10"></rect>
          <text x="410" y="30" text-anchor="middle" font-size="13" font-weight="700" fill="#1B5E7B" letter-spacing="1">DEPLOYMENT COMPLEXITY vs CHAIN FLEXIBILITY</text>
          <text x="410" y="48" text-anchor="middle" font-size="10" fill="#888">X: Technical overhead to deploy  ·  Y: Chain configurations possible</text>
          <rect x="80" y="55" width="328" height="275" fill="#E8F5E9" fill-opacity=".7" rx="4"></rect>
          <rect x="408" y="55" width="329" height="275" fill="#FFF8E1" fill-opacity=".6" rx="4"></rect>
          <rect x="80" y="330" width="328" height="275" fill="#E3F2FD" fill-opacity=".4" rx="4"></rect>
          <rect x="408" y="330" width="329" height="275" fill="#FFEBEE" fill-opacity=".45" rx="4"></rect>
          <line x1="80" y1="50" x2="80" y2="614" stroke="#333" stroke-width="2"></line>
          <line x1="75" y1="608" x2="737" y2="608" stroke="#333" stroke-width="2"></line>
          <polygon points="80,44 74,58 86,58" fill="#333"></polygon>
          <polygon points="743,608 729,602 729,614" fill="#333"></polygon>
          <line x1="408" y1="50" x2="408" y2="608" stroke="#bbb" stroke-width="1" stroke-dasharray="5,4"></line>
          <line x1="80" y1="330" x2="737" y2="330" stroke="#bbb" stroke-width="1" stroke-dasharray="5,4"></line>
          <text x="26" y="330" text-anchor="middle" font-size="11" font-weight="700" fill="#555" transform="rotate(-90,26,330)">CHAIN CONFIGURABILITY</text>
          <text x="44" y="90" text-anchor="middle" font-size="9" fill="#888" transform="rotate(-90,44,90)">High</text>
          <text x="44" y="575" text-anchor="middle" font-size="9" fill="#888" transform="rotate(-90,44,575)">Low</text>
          <text x="410" y="648" text-anchor="middle" font-size="11" font-weight="700" fill="#555">DEPLOYMENT COMPLEXITY</text>
          <text x="120" y="637" text-anchor="middle" font-size="9" fill="#888">Low</text>
          <text x="692" y="637" text-anchor="middle" font-size="9" fill="#888">High</text>
          <text x="244" y="78" text-anchor="middle" font-size="10" font-weight="700" fill="#2E7D32" fill-opacity=".8">FLEXIBLE  ·  LOW COMPLEXITY</text>
          <text x="572" y="78" text-anchor="middle" font-size="10" font-weight="700" fill="#E65100" fill-opacity=".75">FLEXIBLE  ·  HIGH COMPLEXITY</text>
          <text x="244" y="352" text-anchor="middle" font-size="10" font-weight="700" fill="#1565C0" fill-opacity=".5">RIGID  ·  LOW COMPLEXITY</text>
          <text x="572" y="352" text-anchor="middle" font-size="10" font-weight="700" fill="#B71C1C" fill-opacity=".65">RIGID  ·  HIGH COMPLEXITY</text>
          <circle cx="310" cy="498" r="22" fill="#FF6B35" opacity=".85"></circle>
          <text x="310" y="494" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">R3</text>
          <text x="310" y="507" text-anchor="middle" font-size="8" fill="#fff">CORDA</text>
          <text x="310" y="532" text-anchor="middle" font-size="9" fill="#555">Fixed model · Low config</text>
          <circle cx="441" cy="246" r="22" fill="#E84142" opacity=".85"></circle>
          <text x="441" y="242" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">AVA</text>
          <text x="441" y="255" text-anchor="middle" font-size="8" fill="#fff">LANCHE</text>
          <text x="441" y="280" text-anchor="middle" font-size="9" fill="#555">EVM + Subnets</text>
          <circle cx="612" cy="192" r="22" fill="#2E3148" opacity=".85"></circle>
          <text x="612" y="188" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">COS</text>
          <text x="612" y="201" text-anchor="middle" font-size="8" fill="#fff">MOS</text>
          <text x="612" y="226" text-anchor="middle" font-size="9" fill="#555">Go · Full sovereignty</text>
          <circle cx="706" cy="114" r="22" fill="#E6007A" opacity=".85"></circle>
          <text x="706" y="110" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">POLKA</text>
          <text x="706" y="123" text-anchor="middle" font-size="8" fill="#fff">DOT</text>
          <text x="706" y="148" text-anchor="middle" font-size="9" fill="#555">Rust · Parachain</text>
          <circle cx="178" cy="146" r="32" fill="#1B5E7B"></circle>
          <circle cx="178" cy="146" r="36" fill="none" stroke="#1B5E7B" stroke-width="2" stroke-opacity=".3"></circle>
          <text x="178" y="141" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">CERULEA</text>
          <text x="178" y="155" text-anchor="middle" font-size="8" fill="#AEDBE8">Flexible · No-Code</text>
          <text x="178" y="190" text-anchor="middle" font-size="10" fill="#1B5E7B" font-weight="700">cerulea.io</text>
        </svg>
      </div>
    </div>

    <div class="mb-10">
      <h3 class="flex items-center gap-2 text-base font-semibold mb-3 text-sidebar-primary">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-sidebar-primary"></span>
        Code Requirement vs Chain Sophistication
      </h3>
      <p class="leading-relaxed mb-6 text-foreground text-justify">
        Every other sophisticated blockchain infrastructure platform requires extensive custom code: Rust for Polkadot parachains, Go for Cosmos appchains, Java for Corda flows, EVM/HyperSDK for Avalanche subnets. Cerulea delivers enterprise-grade sophistication through structured configuration alone, no code written at any stage.
      </p>

      <div class="rounded-xl border border-sidebar-primary/20 overflow-hidden bg-[#F4F8FA]">
        <svg viewBox="0 0 820 680" xmlns="http://www.w3.org/2000/svg" font-family="'Segoe UI',Arial,sans-serif">
          <rect width="820" height="680" fill="#F4F8FA" rx="10"></rect>
          <text x="410" y="30" text-anchor="middle" font-size="13" font-weight="700" fill="#1B5E7B" letter-spacing="1">CODE REQUIREMENT vs CHAIN SOPHISTICATION</text>
          <text x="410" y="48" text-anchor="middle" font-size="10" fill="#888">X: Code required to deploy (left = extensive, right = none)  ·  Y: Feature sophistication</text>
          <rect x="80" y="55" width="328" height="275" fill="#FFF8E1" fill-opacity=".6" rx="4"></rect>
          <rect x="408" y="55" width="329" height="275" fill="#E8F5E9" fill-opacity=".7" rx="4"></rect>
          <rect x="80" y="330" width="328" height="275" fill="#FFEBEE" fill-opacity=".45" rx="4"></rect>
          <rect x="408" y="330" width="329" height="275" fill="#E3F2FD" fill-opacity=".3" rx="4"></rect>
          <line x1="80" y1="50" x2="80" y2="614" stroke="#333" stroke-width="2"></line>
          <line x1="75" y1="608" x2="737" y2="608" stroke="#333" stroke-width="2"></line>
          <polygon points="80,44 74,58 86,58" fill="#333"></polygon>
          <polygon points="743,608 729,602 729,614" fill="#333"></polygon>
          <line x1="408" y1="50" x2="408" y2="608" stroke="#bbb" stroke-width="1" stroke-dasharray="5,4"></line>
          <line x1="80" y1="330" x2="737" y2="330" stroke="#bbb" stroke-width="1" stroke-dasharray="5,4"></line>
          <text x="26" y="330" text-anchor="middle" font-size="11" font-weight="700" fill="#555" transform="rotate(-90,26,330)">CHAIN SOPHISTICATION</text>
          <text x="44" y="90" text-anchor="middle" font-size="9" fill="#888" transform="rotate(-90,44,90)">Enterprise-Grade</text>
          <text x="44" y="575" text-anchor="middle" font-size="9" fill="#888" transform="rotate(-90,44,575)">Basic</text>
          <text x="410" y="648" text-anchor="middle" font-size="11" font-weight="700" fill="#555">CODE REQUIREMENT</text>
          <text x="128" y="637" text-anchor="middle" font-size="9" fill="#888">Extensive Code</text>
          <text x="688" y="637" text-anchor="middle" font-size="9" fill="#888">No Code / Visual</text>
          <text x="244" y="78" text-anchor="middle" font-size="10" font-weight="700" fill="#E65100" fill-opacity=".75">SOPHISTICATED  ·  CODE-HEAVY</text>
          <text x="572" y="78" text-anchor="middle" font-size="10" font-weight="700" fill="#2E7D32" fill-opacity=".8">SOPHISTICATED  ·  NO-CODE</text>
          <text x="244" y="352" text-anchor="middle" font-size="10" font-weight="700" fill="#B71C1C" fill-opacity=".65">BASIC  ·  CODE-HEAVY</text>
          <text x="572" y="352" text-anchor="middle" font-size="10" font-weight="700" fill="#1565C0" fill-opacity=".4">BASIC  ·  NO-CODE</text>
          <circle cx="120" cy="112" r="22" fill="#E6007A" opacity=".85"></circle>
          <text x="120" y="108" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">POLKA</text>
          <text x="120" y="121" text-anchor="middle" font-size="8" fill="#fff">DOT</text>
          <text x="120" y="146" text-anchor="middle" font-size="9" fill="#555">Rust · Top-tier</text>
          <circle cx="200" cy="192" r="22" fill="#2E3148" opacity=".85"></circle>
          <text x="200" y="188" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">COS</text>
          <text x="200" y="201" text-anchor="middle" font-size="8" fill="#fff">MOS</text>
          <text x="200" y="226" text-anchor="middle" font-size="9" fill="#555">Go · Full SDK</text>
          <circle cx="211" cy="218" r="22" fill="#E84142" opacity=".85"></circle>
          <text x="211" y="214" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">AVA</text>
          <text x="211" y="227" text-anchor="middle" font-size="8" fill="#fff">LANCHE</text>
          <text x="211" y="252" text-anchor="middle" font-size="9" fill="#555">EVM · HyperSDK</text>
          <circle cx="244" cy="330" r="22" fill="#FF6B35" opacity=".85"></circle>
          <text x="244" y="326" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">R3</text>
          <text x="244" y="339" text-anchor="middle" font-size="8" fill="#fff">CORDA</text>
          <text x="244" y="364" text-anchor="middle" font-size="9" fill="#555">Java · Narrow scope</text>
          <circle cx="671" cy="134" r="32" fill="#1B5E7B"></circle>
          <circle cx="671" cy="134" r="36" fill="none" stroke="#1B5E7B" stroke-width="2" stroke-opacity=".3"></circle>
          <text x="671" y="129" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">CERULEA</text>
          <text x="671" y="143" text-anchor="middle" font-size="8" fill="#AEDBE8">Studio · Full features</text>
          <text x="671" y="178" text-anchor="middle" font-size="10" fill="#1B5E7B" font-weight="700">cerulea.io</text>
        </svg>
      </div>
    </div>

    <div class="mb-10">
      <h3 class="flex items-center gap-2 text-base font-semibold mb-3 text-sidebar-primary">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-sidebar-primary"></span>
        Permissioning Model vs Target Buyer
      </h3>
      <p class="leading-relaxed mb-6 text-foreground text-justify">
        The market is fragmented: permissioned platforms serve enterprise buyers (Corda), permissionless platforms serve developer/startup buyers (Cosmos, Polkadot, Avalanche). No single platform spans both. Cerulea's dual-chain model is the only architecture that covers the full spectrum, Cerulea Private serves permissioned enterprise buyers, while the Public L1 serves permissionless developer and enterprise use cases simultaneously.
      </p>

      <div class="rounded-xl border border-sidebar-primary/20 overflow-hidden bg-[#F4F8FA]">
        <svg viewBox="0 0 820 680" xmlns="http://www.w3.org/2000/svg" font-family="'Segoe UI',Arial,sans-serif">
          <rect width="820" height="680" fill="#F4F8FA" rx="10"></rect>
          <text x="410" y="30" text-anchor="middle" font-size="13" font-weight="700" fill="#1B5E7B" letter-spacing="1">PERMISSIONING MODEL vs TARGET BUYER</text>
          <text x="410" y="48" text-anchor="middle" font-size="10" fill="#888">X: Permissioning spectrum  ·  Y: Primary buyer segment  ·  Cerulea spans both quadrants</text>
          <rect x="80" y="55" width="328" height="275" fill="#EDE7F6" fill-opacity=".5" rx="4"></rect>
          <rect x="408" y="55" width="329" height="275" fill="#E8F5E9" fill-opacity=".5" rx="4"></rect>
          <rect x="80" y="330" width="328" height="275" fill="#FFF8E1" fill-opacity=".5" rx="4"></rect>
          <rect x="408" y="330" width="329" height="275" fill="#E3F2FD" fill-opacity=".45" rx="4"></rect>
          <line x1="80" y1="50" x2="80" y2="614" stroke="#333" stroke-width="2"></line>
          <line x1="75" y1="608" x2="737" y2="608" stroke="#333" stroke-width="2"></line>
          <polygon points="80,44 74,58 86,58" fill="#333"></polygon>
          <polygon points="743,608 729,602 729,614" fill="#333"></polygon>
          <line x1="408" y1="50" x2="408" y2="608" stroke="#bbb" stroke-width="1" stroke-dasharray="5,4"></line>
          <line x1="80" y1="330" x2="737" y2="330" stroke="#bbb" stroke-width="1" stroke-dasharray="5,4"></line>
          <text x="26" y="330" text-anchor="middle" font-size="11" font-weight="700" fill="#555" transform="rotate(-90,26,330)">PRIMARY BUYER</text>
          <text x="44" y="90" text-anchor="middle" font-size="9" fill="#888" transform="rotate(-90,44,90)">Enterprise / Institutional</text>
          <text x="44" y="575" text-anchor="middle" font-size="9" fill="#888" transform="rotate(-90,44,575)">Developer / Startup</text>
          <text x="410" y="648" text-anchor="middle" font-size="11" font-weight="700" fill="#555">PERMISSIONING MODEL</text>
          <text x="128" y="637" text-anchor="middle" font-size="9" fill="#888">Fully Permissioned</text>
          <text x="688" y="637" text-anchor="middle" font-size="9" fill="#888">Fully Permissionless</text>
          <text x="244" y="78" text-anchor="middle" font-size="10" font-weight="700" fill="#6A1B9A" fill-opacity=".7">PERMISSIONED  ·  ENTERPRISE</text>
          <text x="572" y="78" text-anchor="middle" font-size="10" font-weight="700" fill="#2E7D32" fill-opacity=".8">PERMISSIONLESS  ·  ENTERPRISE</text>
          <text x="244" y="352" text-anchor="middle" font-size="10" font-weight="700" fill="#E65100" fill-opacity=".6">PERMISSIONED  ·  DEVELOPER</text>
          <text x="572" y="352" text-anchor="middle" font-size="10" font-weight="700" fill="#1565C0" fill-opacity=".65">PERMISSIONLESS  ·  DEVELOPER</text>
          <circle cx="108" cy="76" r="22" fill="#FF6B35" opacity=".85"></circle>
          <text x="108" y="72" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">R3</text>
          <text x="108" y="85" text-anchor="middle" font-size="8" fill="#fff">CORDA</text>
          <text x="108" y="112" text-anchor="middle" font-size="9" fill="#555">Permissioned · Finance</text>
          <circle cx="706" cy="444" r="22" fill="#E6007A" opacity=".85"></circle>
          <text x="706" y="440" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">POLKA</text>
          <text x="706" y="453" text-anchor="middle" font-size="8" fill="#fff">DOT</text>
          <text x="706" y="478" text-anchor="middle" font-size="9" fill="#555">Permissionless · Dev</text>
          <circle cx="610" cy="516" r="22" fill="#2E3148" opacity=".85"></circle>
          <text x="610" y="512" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">COS</text>
          <text x="610" y="525" text-anchor="middle" font-size="8" fill="#fff">MOS</text>
          <text x="610" y="550" text-anchor="middle" font-size="9" fill="#555">Permissionless · Dev</text>
          <circle cx="540" cy="386" r="22" fill="#E84142" opacity=".85"></circle>
          <text x="540" y="382" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">AVA</text>
          <text x="540" y="395" text-anchor="middle" font-size="8" fill="#fff">LANCHE</text>
          <text x="540" y="420" text-anchor="middle" font-size="9" fill="#555">Dev-leaning · Token</text>
          <path d="M252,178 Q420,240 624,302" fill="none" stroke="#1B5E7B" stroke-width="2" stroke-dasharray="8,5" stroke-opacity=".6"></path>
          <text x="440" y="236" text-anchor="middle" font-size="10" fill="#1B5E7B" font-weight="700" font-style="italic">CERULEA DUAL-CHAIN: covers both positions</text>
          <circle cx="236" cy="155" r="26" fill="#1B5E7B"></circle>
          <text x="236" y="148" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">CERULEA</text>
          <text x="236" y="161" text-anchor="middle" font-size="8" fill="#AEDBE8">PRIVATE</text>
          <text x="236" y="193" text-anchor="middle" font-size="9" fill="#1B5E7B">Permissioned · Enterprise</text>
          <circle cx="638" cy="302" r="26" fill="#1B5E7B" fill-opacity=".2" stroke="#1B5E7B" stroke-width="2.5"></circle>
          <text x="638" y="295" text-anchor="middle" font-size="9" font-weight="700" fill="#1B5E7B">CERULEA</text>
          <text x="638" y="308" text-anchor="middle" font-size="8" fill="#1B5E7B">PUBLIC L1</text>
          <text x="638" y="340" text-anchor="middle" font-size="9" fill="#1B5E7B">Permissionless · Both</text>
        </svg>
      </div>
    </div>

    <div class="mb-10">
      <h3 class="flex items-center gap-2 text-base font-semibold mb-3 text-sidebar-primary">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-sidebar-primary"></span>
        Time-to-Deploy vs Customisability
      </h3>
      <p class="leading-relaxed mb-6 text-foreground text-justify">
        The industry trade-off has always been: fast deployment means fixed defaults (Corda), full customisation means months of engineering (Cosmos, Polkadot). Avalanche's subnet model improves on this but still requires 3–6 months. Cerulea breaks the trade-off entirely: full parameter configurability, deployable in weeks to months through Studio alone.
      </p>

      <div class="rounded-xl border border-sidebar-primary/20 overflow-hidden bg-[#F4F8FA]">
        <svg viewBox="0 0 820 680" xmlns="http://www.w3.org/2000/svg" font-family="'Segoe UI',Arial,sans-serif">
          <rect width="820" height="680" fill="#F4F8FA" rx="10"></rect>
          <text x="410" y="30" text-anchor="middle" font-size="13" font-weight="700" fill="#1B5E7B" letter-spacing="1">TIME-TO-DEPLOY vs CUSTOMISABILITY</text>
          <text x="410" y="48" text-anchor="middle" font-size="10" fill="#888">X: Customisability of chain parameters  ·  Y: Deployment time (bottom = fast)</text>
          <rect x="80" y="55" width="328" height="275" fill="#FFEBEE" fill-opacity=".45" rx="4"></rect>
          <rect x="408" y="55" width="329" height="275" fill="#FFF8E1" fill-opacity=".6" rx="4"></rect>
          <rect x="80" y="330" width="328" height="275" fill="#E3F2FD" fill-opacity=".3" rx="4"></rect>
          <rect x="408" y="330" width="329" height="275" fill="#E8F5E9" fill-opacity=".7" rx="4"></rect>
          <line x1="80" y1="50" x2="80" y2="614" stroke="#333" stroke-width="2"></line>
          <line x1="75" y1="608" x2="737" y2="608" stroke="#333" stroke-width="2"></line>
          <polygon points="80,44 74,58 86,58" fill="#333"></polygon>
          <polygon points="743,608 729,602 729,614" fill="#333"></polygon>
          <line x1="408" y1="50" x2="408" y2="608" stroke="#bbb" stroke-width="1" stroke-dasharray="5,4"></line>
          <line x1="80" y1="330" x2="737" y2="330" stroke="#bbb" stroke-width="1" stroke-dasharray="5,4"></line>
          <text x="26" y="330" text-anchor="middle" font-size="11" font-weight="700" fill="#555" transform="rotate(-90,26,330)">TIME TO DEPLOY</text>
          <text x="44" y="90" text-anchor="middle" font-size="9" fill="#888" transform="rotate(-90,44,90)">Months to Years (Slow)</text>
          <text x="44" y="575" text-anchor="middle" font-size="9" fill="#888" transform="rotate(-90,44,575)">Weeks to Months (Fast)</text>
          <text x="410" y="648" text-anchor="middle" font-size="11" font-weight="700" fill="#555">CUSTOMISABILITY</text>
          <text x="128" y="637" text-anchor="middle" font-size="9" fill="#888">Fixed Defaults</text>
          <text x="688" y="637" text-anchor="middle" font-size="9" fill="#888">Fully Configurable</text>
          <text x="244" y="78" text-anchor="middle" font-size="10" font-weight="700" fill="#B71C1C" fill-opacity=".65">RIGID  ·  SLOW</text>
          <text x="572" y="78" text-anchor="middle" font-size="10" font-weight="700" fill="#E65100" fill-opacity=".75">CUSTOMISABLE  ·  SLOW</text>
          <text x="244" y="352" text-anchor="middle" font-size="10" font-weight="700" fill="#1565C0" fill-opacity=".45">RIGID  ·  FAST</text>
          <text x="572" y="352" text-anchor="middle" font-size="10" font-weight="700" fill="#2E7D32" fill-opacity=".8">CUSTOMISABLE  ·  FAST</text>
          <circle cx="211" cy="218" r="22" fill="#FF6B35" opacity=".85"></circle>
          <text x="211" y="214" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">R3</text>
          <text x="211" y="227" text-anchor="middle" font-size="8" fill="#fff">CORDA</text>
          <text x="211" y="252" text-anchor="middle" font-size="9" fill="#555">Fixed · Slow</text>
          <circle cx="610" cy="196" r="22" fill="#2E3148" opacity=".85"></circle>
          <text x="610" y="192" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">COS</text>
          <text x="610" y="205" text-anchor="middle" font-size="8" fill="#fff">MOS</text>
          <text x="610" y="230" text-anchor="middle" font-size="9" fill="#555">Flexible · 6-12 months</text>
          <circle cx="704" cy="116" r="22" fill="#E6007A" opacity=".85"></circle>
          <text x="704" y="112" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">POLKA</text>
          <text x="704" y="125" text-anchor="middle" font-size="8" fill="#fff">DOT</text>
          <text x="704" y="150" text-anchor="middle" font-size="9" fill="#555">Flexible · 6-12 months</text>
          <circle cx="507" cy="302" r="22" fill="#E84142" opacity=".85"></circle>
          <text x="507" y="298" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">AVA</text>
          <text x="507" y="311" text-anchor="middle" font-size="8" fill="#fff">LANCHE</text>
          <text x="507" y="336" text-anchor="middle" font-size="9" fill="#555">Subnets · 3-6 months</text>
          <circle cx="671" cy="526" r="32" fill="#1B5E7B"></circle>
          <circle cx="671" cy="526" r="36" fill="none" stroke="#1B5E7B" stroke-width="2" stroke-opacity=".3"></circle>
          <text x="671" y="521" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">CERULEA</text>
          <text x="671" y="535" text-anchor="middle" font-size="8" fill="#AEDBE8">Full config · Months</text>
          <text x="671" y="570" text-anchor="middle" font-size="10" fill="#1B5E7B" font-weight="700">cerulea.io</text>
        </svg>
      </div>
    </div>
  </section>
`
