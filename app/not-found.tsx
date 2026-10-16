import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center pt-24 pb-16 bg-[#08090D] text-fg">
      <div className="container-page max-w-md text-center space-y-6">
        <div className="size-16 rounded-2xl border border-lime/30 bg-lime/10 mx-auto flex items-center justify-center text-lime font-mono text-2xl font-bold">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-fg">Page Not Found</h1>
          <p className="text-sm text-muted">
            The page you are looking for doesn&apos;t exist, has been moved, or is temporarily unavailable.
          </p>
        </div>
        <div className="pt-2 flex justify-center gap-3">
          <ButtonLink href="/" variant="primary" size="md" arrow>
            Return Home
          </ButtonLink>
          <ButtonLink href="/#projects" variant="secondary" size="md">
            View Projects
          </ButtonLink>
        </div>
      </div>
    </main>
  );
}
