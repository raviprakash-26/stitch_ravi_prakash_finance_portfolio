"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { Container } from "@/components/common/container";

export function AnnouncementBar() {
  const [dismissed, setDismissed] = React.useState(false);
  if (dismissed) return null;

  return (
    <div className="relative bg-dark text-white">
      <Container className="flex items-center justify-center gap-3 py-2.5 pr-10 text-center text-sm">
        <p className="text-white/90">
          New: the Analyst Prompt Pack — 180 tested prompts for data work.
        </p>
        <Link
          href="/store/prompt-packs/analyst-prompt-pack"
          className="hidden shrink-0 items-center gap-1 font-medium text-white underline-offset-4 hover:underline sm:inline-flex"
        >
          See what's inside <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </Container>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss announcement"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-sm p-1 text-white/70 transition-colors hover:text-white"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
