import type { Metadata } from "next";
import { Info, CheckCircle2, AlertTriangle, XCircle, Search } from "lucide-react";

import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { NewsletterForm } from "@/components/common/newsletter-form";
import { ThemeToggle } from "@/components/common/theme-toggle";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Pagination } from "@/components/ui/pagination";

export const metadata: Metadata = {
  title: "Style Guide",
  robots: { index: false, follow: false },
};

const swatches = [
  { name: "Primary", token: "bg-primary", hex: "#2563EB" },
  { name: "Secondary", token: "bg-secondary", hex: "#10B981" },
  { name: "Accent", token: "bg-accent", hex: "#F97316" },
  { name: "Dark", token: "bg-dark", hex: "#0F172A" },
  { name: "Surface", token: "bg-surface border border-border", hex: "#F8FAFC" },
];

export default function StyleGuidePage() {
  return (
    <main id="main-content" className="py-16">
      <Container className="space-y-20">
        <header className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Milestone 1 · Internal reference
            </p>
            <h1 className="text-display font-heading font-bold">Design System</h1>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Every token and primitive that the rest of Ravi Intelligence is built from. This page
              isn't in the main navigation — it's the living reference engineers and designers check
              against while building Milestones 2–8.
            </p>
          </div>
          <ThemeToggle />
        </header>

        {/* Colors */}
        <section aria-labelledby="colors-heading">
          <SectionHeading eyebrow="Foundation" title="Color tokens" className="mb-8" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
            {swatches.map((s) => (
              <div key={s.name}>
                <div className={`h-20 w-full rounded-lg ${s.token}`} />
                <p className="mt-2 text-sm font-medium">{s.name}</p>
                <p className="font-mono text-xs text-muted-foreground">{s.hex}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section aria-labelledby="type-heading">
          <SectionHeading eyebrow="Foundation" title="Typography" className="mb-8" />
          <div className="space-y-5 rounded-lg border border-border bg-card p-8">
            <p className="text-display font-heading font-bold">Display · Poppins</p>
            <h2 className="text-4xl font-heading font-semibold">Heading 2 · Poppins Semibold</h2>
            <h3 className="text-2xl font-heading font-semibold">Heading 3 · Poppins Semibold</h3>
            <p className="font-body text-base text-foreground">
              Body text uses Inter — set for long-form reading comfort across tutorials, articles, and
              news coverage, at a measure of roughly 68 characters per line in the editorial column.
            </p>
            <p className="font-mono text-sm text-muted-foreground">
              const readingTime = estimateReadingTime(article.body_mdx);
            </p>
          </div>
        </section>

        {/* Buttons */}
        <section aria-labelledby="buttons-heading">
          <SectionHeading eyebrow="Actions" title="Buttons" className="mb-8" />
          <div className="flex flex-wrap gap-3">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="accent">Accent</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon" aria-label="Search">
              <Search />
            </Button>
          </div>
        </section>

        {/* Badges */}
        <section aria-labelledby="badges-heading">
          <SectionHeading eyebrow="Status" title="Badges" className="mb-8" />
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="accent">Featured</Badge>
            <Badge variant="success">Free</Badge>
            <Badge variant="warning">Beta</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="muted">Archived</Badge>
          </div>
        </section>

        {/* Alerts */}
        <section aria-labelledby="alerts-heading">
          <SectionHeading eyebrow="Feedback" title="Alerts" className="mb-8" />
          <div className="space-y-3">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Heads up</AlertTitle>
              <AlertDescription>Default alert for neutral, informational messages.</AlertDescription>
            </Alert>
            <Alert variant="success">
              <CheckCircle2 className="h-4 w-4" />
              <AlertTitle>Download ready</AlertTitle>
              <AlertDescription>Your resource has been added to your downloads.</AlertDescription>
            </Alert>
            <Alert variant="warning">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Limited stock</AlertTitle>
              <AlertDescription>This bundle price ends when the cohort closes.</AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <XCircle className="h-4 w-4" />
              <AlertTitle>Checkout failed</AlertTitle>
              <AlertDescription>We couldn't process that payment. Try again.</AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Cards */}
        <section aria-labelledby="cards-heading">
          <SectionHeading eyebrow="Content" title="Cards" className="mb-8" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Badge variant="secondary" className="mb-2 w-fit">
                  Excel
                </Badge>
                <CardTitle>Pivot Tables from Zero</CardTitle>
                <CardDescription>A hands-on walkthrough for first-time analysts.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">12 min read</CardContent>
              <CardFooter>
                <Button variant="link" className="px-0">
                  Read tutorial →
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Badge variant="accent" className="mb-2 w-fit">
                  Featured
                </Badge>
                <CardTitle>GST Reconciliation Template</CardTitle>
                <CardDescription>A ready-to-use workbook for monthly filing.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm font-semibold">₹499</CardContent>
              <CardFooter>
                <Button size="sm">Buy now</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Badge variant="success" className="mb-2 w-fit">
                  Free
                </Badge>
                <CardTitle>SQL Interview Question Bank</CardTitle>
                <CardDescription>120 questions with worked solutions.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">PDF · 2.4 MB</CardContent>
              <CardFooter>
                <Button size="sm" variant="outline">
                  Download
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Forms */}
        <section aria-labelledby="forms-heading">
          <SectionHeading eyebrow="Input" title="Form elements" className="mb-8" />
          <div className="grid max-w-xl gap-5">
            <div>
              <Label htmlFor="sg-name">Name</Label>
              <Input id="sg-name" placeholder="Ravi Kumar" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="sg-email-error">Email</Label>
              <Input id="sg-email-error" placeholder="you@example.com" error className="mt-1.5" />
              <p className="mt-1.5 text-xs text-destructive">Enter a valid email address</p>
            </div>
            <div>
              <Label htmlFor="sg-message">Message</Label>
              <Textarea id="sg-message" placeholder="How can we help?" className="mt-1.5" />
            </div>
            <div>
              <Label className="mb-1.5 block">Newsletter form</Label>
              <NewsletterForm />
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section aria-labelledby="tabs-heading">
          <SectionHeading eyebrow="Navigation" title="Tabs" className="mb-8" />
          <Tabs defaultValue="excel" className="max-w-md">
            <TabsList>
              <TabsTrigger value="excel">Excel</TabsTrigger>
              <TabsTrigger value="sql">SQL</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
            </TabsList>
            <TabsContent value="excel" className="text-sm text-muted-foreground">
              14 tutorials · 6 templates
            </TabsContent>
            <TabsContent value="sql" className="text-sm text-muted-foreground">
              9 tutorials · a practice database
            </TabsContent>
            <TabsContent value="python" className="text-sm text-muted-foreground">
              11 tutorials · 5 projects
            </TabsContent>
          </Tabs>
        </section>

        {/* Accordion */}
        <section aria-labelledby="accordion-heading">
          <SectionHeading eyebrow="Disclosure" title="Accordion" className="mb-8" />
          <Accordion type="single" collapsible className="max-w-xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>What's included in a Learning Path?</AccordionTrigger>
              <AccordionContent>
                A sequenced set of modules and lessons, each with a free preview lesson before any
                gated content.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Are the resources really free?</AccordionTrigger>
              <AccordionContent>
                Yes — everything under Resources is free to download; Store is where paid, deeper
                products live.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Avatar, Tooltip, Dialog, Dropdown */}
        <section aria-labelledby="overlays-heading">
          <SectionHeading eyebrow="Overlays & identity" title="Avatar · Tooltip · Dialog · Dropdown" className="mb-8" />
          <div className="flex flex-wrap items-center gap-6">
            <Avatar>
              <AvatarImage src="/avatars/ravi.jpg" alt="" />
              <AvatarFallback>RI</AvatarFallback>
            </Avatar>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm">
                  Hover me
                </Button>
              </TooltipTrigger>
              <TooltipContent>Reading time: 8 minutes</TooltipContent>
            </Tooltip>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  Open dialog
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Join the free cohort</DialogTitle>
                  <DialogDescription>
                    Get the next SQL practice set delivered to your inbox.
                  </DialogDescription>
                </DialogHeader>
                <NewsletterForm />
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="ghost">Maybe later</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Sort by
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Sort articles</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Newest first</DropdownMenuItem>
                <DropdownMenuItem>Most popular</DropdownMenuItem>
                <DropdownMenuItem>Reading time</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </section>

        {/* Skeleton */}
        <section aria-labelledby="skeleton-heading">
          <SectionHeading eyebrow="Loading state" title="Skeleton" className="mb-8" />
          <div className="max-w-sm space-y-3">
            <Skeleton className="h-40 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </section>

        {/* Breadcrumb + Pagination */}
        <section aria-labelledby="nav-heading">
          <SectionHeading eyebrow="Wayfinding" title="Breadcrumb · Pagination" className="mb-8" />
          <div className="space-y-8">
            <Breadcrumb
              items={[
                { label: "Learn", href: "/learn" },
                { label: "Excel", href: "/learn/excel" },
                { label: "Pivot Tables from Zero" },
              ]}
            />
            <Pagination currentPage={3} totalPages={9} hrefForPage={(p) => `/style-guide?page=${p}`} />
          </div>
        </section>
      </Container>
    </main>
  );
}
