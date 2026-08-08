import type { Metadata } from "next";

import { Hero } from "@/components/home/hero";
import { FeaturedCategories } from "@/components/home/featured-categories";
import { FeaturedArticles } from "@/components/home/featured-articles";
import { TrendingNews } from "@/components/home/trending-news";
import { LatestTutorials } from "@/components/home/latest-tutorials";
import {
  LearningRoadmaps,
  PromptLibraryPreview,
  DigitalProducts,
  FeaturedResources,
} from "@/components/home/showcase-sections";
import {
  NewsletterSection,
  AboutSection,
  Testimonials,
} from "@/components/home/social-sections";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
  alternates: { canonical: "/" },
};

/**
 * Section order follows the homepage spec in docs/PLANNING.md.
 * Every section is a server component; only the motion wrappers,
 * navbar, and newsletter form cross into the client.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <FeaturedArticles />
      <TrendingNews />
      <LatestTutorials />
      <LearningRoadmaps />
      <PromptLibraryPreview />
      <DigitalProducts />
      <FeaturedResources />
      <NewsletterSection />
      <AboutSection />
      <Testimonials />
    </>
  );
}
