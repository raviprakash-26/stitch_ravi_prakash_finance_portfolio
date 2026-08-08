import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Stagger, StaggerItem, Reveal } from "@/components/common/motion";
import { RoadmapCard } from "@/components/common/content-cards";
import { DifficultyLabel } from "@/components/common/content-cards";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import { getTopicSummaries } from "@/lib/mdx";
import { getLearningPaths } from "@/lib/content";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Structured tutorials in Excel, Power BI, SQL, Python, AI, accounting, and finance — written for commerce students and working analysts.",
  alternates: { canonical: "/learn" },
};

export default function LearnHubPage() {
  const summaries = getTopicSummaries();
  const withLessons = summaries.filter((summary) => summary.lessonCount > 0);
  const comingSoon = summaries.filter((summary) => summary.lessonCount === 0);
  const paths = getLearningPaths(4);

  const totalLessons = summaries.reduce((sum, summary) => sum + summary.lessonCount, 0);

  return (
    <>
      <section className="border-b border-border bg-card/40 py-14">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Learn" }]} className="mb-6" />
          <h1 className="text-4xl font-heading font-bold sm:text-5xl">Learn</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Tutorials written by people who use these tools for real reporting work. Every lesson ends
            with practice you can do on data from the resource library.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            {totalLessons} lessons published across {withLessons.length} topics
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Topics"
            title="Start where you already are"
            description="Each topic is self-contained. If you don't know which to pick, take a roadmap instead."
            className="mb-10"
          />

          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {withLessons.map((summary) => (
              <StaggerItem key={summary.category.id} className="h-full">
                <Link href={`/learn/${summary.category.slug}`} className="group block h-full">
                  <Card className="flex h-full flex-col p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-heading text-lg font-semibold transition-colors group-hover:text-primary">
                        {summary.category.name}
                      </h3>
                      <Badge variant="muted">{summary.lessonCount} lessons</Badge>
                    </div>
                    <div className="mt-4 flex flex-1 flex-wrap items-end gap-4">
                      {summary.entryDifficulty && (
                        <DifficultyLabel difficulty={summary.entryDifficulty} />
                      )}
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" aria-hidden="true" />
                        {summary.totalReadingMinutes} min total
                      </span>
                    </div>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      Open topic
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>

          {comingSoon.length > 0 && (
            <Reveal>
              <div className="mt-12 rounded-lg border border-dashed border-border p-6">
                <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  In progress
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {comingSoon.map((summary) => (
                    <li key={summary.category.id}>
                      <Link
                        href={`/learn/${summary.category.slug}`}
                        className="inline-block rounded-full border border-border px-3 py-1 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                      >
                        {summary.category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}
        </Container>
      </section>

      <section className="border-t border-border bg-card/40 py-16">
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Roadmaps"
              title="Or follow a sequence"
              description="Paths order the topics so each step depends on the one before it."
            />
            <Link
              href="/learn/roadmaps"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              All roadmaps <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {paths.map((path) => (
              <StaggerItem key={path.id} className="h-full">
                <RoadmapCard path={path} />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
    </>
  );
}
