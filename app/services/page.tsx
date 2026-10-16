import type { Metadata } from "next";
import { site } from "@/lib/site";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ResultsSection } from "@/components/sections/ResultsSection";

export const metadata: Metadata = {
  title: `Services | ${site.name} · SEO & Web Development`,
  description:
    "Comprehensive search optimization, React & Next.js web development, n8n workflow automation, and analytics setup.",
};

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <ServicesSection />
      <ResultsSection />
    </div>
  );
}
