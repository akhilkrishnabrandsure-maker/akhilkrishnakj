export type ServiceId = "seo" | "web" | "automation" | "analytics";

export type Service = {
  id: ServiceId;
  title: string;
  short: string;
  description: string;
  /** Accent used for icon + glow. Lime = growth/primary, cyan = technical/automation. */
  accent: "lime" | "cyan";
  includes: string[];
  /** What a typical engagement looks like — process, not promised results. */
  approach: string[];
};

export const services: Service[] = [
  {
    id: "seo",
    title: "Search Engine Optimization",
    short: "SEO",
    description:
      "Improve search visibility through strategic, technical, and content-focused SEO.",
    accent: "lime",
    includes: [
      "Technical SEO audits",
      "Keyword research",
      "On-page optimization",
      "Content optimization",
      "Internal linking",
      "Local SEO",
      "Search Console analysis",
      "Organic performance reporting",
    ],
    approach: [
      "Crawl and index review to find what search engines can and cannot see",
      "Keyword and intent mapping against existing pages",
      "Prioritised fixes ranked by effort and likely impact",
      "Ongoing measurement in Search Console and GA4",
    ],
  },
  {
    id: "web",
    title: "Web Development",
    short: "Development",
    description:
      "Build fast, responsive websites with thoughtful design and solid technical foundations.",
    accent: "cyan",
    includes: [
      "React and Next.js development",
      "MERN stack applications",
      "Responsive UI implementation",
      "Website performance optimization",
      "Technical SEO implementation",
      "API integration",
      "Website maintenance",
    ],
    approach: [
      "Information architecture planned around how people search",
      "Component-based builds with clean, maintainable code",
      "Core Web Vitals and accessibility checked before launch",
      "Metadata, structured data and sitemaps built in from day one",
    ],
  },
  {
    id: "automation",
    title: "AI & Workflow Automation",
    short: "Automation",
    description:
      "Connect applications and automate repetitive workflows using AI and APIs.",
    accent: "cyan",
    includes: [
      "n8n workflows",
      "AI-assisted SEO workflows",
      "API integrations",
      "Automated reporting",
      "Data processing",
      "Workflow notifications",
      "Human approval steps where necessary",
    ],
    approach: [
      "Map the current manual process and where time is lost",
      "Design the workflow with clear inputs, outputs and failure handling",
      "Keep a human review step wherever AI output reaches customers",
      "Document the workflow so your team can own it",
    ],
  },
  {
    id: "analytics",
    title: "Digital Marketing & Analytics",
    short: "Analytics",
    description:
      "Connect marketing strategy with measurement and continuous improvement.",
    accent: "lime",
    includes: [
      "Analytics setup",
      "Conversion tracking",
      "Campaign performance analysis",
      "Landing page optimization",
      "Search performance reporting",
      "Data-driven recommendations",
    ],
    approach: [
      "Define what a meaningful conversion is for the business",
      "Set up GA4 events and conversions that match those goals",
      "Build reports people actually read",
      "Turn findings into a short list of concrete next steps",
    ],
  },
];

export function getService(id: ServiceId) {
  return services.find((s) => s.id === id);
}
