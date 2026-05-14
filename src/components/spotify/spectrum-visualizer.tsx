"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

export function SpectrumVisualizer() {
  const reduce = useReducedMotion();
  const bars = useMemo(() => Array.from({ length: 48 }, (_, i) => i), []);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-parchment/10 bg-panel/70 p-4 shadow-inset">
      <div className="absolute inset-0 bg-vinyl-groove opacity-[0.04]" />
      <div className="relative flex h-14 items-end justify-between gap-[2px] opacity-80">
        {bars.map((i) => {
          const base = 12 + (i * 11) % 52;
          return (
            <motion.span
              key={i}
              className="w-[2px] rounded-full bg-gradient-to-t from-transparent via-parchment/20 to-amber/35"
              style={{ height: `${base}%`, transformOrigin: "50% 100%" }}
              animate={reduce ? { scaleY: 1 } : { scaleY: [0.28, 0.95, 0.35, 0.88, 0.28] }}
              transition={{
                duration: 2.8 + (i % 6) * 0.1,
                repeat: Infinity,
                ease: [0.45, 0, 0.55, 1],
                delay: (i % 12) * 0.04,
              }}
            />
          );
        })}
      </div>
      <p className="relative mt-3 text-center font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-silver-dim">
        Room ambience · non-audio
      </p>
    </div>
  );
}
