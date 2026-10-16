"use client";

import { useState } from "react";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { site } from "@/lib/site";

export function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl = site.whatsappUrl || "https://wa.me/919778798091";

  return (
    <div
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Akhil Krishna (9778798091)"
        className={`relative flex items-center flex-row-reverse p-3 sm:p-3.5 rounded-full bg-[#25D366] text-white shadow-[0_4px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_35px_rgba(37,211,102,0.7)] transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime ${
          isHovered ? "gap-2.5 sm:gap-3 pl-4 sm:pl-5 pr-3 sm:pr-3.5" : "gap-0"
        }`}
      >
        {/* Radar ping animation effect */}
        <span
          aria-hidden="true"
          className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none"
        />

        {/* WhatsApp Icon */}
        <WhatsAppIcon className="size-6 sm:size-7 shrink-0 text-white fill-current relative z-10" />

        {/* Desktop Slide-out Label Pill */}
        <div
          className={`overflow-hidden transition-all duration-300 flex flex-col whitespace-nowrap text-right ${
            isHovered
              ? "max-w-xs opacity-100"
              : "max-w-0 opacity-0"
          }`}
        >
          <div className="flex items-center justify-end gap-1.5 leading-none">
            <span className="text-xs font-semibold text-white tracking-wide">
              Chat on WhatsApp
            </span>
            <span className="size-1.5 rounded-full bg-white animate-pulse" />
          </div>
          <span className="text-[10px] font-mono text-white/90 leading-tight mt-0.5">
            +91 9778798091
          </span>
        </div>
      </a>
    </div>
  );
}
