"use client"

import { Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import SectionHeader from "@/components/SectionHeader"
import { FileText, Shield } from "lucide-react"
import HtmlRenderer from "@/components/HtmlRender"

function LegalContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const activeTab = searchParams.get("tab") === "privacy" ? "privacy" : "terms"

  const setActiveTab = (tab: "terms" | "privacy") => {
    router.push(`/company/legal?tab=${tab}`, { scroll: false })
  }

  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 overflow-hidden">
      <section className="bg-card" data-aos="fade-down">
        <SectionHeader
          segments={[{ label: "CERULEA / LEGAL" }]}
          headline1="Legal & Compliance"
          headline2=""
          description="Access the foundational agreements, data handling policies, and terms of service that govern the use of Cerulea software and infrastructure."
        />
      </section>

      <div className="mt-12 md:mt-16 pb-24">
        <div className="flex flex-col gap-8 md:gap-12">
          {/* Custom Tabs List */}
          <div className="relative flex h-auto flex-col items-stretch justify-start gap-4 bg-transparent p-0 md:flex-row" data-aos="fade-up" data-aos-delay="100">
            <button
              onClick={() => setActiveTab("terms")}
              className={
                "flex flex-1 flex-col items-start gap-4 border p-6 text-left transition-all duration-300 outline-none " +
                (activeTab === "terms"
                  ? "border-2 border-border bg-card"
                  : "border-transparent bg-muted/20 hover:bg-muted/30")
              }
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted-foreground/8">
                <FileText className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-bold text-foreground">Terms of Service</h3>
                <p className="text-sm leading-relaxed font-normal text-muted-foreground">
                  The governing rules and operational boundaries for deploying and accessing Cerulea infrastructure.
                </p>
              </div>
            </button>

            <button
              onClick={() => setActiveTab("privacy")}
              className={
                "flex flex-1 flex-col items-start gap-4 border p-4 text-left transition-all duration-300 outline-none " +
                (activeTab === "privacy"
                  ? "border-2 border-border bg-card"
                  : "border-transparent bg-muted hover:bg-muted/30")
              }
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted-foreground/8">
                <Shield className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-bold text-foreground">Privacy Policy</h3>
                <p className="text-sm leading-relaxed font-normal text-muted-foreground">
                  Details on how we manage, store, and protect your data across public and sovereign private environments.
                </p>
              </div>
            </button>
          </div>

          {/* Custom Tabs Panels with CSS transitions */}
          <div className="relative flex-1" data-aos="fade-up" data-aos-delay="200">
            <div
              className={
                "w-full transform bg-card p-6 transition-all duration-300 ease-out md:p-12 " +
                (activeTab === "terms"
                  ? "relative z-10 translate-y-0 scale-100 opacity-100"
                  : "pointer-events-none absolute inset-x-0 top-0 z-0 translate-y-2 scale-95 opacity-0")
              }
            >
              <div className="mb-8 flex items-center gap-4 border-b border-dashed pb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted-foreground/8">
                  <FileText className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">Terms of Service</h2>
                  <p className="mt-1 font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                    Cerulea Bytechains Private Limited • Last updated: July 2026  
                  </p>
                </div>
              </div>
              <HtmlRenderer html={termsHtml} />
            </div>

            <div
              className={
                "w-full transform bg-card p-6 transition-all duration-300 ease-out md:p-12 " +
                (activeTab === "privacy"
                  ? "relative z-10 translate-y-0 scale-100 opacity-100"
                  : "pointer-events-none absolute inset-x-0 top-0 z-0 translate-y-2 scale-95 opacity-0")
              }
            >
              <div className="mb-8 flex items-center gap-4 border-b border-dashed pb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10">
                  <Shield className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">Privacy Policy</h2>
                  <p className="mt-1 font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                    Cerulea Bytechains Private Limited • Last updated: May 2024
                  </p>
                </div>
              </div>
              <HtmlRenderer html={privacyHtml} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LegalPage() {
  return (
    <Suspense fallback={null}>
      <LegalContent />
    </Suspense>
  )
}
const termsHtml = `
<div class="space-y-8">
  <div>
    <h3 class="text-sm font-bold text-foreground mb-2">1. Acceptance</h3>
    <p class="text-sm text-muted-foreground leading-relaxed">By accessing or using the Cerulea website at cerulea.io, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use this website. These Terms apply to the cerulea.io website and any related informational materials published by Caerulean Bytechains Private Limited. They do not govern the use of any Cerulea software products, APIs, or deployed infrastructure, which are governed by separate agreements entered into with our team.</p>
  </div>
  <div>
    <h3 class="text-sm font-bold text-foreground mb-2">2. Who we are</h3>
    <p class="text-sm text-muted-foreground leading-relaxed">Caerulean Bytechains Private Limited ("we", "Cerulea", "us") is a company incorporated under the laws of India. We develop and operate blockchain infrastructure software and services under the Cerulea brand. Contact: support@cerulea.io.</p>
  </div>
  <div>
    <h3 class="text-sm font-bold text-foreground mb-2">3. Permitted use</h3>
    <p class="text-sm text-muted-foreground leading-relaxed mb-2">You may access this website for lawful, personal, and informational purposes. You agree not to:</p>
    <ul class="list-disc pl-5 text-sm text-muted-foreground space-y-1">
      <li>Attempt to gain unauthorised access to any part of the website or its underlying systems.</li>
      <li>Use automated tools to scrape, crawl, or harvest data from the website at a rate that disrupts normal operation.</li>
      <li>Reproduce, distribute, or create derivative works from website content without written permission.</li>
      <li>Use the website in any manner that violates applicable laws or regulations in your jurisdiction.</li>
      <li>Submit false, misleading, or fraudulent information via the contact form or any other communication channel.</li>
    </ul>
  </div>
  <div>
    <h3 class="text-sm font-bold text-foreground mb-2">4. Intellectual property</h3>
    <p class="text-sm text-muted-foreground leading-relaxed">All content on this website, including but not limited to text, product descriptions, diagrams, design elements, brand assets, and the Cerulea name and logo, is the property of Caerulean Bytechains Private Limited or is licensed for use by us. All rights are reserved.</p>
    <p class="text-sm text-muted-foreground leading-relaxed mt-2">You may share links to this website and reference Cerulea's public product information for non-commercial informational purposes. Any other reproduction, redistribution, or commercial use requires prior written consent from Caerulean Bytechains Private Limited.</p>
  </div>
  <div>
    <h3 class="text-sm font-bold text-foreground mb-2">5. Contact form and communications</h3>
    <p class="text-sm text-muted-foreground leading-relaxed">When you submit the contact form on this website, you consent to us processing your name, email address, company name, and message content for the purpose of responding to your enquiry and communicating about Cerulea products and services. This information is transmitted via our email delivery provider (Resend) and is not shared with third parties beyond what is described in our Privacy Policy.</p>
    <p class="text-sm text-muted-foreground leading-relaxed mt-2">We may follow up on enquiries that appear to represent a genuine business interest. You may opt out of further communication at any time by replying to any email from us with a request to stop.</p>
  </div>
  <div>
    <h3 class="text-sm font-bold text-foreground mb-2">6. No warranties</h3>
    <p class="text-sm text-muted-foreground leading-relaxed">This website and all materials published on it are provided on an "as is" and "as available" basis for informational purposes only. Caerulean Bytechains Private Limited makes no representations or warranties of any kind, express or implied, regarding the accuracy, completeness, reliability, or fitness for a particular purpose of any information on this website.</p>
    <p class="text-sm text-muted-foreground leading-relaxed mt-2">Product descriptions, capability statements, and roadmap information represent our current intent and are subject to change. Nothing on this website constitutes a binding commitment regarding software functionality, availability, or timelines unless expressly agreed in a written contract with our team.</p>
  </div>
  <div>
    <h3 class="text-sm font-bold text-foreground mb-2">7. Limitation of liability</h3>
    <p class="text-sm text-muted-foreground leading-relaxed">To the fullest extent permitted by applicable law, Caerulean Bytechains Private Limited, its directors, employees, and affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of or inability to use this website, including but not limited to loss of data, business interruption, or reliance on information published here.</p>
    <p class="text-sm text-muted-foreground leading-relaxed mt-2">This limitation applies regardless of whether we have been advised of the possibility of such damages and regardless of the legal theory on which a claim is based.</p>
  </div>
  <div>
    <h3 class="text-sm font-bold text-foreground mb-2">8. Third-party links</h3>
    <p class="text-sm text-muted-foreground leading-relaxed">This website may contain links to third-party websites, documentation, or services. These links are provided for convenience only. Caerulean Bytechains Private Limited does not endorse, control, or accept responsibility for the content, privacy practices, or availability of any linked third-party site.</p>
  </div>
  <div>
    <h3 class="text-sm font-bold text-foreground mb-2">9. Privacy</h3>
    <p class="text-sm text-muted-foreground leading-relaxed">Use of this website is also governed by our Privacy Policy, which describes how we collect, use, and protect your information, including the analytics and session recording tools we use. Please review our Privacy Policy at cerulea.io/legal/privacy.</p>
  </div>
  <div>
    <h3 class="text-sm font-bold text-foreground mb-2">10. Governing law</h3>
    <p class="text-sm text-muted-foreground leading-relaxed">These Terms are governed by the laws of India. Any disputes arising from or related to these Terms or your use of this website shall be subject to the exclusive jurisdiction of the courts of India. If you access this website from outside India, you do so at your own risk and are responsible for compliance with local laws.</p>
  </div>
  <div>
    <h3 class="text-sm font-bold text-foreground mb-2">11. Changes to these Terms</h3>
    <p class="text-sm text-muted-foreground leading-relaxed">We may revise these Terms at any time. The "Last updated" date at the top of this page will reflect the most recent revision. Your continued use of the website after changes are published constitutes acceptance of the updated Terms. If you do not agree to revised Terms, stop using the website.</p>
  </div>
  <div>
    <h3 class="text-sm font-bold text-foreground mb-2">12. Contact</h3>
    <p class="text-sm text-muted-foreground leading-relaxed">Questions about these Terms: support@cerulea.io</p>
    <p class="text-sm text-muted-foreground leading-relaxed mt-2">Caerulean Bytechains Private Limited<br/>cerulea.io</p>
  </div>
</div>
`

const privacyHtml = `
<div class="space-y-8">
  <div>
    <h3 class="text-sm font-bold text-foreground mb-2">1. Who we are</h3>
    <p class="text-sm text-muted-foreground leading-relaxed">Caerulean Bytechains Private Limited ("we", "our", "Cerulea") operates the website at cerulea.io. We are incorporated in India. For privacy-related queries, contact us at support@cerulea.io.</p>
  </div>
  <div>
    <h3 class="text-sm font-bold text-foreground mb-2">2. Information we collect</h3>
    <p class="text-sm text-muted-foreground leading-relaxed mb-2">We collect two categories of information:</p>
    <p class="text-sm text-muted-foreground leading-relaxed"><strong>Contact information:</strong> When you submit the contact form on this website, we collect your name, work email address, company or organisation name, and message content. This information is provided voluntarily by you.</p>
    <p class="text-sm text-muted-foreground leading-relaxed mt-2"><strong>Usage and technical data:</strong> When you visit cerulea.io, we automatically collect information about your visit using the analytics tools described in Section 4. This includes pages visited, time on page, scroll depth, clicks and interactions, your general geographic region (derived from IP address, not stored precisely), device type (desktop, mobile, tablet), operating system, browser type, screen resolution, and the website or search engine that referred you to us.</p>
  </div>
  <div>
    <h3 class="text-sm font-bold text-foreground mb-2">3. How we use your information</h3>
    <p class="text-sm text-muted-foreground leading-relaxed">We use contact information to respond to your enquiry, provide you with information about Cerulea products and services, and follow up on deployment or pilot conversations you initiate.</p>
    <p class="text-sm text-muted-foreground leading-relaxed mt-2">We use usage data to understand how visitors navigate the site, which pages and content are most valuable, where users encounter friction, and how to improve the website and product messaging. We do not sell your information to third parties under any circumstances.</p>
  </div>
  <div>
    <h3 class="text-sm font-bold text-foreground mb-2">4. Analytics and tracking tools</h3>
    <p class="text-sm text-muted-foreground leading-relaxed">We use the following third-party services to collect and analyse website usage data. By using this website, you consent to data being processed by these services under their respective privacy policies.</p>
    <p class="text-sm text-muted-foreground leading-relaxed mt-2"><strong>PostHog (PostHog, Inc.):</strong> We use PostHog for analytics including page views, click tracking, custom events, and session recordings. Session recordings capture mouse movements, scrolls, and clicks within your browser session to help us understand user experience. PostHog derives geographic data (country, city, region) from your IP address. Your IP address is not stored in full. Data may be processed on servers in the United States. Privacy policy: posthog.com/privacy.</p>
    <p class="text-sm text-muted-foreground leading-relaxed mt-2"><strong>Microsoft Clarity (Microsoft Corporation):</strong> We use Microsoft Clarity for heatmap visualisation, scroll maps, and session recordings. Clarity captures how users interact with our pages including mouse movements, clicks, and scroll behaviour. Data may be processed by Microsoft on servers in the United States. Privacy policy: privacy.microsoft.com.</p>
    <p class="text-sm text-muted-foreground leading-relaxed mt-2">If you wish to opt out of session recording, you may do so by disabling JavaScript in your browser, using a browser extension that blocks analytics scripts, or contacting us to opt out by email.</p>
  </div>
  <div>
    <h3 class="text-sm font-bold text-foreground mb-2">5. Infrastructure and data processors</h3>
    <p class="text-sm text-muted-foreground leading-relaxed">We work with the following service providers who process data on our behalf:</p>
    <p class="text-sm text-muted-foreground leading-relaxed mt-2"><strong>Vercel Inc.:</strong> Our website is hosted on Vercel's infrastructure. Vercel may process server logs containing IP addresses for security and reliability purposes.</p>
    <p class="text-sm text-muted-foreground leading-relaxed mt-2"><strong>Supabase Inc.:</strong> We use Supabase to store blog content and manage authenticated access to admin features. Contact form submissions are not stored in Supabase.</p>
    <p class="text-sm text-muted-foreground leading-relaxed mt-2"><strong>Resend Inc.:</strong> When you submit our contact form, your name, email, company, and message are transmitted via Resend's email delivery service to our team. Resend processes this information to deliver the email and retains send logs for a limited period per their data retention policy.</p>
    <p class="text-sm text-muted-foreground leading-relaxed mt-2">All processors are bound by data processing agreements and are required to implement appropriate security measures.</p>
  </div>
  <div>
    <h3 class="text-sm font-bold text-foreground mb-2">6. Cookies and local storage</h3>
    <p class="text-sm text-muted-foreground leading-relaxed">PostHog and Clarity use cookies and browser local storage to maintain anonymous visitor identifiers and session continuity. These are not used to serve advertising.</p>
    <p class="text-sm text-muted-foreground leading-relaxed mt-2">We do not use advertising cookies, retargeting pixels, or cross-site tracking technology. If you block all cookies, the website will continue to function; analytics data will simply not be collected from your session.</p>
  </div>
  <div>
    <h3 class="text-sm font-bold text-foreground mb-2">7. Data retention</h3>
    <p class="text-sm text-muted-foreground leading-relaxed"><strong>Contact form data:</strong> Emails received via the contact form are retained in our inbox for as long as required for business correspondence.</p>
    <p class="text-sm text-muted-foreground leading-relaxed mt-2"><strong>Analytics data:</strong> PostHog retains event data per its platform retention settings (default 1 year). Clarity retains recordings for 13 months.</p>
    <p class="text-sm text-muted-foreground leading-relaxed mt-2">We periodically review and purge data that is no longer required.</p>
  </div>
  <div>
    <h3 class="text-sm font-bold text-foreground mb-2">8. Your rights</h3>
    <p class="text-sm text-muted-foreground leading-relaxed">You have the right to request access to the personal data we hold about you, request correction of inaccurate data, request deletion of your data where there is no legitimate basis for continued processing, and object to processing where we rely on legitimate interests.</p>
    <p class="text-sm text-muted-foreground leading-relaxed mt-2">To exercise any of these rights, email us at support@cerulea.io with subject line "Privacy Request". We will respond within 30 days. We do not charge a fee for reasonable requests.</p>
    <p class="text-sm text-muted-foreground leading-relaxed mt-2">If you are located in the European Economic Area, you have rights under GDPR. If you are in India, your rights are governed by the Information Technology Act 2000 and applicable rules.</p>
  </div>
  <div>
    <h3 class="text-sm font-bold text-foreground mb-2">9. Children</h3>
    <p class="text-sm text-muted-foreground leading-relaxed">This website is not directed at individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe a minor has submitted information to us, contact us and we will delete it promptly.</p>
  </div>
  <div>
    <h3 class="text-sm font-bold text-foreground mb-2">10. Changes to this policy</h3>
    <p class="text-sm text-muted-foreground leading-relaxed">We may update this policy to reflect changes in our practices or applicable law. The "Last updated" date at the top of this page will reflect the revision date. Material changes will be reflected in an updated date. We encourage you to review this policy periodically.</p>
  </div>
  <div>
    <h3 class="text-sm font-bold text-foreground mb-2">11. Contact</h3>
    <p class="text-sm text-muted-foreground leading-relaxed">For all privacy-related questions: support@cerulea.io</p>
    <p class="text-sm text-muted-foreground leading-relaxed mt-2">Caerulean Bytechains Private Limited<br/>cerulea.io</p>
  </div>
</div>
`
