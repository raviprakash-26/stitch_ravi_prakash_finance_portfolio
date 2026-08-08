# Ravi Intelligence

**Learn. Analyze. Grow.**

India-focused learning + editorial platform for Analytics, AI, Accounting, Finance, Technology, and
Career Development. Full planning document (PRD, IA, sitemap, DB schema, component inventory, design
system, roadmap) lives at [`docs/PLANNING.md`](./docs/PLANNING.md).

## Status: Milestones 1–3 complete ✅

### Milestone 3 — Learning Platform ✅

- MDX content pipeline (`lib/mdx.ts`): frontmatter parsing, build-time filesystem reads, reading-time
  estimation, and TOC heading extraction that ignores headings inside code fences
- Routes: `/learn` hub, `/learn/[topic]`, `/learn/[topic]/[lesson]`, `/learn/roadmaps`,
  `/learn/roadmaps/[slug]` — all statically prerendered via `generateStaticParams`
- Lesson pages: sticky table of contents with IntersectionObserver scroll-spy, anchored headings,
  copy-to-clipboard code blocks, prev/next navigation, per-lesson `generateMetadata`
- Roadmap detail pages resolve each step against the real lesson library; steps whose lesson isn't
  written yet render as a labelled placeholder rather than a link that 404s
- Six full tutorials written as real content (Excel ×2, SQL ×2, Python, Power BI, Accounting)
- Topics with no lessons yet get a proper empty state instead of a blank page



### Milestone 2 — Homepage ✅

- Site chrome: dismissible announcement bar, sticky blur-on-scroll navbar with active-route
  highlighting and a mobile sheet, full-sitemap footer with newsletter capture
- All 12 homepage sections in the specified order: Hero → Featured Categories → Featured Articles →
  Trending News → Latest Tutorials → Learning Roadmaps → Prompt Library Preview → Digital Products →
  Featured Resources → Newsletter → About + Statistics → Testimonials
- Reusable content cards: `ArticleCard` (feature/default/compact variants), `ResourceCard`,
  `ProductCard`, `PromptCard`, `RoadmapCard`
- Content access layer (`lib/content.ts`) — the single seam between content source and components, so
  swapping file-based content for the Postgres schema touches one module
- Motion primitives (`Reveal`, `Stagger`, `StaggerItem`, `HoverLift`) with `prefers-reduced-motion`
  handled centrally rather than per component

Every homepage section is a server component; only the navbar, newsletter form, announcement bar, and
motion wrappers cross into the client.

### Milestone 1 — Foundation + Design System ✅

This milestone ships:
- Next.js 15 App Router + TypeScript + Tailwind project scaffold
- Full design token system (colors, type scale, radius, shadows) in `app/globals.css`, light + dark
- 16 production `components/ui/*` primitives (Button, Card, Badge, Alert, Input, Textarea, Label,
  Tabs, Accordion, Avatar, Tooltip, Dialog, Dropdown Menu, Skeleton, Breadcrumb, Pagination)
- `components/common/*` layout primitives (Container, SectionHeading, NewsletterForm, ThemeToggle)
- A living style guide at `/style-guide` showcasing every component and token
- Accessibility floor: visible focus rings, skip-to-content link, `prefers-reduced-motion` support baked
  into base styles

Milestones 2–8 (Homepage, Learning Platform, Editorial Blog & News, Digital Store, Gemini Prompt
Library, SEO & Performance, Testing & Deployment) are scoped in the planning doc and build on this
foundation one at a time.

## Getting started

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` for the current landing state, or `http://localhost:3000/style-guide`
for the full design system reference.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Lint with `next lint` |
| `npm run format` | Format with Prettier (Tailwind class sorting included) |

## Project structure

See §5 of `docs/PLANNING.md` for the full annotated tree. At a glance:

```
app/            routes (App Router)
components/ui/  design-system primitives
components/common/  cross-cutting layout primitives (Container, forms, theme toggle)
components/theme/   next-themes wiring
lib/            utils, constants, (content loaders arrive in Milestone 3)
types/          shared TypeScript types mirroring the DB schema
hooks/          shared client hooks
content/        MDX/JSON content source (populated from Milestone 3 onward)
docs/           planning document + future ADRs
```

## Tech stack

Next.js 15 · React 19 · TypeScript · Tailwind CSS · Radix UI primitives · Framer Motion (wired in,
used from Milestone 2) · React Hook Form + Zod · next-themes · lucide-react.
