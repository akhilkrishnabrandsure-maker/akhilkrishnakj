/**
 * Skills — only list what you can substantiate in an interview or with work.
 * `note` explains how the skill is used. Proficiency levels are intentionally
 * omitted (no arbitrary percentages); add `level` later if you want it.
 */

export type SkillCategoryId = "seo" | "development" | "automation" | "analytics";

export type Skill = {
  name: string;
  note?: string;
};

export type SkillCategory = {
  id: SkillCategoryId;
  label: string;
  blurb: string;
  accent: "lime" | "cyan";
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "seo",
    label: "SEO",
    blurb: "Making sites understandable to search engines and useful to the people searching.",
    accent: "lime",
    skills: [
      { name: "Technical SEO", note: "Crawling, indexation, canonicals, sitemaps, structured data" },
      { name: "Keyword Research", note: "Intent mapping and topic clustering" },
      { name: "On-page SEO", note: "Titles, headings, internal links, metadata" },
      { name: "Content Optimization", note: "Aligning content with search intent" },
      { name: "Local SEO", note: "Location pages, business profiles, local schema" },
      { name: "Google Search Console", note: "Coverage, performance and query analysis" },
      { name: "Analytics", note: "Connecting organic traffic to outcomes" },
    ],
  },
  {
    id: "development",
    label: "Development",
    blurb: "Building fast, accessible websites with clean, maintainable code.",
    accent: "cyan",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Next.js", note: "App Router, metadata API, image optimisation" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Git" },
    ],
  },
  {
    id: "automation",
    label: "Automation",
    blurb: "Connecting tools so repetitive work runs itself — with humans in the loop.",
    accent: "cyan",
    skills: [
      { name: "n8n", note: "Workflow design, error handling, scheduling" },
      { name: "REST APIs", note: "Authentication, pagination, data mapping" },
      { name: "Webhooks" },
      { name: "AI Integrations", note: "LLM steps with structured inputs and review" },
      { name: "Workflow Design", note: "Clear inputs, outputs and approval steps" },
    ],
  },
  {
    id: "analytics",
    label: "Marketing & Analytics",
    blurb: "Measuring what matters and turning numbers into decisions.",
    accent: "lime",
    skills: [
      { name: "GA4", note: "Events, conversions, explorations" },
      { name: "Conversion Tracking" },
      { name: "Campaign Analysis" },
      { name: "Performance Reporting" },
    ],
  },
];
