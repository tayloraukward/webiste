"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import type { TopArtistsPayload } from "@/lib/spotify/types";

export function TopArtistsGrid({ timeRange }: { timeRange: "short_term" | "medium_term" | "long_term" }) {
  const [data, setData] = useState<TopArtistsPayload | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      const res = await fetch(`/api/spotify/top-artists?time_range=${timeRange}`, { cache: "no-store" });
      const json = (await res.json()) as TopArtistsPayload;
      if (!cancelled) setData(json);
    }
    void run();
    return () => {
      cancelled = true;
    };
  }, [timeRange]);

  if (!data) {
    return (
      <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-3 pt-1 [scrollbar-width:thin] sm:-mx-6 sm:gap-5 sm:px-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-24 w-[176px] shrink-0 animate-pulse rounded-2xl bg-white/5" />
        ))}
      </div>
    );
  }

  if (!data.configured || data.artists.length === 0) {
    return <p className="text-sm text-silver-dim">Top artists will appear once Spotify is connected.</p>;
  }

  return (
    <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-3 pt-1 [scrollbar-width:thin] sm:-mx-6 sm:gap-5 sm:px-6">
      {data.artists.map((a, idx) => (
        <motion.a
          key={a.id}
          href={a.href}
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
            {a.imageUrl ? (
              <Image
                src={a.imageUrl}
                alt=""
                fill
                sizes="176px"
                className="object-cover transition duration-700 ease-out group-hover:scale-105"
              />
            ) : (
              <div className="grid h-full w-full place-items-center font-mono text-[10px] text-silver-dim">Artist</div>
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
          </div>
          <div className="p-3.5">
            <p className="line-clamp-2 text-sm font-semibold text-parchment">{a.name}</p>
            <p className="mt-1 line-clamp-1 text-xs text-silver-dim">{a.genres.join(" · ") || "Artist"}</p>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
