import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { ArticleCard } from "@/components/blog/article-card";
import { Reveal } from "@/components/common/motion";
import { getLeadNewsStory, getTrendingNews } from "@/lib/content";

export function TrendingNews() {
  const lead = getLeadNewsStory();
  const trending = getTrendingNews(5);
  if (!lead) return null;

  return (
    <section className="py-20">
      <Container>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="News"
            title="What's moving today"
            description="Technology, AI, business, and politics — reported for people who work with numbers."
          />
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            All news <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <ArticleCard article={lead} variant="feature" />
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <h3 className="mb-2 font-heading text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Also today
              </h3>
              <ol>
                {trending.map((article) => (
                  <li key={article.id}>
                    <ArticleCard article={article} variant="compact" />
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
