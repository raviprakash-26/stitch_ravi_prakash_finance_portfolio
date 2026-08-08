import type { Metadata } from "next";

import { Container } from "@/components/common/container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { RoadmapCard } from "@/components/common/content-cards";
import { Stagger, StaggerItem } from "@/components/common/motion";
import { getLearningPaths } from "@/lib/content";

export const metadata: Metadata = {
  title: "Learning roadmaps",
  description:
    "Sequenced learning paths through Excel, SQL, Power BI, Python, accounting, and AI — ordered so each step builds on the last.",
  alternates: { canonical: "/learn/roadmaps" },
};

export default function RoadmapsPage() {
  const paths = getLearningPaths();

  return (
    <>
      <section className="border-b border-border bg-card/40 py-14">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Learn", href: "/learn" },
              { label: "Roadmaps" },
            ]}
            className="mb-6"
          />
          <h1 className="text-4xl font-heading font-bold sm:text-5xl">Learning roadmaps</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            A roadmap is an order, not a bundle. Each one sequences existing lessons so that nothing
            asks you to already know something you haven't covered yet.
          </p>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {paths.map((path) => (
              <StaggerItem key={path.id} className="h-full">
                <RoadmapCard path={path} />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
    </>
  );
}
