import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { ArticleCard } from "@/components/blog/article-card";
import { Reveal, Stagger, StaggerItem } from "@/components/common/motion";
import { getFeaturedArticles } from "@/lib/content";

export function FeaturedArticles() {
  const [lead, ...rest] = getFeaturedArticles(3);
  if (!lead) return null;

  return (
    <section className="border-y border-border bg-card/40 py-20">
      <Container>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Editorial"
            title="Featured writing"
            description="Longer pieces on the craft — what transfers between disciplines and what doesn't."
          />
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            All articles <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <ArticleCard article={lead} variant="feature" className="h-full" />
          </Reveal>
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {rest.map((article) => (
              <StaggerItem key={article.id} className="h-full">
                <ArticleCard article={article} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
