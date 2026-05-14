"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

import { cn } from "@/lib/utils/cn";

type WaveAmbientProps = {
  className?: string;
};

/** Immersive ambient field — streaming-app energy without literal UI chrome. */
export function WaveAmbient({ className }: WaveAmbientProps) {
  const reduce = useReducedMotion();
  const bars = useMemo(() => Array.from({ length: 56 }, (_, i) => i), []);

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <div className="absolute inset-0 bg-ambient-app opacity-100" />
      <div className="absolute inset-0 bg-ambient-depth" />
      <div className="absolute inset-0 bg-noise-soft opacity-60 mix-blend-overlay" />

      <div className="absolute inset-x-0 bottom-0 flex h-[42%] items-end justify-center gap-[3px] opacity-[0.18] sm:h-[48%]">
        {bars.map((i) => {
          const h = 12 + ((i * 17) % 52);
          const delay = reduce ? 0 : (i % 14) * 0.06;
          return (
            <motion.span
              key={i}
              className="w-[2px] rounded-full bg-gradient-to-t from-transparent via-spotify/35 to-parchment/30"
              style={{ height: `${h}%`, transformOrigin: "50% 100%" }}
              animate={reduce ? { scaleY: 1 } : { scaleY: [0.28, 0.95, 0.38, 0.9, 0.28] }}
              transition={{
                duration: 3.6 + (i % 5) * 0.2,
                repeat: Infinity,
                ease: [0.45, 0, 0.55, 1],
                delay,
              }}
            />
          );
        })}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-transparent to-void" />
    </div>
  );
}
