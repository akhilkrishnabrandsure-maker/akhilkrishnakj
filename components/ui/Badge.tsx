import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "neutral" | "lime" | "cyan" | "warn";

const tones: Record<Tone, string> = {
  neutral: "border-line bg-white/[0.03] text-muted",
  lime: "border-lime/25 bg-lime/[0.07] text-lime",
  cyan: "border-cyan/25 bg-cyan/[0.07] text-cyan",
  warn: "border-amber-300/25 bg-amber-300/[0.06] text-amber-200",
};

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.68rem] font-medium uppercase tracking-[0.08em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-line bg-elevated/60 px-2 py-1 text-xs text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
