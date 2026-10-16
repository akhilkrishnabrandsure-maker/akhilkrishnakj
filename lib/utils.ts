import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Formats an ISO-ish "YYYY-MM" or "YYYY" string to e.g. "Mar 2025". */
export function formatMonth(value: string | null | undefined): string | null {
  if (!value) return null;
  const [y, m] = value.split("-");
  if (!m) return y;
  const date = new Date(Number(y), Number(m) - 1, 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function isExternal(href: string) {
  return /^https?:\/\//.test(href) || href.startsWith("mailto:");
}
