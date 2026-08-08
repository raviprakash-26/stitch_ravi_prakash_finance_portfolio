"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Wraps a syntax-highlighted <pre> and adds copy-to-clipboard.
 *
 * The text is read off the rendered DOM node rather than from props, because
 * by the time it reaches here the children are already a highlighted element
 * tree, not a plain string.
 */
export function CodeBlock({ children, className, ...props }: React.HTMLAttributes<HTMLPreElement>) {
  const preRef = React.useRef<HTMLPreElement>(null);
  const [copied, setCopied] = React.useState(false);

  async function copy() {
    const text = preRef.current?.textContent ?? "";
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard permission denied — leave the button in its resting state
      // rather than showing a success that didn't happen.
    }
  }

  return (
    <div className="group relative mt-6">
      <pre
        ref={preRef}
        className={cn(
          "overflow-x-auto rounded-lg border border-border bg-dark p-5 font-mono text-sm leading-relaxed text-slate-100",
          className,
        )}
        {...props}
      >
        {children}
      </pre>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Copied" : "Copy code"}
        className="absolute right-3 top-3 rounded-md border border-white/15 bg-white/10 p-2 text-white/70 opacity-0 transition-all hover:bg-white/20 hover:text-white focus-visible:opacity-100 group-hover:opacity-100"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  );
}
