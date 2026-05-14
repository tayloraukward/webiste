import { NextResponse } from "next/server";

import { getCachedTopTracks } from "@/lib/spotify/cache";

export const runtime = "nodejs";

const ranges = new Set(["short_term", "medium_term", "long_term"]);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const rangeParam = searchParams.get("time_range") ?? "short_term";
  const time_range = ranges.has(rangeParam) ? (rangeParam as "short_term" | "medium_term" | "long_term") : "short_term";

  try {
    const data = await getCachedTopTracks(time_range);
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=7200",
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 503 });
  }
}
