import type { MetadataRoute } from "next";
import { resolveAbsoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: resolveAbsoluteUrl("/sitemap.xml"),
  };
}
