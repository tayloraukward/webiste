"use client";

import { motion } from "framer-motion";

import { PROJECTS } from "@/lib/data/projects";
import { SectionHeading } from "@/components/sections/section-heading";

export function ProjectsSection() {
  const project = PROJECTS[0];
  if (!project) return null;

  return (
    <section id="projects" className="relative scroll-mt-24 border-t border-white/8 bg-gradient-to-b from-ink via-graphite/50 to-void pb-28 pt-12 sm:pt-16">
      <div className="pointer-events-none absolute inset-x-0 top-[40%] h-px max-w-6xl mx-auto bg-gradient-to-r from-transparent via-spotify/20 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Shipped like a release"
          description="Side-channel work with the same craft as a flagship drop — narrative, depth, and a URL you can try."
        />

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -6 }}
          className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-lift/90 via-panel to-void shadow-lift ring-1 ring-white/5"
        >
          <div className="grid gap-0 lg:grid-cols-[minmax(0,400px)_1fr]">
            <div className="relative min-h-[14rem] overflow-hidden bg-gradient-to-br from-spotify/25 via-wrap-violet/20 to-void lg:min-h-full">
              <div className="absolute inset-0 bg-vinyl-groove opacity-[0.08]" />
              <div className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-spotify/30 blur-3xl" />
              <div className="absolute bottom-8 left-8 right-8 top-auto lg:bottom-auto lg:left-8 lg:right-8 lg:top-1/2 lg:-translate-y-1/2">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.32em] text-parchment/80">Featured build</p>
                <p className="mt-3 font-display text-3xl font-extrabold leading-tight text-parchment sm:text-4xl">{project.name}</p>
                <p className="mt-2 text-sm font-medium text-parchment/70">{project.stack.slice(0, 3).join(" · ")}</p>
              </div>
            </div>

            <div className="border-t border-white/8 bg-panel/40 p-6 backdrop-blur-md sm:p-10 lg:border-l lg:border-t-0">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-spotify-bright">{project.category}</p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-parchment-dim sm:text-lg">{project.description}</p>

              {project.details?.length ? (
                <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-parchment-dim sm:text-base">
                  {project.details.map((d) => (
                    <li key={d} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-spotify shadow-[0_0_8px_rgba(29,185,84,0.5)]" aria-hidden />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-7 flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-void/50 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-silver"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                {project.liveUrl ? (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center rounded-full bg-spotify px-7 py-3 text-sm font-bold text-void shadow-glow-spotify transition-all duration-300 hover:bg-spotify-bright active:scale-100 focus-visible:focus-ring"
                  >
                    Open live app
                  </motion.a>
                ) : null}
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-parchment underline-offset-4 transition-all duration-200 hover:text-spotify-bright hover:underline hover:translate-x-1 focus-visible:focus-ring rounded"
                  >
                    GitHub
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
