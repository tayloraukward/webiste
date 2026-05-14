"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { ABOUT_PHOTOS } from "@/lib/data/photos";
import { GrooveDivider } from "@/components/visual/groove-divider";

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
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fade} custom={0}>
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.38em] text-silver-dim">About</p>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-tight text-parchment sm:text-5xl">Liner notes</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-parchment-dim">
            Two channels: serious systems work, and a life outside the terminal that stays tactile and analog-leaning.
          </p>
          <div className="mt-8 max-w-xl">
            <GrooveDivider />
          </div>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-6">
            <motion.article
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fade}
              custom={1}
              className="glass rounded-2xl p-7"
            >
              <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-amber">Professionally</h3>
              <p className="mt-4 leading-relaxed text-parchment-dim">
                I work on AWS Marketplace’s core platform — orchestration, infrastructure, and automation across
                cloud-native services. Recent work spans high-throughput execution, automated upgrades across millions
                of records, and meaningful latency reduction on provisioning paths. I care about safe migrations,
                observability you can trust, and teams that can ship without fear.
              </p>
            </motion.article>

            <motion.article
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fade}
              custom={2}
              className="glass rounded-2xl p-7"
            >
              <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-silver">Personally</h3>
              <p className="mt-4 leading-relaxed text-parchment-dim">
                Guitar is my favorite debugger for the soul. I love low-and-slow barbecue, chasing strength goals in the
                gym, pickup basketball and tennis, and live rooms where the PA hits you in the chest.
              </p>
            </motion.article>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fade}
            custom={3}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            <p className="col-span-2 text-sm text-silver-dim">
              Photo slots — wire in <span className="font-mono text-silver">src/lib/data/photos.ts</span>.
            </p>
            {ABOUT_PHOTOS.map((slot, i) => (
              <div
                key={slot.alt}
                className={`overflow-hidden rounded-2xl border border-parchment/10 bg-panel/60 ${
                  slot.wide ? "col-span-2 aspect-[2/1] sm:col-span-1 sm:row-span-2 sm:aspect-square" : "aspect-square"
                }`}
              >
                {slot.src ? (
                  <div className="relative h-full min-h-[9rem]">
                    <Image src={slot.src} alt={slot.alt} fill sizes="(min-width: 1024px) 400px, 50vw" className="object-cover" />
                  </div>
                ) : (
                  <div className="flex h-full min-h-[9rem] flex-col items-center justify-center p-4 text-center text-xs text-silver-dim">
                    <span className="font-medium text-silver">Slot {i + 1}</span>
                    <span className="mt-2 text-silver-dim">{slot.alt}</span>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
