"use client";

import { cn } from "@/lib/utils";

export function Spinner({
  className,
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <span
        aria-hidden="true"
        className="h-4 w-4 animate-spin rounded-full border-2 border-neutral-200 border-t-[color:var(--color-accent)]"
      />
      {label ? <span className="text-sm text-neutral-600">{label}</span> : null}
    </div>
  );
}

