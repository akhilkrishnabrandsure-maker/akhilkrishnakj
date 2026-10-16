"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { site, navItems } from "@/lib/site";
import { Monogram } from "@/components/ui/Monogram";
import { SocialIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#08090D] pt-16 pb-12 overflow-hidden">
      {/* Subtle top ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 -top-24 h-48 w-96 -translate-x-1/2 rounded-full bg-lime/5 blur-3xl"
      />

      <div className="container-page relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/[0.06]">
          {/* Brand & Positioning */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link href="/#top" className="flex items-center gap-3 w-fit group">
              <Monogram size="md" />
              <div className="flex flex-col">
                <span className="text-base font-semibold tracking-tight text-fg group-hover:text-lime transition-colors">
                  {site.name}
                </span>
                <span className="text-xs font-mono text-muted">
                  {site.headline}
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted leading-relaxed max-w-sm mt-2">
              {site.shortBio}
            </p>
            {site.availability.enabled && (
              <div className="flex items-center gap-2 text-xs font-mono text-lime/90 mt-2">
                <span className="size-2 rounded-full bg-lime animate-pulse" />
                <span>{site.availability.label}</span>
              </div>
            )}
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <p className="eyebrow text-xs text-fg">Navigation</p>
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted hover:text-lime transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Direct Inquiry */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <p className="eyebrow text-xs text-fg">Direct Inquiry</p>
            <p className="text-sm text-muted">
              Ready to grow your search visibility or streamline repetitive workflows?
            </p>

            <div className="flex flex-col gap-2">
              {site.email && (
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-sm font-mono text-lime hover:underline"
                >
                  <Mail className="size-4" />
                  <span>{site.email}</span>
                </a>
              )}
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-mono text-lime hover:underline"
              >
                <WhatsAppIcon className="size-4 fill-current text-[#25D366]" />
                <span>WhatsApp: +91 {site.whatsappNumber}</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {site.social.map((soc) => {
                if (!soc.href) return null;
                return (
                  <a
                    key={soc.id}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={soc.label}
                    className="flex size-9 items-center justify-center rounded-lg border border-white/[0.08] bg-[#141720] text-muted hover:text-lime hover:border-lime/30 transition-all"
                  >
                    <SocialIcon id={soc.id} className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted font-mono">
          <p>© {currentYear} {site.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-[11px] text-[#7D8597]">
              Built with Next.js, TypeScript &amp; Tailwind CSS
            </span>
            <button
              onClick={scrollToTop}
              type="button"
              className="flex items-center gap-1.5 text-muted hover:text-lime transition-colors group focus-visible:outline-lime"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="size-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
