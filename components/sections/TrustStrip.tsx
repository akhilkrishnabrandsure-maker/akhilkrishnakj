import { Reveal } from "@/components/animations/Reveal";

const expertiseCategories = [
  "SEO Strategy",
  "Technical SEO",
  "Web Development",
  "AI Automation",
  "Analytics",
];

export function TrustStrip() {
  return (
    <div className="relative border-y border-white/[0.08] bg-[#0F1118]/60 backdrop-blur-md py-6 overflow-hidden">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-y-4 gap-x-8 text-center">
            {expertiseCategories.map((item, index) => (
              <div key={item} className="flex items-center gap-6">
                <span className="font-mono text-xs md:text-sm font-medium tracking-wider uppercase text-muted hover:text-fg transition-colors">
                  {item}
                </span>
                {index < expertiseCategories.length - 1 && (
                  <span
                    aria-hidden
                    className="hidden md:inline-block size-1 rounded-full bg-lime/60"
                  />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
