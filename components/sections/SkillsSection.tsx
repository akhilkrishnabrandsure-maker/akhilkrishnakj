"use client";

import { useState } from "react";
import {
  Search,
  Code2,
  Workflow,
  BarChart3,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { skillCategories, type SkillCategoryId } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";

const categoryIcons: Record<SkillCategoryId, React.ComponentType<{ className?: string }>> = {
  seo: Search,
  development: Code2,
  automation: Workflow,
  analytics: BarChart3,
};

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategoryId>("seo");

  const activeCategory =
    skillCategories.find((cat) => cat.id === selectedCategory) || skillCategories[0];
  const Icon = categoryIcons[activeCategory.id];

  return (
    <section id="skills" className="section bg-[#0F1118]/60 relative overflow-hidden">
      {/* Background radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-10 top-1/2 -translate-y-1/2 size-96 rounded-full bg-lime/5 blur-[160px]"
      />

      <div className="container-page relative z-10">
        <SectionHeading
          index="06"
          eyebrow="Technical Repertoire"
          title="Skills Grounded in Direct Application."
          description="A transparent breakdown of competencies across technical SEO, full-stack web engineering, and workflow automation. No arbitrary percentage bars."
        />

        {/* Category Tabs */}
        <div className="mt-12 flex flex-wrap gap-2.5 pb-2">
          {skillCategories.map((cat) => {
            const active = cat.id === activeCategory.id;
            const CatIcon = categoryIcons[cat.id];
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono transition-all border ${
                  active
                    ? "bg-[#141720] border-lime/40 text-lime font-semibold shadow-[0_0_15px_rgba(183,243,74,0.15)]"
                    : "bg-[#08090D] border-white/[0.08] text-muted hover:text-fg hover:border-white/[0.15]"
                }`}
              >
                <CatIcon className="size-3.5" />
                <span>{cat.label}</span>
                <span className="text-[10px] text-muted ml-1">({cat.skills.length})</span>
              </button>
            );
          })}
        </div>

        {/* Skills Display Grid */}
        <Reveal key={activeCategory.id} delay={0.1}>
          <div className="mt-6 rounded-2xl border border-white/[0.08] bg-[#141720] p-6 lg:p-8 backdrop-blur-md">
            {/* Header info */}
            <div className="flex items-center gap-3 pb-6 border-b border-white/[0.06]">
              <div className="size-10 rounded-xl bg-lime/10 border border-lime/20 flex items-center justify-center text-lime">
                <Icon className="size-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-fg">{activeCategory.label} Core Competencies</h3>
                <p className="text-xs text-muted mt-0.5">{activeCategory.blurb}</p>
              </div>
            </div>

            {/* Grid of concrete skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
              {activeCategory.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="rounded-xl border border-white/[0.06] bg-[#0F1118] p-4 flex flex-col justify-between hover:border-lime/30 transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-fg group-hover:text-lime transition-colors">
                      {skill.name}
                    </span>
                    <CheckCircle2 className="size-4 text-lime/70 group-hover:text-lime transition-colors shrink-0" />
                  </div>
                  {skill.note ? (
                    <p className="text-xs text-muted leading-relaxed font-mono mt-1">
                      {skill.note}
                    </p>
                  ) : (
                    <p className="text-[11px] text-muted/60 font-mono italic">
                      Core implementation standard
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
