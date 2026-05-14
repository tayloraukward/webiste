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
    return <div className="h-36 animate-pulse rounded-xl bg-parchment/5" />;
  }

  if (!data.configured || data.items.length === 0) {
    return <p className="text-sm text-silver-dim">Recently played will appear once Spotify is connected.</p>;
  }

  return (
    <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2 pt-1 [scrollbar-width:thin] sm:-mx-6 sm:px-6">
      {data.items.map((row, idx) => (
        <motion.a
          key={`${row.track.id}-${row.playedAt}`}
          href={row.track.href}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: Math.min(idx, 8) * 0.03 }}
          className="group relative w-[170px] shrink-0 snap-start overflow-hidden rounded-xl border border-parchment/10 bg-gradient-to-b from-lift to-panel shadow-lift transition duration-500 hover:border-parchment/18"
        >
          <div className="relative aspect-square w-full overflow-hidden border-b border-parchment/8 bg-void">
            {row.track.albumArtUrl ? (
              <Image
                src={row.track.albumArtUrl}
                alt=""
                fill
                sizes="170px"
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.02]"
              />
            ) : null}
          </div>
          <div className="p-3">
            <p className="line-clamp-2 text-xs font-medium text-parchment">{row.track.name}</p>
            <p className="mt-1 line-clamp-1 text-[11px] text-silver-dim">{row.track.artists.join(", ")}</p>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
