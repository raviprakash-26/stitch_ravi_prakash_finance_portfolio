import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";

/**
 * Wordmark. The mark is a stacked-bars glyph — three ascending bars reading
 * as both a chart and the three verbs in the tagline (Learn. Analyze. Grow.).
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label={`${SITE.name} — home`}
    >
      <span
        aria-hidden="true"
        className="flex h-8 w-8 items-end justify-center gap-[3px] rounded-md bg-primary p-[7px]"
      >
        <span className="h-[7px] w-[3px] rounded-[1px] bg-white/70 transition-all duration-300 group-hover:h-[9px]" />
        <span className="h-[11px] w-[3px] rounded-[1px] bg-white/85 transition-all duration-300 group-hover:h-[13px]" />
        <span className="h-[15px] w-[3px] rounded-[1px] bg-white transition-all duration-300 group-hover:h-[17px]" />
      </span>
      <span className="font-heading text-[1.0625rem] font-semibold tracking-tight">
        Ravi <span className="text-primary">Intelligence</span>
      </span>
    </Link>
  );
}
