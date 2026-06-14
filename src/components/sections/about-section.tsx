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
    <section id="about" className="scroll-mt-24 border-t border-white/8 bg-ink/80 py-24 backdrop-blur-sm">
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
            description="Backend software engineer with 2 years at AWS designing and building distributed systems that power millions of AWS Marketplace subscriptions and purchase agreements. Experience in workflow orchestration, infrastructure design, and large-scale automation across cloud-native architectures."
          />
          <div className="mt-10 max-w-xl">
            <GrooveDivider />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
