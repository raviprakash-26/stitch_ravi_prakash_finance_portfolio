import Link from "next/link";
import { Quote } from "lucide-react";

import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { NewsletterForm } from "@/components/common/newsletter-form";
import { Reveal, Stagger, StaggerItem } from "@/components/common/motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getStats, getTestimonials } from "@/lib/content";

// ── Newsletter ──────────────────────────────────────────────────────────

export function NewsletterSection() {
  return (
    <section className="py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-xl border border-border bg-dark px-6 py-14 text-center sm:px-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,hsl(var(--primary)/0.35),transparent_65%)]"
            />
            <div className="relative mx-auto max-w-xl">
              <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
                One useful thing, every week
              </h2>
              <p className="mt-3 text-base text-white/70">
                A tutorial, a template, or a piece of analysis worth your time. No filler, no daily
                digest, no selling your inbox.
              </p>
              <NewsletterForm className="mt-7 justify-center" />
              <p className="mt-3 text-xs text-white/50">Unsubscribe any time.</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

// ── About ───────────────────────────────────────────────────────────────

export function AboutSection() {
  return (
    <section className="border-y border-border bg-card/40 py-20">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="About"
              title="Why this exists"
              description="Most learning material for commerce students is either too academic to apply or too shallow to trust."
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Ravi Intelligence was built around a specific gap: a B.Com student who wants to work
                in analytics has to stitch together scattered videos, paid courses of uneven quality,
                and PDFs of unknown origin — with nothing telling them what order to learn things in.
              </p>
              <p>
                Everything here is written by people who use these tools for actual reporting and
                reconciliation work, not just to make tutorials. If a technique doesn't survive
                contact with a real ledger or a real dashboard request, it doesn't get published.
              </p>
            </div>
            <Button variant="outline" className="mt-7" asChild>
              <Link href="/about">Read the full story</Link>
            </Button>
          </Reveal>

          <Reveal delay={0.08}>
            <StatisticsGrid />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

// ── Statistics ──────────────────────────────────────────────────────────

export function StatisticsGrid() {
  const stats = getStats();
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border">
      {stats.map((stat) => (
        <div key={stat.id} className="bg-card p-8">
          <dt className="sr-only">{stat.label}</dt>
          <dd>
            <span className="block font-heading text-4xl font-bold text-primary">{stat.value}</span>
            <span className="mt-2 block text-sm text-muted-foreground">{stat.label}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}

// ── Testimonials ────────────────────────────────────────────────────────

export function Testimonials() {
  const testimonials = getTestimonials();

  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="From readers"
          title="What people did with it"
          align="center"
          className="mb-12"
        />
        <Stagger className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id} className="h-full">
              <Card className="flex h-full flex-col p-7">
                <Quote className="h-6 w-6 text-primary/40" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">
                    <span className="block font-medium">{testimonial.name}</span>
                    <span className="block text-muted-foreground">{testimonial.role}</span>
                  </span>
                </figcaption>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
