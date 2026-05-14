import "server-only";

import { spotifyGet } from "./http";
import { isSpotifyConfigured } from "./token";
import type {
  PlayerPayload,
  PublicTrack,
  RecentPayload,
  TopArtistsPayload,
  TopTracksPayload,
} from "./types";

type SpotifyImage = { url: string | null };
type SpotifyArtist = { name: string };
type SpotifyAlbum = { name: string; images: SpotifyImage[] };
type SpotifyTrack = {
  id: string;
  name: string;
  artists: SpotifyArtist[];
  album: SpotifyAlbum;
  external_urls: { spotify: string };
  duration_ms: number;
};

function pickArt(images: SpotifyImage[]): string | null {
  return images?.[0]?.url ?? null;
}

export function toPublicTrack(track: SpotifyTrack): PublicTrack {
  return {
    id: track.id,
    name: track.name,
    artists: track.artists.map((a) => a.name),
    album: track.album.name,
    albumArtUrl: pickArt(track.album.images ?? []),
    href: track.external_urls.spotify,
    durationMs: track.duration_ms,
  };
}

type CurrentlyPlayingResponse = {
  is_playing: boolean;
  progress_ms: number;
  item: SpotifyTrack | null;
};

type RecentlyPlayedResponse = {
  items: { played_at: string; track: SpotifyTrack }[];
};

type TopTracksResponse = { items: SpotifyTrack[] };
type TopArtist = {
  id: string;
  name: string;
  images: SpotifyImage[];
  genres: string[];
  external_urls: { spotify: string };
};
type TopArtistsResponse = { items: TopArtist[] };

export async function fetchPlayerPayload(): Promise<PlayerPayload> {
  const fetchedAt = Date.now();
  if (!isSpotifyConfigured()) {
    return { configured: false, source: "idle", isPlaying: false, track: null, progressMs: null, fetchedAt };
  }

  const current = await spotifyGet<CurrentlyPlayingResponse>("/me/player/currently-playing");
  if (current.ok && current.data.item) {
    const t = toPublicTrack(current.data.item);
    return {
      configured: true,
      source: "playing",
      isPlaying: current.data.is_playing,
      track: t,
      progressMs: current.data.progress_ms ?? 0,
      fetchedAt,
    };
  }

  const recent = await spotifyGet<RecentlyPlayedResponse>("/me/player/recently-played?limit=1");
  if (recent.ok && recent.data.items?.[0]?.track) {
    const t = toPublicTrack(recent.data.items[0].track);
    return {
      configured: true,
      source: "recent",
      isPlaying: false,
      track: t,
      progressMs: null,
      fetchedAt,
    };
  }

  return { configured: true, source: "idle", isPlaying: false, track: null, progressMs: null, fetchedAt };
}

export async function fetchTopTracks(timeRange: "short_term" | "medium_term" | "long_term"): Promise<TopTracksPayload> {
  if (!isSpotifyConfigured()) return { configured: false, tracks: [] };
  const res = await spotifyGet<TopTracksResponse>(`/me/top/tracks?limit=12&time_range=${timeRange}`);
  if (!res.ok) return { configured: true, tracks: [] };
  return { configured: true, tracks: res.data.items.map(toPublicTrack) };
}

export async function fetchTopArtists(timeRange: "short_term" | "medium_term" | "long_term"): Promise<TopArtistsPayload> {
  if (!isSpotifyConfigured()) return { configured: false, artists: [] };
  const res = await spotifyGet<TopArtistsResponse>(`/me/top/artists?limit=12&time_range=${timeRange}`);
  if (!res.ok) return { configured: true, artists: [] };
  return {
    configured: true,
    artists: res.data.items.map((a) => ({
      id: a.id,
      name: a.name,
      imageUrl: pickArt(a.images ?? []),
      genres: a.genres?.slice(0, 3) ?? [],
      href: a.external_urls.spotify,
    })),
  };
}

export async function fetchRecentTracks(): Promise<RecentPayload> {
  if (!isSpotifyConfigured()) return { configured: false, items: [] };
  const res = await spotifyGet<RecentlyPlayedResponse>("/me/player/recently-played?limit=20");
  if (!res.ok) return { configured: true, items: [] };
  return {
    configured: true,
    items: res.data.items.map((row) => ({
      playedAt: row.played_at,
      track: toPublicTrack(row.track),
    })),
  };
}
