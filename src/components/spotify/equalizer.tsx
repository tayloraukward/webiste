"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Equalizer({ active }: { active: boolean }) {
  const reduce = useReducedMotion();
  const bars = [0, 1, 2, 3, 4];

  if (!active || reduce) {
    return (
      <div className="flex h-8 items-end gap-1.5 opacity-50" aria-hidden>
        {bars.map((i) => (
          <span key={i} className="w-1 rounded-sm bg-parchment/25" style={{ height: 6 + i * 2 }} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex h-8 items-end gap-1.5" aria-hidden>
      {bars.map((i) => (
        <motion.span
          key={i}
          className="w-1 origin-bottom rounded-sm bg-gradient-to-t from-amber-soft/40 to-parchment/90"
          animate={{ scaleY: [0.38, 1, 0.42, 0.9, 0.38] }}
          transition={{ duration: 1.05 + i * 0.06, repeat: Infinity, ease: [0.45, 0, 0.55, 1], delay: i * 0.09 }}
          style={{ height: 22 }}
        />
      ))}
    </div>
  );
}
