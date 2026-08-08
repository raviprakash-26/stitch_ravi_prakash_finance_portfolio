/**
 * Mirrors the DB schema in docs/PLANNING.md §4. These types are the contract
 * between content (MDX/JSON in /content) and the components that render it,
 * regardless of whether the source is file-based (v1) or a real database (later).
 */

export type ContentType = "blog" | "news" | "tutorial";
export type Difficulty = "beginner" | "intermediate" | "advanced";
export type ProductType = "template" | "dashboard" | "prompt_pack" | "course" | "ebook" | "zip_bundle";

export interface Category {
  id: string;
  name: string;
  slug: string;
  kind: "learn" | "news" | "resource" | "store" | "prompt";
  parentId?: string;
  description?: string;
  icon?: string;
}

export interface Author {
  id: string;
  name: string;
  bio?: string;
  avatarUrl?: string;
  twitterUrl?: string;
  linkedinUrl?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  bodyMdx: string;
  coverImage: string;
  category: Category;
  author: Author;
  contentType: ContentType;
  readingTimeMinutes: number;
  isFeatured: boolean;
  publishedAt: string;
  tags: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface Resource {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: Category;
  fileUrl: string;
  fileType: string;
  fileSizeKb: number;
  previewImage?: string;
  downloadCount: number;
  publishedAt: string;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: Category;
  priceInr: number;
  compareAtPriceInr?: number;
  previewImages: string[];
  productType: ProductType;
  isFeatured: boolean;
  status: "draft" | "live" | "archived";
}

export interface Prompt {
  id: string;
  slug: string;
  title: string;
  promptText: string;
  category: Category;
  previewImage: string;
  difficulty: Difficulty;
  tags: string[];
  copyCount: number;
}

export interface LearningPath {
  id: string;
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  difficulty: Difficulty;
  estimatedHours: number;
  /** Who this path is for — shown on the roadmap detail page. */
  audience: string;
  outcomes: string[];
  modules: LearningPathModule[];
}

export interface LearningPathModule {
  id: string;
  title: string;
  summary: string;
  order: number;
  steps: LessonRef[];
}

/**
 * A roadmap step points at a lesson rather than containing it. Lesson bodies
 * live in MDX under content/learn/, so embedding them here would duplicate
 * the source of truth and let the two drift apart.
 */
export interface LessonRef {
  topicSlug: string;
  lessonSlug: string;
  /** Fallback label for steps whose lesson hasn't been written yet. */
  title: string;
}

export interface Lesson {
  id: string;
  slug: string;
  title: string;
  bodyMdx: string;
  videoUrl?: string;
  order: number;
  isFreePreview: boolean;
}
