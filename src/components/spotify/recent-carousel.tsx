"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import type { RecentPayload } from "@/lib/spotify/types";

export function RecentCarousel() {
  const [data, setData] = useState<RecentPayload | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      const res = await fetch("/api/spotify/recent", { cache: "no-store" });
      const json = (await res.json()) as RecentPayload;
      if (!cancelled) setData(json);
    }
    void run();
    const id = window.setInterval(() => void run(), 120_000);
    return () => {
      cancelled = true;
      window.clearInterval(id);
    };
  }, []);

  if (!data) {
    return <div className="h-40 animate-pulse rounded-2xl bg-white/5" />;
  }

  if (!data.configured || data.items.length === 0) {
    return <p className="text-sm text-silver-dim">Recently played will appear once Spotify is connected.</p>;
  }

  return (
    <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-3 pt-1 [scrollbar-width:thin] sm:-mx-6 sm:gap-5 sm:px-6">
      {data.items.map((row, idx) => (
        <motion.a
          key={`${row.track.id}-${row.playedAt}`}
          href={row.track.href}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: Math.min(idx, 8) * 0.03 }}
          whileHover={{ y: -6, transition: { type: "spring", stiffness: 420, damping: 22 } }}
          className="group relative w-[176px] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-lift to-panel shadow-card transition duration-500 hover:border-spotify/35 hover:shadow-glow-spotify"
        >
          <div className="relative aspect-square w-full overflow-hidden border-b border-white/5 bg-void">
            {row.track.albumArtUrl ? (
              <Image
                src={row.track.albumArtUrl}
                alt=""
                fill
                sizes="176px"
                className="object-cover transition duration-700 ease-out group-hover:scale-105"
              />
            ) : null}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
          </div>
          <div className="p-3.5">
            <p className="line-clamp-2 text-sm font-semibold text-parchment">{row.track.name}</p>
            <p className="mt-1 line-clamp-1 text-xs text-silver-dim">{row.track.artists.join(", ")}</p>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
