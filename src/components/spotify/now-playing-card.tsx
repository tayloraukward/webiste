"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import type { PlayerPayload } from "@/lib/spotify/types";

import { Equalizer } from "./equalizer";
import { cn } from "@/lib/utils/cn";

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
      <div className="glass-spotify relative overflow-hidden rounded-3xl p-8 sm:p-10">
        <div className="h-56 w-full animate-pulse rounded-2xl bg-white/5 sm:h-64" />
        <div className="mt-8 h-5 w-2/3 animate-pulse rounded-md bg-white/5" />
        <div className="mt-3 h-4 w-1/2 animate-pulse rounded-md bg-white/5" />
      </div>
    );
  }

  if (!payload?.configured) {
    return (
      <div className="glass-spotify rounded-3xl p-8 sm:p-10">
        <p className="text-sm leading-relaxed text-parchment-dim">
          Spotify isn’t configured yet. Add credentials to enable live playback — see the README for setup.
        </p>
      </div>
    );
  }

  if (!track) {
    return (
      <div className="glass-spotify rounded-3xl p-8 sm:p-10">
        <p className="text-sm text-parchment-dim">Nothing playing right now — your recent session will show here when available.</p>
      </div>
    );
  }

  const subtitle =
    payload.source === "playing"
      ? isPlaying
        ? "Now playing"
        : "Paused"
      : payload.source === "recent"
        ? "Last played"
        : "Idle";

  return (
    <motion.div
      layout
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/10 shadow-card transition-shadow duration-500",
        isPlaying && "shadow-glow-spotify ring-1 ring-spotify/25",
      )}
    >
      {track.albumArtUrl ? (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <Image
            src={track.albumArtUrl}
            alt=""
            fill
            sizes="100vw"
            className="scale-110 object-cover opacity-30 blur-3xl saturate-150"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-void/80 via-ink/90 to-void" />
          <div className="absolute inset-0 bg-gradient-to-tr from-spotify/10 via-transparent to-wrap-violet/10" />
        </div>
      ) : (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-lift via-ink to-void" aria-hidden />
      )}

      <div className="relative p-6 sm:p-10 lg:p-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={track.id}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-center lg:gap-14"
          >
            <motion.div
              className="relative mx-auto w-full max-w-[min(100%,340px)] lg:mx-0"
              whileHover={reduce ? undefined : { scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
            >
              <div
                className={cn(
                  "relative aspect-square w-full overflow-hidden rounded-2xl shadow-lift ring-1 ring-white/10",
                  isPlaying && "ring-spotify/40 shadow-glow-spotify",
                )}
              >
                {track.albumArtUrl ? (
                  <Image
                    src={track.albumArtUrl}
                    alt={track.name}
                    fill
                    sizes="(min-width: 1024px) 340px, 88vw"
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="grid h-full w-full place-items-center bg-lift font-mono text-xs text-silver-dim">No artwork</div>
                )}
                {isPlaying ? (
                  <motion.div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-spotify/20 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                ) : null}
              </div>
            </motion.div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.32em] text-spotify-bright">{subtitle}</p>
                <Equalizer active={Boolean(isPlaying)} />
              </div>

              <h3 className="mt-5 font-display text-3xl font-bold leading-[1.08] tracking-tight text-parchment sm:text-4xl lg:text-5xl">
                {track.name}
              </h3>
              <p className="mt-3 text-lg font-medium text-parchment-dim sm:text-xl">{track.artists.join(", ")}</p>
              <p className="mt-1 text-sm text-silver-dim">{track.album}</p>

              <div className="mt-10">
                <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/10 shadow-inset-deep">
                  <motion.div
                    className="absolute left-0 top-0 h-full rounded-full bg-spotify shadow-[0_0_16px_rgba(29,185,84,0.6)]"
                    initial={false}
                    animate={{ width: `${isPlaying && duration > 0 ? progress * 100 : 0}%` }}
                    transition={{ type: "tween", ease: "linear", duration: 0.95 }}
                  />
                </div>
                {isPlaying && duration > 0 ? (
                  <div className="mt-2 flex justify-between font-mono text-[11px] tabular-nums text-silver-dim">
                    <span>{formatMs(progress * duration)}</span>
                    <span>{formatMs(duration)}</span>
                  </div>
                ) : (
                  <div className="mt-2 h-4" />
                )}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <motion.a
                  href={track.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={reduce ? undefined : { scale: 1.03 }}
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                  className="inline-flex items-center justify-center rounded-full bg-spotify px-7 py-3 text-sm font-bold text-void shadow-glow-spotify transition-colors duration-300 hover:bg-spotify-bright focus-visible:focus-ring"
                >
                  Play on Spotify
                </motion.a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
