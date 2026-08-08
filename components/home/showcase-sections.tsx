import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Stagger, StaggerItem } from "@/components/common/motion";
import { ProductCard, PromptCard, ResourceCard, RoadmapCard } from "@/components/common/content-cards";
import {
  getFeaturedProducts,
  getFeaturedResources,
  getLearningPaths,
  getPromptPreviews,
} from "@/lib/content";

function SectionLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
      {children} <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}

// ── Learning roadmaps ───────────────────────────────────────────────────

export function LearningRoadmaps() {
  const paths = getLearningPaths(4);

  return (
    <section className="py-20">
      <Container>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Roadmaps"
            title="A sequence, not a pile of links"
            description="Each path orders the topics so every step depends on the one before it."
          />
          <SectionLink href="/learn/roadmaps">All roadmaps</SectionLink>
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
  );
}

// ── Prompt library preview ──────────────────────────────────────────────

export function PromptLibraryPreview() {
  const previews = getPromptPreviews(6);

  return (
    <section className="border-y border-border bg-card/40 py-20">
      <Container>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Gemini Prompt Library"
            title="Prompts worth keeping"
            description="Tested image and business prompts across 18 categories — copy, adjust, ship."
          />
          <SectionLink href="/prompt-library">Open the library</SectionLink>
        </div>
        <Stagger className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {previews.map((prompt) => (
            <StaggerItem key={prompt.id} className="h-full">
              <PromptCard prompt={prompt} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

// ── Digital products ────────────────────────────────────────────────────

export function DigitalProducts() {
  const products = getFeaturedProducts(3);

  return (
    <section className="py-20">
      <Container>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Store"
            title="Templates that do the boring part"
            description="Workbooks, dashboards, and prompt packs built for Indian reporting and compliance work."
          />
          <SectionLink href="/store">Visit the store</SectionLink>
        </div>
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <StaggerItem key={product.id} className="h-full">
              <ProductCard product={product} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

// ── Featured free resources ─────────────────────────────────────────────

export function FeaturedResources() {
  const resources = getFeaturedResources(4);

  return (
    <section className="border-y border-border bg-card/40 py-20">
      <Container>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Free resources"
            title="Take what's useful, no signup wall"
            description="Cheat sheets, question banks, resume templates, and practice databases."
          />
          <SectionLink href="/resources">All resources</SectionLink>
        </div>
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource) => (
            <StaggerItem key={resource.id} className="h-full">
              <ResourceCard resource={resource} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
