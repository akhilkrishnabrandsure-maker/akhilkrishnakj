/**
 * Central site configuration.
 *
 * Everything personal lives here. Values set to `null` are treated as
 * "not configured" and are hidden from the public site (or shown as a
 * clearly marked placeholder while `showPlaceholders` is true).
 *
 * Never put secrets in this file — it is bundled to the client.
 * Secrets belong in `.env.local` (see `.env.example`).
 */

export type Availability = {
  /** Set to false to hide the availability indicator entirely. */
  enabled: boolean;
  status: "available" | "limited" | "unavailable";
  label: string;
};

export type SocialLink = {
  id: "linkedin" | "github" | "whatsapp" | "x" | "instagram";
  label: string;
  href: string | null;
};

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const site = {
  name: "Akhil Krishna",
  initials: "AK",
  headline: "SEO Specialist · Web Developer · AI Automation",
  shortBio:
    "I work where search, web technology and automation meet — helping businesses get found, build better websites and remove repetitive work.",
  description:
    "Portfolio of Akhil Krishna — SEO specialist, web developer and AI automation builder. Technical SEO, Next.js development, n8n workflows and analytics for growing businesses.",

  /** Canonical origin, no trailing slash. Configure via NEXT_PUBLIC_SITE_URL. */
  url: rawUrl.replace(/\/$/, ""),
  locale: "en_IN",

  // ── Contact ─────────────────────────────────────────────────────────
  // TODO(akhil): add your real public contact details.
  email: null as string | null, // e.g. "hello@yourdomain.com"
  resumeUrl: null as string | null, // e.g. "/resume.pdf" (place file in /public)
  location: null as string | null, // e.g. "Kerala, India" — only if you want it public

  social: [
    { id: "linkedin", label: "LinkedIn", href: null },
    { id: "github", label: "GitHub", href: null },
    // WhatsApp format: https://wa.me/<countrycode><number>
    { id: "whatsapp", label: "WhatsApp", href: null },
  ] satisfies SocialLink[] as SocialLink[],

  availability: {
    enabled: true,
    status: "available",
    label: "Open to freelance projects",
  } satisfies Availability as Availability,

  /**
   * While true, unverified/unconfigured content renders as dashed
   * "to be added" notes so you can see what still needs real data.
   * Set NEXT_PUBLIC_SHOW_PLACEHOLDERS=false before going live to hide them.
   */
  showPlaceholders: process.env.NEXT_PUBLIC_SHOW_PLACEHOLDERS !== "false",
} as const;

export const navItems = [
  { id: "top", label: "Home", href: "/#top" },
  { id: "about", label: "About", href: "/#about" },
  { id: "services", label: "Services", href: "/#services" },
  { id: "projects", label: "Projects", href: "/#projects" },
  { id: "skills", label: "Skills", href: "/#skills" },
  { id: "contact", label: "Contact", href: "/#contact" },
] as const;

export function configuredSocials() {
  return site.social.filter((s): s is SocialLink & { href: string } => Boolean(s.href));
}

export function absoluteUrl(path = "/") {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
