/**
 * Automation showcase data.
 *
 * `status`:
 *   - "implemented": a real workflow you have built and run. Add a screenshot
 *     (`image`) and, if possible, a link to an exported JSON or video demo.
 *   - "concept": a design/demonstration. Always labelled as such in the UI.
 *
 * The showcase is purely visual — it never pretends to execute anything.
 */

export type NodeKind = "trigger" | "input" | "process" | "ai" | "output" | "review";

export type WorkflowNode = {
  id: string;
  kind: NodeKind;
  label: string;
  detail: string;
};

export type Workflow = {
  id: string;
  title: string;
  summary: string;
  status: "implemented" | "concept";
  tools: string[];
  nodes: WorkflowNode[];
  image?: { src: string; alt: string; width: number; height: number };
  demoUrl?: string;
};

export const workflows: Workflow[] = [
  {
    id: "keyword-research",
    title: "Keyword research assistant",
    summary:
      "Expands a seed keyword into related queries, groups them by intent and writes a clean research sheet.",
    status: "concept",
    tools: ["n8n", "Search data API", "OpenAI", "Google Sheets"],
    nodes: [
      { id: "t", kind: "trigger", label: "Form / Sheet row", detail: "New seed keyword + target country" },
      { id: "i", kind: "input", label: "Fetch SERP data", detail: "Related queries, People Also Ask, top URLs" },
      { id: "p", kind: "process", label: "Clean & dedupe", detail: "Normalise casing, remove duplicates and brand terms" },
      { id: "a", kind: "ai", label: "Cluster by intent", detail: "LLM groups queries using only the fetched data" },
      { id: "r", kind: "review", label: "Human review", detail: "Strategist approves clusters before use" },
      { id: "o", kind: "output", label: "Research sheet", detail: "Clusters, intent and suggested page type" },
    ],
  },
  {
    id: "competitor-analysis",
    title: "Competitor content analysis",
    summary:
      "Collects headings and structure from top-ranking pages so content gaps are visible in minutes.",
    status: "concept",
    tools: ["n8n", "HTTP Request", "HTML Extract", "OpenAI"],
    nodes: [
      { id: "t", kind: "trigger", label: "Target keyword", detail: "Manual trigger or webhook" },
      { id: "i", kind: "input", label: "Top 10 URLs", detail: "From a SERP API response" },
      { id: "p", kind: "process", label: "Extract headings", detail: "H1–H3, word count, schema types" },
      { id: "a", kind: "ai", label: "Gap summary", detail: "Topics competitors cover that you don't" },
      { id: "r", kind: "review", label: "Editor check", detail: "Validate findings against the live pages" },
      { id: "o", kind: "output", label: "Gap report", detail: "Sheet + Slack/email summary" },
    ],
  },
  {
    id: "seo-reporting",
    title: "SEO reporting automation",
    summary:
      "Pulls Search Console data on a schedule and sends a short, readable performance summary.",
    status: "concept",
    tools: ["n8n", "Search Console API", "Google Sheets", "Email"],
    nodes: [
      { id: "t", kind: "trigger", label: "Weekly schedule", detail: "Cron trigger every Monday" },
      { id: "i", kind: "input", label: "Search Console API", detail: "Clicks, impressions, CTR, position by page" },
      { id: "p", kind: "process", label: "Compare periods", detail: "Week-over-week change, top movers" },
      { id: "a", kind: "ai", label: "Plain-English summary", detail: "Highlights based strictly on the numbers" },
      { id: "o", kind: "output", label: "Report + archive", detail: "Email summary, raw data saved to Sheets" },
    ],
  },
  {
    id: "content-brief",
    title: "AI-assisted content briefs",
    summary:
      "Combines keyword clusters and competitor structure into a draft brief that a writer can trust.",
    status: "concept",
    tools: ["n8n", "Google Sheets", "OpenAI", "Google Docs"],
    nodes: [
      { id: "t", kind: "trigger", label: "Approved cluster", detail: "Row marked “ready” in the research sheet" },
      { id: "i", kind: "input", label: "Gather inputs", detail: "Cluster queries, competitor headings, brand notes" },
      { id: "a", kind: "ai", label: "Draft brief", detail: "Outline, questions to answer, internal links" },
      { id: "r", kind: "review", label: "Approval step", detail: "Editor approves or requests changes" },
      { id: "o", kind: "output", label: "Google Doc", detail: "Brief created and shared with the writer" },
    ],
  },
];
