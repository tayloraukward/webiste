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
            "radial-gradient(900px 520px at 10% -10%, rgba(29,185,84,0.35), transparent 52%), radial-gradient(700px 420px at 95% 5%, rgba(167,139,250,0.22), transparent 48%), radial-gradient(600px 400px at 50% 100%, rgba(0,0,0,0.6), transparent 55%), #121212",
          color: "#ffffff",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        }}
      >
        <div style={{ fontSize: 62, fontWeight: 800, letterSpacing: -2 }}>Taylor Aukward</div>
        <div style={{ marginTop: 14, fontSize: 26, fontWeight: 500, color: "rgba(255,255,255,0.72)" }}>
          Software engineer · AWS Marketplace · Music and AI projects
        </div>
      </div>
    ),
    { ...size },
  );
}
