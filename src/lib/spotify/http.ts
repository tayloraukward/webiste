import "server-only";

import { getSpotifyAccessToken } from "./token";

export async function spotifyGet<T>(path: string, init?: RequestInit): Promise<{ ok: true; data: T } | { ok: false; status: number }> {
  const token = await getSpotifyAccessToken();
  const res = await fetch(`https://api.spotify.com/v1${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      ...(init?.headers ?? {}),
    },
    cache: "no-store",
  });

  if (res.status === 204) {
    return { ok: false, status: 204 };
  }

  if (!res.ok) {
    return { ok: false, status: res.status };
  }

  const data = (await res.json()) as T;
  return { ok: true, data };
}
