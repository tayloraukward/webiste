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
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-24 animate-pulse rounded-2xl bg-white/5" />
        ))}
      </div>
    );
  }

  if (!data.configured || data.artists.length === 0) {
    return <p className="text-sm text-silver-dim">Top artists will appear once Spotify is connected.</p>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {data.artists.map((a, idx) => (
        <motion.a
          key={a.id}
          href={a.href}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: idx * 0.02 }}
          whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 24 } }}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-lift/90 to-panel p-4 shadow-card transition duration-500 hover:border-spotify/30 hover:shadow-glow"
        >
          <div className="flex items-center gap-4">
            <div className="relative h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden rounded-full bg-void shadow-inset ring-2 ring-white/10">
              {a.imageUrl ? (
                <Image src={a.imageUrl} alt="" fill sizes="72px" className="object-cover transition duration-500 group-hover:scale-105" />
              ) : (
                <div className="grid h-full w-full place-items-center font-mono text-[10px] text-silver-dim">Artist</div>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-parchment">{a.name}</p>
              <p className="truncate text-xs text-silver-dim">{a.genres.join(" · ") || "Artist"}</p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
            <div className="absolute inset-0 bg-gradient-to-tr from-wrap-pink/10 via-transparent to-spotify/10" />
          </div>
        </motion.a>
      ))}
    </div>
  );
}
