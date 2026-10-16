"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ExternalLink,
  ArrowRight,
  Sparkles,
  Compass,
  FileSearch,
  Workflow,
  ShoppingBag,
  Layers,
  TrendingUp,
} from "lucide-react";
import {
  getPublishedProjects,
  kindLabels,
  type Project,
  type ProjectCategory,
} from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag, Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/animations/Reveal";

const filterTabs: ("All" | ProjectCategory)[] = [
  "All",
  "Web Development",
  "SEO",
  "Automation",
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>("All");
  const allProjects = getPublishedProjects();

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.categories.includes(activeCategory));

  return (
    <section id="projects" className="section bg-[#08090D] relative overflow-hidden">
      {/* Background ambient accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/4 top-1/4 size-[550px] rounded-full bg-cyan/5 blur-[160px]"
      />

      <div className="container-page relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            index="03"
            eyebrow="Portfolio &amp; Case Studies"
            title="Selected Client Builds &amp; Technical Systems."
            description="Case studies detailing practical architecture, search visibility strategy, and automated pipelines. Every metric and role is verified honestly."
          />

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1 rounded-full border border-white/[0.08] bg-[#141720]/80 backdrop-blur-sm self-start md:self-auto">
            {filterTabs.map((tab) => {
              const active = activeCategory === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveCategory(tab)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                    active
                      ? "bg-lime text-[#0b0d06] font-semibold shadow-[0_0_12px_rgba(183,243,74,0.35)]"
                      : "text-muted hover:text-fg hover:bg-white/[0.04]"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <Reveal key={project.slug} delay={0.1 * idx}>
              <div className="h-full rounded-2xl border border-white/[0.08] bg-[#0F1118] overflow-hidden flex flex-col justify-between card-interactive group">
                {/* Project Header Preview Illustration */}
                <div className="relative h-48 w-full bg-[#141720] border-b border-white/[0.06] overflow-hidden">
                  {project.images && project.images.length > 0 ? (
                    <>
                      <Image
                        src={project.images[0].src}
                        alt={project.images[0].alt}
                        fill
                        priority={idx === 0}
                        className="object-cover object-top opacity-50 group-hover:opacity-75 group-hover:scale-105 transition-all duration-500"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F1118] via-[#0F1118]/60 to-black/70 pointer-events-none" />

                      <div className="relative z-10 p-5 flex flex-col justify-between h-full w-full">
                        <div className="flex items-center justify-between">
                          <Badge tone={project.kind === "client-build" ? "lime" : "cyan"}>
                            {kindLabels[project.kind]}
                          </Badge>
                          <span className="font-mono text-[10px] text-fg/90 bg-black/70 px-2 py-0.5 rounded border border-white/10 backdrop-blur-xs">
                            {project.industry}
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-[11px] font-mono text-muted">
                          <span className="bg-black/70 px-2 py-0.5 rounded border border-white/10 text-fg/80">
                            {project.categories.join(" · ")}
                          </span>
                          {project.outcome.status && (
                            <span className="text-lime bg-black/70 px-2 py-0.5 rounded border border-lime/30 font-semibold">
                              {project.outcome.status}
                            </span>
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="p-5 flex flex-col justify-between h-full w-full">
                      {/* Subtle decorative motif depending on preview type */}
                      <div
                        aria-hidden
                        className="absolute -right-8 -top-8 size-36 rounded-full bg-lime/10 blur-2xl group-hover:bg-lime/20 transition-all duration-500"
                      />

                      <div className="relative z-10 flex items-center justify-between">
                        <Badge tone={project.kind === "client-build" ? "lime" : "cyan"}>
                          {kindLabels[project.kind]}
                        </Badge>
                        <span className="font-mono text-[11px] text-muted">
                          {project.industry}
                        </span>
                      </div>

                      {/* Motif Icon Banner */}
                      <div className="relative z-10 flex items-center justify-center py-4">
                        {project.preview.motif === "travel" && (
                          <div className="flex items-center gap-2 font-mono text-xs text-lime">
                            <Compass className="size-6 text-lime animate-spin-slow" />
                            <span className="font-semibold tracking-wider">KERALA TOUR PLATFORM</span>
                          </div>
                        )}
                        {project.preview.motif === "audit" && (
                          <div className="flex items-center gap-2 font-mono text-xs text-cyan">
                            <FileSearch className="size-6 text-cyan" />
                            <span className="font-semibold tracking-wider">SHOPIFY SEO AUDIT</span>
                          </div>
                        )}
                        {project.preview.motif === "workflow" && (
                          <div className="flex items-center gap-2 font-mono text-xs text-lime">
                            <Workflow className="size-6 text-lime" />
                            <span className="font-semibold tracking-wider">n8n RESEARCH PIPELINE</span>
                          </div>
                        )}
                        {project.preview.motif === "growth" && (
                          <div className="flex items-center gap-2 font-mono text-xs text-lime">
                            <TrendingUp className="size-6 text-lime" />
                            <span className="font-semibold tracking-wider">SEO RANKING CAMPAIGN</span>
                          </div>
                        )}
                      </div>

                      {/* Live link quick pill if live */}
                      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-muted">
                        <span>{project.categories.join(" · ")}</span>
                        {project.outcome.status && (
                          <span className="text-lime">{project.outcome.status}</span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-fg mb-2.5 group-hover:text-lime transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed mb-4 line-clamp-3">
                      {project.summary}
                    </p>

                    {/* Tools & Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tools.slice(0, 4).map((tool) => (
                        <Tag key={tool}>{tool}</Tag>
                      ))}
                      {project.tools.length > 4 && (
                        <Tag>+{project.tools.length - 4}</Tag>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom Links */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-lime group-hover:underline"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>

                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-muted hover:text-fg transition-colors"
                        aria-label={`Visit live website for ${project.title}`}
                      >
                        <span>Live Site</span>
                        <ExternalLink className="size-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
