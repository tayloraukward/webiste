"use client";

import { useEffect, useState } from "react";

import type { PlayerPayload } from "@/lib/spotify/types";

export function useSpotifyPlayer(pollMs = 12000) {
  const [data, setData] = useState<PlayerPayload | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/spotify/player", { cache: "no-store" });
        const json = (await res.json()) as PlayerPayload & { error?: string };
        if (!res.ok) {
          throw new Error(json.error ?? "Unable to load Spotify player state.");
        }
        if (!cancelled) {
          setData(json);
          setError(null);
        }
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "Unknown error");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void load();
    const id = window.setInterval(() => void load(), pollMs);
    return () => {
      cancelled = true;
      window.clearInterval(id);
    };
  }, [pollMs]);

  return { data, loading, error };
}
