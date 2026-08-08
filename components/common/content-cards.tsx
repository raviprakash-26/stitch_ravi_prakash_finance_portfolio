import Link from "next/link";
import { ArrowRight, Clock, Copy, Download, FileText, Signal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { HoverLift } from "@/components/common/motion";
import { CoverImage } from "@/components/blog/article-card";
import { cn } from "@/lib/utils";
import type { LearningPath, Product, Prompt, Resource } from "@/types/content";

// ── Resource card (free downloads) ──────────────────────────────────────

export function ResourceCard({ resource, className }: { resource: Resource; className?: string }) {
  const href = `/resources/${resource.category.slug}/${resource.slug}`;
  return (
    <HoverLift className={className}>
      <Card className="group flex h-full flex-col p-6">
        <div className="mb-3 flex items-center justify-between gap-2">
          <Badge variant="success">Free</Badge>
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <FileText className="h-3 w-3" aria-hidden="true" />
            {resource.fileType} · {(resource.fileSizeKb / 1024).toFixed(1)} MB
          </span>
        </div>
        <h3 className="font-heading text-base font-semibold leading-snug">
          <Link href={href} className="transition-colors group-hover:text-primary">
            {resource.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{resource.description}</p>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {resource.downloadCount.toLocaleString("en-IN")} downloads
          </span>
          <Button size="sm" variant="outline" asChild>
            <Link href={href}>
              <Download className="h-4 w-4" /> Download
            </Link>
          </Button>
        </div>
      </Card>
    </HoverLift>
  );
}

// ── Product card (paid store items) ─────────────────────────────────────

export function ProductCard({ product, className }: { product: Product; className?: string }) {
  const href = `/store/product/${product.slug}`;
  const hasDiscount =
    typeof product.compareAtPriceInr === "number" && product.compareAtPriceInr > product.priceInr;

  return (
    <HoverLift className={className}>
      <Card className="group flex h-full flex-col overflow-hidden">
        <Link href={href} tabIndex={-1} aria-hidden="true" className="block overflow-hidden">
          <CoverImage src={product.previewImages[0] ?? ""} className="aspect-[16/10]" />
        </Link>
        <div className="flex flex-1 flex-col p-6">
          <Badge variant="secondary" className="mb-3 w-fit">
            {product.category.name}
          </Badge>
          <h3 className="font-heading text-base font-semibold leading-snug">
            <Link href={href} className="transition-colors group-hover:text-primary">
              {product.title}
            </Link>
          </h3>
          <p className="mt-2 flex-1 text-sm text-muted-foreground">{product.description}</p>
          <div className="mt-5 flex items-center justify-between gap-3">
            <p className="flex items-baseline gap-2">
              <span className="font-heading text-lg font-semibold">
                ₹{product.priceInr.toLocaleString("en-IN")}
              </span>
              {hasDiscount && (
                <span className="text-sm text-muted-foreground line-through">
                  ₹{product.compareAtPriceInr!.toLocaleString("en-IN")}
                </span>
              )}
            </p>
            <Button size="sm" asChild>
              <Link href={href}>View</Link>
            </Button>
          </div>
        </div>
      </Card>
    </HoverLift>
  );
}

// ── Prompt card ─────────────────────────────────────────────────────────

export function PromptCard({ prompt, className }: { prompt: Prompt; className?: string }) {
  const href = `/prompt-library/${prompt.category.slug}/${prompt.slug}`;
  return (
    <HoverLift className={className}>
      <Card className="group flex h-full flex-col overflow-hidden">
        <Link href={href} tabIndex={-1} aria-hidden="true" className="block overflow-hidden">
          <CoverImage src={prompt.previewImage} className="aspect-square" />
        </Link>
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-2 flex items-center justify-between gap-2">
            <Badge variant="muted">{prompt.category.name}</Badge>
            <DifficultyLabel difficulty={prompt.difficulty} />
          </div>
          <h3 className="font-heading text-sm font-semibold leading-snug">
            <Link href={href} className="transition-colors group-hover:text-primary">
              {prompt.title}
            </Link>
          </h3>
          <p className="mt-2 line-clamp-2 flex-1 text-xs leading-relaxed text-muted-foreground">
            {prompt.promptText}
          </p>
          <p className="mt-4 inline-flex items-center gap-1 text-xs text-muted-foreground">
            <Copy className="h-3 w-3" aria-hidden="true" />
            Copied {prompt.copyCount.toLocaleString("en-IN")} times
          </p>
        </div>
      </Card>
    </HoverLift>
  );
}

export function DifficultyLabel({ difficulty }: { difficulty: Prompt["difficulty"] }) {
  const bars = difficulty === "beginner" ? 1 : difficulty === "intermediate" ? 2 : 3;
  return (
    <span className="inline-flex items-center gap-1 text-xs capitalize text-muted-foreground">
      <span className="flex items-end gap-[2px]" aria-hidden="true">
        {[1, 2, 3].map((i) => (
          <span
            key={i}
            className={cn(
              "w-[3px] rounded-[1px]",
              i === 1 && "h-1.5",
              i === 2 && "h-2.5",
              i === 3 && "h-3.5",
              i <= bars ? "bg-primary" : "bg-muted",
            )}
          />
        ))}
      </span>
      {difficulty}
    </span>
  );
}

// ── Roadmap card (learning paths) ───────────────────────────────────────

export function RoadmapCard({ path, className }: { path: LearningPath; className?: string }) {
  const href = `/learn/roadmaps/${path.slug}`;
  return (
    <HoverLift className={className}>
      <Card className="group flex h-full flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-xs capitalize text-muted-foreground">
            <Signal className="h-3.5 w-3.5" aria-hidden="true" />
            {path.difficulty}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {path.estimatedHours} hours
          </span>
        </div>
        <h3 className="font-heading text-lg font-semibold leading-snug">
          <Link href={href} className="transition-colors group-hover:text-primary">
            {path.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{path.description}</p>
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
        >
          Start this path
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </Card>
    </HoverLift>
  );
}
