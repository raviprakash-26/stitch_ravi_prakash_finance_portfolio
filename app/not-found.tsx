import Link from "next/link";
import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main id="main-content" className="flex min-h-[70vh] items-center">
      <Container className="max-w-lg text-center">
        <p className="font-heading text-sm font-semibold uppercase tracking-wider text-primary">404</p>
        <h1 className="mt-3 text-3xl font-heading font-bold">This page doesn't exist yet</h1>
        <p className="mt-3 text-muted-foreground">
          The link may be broken, or the page hasn't been published. Head back to the homepage or
          browse what's already live.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild>
            <Link href="/">Go home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/learn">Browse Learn</Link>
          </Button>
        </div>
      </Container>
    </main>
  );
}
