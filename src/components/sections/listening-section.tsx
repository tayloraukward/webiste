"use client";

import { useSpotifyPlayer } from "@/hooks/use-spotify-player";
import { SpotifyListenExperience } from "@/components/spotify/spotify-listen-experience";

export function ListeningSection() {
  const { data, loading, error } = useSpotifyPlayer(12_000);

  return (
    <section className="relative scroll-mt-24 border-t border-white/8 bg-gradient-to-b from-void via-ink/95 to-graphite/90 py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-spotify/40 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-[min(70vw,520px)] w-[min(70vw,520px)] -translate-x-1/2 rounded-full bg-spotify/10 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(29,185,84,0.08)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SpotifyListenExperience data={data} loading={loading} error={error} variant="spotlight" />
      </div>
    </section>
  );
}
