"use client";

import { motion } from "framer-motion";

import { SITE } from "@/lib/data/site";
import { GrooveDivider } from "@/components/visual/groove-divider";
import { WaveAmbient } from "@/components/visual/wave-ambient";

export function HeroSection() {
  return (
    <section id="hero" className="relative scroll-mt-24 overflow-hidden border-b border-parchment/5">
      <WaveAmbient className="opacity-100" />

      <div className="relative mx-auto flex min-h-[78svh] max-w-6xl flex-col justify-center px-4 pb-24 pt-16 sm:px-6 sm:pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl font-medium leading-[0.98] tracking-tight text-parchment sm:text-7xl sm:leading-[0.96]"
        >
          {SITE.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-2xl text-lg leading-relaxed text-parchment-dim sm:text-xl"
        >
          Software engineer focused on reliable distributed systems at AWS Marketplace. I care about clear ownership,
          safe migrations, and shipping product that teams can operate with confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-wrap gap-3"
        >
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-full bg-parchment px-6 py-3 text-sm font-semibold text-void transition duration-300 ease-out hover:bg-parchment-dim focus-visible:focus-ring"
          >
            Professional summary
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-parchment/20 bg-panel/60 px-6 py-3 text-sm font-semibold text-parchment transition duration-300 ease-out hover:border-parchment/35 hover:bg-lift focus-visible:focus-ring"
          >
            Contact
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.28 }}
          className="mt-16 max-w-lg"
        >
          <GrooveDivider />
        </motion.div>
      </div>
    </section>
  );
}
