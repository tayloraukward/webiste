"use client";

import { useMemo, useState } from "react";

import type { PlayerPayload } from "@/lib/spotify/types";

import { GrooveDivider } from "@/components/visual/groove-divider";
import { NowPlayingCard } from "@/components/spotify/now-playing-card";
import { RecentCarousel } from "@/components/spotify/recent-carousel";
import { SpectrumVisualizer } from "@/components/spotify/spectrum-visualizer";
import { TopArtistsGrid } from "@/components/spotify/top-artists-grid";
import { TopTracksGrid } from "@/components/spotify/top-tracks-grid";
import { SectionHeading } from "@/components/sections/section-heading";
import { cn } from "@/lib/utils/cn";

const RANGES = [
  { id: "short_term" as const, label: "Recent" },
  { id: "medium_term" as const, label: "Season" },
  { id: "long_term" as const, label: "All-time" },
];

export type SpotifyListenExperienceProps = {
  data: PlayerPayload | null;
  loading: boolean;
  error: string | null;
  /** Larger hero spacing when this block leads the section */
  variant?: "default" | "spotlight";
};

export function SpotifyListenExperience({ data, loading, error, variant = "default" }: SpotifyListenExperienceProps) {
  const [range, setRange] = useState<(typeof RANGES)[number]["id"]>("short_term");
  const rangeLabel = useMemo(() => RANGES.find((r) => r.id === range)?.label ?? "Recent", [range]);
  const spotlight = variant === "spotlight";

  return (
    <div id="music" className={cn("scroll-mt-24", spotlight && "relative")}>
      <div
        className={cn(
          "rounded-3xl border border-white/10 bg-gradient-to-b from-lift/40 via-panel/50 to-ink/80 p-5 shadow-card backdrop-blur-xl sm:p-8 lg:p-10",
          spotlight && "ring-1 ring-white/5",
        )}
      >
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="min-w-0 flex-1">
            <SectionHeading
              eyebrow="Spotify"
              title="Now & lately"
              description="Live playback, your charts, and listening history — proxied through Next.js so tokens never hit the browser."
            />
          </div>
          <div className="w-full shrink-0 lg:max-w-sm lg:pt-2">
            <SpectrumVisualizer />
          </div>
        </div>

        <div className="mt-10">
          <GrooveDivider />
        </div>

        {error ? (
          <p className="mt-8 rounded-2xl border border-spotify/30 bg-spotify/10 px-4 py-3 text-sm text-parchment">{error}</p>
        ) : null}

        <div className={cn(spotlight ? "mt-12" : "mt-10")}>
          <NowPlayingCard payload={data} loading={loading} />
        </div>

        <div className="mt-16 flex flex-wrap items-end justify-between gap-6">
          <h3 className="font-display text-2xl font-bold tracking-tight text-parchment sm:text-3xl">Your top music</h3>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Top content time range">
            {RANGES.map((r) => {
              const active = r.id === range;
              return (
                <button
                  key={r.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setRange(r.id)}
                  className={cn(
                    "rounded-full px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] transition duration-300 focus-visible:focus-ring",
                    active
                      ? "bg-spotify text-void shadow-glow-spotify"
                      : "border border-white/12 bg-transparent text-silver-dim hover:border-white/20 hover:text-parchment",
                  )}
                >
                  {r.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-12">
          <div>
            <div className="flex items-end justify-between gap-4">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-silver-dim">
                Top tracks · {rangeLabel}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-silver-dim">Swipe →</p>
            </div>
            <div className="mt-4 snap-x snap-mandatory">
              <TopTracksGrid timeRange={range} />
            </div>
          </div>
          <div>
            <div className="flex items-end justify-between gap-4">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-silver-dim">
                Top artists · {rangeLabel}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-silver-dim">Swipe →</p>
            </div>
            <div className="mt-4 snap-x snap-mandatory">
              <TopArtistsGrid timeRange={range} />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex items-end justify-between gap-4">
            <h3 className="font-display text-2xl font-bold tracking-tight text-parchment sm:text-3xl">Recently played</h3>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-silver-dim">Swipe →</p>
          </div>
          <div className="mt-5 snap-x snap-mandatory">
            <RecentCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}
