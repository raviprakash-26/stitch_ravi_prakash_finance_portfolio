import Link from "next/link";
import { Linkedin, Youtube, Mail } from "lucide-react";

import { Container } from "@/components/common/container";
import { NewsletterForm } from "@/components/common/newsletter-form";
import { Logo } from "@/components/layout/logo";
import { SITE } from "@/lib/constants";

const footerColumns = [
  {
    title: "Learn",
    links: [
      { label: "Excel", href: "/learn/excel" },
      { label: "Power BI", href: "/learn/power-bi" },
      { label: "SQL", href: "/learn/sql" },
      { label: "Python", href: "/learn/python" },
      { label: "Accounting", href: "/learn/accounting" },
      { label: "Learning roadmaps", href: "/learn/roadmaps" },
    ],
  },
  {
    title: "Read",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Technology news", href: "/news/technology" },
      { label: "AI news", href: "/news/artificial-intelligence" },
      { label: "Business news", href: "/news/business" },
      { label: "Tamil Nadu politics", href: "/news/tamil-nadu-politics" },
      { label: "Tamil cinema", href: "/news/tamil-cinema" },
    ],
  },
  {
    title: "Get",
    links: [
      { label: "Free resources", href: "/resources" },
      { label: "Excel templates", href: "/resources/excel-templates" },
      { label: "Interview questions", href: "/resources/interview-questions" },
      { label: "Digital store", href: "/store" },
      { label: "Prompt library", href: "/prompt-library" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/about#contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2.6fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {SITE.description}
            </p>
            <div className="mt-6">
              <p className="mb-2 text-sm font-medium">Get one useful thing each week</p>
              <NewsletterForm />
              <p className="mt-2 text-xs text-muted-foreground">
                One email a week. Unsubscribe any time.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h2 className="mb-3 font-heading text-sm font-semibold">{column.title}</h2>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {SITE.name}. {SITE.tagline}
          </p>
          <div className="flex items-center gap-1">
            <FooterSocial href="https://linkedin.com" label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </FooterSocial>
            <FooterSocial href="https://youtube.com" label="YouTube">
              <Youtube className="h-4 w-4" />
            </FooterSocial>
            <FooterSocial href="mailto:hello@raviintelligence.com" label="Email">
              <Mail className="h-4 w-4" />
            </FooterSocial>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterSocial({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      rel="noopener noreferrer"
      target="_blank"
      className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
    >
      {children}
    </a>
  );
}
