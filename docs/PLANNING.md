# Ravi Intelligence — Planning Document

**Learn. Analyze. Grow.**
Version 1.0 · Prepared before implementation, per project brief.

---

## 0. How to read this document

This is the single planning artifact covering all eight sections requested before any code was written: PRD, Information Architecture, Sitemap, Database Schema, Folder Structure, Component Inventory, Design System, and Implementation Roadmap. Milestone 1 (Foundation + Design System) has been implemented against this plan. Milestones 2–8 will be implemented incrementally against the same plan, one at a time, so each can actually be built to a production standard instead of stubbed out.

One scope note up front: "production-ready, serve millions of users" is a direction, not a day-one state. Day one gets you a correctly architected Next.js app — server components, proper caching boundaries, real accessibility, real SEO plumbing — that *scales toward* that target as content, auth, payments, and infra are layered on in later milestones. Auth, payments, and an admin panel are called out below as future-ready (schema + architecture account for them), not built in Milestone 1.

---

## 1. Product Requirements Document (PRD)

### 1.1 Mission
Build India's most trusted learning platform for Analytics, AI, Accounting, Finance, Technology, and Career Development — with editorial quality on par with premium tech media.

### 1.2 Problem
Learners in commerce/analytics/AI in India currently stitch together YouTube, scattered blogs, Telegram PDF dumps, and paid courses of inconsistent quality. There's no single destination that combines structured learning paths, credible news/editorial content, and practical downloadable resources in one premium experience built for this specific audience (B.Com/MBA/CA students, working analysts, accountants, finance professionals).

### 1.3 Target users (personas)

| Persona | Goal on the site |
|---|---|
| B.Com / CA aspirant | Structured learning paths (Excel → SQL → Power BI), interview prep, resume templates |
| MBA student | Business news, case-style content, finance templates |
| Working Data/Business Analyst | SQL/Python practice sets, dashboards, prompt library for productivity |
| Accountant / Finance professional | Accounting templates, GST tools, finance news |
| AI learner / prompt enthusiast | Prompt engineering tutorials, Gemini Prompt Library |
| General tech/news reader | Tech, AI, business, and entertainment news (national + Tamil Nadu-specific) |

### 1.4 Core feature set (v1 scope)

**Content & learning**
- Editorial articles (MDX-based blog/magazine)
- News verticals: Technology, AI, Business, Indian Politics, Tamil Nadu Politics, Indian Cinema, Tamil Cinema, Hollywood
- Structured Learning Paths (roadmap-style, topic → module → lesson)
- Tutorials (long-form, code-annotated where relevant)

**Resources & commerce**
- Free resource downloads (templates, cheat sheets, datasets)
- Digital store (paid templates, dashboards, prompt packs, e-books) — checkout is future-ready, not live in v1
- Gemini Prompt Library (17 categories, structured prompt detail pages)

**Platform**
- Global search across Articles / News / Products / Resources / Prompts
- Newsletter capture
- Dark/light theme

**Explicitly future (architected for, not built now)**
Authentication, Bookmarks, Wishlist, AI Tutor, AI Auditor integration, Community, Courses/Certificates, User Dashboard, Admin Panel, Membership, live Payments.

### 1.5 Success metrics (indicative, to instrument later)
- Organic search sessions per content vertical
- Learning path completion rate (post-auth)
- Resource download → email capture conversion
- Store product view → purchase-intent click-through (pre-payments)
- Core Web Vitals: LCP < 2.0s, INP < 200ms, CLS < 0.1 on 4G mobile

### 1.6 Monetization model
1. Free resources → email list growth
2. Paid digital products (templates, prompt packs, e-books, courses)
3. Future: Membership tier (all products + courses + AI tools)

### 1.7 Non-goals for v1
- No live payment processing (Stripe/Razorpay integration point is reserved in the store schema and UI, not wired up)
- No user accounts/auth
- No CMS admin UI — content is authored in MDX/structured content files in this phase
- No real-time comments (UI placeholder only, per brief)

---

## 2. Information Architecture

```
Ravi Intelligence
│
├── Learn
│   ├── Excel
│   ├── Power BI
│   ├── SQL
│   ├── Python
│   ├── Artificial Intelligence
│   ├── Prompt Engineering
│   ├── Accounting
│   ├── Finance
│   ├── SEO
│   ├── Career
│   ├── Interview Preparation
│   ├── Projects
│   └── Resources
│   └── (cross-cutting) Learning Roadmaps — sequenced paths across the above
│
├── Blog (Editorial)
│   ├── Featured Story / Editor's Picks / Trending / Latest / Popular
│   ├── Categories (mirrors Learn + News taxonomy)
│   └── Tags
│
├── News
│   ├── Technology
│   ├── Artificial Intelligence
│   ├── Business
│   ├── Indian Politics
│   ├── Tamil Nadu Politics
│   ├── Indian Cinema
│   ├── Tamil Cinema
│   └── Hollywood
│
├── Resources (free library)
│   ├── Excel Templates
│   ├── Power BI Dashboards
│   ├── Prompt Library (cross-link to Gemini Prompt Library)
│   ├── SQL Practice Database
│   ├── Python Projects
│   ├── Interview Questions
│   ├── Resume Templates
│   ├── Datasets
│   ├── Cheat Sheets
│   └── Business Templates
│
├── Store (digital products)
│   ├── Excel Templates / Power BI Dashboards / Prompt Packs & Bundles
│   ├── SQL Interview Packs / Python Projects
│   ├── Accounting & Finance Templates
│   ├── E-books / Digital Courses
│   └── (future) Membership
│
├── Prompt Library (Gemini Prompt Library)
│   ├── Business, AI, Marketing, YouTube, Instagram, LinkedIn
│   ├── Logo Design, Website Design, 3D Illustration, UI Design, Icons
│   ├── Product Mockups, Portrait Photography, Food Photography
│   └── Architecture, Fantasy Art, Anime, Realistic Images
│
├── About Ravi Intelligence
├── Search (global, cross-content-type)
└── Newsletter (footer + inline CTAs, not a standalone page)
```

### 2.1 Primary navigation (sticky navbar)
`Learn` · `Blog` · `News` · `Resources` · `Store` · `Prompt Library` · `About` — with `Search` and `Theme Toggle` pinned right, and a "Get Resources Free" or newsletter CTA button.

### 2.2 Content taxonomy relationships
- A single **Category** entity is shared across Blog and News (e.g., "Artificial Intelligence" is both a Learn topic and a News vertical) — see schema §4.
- **Tags** cut across categories (e.g., "Excel", "Budgeting" could tag both a Learn tutorial and a Finance news piece).
- **Resources** and **Store Products** share a `product_type` enum-like taxonomy (Excel Templates, Power BI Dashboards, etc.) so the same taxonomy component renders both free and paid listings.

---

## 3. Sitemap (route inventory)

```
/                                   Homepage

/learn                              Learn hub
/learn/[topic]                      Topic landing (e.g. /learn/excel)
/learn/[topic]/[lesson]             Lesson/tutorial detail
/learn/roadmaps                     All learning roadmaps
/learn/roadmaps/[slug]              Single roadmap detail

/blog                               Editorial magazine home
/blog/category/[category]           Category archive
/blog/tag/[tag]                     Tag archive
/blog/[slug]                        Article detail

/news                               News home (all verticals)
/news/[vertical]                    e.g. /news/technology, /news/tamil-nadu-politics
/news/[vertical]/[slug]             News article detail

/resources                          Resource library home
/resources/[category]               e.g. /resources/excel-templates
/resources/[category]/[slug]        Resource detail (download)

/store                              Digital store home
/store/[category]                   Product category
/store/product/[slug]               Product detail page

/prompt-library                     Gemini Prompt Library home
/prompt-library/[category]          e.g. /prompt-library/logo-design
/prompt-library/[category]/[slug]   Single prompt detail

/search                             Global search results

/about                              About Ravi Intelligence

/style-guide                        Internal living design-system reference (dev-facing, not in main nav)

--- future-ready, routed but gated behind auth (not built in v1) ---
/dashboard, /bookmarks, /wishlist, /account, /admin/*, /courses/[slug]/learn, /ai-tutor, /ai-auditor, /community
```

### 3.1 SEO route conventions
- All list routes support `?page=` pagination with `<link rel="next/prev">` semantics.
- Slugs are kebab-case, permanent once published (redirects map old→new if changed).
- Canonical URLs are absolute and self-referencing on every content detail page.

---

## 4. Database Schema (future-ready)

Designed for PostgreSQL, ORM-agnostic (maps cleanly to Prisma or Drizzle). Content tables are used even before a CMS/admin UI exists — v1 populates them via MDX front-matter + a build-time content pipeline (see §7), so the schema is the contract from day one, not a v2 rewrite.

```sql
-- ── Identity (future-ready; not enforced in v1) ──────────────────────────
users (
  id UUID PK, email TEXT UNIQUE, name TEXT, avatar_url TEXT,
  role ENUM('reader','author','admin') DEFAULT 'reader',
  created_at TIMESTAMPTZ, updated_at TIMESTAMPTZ
)

-- ── Taxonomy (shared by Blog + News + Resources + Store) ────────────────
categories (
  id UUID PK, name TEXT, slug TEXT UNIQUE, kind ENUM('learn','news','resource','store','prompt'),
  parent_id UUID FK -> categories.id NULL, description TEXT, icon TEXT
)

tags (
  id UUID PK, name TEXT, slug TEXT UNIQUE
)

-- ── Editorial content ─────────────────────────────────────────────────
authors (
  id UUID PK, user_id UUID FK -> users.id NULL, name TEXT, bio TEXT,
  avatar_url TEXT, twitter_url TEXT, linkedin_url TEXT
)

articles (
  id UUID PK, slug TEXT UNIQUE, title TEXT, excerpt TEXT, body_mdx TEXT,
  cover_image TEXT, category_id UUID FK -> categories.id,
  author_id UUID FK -> authors.id, content_type ENUM('blog','news','tutorial'),
  reading_time_minutes INT, status ENUM('draft','published','archived'),
  is_featured BOOLEAN DEFAULT FALSE, published_at TIMESTAMPTZ,
  seo_title TEXT, seo_description TEXT, created_at TIMESTAMPTZ, updated_at TIMESTAMPTZ
)

article_tags ( article_id UUID FK, tag_id UUID FK, PRIMARY KEY(article_id, tag_id) )

-- ── Learning ──────────────────────────────────────────────────────────
learning_paths (
  id UUID PK, slug TEXT UNIQUE, title TEXT, description TEXT,
  cover_image TEXT, difficulty ENUM('beginner','intermediate','advanced'),
  estimated_hours INT, is_published BOOLEAN
)

learning_path_modules (
  id UUID PK, learning_path_id UUID FK, title TEXT, "order" INT
)

lessons (
  id UUID PK, module_id UUID FK -> learning_path_modules.id, slug TEXT,
  title TEXT, body_mdx TEXT, video_url TEXT NULL, "order" INT,
  is_free_preview BOOLEAN DEFAULT FALSE
)

-- ── Resources (free) & Store (paid) share a taxonomy, split by table ────
resources (
  id UUID PK, slug TEXT UNIQUE, title TEXT, description TEXT,
  category_id UUID FK -> categories.id, file_url TEXT, file_type TEXT,
  file_size_kb INT, preview_image TEXT, download_count INT DEFAULT 0,
  published_at TIMESTAMPTZ
)

products (
  id UUID PK, slug TEXT UNIQUE, title TEXT, description TEXT,
  category_id UUID FK -> categories.id, price_inr NUMERIC(10,2),
  compare_at_price_inr NUMERIC(10,2) NULL, preview_images TEXT[],
  file_url TEXT, product_type ENUM('template','dashboard','prompt_pack',
  'course','ebook','zip_bundle'), is_featured BOOLEAN, status ENUM('draft','live','archived')
)

orders (
  id UUID PK, user_id UUID FK -> users.id NULL, email TEXT,
  total_inr NUMERIC(10,2), status ENUM('pending','paid','failed','refunded'),
  payment_provider TEXT NULL, payment_ref TEXT NULL, created_at TIMESTAMPTZ
)

order_items ( id UUID PK, order_id UUID FK, product_id UUID FK, price_inr NUMERIC(10,2) )

-- ── Prompt Library ────────────────────────────────────────────────────
prompts (
  id UUID PK, slug TEXT UNIQUE, title TEXT, prompt_text TEXT,
  category_id UUID FK -> categories.id, preview_image TEXT,
  difficulty ENUM('beginner','intermediate','advanced'), copy_count INT DEFAULT 0
)
prompt_tags ( prompt_id UUID FK, tag_id UUID FK, PRIMARY KEY(prompt_id, tag_id) )

-- ── Engagement (future-ready) ─────────────────────────────────────────
newsletter_subscribers ( id UUID PK, email TEXT UNIQUE, subscribed_at TIMESTAMPTZ, source TEXT )
bookmarks ( id UUID PK, user_id UUID FK, content_type TEXT, content_id UUID, created_at TIMESTAMPTZ )
wishlists ( id UUID PK, user_id UUID FK, product_id UUID FK, created_at TIMESTAMPTZ )
reviews ( id UUID PK, product_id UUID FK, user_id UUID FK, rating INT, body TEXT, created_at TIMESTAMPTZ )
```

**Indexing notes:** btree on every `slug` (unique), composite index on `(category_id, published_at)` for archive pagination, GIN index on `tags.slug` join paths, partial index on `products.status = 'live'`.

---

## 5. Folder Structure

```
ravi-intelligence/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx                     → / (homepage, Milestone 2)
│   │   └── about/page.tsx
│   ├── learn/
│   │   ├── page.tsx
│   │   ├── roadmaps/[slug]/page.tsx
│   │   └── [topic]/[[...lesson]]/page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   ├── category/[category]/page.tsx
│   │   └── [slug]/page.tsx
│   ├── news/
│   │   ├── page.tsx
│   │   └── [vertical]/[[...slug]]/page.tsx
│   ├── resources/
│   │   ├── page.tsx
│   │   └── [category]/[[...slug]]/page.tsx
│   ├── store/
│   │   ├── page.tsx
│   │   ├── [category]/page.tsx
│   │   └── product/[slug]/page.tsx
│   ├── prompt-library/
│   │   ├── page.tsx
│   │   └── [category]/[[...slug]]/page.tsx
│   ├── search/page.tsx
│   ├── style-guide/page.tsx             ← built in Milestone 1
│   ├── layout.tsx                       ← built in Milestone 1
│   ├── globals.css                      ← built in Milestone 1
│   ├── sitemap.ts / robots.ts           (Milestone 7)
│   └── not-found.tsx / error.tsx
│
├── components/
│   ├── ui/            → design-system primitives (Button, Card, Badge, …) — Milestone 1
│   ├── layout/         → Navbar, Footer, AnnouncementBar, MobileNav — Milestone 2
│   ├── home/           → Hero, FeaturedCategories, TrendingNews, … — Milestone 2
│   ├── blog/           → ArticleCard, TableOfContents, ShareButtons, … — Milestone 4
│   ├── news/           → NewsCard, VerticalTabs, … — Milestone 4
│   ├── resources/       → ResourceCard, DownloadButton … — Milestone 5
│   ├── store/           → ProductCard, PriceTag, BuyButton … — Milestone 5
│   ├── prompt-library/  → PromptCard, CopyButton, DifficultyBadge … — Milestone 6
│   └── common/          → SectionHeading, Container, EmptyState, Newsletter form — Milestone 1
│
├── content/            → MDX + JSON content source (articles, news, lessons, prompts)
├── lib/                → utils.ts, content-loader.ts, seo.ts, constants.ts
├── hooks/              → use-media-query.ts, use-copy-to-clipboard.ts, etc.
├── types/              → shared TypeScript types mirroring the DB schema
├── styles/             → (design tokens live in app/globals.css; reserved for future theme packs)
├── public/             → images, favicons, og-default.png
├── docs/                → this planning doc + ADRs
└── config files          → next.config.mjs, tailwind.config.ts, tsconfig.json, etc.
```

---

## 6. Component Inventory

| Component | Folder | Status | Notes |
|---|---|---|---|
| Button | ui | ✅ M1 | variants: default/secondary/outline/ghost/link/destructive; sizes sm/default/lg/icon |
| Card (+ Header/Title/Description/Content/Footer) | ui | ✅ M1 | base surface for all content cards |
| Badge | ui | ✅ M1 | variants: default/secondary/outline/success/warning |
| Alert (+ Title/Description) | ui | ✅ M1 | info/success/warning/destructive |
| Input | ui | ✅ M1 | with error state |
| Textarea | ui | ✅ M1 | with error state |
| Label | ui | ✅ M1 | Radix label |
| Tabs | ui | ✅ M1 | Radix tabs, used by category switchers |
| Accordion | ui | ✅ M1 | Radix accordion, FAQ/lesson lists |
| Avatar | ui | ✅ M1 | author avatars |
| Tooltip | ui | ✅ M1 | |
| Dialog (Modal) | ui | ✅ M1 | Radix dialog |
| Dropdown Menu | ui | ✅ M1 | Radix dropdown |
| Skeleton | ui | ✅ M1 | loading states |
| Breadcrumb | ui | ✅ M1 | with JSON-LD hook point for Milestone 7 |
| Pagination | ui | ✅ M1 | numbered + prev/next |
| Container | common | ✅ M1 | max-width + responsive padding wrapper |
| SectionHeading | common | ✅ M1 | eyebrow + title + description pattern |
| ThemeToggle | common | ✅ M1 | light/dark/system |
| NewsletterForm | common | ✅ M1 | RHF + Zod validated |
| Search (command palette) | ui | ⏳ M2/M7 | global search UI |
| Modal wrappers for specific flows | ui | ⏳ later | e.g. quick-view |
| Navbar / Footer / AnnouncementBar | layout | ⏳ M2 | |
| ArticleCard / NewsCard | blog, news | ⏳ M4 | |
| ResourceCard / ProductCard | resources, store | ⏳ M5 | |
| PromptCard | prompt-library | ⏳ M6 | |
| RoadmapCard | learn | ⏳ M3 | |

---

## 7. Design System

### 7.1 Color tokens
| Token | Hex | Usage |
|---|---|---|
| `--color-primary` | `#2563EB` | Primary actions, links, brand |
| `--color-secondary` | `#10B981` | Success, secondary accents, "free" badges |
| `--color-accent` | `#F97316` | Highlights, featured badges, CTAs that need urgency |
| `--color-dark` | `#0F172A` | Dark surface / dark-mode background / footer |
| `--color-surface` | `#F8FAFC` | Light-mode page background |

Derived neutral scale (slate 50–900) and semantic states (destructive, warning, success, info) are defined in `globals.css` as CSS variables so both light and dark themes resolve from the same variable names — no component ever hardcodes a hex value.

### 7.2 Typography
| Role | Family | Notes |
|---|---|---|
| Headings | Poppins | 600/700 weight, tight tracking on display sizes |
| Body | Inter | 400/500, optimized for long-form reading |
| Code | JetBrains Mono | tutorials, SQL/Python snippets |

Type scale: `text-xs` → `text-6xl` via Tailwind, with a custom `text-display` utility for hero-scale headings using `clamp()` for fluid sizing.

### 7.3 Layout & elevation
- 8px base spacing scale
- Radius scale: `sm (6px) / md (10px) / lg (16px) / xl (24px)` — cards default to `lg`
- Shadow scale: `soft` (ambient, for cards) → `lifted` (hover state) → `overlay` (modals/dropdowns)
- Container max-widths: `max-w-7xl` for editorial/marketing pages, `max-w-3xl` for article reading columns (optimized measure ~68ch)

### 7.4 Motion
Framer Motion used for: page-level fade/slide-up on route change, staggered reveal for card grids, hover lift on cards, and a `prefers-reduced-motion` guard baked into a shared `motion-safe` wrapper so nothing above respects-motion is required per-component.

---

## 8. Implementation Roadmap

| Milestone | Scope | Status |
|---|---|---|
| 1. Foundation + Design System | Next.js 15 app router scaffold, Tailwind config, design tokens, core `ui/` + `common/` components, theming, style guide page | ✅ Delivered this pass |
| 2. Homepage | Announcement bar, sticky Navbar, Footer, Hero, Featured Categories, Featured Articles, Trending News, Latest Tutorials, Roadmaps, Prompt Library preview, Digital Products, Featured Resources, Newsletter, About, Stats, Testimonials — plus the content access layer and all reusable content cards | ✅ Delivered |
| 3. Learning Platform | `/learn` hub, topic pages, lesson pages with TOC, roadmaps index and detail, full MDX content pipeline with syntax-highlighted code and copy buttons | ✅ Delivered |
| 4. Editorial Blog & News | `/blog`, `/news`, category/tag archives, article detail with TOC/share/author bio | ⏳ Next |
| 5. Digital Store | `/resources`, `/store`, product detail, download/buy flows (payment-ready, not live) | ⏳ |
| 6. Gemini Prompt Library | `/prompt-library`, 17 categories, prompt detail pages with copy button | ⏳ |
| 7. SEO & Performance | metadata, JSON-LD, sitemap.xml/robots.txt, image optimization pass, Lighthouse tuning | ⏳ |
| 8. Testing & Deployment | unit/e2e test setup, CI, Vercel deployment config | ⏳ |

Each future milestone will be delivered the same way Milestone 1 was: real code, no stubbed pages, reviewed against this plan before being marked done.
