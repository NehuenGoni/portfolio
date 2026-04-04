"use client";

import { cn } from "@/lib/utils";

type GradientBlobProps = {
  className?: string;
};

export function GradientBlob({ className }: GradientBlobProps) {
  return (
    <div
      className={cn(
        "absolute rounded-full opacity-20 blur-[120px] pointer-events-none",
        className
      )}
      style={{
        background:
          "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-alt) 100%)",
      }}
    />
  );
}
