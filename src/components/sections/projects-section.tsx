"use client";

import { motion } from "framer-motion";

import { PROJECTS } from "@/lib/data/projects";
import { SectionHeading } from "@/components/sections/section-heading";

export function ProjectsSection() {
  const project = PROJECTS[0];
  if (!project) return null;

  return (
    <section id="projects" className="scroll-mt-24 bg-ink/50 pb-24 pt-4 sm:pt-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Featured work"
          description="One shipped product I’m especially proud of — a place where I could own the architecture, the UX of complex flows, and the path to production."
        />

        <motion.article
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 overflow-hidden rounded-2xl border border-parchment/12 border-l-[3px] border-l-walnut bg-gradient-to-b from-lift to-panel shadow-lift"
        >
          <div className="border-b border-parchment/8 bg-panel/80 px-6 py-5 sm:px-10 sm:py-8">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-silver-dim">
              {project.category}
            </p>
            <h3 className="mt-3 font-display text-3xl font-medium tracking-tight text-parchment sm:text-4xl">{project.name}</h3>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-parchment-dim sm:text-lg">{project.description}</p>

            {project.details?.length ? (
              <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-parchment-dim sm:text-base">
                {project.details.map((d) => (
                  <li key={d} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber/70" aria-hidden />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-7 flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-parchment/10 bg-void/40 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-silver"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-parchment px-6 py-3 text-sm font-semibold text-void transition duration-300 ease-out hover:bg-parchment-dim focus-visible:focus-ring"
                >
                  Open live app
                </a>
              ) : null}
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-parchment underline-offset-4 transition duration-300 hover:text-amber hover:underline focus-visible:focus-ring rounded"
                >
                  GitHub
                </a>
              ) : null}
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
