import type {
  Article,
  Author,
  Category,
  LearningPath,
  Product,
  Prompt,
  Resource,
} from "@/types/content";

/**
 * File-based content source for the current phase.
 *
 * Everything here is typed against types/content.ts, which mirrors the DB
 * schema in docs/PLANNING.md §4. When a real database lands, only
 * lib/content.ts changes — components never read this file directly.
 */

// ── Authors ─────────────────────────────────────────────────────────────

export const authors: Record<string, Author> = {
  ravi: {
    id: "a1",
    name: "Ravi",
    bio: "Writes about analytics, accounting, and the tools that connect them. B.Com Accounting & Finance.",
    avatarUrl: "/authors/ravi.jpg",
    linkedinUrl: "https://linkedin.com/in/raviintelligence",
  },
  desk: {
    id: "a2",
    name: "RI News Desk",
    bio: "Reporting on technology, AI, business, and politics across India and beyond.",
    avatarUrl: "/authors/news-desk.jpg",
  },
};

// ── Categories ──────────────────────────────────────────────────────────

function cat(id: string, name: string, slug: string, kind: Category["kind"], icon?: string): Category {
  return { id, name, slug, kind, icon };
}

export const categories: Record<string, Category> = {
  excel: cat("c1", "Excel", "excel", "learn", "Table2"),
  powerbi: cat("c2", "Power BI", "power-bi", "learn", "BarChart3"),
  sql: cat("c3", "SQL", "sql", "learn", "Database"),
  python: cat("c4", "Python", "python", "learn", "Code2"),
  ai: cat("c5", "Artificial Intelligence", "artificial-intelligence", "learn", "Sparkles"),
  promptEng: cat("c6", "Prompt Engineering", "prompt-engineering", "learn", "MessageSquareCode"),
  accounting: cat("c7", "Accounting", "accounting", "learn", "BookText"),
  finance: cat("c8", "Finance", "finance", "learn", "TrendingUp"),
  seo: cat("c9", "SEO", "seo", "learn", "Search"),
  career: cat("c10", "Career", "career", "learn", "Briefcase"),
  interview: cat("c11", "Interview Preparation", "interview-preparation", "learn", "MessagesSquare"),
  projects: cat("c12", "Projects", "projects", "learn", "FolderGit2"),

  newsTech: cat("n1", "Technology", "technology", "news"),
  newsAi: cat("n2", "Artificial Intelligence", "artificial-intelligence", "news"),
  newsBusiness: cat("n3", "Business", "business", "news"),
  newsIndianPolitics: cat("n4", "Indian Politics", "indian-politics", "news"),
  newsTnPolitics: cat("n5", "Tamil Nadu Politics", "tamil-nadu-politics", "news"),
  newsIndianCinema: cat("n6", "Indian Cinema", "indian-cinema", "news"),
  newsTamilCinema: cat("n7", "Tamil Cinema", "tamil-cinema", "news"),
  newsHollywood: cat("n8", "Hollywood", "hollywood", "news"),

  resExcel: cat("r1", "Excel Templates", "excel-templates", "resource"),
  resPowerBi: cat("r2", "Power BI Dashboards", "power-bi-dashboards", "resource"),
  resSql: cat("r3", "SQL Practice Database", "sql-practice-database", "resource"),
  resInterview: cat("r4", "Interview Questions", "interview-questions", "resource"),
  resResume: cat("r5", "Resume Templates", "resume-templates", "resource"),
  resCheatSheets: cat("r6", "Cheat Sheets", "cheat-sheets", "resource"),

  storeExcel: cat("s1", "Excel Templates", "excel-templates", "store"),
  storePowerBi: cat("s2", "Power BI Dashboards", "power-bi-dashboards", "store"),
  storePrompts: cat("s3", "Prompt Packs", "prompt-packs", "store"),
  storeAccounting: cat("s4", "Accounting Templates", "accounting-templates", "store"),
  storeEbooks: cat("s5", "E-books", "ebooks", "store"),

  promptBusiness: cat("p1", "Business", "business", "prompt"),
  promptLogo: cat("p2", "Logo Design", "logo-design", "prompt"),
  promptUi: cat("p3", "UI Design", "ui-design", "prompt"),
  promptProductMockups: cat("p4", "Product Mockups", "product-mockups", "prompt"),
  promptFood: cat("p5", "Food Photography", "food-photography", "prompt"),
  promptThreeD: cat("p6", "3D Illustration", "3d-illustration", "prompt"),
};

// ── Articles: editorial, news, and tutorials share one table ────────────

export const articles: Article[] = [
  {
    id: "art-1",
    slug: "excel-to-power-bi-the-honest-migration-path",
    title: "From Excel to Power BI: the honest migration path",
    excerpt:
      "Most guides sell the jump as effortless. It isn't. Here's what actually transfers from your spreadsheet skills, what doesn't, and the order to learn things in.",
    bodyMdx: "",
    coverImage: "/covers/excel-to-power-bi.jpg",
    category: categories.powerbi!,
    author: authors.ravi!,
    contentType: "blog",
    readingTimeMinutes: 11,
    isFeatured: true,
    publishedAt: "2026-07-28",
    tags: ["Power BI", "Excel", "Career"],
  },
  {
    id: "art-2",
    slug: "window-functions-explained-with-a-ledger",
    title: "Window functions explained with a ledger, not a textbook",
    excerpt:
      "RANK, LAG, and running totals stop being abstract the moment you apply them to a cash book. A walkthrough built on accounting data.",
    bodyMdx: "",
    coverImage: "/covers/window-functions.jpg",
    category: categories.sql!,
    author: authors.ravi!,
    contentType: "tutorial",
    readingTimeMinutes: 14,
    isFeatured: true,
    publishedAt: "2026-07-24",
    tags: ["SQL", "Accounting", "Analytics"],
  },
  {
    id: "art-3",
    slug: "what-ca-aspirants-get-wrong-about-analytics",
    title: "What CA aspirants get wrong about analytics",
    excerpt:
      "Analytics isn't a career pivot away from accounting — it's leverage on top of it. The skills that compound, and the ones that don't.",
    bodyMdx: "",
    coverImage: "/covers/ca-analytics.jpg",
    category: categories.career!,
    author: authors.ravi!,
    contentType: "blog",
    readingTimeMinutes: 8,
    isFeatured: true,
    publishedAt: "2026-07-19",
    tags: ["Career", "Accounting", "Analytics"],
  },
  {
    id: "art-4",
    slug: "reading-a-balance-sheet-in-ten-minutes",
    title: "Reading a balance sheet in ten minutes",
    excerpt:
      "A repeatable order of operations for making sense of any company's balance sheet, whether you're an investor or an intern.",
    bodyMdx: "",
    coverImage: "/covers/balance-sheet.jpg",
    category: categories.finance!,
    author: authors.ravi!,
    contentType: "blog",
    readingTimeMinutes: 10,
    isFeatured: false,
    publishedAt: "2026-07-15",
    tags: ["Finance", "Accounting"],
  },
  {
    id: "art-5",
    slug: "prompt-patterns-that-survive-model-upgrades",
    title: "Prompt patterns that survive model upgrades",
    excerpt:
      "Prompts tuned to a specific model break when it changes. Structure them around the task instead, and they keep working.",
    bodyMdx: "",
    coverImage: "/covers/prompt-patterns.jpg",
    category: categories.promptEng!,
    author: authors.ravi!,
    contentType: "blog",
    readingTimeMinutes: 9,
    isFeatured: false,
    publishedAt: "2026-07-11",
    tags: ["Prompt Engineering", "AI"],
  },
  {
    id: "art-6",
    slug: "python-for-accountants-first-real-script",
    title: "Python for accountants: your first genuinely useful script",
    excerpt:
      "Skip the toy examples. Build a script that reconciles two ledgers and flags the differences — about 40 lines, start to finish.",
    bodyMdx: "",
    coverImage: "/covers/python-accountants.jpg",
    category: categories.python!,
    author: authors.ravi!,
    contentType: "tutorial",
    readingTimeMinutes: 16,
    isFeatured: false,
    publishedAt: "2026-07-08",
    tags: ["Python", "Accounting", "Automation"],
  },
  {
    id: "art-7",
    slug: "pivot-tables-from-zero",
    title: "Pivot tables from zero",
    excerpt:
      "The single highest-leverage hour you can spend in Excel. Built around a real sales dataset you can download and follow along with.",
    bodyMdx: "",
    coverImage: "/covers/pivot-tables.jpg",
    category: categories.excel!,
    author: authors.ravi!,
    contentType: "tutorial",
    readingTimeMinutes: 12,
    isFeatured: false,
    publishedAt: "2026-07-05",
    tags: ["Excel", "Analytics"],
  },
  {
    id: "art-8",
    slug: "dax-measures-that-actually-matter",
    title: "The eight DAX measures that cover most dashboards",
    excerpt:
      "You don't need fifty functions. These eight measures handle the majority of business reporting requests you'll get.",
    bodyMdx: "",
    coverImage: "/covers/dax-measures.jpg",
    category: categories.powerbi!,
    author: authors.ravi!,
    contentType: "tutorial",
    readingTimeMinutes: 13,
    isFeatured: false,
    publishedAt: "2026-07-02",
    tags: ["Power BI", "DAX"],
  },
];

export const newsArticles: Article[] = [
  {
    id: "news-1",
    slug: "indian-it-services-hiring-shifts-toward-ai-roles",
    title: "Indian IT services hiring shifts toward AI-adjacent roles",
    excerpt:
      "Campus intake patterns are changing at the large service firms, with data and AI engineering roles taking a larger share of fresher hiring.",
    bodyMdx: "",
    coverImage: "/covers/it-hiring.jpg",
    category: categories.newsBusiness!,
    author: authors.desk!,
    contentType: "news",
    readingTimeMinutes: 5,
    isFeatured: true,
    publishedAt: "2026-08-02",
    tags: ["Business", "Careers", "AI"],
  },
  {
    id: "news-2",
    slug: "gst-council-takes-up-rate-rationalisation",
    title: "GST Council takes up rate rationalisation in latest session",
    excerpt:
      "Proposals under discussion would consolidate slabs and change compliance timelines for small businesses.",
    bodyMdx: "",
    coverImage: "/covers/gst-council.jpg",
    category: categories.newsIndianPolitics!,
    author: authors.desk!,
    contentType: "news",
    readingTimeMinutes: 4,
    isFeatured: false,
    publishedAt: "2026-08-01",
    tags: ["Policy", "GST", "Business"],
  },
  {
    id: "news-3",
    slug: "chennai-emerges-as-analytics-hiring-hub",
    title: "Chennai emerges as an analytics hiring hub",
    excerpt:
      "Global capability centres are expanding data teams in the city, with demand concentrated in Power BI, SQL, and cloud analytics.",
    bodyMdx: "",
    coverImage: "/covers/chennai-hiring.jpg",
    category: categories.newsTnPolitics!,
    author: authors.desk!,
    contentType: "news",
    readingTimeMinutes: 6,
    isFeatured: false,
    publishedAt: "2026-07-31",
    tags: ["Tamil Nadu", "Careers", "Analytics"],
  },
  {
    id: "news-4",
    slug: "open-weight-models-narrow-the-gap",
    title: "Open-weight models keep narrowing the capability gap",
    excerpt:
      "Benchmarks released this month show smaller open models closing in on frontier performance for reasoning and code tasks.",
    bodyMdx: "",
    coverImage: "/covers/open-models.jpg",
    category: categories.newsAi!,
    author: authors.desk!,
    contentType: "news",
    readingTimeMinutes: 7,
    isFeatured: false,
    publishedAt: "2026-07-30",
    tags: ["AI", "Research"],
  },
  {
    id: "news-5",
    slug: "tamil-cinema-streaming-windows-shorten",
    title: "Tamil cinema's streaming windows keep shortening",
    excerpt:
      "Theatrical-to-OTT gaps have compressed again this season, changing how mid-budget films plan their releases.",
    bodyMdx: "",
    coverImage: "/covers/tamil-cinema.jpg",
    category: categories.newsTamilCinema!,
    author: authors.desk!,
    contentType: "news",
    readingTimeMinutes: 5,
    isFeatured: false,
    publishedAt: "2026-07-29",
    tags: ["Tamil Cinema", "Streaming"],
  },
  {
    id: "news-6",
    slug: "spreadsheet-tools-add-native-ai-features",
    title: "Spreadsheet tools race to add native AI features",
    excerpt:
      "Formula generation and natural-language analysis are becoming default features rather than add-ons — with real implications for analyst workflows.",
    bodyMdx: "",
    coverImage: "/covers/spreadsheet-ai.jpg",
    category: categories.newsTech!,
    author: authors.desk!,
    contentType: "news",
    readingTimeMinutes: 6,
    isFeatured: false,
    publishedAt: "2026-07-28",
    tags: ["Technology", "Excel", "AI"],
  },
];

// ── Learning paths ──────────────────────────────────────────────────────

export const learningPaths: LearningPath[] = [
  {
    id: "lp-1",
    slug: "data-analyst-from-scratch",
    title: "Data Analyst from Scratch",
    description:
      "Excel to SQL to Power BI, in the order that actually builds on itself. Ends with a portfolio dashboard.",
    coverImage: "/covers/path-data-analyst.jpg",
    difficulty: "beginner",
    estimatedHours: 60,
    audience:
      "Students and career switchers with no analytics background who can already use a spreadsheet at a basic level.",
    outcomes: [
      "Summarise and reshape data confidently in Excel",
      "Write joins and window functions in SQL without reference material",
      "Model data correctly in Power BI rather than fighting it",
      "Ship one portfolio dashboard built on a real dataset",
    ],
    modules: [
      {
        id: "lp1-m1",
        title: "Spreadsheet fundamentals",
        summary:
          "The regroup-and-aggregate pattern, and lookups that don't silently break. Everything later is a variation on these two ideas.",
        order: 1,
        steps: [
          { topicSlug: "excel", lessonSlug: "pivot-tables-from-zero", title: "Pivot tables from zero" },
          { topicSlug: "excel", lessonSlug: "xlookup-and-vlookup", title: "XLOOKUP, and when VLOOKUP still wins" },
        ],
      },
      {
        id: "lp1-m2",
        title: "Querying data with SQL",
        summary:
          "Where the same operations live once the data outgrows a spreadsheet — plus the checks that catch bad joins before they reach a report.",
        order: 2,
        steps: [
          { topicSlug: "sql", lessonSlug: "joins-and-the-row-count-check", title: "Joins, and the row-count check that saves you" },
          { topicSlug: "sql", lessonSlug: "window-functions-with-a-ledger", title: "Window functions explained with a ledger" },
        ],
      },
      {
        id: "lp1-m3",
        title: "Reporting in Power BI",
        summary:
          "Turning queried data into something a manager reads without asking you to explain it.",
        order: 3,
        steps: [
          { topicSlug: "power-bi", lessonSlug: "eight-dax-measures", title: "The eight DAX measures that cover most dashboards" },
        ],
      },
    ],
  },
  {
    id: "lp-2",
    slug: "accounting-to-analytics",
    title: "Accounting to Analytics",
    description:
      "For commerce students and accountants: turn ledger fluency into analytics leverage without starting over.",
    coverImage: "/covers/path-accounting.jpg",
    difficulty: "intermediate",
    estimatedHours: 45,
    audience:
      "B.Com students, CA aspirants, and practising accountants who understand financial statements and want to work with them at scale.",
    outcomes: [
      "Read a balance sheet quickly and know which line items to distrust",
      "Reproduce ledger logic in SQL, including running balances",
      "Automate a monthly reconciliation end to end",
    ],
    modules: [
      {
        id: "lp2-m1",
        title: "The statements themselves",
        summary: "What the numbers mean before you try to analyse them at volume.",
        order: 1,
        steps: [
          { topicSlug: "accounting", lessonSlug: "reading-a-balance-sheet", title: "Reading a balance sheet in ten minutes" },
        ],
      },
      {
        id: "lp2-m2",
        title: "Ledgers at scale",
        summary: "The same ledger operations you know, expressed as queries over thousands of rows.",
        order: 2,
        steps: [
          { topicSlug: "sql", lessonSlug: "joins-and-the-row-count-check", title: "Joins, and the row-count check that saves you" },
          { topicSlug: "sql", lessonSlug: "window-functions-with-a-ledger", title: "Window functions explained with a ledger" },
        ],
      },
      {
        id: "lp2-m3",
        title: "Automating the monthly close",
        summary: "Where the time savings actually are: the tasks you repeat every month.",
        order: 3,
        steps: [
          { topicSlug: "python", lessonSlug: "first-useful-python-script", title: "Your first genuinely useful Python script" },
        ],
      },
    ],
  },
  {
    id: "lp-3",
    slug: "python-for-finance",
    title: "Python for Finance",
    description:
      "Automate reconciliation, statement parsing, and reporting. Built for people who don't want to become software engineers.",
    coverImage: "/covers/path-python-finance.jpg",
    difficulty: "intermediate",
    estimatedHours: 50,
    audience:
      "Finance and accounting professionals who have never written code and want the smallest useful amount of it.",
    outcomes: [
      "Read and clean financial data files reliably",
      "Build a reconciliation that produces an exceptions report",
      "Know when a script is the wrong answer and a spreadsheet is fine",
    ],
    modules: [
      {
        id: "lp3-m1",
        title: "A script worth writing",
        summary: "Start with something you'd actually run, not a temperature converter.",
        order: 1,
        steps: [
          { topicSlug: "python", lessonSlug: "first-useful-python-script", title: "Your first genuinely useful Python script" },
        ],
      },
      {
        id: "lp3-m2",
        title: "The accounting context",
        summary: "The domain knowledge that makes your automation trustworthy.",
        order: 2,
        steps: [
          { topicSlug: "accounting", lessonSlug: "reading-a-balance-sheet", title: "Reading a balance sheet in ten minutes" },
        ],
      },
    ],
  },
  {
    id: "lp-4",
    slug: "ai-for-professionals",
    title: "AI for Working Professionals",
    description:
      "Prompt engineering, tool selection, and the judgement to know when a model is wrong. No ML maths required.",
    coverImage: "/covers/path-ai.jpg",
    difficulty: "beginner",
    estimatedHours: 25,
    audience:
      "Anyone using AI tools at work who wants results they can defend to a reviewer.",
    outcomes: [
      "Write prompts that survive a model upgrade",
      "Verify AI output against a source rather than trusting fluency",
      "Pick the right tool for a task instead of defaulting to one",
    ],
    modules: [
      {
        id: "lp4-m1",
        title: "Prompting fundamentals",
        summary: "Structure prompts around the task, not around a particular model's quirks.",
        order: 1,
        steps: [
          { topicSlug: "prompt-engineering", lessonSlug: "prompt-patterns-that-last", title: "Prompt patterns that survive model upgrades" },
        ],
      },
    ],
  },
];

// ── Free resources ──────────────────────────────────────────────────────

export const resources: Resource[] = [
  {
    id: "res-1",
    slug: "sql-interview-question-bank",
    title: "SQL Interview Question Bank",
    description: "120 questions with worked solutions, grouped by difficulty and topic.",
    category: categories.resInterview!,
    fileUrl: "/downloads/sql-interview-bank.pdf",
    fileType: "PDF",
    fileSizeKb: 2400,
    previewImage: "/previews/sql-bank.jpg",
    downloadCount: 4820,
    publishedAt: "2026-06-20",
  },
  {
    id: "res-2",
    slug: "excel-formula-cheat-sheet",
    title: "Excel Formula Cheat Sheet",
    description: "One page, the 60 formulas that cover most day-to-day analyst work.",
    category: categories.resCheatSheets!,
    fileUrl: "/downloads/excel-cheat-sheet.pdf",
    fileType: "PDF",
    fileSizeKb: 890,
    previewImage: "/previews/excel-cheat.jpg",
    downloadCount: 9140,
    publishedAt: "2026-06-12",
  },
  {
    id: "res-3",
    slug: "analyst-resume-template",
    title: "Analyst Resume Template",
    description: "ATS-safe resume structured for data and finance roles, with annotated examples.",
    category: categories.resResume!,
    fileUrl: "/downloads/analyst-resume.docx",
    fileType: "DOCX",
    fileSizeKb: 340,
    previewImage: "/previews/resume.jpg",
    downloadCount: 6310,
    publishedAt: "2026-05-30",
  },
  {
    id: "res-4",
    slug: "retail-sales-practice-database",
    title: "Retail Sales Practice Database",
    description: "A seeded SQL database with 50,000 rows for practising joins and window functions.",
    category: categories.resSql!,
    fileUrl: "/downloads/retail-practice.sql",
    fileType: "SQL",
    fileSizeKb: 5200,
    previewImage: "/previews/practice-db.jpg",
    downloadCount: 3070,
    publishedAt: "2026-05-18",
  },
];

// ── Paid products ───────────────────────────────────────────────────────

export const products: Product[] = [
  {
    id: "prod-1",
    slug: "gst-reconciliation-workbook",
    title: "GST Reconciliation Workbook",
    description:
      "A monthly filing workbook that reconciles purchase registers against portal data and flags mismatches automatically.",
    category: categories.storeAccounting!,
    priceInr: 499,
    compareAtPriceInr: 899,
    previewImages: ["/previews/gst-workbook.jpg"],
    productType: "template",
    isFeatured: true,
    status: "live",
  },
  {
    id: "prod-2",
    slug: "financial-dashboard-power-bi",
    title: "Financial Dashboard for Power BI",
    description:
      "A complete P&L, cash flow, and ratio dashboard with a documented data model you can point at your own data.",
    category: categories.storePowerBi!,
    priceInr: 1299,
    compareAtPriceInr: 1999,
    previewImages: ["/previews/finance-dashboard.jpg"],
    productType: "dashboard",
    isFeatured: true,
    status: "live",
  },
  {
    id: "prod-3",
    slug: "analyst-prompt-pack",
    title: "Analyst Prompt Pack",
    description:
      "180 tested prompts for data cleaning, formula generation, SQL drafting, and report writing.",
    category: categories.storePrompts!,
    priceInr: 349,
    previewImages: ["/previews/prompt-pack.jpg"],
    productType: "prompt_pack",
    isFeatured: true,
    status: "live",
  },
  {
    id: "prod-4",
    slug: "sql-interview-mastery-ebook",
    title: "SQL Interview Mastery",
    description:
      "A 140-page e-book covering query patterns, optimisation questions, and the reasoning interviewers look for.",
    category: categories.storeEbooks!,
    priceInr: 699,
    compareAtPriceInr: 1099,
    previewImages: ["/previews/sql-ebook.jpg"],
    productType: "ebook",
    isFeatured: false,
    status: "live",
  },
];

// ── Prompt library ──────────────────────────────────────────────────────

export const prompts: Prompt[] = [
  {
    id: "pr-1",
    slug: "minimal-tech-startup-logo",
    title: "Minimal tech startup logo",
    promptText:
      "A minimal geometric logo mark for a data analytics company, single weight linework, deep blue on off-white, centred composition, generous negative space, vector-style, no text.",
    category: categories.promptLogo!,
    previewImage: "/prompts/logo-minimal.jpg",
    difficulty: "beginner",
    tags: ["Logo", "Minimal", "Branding"],
    copyCount: 2140,
  },
  {
    id: "pr-2",
    slug: "saas-dashboard-ui-concept",
    title: "SaaS dashboard UI concept",
    promptText:
      "A clean analytics dashboard interface, light theme, card-based layout, subtle shadows, one accent colour, realistic chart components, 16:9, product screenshot style.",
    category: categories.promptUi!,
    previewImage: "/prompts/dashboard-ui.jpg",
    difficulty: "intermediate",
    tags: ["UI", "Dashboard", "SaaS"],
    copyCount: 1870,
  },
  {
    id: "pr-3",
    slug: "isometric-3d-data-illustration",
    title: "Isometric 3D data illustration",
    promptText:
      "An isometric 3D illustration of stacked data layers and floating chart panels, soft studio lighting, matte pastel materials, gentle depth of field, transparent background.",
    category: categories.promptThreeD!,
    previewImage: "/prompts/isometric-data.jpg",
    difficulty: "intermediate",
    tags: ["3D", "Isometric", "Data"],
    copyCount: 1520,
  },
  {
    id: "pr-4",
    slug: "product-mockup-on-desk",
    title: "Product mockup on a working desk",
    promptText:
      "A laptop on a light wooden desk displaying a spreadsheet application, morning window light, shallow depth of field, notebook and coffee cup slightly out of frame, editorial photography style.",
    category: categories.promptProductMockups!,
    previewImage: "/prompts/desk-mockup.jpg",
    difficulty: "beginner",
    tags: ["Mockup", "Product", "Photography"],
    copyCount: 2660,
  },
  {
    id: "pr-5",
    slug: "south-indian-thali-overhead",
    title: "South Indian thali, overhead",
    promptText:
      "An overhead shot of a South Indian banana leaf thali, natural daylight, steam rising, rich saturated colours, shallow shadows, food magazine styling, square crop.",
    category: categories.promptFood!,
    previewImage: "/prompts/thali.jpg",
    difficulty: "beginner",
    tags: ["Food", "Overhead", "Editorial"],
    copyCount: 3310,
  },
  {
    id: "pr-6",
    slug: "quarterly-report-cover-art",
    title: "Quarterly report cover art",
    promptText:
      "An abstract cover illustration for a corporate quarterly report, upward-moving geometric forms, restrained two-colour palette, generous margins, print-ready composition.",
    category: categories.promptBusiness!,
    previewImage: "/prompts/report-cover.jpg",
    difficulty: "beginner",
    tags: ["Business", "Abstract", "Report"],
    copyCount: 1290,
  },
];

// ── Homepage social proof ───────────────────────────────────────────────

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "The Excel-to-Power-BI path was the first thing that didn't assume I already knew what a data model was. I built my first real dashboard in three weeks.",
    name: "Divya S.",
    role: "B.Com final year, Coimbatore",
    initials: "DS",
  },
  {
    id: "t2",
    quote:
      "I used the SQL question bank for two weeks before my interviews. The worked solutions mattered more than the questions — I could see the reasoning.",
    name: "Arjun M.",
    role: "Business Analyst, Chennai",
    initials: "AM",
  },
  {
    id: "t3",
    quote:
      "As a practising accountant I didn't want a career change, I wanted leverage. The Python reconciliation script alone saves me two days a month.",
    name: "Priya R.",
    role: "Accountant, Madurai",
    initials: "PR",
  },
];

export interface Stat {
  id: string;
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { id: "s1", value: "180+", label: "Tutorials and articles published" },
  { id: "s2", value: "40k+", label: "Free resource downloads" },
  { id: "s3", value: "12", label: "Structured learning paths" },
  { id: "s4", value: "600+", label: "Prompts in the library" },
];
