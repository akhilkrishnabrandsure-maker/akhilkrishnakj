import type { ServiceId } from "./services";

/**
 * PROJECT DATA — HONESTY RULES
 * ─────────────────────────────────────────────────────────────────────
 * • `null` = unknown / not yet confirmed. The UI renders null fields as a
 *   dashed "to be added" note (when placeholders are enabled) and never
 *   invents a value.
 * • `observed` = things anyone can verify on the live site today
 *   (stack, structured data, metadata). These are facts about the site,
 *   NOT claims about who built them.
 * • `outcome.verified` must only contain metrics you can back up with a
 *   source (Search Console export, GA4 report, client confirmation).
 * • `published: false` hides a project everywhere (listing, sitemap,
 *   static params) until real details exist.
 */

export type ProjectKind =
  | "client-build" // you built / shipped it
  | "audit" // analysis + recommendations delivered
  | "personal" // your own project
  | "concept"; // a demonstration / design, not deployed for a client

export type ProjectCategory = "Web Development" | "SEO" | "Automation" | "Ecommerce";

export type Metric = {
  label: string;
  value: string;
  /** e.g. "Google Search Console, Jan–Mar 2026" */
  source: string;
  period?: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  tag?: string;
};

export type Project = {
  slug: string;
  published: boolean;
  featured: boolean;
  title: string;
  industry: string;
  categories: ProjectCategory[];
  kind: ProjectKind;
  summary: string;
  /** Problem or objective, as you understand it. */
  objective: string | null;
  /** Your actual role & contribution. Leave null until confirmed. */
  role: string | null;
  contributions: string[] | null;
  tools: string[];
  approach: string[] | null;
  /** Facts visible on the live site (independent of authorship). */
  observed: string[];
  lessons: string[] | null;
  outcome: {
    /** Plain-language status, e.g. "Live", "Recommendations delivered". */
    status: string | null;
    verified: Metric[];
  };
  links: {
    live: string | null;
    github: string | null;
    demo: string | null;
  };
  /** Real screenshots only. Put files in /public/assets/ or /public/projects/<slug>/. */
  images: ProjectImage[];
  relatedServices: ServiceId[];
  /**
   * Shown as a placeholder banner on the case study while placeholders are
   * enabled. Use it to flag narrative that still needs your confirmation.
   */
  reviewNote: string | null;
  /** Visual theme for the generated preview when no screenshot exists. */
  preview: { accent: "lime" | "cyan"; motif: "travel" | "audit" | "commerce" | "workflow" | "growth" };
};

export const projects: Project[] = [
  {
    slug: "sigosoft",
    published: true,
    featured: true,
    title: "Sigosoft",
    industry: "Software & Mobile App Development",
    categories: ["SEO", "Web Development"],
    kind: "client-build",
    summary:
      "High-intent search engine optimization and topical authority campaign for a software agency — securing Google #1 organic rankings and featured AI Overview citations across UAE, India, and US tech queries.",
    objective:
      "Drive qualified enterprise inbound leads for custom mobile app and software development services by outranking competitive global and regional agencies on high-intent cost and development queries.",
    role: "SEO Strategist & Technical Content Optimization",
    contributions: [
      "Formulated targeted commercial keyword cluster strategies for custom mobile app niches (Cashback apps, On-demand fuel delivery, Fish delivery).",
      "Engineered content architecture and semantic heading structures aligned with search intent and Google AI Overviews ranking factors.",
      "Implemented on-page optimization, metadata refinement, and technical search signals.",
      "Secured #1 SERP organic rankings and featured AI Overview citations for competitive commercial queries.",
    ],
    tools: [
      "Technical SEO",
      "Google Search Console",
      "Ahrefs",
      "On-Page Optimization",
      "Structured Data",
      "Content Architecture",
    ],
    approach: [
      "Target commercial investigation keywords where prospective enterprise clients search for development costs and solutions.",
      "Structure long-form comprehensive guides answering cost breakdowns, technology stacks, compliance, and feature architectures.",
      "Optimize for AI Overviews and snippet extraction through clear definitions, bulleted component hierarchies, and structured semantic data.",
      "Track SERP volatility and query positioning across international geo-locations (UAE, India, US).",
    ],
    observed: [
      "Rank #1 on Google for 'cashback app development in uae' (Sigosoft blog guide)",
      "Rank #1 on Google and featured AI Overview citation for 'fish delivery app development in uae'",
      "Rank #1 on Google and featured AI Overview citation for 'fuel delivery app development'",
      "Multiple top-3 organic placements on Google Page 1 for commercial mobile app development queries",
      "High article reach with verified email distribution and reader engagement",
    ],
    lessons: [
      "Structuring content to directly answer technical architecture questions earns top organic positions as well as prominence in Google's AI Overview citations.",
      "Localizing commercial queries (e.g. UAE market specifics, currency, regional regulations) significantly increases conversion intent over generic global terms.",
    ],
    outcome: {
      status: "Achieved Google #1 Rankings & AI Overviews",
      verified: [
        {
          label: "Primary Rank",
          value: "#1 Rank",
          source: "Google Search (UAE & Global SERPs)",
          period: "Jan 2026",
        },
        {
          label: "Search Feature",
          value: "AI Overview",
          source: "Google AI Overview Citations",
          period: "Jan 2026",
        },
        {
          label: "Page 1 Presence",
          value: "Top 3",
          source: "Double rankings on primary commercial keywords",
          period: "Jan 2026",
        },
        {
          label: "Article Reach",
          value: "700+ Sends",
          source: "Article Performance Analytics (10% Open Rate)",
          period: "Jan 2026",
        },
      ],
    },
    links: {
      live: "https://sigosoft.com/",
      github: null,
      demo: null,
    },
    images: [
      {
        src: "/assets/Screenshot from 2026-01-13 10-03-31.png",
        alt: "Sigosoft #1 Google Ranking for 'cashback app development in uae'",
        width: 1042,
        height: 278,
        caption: "Google SERP #1 Rank — 'Cashback App Development Cost in UAE' outranking global agencies",
        tag: "Google Rank #1",
      },
      {
        src: "/assets/Screenshot from 2026-01-13 10-05-38.png",
        alt: "Sigosoft #1 Google Ranking and AI Overview citation for 'fish delivery app development in uae'",
        width: 832,
        height: 716,
        caption: "Featured in Google AI Overview & Ranked #1 for 'fish delivery app development in uae'",
        tag: "AI Overview & #1 Rank",
      },
      {
        src: "/assets/Screenshot from 2026-01-13 10-06-10.png",
        alt: "Sigosoft #1 Google Ranking and AI Overview citation for 'fuel delivery app development'",
        width: 832,
        height: 716,
        caption: "Google AI Overview Citation & #1 Organic Rank for 'fuel delivery app development'",
        tag: "AI Overview & #1 Rank",
      },
      {
        src: "/assets/Screenshot from 2026-01-13 10-04-10.png",
        alt: "Sigosoft dominating Google SERP with #1 and #3 rankings",
        width: 694,
        height: 959,
        caption: "Page 1 Dominance: #1 Blog guide and #3 Service landing page simultaneously visible on Google",
        tag: "Double SERP Rank",
      },
      {
        src: "/assets/Screenshot from 2026-01-13 09-53-52.png",
        alt: "Article performance and email subscriber engagement metrics",
        width: 930,
        height: 186,
        caption: "Audience Engagement: 108 Article views, 704 Email sends, 10% Email open rate",
        tag: "Analytics & Reach",
      },
    ],
    relatedServices: ["seo", "analytics"],
    reviewNote: null,
    preview: { accent: "lime", motif: "growth" },
  },
  {
    slug: "green-world-holidays",
    published: true,
    featured: true,
    title: "Green World Holidays",
    industry: "Travel & Tourism",
    categories: ["Web Development", "SEO"],
    kind: "client-build",
    summary:
      "A Next.js travel website for a Kerala tour operator — destinations, tour packages, vehicle fleet and enquiry flows, built with search visibility in mind.",
    objective:
      "Give a Kerala travel business a fast, mobile-friendly website that presents destinations and packages clearly and creates a solid foundation for local search and lead generation.",
    role: "Next.js Web Development & Ongoing SEO / Local SEO",
    contributions: [
      "Engineered the full frontend platform using Next.js (App Router), React, and Tailwind CSS with a mobile-first architecture.",
      "Integrated Cloudinary for responsive dynamic image optimization across destination galleries and tour package listings.",
      "Built search-first structural foundation: page-level metadata, canonical tags, and TravelAgency JSON-LD schema.",
      "Currently designing and executing the SEO and Local SEO strategy targeting Kerala holiday packages, local fleet rentals, and travel queries.",
    ],
    tools: ["Next.js", "React", "Tailwind CSS", "Cloudinary", "Technical SEO", "Local SEO"],
    approach: [
      "Structure pages around how travellers search: destinations, package types (honeymoon, group, customised) and fleet.",
      "Use responsive, image-led layouts with optimised image delivery so a visual site stays fast on mobile.",
      "Build metadata, canonical tags and structured data into the templates rather than adding them later.",
      "Execute ongoing Local SEO: Google Business Profile alignment, location targeting, and regional tourism query mapping.",
    ],
    observed: [
      "Live production site hosted on greenworldholidays.in",
      "Built with Next.js; images served through next/image from Cloudinary",
      "Page-level title and meta description targeting “Kerala travel packages”",
      "Canonical URL, Open Graph and Twitter card metadata present",
      "TravelAgency JSON-LD structured data on the homepage",
      "Dedicated sections for destinations, fleet, package types, blog and contact",
    ],
    lessons: [
      "Developing a travel platform with Next.js ensures fast mobile navigation, which is essential for capturing on-the-go travel booking queries.",
      "Combining technical foundation at build time with active Local SEO maximizes visibility for competitive regional tourism terms.",
    ],
    outcome: {
      status: "Live · Active SEO & Local SEO",
      verified: [
        {
          label: "Live Site",
          value: "greenworldholidays.in",
          source: "Production Domain",
        },
        {
          label: "Status",
          value: "Active SEO",
          source: "Organic & Local SEO in progress",
        },
      ],
    },
    links: {
      live: "https://greenworldholidays.in/",
      github: null,
      demo: null,
    },
    images: [],
    relatedServices: ["web", "seo"],
    reviewNote: null,
    preview: { accent: "lime", motif: "travel" },
  },
  {
    slug: "wexley-seo-audit",
    published: true,
    featured: true,
    title: "Wexley",
    industry: "Furniture Retail · Ecommerce",
    categories: ["SEO"],
    kind: "audit",
    summary:
      "SEO audit and search-visibility research for a Bangalore furniture brand on Shopify — technical, content and AI-search opportunities.",
    objective:
      "Understand how a premium furniture store is discovered in traditional and AI-driven search, and identify the technical and content work most likely to improve visibility.",
    role: null, // TODO(akhil): e.g. "Performed the SEO audit and delivered a prioritised recommendations report"
    contributions: null,
    tools: [], // TODO(akhil): tools you actually used, e.g. Search Console, Screaming Frog
    approach: [
      "Technical review: crawlability, indexation, site structure and page performance.",
      "Content review: category and product page targeting against local, high-intent queries.",
      "Structured-data review of the existing local business markup.",
      "AI search visibility research: how the brand appears in AI-generated answers and what content would support it.",
    ],
    observed: [
      "Shopify storefront",
      "FurnitureStore JSON-LD with address, geo coordinates and areas served",
      "Local focus on Bangalore neighbourhoods (Sarjapur Road, HSR Layout, Whitefield and others)",
    ],
    lessons: null,
    outcome: {
      status: null, // TODO(akhil): e.g. "Recommendations delivered" / "Partially implemented"
      verified: [],
    },
    links: {
      live: "https://wexley.in/",
      github: null,
      demo: null,
    },
    images: [],
    relatedServices: ["seo", "analytics"],
    reviewNote:
      "Approach reflects the intended audit scope. Confirm what was delivered and whether recommendations were implemented.",
    preview: { accent: "cyan", motif: "audit" },
  },
  {
    slug: "seo-automation-workflow",
    published: true,
    featured: true,
    title: "SEO Research Automation",
    industry: "Marketing Operations",
    categories: ["Automation", "SEO"],
    kind: "concept",
    summary:
      "An n8n workflow design that turns a seed keyword into a structured research sheet — SERP data, competitor headings and an AI-drafted brief — with a human review step.",
    objective:
      "Reduce the repetitive part of keyword and competitor research so time goes into judgement and strategy rather than copy-pasting.",
    role: "Workflow design and documentation",
    contributions: [
      "Designed the node structure, data flow and failure handling",
      "Defined where AI is used and where a human approves output",
    ],
    tools: ["n8n", "REST APIs", "Google Sheets", "OpenAI API", "Webhooks"],
    approach: [
      "Trigger from a form or Google Sheets row containing a seed keyword and target market.",
      "Fetch SERP results and related queries through a search data API.",
      "Extract competitor page titles and headings for the top results.",
      "Ask an LLM to cluster intent and draft a content brief from the collected data only.",
      "Write everything to a sheet and notify a reviewer; nothing is published automatically.",
    ],
    observed: [],
    lessons: [
      "AI is most useful summarising data you have already collected — not inventing it.",
      "A visible approval step makes automated SEO output safe to use with clients.",
    ],
    outcome: {
      status: "Concept / demo — replace with your implemented workflow and screenshots",
      verified: [],
    },
    links: { live: null, github: null, demo: null },
    images: [],
    relatedServices: ["automation", "seo"],
    reviewNote:
      "This is a conceptual workflow. Replace with your implemented n8n workflow, a screenshot and an export link when available.",
    preview: { accent: "cyan", motif: "workflow" },
  },
  {
    slug: "idukki-spices-ecommerce",
    // Hidden until genuine screenshots, implementation notes and live URL are added.
    published: false,
    featured: false,
    title: "Idukki Spices",
    industry: "Food & Spices · Ecommerce",
    categories: ["Ecommerce", "Web Development"],
    kind: "client-build",
    summary: "Ecommerce website for a spice business. TODO(akhil): describe the real implementation.",
    objective: null,
    role: null,
    contributions: null,
    tools: [],
    approach: null,
    observed: [],
    lessons: null,
    outcome: { status: null, verified: [] },
    links: { live: null, github: null, demo: null },
    images: [],
    relatedServices: ["web"],
    reviewNote: null,
    preview: { accent: "lime", motif: "commerce" },
  },
];

export const kindLabels: Record<ProjectKind, string> = {
  "client-build": "Website build",
  audit: "Audit & recommendations",
  personal: "Personal project",
  concept: "Concept / demo",
};

export function getPublishedProjects() {
  return projects.filter((p) => p.published);
}

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug && p.published);
}

export function getProjectCategories() {
  const set = new Set<ProjectCategory>();
  getPublishedProjects().forEach((p) => p.categories.forEach((c) => set.add(c)));
  return Array.from(set);
}
