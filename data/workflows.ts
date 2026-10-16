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
    title: "Automated Keyword Research Agent",
    summary:
      "Automates keyword research, query expansion, and topic clustering using an embedded AI SEO agent with human validation.",
    status: "implemented",
    tools: ["BrandSure Platform", "AI Agents", "Search Console API", "Shopify API"],
    nodes: [
      { id: "t", kind: "trigger", label: "Seed Query / Store Catalog", detail: "Shopify product sync or new seed keywords" },
      { id: "i", kind: "input", label: "Fetch SERP & Search Volume", detail: "Google Search Console and live SERP rankings" },
      { id: "p", kind: "process", label: "Clean & Intent Mapping", detail: "Filter branded terms, classify transactional intent" },
      { id: "a", kind: "ai", label: "AI Agent Clustering", detail: "Ask SEO Manager agent clusters queries & spots gaps" },
      { id: "r", kind: "review", label: "Strategist Review", detail: "Review and approve before staging updates" },
      { id: "o", kind: "output", label: "Opportunity Pipeline", detail: "Pushed to product SEO tasks and content briefs" },
    ],
  },
  {
    id: "competitor-analysis",
    title: "Competitor Analysis & Gap Discovery",
    summary:
      "Tracks competitor rankings and content structures to detect untapped search opportunities in real time.",
    status: "implemented",
    tools: ["BrandSure Platform", "Competitor Crawler", "AI Engine", "Opportunity Finder"],
    nodes: [
      { id: "t", kind: "trigger", label: "Competitor Domain Monitor", detail: "Automated scheduled crawl or manual trigger" },
      { id: "i", kind: "input", label: "Competitor SERP Rankings", detail: "Top 10 URLs and heading hierarchy" },
      { id: "p", kind: "process", label: "Content Structure Extraction", detail: "H1–H3 headings, entity markup, word counts" },
      { id: "a", kind: "ai", label: "Gap Analysis Agent", detail: "Identifies target topics competitors rank for" },
      { id: "r", kind: "review", label: "Opportunity Verification", detail: "Strategist validates priority level" },
      { id: "o", kind: "output", label: "Actionable SEO Task", detail: "Staged in BrandSure dashboard for execution" },
    ],
  },
  {
    id: "seo-reporting",
    title: "Weekly Client Delivery & Growth Card",
    summary:
      "Gathers multi-client telemetry, drafts executive SEO Growth Cards, and dispatches weekly digests via WhatsApp and email.",
    status: "implemented",
    tools: ["BrandSure Platform", "GSC API", "GA4 API", "Meta WhatsApp API"],
    nodes: [
      { id: "t", kind: "trigger", label: "Weekly Cadence Trigger", detail: "Automated batch run every Monday" },
      { id: "i", kind: "input", label: "Multi-Client Telemetry Sync", detail: "Clicks, impressions, CTR, keyword climbers" },
      { id: "p", kind: "process", label: "Period Comparison Engine", detail: "Week-over-week deltas and top winning queries" },
      { id: "a", kind: "ai", label: "Growth Card Generator", detail: "Generates executive digest with key wins" },
      { id: "r", kind: "review", label: "Staged Human Approval", detail: "Reviewer approves card in delivery pipeline" },
      { id: "o", kind: "output", label: "Automated Dispatch", detail: "Sent to client via WhatsApp and email" },
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
