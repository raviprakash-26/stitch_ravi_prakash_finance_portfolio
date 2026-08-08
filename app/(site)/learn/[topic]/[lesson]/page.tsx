import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { Clock } from "lucide-react";

import { Container } from "@/components/common/container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { TableOfContents } from "@/components/learn/table-of-contents";
import { LessonNav } from "@/components/learn/lesson-parts";
import { DifficultyLabel } from "@/components/common/content-cards";
import { mdxComponents } from "@/components/learn/mdx-components";
import { getAllLessons, getLesson, getLessonNeighbours, getTopicSummary } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

interface LessonPageProps {
  params: Promise<{ topic: string; lesson: string }>;
}

export function generateStaticParams() {
  return getAllLessons().map((lesson) => ({
    topic: lesson.topicSlug,
    lesson: lesson.slug,
  }));
}

export async function generateMetadata({ params }: LessonPageProps): Promise<Metadata> {
  const { topic, lesson: lessonSlug } = await params;
  const lesson = getLesson(topic, lessonSlug);
  if (!lesson) return {};

  return {
    title: lesson.frontmatter.title,
    description: lesson.frontmatter.description,
    alternates: { canonical: `/learn/${topic}/${lessonSlug}` },
    openGraph: {
      type: "article",
      title: lesson.frontmatter.title,
      description: lesson.frontmatter.description,
      publishedTime: lesson.frontmatter.publishedAt,
      tags: lesson.frontmatter.tags,
    },
  };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { topic, lesson: lessonSlug } = await params;
  const lesson = getLesson(topic, lessonSlug);
  const summary = getTopicSummary(topic);
  if (!lesson || !summary) notFound();

  const { previous, next } = getLessonNeighbours(topic, lessonSlug);

  return (
    <article className="py-12">
      <Container>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Learn", href: "/learn" },
            { label: summary.category.name, href: `/learn/${topic}` },
            { label: lesson.frontmatter.title },
          ]}
          className="mb-8"
        />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_240px]">
          <div className="min-w-0">
            <header className="border-b border-border pb-8">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <Badge variant="secondary">{summary.category.name}</Badge>
                {lesson.frontmatter.isFreePreview && <Badge variant="success">Free preview</Badge>}
              </div>

              <h1 className="text-3xl font-heading font-bold leading-tight sm:text-4xl">
                {lesson.frontmatter.title}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">{lesson.frontmatter.description}</p>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <time dateTime={lesson.frontmatter.publishedAt}>
                  {formatDate(lesson.frontmatter.publishedAt)}
                </time>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {lesson.readingTimeMinutes} min read
                </span>
                <DifficultyLabel difficulty={lesson.frontmatter.difficulty} />
              </div>
            </header>

            {/* Table of contents, inline on narrow screens where the sidebar is hidden. */}
            <div className="mt-8 rounded-lg border border-border bg-card p-5 lg:hidden">
              <TableOfContents headings={lesson.headings} />
            </div>

            <div className="mt-8 max-w-[68ch] text-[1.0625rem]">
              <MDXRemote
                source={lesson.body}
                components={mdxComponents}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [rehypeSlug],
                  },
                }}
              />
            </div>

            {lesson.frontmatter.tags && lesson.frontmatter.tags.length > 0 && (
              <div className="mt-12 flex flex-wrap gap-2">
                {lesson.frontmatter.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            <LessonNav previous={previous} next={next} />
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents headings={lesson.headings} />
            </div>
          </aside>
        </div>
      </Container>
    </article>
  );
}
