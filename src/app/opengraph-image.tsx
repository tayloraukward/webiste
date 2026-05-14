import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Taylor Aukward — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 72,
          background:
            "radial-gradient(900px 520px at 12% -8%, rgba(196,165,116,0.35), transparent 55%), radial-gradient(700px 420px at 92% 8%, rgba(232,228,220,0.12), transparent 48%), #050505",
          color: "#e8e4dc",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        }}
      >
        <div style={{ fontSize: 62, fontWeight: 600, letterSpacing: -1.5 }}>Taylor Aukward</div>
        <div style={{ marginTop: 14, fontSize: 26, color: "rgba(232,228,220,0.72)" }}>Software Engineer · Systems · Analog taste</div>
      </div>
    ),
    { ...size },
  );
}
