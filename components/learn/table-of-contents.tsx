"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { LessonHeading } from "@/lib/mdx";

/**
 * Sticky table of contents with scroll-spy.
 *
 * Uses IntersectionObserver rather than scroll listeners so it stays cheap
 * on long lessons. Falls back gracefully: with JS disabled the links are
 * still plain anchors that work.
 */
export function TableOfContents({ headings }: { headings: LessonHeading[] }) {
  const [activeId, setActiveId] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      // Bias the band toward the top of the viewport so the active item
      // matches what the reader is actually looking at.
      { rootMargin: "-88px 0px -70% 0px", threshold: 0 },
    );

    for (const heading of headings) {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav aria-labelledby="toc-heading" className="text-sm">
      <h2
        id="toc-heading"
        className="mb-3 font-heading text-xs font-semibold uppercase tracking-wider text-muted-foreground"
      >
        On this page
      </h2>
      <ul className="space-y-1 border-l border-border">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              aria-current={activeId === heading.id ? "location" : undefined}
              className={cn(
                "-ml-px block border-l py-1 leading-snug transition-colors",
                heading.level === 3 ? "pl-7" : "pl-4",
                activeId === heading.id
                  ? "border-primary font-medium text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
