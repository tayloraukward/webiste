"use client";

import { useMemo, useState } from "react";

import { useSpotifyPlayer } from "@/hooks/use-spotify-player";

import { GrooveDivider } from "@/components/visual/groove-divider";
import { NowPlayingCard } from "@/components/spotify/now-playing-card";
import { RecentCarousel } from "@/components/spotify/recent-carousel";
import { SpectrumVisualizer } from "@/components/spotify/spectrum-visualizer";
import { TopArtistsGrid } from "@/components/spotify/top-artists-grid";
import { TopTracksGrid } from "@/components/spotify/top-tracks-grid";
import { SectionHeading } from "@/components/sections/section-heading";

const RANGES = [
  { id: "short_term" as const, label: "Recent" },
  { id: "medium_term" as const, label: "Season" },
  { id: "long_term" as const, label: "All-time" },
];

type MusicSectionProps = {
  embedded?: boolean;
};

export function MusicSection({ embedded = false }: MusicSectionProps) {
  const { data, loading, error } = useSpotifyPlayer(12_000);
  const [range, setRange] = useState<(typeof RANGES)[number]["id"]>("short_term");

  const rangeLabel = useMemo(() => RANGES.find((r) => r.id === range)?.label ?? "Recent", [range]);

  const inner = (
    <>
      <SectionHeading
        eyebrow="Listening"
        title="Lately on Spotify"
        description="Live playback, charts, and history — pulled through Next.js API routes so tokens stay on the server."
      />

      <div className="mt-8 w-full max-w-md">
        <SpectrumVisualizer />
      </div>

      <div className="mt-10">
        <GrooveDivider />
      </div>

      {error ? (
        <p className="mt-8 rounded-xl border border-amber/25 bg-amber/5 px-4 py-3 text-sm text-parchment">{error}</p>
      ) : null}

      <div className="mt-10">
        <NowPlayingCard payload={data} loading={loading} />
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-between gap-4">
        <h3 className="font-display text-2xl font-medium text-parchment sm:text-3xl">Top tracks & artists</h3>
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
                className={`rounded-full border px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.2em] transition duration-300 focus-visible:focus-ring ${
                  active
                    ? "border-parchment/25 bg-lift text-parchment"
                    : "border-parchment/10 bg-transparent text-silver-dim hover:border-parchment/18 hover:text-parchment"
                }`}
              >
                {r.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 grid gap-12 lg:grid-cols-2">
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-silver-dim">
            Top tracks · {rangeLabel}
          </p>
          <div className="mt-4">
            <TopTracksGrid timeRange={range} />
          </div>
        </div>
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-silver-dim">
            Top artists · {rangeLabel}
          </p>
          <div className="mt-4">
            <TopArtistsGrid timeRange={range} />
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="flex items-end justify-between gap-4">
          <h3 className="font-display text-2xl font-medium text-parchment sm:text-3xl">Recently played</h3>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-silver-dim">Scroll →</p>
        </div>
        <div className="mt-5 snap-x snap-mandatory">
          <RecentCarousel />
        </div>
      </div>
    </>
  );

  if (embedded) {
    return (
      <div id="music" className="scroll-mt-24">
        <div className="mt-20 rounded-2xl border border-parchment/10 bg-ink/55 p-6 sm:p-10">{inner}</div>
      </div>
    );
  }

  return (
    <section id="music" className="scroll-mt-24 border-t border-parchment/5 bg-ink/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">{inner}</div>
    </section>
  );
}
