import {
  LineChart,
  ShieldAlert,
  CheckCircle2,
  BarChart,
  TrendingUp,
  Clock,
  Gauge,
  Sparkles,
} from "lucide-react";
import { results, methodology, measuredSignals } from "@/data/results";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";

export function ResultsSection() {
  const hasRealResults = results.length > 0;

  return (
    <section id="results" className="section bg-[#0F1118]/60 relative overflow-hidden">
      {/* Background radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/3 top-1/2 -translate-y-1/2 size-96 rounded-full bg-lime/5 blur-[140px]"
      />

      <div className="container-page relative z-10">
        <SectionHeading
          index="04"
          eyebrow="Measurement &amp; Accountability"
          title="How SEO &amp; Performance Are Measured."
          description="True digital growth is verified through search console telemetry, Core Web Vitals, and actual conversion paths—never fabricated claims."
        />

        {hasRealResults ? (
          /* When real verified client data exists */
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((res) => (
              <div
                key={res.id}
                className="rounded-2xl border border-white/[0.08] bg-[#141720] p-6 card-interactive"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-muted">{res.period}</span>
                  <span className="font-mono text-[10px] text-lime uppercase">{res.source}</span>
                </div>
                <h4 className="text-base font-semibold text-fg mb-4">{res.label}</h4>
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-2xl font-mono text-muted line-through">
                    {res.before}
                    {res.unit}
                  </span>
                  <span className="text-3xl font-mono font-bold text-lime">
                    {res.after}
                    {res.unit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Transparent Methodology System */
          <div className="mt-14 space-y-10">
            {/* Methodology Principles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodology.map((item, idx) => (
                <Reveal key={item.title} delay={0.08 * idx}>
                  <div className="h-full rounded-2xl border border-white/[0.08] bg-[#141720] p-6 flex flex-col justify-between card-interactive">
                    <div>
                      <div className="size-8 rounded-lg bg-lime/10 border border-lime/20 flex items-center justify-center text-lime font-mono text-xs font-bold mb-4">
                        0{idx + 1}
                      </div>
                      <h4 className="text-base font-bold text-fg mb-2.5">{item.title}</h4>
                      <p className="text-xs text-muted leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Verified Sourced Metrics Tracking Framework */}
            <Reveal delay={0.25}>
              <div className="rounded-2xl border border-white/[0.08] bg-[#141720]/80 p-6 lg:p-8 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
                  <div>
                    <h4 className="text-lg font-bold text-fg">Telemetry &amp; Audit Verification</h4>
                    <p className="text-xs text-muted mt-1">
                      Standard metrics tracked on every web development and search optimization project.
                    </p>
                  </div>
                  <span className="self-start md:self-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-lime/30 bg-lime/10 font-mono text-xs text-lime">
                    <Sparkles className="size-3" /> VERIFIABLE SIGNALS
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
                  {measuredSignals.map((signal) => (
                    <div
                      key={signal.label}
                      className="rounded-xl border border-white/[0.06] bg-[#0F1118] p-4 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="size-2 rounded-full bg-lime" />
                        <span className="text-xs font-medium text-fg">{signal.label}</span>
                      </div>
                      <span className="font-mono text-[10px] text-muted border border-white/[0.08] px-2 py-0.5 rounded bg-white/[0.02]">
                        {signal.source}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}
