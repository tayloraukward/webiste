/** Normalized track for UI + API responses */
export type PublicTrack = {
  id: string;
  name: string;
  artists: string[];
  album: string;
  albumArtUrl: string | null;
  href: string;
  durationMs: number;
};

export type PlayerPayload = {
  configured: boolean;
  source: "playing" | "recent" | "idle";
  isPlaying: boolean;
  track: PublicTrack | null;
  progressMs: number | null;
  fetchedAt: number;
};

export type TopTracksPayload = {
  configured: boolean;
  tracks: PublicTrack[];
};

export type TopArtistsPayload = {
  configured: boolean;
  artists: {
    id: string;
    name: string;
    imageUrl: string | null;
    genres: string[];
    href: string;
  }[];
};

export type RecentPayload = {
  configured: boolean;
  items: { playedAt: string; track: PublicTrack }[];
};

export type SpotifyApiErrorBody = {
  error: string;
  status?: number;
};
