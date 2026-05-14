"use client";

import { motion } from "framer-motion";

import { GrooveDivider } from "@/components/visual/groove-divider";
import { SectionHeading } from "@/components/sections/section-heading";

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-parchment/5 bg-ink/50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          custom={0}
        >
          <SectionHeading
            eyebrow="Overview"
            title="Professional summary"
            description="I work on AWS Marketplace’s core platform — orchestration, infrastructure, and automation across cloud-native services. Recent work spans high-throughput execution, automated upgrades across millions of records, and meaningful latency reduction on provisioning paths. I care about safe migrations, observability you can trust, and teams that can ship without fear."
          />
          <div className="mt-10 max-w-xl">
            <GrooveDivider />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
