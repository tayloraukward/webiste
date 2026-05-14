"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils/cn";

const LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#personal", label: "Listen" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const fn = () => setReduce(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-void/80 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <Link
          href="#hero"
          className="font-display text-sm font-bold tracking-tight text-parchment transition hover:text-spotify-bright sm:text-base"
        >
          Taylor Aukward
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
          {LINKS.map((l) => (
            <motion.a
              key={l.href}
              href={l.href}
              whileHover={{ y: -1 }}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-silver-dim transition duration-300 hover:bg-white/6 hover:text-parchment focus-visible:focus-ring"
            >
              {l.label}
            </motion.a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/12 bg-panel/80 p-2.5 text-parchment transition duration-300 hover:border-spotify/40 hover:bg-lift focus-visible:focus-ring md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <span className="relative block h-4 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-5 rounded-full bg-parchment transition-transform duration-300",
                open && "translate-y-1.5 rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-parchment transition-opacity duration-300",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-3 h-0.5 w-5 rounded-full bg-parchment transition-transform duration-300",
                open && "-translate-y-1.5 -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { height: 0, opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-white/8 bg-void/98 md:hidden"
          >
            <nav className="mx-auto flex max-w-6xl flex-col gap-0.5 px-4 py-3 sm:px-6" aria-label="Mobile primary">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-parchment-dim transition duration-300 hover:bg-white/6 hover:text-parchment focus-visible:focus-ring"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
