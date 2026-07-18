import { cache } from "react";
import type { Metadata } from "next";
import {
  aestheticServices,
  articleCatalog,
  doctorProfiles,
  enterprisePrograms,
  faqItems,
  featuredDepartments,
  featuredSpaces,
  footerGroups,
  guideTopics,
  internationalPrograms,
  medicalServices,
  navigation,
  packageOptions,
  patientJourney,
  patientStories,
  qualityMetrics,
  quickActions,
  searchSuggestions,
  siteInfo,
  specialties,
  symptomGroups,
  technologyCapabilities,
  trustPillars,
} from "@/lib/site-content";

const DEFAULT_WORDPRESS_URL = "http://localhost:10088";
const CMS_REVALIDATE_SECONDS = Number.parseInt(process.env.WORDPRESS_REVALIDATE_SECONDS ?? "30", 10);
const CMS_TIMEOUT_MS = Number.parseInt(process.env.WORDPRESS_TIMEOUT_MS ?? "3000", 10);
const CMS_ENABLED = process.env.WORDPRESS_HEADLESS_ENABLED !== "false";

const wordpressBaseUrl = (
  process.env.WORDPRESS_API_URL ??
  process.env.NEXT_PUBLIC_WORDPRESS_URL ??
  DEFAULT_WORDPRESS_URL
).replace(/\/+$/, "");

export type CmsBlock = {
  name: string;
  attributes: Record<string, unknown>;
};

export type CmsPage = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  contentHtml: string;
  blocks: CmsBlock[];
  hero?: {
    eyebrow?: string;
    title?: string;
    description?: string;
    image?: string;
    primaryLabel?: string;
    primaryUrl?: string;
    secondaryLabel?: string;
    secondaryUrl?: string;
  };
  sections?: Record<string, unknown>;
  menuOrder: number;
  modified: string;
  seo: {
    title: string;
    description: string;
    socialImage: string;
    noIndex: boolean;
  };
};

type CmsSiteInfo = typeof siteInfo & {
  logo?: string;
  favicon?: string;
  frontendUrl?: string;
  seo?: {
    title?: string;
    description?: string;
    socialImage?: string;
  };
};

export type CmsContent = {
  source: "wordpress" | "fallback";
  version: string;
  updatedAt: string;
  siteInfo: CmsSiteInfo;
  navigation: typeof navigation;
  quickActions: typeof quickActions;
  qualityMetrics: typeof qualityMetrics;
  featuredDepartments: typeof featuredDepartments;
  internationalPrograms: typeof internationalPrograms;
  technologyCapabilities: typeof technologyCapabilities;
  featuredSpaces: typeof featuredSpaces;
  specialties: typeof specialties;
  medicalServices: typeof medicalServices;
  trustPillars: typeof trustPillars;
  packageOptions: typeof packageOptions;
  doctorProfiles: typeof doctorProfiles;
  patientJourney: typeof patientJourney;
  articleCatalog: typeof articleCatalog;
  patientStories: typeof patientStories;
  faqItems: typeof faqItems;
  symptomGroups: typeof symptomGroups;
  searchSuggestions: typeof searchSuggestions;
  enterprisePrograms: typeof enterprisePrograms;
  aestheticServices: typeof aestheticServices;
  guideTopics: typeof guideTopics;
  footerGroups: typeof footerGroups;
  pages: Record<string, CmsPage>;
};

type WordPressContent = Partial<Omit<CmsContent, "source" | "articleCatalog">> & {
  version?: string;
  updatedAt?: string;
};

const fallbackContent: CmsContent = {
  source: "fallback",
  version: "fallback",
  updatedAt: "",
  siteInfo,
  navigation,
  quickActions,
  qualityMetrics,
  featuredDepartments,
  internationalPrograms,
  technologyCapabilities,
  featuredSpaces,
  specialties,
  medicalServices,
  trustPillars,
  packageOptions,
  doctorProfiles,
  patientJourney,
  articleCatalog,
  patientStories,
  faqItems,
  symptomGroups,
  searchSuggestions,
  enterprisePrograms,
  aestheticServices,
  guideTopics,
  footerGroups,
  pages: {},
};

async function fetchWordPressContent(): Promise<WordPressContent | null> {
  if (!CMS_ENABLED || !wordpressBaseUrl) return null;

  const controller = new AbortController();
  const timeout = setTimeout(
    () => controller.abort(),
    Number.isFinite(CMS_TIMEOUT_MS) && CMS_TIMEOUT_MS > 0 ? CMS_TIMEOUT_MS : 3000,
  );

  try {
    const response = await fetch(`${wordpressBaseUrl}/index.php?rest_route=/hong-phuc/v1/content`, {
      headers: { Accept: "application/json" },
      next: {
        revalidate:
          Number.isFinite(CMS_REVALIDATE_SECONDS) && CMS_REVALIDATE_SECONDS >= 0
            ? CMS_REVALIDATE_SECONDS
            : 30,
        tags: ["hong-phuc-cms"],
      },
      signal: controller.signal,
    });
    if (!response.ok) return null;

    const content = (await response.json()) as WordPressContent;
    if (!content || typeof content !== "object" || !content.siteInfo) return null;
    return content;
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

function collection<K extends keyof CmsContent>(content: WordPressContent, key: K): CmsContent[K] {
  const value = content[key as keyof WordPressContent];
  return (Array.isArray(value) && value.length > 0 ? value : fallbackContent[key]) as CmsContent[K];
}

function mergeItems<T extends Record<string, unknown>>(
  raw: unknown,
  fallback: T[],
  key: keyof T,
): T[] {
  if (!Array.isArray(raw)) return fallback;
  return raw.map((item) => {
    const record: Partial<T> = item && typeof item === "object" ? (item as Partial<T>) : {};
    const match = fallback.find((candidate) => candidate[key] === record[key]);
    return { ...(match ?? {}), ...record } as T;
  });
}

export const getCmsContent = cache(async (): Promise<CmsContent> => {
  const wordpress = await fetchWordPressContent();
  if (!wordpress) return fallbackContent;

  return {
    source: "wordpress",
    version: typeof wordpress.version === "string" ? wordpress.version : "1",
    updatedAt: typeof wordpress.updatedAt === "string" ? wordpress.updatedAt : "",
    siteInfo: { ...siteInfo, ...(wordpress.siteInfo ?? {}) },
    navigation: collection(wordpress, "navigation"),
    quickActions: collection(wordpress, "quickActions"),
    qualityMetrics: collection(wordpress, "qualityMetrics"),
    featuredDepartments: collection(wordpress, "featuredDepartments"),
    internationalPrograms: collection(wordpress, "internationalPrograms"),
    technologyCapabilities: collection(wordpress, "technologyCapabilities"),
    featuredSpaces: collection(wordpress, "featuredSpaces"),
    specialties: mergeItems(wordpress.specialties, specialties, "slug"),
    medicalServices: mergeItems(wordpress.medicalServices, medicalServices, "slug"),
    trustPillars: collection(wordpress, "trustPillars"),
    packageOptions: mergeItems(wordpress.packageOptions, packageOptions, "name"),
    doctorProfiles: mergeItems(wordpress.doctorProfiles, doctorProfiles, "slug"),
    patientJourney: collection(wordpress, "patientJourney"),
    articleCatalog,
    patientStories: collection(wordpress, "patientStories"),
    faqItems: collection(wordpress, "faqItems"),
    symptomGroups: collection(wordpress, "symptomGroups"),
    searchSuggestions: collection(wordpress, "searchSuggestions"),
    enterprisePrograms: collection(wordpress, "enterprisePrograms"),
    aestheticServices: collection(wordpress, "aestheticServices"),
    guideTopics: collection(wordpress, "guideTopics"),
    footerGroups: collection(wordpress, "footerGroups"),
    pages:
      wordpress.pages && typeof wordpress.pages === "object"
        ? (wordpress.pages as Record<string, CmsPage>)
        : {},
  };
});

export async function getCmsPage(slug: string) {
  const content = await getCmsContent();
  return content.pages[slug] ?? null;
}

export function getCmsBlock(page: CmsPage | null, name: string) {
  return page?.blocks.find((block) => block.name === name) ?? null;
}

export type CmsHeroFallback = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  actions?: Array<{
    href: string;
    label: string;
    variant?: "primary" | "secondary" | "ghost" | "contrast";
  }>;
};

function nonEmpty(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim() ? value : fallback;
}

export function resolveCmsHero(page: CmsPage | null, fallback: CmsHeroFallback): CmsHeroFallback {
  const hero = page?.hero;
  const primaryUrl = nonEmpty(hero?.primaryUrl, fallback.actions?.[0]?.href ?? "");
  const primaryLabel = nonEmpty(hero?.primaryLabel, fallback.actions?.[0]?.label ?? "");
  const secondaryUrl = nonEmpty(hero?.secondaryUrl, fallback.actions?.[1]?.href ?? "");
  const secondaryLabel = nonEmpty(hero?.secondaryLabel, fallback.actions?.[1]?.label ?? "");
  const actions = [
    primaryUrl && primaryLabel ? { href: primaryUrl, label: primaryLabel, variant: fallback.actions?.[0]?.variant } : null,
    secondaryUrl && secondaryLabel ? { href: secondaryUrl, label: secondaryLabel, variant: fallback.actions?.[1]?.variant ?? "secondary" as const } : null,
  ].filter((item): item is NonNullable<typeof item> => item !== null);

  return {
    eyebrow: nonEmpty(hero?.eyebrow, fallback.eyebrow),
    title: nonEmpty(hero?.title, fallback.title),
    description: nonEmpty(hero?.description, fallback.description),
    imageSrc: nonEmpty(hero?.image, fallback.imageSrc),
    imageAlt: nonEmpty(hero?.title, fallback.imageAlt),
    actions,
  };
}

export async function getCmsPageMetadata(
  slug: string,
  fallback: { title: string; description: string; canonical?: string },
): Promise<Metadata> {
  const page = await getCmsPage(slug);
  const title = nonEmpty(page?.seo?.title, nonEmpty(page?.hero?.title, fallback.title));
  const description = nonEmpty(page?.seo?.description, nonEmpty(page?.hero?.description, fallback.description));
  const socialImage = page?.seo?.socialImage?.trim();

  return {
    title,
    description,
    alternates: { canonical: fallback.canonical ?? (slug === "trang-chu" ? "/" : `/${slug}`) },
    openGraph: { title, description, images: socialImage ? [socialImage] : undefined },
    robots: page?.seo?.noIndex ? { index: false, follow: true } : undefined,
  };
}
