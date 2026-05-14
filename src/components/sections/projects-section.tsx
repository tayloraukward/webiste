"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

import { PROJECT_FILTERS, PROJECTS, type Project, type ProjectCategory } from "@/lib/data/projects";
import { cn } from "@/lib/utils/cn";

function ProjectTile({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-parchment/10 border-l-[3px] border-l-walnut bg-gradient-to-b from-lift to-panel shadow-lift transition duration-500 ease-out hover:-translate-y-0.5 hover:border-parchment/18 hover:shadow-glow"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-amber/10 blur-3xl" />
      </div>

      {/* Sleeve “face” — record-adjacent tile */}
      <div className="relative aspect-square bg-gradient-to-br from-graphite via-panel to-void">
        <div className="absolute inset-0 bg-vinyl-groove opacity-[0.06]" />
        <div className="absolute inset-0 bg-brushed-h opacity-40" />
        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between border-t border-parchment/10 pt-4">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.32em] text-silver-dim">{project.category}</p>
          <span className="font-mono text-[10px] text-silver-dim/80" aria-hidden>
            LP
          </span>
        </div>
      </div>

      <div className="relative border-t border-parchment/5 bg-panel/90 p-6 sm:p-7">
        <h3 className="font-display text-2xl font-medium tracking-tight text-parchment">{project.name}</h3>

        <p className="mt-3 text-sm leading-relaxed text-parchment-dim">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-parchment/10 bg-void/40 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-silver"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
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
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-silver underline-offset-4 transition duration-300 hover:text-parchment hover:underline focus-visible:focus-ring rounded"
            >
              Live
            </a>
          ) : null}
          {!project.githubUrl && !project.liveUrl ? (
            <span className="text-sm text-silver-dim">Links available on request</span>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  const [category, setCategory] = useState<"all" | ProjectCategory>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS.filter((p) => {
      const catOk = category === "all" || p.category === category;
      if (!q) return catOk;
      const blob = `${p.name} ${p.description} ${p.stack.join(" ")}`.toLowerCase();
      return catOk && blob.includes(q);
    });
  }, [category, query]);

  return (
    <section id="projects" className="scroll-mt-24 border-t border-parchment/5 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.38em] text-silver-dim">Projects</p>
        <div className="mt-3 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-4xl font-medium tracking-tight text-parchment sm:text-5xl">Catalog</h2>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-parchment-dim">
              Sleeve-style tiles — engineered work, presented like a curated collection.
            </p>
          </div>

          <label className="block w-full sm:max-w-xs">
            <span className="sr-only">Search projects</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search name, stack, description…"
              className="w-full rounded-xl border border-parchment/12 bg-panel/80 px-4 py-3 font-mono text-sm text-parchment placeholder:text-silver-dim outline-none transition duration-300 focus:border-parchment/25 focus:bg-lift focus-visible:focus-ring"
            />
          </label>
        </div>

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Project filters">
          {PROJECT_FILTERS.map((f) => {
            const active = category === f.id;
            return (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setCategory(f.id)}
                className={cn(
                  "relative overflow-hidden rounded-full border px-4 py-2 text-sm font-medium transition duration-300 ease-out focus-visible:focus-ring",
                  active
                    ? "border-parchment/20 bg-lift text-parchment"
                    : "border-parchment/10 bg-transparent text-silver hover:border-parchment/18 hover:bg-panel hover:text-parchment",
                )}
              >
                {active ? (
                  <motion.span
                    layoutId="proj-filter"
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-amber/12 via-parchment/5 to-transparent"
                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  />
                ) : null}
                <span className="relative">{f.label}</span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <ProjectTile key={p.slug} project={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 ? (
          <p className="mt-10 text-center text-sm text-silver-dim">No projects match that filter.</p>
        ) : null}
      </div>
    </section>
  );
}
