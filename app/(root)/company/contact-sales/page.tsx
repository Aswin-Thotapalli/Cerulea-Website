"use client"

import React, { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Mail, Clock, ArrowRight, CheckCircle2 } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldLabel, FieldError } from "@/components/ui/field"
import SectionHeader from "@/components/SectionHeader"
import { Button } from "@/components/animate-ui/primitives/buttons/button"

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required."),
  workEmail: z.string().email("Enter a valid work email."),
  phoneNumber: z.string().optional(),
  company: z.string().optional(),
  role: z.string().optional(),
  projectDescription: z.string().min(10, "Project description is required."),
  projectRequirements: z.string().min(10, "Project requirements are required."),
})

type ContactSalesFormValues = z.infer<typeof formSchema>

export default function ContactSalesPage() {
  const form = useForm<ContactSalesFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      workEmail: "",
      phoneNumber: "",
      company: "",
      role: "",
      projectDescription: "",
      projectRequirements: "",
    },
  })

  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")

  async function onSubmit(values: ContactSalesFormValues) {
    setSubmitError("")
    try {
      const res = await fetch("/api/contact-sales", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.fullName,
          email: values.workEmail,
          phone: values.phoneNumber,
          company: values.company,
          role: values.role,
          projectDescription: values.projectDescription,
          projectRequirement: values.projectRequirements,
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
          : "Failed to send. Please email us directly at sales@cbytechains.com"
      )
    }
  }

  return (
    <div className="container mx-auto overflow-hidden ">
      <section className="bg-card" data-aos="fade-down">
        <SectionHeader
          segments={[{ label: "SALES ENQUIRY" }]}
          headline1="Talk to our sales team."
          description="Tell us about your project. We'll map your requirements to the right Cerulea architecture and reach out within one business day."
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
                  Enquiry Received
                </h2>
                <p className="text-muted-foreground">
                  Thank you for reaching out. A member of our sales team will
                  review your project and be in touch within one business day.
                </p>
                <Button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 flex cursor-pointer items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-foreground hover:bg-accent"
                >
                  Submit another enquiry
                </Button>
              </div>
            ) : (
              <>
            <h2 className="mb-8 font-title text-2xl font-bold text-foreground">
              Your contact details
            </h2>

            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <Field data-invalid={!!form.formState.errors.fullName}>
                  <FieldLabel
                    htmlFor="fullName"
                    className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase flex items-center gap-1"
                  >
                    Full Name <span className="text-primary text-[10px]">◆</span>
                  </FieldLabel>
                  <Input
                    id="fullName"
                    placeholder="Full Name"
                    {...form.register("fullName")}
                  />
                  {form.formState.errors.fullName && (
                    <FieldError errors={[form.formState.errors.fullName]} />
                  )}
                </Field>

                <Field data-invalid={!!form.formState.errors.workEmail}>
                  <FieldLabel
                    htmlFor="workEmail"
                    className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase flex items-center gap-1"
                  >
                    Work Email <span className="text-primary text-[10px]">◆</span>
                  </FieldLabel>
                  <Input
                    id="workEmail"
                    type="email"
                    placeholder="Work Email"
                    {...form.register("workEmail")}
                  />
                  {form.formState.errors.workEmail && (
                    <FieldError errors={[form.formState.errors.workEmail]} />
                  )}
                </Field>

                <Field>
                  <FieldLabel
                    htmlFor="phoneNumber"
                    className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase"
                  >
                    Phone Number
                  </FieldLabel>
                  <Input
                    id="phoneNumber"
                    placeholder="Phone Number"
                    {...form.register("phoneNumber")}
                  />
                </Field>

                <Field>
                  <FieldLabel
                    htmlFor="company"
                    className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase"
                  >
                    Company / Organization
                  </FieldLabel>
                  <Input
                    id="company"
                    placeholder="Company / Organization"
                    {...form.register("company")}
                  />
                </Field>
              </div>

              <Field>
                <FieldLabel
                  htmlFor="role"
                  className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase"
                >
                  Your Role / Title
                </FieldLabel>
                <Input
                  id="role"
                  placeholder="CTO, Head of Engineering, Procurement Lead..."
                  {...form.register("role")}
                />
              </Field>

              <div className="pt-6 pb-2">
                <h2 className="font-title text-lg font-bold text-foreground">
                  About your project
                </h2>
              </div>

              <Field data-invalid={!!form.formState.errors.projectDescription}>
                <FieldLabel
                  htmlFor="projectDescription"
                  className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase flex items-center gap-1"
                >
                  Project Description <span className="text-primary text-[10px]">◆</span>
                </FieldLabel>
                <Textarea
                  id="projectDescription"
                  placeholder="Briefly describe what you are building, the industry, use case, and scale."
                  rows={4}
                  {...form.register("projectDescription")}
                />
                {form.formState.errors.projectDescription && (
                  <FieldError errors={[form.formState.errors.projectDescription]} />
                )}
              </Field>

              <Field data-invalid={!!form.formState.errors.projectRequirements}>
                <FieldLabel
                  htmlFor="projectRequirements"
                  className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase flex items-center gap-1"
                >
                  Project Requirements <span className="text-primary text-[10px]">◆</span>
                </FieldLabel>
                <Textarea
                  id="projectRequirements"
                  placeholder="Describe your specific technical or business requirements, deployment environment, compliance needs, integrations, timeline, etc."
                  rows={4}
                  {...form.register("projectRequirements")}
                />
                {form.formState.errors.projectRequirements && (
                  <FieldError errors={[form.formState.errors.projectRequirements]} />
                )}
              </Field>

              <div className="flex items-center justify-between pt-6 mt-8">
                <p className="text-[11px] text-muted-foreground">
                  Fields marked <span className="text-primary">◆</span> are required.
                </p>
                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="flex cursor-pointer items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-foreground/90 transition-colors disabled:opacity-60"
                >
                  {form.formState.isSubmitting ? "Sending..." : "Send Enquiry"}
                  <ArrowRight className="size-4" />
                </Button>
              </div>

              {submitError && (
                <p className="text-sm text-destructive">{submitError}</p>
              )}
            </form>
              </>
            )}
          </div>

          {/* Right: info cards */}
          <div className="space-y-4" data-aos="fade-left" data-aos-delay="200">
            <div className="rounded-lg border border-border/35 bg-card p-6">
              <h3 className="mb-6 text-sm font-bold text-foreground">
                What happens next
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded bg-foreground text-xs font-medium text-background">
                    01
                  </div>
                  <div>
                    <h4 className="text-[13px] font-semibold text-foreground">We review your submission</h4>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      Our sales team reads every enquiry personally to understand your project.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded bg-foreground text-xs font-medium text-background">
                    02
                  </div>
                  <div>
                    <h4 className="text-[13px] font-semibold text-foreground">We reach out within 1 business day</h4>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      You&apos;ll hear from us via email or phone with initial questions or next steps.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded bg-foreground text-xs font-medium text-background">
                    03
                  </div>
                  <div>
                    <h4 className="text-[13px] font-semibold text-foreground">Technical discovery call</h4>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      A focused session to map your requirements to the right Cerulea architecture.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border/35 bg-card p-5 transition-shadow duration-200 hover:border-primary/50 flex flex-col gap-3">
              <div className="flex size-8 items-center justify-center rounded bg-blue-100/50">
                <Mail className="size-4 text-blue-500" />
              </div>
              <div>
                <h3 className="text-[13px] font-semibold text-foreground">
                  Prefer email?
                </h3>
                <a
                  href="mailto:sales@cbytechains.com"
                  className="mt-1 inline-block font-mono text-xs text-blue-500 hover:underline"
                >
                  sales@cbytechains.com
                </a>
              </div>
            </div>

            <div className="rounded-lg border border-border/35 bg-card p-5 transition-shadow duration-200 hover:border-primary/50 flex flex-col gap-3">
              <div className="flex size-8 items-center justify-center rounded bg-yellow-100/50">
                <Clock className="size-4 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-[13px] font-semibold text-foreground">
                  Response within 1 business day
                </h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  A focused session to map your requirements to the right Cerulea architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
