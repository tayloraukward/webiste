"use client";

import { cn } from "@/lib/utils/cn";

export function GrooveDivider({ className }: { className?: string }) {
  return (
    <div className={cn("w-full", className)} role="presentation">
      <div className="groove-line w-full" />
    </div>
  );
}
