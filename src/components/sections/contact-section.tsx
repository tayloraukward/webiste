"use client";

import { motion } from "framer-motion";

import { SITE } from "@/lib/data/site";
import { GrooveDivider } from "@/components/visual/groove-divider";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-parchment/5 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="glass relative overflow-hidden rounded-[1.75rem] p-10 sm:p-12">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-amber/10 blur-3xl" />
            <div className="absolute -right-28 bottom-0 h-72 w-72 rounded-full bg-parchment/5 blur-3xl" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.38em] text-silver-dim">Contact</p>
              <h2 className="mt-3 font-display text-4xl font-medium tracking-tight text-parchment sm:text-5xl">Drop a line</h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-parchment-dim">
                If you’re building something ambitious — infra, product systems, or a ridiculous side project — I’d love
                to hear it.
              </p>
              <div className="mt-8 max-w-md">
                <GrooveDivider />
              </div>
              <p className="mt-8 font-display text-lg italic leading-relaxed text-silver">
                “Good engineers reduce noise. Great ones preserve the warmth.”
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-3"
            >
              <a
                href={`mailto:${SITE.email}`}
                className="rounded-xl border border-parchment/12 bg-void/50 px-5 py-4 text-sm font-semibold text-parchment transition duration-300 hover:border-parchment/25 hover:bg-panel focus-visible:focus-ring"
              >
                {SITE.email}
              </a>
              <a
                href={SITE.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-parchment/12 bg-void/50 px-5 py-4 text-sm font-semibold text-parchment transition duration-300 hover:border-parchment/25 hover:bg-panel focus-visible:focus-ring"
              >
                GitHub
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-parchment/12 bg-void/50 px-5 py-4 text-sm font-semibold text-parchment transition duration-300 hover:border-parchment/25 hover:bg-panel focus-visible:focus-ring"
              >
                LinkedIn
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
