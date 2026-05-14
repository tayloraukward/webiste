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
          <div key={i} className="h-24 animate-pulse rounded-xl bg-parchment/5" />
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
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: idx * 0.02 }}
          className="group relative overflow-hidden rounded-xl border border-parchment/10 bg-gradient-to-b from-lift to-panel p-4 shadow-lift transition duration-500 ease-out hover:-translate-y-0.5 hover:border-parchment/18"
        >
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-parchment/10 bg-void">
              {a.imageUrl ? (
                <Image src={a.imageUrl} alt="" fill sizes="64px" className="object-cover" />
              ) : (
                <div className="grid h-full w-full place-items-center font-mono text-[10px] text-silver-dim">Artist</div>
              )}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-parchment">{a.name}</p>
              <p className="truncate text-xs text-silver-dim">{a.genres.join(" · ") || "Artist"}</p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
            <div className="absolute inset-0 bg-gradient-to-tr from-parchment/6 via-transparent to-amber/8" />
          </div>
        </motion.a>
      ))}
    </div>
  );
}
