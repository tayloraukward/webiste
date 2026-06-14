"use client";

import { motion } from "framer-motion";

import { EXPERIENCE } from "@/lib/data/experience";
import { SectionHeading } from "@/components/sections/section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 bg-ink/90 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Work Experience"
        />

        <ol className="relative mt-14 space-y-10 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-gradient-to-b before:from-spotify/50 before:via-white/10 before:to-transparent before:content-[''] sm:before:left-[11px]">
          {EXPERIENCE.map((job, idx) => (
            <motion.li
              key={job.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: idx * 0.04 }}
              whileHover={{ x: 4 }}
              className="relative pl-10 sm:pl-14"
            >
              <span className="absolute left-0 top-2 grid h-4 w-4 place-items-center rounded-full border border-white/15 bg-void sm:left-1 sm:h-5 sm:w-5">
                <span className="h-2 w-2 rounded-full bg-spotify shadow-glow-spotify" />
              </span>

              <div className="glass rounded-2xl p-6 sm:p-7">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <p className="text-sm font-bold text-parchment">{job.company}</p>
                    <p className="text-sm text-silver-dim">{job.location}</p>
                  </div>
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-silver-dim">{job.range}</p>
                </div>

                <h3 className="mt-3 text-base font-semibold leading-snug text-parchment-dim">{job.title}</h3>

                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-parchment-dim">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-spotify shadow-[0_0_8px_rgba(29,185,84,0.6)]" aria-hidden />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
