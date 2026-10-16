/**
 * Experience & education timeline.
 *
 * Only add verified records. Entries with `placeholder: true` are shown as
 * dashed "to be added" cards while placeholders are enabled and hidden when
 * NEXT_PUBLIC_SHOW_PLACEHOLDERS=false.
 *
 * Dates use "YYYY-MM" or "YYYY". Use `end: "present"` for ongoing roles.
 */

export type TimelineKind = "work" | "freelance" | "internship" | "education" | "certification";

export type TimelineEntry = {
  id: string;
  kind: TimelineKind;
  title: string;
  organization: string | null;
  start: string | null;
  end: string | null | "present";
  description: string | null;
  highlights?: string[];
  link?: { label: string; href: string };
  placeholder?: boolean;
};

export const timeline: TimelineEntry[] = [
  {
    id: "sigosoft",
    kind: "work",
    title: "SEO Specialist & Technical Content",
    organization: "Sigosoft",
    start: "2025",
    end: "present",
    description:
      "Leading technical SEO, commercial keyword clustering, content architecture, and AI search visibility campaigns. Secured #1 Google rankings and Google AI Overview citations across UAE, India, and US tech queries.",
    highlights: [
      "Secured #1 Google organic rankings for competitive queries including 'cashback app development in uae' and 'fuel delivery app development'",
      "Engineered structured content and definitions cited directly inside Google AI Overviews",
      "Drove qualified organic traffic and enterprise inbound enquiries for custom mobile app services",
    ],
    link: { label: "View Case Study", href: "/projects/sigosoft" },
  },
  {
    id: "hubspot-seo-cert",
    kind: "certification",
    title: "HubSpot Academy SEO Certified",
    organization: "HubSpot Academy",
    start: "2026-02",
    end: "2027-03",
    description:
      "Officially certified by HubSpot Academy in Search Engine Optimization. Demonstrates validated expertise in technical SEO, keyword research, on-page optimization, content strategy, and search performance analytics. Certification code: 122a24ba0c744cb8a3ecf27ec7cc54fc.",
    link: { label: "View Certificate", href: "/assets/SEO Certificate.png" },
  },
  {
    id: "freelance",
    kind: "freelance",
    title: "SEO, Web Development & Automation Projects",
    organization: "Independent",
    start: "2024",
    end: "present",
    description:
      "Website builds, Next.js applications, technical SEO audits, and workflow automation for growing businesses and startups.",
  },
];

export const timelineKindLabels: Record<TimelineKind, string> = {
  work: "Experience",
  freelance: "Freelance",
  internship: "Internship",
  education: "Education",
  certification: "Certification",
};
