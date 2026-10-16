"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { site, navItems } from "@/lib/site";
import { Monogram } from "@/components/ui/Monogram";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("top");
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  // Detect scroll state for background and border styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section via IntersectionObserver when on homepage
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = ["top", "about", "services", "projects", "skills", "contact"];
    const elements = sections
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -65% 0px",
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  // Handle ESC key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
        toggleBtnRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#08090D]/80 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3"
            : "bg-transparent border-b border-transparent py-5"
        )}
      >
        <div className="container-page flex items-center justify-between">
          {/* Logo / Monogram */}
          <Link
            href="/#top"
            className="flex items-center gap-3 group focus-visible:outline-offset-2"
            aria-label={`${site.name} - Home`}
          >
            <Monogram size="sm" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-fg group-hover:text-lime transition-colors">
                {site.name}
              </span>
              <span className="text-[10px] font-mono tracking-wider uppercase text-muted">
                Portfolio
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-1 rounded-full border border-white/[0.08] bg-[#0F1118]/70 px-4 py-1.5 backdrop-blur-sm"
          >
            {navItems.map((item) => {
              const isActive =
                pathname === "/"
                  ? activeSection === item.id || (activeSection === "top" && item.id === "top")
                  : false;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={cn(
                    "relative px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors duration-200 rounded-full",
                    isActive
                      ? "text-lime font-semibold"
                      : "text-muted hover:text-fg hover:bg-white/[0.03]"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span
                      aria-hidden
                      className="absolute inset-x-2 -bottom-1 h-0.5 bg-lime rounded-full shadow-[0_0_8px_#b7f34a]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/[0.08] px-4 py-1.5 text-xs font-medium text-lime transition-all duration-300 hover:bg-lime hover:text-[#0b0d06] hover:shadow-[0_0_20px_rgba(183,243,74,0.4)]"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="size-3.5" />
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              ref={toggleBtnRef}
              onClick={() => setMobileOpen(!mobileOpen)}
              type="button"
              className="md:hidden relative z-50 flex size-9 items-center justify-center rounded-lg border border-white/[0.1] bg-[#141720] text-fg hover:border-lime/40 transition-colors focus-visible:outline-lime"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Menu Drawer */}
      <div
        id="mobile-navigation"
        ref={menuRef}
        aria-hidden={!mobileOpen}
        className={cn(
          "fixed inset-0 z-40 bg-[#08090D]/95 backdrop-blur-xl md:hidden transition-all duration-300 flex flex-col justify-between p-6 pt-24",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-3">
          <p className="eyebrow text-xs text-muted mb-2">Navigation</p>
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "flex items-center justify-between py-3 text-lg font-medium border-b border-white/[0.06] transition-colors",
                activeSection === item.id ? "text-lime" : "text-fg hover:text-lime"
              )}
            >
              <span>{item.label}</span>
              <span className="text-xs font-mono text-muted">0{navItems.indexOf(item) + 1}</span>
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4 pt-6 border-t border-white/[0.08]">
          {site.availability.enabled && (
            <div className="flex items-center gap-2 text-xs font-mono text-muted">
              <span className="size-2 rounded-full bg-lime animate-pulse" />
              <span>{site.availability.label}</span>
            </div>
          )}
          <Link
            href="/#contact"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 rounded-xl bg-lime py-3 text-sm font-semibold text-[#0b0d06] shadow-[0_0_20px_rgba(183,243,74,0.3)]"
          >
            <span>Let&apos;s Work Together</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
