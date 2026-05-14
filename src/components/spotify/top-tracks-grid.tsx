"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import type { TopTracksPayload } from "@/lib/spotify/types";

export function TopTracksGrid({ timeRange }: { timeRange: "short_term" | "medium_term" | "long_term" }) {
  const [data, setData] = useState<TopTracksPayload | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      const res = await fetch(`/api/spotify/top-tracks?time_range=${timeRange}`, { cache: "no-store" });
      const json = (await res.json()) as TopTracksPayload;
      if (!cancelled) setData(json);
    }
    void run();
    return () => {
      cancelled = true;
    };
  }, [timeRange]);

  if (!data) {
    return (
      <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-3 pt-1 [scrollbar-width:thin] sm:-mx-6 sm:gap-5 sm:px-6" aria-live="polite" aria-busy="true">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="relative h-40 w-[176px] shrink-0 overflow-hidden rounded-2xl bg-white/5">
            <div className="h-full w-full animate-pulse bg-white/5" />
            <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        ))}
      </div>
    );
  }

  if (!data.configured || data.tracks.length === 0) {
    return <p className="text-sm text-silver-dim">Top tracks will appear once Spotify is connected.</p>;
  }

  return (
    <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-3 pt-1 [scrollbar-width:thin] sm:-mx-6 sm:gap-5 sm:px-6">
      {data.tracks.map((t, idx) => (
        <motion.a
          key={t.id}
          href={t.href}
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
            {t.albumArtUrl ? (
              <Image
                src={t.albumArtUrl}
                alt=""
                fill
                sizes="176px"
                className="object-cover transition duration-700 ease-out group-hover:scale-105"
              />
            ) : null}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
          </div>
          <div className="p-3.5">
            <p className="line-clamp-2 text-sm font-semibold text-parchment">{t.name}</p>
            <p className="mt-1 line-clamp-1 text-xs text-silver-dim">{t.artists.join(", ")}</p>
            <p className="mt-1 truncate font-mono text-[10px] text-silver-dim">{t.album}</p>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
