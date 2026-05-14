"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { ABOUT_PHOTOS } from "@/lib/data/photos";
import { GrooveDivider } from "@/components/visual/groove-divider";
import { MusicSection } from "@/components/sections/music-section";
import { SectionHeading } from "@/components/sections/section-heading";

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function PersonalSection() {
  return (
    <section id="personal" className="scroll-mt-24 border-t border-parchment/5 bg-graphite/35 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          custom={0}
        >
          <SectionHeading
            eyebrow="Personal"
            title="Outside of work"
            description="A few things that keep me grounded when I’m away from the keyboard — including what I’ve been listening to lately."
          />
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <motion.article
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fade}
            custom={1}
            className="glass rounded-2xl p-7"
          >
            <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-silver">About me</h3>
            <p className="mt-4 leading-relaxed text-parchment-dim">
              I play guitar, cook low-and-slow barbecue when I have a full afternoon free, and stay active with pickup
              basketball, tennis, and strength training. I also love catching live shows — there’s nothing quite like a
              room where the sound hits you in the chest.
            </p>
            <div className="mt-8 max-w-md">
              <GrooveDivider />
            </div>
          </motion.article>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fade}
            custom={2}
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

        <MusicSection embedded />
      </div>
    </section>
  );
}
