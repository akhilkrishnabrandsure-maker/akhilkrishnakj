import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Compass,
  FileSearch,
  Workflow,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  Info,
} from "lucide-react";
import {
  getProject,
  getPublishedProjects,
  kindLabels,
  type Project,
} from "@/data/projects";
import { site } from "@/lib/site";
import { Badge, Tag } from "@/components/ui/Badge";
import { Placeholder } from "@/components/ui/Placeholder";
import { ButtonLink } from "@/components/ui/Button";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { TrendingUp, BarChart3 } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export async function generateStaticParams() {
  return getPublishedProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Case Study · ${site.name}`,
    description: project.summary,
    openGraph: {
      title: `${project.title} - Case Study`,
      description: project.summary,
      url: `${site.url}/projects/${project.slug}`,
      siteName: site.name,
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} - Case Study`,
      description: project.summary,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  // JSON-LD structured data for creative work / case study
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.title,
    description: project.summary,
    creator: {
      "@type": "Person",
      name: site.name,
      jobTitle: site.headline,
      url: site.url,
    },
    keywords: project.tools.concat(project.categories).join(", "),
  };

  return (
    <article className="min-h-screen pt-28 pb-20 bg-[#08090D] text-fg">
      {/* Inject sanitized JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="container-page max-w-4xl">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-muted hover:text-lime transition-colors"
          >
            <ArrowLeft className="size-3.5" />
            <span>Back to all projects</span>
          </Link>
        </div>

        {/* Review Note Banner if narrative needs owner confirmation */}
        {project.reviewNote && (
          <div className="mb-8">
            <Placeholder label="Draft Review Note">
              {project.reviewNote}
            </Placeholder>
          </div>
        )}

        {/* Case Study Header */}
        <header className="space-y-4 pb-8 border-b border-white/[0.08]">
          <div className="flex flex-wrap items-center gap-3">
            <Badge tone={project.kind === "client-build" ? "lime" : "cyan"}>
              {kindLabels[project.kind]}
            </Badge>
            <span className="font-mono text-xs text-muted">{project.industry}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-fg leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-muted leading-relaxed font-normal">
            {project.summary}
          </p>

          {/* Key Metadata Table */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-xs font-mono">
            <div>
              <span className="text-muted block mb-1">Focus Areas</span>
              <span className="text-fg font-semibold">{project.categories.join(", ")}</span>
            </div>
            <div>
              <span className="text-muted block mb-1">Delivery Status</span>
              <span className="text-lime font-semibold">{project.outcome.status || "In Review"}</span>
            </div>
            <div>
              <span className="text-muted block mb-1">Live Reference</span>
              {project.links.live ? (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  Visit Site <ExternalLink className="size-3" />
                </a>
              ) : (
                <span className="text-muted">Not deployed publicly</span>
              )}
            </div>
            <div>
              <span className="text-muted block mb-1">Architecture</span>
              <span className="text-fg font-semibold">{project.tools[0] || "Custom"}</span>
            </div>
          </div>
        </header>

        {/* Case Study Body */}
        <div className="py-10 space-y-12">
          {/* Section: Objective & Problem */}
          {project.objective && (
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-fg flex items-center gap-2">
                <span className="text-lime font-mono text-sm">01</span>
                <span>Objective &amp; Challenge</span>
              </h2>
              <div className="rounded-xl border border-white/[0.08] bg-[#0F1118] p-5 text-sm text-muted leading-relaxed">
                {project.objective}
              </div>
            </section>
          )}

          {/* Section: Actual Role & Contribution */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-fg flex items-center gap-2">
              <span className="text-lime font-mono text-sm">02</span>
              <span>Role &amp; Concrete Contribution</span>
            </h2>
            {project.role || project.contributions ? (
              <div className="rounded-xl border border-white/[0.08] bg-[#0F1118] p-5 space-y-3 text-sm text-muted">
                {project.role && <p className="font-semibold text-fg">{project.role}</p>}
                {project.contributions && (
                  <ul className="space-y-2 list-disc list-inside">
                    {project.contributions.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Placeholder label="Owner Contribution">
                Configure your verified contribution and specific role for this project.
              </Placeholder>
            )}
          </section>

          {/* Section: Approach & Implementation */}
          {project.approach && project.approach.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-fg flex items-center gap-2">
                <span className="text-lime font-mono text-sm">03</span>
                <span>Implementation Approach</span>
              </h2>
              <div className="rounded-xl border border-white/[0.08] bg-[#0F1118] p-5 space-y-3">
                {project.approach.map((step, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-muted">
                    <span className="font-mono text-xs text-lime mt-0.5 shrink-0">0{i + 1}</span>
                    <p className="leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section: Verified Outcomes & Documented Results */}
          {project.outcome.verified && project.outcome.verified.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-fg flex items-center gap-2">
                  <span className="text-lime font-mono text-sm">04</span>
                  <span>Documented Outcomes &amp; Metrics</span>
                </h2>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-lime/30 bg-lime/10 font-mono text-[11px] text-lime font-semibold">
                  <TrendingUp className="size-3" /> VERIFIED SIGNALS
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {project.outcome.verified.map((metric, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/[0.08] bg-[#141720] p-4 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-mono text-muted block mb-1">{metric.label}</span>
                      <span className="text-2xl sm:text-3xl font-mono font-bold text-lime block tracking-tight">
                        {metric.value}
                      </span>
                    </div>
                    <div className="mt-3 pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-muted">
                      <span className="truncate" title={metric.source}>{metric.source}</span>
                      {metric.period && <span className="text-cyan shrink-0 ml-1">{metric.period}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section: Visual Evidence & Screenshot Gallery */}
          {project.images && project.images.length > 0 && (
            <ProjectGallery images={project.images} projectTitle={project.title} />
          )}

          {/* Section: Live Verifiable Facts (Telemetry & Observations) */}
          {project.observed && project.observed.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-fg flex items-center gap-2">
                <span className="text-lime font-mono text-sm">05</span>
                <span>Verified Public Observations</span>
              </h2>
              <div className="rounded-xl border border-white/[0.08] bg-[#141720] p-5 space-y-2.5">
                <p className="text-xs text-muted mb-3 font-mono">
                  Features verifiable on the public production site:
                </p>
                {project.observed.map((fact, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-fg/90">
                    <CheckCircle2 className="size-3.5 text-lime shrink-0 mt-0.5" />
                    <span>{fact}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section: Tools & Technology Stack */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-fg flex items-center gap-2">
              <span className="text-lime font-mono text-sm">06</span>
              <span>Tools &amp; Infrastructure</span>
            </h2>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tools.length > 0 ? (
                project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-lg border border-white/[0.1] bg-[#141720] px-3 py-1.5 font-mono text-xs text-fg"
                  >
                    {tool}
                  </span>
                ))
              ) : (
                <Placeholder label="Tooling Stack">
                  Tools used on this engagement can be added in <code className="text-lime">data/projects.ts</code>.
                </Placeholder>
              )}
            </div>
          </section>

          {/* Section: Key Lessons */}
          {project.lessons && project.lessons.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-fg flex items-center gap-2">
                <span className="text-lime font-mono text-sm">07</span>
                <span>Key Insights &amp; Takeaways</span>
              </h2>
              <div className="rounded-xl border border-white/[0.08] bg-[#0F1118] p-5 space-y-2">
                {project.lessons.map((lesson, i) => (
                  <p key={i} className="text-sm text-muted leading-relaxed">
                    • {lesson}
                  </p>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Bottom CTA Card */}
        <footer className="mt-12 pt-8 border-t border-white/[0.08] rounded-2xl border border-white/[0.08] bg-[#141720] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-fg">Have a similar project in mind?</h3>
            <p className="text-xs text-muted mt-1">
              Let&apos;s evaluate your current architecture and identify organic growth opportunities.
            </p>
          </div>
          <ButtonLink href="/#contact" variant="primary" size="md" arrow>
            Discuss Next Steps
          </ButtonLink>
        </footer>
      </div>
    </article>
  );
}
