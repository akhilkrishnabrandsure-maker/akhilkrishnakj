"use client";

import { m, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  id?: string;
};

/**
 * Fades + lifts content into view once. Content is always server-rendered;
 * a <noscript> rule in the root layout forces [data-reveal] visible when JS
 * is unavailable, so nothing depends on animation to be readable.
 */
export function Reveal({ children, className, delay = 0, y = 18, id }: RevealProps) {
  return (
    <m.div
      id={id}
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </m.div>
  );
}

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

type StaggerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol";
  /** Animate on mount instead of when scrolled into view (used in the hero). */
  immediate?: boolean;
};

export function Stagger({ children, className, as = "div", immediate = false }: StaggerProps) {
  const common = {
    "data-reveal": "",
    className,
    variants: containerVariants,
    initial: "hidden",
    ...(immediate
      ? { animate: "show" }
      : { whileInView: "show", viewport: { once: true, margin: "0px 0px -10% 0px" } }),
  } as const;

  if (as === "ul") return <m.ul {...common}>{children}</m.ul>;
  if (as === "ol") return <m.ol {...common}>{children}</m.ol>;
  return <m.div {...common}>{children}</m.div>;
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
};

export function StaggerItem({ children, className, as = "div" }: StaggerItemProps) {
  if (as === "li")
    return (
      <m.li data-reveal="" className={className} variants={itemVariants}>
        {children}
      </m.li>
    );
  return (
    <m.div data-reveal="" className={className} variants={itemVariants}>
      {children}
    </m.div>
  );
}
