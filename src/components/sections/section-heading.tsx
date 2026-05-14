"use client";

import { motion, useReducedMotion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  const reduce = useReducedMotion();

  return (
    <motion.header
      initial={reduce ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-white/10 pb-10 sm:pb-12"
    >
      <p className="font-mono text-xs font-bold uppercase tracking-[0.42em] text-spotify-bright sm:text-[13px]">{eyebrow}</p>
      <h2 className="mt-5 font-display text-5xl font-bold leading-[1.02] tracking-tight text-parchment sm:text-6xl lg:text-7xl lg:leading-[1.03]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-lg leading-[1.6] text-parchment-dim sm:text-xl">{description}</p>
      ) : null}
    </motion.header>
  );
}
