import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function Monogram({ className, size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "size-8 text-[0.7rem] rounded-lg",
    md: "size-9 text-xs rounded-[0.7rem]",
    lg: "size-14 text-base rounded-2xl",
  };
  return (
    <span
      aria-hidden
      className={cn(
        "relative inline-grid shrink-0 place-items-center overflow-hidden border border-lime/30 bg-[radial-gradient(120%_120%_at_0%_0%,rgb(183_243_74/0.28),transparent_60%),#11140c] font-mono font-semibold tracking-tight text-lime",
        sizes[size],
        className,
      )}
    >
      {site.initials}
    </span>
  );
}
