import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Clock, Signal, Target, Users } from "lucide-react";

import { Container } from "@/components/common/container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/motion";
import { getLearningPaths } from "@/lib/content";
import { getLesson } from "@/lib/mdx";
import { cn } from "@/lib/utils";
import type { LessonRef } from "@/types/content";

interface RoadmapPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getLearningPaths().map((path) => ({ slug: path.slug }));
}

export async function generateMetadata({ params }: RoadmapPageProps): Promise<Metadata> {
  const { slug } = await params;
  const path = getLearningPaths().find((p) => p.slug === slug);
  if (!path) return {};

  return {
    title: path.title,
    description: path.description,
    alternates: { canonical: `/learn/roadmaps/${slug}` },
  };
}

export default async function RoadmapDetailPage({ params }: RoadmapPageProps) {
  const { slug } = await params;
  const path = getLearningPaths().find((p) => p.slug === slug);
  if (!path) notFound();

  const totalSteps = path.modules.reduce((sum, module) => sum + module.steps.length, 0);

  return (
    <>
      <section className="border-b border-border bg-card/40 py-14">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Learn", href: "/learn" },
              { label: "Roadmaps", href: "/learn/roadmaps" },
              { label: path.title },
            ]}
            className="mb-6"
          />

          <div className="max-w-3xl">
            <h1 className="text-4xl font-heading font-bold sm:text-5xl">{path.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{path.description}</p>

            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 capitalize">
                <Signal className="h-4 w-4" aria-hidden="true" />
                {path.difficulty}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" aria-hidden="true" />
                About {path.estimatedHours} hours
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Target className="h-4 w-4" aria-hidden="true" />
                {path.modules.length} modules · {totalSteps} lessons
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
            <div className="min-w-0">
              <h2 className="mb-8 font-heading text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                The sequence
              </h2>

              <ol className="space-y-10">
                {path.modules
                  .slice()
                  .sort((a, b) => a.order - b.order)
                  .map((module, moduleIndex) => (
                    <li key={module.id}>
                      <Reveal>
                        <div className="flex items-start gap-4">
                          {/* Module numbering is genuine sequence information, not decoration. */}
                          <span
                            aria-hidden="true"
                            className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-sm font-semibold text-primary-foreground"
                          >
                            {moduleIndex + 1}
                          </span>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-heading text-xl font-semibold">{module.title}</h3>
                            <p className="mt-1.5 text-sm text-muted-foreground">{module.summary}</p>

                            <ol className="mt-5 space-y-3">
                              {module.steps.map((step, stepIndex) => (
                                <RoadmapStep key={`${step.topicSlug}-${step.lessonSlug}`} step={step} index={stepIndex} />
                              ))}
                            </ol>
                          </div>
                        </div>
                      </Reveal>
                    </li>
                  ))}
              </ol>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <Card className="p-6">
                <h2 className="inline-flex items-center gap-2 font-heading text-sm font-semibold">
                  <Users className="h-4 w-4 text-primary" aria-hidden="true" />
                  Who this is for
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{path.audience}</p>
              </Card>

              <Card className="p-6">
                <h2 className="font-heading text-sm font-semibold">By the end you'll be able to</h2>
                <ul className="mt-3 space-y-2.5">
                  {path.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-2.5 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                      <span className="leading-relaxed">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <FirstStepButton path={path.modules[0]?.steps[0]} />
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}

/**
 * Resolves a roadmap step against the MDX library. Steps whose lesson isn't
 * written yet render as an unlinked, clearly-labelled placeholder rather than
 * a link that 404s — a roadmap is allowed to describe work in progress.
 */
function RoadmapStep({ step, index }: { step: LessonRef; index: number }) {
  const lesson = getLesson(step.topicSlug, step.lessonSlug);
  const href = `/learn/${step.topicSlug}/${step.lessonSlug}`;

  const inner = (
    <>
      <span
        aria-hidden="true"
        className="font-mono text-xs text-muted-foreground"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="min-w-0 flex-1">
        <span
          className={cn(
            "block font-medium leading-snug",
            lesson && "transition-colors group-hover:text-primary",
          )}
        >
          {lesson?.frontmatter.title ?? step.title}
        </span>
        {lesson ? (
          <span className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" aria-hidden="true" />
            {lesson.readingTimeMinutes} min
          </span>
        ) : (
          <Badge variant="muted" className="mt-1.5">
            Being written
          </Badge>
        )}
      </span>
      {lesson && (
        <ArrowRight
          className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  return (
    <li>
      {lesson ? (
        <Link
          href={href}
          className="group flex items-start gap-3 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-lifted"
        >
          {inner}
        </Link>
      ) : (
        <div className="flex items-start gap-3 rounded-lg border border-dashed border-border p-4 opacity-70">
          {inner}
        </div>
      )}
    </li>
  );
}

function FirstStepButton({ path: step }: { path?: LessonRef | undefined }) {
  if (!step) return null;
  const lesson = getLesson(step.topicSlug, step.lessonSlug);
  if (!lesson) return null;

  return (
    <Button size="lg" className="w-full" asChild>
      <Link href={`/learn/${step.topicSlug}/${step.lessonSlug}`}>
        Start the first lesson <ArrowRight className="h-4 w-4" />
      </Link>
    </Button>
  );
}
