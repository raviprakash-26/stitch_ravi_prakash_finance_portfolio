import Link from "next/link";
import { Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { HoverLift } from "@/components/common/motion";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";
import type { Article } from "@/types/content";

interface ArticleCardProps {
  article: Article;
  /**
   * `feature` — large hero treatment with a tall image
   * `default` — standard grid card
   * `compact` — image-free row, for sidebars and dense lists
   */
  variant?: "feature" | "default" | "compact";
  className?: string;
}

function hrefFor(article: Article) {
  return article.contentType === "news"
    ? `/news/${article.category.slug}/${article.slug}`
    : `/blog/${article.slug}`;
}

export function ArticleCard({ article, variant = "default", className }: ArticleCardProps) {
  const href = hrefFor(article);

  if (variant === "compact") {
    return (
      <article className={cn("group border-b border-border py-4 last:border-0", className)}>
        <Badge variant="muted" className="mb-2">
          {article.category.name}
        </Badge>
        <h3 className="font-heading text-base font-semibold leading-snug">
          <Link href={href} className="transition-colors group-hover:text-primary">
            {article.title}
          </Link>
        </h3>
        <ArticleMeta article={article} className="mt-2" />
      </article>
    );
  }

  const isFeature = variant === "feature";

  return (
    <HoverLift className={className}>
      <Card className="group flex h-full flex-col overflow-hidden">
        <Link href={href} className="block overflow-hidden" tabIndex={-1} aria-hidden="true">
          <CoverImage
            src={article.coverImage}
            className={isFeature ? "aspect-[16/9]" : "aspect-[16/10]"}
          />
        </Link>
        <div className={cn("flex flex-1 flex-col p-6", isFeature && "sm:p-8")}>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Badge variant={isFeature ? "accent" : "secondary"}>{article.category.name}</Badge>
            {isFeature && article.isFeatured && <Badge variant="outline">Editor's pick</Badge>}
          </div>
          <h3
            className={cn(
              "font-heading font-semibold leading-snug",
              isFeature ? "text-2xl sm:text-3xl" : "text-lg",
            )}
          >
            <Link href={href} className="transition-colors group-hover:text-primary">
              {article.title}
            </Link>
          </h3>
          <p
            className={cn(
              "mt-3 flex-1 text-muted-foreground",
              isFeature ? "text-base" : "line-clamp-3 text-sm",
            )}
          >
            {article.excerpt}
          </p>
          <ArticleMeta article={article} className="mt-5" />
        </div>
      </Card>
    </HoverLift>
  );
}

function ArticleMeta({ article, className }: { article: Article; className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground", className)}>
      <span>{article.author.name}</span>
      <span aria-hidden="true">·</span>
      <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
      <span aria-hidden="true">·</span>
      <span className="inline-flex items-center gap-1">
        <Clock className="h-3 w-3" aria-hidden="true" />
        {article.readingTimeMinutes} min read
      </span>
    </div>
  );
}

/**
 * Cover placeholder. Real cover art is layered in via next/image once the
 * media pipeline lands in Milestone 4; the gradient keeps layout stable and
 * avoids a broken-image state in the meantime.
 */
export function CoverImage({ src, className }: { src: string; className?: string }) {
  return (
    <div
      className={cn(
        "w-full bg-gradient-to-br from-primary/15 via-primary/5 to-accent/15 transition-transform duration-500 group-hover:scale-[1.03]",
        className,
      )}
      data-src={src}
      role="presentation"
    />
  );
}
