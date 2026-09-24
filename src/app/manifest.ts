import type { MetadataRoute } from "next";
import { FIRM } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: FIRM.name,
    short_name: FIRM.shortName,
    start_url: "/sr",
    display: "browser",
    background_color: "#1B1916",
    theme_color: "#1B1916",
    icons: [
      { src: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
