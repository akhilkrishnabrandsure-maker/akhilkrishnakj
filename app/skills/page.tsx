import type { Metadata } from "next";
import { site } from "@/lib/site";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";

export const metadata: Metadata = {
  title: `Technical Skills & Credentials | ${site.name}`,
  description:
    "Explore the technical skills, search optimization capabilities, modern frontend tools, and certified credentials of Akhil Krishna.",
};

export default function SkillsPage() {
  return (
    <div className="pt-16">
      <SkillsSection />
      <ExperienceSection />
    </div>
  );
}
