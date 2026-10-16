import {
  Code2,
  Search,
  Layout,
  Cpu,
  BarChart2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Compass,
} from "lucide-react";
import { site } from "@/lib/site";
import { Monogram } from "@/components/ui/Monogram";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { ButtonLink } from "@/components/ui/Button";

const pillars = [
  {
    icon: Code2,
    title: "Technical Website Mechanics",
    description:
      "Deep understanding of DOM rendering, crawl budgets, server response times, and Core Web Vitals that impact both robots and users.",
    accent: "lime" as const,
  },
  {
    icon: Search,
    title: "Organic Discoverability",
    description:
      "Search-first architecture from day one: structured data, logical URL hierarchies, internal link equity, and intent-focused keyword mapping.",
    accent: "cyan" as const,
  },
  {
    icon: Layout,
    title: "User-Centric Experiences",
    description:
      "Clean, modern UI designed with responsive layouts, accessible typography, fast load times, and clear conversion paths.",
    accent: "lime" as const,
  },
  {
    icon: Cpu,
    title: "Intelligent Automation",
    description:
      "Eliminating manual data wrangling with n8n pipelines, webhooks, and AI-assisted workflows paired with mandatory human review.",
    accent: "cyan" as const,
  },
  {
    icon: BarChart2,
    title: "Data-Guided Decisions",
    description:
      "Evaluating outcomes through Google Search Console queries, GA4 conversion events, and page-level engagement metrics.",
    accent: "lime" as const,
  },
  {
    icon: Sparkles,
    title: "Continuous Technology Adaptation",
    description:
      "Actively adopting modern web developments, AI search engine evolutions, and headless architectures to keep client platforms ahead.",
    accent: "cyan" as const,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section bg-[#08090D] relative overflow-hidden">
      {/* Background ambient accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2 size-96 rounded-full bg-cyan/5 blur-[120px]"
      />

      <div className="container-page relative z-10">
        <SectionHeading
          index="01"
          eyebrow="About Akhil Krishna"
          title="More Than Just Rankings. I Build Digital Growth Systems."
          description="I bridge the gap between technical web engineering, organic search visibility, and workflow automation to create sustainable business outcomes."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Portrait Mark & Narrative */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-white/[0.08] bg-[#0F1118] p-6 lg:p-8 flex flex-col gap-6">
                {/* Elegant Initials Visual */}
                <div className="flex items-center gap-4">
                  <Monogram size="lg" className="border-lime/40" />
                  <div>
                    <h3 className="text-xl font-bold text-fg">{site.name}</h3>
                    <p className="text-xs font-mono text-lime">{site.headline}</p>
                    <p className="text-xs text-muted mt-0.5">Kerala, India · Remote Worldwide</p>
                  </div>
                </div>

                <div className="space-y-4 text-sm leading-relaxed text-muted">
                  <p>
                    Most websites struggle not because their design is poor, but because
                    they are built in isolation from how search engines discover content
                    and how visitors actually convert.
                  </p>
                  <p>
                    My background covers modern frontend development (React, Next.js,
                    modern JavaScript) alongside strategic technical SEO and workflow
                    automation. When you work with me, search considerations aren’t
                    tacked on at the end—they are engineered into the codebase.
                  </p>
                  <p>
                    Whether auditing an existing ecommerce presence, building a new
                    company website, or automating repetitive competitor research with n8n,
                    my focus is always on clarity, speed, and real commercial utility.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs font-mono text-muted uppercase">Approach</span>
                    <span className="text-sm font-semibold text-fg">Evidence &amp; Code</span>
                  </div>
                  <ButtonLink href="/#contact" variant="secondary" size="md">
                    Discuss a Project
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 6 Core Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={0.1 + idx * 0.05}>
                  <div className="h-full rounded-2xl border border-white/[0.08] bg-[#141720]/80 p-5 flex flex-col justify-between card-interactive group">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className={`size-9 rounded-xl flex items-center justify-center border ${
                            pillar.accent === "lime"
                              ? "border-lime/30 bg-lime/10 text-lime"
                              : "border-cyan/30 bg-cyan/10 text-cyan"
                          }`}
                        >
                          <Icon className="size-4.5" />
                        </div>
                        <span className="font-mono text-[10px] text-muted">0{idx + 1}</span>
                      </div>
                      <h4 className="text-base font-semibold text-fg mb-2 group-hover:text-lime transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-muted leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
