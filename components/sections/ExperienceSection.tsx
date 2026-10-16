import {
  Briefcase,
  GraduationCap,
  Award,
  ExternalLink,
  Calendar,
} from "lucide-react";
import { timeline, timelineKindLabels, type TimelineKind } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/animations/Reveal";
import { formatMonth } from "@/lib/utils";

const kindIcons: Record<TimelineKind, React.ComponentType<{ className?: string }>> = {
  work: Briefcase,
  freelance: Briefcase,
  internship: Briefcase,
  education: GraduationCap,
  certification: Award,
};

export function ExperienceSection() {
  return (
    <section id="experience" className="section bg-[#08090D] relative overflow-hidden">
      {/* Background radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2 size-80 rounded-full bg-cyan/5 blur-[140px]"
      />

      <div className="container-page relative z-10">
        <SectionHeading
          index="07"
          eyebrow="Timeline &amp; Credentials"
          title="Experience, Education &amp; Engagements."
          description="A verifiable record of professional commitments, freelance solutions, and formal qualifications. Designed to grow transparently."
        />

        <div className="mt-14 max-w-3xl mx-auto">
          <div className="relative border-l border-white/[0.1] pl-6 md:pl-8 space-y-10">
            {timeline.map((entry, idx) => {
              const Icon = kindIcons[entry.kind] || Briefcase;
              const dateDisplay = entry.start
                ? `${formatMonth(entry.start)} — ${
                    entry.end === "present" ? "Present" : formatMonth(entry.end) || "Ongoing"
                  }`
                : "Timeline configurable";

              return (
                <Reveal key={entry.id} delay={0.08 * idx}>
                  <div className="relative group">
                    {/* Timeline Node Indicator */}
                    <div className="absolute -left-[31px] md:-left-[39px] top-1 size-5 rounded-full border-2 border-[#08090D] bg-lime shadow-[0_0_8px_#b7f34a]" />

                    {/* Card container */}
                    <div className="rounded-2xl border border-white/[0.08] bg-[#141720] p-6 hover:border-lime/30 transition-all card-interactive">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <Badge tone={entry.kind === "freelance" ? "lime" : "neutral"}>
                          {timelineKindLabels[entry.kind]}
                        </Badge>
                        <div className="flex items-center gap-1.5 font-mono text-xs text-muted">
                          <Calendar className="size-3" />
                          <span>{dateDisplay}</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-fg group-hover:text-lime transition-colors">
                        {entry.title}
                      </h3>

                      {entry.organization && (
                        <p className="text-sm font-medium text-cyan mt-0.5">
                          {entry.organization}
                        </p>
                      )}

                      {entry.description && (
                        <p className="text-xs text-muted leading-relaxed mt-3">
                          {entry.description}
                        </p>
                      )}

                      {entry.highlights && entry.highlights.length > 0 && (
                        <ul className="mt-3 space-y-1 text-xs text-muted list-disc list-inside">
                          {entry.highlights.map((h, i) => (
                            <li key={i}>{h}</li>
                          ))}
                        </ul>
                      )}

                      {entry.link && (
                        <div className="mt-4 pt-3 border-t border-white/[0.06]">
                          <a
                            href={entry.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-mono text-lime hover:underline"
                          >
                            <span>{entry.link.label}</span>
                            <ExternalLink className="size-3" />
                          </a>
                        </div>
                      )}
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
