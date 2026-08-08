import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Lock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DifficultyLabel } from "@/components/common/content-cards";
import { cn } from "@/lib/utils";
import type { LessonDoc } from "@/lib/mdx";

// ── A lesson in a topic's ordered list ──────────────────────────────────

export function LessonListItem({
  lesson,
  index,
  isActive = false,
}: {
  lesson: LessonDoc;
  index: number;
  isActive?: boolean;
}) {
  const href = `/learn/${lesson.topicSlug}/${lesson.slug}`;

  return (
    <li>
      <Link
        href={href}
        aria-current={isActive ? "page" : undefined}
        className={cn(
          "group flex gap-4 rounded-lg border p-5 transition-all",
          isActive
            ? "border-primary/50 bg-primary/5"
            : "border-border bg-card hover:border-primary/40 hover:shadow-lifted",
        )}
      >
        {/* The number is real information here — lessons are an ordered sequence. */}
        <span
          aria-hidden="true"
          className={cn(
            "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-xs font-medium",
            isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
          )}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-2">
            <span className="font-heading text-base font-semibold leading-snug transition-colors group-hover:text-primary">
              {lesson.frontmatter.title}
            </span>
            {lesson.frontmatter.isFreePreview && <Badge variant="success">Free preview</Badge>}
          </span>
          <span className="mt-1.5 block text-sm text-muted-foreground">
            {lesson.frontmatter.description}
          </span>
          <span className="mt-3 flex flex-wrap items-center gap-4">
            <DifficultyLabel difficulty={lesson.frontmatter.difficulty} />
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" aria-hidden="true" />
              {lesson.readingTimeMinutes} min
            </span>
          </span>
        </span>
      </Link>
    </li>
  );
}

// ── Previous / next at the foot of a lesson ─────────────────────────────

export function LessonNav({
  previous,
  next,
}: {
  previous?: LessonDoc | undefined;
  next?: LessonDoc | undefined;
}) {
  if (!previous && !next) return null;

  return (
    <nav aria-label="Lesson navigation" className="mt-16 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
      {previous ? (
        <Link
          href={`/learn/${previous.topicSlug}/${previous.slug}`}
          className="group rounded-lg border border-border p-5 transition-colors hover:border-primary/40"
        >
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" /> Previous
          </span>
          <span className="mt-1.5 block font-heading font-semibold transition-colors group-hover:text-primary">
            {previous.frontmatter.title}
          </span>
        </Link>
      ) : (
        <span />
      )}

      {next && (
        <Link
          href={`/learn/${next.topicSlug}/${next.slug}`}
          className="group rounded-lg border border-border p-5 text-right transition-colors hover:border-primary/40 sm:col-start-2"
        >
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            Next <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <span className="mt-1.5 block font-heading font-semibold transition-colors group-hover:text-primary">
            {next.frontmatter.title}
          </span>
        </Link>
      )}
    </nav>
  );
}

// ── Empty state for topics with no lessons published yet ────────────────

export function TopicEmptyState({ topicName }: { topicName: string }) {
  return (
    <Card className="flex flex-col items-center px-6 py-16 text-center">
      <span className="rounded-full bg-muted p-3 text-muted-foreground">
        <Lock className="h-5 w-5" aria-hidden="true" />
      </span>
      <h2 className="mt-4 font-heading text-lg font-semibold">
        {topicName} lessons are being written
      </h2>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        Join the newsletter and you'll hear the week they publish. In the meantime, the free resource
        library already has {topicName} material you can use.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link href="/resources">Browse resources</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/learn">Back to all topics</Link>
        </Button>
      </div>
    </Card>
  );
}
