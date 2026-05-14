"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

import { cn } from "@/lib/utils/cn";

type WaveAmbientProps = {
  className?: string;
};

/** Ambient waveform motif — low-contrast, warm studio haze. */
export function WaveAmbient({ className }: WaveAmbientProps) {
  const reduce = useReducedMotion();
  const bars = useMemo(() => Array.from({ length: 52 }, (_, i) => i), []);

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <div className="absolute inset-0 bg-warm-haze opacity-90" />
      <div className="absolute inset-0 bg-noise-soft opacity-70 mix-blend-overlay" />

      <div className="absolute inset-x-0 bottom-0 flex h-[40%] items-end justify-center gap-[3px] opacity-[0.22] sm:h-[46%]">
        {bars.map((i) => {
          const h = 14 + ((i * 19) % 48);
          const delay = reduce ? 0 : (i % 12) * 0.07;
          return (
            <motion.span
              key={i}
              className="w-[2px] rounded-full bg-gradient-to-t from-transparent via-parchment/25 to-parchment/45"
              style={{ height: `${h}%`, transformOrigin: "50% 100%" }}
              animate={reduce ? { scaleY: 1 } : { scaleY: [0.32, 0.95, 0.4, 0.88, 0.32] }}
              transition={{
                duration: 3.8 + (i % 5) * 0.22,
                repeat: Infinity,
                ease: [0.45, 0, 0.55, 1],
                delay,
              }}
            />
          );
        })}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-void/30 via-transparent to-void" />
    </div>
  );
}
