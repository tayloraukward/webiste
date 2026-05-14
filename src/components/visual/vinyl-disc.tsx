"use client";

import { cn } from "@/lib/utils/cn";

type VinylDiscProps = {
  /** When true, disc rotates slowly (respect reduced motion via parent). */
  spinning?: boolean;
  className?: string;
};

/**
 * Decorative vinyl — concentric groove texture, no literal cartoon label art.
 */
export function VinylDisc({ spinning = false, className }: VinylDiscProps) {
  return (
    <div
      className={cn(
        "pointer-events-none relative select-none overflow-hidden rounded-full border border-parchment/10 bg-graphite shadow-lift",
        "bg-[radial-gradient(circle_at_50%_50%,#1f1f22_0_18%,#121214_18%_32%,#0c0c0e_32%_100%)]",
        spinning && "motion-safe:animate-spin-slow",
        className,
      )}
      aria-hidden
    >
      <div
        className="absolute inset-0 rounded-full opacity-[0.45]"
        style={{
          background:
            "repeating-radial-gradient(circle at 50% 50%, transparent 0 3px, rgba(232,228,220,0.04) 3px 4px)",
        }}
      />
      <div className="absolute inset-[10%] rounded-full border border-parchment/5 bg-void/80 shadow-inset" />
      <div className="absolute left-1/2 top-1/2 h-[10%] w-[10%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-parchment/10 bg-void shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />
    </div>
  );
}
