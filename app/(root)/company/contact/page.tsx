"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {
  Mail,
  Clock,
  MapPin,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
} from "lucide-react"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldLabel, FieldError } from "@/components/ui/field"
import SectionHeader from "@/components/SectionHeader"
import { Button } from "@/components/animate-ui/primitives/buttons/button"

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required."),
  workEmail: z.string().email("Enter a valid work email."),
  company: z.string().optional(),
  message: z.string().min(10, "Tell us a bit more about your project."),
})

type ContactFormValues = z.infer<typeof formSchema>

const infoCards = [
  {
    icon: Mail,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Email",
    description:
      "For sales, enterprise inquiries, and partnership discussions.",
    link: {
      label: "contact@cbytechains.com",
      href: "mailto:contact@cbytechains.com",
    },
  },
  {
    icon: Clock,
    iconBg: "bg-primary/15",
    iconColor: "text-primary",
    title: "Response Time",
    description:
      "We typically respond within one business day. Enterprise inquiries may receive same-day response.",
  },
  {
    icon: MapPin,
    iconBg: "bg-extra-1/15",
    iconColor: "text-extra-1",
    title: "Registered Office",
    description: "Caerulean Bytechains Private Limited\nIndia",
  },
]

const resourceLinks = [
  { label: "Read the documentation", href: "/developers/docs/foundation" },
  { label: "See pricing plans", href: "/pricing" },
  { label: "About Caerulean Bytechains", href: "/company/about" },
]

export function ContactSection() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { fullName: "", workEmail: "", company: "", message: "" },
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")

  async function onSubmit(values: ContactFormValues) {
    setSubmitError("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.fullName,
          email: values.workEmail,
          company: values.company,
          message: values.message,
        }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || "Something went wrong. Please try again.")
      }
      setSubmitted(true)
      form.reset()
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Failed to send. Please email us directly."
      )
    }
  }

  return (
    <div className="container mx-auto overflow-hidden px-4 py-8 md:px-8 md:py-12">
      <section className="bg-card" data-aos="fade-down">
        <SectionHeader
          segments={[{ label: "Cerulea / Contact" }]}
          headline1={"Get in touch."}
          description={
            "Whether you are exploring private chain deployments, evaluating Cerulea Studio, or need technical support, our team is ready to assist you."
          }
        />
      </section>

      <section className="mt-12 md:mt-16">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
          {/* Left: form */}
          <div
            className="h-fit rounded border border-border bg-card p-6 md:p-8"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            {submitted ? (
              <div className="flex flex-col items-start gap-4 py-6">
                <div className="flex size-12 items-center justify-center rounded-full bg-chart-2/15 text-chart-2">
                  <CheckCircle2 className="size-6" />
                </div>
                <h2 className="font-title text-2xl font-bold text-foreground">
                  Message Received
                </h2>
                <p className="text-muted-foreground">
                  Thank you for reaching out. A member of the Cerulea team will get
                  back to you shortly.
                </p>
                <Button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 flex cursor-pointer items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-foreground hover:bg-accent"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <>
            <h2 className="font-title text-2xl font-bold text-foreground">
              Send us a message
            </h2>

            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-8 space-y-6"
            >
              <div className="grid gap-6 bg-card sm:grid-cols-2">
                <Field data-invalid={!!form.formState.errors.fullName}>
                  <FieldLabel
                    htmlFor="fullName"
                    className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase"
                  >
                    Full Name <span className="text-primary">*</span>
                  </FieldLabel>
                  <Input
                    id="fullName"
                    placeholder="Aswin Thotapalli"
                    {...form.register("fullName")}
                  />
                  {form.formState.errors.fullName && (
                    <FieldError errors={[form.formState.errors.fullName]} />
                  )}
                </Field>

                <Field data-invalid={!!form.formState.errors.workEmail}>
                  <FieldLabel
                    htmlFor="workEmail"
                    className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase"
                  >
                    Work Email <span className="text-primary">*</span>
                  </FieldLabel>
                  <Input
                    id="workEmail"
                    type="email"
                    placeholder="you@company.com"
                    {...form.register("workEmail")}
                  />
                  {form.formState.errors.workEmail && (
                    <FieldError errors={[form.formState.errors.workEmail]} />
                  )}
                </Field>
              </div>

              <Field>
                <FieldLabel
                  htmlFor="company"
                  className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase"
                >
                  Company / Organization
                </FieldLabel>
                <Input
                  id="company"
                  placeholder="Acme Corp, Government of India, Independent..."
                  {...form.register("company")}
                />
              </Field>

              <Field data-invalid={!!form.formState.errors.message}>
                <FieldLabel
                  htmlFor="message"
                  className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase"
                >
                  How can we help? <span className="text-primary">*</span>
                </FieldLabel>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project, your deployment goals, or the challenge you are trying to solve..."
                  rows={6}
                  {...form.register("message")}
                />
                {form.formState.errors.message && (
                  <FieldError errors={[form.formState.errors.message]} />
                )}
              </Field>

              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="flex cursor-pointer items-center gap-2 rounded-full bg-foreground px-6 py-3 text-background hover:bg-foreground/90 disabled:opacity-60"
              >
                {form.formState.isSubmitting ? "Sending..." : "Submit Message"}
                <ArrowRight className="size-4" />
              </Button>

              {submitError && (
                <p className="text-sm text-destructive">{submitError}</p>
              )}
            </form>
              </>
            )}
          </div>

          {/* Right: info cards */}
          <div className="space-y-4" data-aos="fade-left" data-aos-delay="200">
            {infoCards.map((card) => (
              <div
                key={card.title}
                className="rounded-lg border border-border/35 bg-card p-5 transition-shadow duration-200 hover:border-primary/50"
              >
                <div
                  className={`mb-3 flex size-9 items-center justify-center rounded-lg ${card.iconBg}`}
                >
                  <card.icon className={`size-4 ${card.iconColor}`} />
                </div>
                <h3 className="text-sm font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-1 text-sm whitespace-pre-line text-muted-foreground">
                  {card.description}
                </p>
                {card.link && (
                  <a
                    href={card.link.href}
                    className="mt-2 inline-block text-sm text-blue-600 hover:underline"
                  >
                    {card.link.label}
                  </a>
                )}
              </div>
            ))}

            <div className="mt-10 border-t border-dashed pt-6">
              <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                Before you write
              </p>
              <ul className="mt-3 space-y-1">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="flex items-center justify-between rounded-md px-1 py-2 text-sm text-foreground hover:text-primary"
                    >
                      {link.label}
                      <ChevronRight className="size-4 text-muted-foreground" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactSection
