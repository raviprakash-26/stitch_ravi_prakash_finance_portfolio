import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

import { estimateReadingTime } from "@/lib/utils";
import { getLearnCategories } from "@/lib/content";
import type { Category, Difficulty } from "@/types/content";

/**
 * MDX content pipeline.
 *
 * Lessons live at content/learn/<topic-slug>/<lesson-slug>.mdx with YAML
 * frontmatter. Everything is read at build time inside server components,
 * so none of this ships to the browser.
 *
 * When lessons move into Postgres, this module is what gets replaced —
 * the exported function signatures are the contract the routes depend on.
 */

const LEARN_DIR = path.join(process.cwd(), "content", "learn");

export interface LessonFrontmatter {
  title: string;
  description: string;
  order: number;
  difficulty: Difficulty;
  publishedAt: string;
  tags?: string[];
  isFreePreview?: boolean;
}

export interface LessonHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface LessonDoc {
  topicSlug: string;
  slug: string;
  frontmatter: LessonFrontmatter;
  /** Raw MDX body, ready to hand to <MDXRemote />. */
  body: string;
  readingTimeMinutes: number;
  headings: LessonHeading[];
}

export interface TopicSummary {
  category: Category;
  lessonCount: number;
  totalReadingMinutes: number;
  /** Lowest difficulty present in the topic — what a newcomer would start on. */
  entryDifficulty: Difficulty | null;
}

// ── Filesystem helpers ──────────────────────────────────────────────────

function safeReadDir(dir: string): string[] {
  try {
    return fs.readdirSync(dir);
  } catch {
    return [];
  }
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

/**
 * Pull H2s and H3s for the table of contents. Fenced code blocks are stripped
 * first so a commented `## heading` inside a snippet never becomes a TOC entry.
 */
function extractHeadings(body: string): LessonHeading[] {
  const withoutCode = body.replace(/```[\s\S]*?```/g, "");
  const headings: LessonHeading[] = [];

  for (const line of withoutCode.split("\n")) {
    const match = /^(#{2,3})\s+(.+?)\s*$/.exec(line);
    if (!match) continue;
    const hashes = match[1];
    const text = match[2];
    if (!hashes || !text) continue;
    headings.push({
      id: slugify(text),
      text,
      level: hashes.length === 2 ? 2 : 3,
    });
  }

  return headings;
}

// ── Reading ─────────────────────────────────────────────────────────────

export function getTopicSlugs(): string[] {
  return safeReadDir(LEARN_DIR).filter((entry) =>
    fs.statSync(path.join(LEARN_DIR, entry)).isDirectory(),
  );
}

export function getLessonsForTopic(topicSlug: string): LessonDoc[] {
  const topicDir = path.join(LEARN_DIR, topicSlug);

  return safeReadDir(topicDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(topicDir, file), "utf8");
      const { data, content } = matter(raw);
      const frontmatter = data as LessonFrontmatter;

      return {
        topicSlug,
        slug: file.replace(/\.mdx$/, ""),
        frontmatter,
        body: content,
        readingTimeMinutes: estimateReadingTime(content),
        headings: extractHeadings(content),
      } satisfies LessonDoc;
    })
    .sort((a, b) => a.frontmatter.order - b.frontmatter.order);
}

export function getLesson(topicSlug: string, lessonSlug: string): LessonDoc | undefined {
  return getLessonsForTopic(topicSlug).find((lesson) => lesson.slug === lessonSlug);
}

export function getAllLessons(): LessonDoc[] {
  return getTopicSlugs().flatMap(getLessonsForTopic);
}

/** Previous/next within a topic, for lesson-to-lesson navigation. */
export function getLessonNeighbours(topicSlug: string, lessonSlug: string) {
  const lessons = getLessonsForTopic(topicSlug);
  const index = lessons.findIndex((lesson) => lesson.slug === lessonSlug);
  return {
    previous: index > 0 ? lessons[index - 1] : undefined,
    next: index >= 0 && index < lessons.length - 1 ? lessons[index + 1] : undefined,
  };
}

// ── Topic summaries (drive the /learn hub and topic headers) ────────────

const difficultyRank: Record<Difficulty, number> = {
  beginner: 0,
  intermediate: 1,
  advanced: 2,
};

export function getTopicSummaries(): TopicSummary[] {
  return getLearnCategories().map((category) => {
    const lessons = getLessonsForTopic(category.slug);
    const entryDifficulty =
      lessons.length === 0
        ? null
        : lessons
            .map((lesson) => lesson.frontmatter.difficulty)
            .sort((a, b) => difficultyRank[a] - difficultyRank[b])[0]!;

    return {
      category,
      lessonCount: lessons.length,
      totalReadingMinutes: lessons.reduce((sum, lesson) => sum + lesson.readingTimeMinutes, 0),
      entryDifficulty,
    } satisfies TopicSummary;
  });
}

export function getTopicSummary(topicSlug: string): TopicSummary | undefined {
  return getTopicSummaries().find((summary) => summary.category.slug === topicSlug);
}
