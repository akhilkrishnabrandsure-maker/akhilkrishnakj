import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { AutomationShowcase } from "@/components/sections/AutomationShowcase";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { site } from "@/lib/site";

export default function Home() {
  // Structured data (JSON-LD) for Person and WebSite
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.headline,
    description: site.description,
    url: site.url,
    sameAs: site.social
      .map((s) => s.href)
      .filter((href): href is string => Boolean(href)),
    knowsAbout: [
      "Search Engine Optimization (SEO)",
      "Technical SEO",
      "Next.js",
      "React",
      "n8n Workflow Automation",
      "API Integrations",
      "Web Performance Optimization",
      "Google Analytics 4",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${site.name} Portfolio`,
    url: site.url,
    description: site.description,
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Main Narrative Flow */}
      <main className="flex flex-col min-h-screen">
        <HeroSection />
        <TrustStrip />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ResultsSection />
        <AutomationShowcase />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </>
  );
}
