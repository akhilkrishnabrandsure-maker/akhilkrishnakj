/**
 * Verified results.
 *
 * Leave `results` empty until you have real, sourced data. While empty, the
 * Results section shows the measurement methodology instead of numbers.
 *
 * Example of a valid entry:
 * {
 *   id: "gwh-clicks",
 *   project: "green-world-holidays",
 *   label: "Organic clicks",
 *   before: 120, after: 410, unit: "",
 *   period: "Jan–Mar 2026 vs Oct–Dec 2025",
 *   source: "Google Search Console",
 *   series: [120, 150, 180, 240, 300, 410], // optional, for the sparkline
 * }
 */

export type ResultMetric = {
  id: string;
  project?: string;
  label: string;
  before: number;
  after: number;
  unit?: string;
  /** If true, a decrease is an improvement (e.g. LCP seconds, avg. position). */
  lowerIsBetter?: boolean;
  period: string;
  source: string;
  series?: number[];
};

export const results: ResultMetric[] = [];

export const methodology = [
  {
    title: "Baseline first",
    body: "Every engagement starts by recording the current state — Search Console clicks and impressions, indexed pages, Core Web Vitals and conversions — so change can be measured honestly.",
  },
  {
    title: "Comparable periods",
    body: "Results are compared across equal date ranges and, where seasonality matters, year-over-year, with the exact dates stated next to every figure.",
  },
  {
    title: "Named sources",
    body: "Numbers come from Google Search Console, GA4, PageSpeed Insights / CrUX or the workflow’s own logs. Each metric shows its source.",
  },
  {
    title: "Context over vanity",
    body: "Rankings alone don’t pay bills. Reports connect visibility to clicks, enquiries and time saved — and say plainly when something didn’t move.",
  },
];

export const measuredSignals = [
  { label: "Organic clicks & impressions", source: "Search Console" },
  { label: "Indexed vs. submitted pages", source: "Search Console" },
  { label: "Core Web Vitals (LCP, INP, CLS)", source: "CrUX / PageSpeed" },
  { label: "Conversions & enquiries", source: "GA4" },
  { label: "Keyword visibility by cluster", source: "Rank tracking" },
  { label: "Hours saved per workflow run", source: "Workflow logs" },
];
