"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { ROLE_ROTATIONS, SITE } from "@/lib/data/site";
import { GrooveDivider } from "@/components/visual/groove-divider";
import { WaveAmbient } from "@/components/visual/wave-ambient";
import { cn } from "@/lib/utils/cn";

export function HeroSection() {
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setIdx((v) => (v + 1) % ROLE_ROTATIONS.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, [reduce]);

  const role = ROLE_ROTATIONS[idx] ?? ROLE_ROTATIONS[0];

  return (
    <section id="hero" className="relative scroll-mt-24 overflow-hidden border-b border-parchment/5">
      <WaveAmbient className="opacity-100" />

      <div className="relative mx-auto flex min-h-[78svh] max-w-6xl flex-col justify-center px-4 pb-24 pt-16 sm:px-6 sm:pt-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-mono text-[11px] font-medium uppercase tracking-[0.38em] text-silver-dim"
        >
          Listening room / Systems / Craft
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-display text-5xl font-medium leading-[0.98] tracking-tight text-parchment sm:text-7xl sm:leading-[0.96]"
        >
          {SITE.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-xl text-lg leading-relaxed text-parchment-dim sm:text-xl"
        >
          {SITE.title}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex min-h-[3.25rem] flex-wrap items-center gap-3 text-lg text-parchment-dim sm:text-xl"
        >
          <span className="text-silver-dim">I’m a</span>
          <span
            key={role}
            className={cn(
              "inline-flex items-center rounded-full border border-parchment/15 bg-brushed-h px-4 py-1.5 font-medium text-parchment shadow-inset",
              "transition duration-700 ease-out",
            )}
          >
            {role}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-parchment px-6 py-3 text-sm font-semibold text-void transition duration-300 ease-out hover:bg-parchment-dim focus-visible:focus-ring"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-parchment/20 bg-panel/60 px-6 py-3 text-sm font-semibold text-parchment transition duration-300 ease-out hover:border-parchment/35 hover:bg-lift focus-visible:focus-ring"
          >
            Contact me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-16 max-w-lg"
        >
          <GrooveDivider />
        </motion.div>
      </div>
    </section>
  );
}
