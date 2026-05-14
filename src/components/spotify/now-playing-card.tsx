"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import type { PlayerPayload } from "@/lib/spotify/types";

import { VinylDisc } from "@/components/visual/vinyl-disc";

import { Equalizer } from "./equalizer";

function formatMs(ms: number) {
  const s = Math.floor(ms / 1000);
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, "0")}`;
}

export function NowPlayingCard({ payload, loading }: { payload: PlayerPayload | null; loading: boolean }) {
  const reduce = useReducedMotion();
  const [progress, setProgress] = useState(0);

  const isPlaying = payload?.isPlaying && payload.source === "playing";
  const track = payload?.track;
  const duration = track?.durationMs ?? 0;

  useEffect(() => {
    function compute() {
      if (!payload || !track || !isPlaying || payload.progressMs == null || !duration) {
        setProgress(0);
        return;
      }
      const elapsed = Date.now() - payload.fetchedAt;
      const est = payload.progressMs + elapsed;
      setProgress(Math.min(1, est / Math.max(1, duration)));
    }

    compute();
    if (!isPlaying || payload?.progressMs == null) return;
    const id = window.setInterval(compute, 1000);
    return () => window.clearInterval(id);
  }, [payload, track, isPlaying, duration]);

  if (loading) {
    return (
      <div className="glass relative overflow-hidden rounded-[1.75rem] p-8 sm:p-10">
        <div className="h-44 w-full animate-pulse rounded-xl bg-parchment/5 sm:h-52" />
        <div className="mt-6 h-4 w-2/3 animate-pulse rounded bg-parchment/5" />
        <div className="mt-3 h-4 w-1/2 animate-pulse rounded bg-parchment/5" />
      </div>
    );
  }

  if (!payload?.configured) {
    return (
      <div className="glass rounded-[1.75rem] p-8 sm:p-10">
        <p className="text-sm leading-relaxed text-parchment-dim">
          Spotify isn’t configured yet. Add credentials to enable live playback — see the README for setup.
        </p>
      </div>
    );
  }

  if (!track) {
    return (
      <div className="glass rounded-[1.75rem] p-8 sm:p-10">
        <p className="text-sm text-parchment-dim">Quiet right now — nothing recent to show.</p>
      </div>
    );
  }

  const subtitle =
    payload.source === "playing"
      ? isPlaying
        ? "Now playing"
        : "Playback paused"
      : payload.source === "recent"
        ? "Last session"
        : "Idle";

  return (
    <motion.div
      layout
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="glass relative overflow-hidden rounded-[1.75rem]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-36 top-0 h-80 w-80 rounded-full bg-amber/12 blur-3xl" />
        <div className="absolute -right-28 bottom-0 h-72 w-72 rounded-full bg-parchment/5 blur-3xl" />
      </div>

      <div className="relative grid gap-10 p-8 sm:grid-cols-[minmax(0,280px)_1fr] sm:items-center sm:gap-12 sm:p-10">
        <div className="relative mx-auto w-full max-w-[280px]">
          <VinylDisc
            spinning={Boolean(isPlaying)}
            className="absolute -right-[6%] top-1/2 z-0 hidden aspect-square w-[78%] -translate-y-1/2 sm:block"
          />
          <div className="relative z-10 aspect-square w-full overflow-hidden rounded-xl border border-parchment/12 bg-void shadow-lift">
            {track.albumArtUrl ? (
              <Image
                src={track.albumArtUrl}
                alt={track.name}
                fill
                sizes="(min-width: 640px) 280px, 85vw"
                className="object-cover"
                priority
              />
            ) : (
              <div className="grid h-full w-full place-items-center font-mono text-xs text-silver-dim">No artwork</div>
            )}
          </div>
        </div>

        <div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-silver-dim">{subtitle}</p>
            <Equalizer active={Boolean(isPlaying)} />
          </div>

          <h3 className="mt-4 font-display text-3xl font-medium tracking-tight text-parchment sm:text-4xl">{track.name}</h3>
          <p className="mt-2 text-base text-parchment-dim">{track.artists.join(", ")}</p>
          <p className="mt-1 font-mono text-sm text-silver-dim">{track.album}</p>

          {isPlaying && duration > 0 ? (
            <div className="mt-10">
              <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-parchment/10 shadow-inset">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-soft via-amber to-parchment-dim"
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
              <div className="mt-2 flex justify-between font-mono text-[11px] text-silver-dim">
                <span>{formatMs(progress * duration)}</span>
                <span>{formatMs(duration)}</span>
              </div>
            </div>
          ) : (
            <div className="mt-10 h-1.5 w-full rounded-full bg-parchment/6 shadow-inset" />
          )}

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={track.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-parchment px-5 py-2.5 text-sm font-semibold text-void transition duration-300 hover:bg-parchment-dim focus-visible:focus-ring"
            >
              Open in Spotify
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
