"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const newsletterSchema = z.object({
  email: z.string().min(1, "Enter your email").email("Enter a valid email address"),
});

type NewsletterValues = z.infer<typeof newsletterSchema>;

interface NewsletterFormProps {
  className?: string;
  /** Called after client-side validation passes. Wire this to a real API route in a later milestone. */
  onSubscribe?: (values: NewsletterValues) => Promise<void> | void;
}

function NewsletterForm({ className, onSubscribe }: NewsletterFormProps) {
  const [status, setStatus] = React.useState<"idle" | "success">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterValues>({ resolver: zodResolver(newsletterSchema) });

  async function onSubmit(values: NewsletterValues) {
    await onSubscribe?.(values);
    setStatus("success");
    reset();
  }

  if (status === "success") {
    return (
      <div className={cn("flex items-center gap-2 text-sm font-medium text-success", className)} role="status">
        <CheckCircle2 className="h-5 w-5 shrink-0" />
        You're subscribed. Watch your inbox for the next issue.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn("flex flex-col gap-2 sm:flex-row sm:items-start", className)}
    >
      <div className="w-full sm:max-w-xs">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <Input
          id="newsletter-email"
          type="email"
          placeholder="you@example.com"
          error={!!errors.email}
          aria-describedby={errors.email ? "newsletter-email-error" : undefined}
          {...register("email")}
        />
        {errors.email && (
          <p id="newsletter-email-error" className="mt-1.5 text-xs text-destructive">
            {errors.email.message}
          </p>
        )}
      </div>
      <Button type="submit" disabled={isSubmitting} className="shrink-0">
        {isSubmitting ? "Subscribing…" : "Subscribe"}
      </Button>
    </form>
  );
}

export { NewsletterForm };
