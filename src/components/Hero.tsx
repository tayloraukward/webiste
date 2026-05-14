import { motion } from "framer-motion";
import { SITE_LINKS } from "../config/links";

const BIO =
  "I'm a backend engineer at AWS Marketplace, where I design distributed systems that millions of subscriptions depend on. I like hard problems, fast feedback loops, and shipping things that make operators' lives calmer.";

export function Hero() {
  return (
    <section className="relative mx-auto max-w-5xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime/60 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
        </span>
        Austin, TX · AWS Marketplace
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl"
      >
        Building reliable systems{" "}
        <span className="bg-gradient-to-r from-accent-soft via-white to-coral bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
          at serious scale
        </span>
        .
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.12 }}
        className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400"
      >
        {BIO}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.2 }}
        className="mt-10 flex flex-wrap gap-3"
      >
        <a
          href="#projects"
          className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-zinc-200 focus-visible:focus-ring"
        >
          See projects
        </a>
        <a
          href={`mailto:${SITE_LINKS.email}`}
          className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/10 focus-visible:focus-ring"
        >
          Say hello
        </a>
      </motion.div>
    </section>
  );
}
