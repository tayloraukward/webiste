import "server-only";

type CachedToken = {
  accessToken: string;
  expiresAtMs: number;
};

let memory: CachedToken | null = null;
let inflight: Promise<string> | null = null;

function env(name: "SPOTIFY_CLIENT_ID" | "SPOTIFY_CLIENT_SECRET" | "SPOTIFY_REFRESH_TOKEN") {
  const v = process.env[name];
  return v && v.length > 0 ? v : undefined;
}

export function isSpotifyConfigured(): boolean {
  return !!(env("SPOTIFY_CLIENT_ID") && env("SPOTIFY_CLIENT_SECRET") && env("SPOTIFY_REFRESH_TOKEN"));
}

/**
 * Exchanges the refresh token for a short-lived access token.
 * Uses in-memory caching suitable for warm serverless invocations.
 */
export async function getSpotifyAccessToken(): Promise<string> {
  const clientId = env("SPOTIFY_CLIENT_ID");
  const clientSecret = env("SPOTIFY_CLIENT_SECRET");
  const refreshToken = env("SPOTIFY_REFRESH_TOKEN");
  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Spotify environment variables are not fully configured.");
  }

  const now = Date.now();
  if (memory && now < memory.expiresAtMs - 30_000) {
    return memory.accessToken;
  }

  if (inflight) return inflight;

  inflight = (async () => {
    const body = new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    });

    const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
    const res = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
      cache: "no-store",
    });

    const json = (await res.json()) as {
      access_token?: string;
      expires_in?: number;
      refresh_token?: string;
      error?: string;
    };

    if (!res.ok || !json.access_token || !json.expires_in) {
      inflight = null;
      throw new Error(json.error ?? `Spotify token exchange failed (${res.status})`);
    }

    // Spotify may rotate refresh tokens; operators should update env if this occurs.
    if (json.refresh_token && process.env.NODE_ENV === "development") {
      // Helpful when Spotify rotates refresh tokens during local dev.
      // eslint-disable-next-line no-console
      console.info(
        "[spotify] A new refresh_token was returned; consider updating SPOTIFY_REFRESH_TOKEN in your environment.",
      );
    }

    memory = {
      accessToken: json.access_token,
      expiresAtMs: Date.now() + json.expires_in * 1000,
    };
    inflight = null;
    return json.access_token;
  })();

  return inflight;
}
