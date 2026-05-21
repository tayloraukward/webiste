"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { useSpotifyPlayer } from "@/hooks/use-spotify-player";
import { ABOUT_PHOTOS } from "@/lib/data/photos";
import { GrooveDivider } from "@/components/visual/groove-divider";
import { SpotifyListenExperience } from "@/components/spotify/spotify-listen-experience";
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
  const { data, loading, error } = useSpotifyPlayer(12_000);

  return (
    <section
      id="personal"
      className="relative scroll-mt-24 border-t border-white/8 bg-gradient-to-b from-graphite/90 via-ink/95 to-void py-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-spotify/40 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-[min(70vw,520px)] w-[min(70vw,520px)] -translate-x-1/2 rounded-full bg-spotify/10 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(29,185,84,0.08)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={fade}
          custom={0}
          className="mb-10 max-w-2xl"
        >
          {/* <p className="font-mono text-xs font-bold uppercase tracking-[0.38em] text-spotify-bright">Featured experience</p> */}
          {/* <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-parchment sm:text-5xl">
            Live listening, engineered for the web
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-parchment-dim">
            A Spotify-quality surface on top of your own APIs — proof that I care as much about interface polish and
            motion as I do about infrastructure.
          </p> */}
        </motion.div>

        <SpotifyListenExperience data={data} loading={loading} error={error} variant="spotlight" />

        <div className="mt-24">
          <SectionHeading
            eyebrow="Personal"
            title="Things I Enjoy"
          />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <motion.article
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fade}
            custom={1}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="glass rounded-3xl p-7 sm:p-8"
          >
            <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-spotify-bright">About me</h3>
            <p className="mt-4 text-base leading-relaxed text-parchment-dim sm:text-lg">
              24 years old currently living in Austin, TX. In my free time, I enjoy cooking, fishing, and staying active. 
              Living in TX has allowed me to perfect my central Texas style BBQ on the offset smoker. 
              You can often find me in the gym, on a run, or playing pickup basketball (ask me about my mid-range jumper).
              I have a passion for music which started when I first picked up the guitar in middle school. Over the years this has grown into an appreciation for live music and jamming with friends. 
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

            {ABOUT_PHOTOS.map((slot, i) => (
              <motion.div
                key={slot.alt}
                whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 22 } }}
                className={`overflow-hidden rounded-2xl border border-white/10 bg-panel/60 shadow-card ${
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
