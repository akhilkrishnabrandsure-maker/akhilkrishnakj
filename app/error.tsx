"use client";

import { useEffect } from "react";
import { AlertCircle, RotateCcw } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error boundary triggered:", error);
  }, [error]);

  return (
    <main className="min-h-[70vh] flex items-center justify-center p-6 bg-[#08090D] text-fg">
      <div className="max-w-md text-center space-y-6 rounded-2xl border border-white/[0.08] bg-[#0F1118] p-8">
        <div className="size-12 rounded-xl border border-rose-500/30 bg-rose-500/10 mx-auto flex items-center justify-center text-rose-400">
          <AlertCircle className="size-6" />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-fg">Something went wrong</h2>
          <p className="text-xs text-muted leading-relaxed">
            An unexpected error occurred while rendering this page.
          </p>
        </div>
        <button
          onClick={() => reset()}
          type="button"
          className="inline-flex items-center gap-2 rounded-xl bg-lime px-5 py-2.5 text-xs font-semibold text-[#0b0d06] hover:bg-[#c6f86a] transition-all cursor-pointer"
        >
          <RotateCcw className="size-3.5" />
          <span>Try Again</span>
        </button>
      </div>
    </main>
  );
}
