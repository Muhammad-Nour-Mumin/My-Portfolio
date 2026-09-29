import type { MetadataRoute } from "next";
import { personal, siteMeta } from "@/data/portfolio";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${personal.name} — ${personal.role}`,
    short_name: personal.name,
    description: siteMeta.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fafafa",
    theme_color: "#0891b2",
    icons: [
      {
        src: "/icon",
        sizes: "64x64",
        type: "image/png",
      },
    ],
  };
}
