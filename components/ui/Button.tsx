import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn, isExternal } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-[background-color,border-color,color,box-shadow,transform] duration-300 focus-visible:outline-offset-4 active:scale-[0.98] select-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-lime text-[#0b0d06] shadow-[0_0_0_1px_rgb(183_243_74/0.4),0_10px_30px_-12px_rgb(183_243_74/0.55)] hover:bg-[#c6f86a] hover:shadow-[0_0_0_1px_rgb(183_243_74/0.6),0_14px_40px_-12px_rgb(183_243_74/0.7)]",
  secondary:
    "border border-line-strong bg-white/[0.03] text-fg hover:border-white/30 hover:bg-white/[0.07]",
  ghost: "text-muted hover:text-fg px-0!",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-6 text-[0.95rem]",
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Show a trailing arrow that nudges right on hover. */
  arrow?: boolean;
  id?: string;
  ariaLabel?: string;
  download?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  arrow = false,
  id,
  ariaLabel,
  download,
}: ButtonLinkProps) {
  const external = isExternal(href) && !href.startsWith("mailto:");
  const Icon = external ? ArrowUpRight : ArrowRight;
  const content = (
    <>
      <span>{children}</span>
      {(arrow || external) && (
        <Icon
          aria-hidden
          className={cn(
            "size-4 transition-transform duration-300 ease-out",
            external ? "group-hover:translate-x-0.5 group-hover:-translate-y-0.5" : "group-hover:translate-x-1",
          )}
        />
      )}
    </>
  );
  const classes = cn(base, variants[variant], sizes[size], className);

  if (external || download) {
    return (
      <a
        id={id}
        href={href}
        className={classes}
        aria-label={ariaLabel}
        download={download || undefined}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
        {external && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    );
  }

  return (
    <Link id={id} href={href} className={classes} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}
