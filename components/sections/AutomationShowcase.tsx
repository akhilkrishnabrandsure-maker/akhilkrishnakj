"use client";

import { useState } from "react";
import {
  Workflow as WorkflowIcon,
  Zap,
  ArrowRight,
  Database,
  Cpu,
  UserCheck,
  FileSpreadsheet,
  CheckCircle2,
  Sparkles,
  Info,
} from "lucide-react";
import { workflows, type Workflow, type NodeKind } from "@/data/workflows";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/animations/Reveal";

const nodeKindStyles: Record<
  NodeKind,
  { label: string; badge: "neutral" | "lime" | "cyan" | "warn"; icon: React.ComponentType<{ className?: string }> }
> = {
  trigger: { label: "Trigger", badge: "cyan", icon: Zap },
  input: { label: "Data Input", badge: "neutral", icon: Database },
  process: { label: "Processing", badge: "neutral", icon: WorkflowIcon },
  ai: { label: "AI Integration", badge: "cyan", icon: Cpu },
  review: { label: "Human Review", badge: "lime", icon: UserCheck },
  output: { label: "Output Action", badge: "lime", icon: FileSpreadsheet },
};

export function AutomationShowcase() {
  const [selectedWorkflowId, setSelectedWorkflowId] = useState(workflows[0].id);
  const activeWorkflow = workflows.find((w) => w.id === selectedWorkflowId) || workflows[0];

  return (
    <section id="automation" className="section bg-[#08090D] relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 size-96 rounded-full bg-cyan/5 blur-[160px]"
      />

      <div className="container-page relative z-10">
        <SectionHeading
          index="05"
          eyebrow="Workflow Engineering"
          title="Automated Data &amp; Research Pipelines."
          description="Interactive breakdown of n8n workflows that connect search APIs, data extraction, and AI processing—with deliberate human review safeguards."
        />

        {/* Workflow Tabs */}
        <div className="mt-12 flex flex-wrap gap-2.5 pb-2">
          {workflows.map((wf) => {
            const active = wf.id === activeWorkflow.id;
            return (
              <button
                key={wf.id}
                type="button"
                onClick={() => setSelectedWorkflowId(wf.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all border ${
                  active
                    ? "bg-[#141720] border-lime/40 text-lime font-semibold shadow-[0_0_15px_rgba(183,243,74,0.15)]"
                    : "bg-[#0F1118] border-white/[0.08] text-muted hover:text-fg hover:border-white/[0.15]"
                }`}
              >
                {wf.title}
              </button>
            );
          })}
        </div>

        {/* Active Workflow Canvas */}
        <Reveal key={activeWorkflow.id} delay={0.1}>
          <div className="mt-6 rounded-2xl border border-white/[0.08] bg-[#0F1118] p-6 lg:p-8 backdrop-blur-md">
            {/* Workflow Header Info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div>
                <div className="flex items-center gap-2.5 mb-1.5">
                  <h3 className="text-xl font-bold text-fg">{activeWorkflow.title}</h3>
                  <Badge tone={activeWorkflow.status === "implemented" ? "lime" : "cyan"}>
                    {activeWorkflow.status === "implemented" ? "VERIFIED WORKFLOW" : "CONCEPTUAL DEMO"}
                  </Badge>
                </div>
                <p className="text-xs text-muted max-w-2xl">{activeWorkflow.summary}</p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap items-center gap-1.5 self-start md:self-auto">
                {activeWorkflow.tools.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Node Flow Diagram */}
            <div className="py-8 overflow-x-auto no-scrollbar">
              <div className="flex items-center gap-3 min-w-[750px] py-2">
                {activeWorkflow.nodes.map((node, index) => {
                  const style = nodeKindStyles[node.kind];
                  const Icon = style.icon;
                  const isLast = index === activeWorkflow.nodes.length - 1;

                  return (
                    <div key={node.id} className="flex items-center gap-3 flex-1">
                      {/* Node Card */}
                      <div className="flex-1 rounded-xl border border-white/[0.08] bg-[#141720] p-4 relative group hover:border-lime/30 transition-all">
                        {/* Top tag */}
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-[9px] uppercase tracking-wider text-muted flex items-center gap-1">
                            <Icon className="size-3 text-lime" />
                            {style.label}
                          </span>
                          <span className="font-mono text-[9px] text-muted">0{index + 1}</span>
                        </div>
                        {/* Node Label */}
                        <h4 className="text-xs font-bold text-fg mb-1">{node.label}</h4>
                        <p className="text-[11px] text-muted leading-relaxed">{node.detail}</p>

                        {/* Special highlight for Human Review node */}
                        {node.kind === "review" && (
                          <div className="mt-2.5 flex items-center gap-1 text-[9px] font-mono text-lime bg-lime/10 px-2 py-0.5 rounded border border-lime/20">
                            <CheckCircle2 className="size-2.5" /> Human in the loop
                          </div>
                        )}
                      </div>

                      {/* Connection arrow between nodes */}
                      {!isLast && (
                        <div className="flex flex-col items-center justify-center shrink-0 text-muted">
                          <div className="h-0.5 w-4 bg-white/20 group-hover:bg-lime transition-colors" />
                          <ArrowRight className="size-3.5 -ml-1 text-muted" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Integrity note */}
            <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-muted">
              <Info className="size-4 text-cyan shrink-0" />
              <span>
                Demonstration schematic: Real workflows connect via webhooks to self-hosted n8n instances with retry buffers and encrypted credential stores.
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
