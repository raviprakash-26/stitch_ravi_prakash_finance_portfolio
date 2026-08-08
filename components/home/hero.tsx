import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/motion";

const verbs = [
  { word: "Learn", detail: "Structured paths in Excel, SQL, Python, AI, and accounting." },
  { word: "Analyze", detail: "Real datasets, real dashboards, real reconciliation work." },
  { word: "Grow", detail: "Interview prep, resumes, and the judgement that gets you hired." },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Ambient gradient wash — the only decorative element on the page. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_15%_0%,hsl(var(--primary)/0.10),transparent_60%),radial-gradient(45%_45%_at_85%_10%,hsl(var(--accent)/0.08),transparent_60%)]"
      />
      <Container className="relative py-20 sm:py-28">
        <div className="max-w-3xl">
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden="true" />
              Built in India, for commerce and analytics learners
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="text-display font-heading font-bold">
              Learn. Analyze.{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Grow.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Tutorials, templates, and reporting you can actually apply at work — for students,
              accountants, and analysts who'd rather build something than watch another playlist.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link href="/learn/roadmaps">
                  Find your learning path <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/resources">Browse free resources</Link>
              </Button>
            </div>
          </Reveal>
        </div>

        {/* The three verbs of the tagline, made into actual structure rather than a slogan. */}
        <Reveal delay={0.2}>
          <dl className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
            {verbs.map(({ word, detail }) => (
              <div key={word} className="bg-card p-6">
                <dt className="font-heading text-lg font-semibold text-primary">{word}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{detail}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
