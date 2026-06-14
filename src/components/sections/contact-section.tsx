"use client";

import { motion } from "framer-motion";

import { SITE } from "@/lib/data/site";
import { GrooveDivider } from "@/components/visual/groove-divider";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-white/8 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="glass-spotify relative overflow-hidden rounded-3xl p-10 sm:p-12">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-spotify/15 blur-3xl" />
            <div className="absolute -right-28 bottom-0 h-72 w-72 rounded-full bg-wrap-violet/20 blur-3xl" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.42em] text-spotify-bright sm:text-[13px]">
                Contact
              </p>
              <h2 className="mt-5 font-display text-5xl font-bold leading-[1.02] tracking-tight text-parchment sm:text-6xl">
                Get in touch
              </h2>

      
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-3"
            >
              <motion.a
                href={`mailto:${SITE.email}`}
                whileHover={{ scale: 1.02, x: 2 }}
                className="rounded-2xl border border-white/12 bg-void/60 px-5 py-4 text-sm font-bold text-parchment transition hover:border-spotify/40 hover:bg-lift focus-visible:focus-ring"
              >
                {SITE.email}
              </motion.a>
              <motion.a
                href={SITE.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02, x: 2 }}
                className="rounded-2xl border border-white/12 bg-void/60 px-5 py-4 text-sm font-bold text-parchment transition hover:border-spotify/40 hover:bg-lift focus-visible:focus-ring"
              >
                GitHub
              </motion.a>
              <motion.a
                href={SITE.linkedin}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02, x: 2 }}
                className="rounded-2xl border border-white/12 bg-void/60 px-5 py-4 text-sm font-bold text-parchment transition hover:border-spotify/40 hover:bg-lift focus-visible:focus-ring"
              >
                LinkedIn
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
