import {
  Search,
  Code2,
  Workflow,
  BarChart3,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { services, type ServiceId } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { ButtonLink } from "@/components/ui/Button";

const serviceIcons: Record<ServiceId, React.ComponentType<{ className?: string }>> = {
  seo: Search,
  web: Code2,
  automation: Workflow,
  analytics: BarChart3,
};

export function ServicesSection() {
  return (
    <section id="services" className="section bg-[#0F1118]/70 relative overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-10 top-1/3 size-[500px] rounded-full bg-lime/5 blur-[160px]"
      />

      <div className="container-page relative z-10">
        <SectionHeading
          index="02"
          eyebrow="Specialized Capabilities"
          title="Integrated Services for Modern Web Visibility."
          description="Whether building a new platform or optimizing an existing one, each service is designed with clean technical execution and transparent reporting."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((srv, idx) => {
            const Icon = serviceIcons[srv.id];
            const isLime = srv.accent === "lime";

            return (
              <Reveal key={srv.id} delay={0.1 * idx}>
                <div className="h-full rounded-2xl border border-white/[0.08] bg-[#141720] p-6 lg:p-8 flex flex-col justify-between card-interactive group">
                  <div>
                    {/* Header: Icon + Category number */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`size-12 rounded-xl flex items-center justify-center border ${
                          isLime
                            ? "border-lime/30 bg-lime/10 text-lime"
                            : "border-cyan/30 bg-cyan/10 text-cyan"
                        }`}
                      >
                        <Icon className="size-6" />
                      </div>
                      <span className="font-mono text-xs text-muted">0{idx + 1}</span>
                    </div>

                    {/* Title & Short Description */}
                    <h3 className="text-xl lg:text-2xl font-bold text-fg mb-3 group-hover:text-lime transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-6">
                      {srv.description}
                    </p>

                    {/* Included Deliverables Grid */}
                    <div className="border-t border-white/[0.06] pt-5">
                      <p className="eyebrow text-[11px] text-muted mb-3">Key Focus Areas</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-fg/80">
                        {srv.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle2
                              className={`size-3.5 mt-0.5 shrink-0 ${
                                isLime ? "text-lime" : "text-cyan"
                              }`}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer: Typical Engagement Flow */}
                  <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs font-mono text-muted">
                      {srv.approach.length} Step Execution Process
                    </span>
                    <ButtonLink
                      href={`/#contact?service=${srv.id}`}
                      variant="ghost"
                      size="md"
                      arrow
                      className="text-xs font-medium text-lime group-hover:underline"
                    >
                      Inquire for {srv.short}
                    </ButtonLink>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
