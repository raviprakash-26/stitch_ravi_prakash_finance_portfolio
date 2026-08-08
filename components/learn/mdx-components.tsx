import Link from "next/link";
import type { MDXComponents } from "mdx/types";

import { CodeBlock } from "@/components/learn/code-block";
import { cn } from "@/lib/utils";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function textOf(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(textOf).join("");
  return "";
}

/**
 * Element mapping for lesson MDX.
 *
 * Heading IDs are derived with the same slugify used by lib/mdx.ts's TOC
 * extraction, so anchors and the table of contents can't drift apart.
 */
export const mdxComponents: MDXComponents = {
  h2: ({ children, ...props }) => {
    const id = slugify(textOf(children));
    return (
      <h2
        id={id}
        className="group mt-14 scroll-mt-24 text-2xl font-semibold first:mt-0"
        {...props}
      >
        {children}
        <a
          href={`#${id}`}
          aria-label={`Link to ${textOf(children)}`}
          className="ml-2 text-primary opacity-0 transition-opacity focus:opacity-100 group-hover:opacity-100"
        >
          #
        </a>
      </h2>
    );
  },

  h3: ({ children, ...props }) => (
    <h3 id={slugify(textOf(children))} className="mt-10 scroll-mt-24 text-xl font-semibold" {...props}>
      {children}
    </h3>
  ),

  p: ({ className, ...props }) => (
    <p className={cn("mt-5 leading-[1.75] text-foreground/90", className)} {...props} />
  ),

  ul: ({ className, ...props }) => (
    <ul className={cn("mt-5 list-disc space-y-2 pl-6 text-foreground/90", className)} {...props} />
  ),

  ol: ({ className, ...props }) => (
    <ol className={cn("mt-5 list-decimal space-y-2 pl-6 text-foreground/90", className)} {...props} />
  ),

  li: ({ className, ...props }) => <li className={cn("leading-relaxed", className)} {...props} />,

  strong: ({ className, ...props }) => (
    <strong className={cn("font-semibold text-foreground", className)} {...props} />
  ),

  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 border-primary/40 bg-muted/40 py-3 pl-5 pr-4 text-foreground/80",
        className,
      )}
      {...props}
    />
  ),

  a: ({ href = "#", children, ...props }) => {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
      return (
        <Link href={href} className="text-primary underline underline-offset-4 hover:no-underline">
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-4 hover:no-underline"
        {...props}
      >
        {children}
      </a>
    );
  },

  hr: () => <hr className="my-12 border-border" />,

  table: ({ className, ...props }) => (
    <div className="mt-6 w-full overflow-x-auto">
      <table className={cn("w-full border-collapse text-sm", className)} {...props} />
    </div>
  ),

  th: ({ className, ...props }) => (
    <th
      className={cn("border border-border bg-muted px-3 py-2 text-left font-semibold", className)}
      {...props}
    />
  ),

  td: ({ className, ...props }) => (
    <td className={cn("border border-border px-3 py-2", className)} {...props} />
  ),

  // Inline code. Fenced blocks are intercepted by `pre` below.
  code: ({ className, ...props }) => (
    <code
      className={cn(
        "rounded-sm bg-muted px-1.5 py-0.5 font-mono text-[0.875em] text-foreground",
        className,
      )}
      {...props}
    />
  ),

  pre: ({ children, ...props }) => <CodeBlock {...props}>{children}</CodeBlock>,
};
