import { motion } from "framer-motion";
import { ABOUT_PHOTOS } from "../config/photos";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.45 },
  }),
};

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-white/5 bg-surface/40 py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          custom={0}
          className="font-display text-3xl font-bold text-white sm:text-4xl"
        >
          About me
        </motion.h2>
        <p className="mt-3 max-w-2xl text-zinc-400">
          A snapshot of how I spend my days—and what I do when I step away from the keyboard.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <motion.article
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fade}
              custom={1}
              className="rounded-2xl border border-white/10 bg-surface-elevated/80 p-6 shadow-lg shadow-black/20"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-soft">
                Professionally
              </h3>
              <p className="mt-3 leading-relaxed text-zinc-300">
                I work on AWS Marketplace’s core platform—workflow orchestration, infrastructure, and automation
                across cloud-native services. Recently I was promoted to SDE II after about fifteen months, driven by
                shipping high-complexity distributed systems: re-architecting core execution for 20× throughput,
                leading automated version upgrades across millions of records, and cutting provisioning latency by
                over a third. I care about safe migrations, sharp observability, and teams that can move fast without
                breaking production.
              </p>
            </motion.article>

            <motion.article
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fade}
              custom={2}
              className="rounded-2xl border border-white/10 bg-surface-elevated/80 p-6 shadow-lg shadow-black/20"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-coral">For fun</h3>
              <p className="mt-3 leading-relaxed text-zinc-300">
                Outside of work you’ll usually find me with a guitar in my hands, something low-and-slow on the
                smoker, or chasing a new PR in the gym. I love pickup basketball and tennis, live music whenever I can
                get tickets, and the kind of weekends that mix all of the above.
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
            <p className="col-span-2 text-sm text-zinc-500">
              Wire images in <code className="text-zinc-400">src/config/photos.ts</code> (files live in{" "}
              <code className="text-zinc-400">public/photos/</code>).
            </p>
            {ABOUT_PHOTOS.map((slot, i) => {
              const wide = slot.wide;
              return (
                <div
                  key={slot.alt}
                  className={`overflow-hidden rounded-2xl border border-dashed border-white/15 bg-white/[0.03] ${
                    wide
                      ? "col-span-2 aspect-[2/1] sm:col-span-1 sm:row-span-2 sm:aspect-square"
                      : "aspect-square"
                  }`}
                >
                  {slot.src ? (
                    <img src={slot.src} alt={slot.alt} className="h-full w-full object-cover" loading="lazy" />
                  ) : (
                    <div className="flex h-full min-h-[8rem] flex-col items-center justify-center p-3 text-center text-xs text-zinc-500">
                      <span className="font-medium text-zinc-400">Slot {i + 1}</span>
                      <span className="mt-1 text-zinc-600">{slot.alt}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
