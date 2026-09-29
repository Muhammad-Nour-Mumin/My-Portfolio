import { ImageResponse } from "next/og";
import { personal } from "@/data/portfolio";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${personal.name} — ${personal.role}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#090e16",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#22d3ee",
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: -0.5,
          }}
        >
          MOHAMED.
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, marginTop: 28, letterSpacing: -1.5 }}>
          {personal.name}
        </div>
        <div style={{ display: "flex", fontSize: 32, marginTop: 20, color: "#cbd5e1" }}>
          {personal.role} · {personal.location}
        </div>
      </div>
    ),
    { ...size }
  );
}
