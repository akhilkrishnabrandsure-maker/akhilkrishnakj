import type { Metadata } from "next";
import { site } from "@/lib/site";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: `Contact & Collaboration | ${site.name}`,
  description:
    "Get in touch with Akhil Krishna to discuss technical SEO, Next.js web development, or workflow automation projects.",
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <ContactSection />
    </div>
  );
}
