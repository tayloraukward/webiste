"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

export function SpectrumVisualizer() {
  const reduce = useReducedMotion();
  const bars = useMemo(() => Array.from({ length: 52 }, (_, i) => i), []);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-lift/80 p-4 shadow-inset-deep backdrop-blur-md">
      <div className="absolute inset-0 bg-vinyl-groove opacity-[0.05]" />
      <div className="pointer-events-none absolute -right-16 -top-20 h-40 w-40 rounded-full bg-spotify/15 blur-3xl" />
      <div className="relative flex h-16 items-end justify-between gap-[2px] opacity-90">
        {bars.map((i) => {
          const base = 14 + (i * 11) % 54;
          return (
            <motion.span
              key={i}
              className="w-[2px] rounded-full bg-gradient-to-t from-transparent via-white/15 to-spotify/50"
              style={{ height: `${base}%`, transformOrigin: "50% 100%" }}
              animate={reduce ? { scaleY: 1 } : { scaleY: [0.26, 0.96, 0.32, 0.88, 0.26] }}
              transition={{
                duration: 2.6 + (i % 6) * 0.12,
                repeat: Infinity,
                ease: [0.45, 0, 0.55, 1],
                delay: (i % 12) * 0.04,
              }}
            />
          );
        })}
      </div>
      <p className="relative mt-3 text-center font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-silver-dim">
        Waveform · decorative
      </p>
    </div>
  );
}
