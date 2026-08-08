import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookOpen, Clock } from "lucide-react";

import { Container } from "@/components/common/container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { LessonListItem, TopicEmptyState } from "@/components/learn/lesson-parts";
import { DifficultyLabel } from "@/components/common/content-cards";
import { getLessonsForTopic, getTopicSummary } from "@/lib/mdx";
import { getLearnCategories } from "@/lib/content";

interface TopicPageProps {
  params: Promise<{ topic: string }>;
}

export function generateStaticParams() {
  return getLearnCategories().map((category) => ({ topic: category.slug }));
}

export async function generateMetadata({ params }: TopicPageProps): Promise<Metadata> {
  const { topic } = await params;
  const summary = getTopicSummary(topic);
  if (!summary) return {};

  const name = summary.category.name;
  return {
    title: name,
    description: `${name} tutorials and practice material — ${summary.lessonCount} lessons on Ravi Intelligence.`,
    alternates: { canonical: `/learn/${topic}` },
  };
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { topic } = await params;
  const summary = getTopicSummary(topic);
  if (!summary) notFound();

  const lessons = getLessonsForTopic(topic);

  return (
    <>
      <section className="border-b border-border bg-card/40 py-14">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Learn", href: "/learn" },
              { label: summary.category.name },
            ]}
            className="mb-6"
          />
          <h1 className="text-4xl font-heading font-bold sm:text-5xl">{summary.category.name}</h1>

          {lessons.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center gap-5">
              <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                {summary.lessonCount} {summary.lessonCount === 1 ? "lesson" : "lessons"}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {summary.totalReadingMinutes} min total
              </span>
              {summary.entryDifficulty && <DifficultyLabel difficulty={summary.entryDifficulty} />}
            </div>
          )}
        </Container>
      </section>

      <section className="py-14">
        <Container>
          {lessons.length === 0 ? (
            <TopicEmptyState topicName={summary.category.name} />
          ) : (
            <>
              <h2 className="mb-6 font-heading text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Lessons in order
              </h2>
              <ol className="space-y-3">
                {lessons.map((lesson, index) => (
                  <LessonListItem key={lesson.slug} lesson={lesson} index={index} />
                ))}
              </ol>
            </>
          )}
        </Container>
      </section>
    </>
  );
}
