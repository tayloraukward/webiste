import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Project = {
  id: string;
  tab: string;
  title: string;
  subtitle: string;
  tags: string[];
  body: string[];
};

const PROJECTS: Project[] = [
  {
    id: "vehicle-ai",
    tab: "Vehicle AI",
    title: "Vehicle Valuation AI Platform",
    subtitle: "Full-stack agentic pricing with LangGraph + FastAPI",
    tags: ["LangGraph", "FastAPI", "Supabase", "SSE", "DigitalOcean"],
    body: [
      "Architected a full-stack agentic system that automates vehicle price discovery using LLM parsing, RAG retrieval, and deterministic valuation logic.",
      "Shipped real-time agent updates with Server-Sent Events and careful asyncio/thread management for a responsive UI.",
      "Built end-to-end auth with Supabase OAuth, token verification, and session handling.",
      "Deployed a containerized stack on DigitalOcean with CI/CD so changes ship safely and often.",
    ],
  },
  {
    id: "aws-intern",
    tab: "AWS intern",
    title: "Serverless purchase order workflow",
    subtitle: "AWS Marketplace · Agreements execution",
    tags: ["Lambda", "API Gateway", "CloudFormation"],
    body: [
      "Launched a serverless purchase order processing workflow on Lambda, API Gateway, and CloudFormation.",
      "Finished project goals four weeks early and rolled onto entitlements management work for the rest of the internship.",
    ],
  },
  {
    id: "uva-lax",
    tab: "UVA lacrosse",
    title: "Offensive analytics for UVA men’s lacrosse",
    subtitle: "Strategy + shot charting with the PLL",
    tags: ["Python", "Modeling", "Sports analytics"],
    body: [
      "Built performance models that turned raw game data into personnel and strategy insights for the coaching staff.",
      "Partnered with the Premier Lacrosse League to deploy a proprietary shot-charting system supporting UVA’s offensive game planning.",
    ],
  },
];

export function Projects() {
  const [active, setActive] = useState(PROJECTS[0]!.id);
  const current = PROJECTS.find((p) => p.id === active) ?? PROJECTS[0]!;

  return (
    <section id="projects" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Projects</h2>
        <p className="mt-3 max-w-2xl text-zinc-400">
          A few things I’ve shipped or led—spanning personal builds, AWS, and sports analytics.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-surface-elevated/60 p-1 shadow-xl shadow-black/30 backdrop-blur-sm sm:p-2">
          <div
            className="flex gap-1 overflow-x-auto rounded-xl bg-ink/80 p-1"
            role="tablist"
            aria-label="Project categories"
          >
            {PROJECTS.map((p) => {
              const selected = p.id === active;
              return (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(p.id)}
                  className={`relative shrink-0 rounded-lg px-4 py-2.5 text-sm font-medium transition focus-visible:focus-ring ${
                    selected ? "text-white" : "text-zinc-500 hover:text-zinc-200"
                  }`}
                >
                  {selected ? (
                    <motion.span
                      layoutId="tab-pill"
                      className="absolute inset-0 rounded-lg bg-white/10 shadow-inner shadow-white/5"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  ) : null}
                  <span className="relative z-10">{p.tab}</span>
                </button>
              );
            })}
          </div>

          <div className="relative min-h-[280px] px-4 py-8 sm:px-8 sm:py-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-soft">{current.subtitle}</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">{current.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {current.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 space-y-3 text-zinc-400">
                  {current.body.map((line) => (
                    <li key={line.slice(0, 40)} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      <span className="leading-relaxed">{line}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
