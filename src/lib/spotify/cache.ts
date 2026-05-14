import "server-only";

import { unstable_cache } from "next/cache";

import { fetchPlayerPayload, fetchRecentTracks, fetchTopArtists, fetchTopTracks } from "./service";

const playerCached = unstable_cache(async () => fetchPlayerPayload(), ["spotify-player-v2"], { revalidate: 20 });

const recentCached = unstable_cache(async () => fetchRecentTracks(), ["spotify-recent-v2"], { revalidate: 120 });

const topTracksShort = unstable_cache(async () => fetchTopTracks("short_term"), ["spotify-top-tracks-short"], {
  revalidate: 3600,
});
const topTracksMedium = unstable_cache(async () => fetchTopTracks("medium_term"), ["spotify-top-tracks-medium"], {
  revalidate: 3600,
});
const topTracksLong = unstable_cache(async () => fetchTopTracks("long_term"), ["spotify-top-tracks-long"], {
  revalidate: 3600,
});

const topArtistsShort = unstable_cache(async () => fetchTopArtists("short_term"), ["spotify-top-artists-short"], {
  revalidate: 3600,
});
const topArtistsMedium = unstable_cache(async () => fetchTopArtists("medium_term"), ["spotify-top-artists-medium"], {
  revalidate: 3600,
});
const topArtistsLong = unstable_cache(async () => fetchTopArtists("long_term"), ["spotify-top-artists-long"], {
  revalidate: 3600,
});

export async function getCachedPlayer() {
  return playerCached();
}

export async function getCachedRecent() {
  return recentCached();
}

export async function getCachedTopTracks(range: "short_term" | "medium_term" | "long_term") {
  if (range === "short_term") return topTracksShort();
  if (range === "medium_term") return topTracksMedium();
  return topTracksLong();
}

export async function getCachedTopArtists(range: "short_term" | "medium_term" | "long_term") {
  if (range === "short_term") return topArtistsShort();
  if (range === "medium_term") return topArtistsMedium();
  return topArtistsLong();
}
