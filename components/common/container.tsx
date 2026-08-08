import * as React from "react";
import { cn } from "@/lib/utils";

/** Standard page-width wrapper. Use `narrow` for reading-column content (article bodies). */
function Container({
  className,
  narrow = false,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { narrow?: boolean }) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6",
        narrow ? "max-w-3xl" : "max-w-7xl",
        className,
      )}
      {...props}
    />
  );
}

export { Container };
