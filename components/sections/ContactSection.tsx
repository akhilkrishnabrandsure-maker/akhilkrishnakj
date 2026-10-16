"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Mail,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { site } from "@/lib/site";
import { contactSchema, type ContactFormData } from "@/lib/schema";
import { submitContactForm } from "@/app/actions/contact";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialIcon } from "@/components/ui/BrandIcons";
import { Reveal } from "@/components/animations/Reveal";

export function ContactSection() {
  const [serverStatus, setServerStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      projectType: "seo",
      budget: "1k-3k",
      website: "", // Honeypot
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setServerStatus(null);
    try {
      const res = await submitContactForm(data);
      setServerStatus(res);
      if (res.success) {
        reset();
      }
    } catch {
      setServerStatus({
        success: false,
        message: "An unexpected error occurred. Please reach out via email or LinkedIn directly.",
      });
    }
  };

  return (
    <section id="contact" className="section bg-[#0F1118]/70 relative overflow-hidden">
      {/* Background ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 -top-24 -translate-x-1/2 size-[600px] rounded-full bg-lime/5 blur-[160px]"
      />

      <div className="container-page relative z-10">
        <SectionHeading
          index="08"
          eyebrow="Initiate Collaboration"
          title="Have a Project in Mind?"
          description="Let's discuss how SEO, development, and automation can help move your business forward."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Communication Channels (Left Col) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-white/[0.08] bg-[#141720] p-6 lg:p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-fg">Direct Reach</h3>
                  <p className="text-xs text-muted leading-relaxed mt-1">
                    Prefer direct messaging? Reach out through any of these verified channels:
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Email */}
                  {site.email ? (
                    <a
                      href={`mailto:${site.email}`}
                      className="flex items-center gap-3.5 p-3.5 rounded-xl border border-white/[0.06] bg-[#0F1118] text-sm text-fg hover:border-lime/30 hover:text-lime transition-all group"
                    >
                      <div className="size-10 rounded-lg bg-lime/10 border border-lime/20 flex items-center justify-center text-lime group-hover:scale-105 transition-transform">
                        <Mail className="size-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-mono text-muted uppercase">Email</p>
                        <p className="font-semibold">{site.email}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="p-3.5 rounded-xl border border-dashed border-white/10 bg-[#0F1118] text-xs font-mono text-muted">
                      Direct email can be configured in <code className="text-lime">lib/site.ts</code>
                    </div>
                  )}

                  {/* Configured Social Profiles */}
                  {site.social.map((soc) => {
                    if (!soc.href) return null;
                    return (
                      <a
                        key={soc.id}
                        href={soc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3.5 rounded-xl border border-white/[0.06] bg-[#0F1118] text-sm text-fg hover:border-lime/30 hover:text-lime transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="size-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-muted group-hover:text-lime group-hover:border-lime/30 transition-colors">
                            <SocialIcon id={soc.id} className="size-5" />
                          </div>
                          <div>
                            <p className="text-[10px] font-mono text-muted uppercase">Profile</p>
                            <p className="font-semibold">{soc.label}</p>
                          </div>
                        </div>
                        <ArrowUpRight className="size-4 text-muted group-hover:text-lime transition-colors" />
                      </a>
                    );
                  })}
                </div>

                {/* Response SLA Note */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-muted">
                  <span className="size-2 rounded-full bg-emerald-400" />
                  <span>Typically responds within 24–48 business hours</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Contact Inquiry Form (Right Col) */}
          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-white/[0.08] bg-[#141720] p-6 lg:p-8 backdrop-blur-md">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  {/* Honeypot anti-spam field */}
                  <input
                    type="text"
                    {...register("website")}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                  />

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-fg mb-1.5">
                        Your Name <span className="text-lime">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="e.g. Sarah Jenkins"
                        {...register("name")}
                        className={`w-full rounded-xl border bg-[#0F1118] px-4 py-2.5 text-sm text-fg placeholder:text-muted/50 focus:outline-none transition-colors ${
                          errors.name
                            ? "border-rose-500/80 focus:border-rose-500"
                            : "border-white/[0.1] focus:border-lime"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                          <AlertCircle className="size-3" />
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-fg mb-1.5">
                        Email Address <span className="text-lime">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        {...register("email")}
                        className={`w-full rounded-xl border bg-[#0F1118] px-4 py-2.5 text-sm text-fg placeholder:text-muted/50 focus:outline-none transition-colors ${
                          errors.email
                            ? "border-rose-500/80 focus:border-rose-500"
                            : "border-white/[0.1] focus:border-lime"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                          <AlertCircle className="size-3" />
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Project Type & Budget Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Project Type */}
                    <div>
                      <label htmlFor="projectType" className="block text-xs font-mono text-fg mb-1.5">
                        Project Focus <span className="text-lime">*</span>
                      </label>
                      <select
                        id="projectType"
                        {...register("projectType")}
                        className="w-full rounded-xl border border-white/[0.1] bg-[#0F1118] px-4 py-2.5 text-sm text-fg focus:border-lime focus:outline-none transition-colors"
                      >
                        <option value="seo">SEO Audit &amp; Strategy</option>
                        <option value="web-dev">Web Development (Next.js / React)</option>
                        <option value="automation">AI &amp; n8n Automation</option>
                        <option value="full-growth-system">Full Digital Growth System</option>
                        <option value="consulting">Technical Consulting</option>
                        <option value="other">Other Scope</option>
                      </select>
                    </div>

                    {/* Budget Range (Optional) */}
                    <div>
                      <label htmlFor="budget" className="block text-xs font-mono text-fg mb-1.5">
                        Budget Range <span className="text-muted">(Optional)</span>
                      </label>
                      <select
                        id="budget"
                        {...register("budget")}
                        className="w-full rounded-xl border border-white/[0.1] bg-[#0F1118] px-4 py-2.5 text-sm text-fg focus:border-lime focus:outline-none transition-colors"
                      >
                        <option value="under-1k">&lt; $1,000</option>
                        <option value="1k-3k">$1,000 – $3,000</option>
                        <option value="3k-5k">$3,000 – $5,000</option>
                        <option value="5k-plus">$5,000+</option>
                        <option value="not-sure">To be determined</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-fg mb-1.5">
                      Project Details <span className="text-lime">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Share a brief overview of your current website, objectives, or workflow bottleneck..."
                      {...register("message")}
                      className={`w-full rounded-xl border bg-[#0F1118] p-4 text-sm text-fg placeholder:text-muted/50 focus:outline-none transition-colors resize-y ${
                        errors.message
                          ? "border-rose-500/80 focus:border-rose-500"
                          : "border-white/[0.1] focus:border-lime"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle className="size-3" />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Server status alert */}
                  {serverStatus && (
                    <div
                      className={`p-4 rounded-xl border text-xs font-mono flex items-start gap-3 ${
                        serverStatus.success
                          ? "border-lime/40 bg-lime/10 text-lime"
                          : "border-rose-500/40 bg-rose-500/10 text-rose-300"
                      }`}
                    >
                      {serverStatus.success ? (
                        <CheckCircle2 className="size-4 shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="size-4 shrink-0 mt-0.5" />
                      )}
                      <span>{serverStatus.message}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-lime py-3.5 text-sm font-bold text-[#0b0d06] shadow-[0_0_20px_rgba(183,243,74,0.35)] hover:bg-[#c6f86a] disabled:opacity-60 transition-all active:scale-[0.99] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        <span>Validating &amp; Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="size-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
