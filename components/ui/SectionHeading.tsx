import type { ReactNode } from "react";
import { Reveal } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  /** Use h1 on standalone pages, h2 inside the home page. */
  as?: "h1" | "h2";
  id?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Tag = "h2",
  id,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex max-w-3xl flex-col gap-5",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      <p className="eyebrow flex items-center gap-3">
        {index && <span className="text-lime">{index}</span>}
        {index && <span aria-hidden className="h-px w-8 bg-line-strong" />}
        <span>{eyebrow}</span>
      </p>
      <Tag
        id={id}
        className={cn(
          "font-semibold leading-[1.05] text-fg",
          Tag === "h1" ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl sm:text-4xl lg:text-[3.25rem]",
        )}
      >
        {title}
      </Tag>
      {description && <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{description}</p>}
    </Reveal>
  );
}
