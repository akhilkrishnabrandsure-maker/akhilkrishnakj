import type { Metadata } from "next";
import { site } from "@/lib/site";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { AutomationShowcase } from "@/components/sections/AutomationShowcase";

export const metadata: Metadata = {
  title: `Selected Projects & Case Studies | ${site.name}`,
  description:
    "Explore case studies in Next.js web development, Shopify SEO audits, and n8n research automations by Akhil Krishna.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      <ProjectsSection />
      <AutomationShowcase />
    </div>
  );
}
