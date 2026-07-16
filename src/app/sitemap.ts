import type { MetadataRoute } from "next";
import { getCmsContent } from "@/lib/cms-content";
import { getKnowledgeArticles } from "@/lib/headless-wordpress";
import { resolveAbsoluteUrl } from "@/lib/seo";

const staticRoutes = [
  "",
  "/chuyen-khoa",
  "/dich-vu",
  "/tim-bac-si",
  "/doi-ngu-bac-si",
  "/goi-kham",
  "/tim-theo-trieu-chung",
  "/kham-suc-khoe-doanh-nghiep",
  "/tham-my",
  "/hop-tac-quoc-te",
  "/kien-thuc",
  "/huong-dan-khach-hang",
  "/lien-he",
  "/dat-lich",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { doctorProfiles, medicalServices, specialties, updatedAt } = await getCmsContent();
  const lastModified = updatedAt ? new Date(updatedAt) : new Date();
  const knowledgeArticles = await getKnowledgeArticles();
  const dynamicRoutes: Array<{ route: string; priority: number; changeFrequency: "weekly" | "monthly" }> = [
    ...specialties.map((specialty) => ({
      route: `/chuyen-khoa/${specialty.slug}`,
      priority: 0.82,
      changeFrequency: "monthly" as const,
    })),
    ...doctorProfiles.map((doctor) => ({
      route: `/bac-si/${doctor.slug}`,
      priority: 0.74,
      changeFrequency: "monthly" as const,
    })),
    ...medicalServices.map((service) => ({
      route: `/dich-vu/${service.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
    ...knowledgeArticles.map((article) => ({
      route: `/kien-thuc/${article.slug}`,
      priority: 0.76,
      changeFrequency: "weekly" as const,
    })),
  ];

  const routes = [
    ...staticRoutes.map((route) => ({
      route,
      priority: route === "" ? 1 : route === "/kien-thuc" ? 0.92 : 0.78,
      changeFrequency: route === "" || route === "/kien-thuc" ? ("weekly" as const) : ("monthly" as const),
    })),
    ...dynamicRoutes,
  ];

  return routes.map((route) => ({
    url: resolveAbsoluteUrl(route.route),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
