import {
  articles,
  newsArticles,
  learningPaths,
  products,
  resources,
  prompts,
  testimonials,
  stats,
  categories,
} from "@/content/seed";
import type { Article, LearningPath, Product, Prompt, Resource } from "@/types/content";

/**
 * The only module that knows where content comes from.
 *
 * Today it reads typed records from /content/seed.ts. When the Postgres schema
 * in docs/PLANNING.md §4 is live, these function bodies swap to queries and
 * every consuming component stays untouched — that's the whole point of this seam.
 * Signatures are already async-friendly where a DB would need it.
 */

function byNewest(a: Article, b: Article) {
  return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
}

// ── Articles ────────────────────────────────────────────────────────────

export function getFeaturedArticles(limit = 3): Article[] {
  return articles.filter((a) => a.isFeatured).sort(byNewest).slice(0, limit);
}

export function getLatestArticles(limit = 6): Article[] {
  return [...articles].sort(byNewest).slice(0, limit);
}

export function getLatestTutorials(limit = 4): Article[] {
  return articles
    .filter((a) => a.contentType === "tutorial")
    .sort(byNewest)
    .slice(0, limit);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return [...articles, ...newsArticles].find((a) => a.slug === slug);
}

// ── News ────────────────────────────────────────────────────────────────

export function getLeadNewsStory(): Article | undefined {
  return [...newsArticles].sort(byNewest).find((a) => a.isFeatured) ?? newsArticles[0];
}

export function getTrendingNews(limit = 5): Article[] {
  const lead = getLeadNewsStory();
  return [...newsArticles]
    .sort(byNewest)
    .filter((a) => a.id !== lead?.id)
    .slice(0, limit);
}

// ── Learning ────────────────────────────────────────────────────────────

export function getLearningPaths(limit?: number): LearningPath[] {
  return typeof limit === "number" ? learningPaths.slice(0, limit) : learningPaths;
}

export function getLearnCategories() {
  return Object.values(categories).filter((c) => c.kind === "learn");
}

// ── Resources, products, prompts ────────────────────────────────────────

export function getFeaturedResources(limit = 4): Resource[] {
  return [...resources].sort((a, b) => b.downloadCount - a.downloadCount).slice(0, limit);
}

export function getFeaturedProducts(limit = 3): Product[] {
  return products.filter((p) => p.status === "live" && p.isFeatured).slice(0, limit);
}

export function getPromptPreviews(limit = 6): Prompt[] {
  return [...prompts].sort((a, b) => b.copyCount - a.copyCount).slice(0, limit);
}

// ── Social proof ────────────────────────────────────────────────────────

export function getTestimonials() {
  return testimonials;
}

export function getStats() {
  return stats;
}
