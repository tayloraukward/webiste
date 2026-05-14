import { NextResponse } from "next/server";

import { getCachedRecent } from "@/lib/spotify/cache";

export const runtime = "nodejs";

export async function GET() {
  try {
    const data = await getCachedRecent();
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=120, stale-while-revalidate=300",
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 503 });
  }
}
