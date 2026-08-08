import Link from "next/link";
import {
  BarChart3,
  BookText,
  Briefcase,
  Code2,
  Database,
  FolderGit2,
  MessagesSquare,
  MessageSquareCode,
  Search,
  Sparkles,
  Table2,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Stagger, StaggerItem } from "@/components/common/motion";
import { getLearnCategories } from "@/lib/content";

const iconMap: Record<string, LucideIcon> = {
  Table2,
  BarChart3,
  Database,
  Code2,
  Sparkles,
  MessageSquareCode,
  BookText,
  TrendingUp,
  Search,
  Briefcase,
  MessagesSquare,
  FolderGit2,
};

export function FeaturedCategories() {
  const learnCategories = getLearnCategories();

  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Learn"
          title="Pick a subject, not a playlist"
          description="Every topic has tutorials, downloadable practice material, and a path through it."
          className="mb-10"
        />
        <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {learnCategories.map((category) => {
            const Icon = (category.icon && iconMap[category.icon]) || Sparkles;
            return (
              <StaggerItem key={category.id}>
                <Link
                  href={`/learn/${category.slug}`}
                  className="group flex h-full flex-col items-start gap-3 rounded-lg border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-lifted"
                >
                  <span className="rounded-md bg-primary/10 p-2.5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-heading text-sm font-semibold leading-snug">
                    {category.name}
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
