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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <motion.a
            href={`mailto:${SITE.email}`}
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-3 text-parchment backdrop-blur-sm transition duration-300 hover:border-spotify/35 hover:bg-white/10 hover:text-spotify-bright focus-visible:focus-ring"
            aria-label="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </motion.a>
          <motion.a
            href={SITE.linkedin}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-3 text-parchment backdrop-blur-sm transition duration-300 hover:border-spotify/35 hover:bg-white/10 hover:text-spotify-bright focus-visible:focus-ring"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </motion.a>
          <motion.a
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-3 text-parchment backdrop-blur-sm transition duration-300 hover:border-spotify/35 hover:bg-white/10 hover:text-spotify-bright focus-visible:focus-ring"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </motion.a>
          <motion.a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-3 text-parchment backdrop-blur-sm transition duration-300 hover:border-spotify/35 hover:bg-white/10 hover:text-spotify-bright focus-visible:focus-ring"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
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
