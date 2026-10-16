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
    categories: ["SEO", "Automation"],
    kind: "client-build",
    summary:
      "SEO automation, keyword tracking, and Shopify catalog telemetry for a Bangalore furniture brand — connecting Search Console, GA4, and an AI SEO agent to scale organic search discovery.",
    objective:
      "Transform search visibility and product discovery for a premium furniture brand by automating keyword research, competitor tracking, rank checks, and continuous opportunity discovery directly with Shopify.",
    role: "SEO Automation Engineer & Organic Search Strategist",
    contributions: [
      "Integrated Shopify storefront (wexley.in) with Google Search Console API and GA4 telemetry.",
      "Built automated keyword tracking and ranking health monitors overseeing 848 commercial furniture queries.",
      "Integrated AI SEO Manager agent for rapid keyword clustering, content gap identification, and on-demand search intelligence.",
      "Configured automated product SEO tracking and weekly performance reporting.",
    ],
    tools: [
      "Shopify Integration",
      "Google Search Console",
      "GA4",
      "AI SEO Agents",
      "Rank Tracking",
      "Technical SEO",
      "BrandSure Platform",
    ],
    approach: [
      "Connect live ecommerce catalog with real-time Google Search Console performance data.",
      "Deploy automated keyword rank tracking across 848 target keywords to monitor daily and weekly SERP shifts.",
      "Use AI agent intelligence to spot new search opportunities and catalog optimizations before competitors.",
      "Generate automated weekly performance digests comparing period-over-period clicks, impressions, and positions.",
    ],
    observed: [
      "Shopify storefront live at wexley.in with GSC & GA4 integration verified",
      "1,011 Organic Clicks (+455% period-over-period increase)",
      "12,879 Search Impressions (+555% growth in Google search exposure)",
      "848 Total Tracked Keywords with 508 ranking in Google Top 10 and 128 in Top 3",
      "FurnitureStore JSON-LD schema with localized Bangalore neighbourhood targeting",
    ],
    lessons: [
      "Connecting Shopify product data directly to search telemetry allows immediate identification of unindexed or declining product pages.",
      "Automated rank monitoring frees up time to focus on actionable content enhancements rather than manual rank checks.",
    ],
    outcome: {
      status: "Live Shopify & GSC Automation (+455% Clicks)",
      verified: [
        {
          label: "Organic Clicks",
          value: "1,011 (+455%)",
          source: "BrandSure Dashboard / GSC (vs Jul 2026)",
          period: "Aug 2026",
        },
        {
          label: "Impressions",
          value: "12,879 (+555%)",
          source: "Google Search Console",
          period: "Aug 2026",
        },
        {
          label: "Top 10 Rankings",
          value: "508 Keywords",
          source: "BrandSure Rank Tracker (848 Total)",
          period: "Aug 2026",
        },
        {
          label: "Landing Page Users",
          value: "552 Users",
          source: "GA4 Integrated Telemetry",
          period: "Aug 2026",
        },
      ],
    },
    links: {
      live: "https://wexley.in/",
      github: null,
      demo: null,
    },
    images: [
      {
        src: "/assets/wexley-seo-automation-dashboard.png",
        alt: "BrandSure SEO Automation Dashboard for Wexley (wexley.in)",
        width: 1024,
        height: 495,
        caption: "Wexley SEO Automation Dashboard — 1,011 Clicks (+455%), 12.8k Impressions (+555%), 848 Tracked Keywords, AI SEO Agent & Shopify Integration",
        tag: "Live Automation & Shopify",
      },
    ],
    relatedServices: ["seo", "automation", "analytics"],
    reviewNote: null,
    preview: { accent: "cyan", motif: "audit" },
  },
  {
    slug: "seo-automation-workflow",
    published: true,
    featured: true,
    title: "BrandSure — SEO Automation & Client Reporting Engine",
    industry: "Marketing Operations · B2B SaaS",
    categories: ["Automation", "SEO"],
    kind: "client-build",
    summary:
      "An automated SEO intelligence and client reporting platform — automated keyword research with AI agents, competitor tracking, rank checkers, Shopify product sync, and automated weekly client report delivery via WhatsApp.",
    objective:
      "Eliminate manual SEO workflows and client reporting bottlenecks by automating keyword research, competitor gap analysis, rank monitoring, and generating polished weekly client digests with human review approval stages.",
    role: "Full-Stack System Architect & Workflow Engineer",
    contributions: [
      "Engineered the multi-client SEO automation engine supporting AI-assisted keyword research, competitor analysis, and opportunity detection.",
      "Developed Shopify and Google Search Console integrations for real-time rank tracking and product catalog telemetry.",
      "Built the end-to-end Weekly Client Delivery Pipeline with stage-gated review (Syncing -> Pending Review -> Approved -> Delivered).",
      "Designed automated executive 'SEO Growth Card' client reports distributed weekly via Meta WhatsApp and email.",
    ],
    tools: [
      "Next.js",
      "AI Agents",
      "Shopify API",
      "Google Search Console API",
      "Meta WhatsApp API",
      "n8n Workflows",
      "Tailwind CSS",
      "TypeScript",
    ],
    approach: [
      "Automate data ingestion from Google Search Console, GA4, and Shopify store APIs into a unified multi-client data warehouse.",
      "Deploy AI agents to continuously analyze competitor content structures and highlight actionable high-intent keyword opportunities.",
      "Implement a stage-gated review pipeline so all automated insights and generated client cards require human approval before client dispatch.",
      "Generate clean, branded visual 'SEO Growth Card' reports summarizing clicks, impressions, keyword movements, and weekly wins.",
    ],
    observed: [
      "Deployed client reporting pipeline managing multi-client telemetry batches",
      "4/4 Active Client Retention (100% retained) across healthcare, ecommerce, and tech",
      "10,135 Aggregated Google Search clicks tracked with +62.2% portfolio momentum",
      "Automated weekly client report generation and WhatsApp dispatch pipeline",
      "Executive client digest tracking week-over-week clicks (+18.4%), impressions (+26.1%), and key SERP wins",
    ],
    lessons: [
      "Combining automated data collection with a human approval checkpoint guarantees agency-grade accuracy while saving 15+ hours weekly.",
      "Visual executive 'Growth Cards' delivered directly to client WhatsApp channels achieve significantly higher client engagement than complex spreadsheet dumps.",
    ],
    outcome: {
      status: "Live Production Platform & Active Client Pipelines",
      verified: [
        {
          label: "Portfolio Clicks",
          value: "10,135",
          source: "BrandSure Multi-Client Telemetry (+62% Growth)",
          period: "Week 41, 2026",
        },
        {
          label: "Client Retention",
          value: "100% (4/4)",
          source: "BrandSure Agency Portal",
          period: "Active",
        },
        {
          label: "Reporting Pipeline",
          value: "Weekly Batch",
          source: "Automated WhatsApp & Email Dispatch",
          period: "Weekly",
        },
        {
          label: "Executive Report",
          value: "+18.4% Clicks",
          source: "SEO Growth Card Client Digest (74.2k Impr)",
          period: "Week 41, 2026",
        },
      ],
    },
    links: { live: null, github: null, demo: null },
    images: [
      {
        src: "/assets/wexley-seo-automation-dashboard.png",
        alt: "BrandSure SEO Automation Platform - AI Agent, Competitors, and Shopify Sync",
        width: 1024,
        height: 495,
        caption: "Automate SEO Keyword Research with AI Agent, Competitor Tracking, Rank Checker & Shopify Product Sync",
        tag: "AI Agent & Automation",
      },
      {
        src: "/assets/brandsure-weekly-client-reporting-pipeline.png",
        alt: "BrandSure Weekly Client Delivery Pipeline",
        width: 1024,
        height: 454,
        caption: "Weekly Client Delivery Pipeline — Managing Drafts, Staged Human Review, and Automated Delivery via WhatsApp",
        tag: "Client Delivery Pipeline",
      },
      {
        src: "/assets/brandsure-demo-weekly-seo-report.png",
        alt: "BrandSure Demo Weekly SEO Report Sent to Client - SEO Growth Card",
        width: 819,
        height: 1024,
        caption: "Client Demo Report: Automated Executive SEO Growth Card delivered to clients with weekly search momentum and key wins",
        tag: "Demo Client Report",
      },
    ],
    relatedServices: ["automation", "seo", "analytics"],
    reviewNote: null,
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
