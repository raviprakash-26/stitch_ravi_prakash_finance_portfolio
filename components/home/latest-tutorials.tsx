import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { ArticleCard } from "@/components/blog/article-card";
import { Stagger, StaggerItem } from "@/components/common/motion";
import { getLatestTutorials } from "@/lib/content";

export function LatestTutorials() {
  const tutorials = getLatestTutorials(4);

  return (
    <section className="border-y border-border bg-card/40 py-20">
      <Container>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Tutorials"
            title="Build something this week"
            description="Step-by-step walkthroughs with the practice files included."
          />
          <Link
            href="/learn"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            All tutorials <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tutorials.map((tutorial) => (
            <StaggerItem key={tutorial.id} className="h-full">
              <ArticleCard article={tutorial} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
