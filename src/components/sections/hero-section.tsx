"use client";

import { motion } from "framer-motion";

import { SITE } from "@/lib/data/site";
import { GrooveDivider } from "@/components/visual/groove-divider";
import { WaveAmbient } from "@/components/visual/wave-ambient";

export function HeroSection() {
  return (
    <section id="hero" className="relative scroll-mt-24 overflow-hidden border-b border-white/8">
      <WaveAmbient className="opacity-100" />

      <div className="relative mx-auto flex min-h-[82svh] max-w-6xl flex-col justify-center px-4 pb-28 pt-20 sm:px-6 sm:pt-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="font-mono text-xs font-bold uppercase tracking-[0.38em] text-spotify-bright"
        >
          Software · Systems · Sound
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-parchment sm:text-7xl sm:leading-[0.96] lg:text-8xl"
        >
          {SITE.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-parchment-dim sm:text-xl"
        >
          I build reliable distributed systems at AWS Marketplace — and I sweat the details that make product feel
          inevitable: motion, hierarchy, and interfaces you actually want to live in (including the music ones).
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-wrap gap-3"
        >
          <motion.a
            href="#personal"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center rounded-full bg-spotify px-7 py-3.5 text-sm font-bold text-void shadow-glow-spotify transition-colors duration-300 hover:bg-spotify-bright focus-visible:focus-ring"
          >
            Open live Spotify hub
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-parchment backdrop-blur-sm transition duration-300 hover:border-spotify/35 hover:bg-white/10 focus-visible:focus-ring"
          >
            Professional summary
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.28 }}
          className="mt-20 max-w-lg"
        >
          <GrooveDivider />
        </motion.div>
      </div>
    </section>
  );
}
