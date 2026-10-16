"use client";

import Link from "next/link";
import {
  Search,
  Code2,
  Workflow,
  ArrowRight,
  TrendingUp,
  FileCode2,
  CheckCircle2,
  Sparkles,
  Zap,
  Globe,
  FileText,
} from "lucide-react";
import { site } from "@/lib/site";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      {/* Background radial glow & grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[750px] rounded-full bg-lime/[0.04] blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 right-10 h-[400px] w-[500px] rounded-full bg-cyan/[0.035] blur-[120px]"
      />
      <div aria-hidden className="absolute inset-0 bg-grid opacity-70 pointer-events-none" />

      <div className="container-page relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 max-w-2xl">
            {/* Availability & Intro Label */}
            <Reveal delay={0.05}>
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/[0.06] px-3.5 py-1 text-lime">
                  <span className="size-1.5 rounded-full bg-lime animate-pulse" />
                  SEO SPECIALIST · WEB DEVELOPER · AI AUTOMATION
                </span>

                {site.availability.enabled && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-[#141720] px-3 py-1 font-mono text-[11px] text-muted">
                    <span className="size-1.5 rounded-full bg-emerald-400" />
                    {site.availability.label}
                  </span>
                )}
              </div>
            </Reveal>

            {/* Main Headline */}
            <Reveal delay={0.15}>
              <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-bold tracking-tight text-fg leading-[1.08]">
                Turning Search Visibility Into{" "}
                <span className="text-gradient">Digital Growth.</span>
              </h1>
            </Reveal>

            {/* Supporting Paragraph */}
            <Reveal delay={0.25}>
              <p className="text-lg sm:text-xl text-muted leading-relaxed font-normal">
                I combine SEO, web development, and intelligent automation to help
                businesses improve visibility, build better digital experiences, and
                streamline their workflows.
              </p>
            </Reveal>

            {/* CTA Group */}
            <Reveal delay={0.35}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <ButtonLink href="/#projects" variant="primary" size="lg" arrow>
                  Explore My Work
                </ButtonLink>
                <ButtonLink href="/#contact" variant="secondary" size="lg">
                  Let&apos;s Work Together
                </ButtonLink>

                {site.resumeUrl && (
                  <a
                    href={site.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-lime transition-colors ml-2 py-2"
                  >
                    <FileText className="size-4" />
                    <span>View Resume</span>
                  </a>
                )}
              </div>
            </Reveal>

            {/* Micro Feature Indicators */}
            <Reveal delay={0.45}>
              <div className="pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-4 text-xs font-mono text-muted">
                <div className="flex flex-col gap-1">
                  <span className="text-fg font-semibold text-sm flex items-center gap-1.5">
                    <Search className="size-3.5 text-lime" /> Organic SEO
                  </span>
                  <span>Audits &amp; intent mapping</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-fg font-semibold text-sm flex items-center gap-1.5">
                    <Code2 className="size-3.5 text-cyan" /> Next.js &amp; React
                  </span>
                  <span>Fast, accessible builds</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-fg font-semibold text-sm flex items-center gap-1.5">
                    <Workflow className="size-3.5 text-lime" /> n8n Workflows
                  </span>
                  <span>Automated research &amp; data</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Digital Growth System Visual */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <Reveal delay={0.25} className="w-full max-w-[500px]">
              <div className="relative rounded-2xl border border-white/[0.1] bg-[#0F1118]/80 p-5 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
                {/* Visual Header / Window bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="size-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="size-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="size-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="text-xs font-mono text-muted ml-2">growth-system.tsx</span>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded bg-lime/10 px-2 py-0.5 text-[10px] font-mono text-lime border border-lime/20">
                    <Sparkles className="size-2.5" /> LIVE ARCHITECTURE
                  </span>
                </div>

                {/* Growth Visual Body */}
                <div className="space-y-4 pt-4">
                  {/* Layer 1: SEO Performance Panel */}
                  <div className="rounded-xl border border-white/[0.08] bg-[#141720] p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-lime/10 text-lime border border-lime/20">
                          <TrendingUp className="size-4" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-fg">Organic Search Growth</p>
                          <p className="text-[10px] font-mono text-muted">Indexation &amp; Impressions</p>
                        </div>
                      </div>
                      <span className="font-mono text-xs text-lime font-semibold">+185% Target</span>
                    </div>

                    {/* SVG Sparkline Graph */}
                    <div className="h-16 w-full pt-1">
                      <svg viewBox="0 0 320 60" className="w-full h-full overflow-visible">
                        <defs>
                          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#B7F34A" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#B7F34A" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,50 Q40,48 80,42 T160,32 T240,18 T320,6 L320,60 L0,60 Z"
                          fill="url(#chartGrad)"
                        />
                        <path
                          d="M0,50 Q40,48 80,42 T160,32 T240,18 T320,6"
                          fill="none"
                          stroke="#B7F34A"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        {/* Point highlights */}
                        <circle cx="80" cy="42" r="3" fill="#141720" stroke="#B7F34A" strokeWidth="2" />
                        <circle cx="160" cy="32" r="3" fill="#141720" stroke="#B7F34A" strokeWidth="2" />
                        <circle cx="240" cy="18" r="3" fill="#141720" stroke="#B7F34A" strokeWidth="2" />
                        <circle cx="320" cy="6" r="4" fill="#B7F34A" />
                      </svg>
                    </div>
                  </div>

                  {/* Layer 2: Code & Automation Nodes Pipeline */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Code Editor Mini Card */}
                    <div className="rounded-xl border border-white/[0.08] bg-[#141720] p-3">
                      <div className="flex items-center gap-1.5 mb-2 text-cyan">
                        <FileCode2 className="size-3.5" />
                        <span className="text-[11px] font-mono font-medium">Next.js App</span>
                      </div>
                      <div className="space-y-1 font-mono text-[10px] text-muted">
                        <p className="text-emerald-400">export async metadata</p>
                        <p className="text-fg/80">schema: JSON-LD</p>
                        <p className="text-cyan">status: 100% Core Vitals</p>
                      </div>
                    </div>

                    {/* Automation Flow Mini Card */}
                    <div className="rounded-xl border border-white/[0.08] bg-[#141720] p-3">
                      <div className="flex items-center gap-1.5 mb-2 text-lime">
                        <Workflow className="size-3.5" />
                        <span className="text-[11px] font-mono font-medium">n8n Pipeline</span>
                      </div>
                      <div className="space-y-1 font-mono text-[10px] text-muted">
                        <p className="flex items-center gap-1 text-fg/90">
                          <CheckCircle2 className="size-2.5 text-lime" /> SERP Extract
                        </p>
                        <p className="flex items-center gap-1 text-fg/90">
                          <CheckCircle2 className="size-2.5 text-lime" /> AI Intent Cluster
                        </p>
                        <p className="flex items-center gap-1 text-lime font-semibold">
                          <CheckCircle2 className="size-2.5 text-lime" /> Human Review
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Layer 3: Connected Nodes Flow Ribbon */}
                  <div className="rounded-xl border border-white/[0.08] bg-[#1A1F2B]/60 p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="size-2 rounded-full bg-cyan animate-pulse" />
                      <span className="text-xs font-mono text-fg">Automated Data Sync</span>
                    </div>
                    <div className="flex items-center gap-1 font-mono text-[11px] text-muted">
                      <span className="px-1.5 py-0.5 rounded bg-white/[0.05] border border-white/[0.06]">Search Console</span>
                      <span>→</span>
                      <span className="px-1.5 py-0.5 rounded bg-white/[0.05] border border-white/[0.06]">AI</span>
                      <span>→</span>
                      <span className="px-1.5 py-0.5 rounded bg-lime/10 text-lime border border-lime/30">Action</span>
                    </div>
                  </div>
                </div>

                {/* Floating Decorative Accent Badge */}
                <div className="absolute -bottom-4 -left-4 rounded-xl border border-lime/30 bg-[#141720] px-3.5 py-2 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-2 text-xs font-medium text-fg">
                  <Zap className="size-4 text-lime" />
                  <span>Technical Foundation + SEO</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
