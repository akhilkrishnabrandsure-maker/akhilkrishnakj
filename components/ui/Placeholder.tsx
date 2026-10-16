import { PencilLine } from "lucide-react";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Marks content that still needs real, verified information.
 * Renders nothing when NEXT_PUBLIC_SHOW_PLACEHOLDERS=false.
 */
export function Placeholder({
  children,
  label = "To be added",
  className,
}: {
  children: ReactNode;
  label?: string;
  className?: string;
}) {
  if (!site.showPlaceholders) return null;
  return (
    <div className={cn("placeholder-box flex items-start gap-3 px-4 py-3 text-sm", className)} role="note">
      <PencilLine aria-hidden className="mt-0.5 size-4 shrink-0 text-amber-200/80" />
      <div>
        <span className="mr-2 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-amber-200/80">{label}</span>
        <span>{children}</span>
      </div>
    </div>
  );
}
