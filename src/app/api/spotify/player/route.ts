import { NextResponse } from "next/server";

import { getCachedPlayer } from "@/lib/spotify/cache";

export const runtime = "nodejs";

export async function GET() {
  try {
    const data = await getCachedPlayer();
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=20, stale-while-revalidate=60",
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 503 });
  }
}
