"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Equalizer({ active }: { active: boolean }) {
  const reduce = useReducedMotion();
  const bars = [0, 1, 2, 3, 4];

  if (!active || reduce) {
    return (
      <div className="flex h-9 items-end gap-1.5 opacity-45" aria-hidden>
        {bars.map((i) => (
          <span key={i} className="w-1 rounded-sm bg-white/20" style={{ height: 6 + i * 2 }} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex h-9 items-end gap-1.5" aria-hidden>
      {bars.map((i) => (
        <motion.span
          key={i}
          className="w-1.5 origin-bottom rounded-sm bg-gradient-to-t from-spotify-dim/80 via-spotify to-spotify-bright shadow-[0_0_12px_rgba(29,185,84,0.45)]"
          animate={{ scaleY: [0.38, 1, 0.42, 0.92, 0.38] }}
          transition={{ duration: 1.05 + i * 0.06, repeat: Infinity, ease: [0.45, 0, 0.55, 1], delay: i * 0.09 }}
          style={{ height: 24 }}
        />
      ))}
    </div>
  );
}
