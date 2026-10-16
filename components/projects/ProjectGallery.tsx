"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
  Search,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import type { ProjectImage } from "@/data/projects";

type ProjectGalleryProps = {
  images: ProjectImage[];
  projectTitle: string;
};

export function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const isOpen = activeIdx !== null;
  const currentImage = activeIdx !== null ? images[activeIdx] : null;

  const handlePrev = useCallback(() => {
    if (activeIdx === null) return;
    setActiveIdx((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
  }, [activeIdx, images.length]);

  const handleNext = useCallback(() => {
    if (activeIdx === null) return;
    setActiveIdx((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));
  }, [activeIdx, images.length]);

  const handleClose = useCallback(() => {
    setActiveIdx(null);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleClose, handlePrev, handleNext]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section className="space-y-6 pt-4">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-2 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-lime/30 bg-lime/10 font-mono text-[11px] text-lime font-semibold">
              <Sparkles className="size-3" /> VERIFIED EVIDENCE
            </span>
            <span className="font-mono text-xs text-muted">
              {images.length} {images.length === 1 ? "Screenshot" : "Screenshots"}
            </span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-fg flex items-center gap-2">
            <span>Visual Proof &amp; Live Search Rankings</span>
          </h2>
        </div>
        <p className="text-xs font-mono text-muted max-w-sm">
          Click any screenshot below to inspect live Google SERP positions and audience performance in high resolution.
        </p>
      </div>

      {/* Gallery Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((img, idx) => {
          // Wider aspect screenshots can span 2 columns on larger screens
          const isWide = img.width / img.height > 2;

          return (
            <div
              key={img.src}
              className={`rounded-2xl border border-white/[0.08] bg-[#0F1118] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-lime/40 group ${
                isWide ? "md:col-span-2" : ""
              }`}
            >
              {/* Card Top Pill Bar */}
              <div className="px-4 py-3 bg-[#141720] border-b border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-lime animate-pulse" />
                  <span className="text-lime font-semibold">
                    {img.tag || "Verified Telemetry"}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className="inline-flex items-center gap-1.5 text-muted hover:text-fg text-[11px] transition-colors"
                  aria-label={`Expand image: ${img.alt}`}
                >
                  <span>Expand</span>
                  <Maximize2 className="size-3" />
                </button>
              </div>

              {/* Clickable Image Preview */}
              <div
                role="button"
                tabIndex={0}
                onClick={() => setActiveIdx(idx)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveIdx(idx);
                  }
                }}
                className="relative cursor-pointer bg-[#0A0B0F] p-3 sm:p-4 flex items-center justify-center overflow-hidden focus:outline-none focus:ring-2 focus:ring-lime"
              >
                <div className="relative w-full overflow-hidden rounded-lg border border-white/[0.06] bg-black/40">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                  />

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#141720]/90 border border-white/20 text-xs font-mono text-fg shadow-lg flex items-center gap-2 backdrop-blur-sm">
                      <Maximize2 className="size-3.5 text-lime" /> View Full Screenshot
                    </span>
                  </div>
                </div>
              </div>

              {/* Caption Bar */}
              <div className="p-4 bg-[#141720]/70 border-t border-white/[0.06] space-y-1.5">
                {img.caption && (
                  <p className="text-xs text-fg/90 font-medium leading-relaxed">
                    {img.caption}
                  </p>
                )}
                <div className="flex items-center justify-between text-[11px] font-mono text-muted">
                  <span>{img.alt}</span>
                  <span className="text-lime/80 font-mono text-[10px]">
                    {img.width} × {img.height}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {isOpen && currentImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black/95 backdrop-blur-md p-4 sm:p-6"
          onClick={handleClose}
        >
          {/* Top Bar */}
          <div
            className="w-full max-w-5xl flex items-center justify-between py-2 border-b border-white/[0.1] text-xs font-mono text-fg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded-full bg-lime/10 border border-lime/30 text-lime font-semibold">
                {currentImage.tag || "Screenshot"}
              </span>
              <span className="text-muted hidden sm:inline">
                {projectTitle} · {activeIdx! + 1} of {images.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={currentImage.src}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg border border-white/10 hover:border-lime/40 text-muted hover:text-fg transition-colors flex items-center gap-1.5 text-xs"
                title="Open full resolution in new tab"
              >
                <span>Original</span>
                <ExternalLink className="size-3 text-cyan" />
              </a>

              <button
                type="button"
                onClick={handleClose}
                className="p-1.5 rounded-lg border border-white/10 hover:border-white/30 text-muted hover:text-fg transition-colors"
                aria-label="Close modal (Esc)"
              >
                <X className="size-5" />
              </button>
            </div>
          </div>

          {/* Center Image Container with Nav Chevrons */}
          <div
            className="relative w-full max-w-5xl flex-1 flex items-center justify-center my-3 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 z-10 p-2.5 rounded-full bg-black/70 border border-white/20 text-fg hover:bg-lime hover:text-black transition-colors"
                aria-label="Previous image (Left arrow)"
              >
                <ChevronLeft className="size-5" />
              </button>
            )}

            {/* Modal Image */}
            <div className="relative max-h-[72vh] max-w-full flex items-center justify-center">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                width={currentImage.width}
                height={currentImage.height}
                className="max-h-[72vh] w-auto max-w-full object-contain rounded-lg border border-white/[0.1] shadow-2xl"
                priority
              />
            </div>

            {/* Next Button */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2 sm:right-4 z-10 p-2.5 rounded-full bg-black/70 border border-white/20 text-fg hover:bg-lime hover:text-black transition-colors"
                aria-label="Next image (Right arrow)"
              >
                <ChevronRight className="size-5" />
              </button>
            )}
          </div>

          {/* Bottom Caption & Thumbnail Strip */}
          <div
            className="w-full max-w-5xl bg-[#141720]/90 border border-white/[0.1] rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center sm:text-left">
              <p className="font-semibold text-fg text-sm">
                {currentImage.caption || currentImage.alt}
              </p>
              <p className="font-mono text-[11px] text-muted mt-0.5">
                Image {activeIdx! + 1} of {images.length} · {currentImage.width} × {currentImage.height}px
              </p>
            </div>

            {/* Thumbnail Navigation */}
            {images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto max-w-full py-1">
                {images.map((thumb, tIdx) => (
                  <button
                    key={thumb.src}
                    type="button"
                    onClick={() => setActiveIdx(tIdx)}
                    className={`relative size-12 rounded-md overflow-hidden border transition-all shrink-0 ${
                      tIdx === activeIdx
                        ? "border-lime shadow-[0_0_8px_rgba(183,243,74,0.5)] scale-105"
                        : "border-white/10 opacity-50 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={thumb.src}
                      alt={thumb.alt}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
