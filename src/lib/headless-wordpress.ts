import type { ArticleDetail, ArticleDetailSection } from "@/lib/article-details";
import { getArticleContent } from "@/lib/article-details";
import { articleCatalog, getArticleSlug } from "@/lib/site-content";

const DEFAULT_WORDPRESS_URL = "http://localhost:10088";
const WORDPRESS_REVALIDATE_SECONDS = 60;
const WORDPRESS_TIMEOUT_MS = Number.parseInt(process.env.WORDPRESS_TIMEOUT_MS ?? "2500", 10);
const WORDPRESS_ENABLED = process.env.WORDPRESS_HEADLESS_ENABLED !== "false";

const wordpressBaseUrl = (
  process.env.WORDPRESS_API_URL ??
  process.env.NEXT_PUBLIC_WORDPRESS_URL ??
  DEFAULT_WORDPRESS_URL
).replace(/\/+$/, "");

type StaticArticle = (typeof articleCatalog)[number];

type WordPressArticleResponse = {
  id?: number;
  slug?: string;
  title?: string;
  summary?: string;
  category?: string;
  readTime?: string;
  specialtySlug?: string;
  focusArea?: string;
  contentHtml?: string;
  modified?: string;
  link?: string;
};

type WordPressArticlesEnvelope = {
  items?: WordPressArticleResponse[];
};

export type KnowledgeArticle = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  readTime: string;
  specialtySlug: string;
  focusArea?: string;
  source: "static" | "wordpress";
};

type WordPressKnowledgeArticle = KnowledgeArticle & {
  id?: number;
  contentHtml?: string;
  modified?: string;
  link?: string;
  source: "wordpress";
};

export type KnowledgeArticleDetail = {
  article: KnowledgeArticle;
  content: ArticleDetail | null;
};

const staticArticlesBySlug = new Map(
  articleCatalog.map((article) => [getArticleSlug(article), article] as const),
);

function normalizeSpace(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function decodeHtmlEntities(value: string) {
  return value.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (entity, code: string) => {
    const lowerCode = code.toLowerCase();
    const namedEntities: Record<string, string> = {
      amp: "&",
      apos: "'",
      gt: ">",
      lt: "<",
      nbsp: " ",
      quot: '"',
    };

    if (lowerCode in namedEntities) {
      return namedEntities[lowerCode];
    }

    if (lowerCode.startsWith("#x")) {
      const parsed = Number.parseInt(lowerCode.slice(2), 16);
      return Number.isNaN(parsed) ? entity : String.fromCodePoint(parsed);
    }

    if (lowerCode.startsWith("#")) {
      const parsed = Number.parseInt(lowerCode.slice(1), 10);
      return Number.isNaN(parsed) ? entity : String.fromCodePoint(parsed);
    }

    return entity;
  });
}

function stripHtml(value: string) {
  return normalizeSpace(
    decodeHtmlEntities(
      value
        .replace(/<script[\s\S]*?<\/script>/gi, " ")
        .replace(/<style[\s\S]*?<\/style>/gi, " ")
        .replace(/<!--[\s\S]*?-->/g, " ")
        .replace(/<[^>]+>/g, " "),
    ),
  );
}

function cleanText(value: unknown) {
  return typeof value === "string" ? stripHtml(value) : "";
}

function cleanHtml(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function firstNonEmpty(...values: Array<string | undefined>) {
  return values.find((value) => typeof value === "string" && value.trim() !== "")?.trim() ?? "";
}

function fallbackSummary(article: StaticArticle, slug: string) {
  return getArticleContent(slug)?.excerpt ?? article.summary;
}

function fallbackTitle(article: StaticArticle, slug: string) {
  return getArticleContent(slug)?.title ?? article.title;
}

function toStaticKnowledgeArticle(article: StaticArticle): KnowledgeArticle {
  const slug = getArticleSlug(article);

  return {
    slug,
    title: fallbackTitle(article, slug),
    summary: fallbackSummary(article, slug),
    category: article.category,
    readTime: article.readTime,
    specialtySlug: article.specialtySlug,
    focusArea: article.focusArea,
    source: "static",
  };
}

function toWordPressKnowledgeArticle(raw: WordPressArticleResponse): WordPressKnowledgeArticle | null {
  const slug = cleanText(raw.slug);
  if (!slug) {
    return null;
  }

  const fallback = staticArticlesBySlug.get(slug);

  return {
    id: raw.id,
    slug,
    title: firstNonEmpty(cleanText(raw.title), fallback ? fallbackTitle(fallback, slug) : undefined, slug),
    summary: firstNonEmpty(cleanText(raw.summary), fallback ? fallbackSummary(fallback, slug) : undefined),
    category: firstNonEmpty(cleanText(raw.category), fallback?.category, "Kiến thức"),
    readTime: firstNonEmpty(cleanText(raw.readTime), fallback?.readTime, "7 phút đọc"),
    specialtySlug: firstNonEmpty(cleanText(raw.specialtySlug), fallback?.specialtySlug, "benh-vien"),
    focusArea: firstNonEmpty(cleanText(raw.focusArea), fallback?.focusArea),
    contentHtml: cleanHtml(raw.contentHtml),
    modified: cleanText(raw.modified),
    link: cleanText(raw.link),
    source: "wordpress",
  };
}

function toPublicArticle(article: WordPressKnowledgeArticle): KnowledgeArticle {
  return {
    slug: article.slug,
    title: article.title,
    summary: article.summary,
    category: article.category,
    readTime: article.readTime,
    specialtySlug: article.specialtySlug,
    focusArea: article.focusArea,
    source: article.source,
  };
}

async function fetchWordPressJson<T>(path: string): Promise<T | null> {
  if (!WORDPRESS_ENABLED || !wordpressBaseUrl) {
    return null;
  }

  const controller = new AbortController();
  const timeout = windowlessSetTimeout(() => controller.abort(), WORDPRESS_TIMEOUT_MS);

  try {
    const response = await fetch(`${wordpressBaseUrl}${path}`, {
      headers: {
        Accept: "application/json",
      },
      next: {
        revalidate: WORDPRESS_REVALIDATE_SECONDS,
        tags: ["hong-phuc-cms", "hong-phuc-articles"],
      },
      signal: controller.signal,
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as T;
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

function windowlessSetTimeout(callback: () => void, delay: number) {
  return setTimeout(callback, Number.isFinite(delay) && delay > 0 ? delay : 2500);
}

async function getWordPressArticles(): Promise<WordPressKnowledgeArticle[] | null> {
  const envelope = await fetchWordPressJson<WordPressArticlesEnvelope>(
    "/index.php?rest_route=/hong-phuc/v1/articles&per_page=100&include_content=0",
  );
  if (!envelope) return null;
  const items = Array.isArray(envelope?.items) ? envelope.items : [];

  return items
    .map(toWordPressKnowledgeArticle)
    .filter((article): article is WordPressKnowledgeArticle => article !== null);
}

async function getWordPressArticleBySlug(slug: string): Promise<WordPressKnowledgeArticle | null | undefined> {
  const envelope = await fetchWordPressJson<WordPressArticlesEnvelope>(
    `/index.php?rest_route=/hong-phuc/v1/articles&slug=${encodeURIComponent(slug)}&include_content=1`,
  );
  if (!envelope) return undefined;
  const raw = Array.isArray(envelope.items) ? envelope.items[0] : null;
  return raw ? toWordPressKnowledgeArticle(raw) : null;
}

function extractTextBlocks(fragment: string) {
  const matches = Array.from(fragment.matchAll(/<(p|li|blockquote)[^>]*>([\s\S]*?)<\/\1>/gi));
  if (matches.length > 0) {
    return matches.map((match) => stripHtml(match[2] ?? "")).filter(Boolean);
  }

  const text = stripHtml(fragment);
  return text ? [text] : [];
}

function makeWordPressArticleDetail(article: WordPressKnowledgeArticle): ArticleDetail | null {
  const html = article.contentHtml?.trim();
  if (!html) {
    return null;
  }

  const headingMatches = Array.from(html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi));
  const fallbackBlocks = extractTextBlocks(html);

  if (headingMatches.length === 0) {
    return {
      sourceFile: "WordPress",
      title: article.title,
      excerpt: article.summary,
      intro: fallbackBlocks.slice(0, 2),
      sections: fallbackBlocks.length > 2 ? [{ heading: "Nội dung chính", paragraphs: fallbackBlocks.slice(2) }] : [],
    };
  }

  const firstHeadingIndex = headingMatches[0].index ?? 0;
  const intro = extractTextBlocks(html.slice(0, firstHeadingIndex));
  const sections: ArticleDetailSection[] = headingMatches
    .map((match, index) => {
      const heading = stripHtml(match[1] ?? "") || `Nội dung ${index + 1}`;
      const contentStart = (match.index ?? 0) + match[0].length;
      const nextHeadingIndex = headingMatches[index + 1]?.index ?? html.length;
      const paragraphs = extractTextBlocks(html.slice(contentStart, nextHeadingIndex));

      return {
        heading,
        paragraphs,
      };
    })
    .filter((section) => section.paragraphs.length > 0);

  return {
    sourceFile: "WordPress",
    title: article.title,
    excerpt: article.summary,
    intro,
    sections: sections.length > 0 ? sections : [{ heading: "Nội dung chính", paragraphs: fallbackBlocks }],
  };
}

export async function getKnowledgeArticles(): Promise<KnowledgeArticle[]> {
  const staticArticles = articleCatalog.map(toStaticKnowledgeArticle);
  const wordPressArticles = await getWordPressArticles();

  if (wordPressArticles === null) {
    return staticArticles;
  }
  return wordPressArticles.map(toPublicArticle);
}

export async function getKnowledgeArticleBySlug(slug: string): Promise<KnowledgeArticleDetail | null> {
  const wordPressArticle = await getWordPressArticleBySlug(slug);
  if (wordPressArticle) {
    return {
      article: toPublicArticle(wordPressArticle),
      content: makeWordPressArticleDetail(wordPressArticle) ?? getArticleContent(slug),
    };
  }

  if (wordPressArticle !== undefined) {
    return null;
  }

  const staticArticle = staticArticlesBySlug.get(slug);
  if (!staticArticle) {
    return null;
  }

  return {
    article: toStaticKnowledgeArticle(staticArticle),
    content: getArticleContent(slug),
  };
}
