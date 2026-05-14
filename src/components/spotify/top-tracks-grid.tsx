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
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-28 animate-pulse rounded-xl bg-parchment/5" />
        ))}
      </div>
    );
  }

  if (!data.configured || data.tracks.length === 0) {
    return <p className="text-sm text-silver-dim">Top tracks will appear once Spotify is connected.</p>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {data.tracks.map((t, idx) => (
        <motion.a
          key={t.id}
          href={t.href}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: idx * 0.02 }}
          className="group relative overflow-hidden rounded-xl border border-parchment/10 bg-gradient-to-b from-lift to-panel p-4 shadow-lift transition duration-500 ease-out hover:-translate-y-0.5 hover:border-parchment/18"
        >
          <div className="flex gap-4">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-parchment/10 bg-void">
              {t.albumArtUrl ? (
                <Image src={t.albumArtUrl} alt="" fill sizes="64px" className="object-cover" />
              ) : null}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-parchment">{t.name}</p>
              <p className="truncate text-xs text-silver-dim">{t.artists.join(", ")}</p>
              <p className="mt-1 truncate font-mono text-[10px] text-silver-dim">{t.album}</p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber/8 via-transparent to-parchment/5" />
          </div>
        </motion.a>
      ))}
    </div>
  );
}
