import type { Metadata } from "next";
import { site } from "@/lib/site";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";

export const metadata: Metadata = {
  title: `About ${site.name} | SEO Specialist & Web Developer`,
  description:
    "Learn about Akhil Krishna's approach to technical SEO, modern web engineering, and AI workflow automation.",
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <AboutSection />
      <ExperienceSection />
    </div>
  );
}
