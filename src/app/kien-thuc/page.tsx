import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenText, FolderTree, Search, Sparkles, Stethoscope } from "lucide-react";
import { ArticleBrowser } from "@/components/article-browser";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ActionLink, PageHero, SectionHeading } from "@/components/marketing";
import { SiteChrome } from "@/components/site-chrome";
import { getArticleContent } from "@/lib/article-details";
import { resolveAbsoluteUrl } from "@/lib/seo";
import {
  articleCatalog,
  getArticleSlug,
  getSpecialtyBySlug,
  guideTopics,
  searchSuggestions,
  siteInfo,
  symptomGroups,
} from "@/lib/site-content";

const baseMetadata: Metadata = {
  title: "Kiến thức sức khỏe",
  description:
    "Thư viện bài viết y khoa của Bệnh viện Đa khoa Hồng Phúc, được tổ chức theo chuyên khoa, triệu chứng, dịch vụ và nhu cầu chăm sóc sức khỏe.",
};

const categories = Array.from(new Set(articleCatalog.map((article) => article.category)));

type InsightsPageProps = {
  searchParams: Promise<{
    query?: string;
    category?: string;
  }>;
};

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\u0111/g, "d")
    .replace(/\u0110/g, "d")
    .toLowerCase();
}

function describeArticleIntent(category: string, specialtyName?: string) {
  const normalized = category.toLowerCase();

  if (normalized.includes("triệu chứng")) {
    return "Phù hợp khi bạn đang có dấu hiệu sức khỏe nhưng chưa rõ nên bắt đầu khám từ đâu.";
  }

  if (normalized.includes("cấp cứu")) {
    return "Phù hợp để nhận biết dấu hiệu cần đến bệnh viện sớm thay vì tiếp tục theo dõi tại nhà.";
  }

  if (normalized.includes("gói khám") || normalized.includes("tầm soát")) {
    return "Phù hợp khi bạn muốn chủ động kiểm tra nguy cơ và chuẩn bị một kế hoạch tầm soát rõ ràng.";
  }

  if (normalized.includes("nhi")) {
    return "Phù hợp cho cha mẹ cần theo dõi trẻ đúng cách trước khi quyết định đưa trẻ đi khám.";
  }

  if (normalized.includes("thai") || normalized.includes("sản") || normalized.includes("phụ")) {
    return "Phù hợp cho người bệnh cần hiểu rõ lộ trình theo dõi và chuẩn bị trước buổi khám chuyên khoa.";
  }

  if (specialtyName) {
    return `Phù hợp khi bạn muốn hiểu rõ hơn về hướng tiếp cận của chuyên khoa ${specialtyName.toLowerCase()}.`;
  }

  return "Phù hợp khi bạn cần một bài viết nền tảng để chuẩn bị câu hỏi trước khi gặp bác sĩ.";
}

function describeArticleFocus(category: string, specialtyName?: string) {
  const normalized = category.toLowerCase();

  if (normalized.includes("triệu chứng")) {
    return "Dấu hiệu khởi phát, mức độ cần theo dõi và thời điểm nên gặp bác sĩ.";
  }

  if (normalized.includes("xét nghiệm") || normalized.includes("chẩn đoán")) {
    return "Chuẩn bị trước dịch vụ, hiểu mục đích chỉ định và đọc kết quả ở mức cơ bản.";
  }

  if (normalized.includes("nhi")) {
    return "Cách quan sát trẻ tại nhà, nhận biết dấu hiệu cảnh báo và chuẩn bị lần khám tiếp theo.";
  }

  if (normalized.includes("cấp cứu")) {
    return "Tín hiệu nguy hiểm, thông tin cần chuẩn bị và cách phối hợp với bệnh viện khi vào viện.";
  }

  if (specialtyName) {
    return `Những câu hỏi người bệnh thường có trước khi khám ${specialtyName.toLowerCase()}.`;
  }

  return "Các mốc cần biết trước khi bước vào một hành trình thăm khám thực tế.";
}

export async function generateMetadata({ searchParams }: InsightsPageProps): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const query = typeof resolvedSearchParams.query === "string" ? resolvedSearchParams.query.trim() : "";
  const category = typeof resolvedSearchParams.category === "string" ? resolvedSearchParams.category.trim() : "";

  if (query) {
    return {
      title: `Kết quả tìm kiếm: ${query}`,
      description: `Tra cứu bài viết, triệu chứng và chuyên khoa liên quan cho từ khóa ${query} tại Bệnh viện Đa khoa Hồng Phúc.`,
      alternates: {
        canonical: "/kien-thuc",
      },
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  if (category) {
    return {
      title: `Bài viết chủ đề ${category}`,
      description: `Xem các bài viết sức khỏe thuộc chủ đề ${category} trong thư viện y khoa của Bệnh viện Đa khoa Hồng Phúc.`,
      alternates: {
        canonical: "/kien-thuc",
      },
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  return baseMetadata;
}

export default async function InsightsPage({ searchParams }: InsightsPageProps) {
  const resolvedSearchParams = await searchParams;
  const rawQuery = typeof resolvedSearchParams.query === "string" ? resolvedSearchParams.query.trim() : "";
  const requestedCategory =
    typeof resolvedSearchParams.category === "string" ? resolvedSearchParams.category.trim() : "";
  const initialCategory = categories.includes(requestedCategory) ? requestedCategory : "Tất cả";

  const browserArticles = articleCatalog.map((article) => {
    const slug = getArticleSlug(article);
    const specialty = getSpecialtyBySlug(article.specialtySlug);
    const content = getArticleContent(slug);

    return {
      slug,
      title: content?.title ?? article.title,
      summary: content?.excerpt ?? article.summary,
      category: article.category,
      specialtyName: specialty?.name,
      readTime: article.readTime,
      intent: describeArticleIntent(article.category, specialty?.name),
      focus: describeArticleFocus(article.category, specialty?.name),
    };
  });

  const normalizedQuery = normalize(rawQuery);
  const visibleArticles = browserArticles.filter((article) => {
    const matchesCategory = initialCategory === "Tất cả" || article.category === initialCategory;
    const searchable = normalize(
      [
        article.title,
        article.summary,
        article.category,
        article.specialtyName ?? "",
        article.intent,
        article.focus,
      ].join(" "),
    );
    const matchesQuery = !normalizedQuery || searchable.includes(normalizedQuery);

    return matchesCategory && matchesQuery;
  });

  const curatedArticles = visibleArticles.length > 0 ? visibleArticles : browserArticles;
  const featuredArticle = curatedArticles[0];
  const editorPicks = curatedArticles.slice(1, 4);
  const topicClusters = categories.slice(0, 6).map((category) => ({
    category,
    count: articleCatalog.filter((article) => article.category === category).length,
    article: browserArticles.find((item) => item.category === category),
  }));

  const queryString = new URLSearchParams(
    Object.fromEntries(
      [
        rawQuery ? ["query", rawQuery] : null,
        initialCategory !== "Tất cả" ? ["category", initialCategory] : null,
      ].filter(Boolean) as Array<[string, string]>,
    ),
  ).toString();
  const pageUrl = queryString ? resolveAbsoluteUrl(`/kien-thuc?${queryString}`) : resolveAbsoluteUrl("/kien-thuc");

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": rawQuery ? "SearchResultsPage" : "CollectionPage",
      name: rawQuery ? `Kết quả tìm kiếm cho ${rawQuery}` : "Thư viện kiến thức sức khỏe",
      description:
        "Thư viện bài viết y khoa của Bệnh viện Đa khoa Hồng Phúc, được tổ chức theo chuyên khoa, triệu chứng, dịch vụ và nhu cầu chăm sóc sức khỏe.",
      url: pageUrl,
      isPartOf: {
        "@type": "WebSite",
        name: siteInfo.name,
        url: resolveAbsoluteUrl("/"),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: curatedArticles.length,
      itemListElement: curatedArticles.slice(0, 12).map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: resolveAbsoluteUrl(`/kien-thuc/${article.slug}`),
        name: article.title,
      })),
    },
  ];

  return (
    <SiteChrome>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs items={[{ label: "Trang chủ", href: "/" }, { label: "Kiến thức" }]} />
      <PageHero
        eyebrow="Thư viện y khoa"
        title="Kiến thức sức khỏe được biên tập để người bệnh đọc dễ, hiểu đúng và chuẩn bị tốt trước buổi khám."
        description="Mỗi bài viết được gắn với chuyên khoa, triệu chứng và dịch vụ liên quan, để từ việc tra cứu trên Google đến lúc đặt lịch, người bệnh vẫn thấy một hành trình rõ ràng và đáng tin cậy."
        imageSrc="/images/bedside.webp"
        imageAlt="Bác sĩ trao đổi thông tin sức khỏe với người bệnh"
        actions={[
          { href: "/dat-lich", label: "Đặt lịch cùng bác sĩ" },
          { href: "/tim-theo-trieu-chung", label: "Tìm theo triệu chứng", variant: "secondary" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="overflow-hidden rounded-[2rem] border border-[rgba(17,61,114,0.11)] bg-[linear-gradient(145deg,#ffffff_0%,#eef7ff_52%,#dcefff_100%)] p-6 shadow-[0_34px_120px_-82px_rgba(4,63,120,0.48)] sm:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-brand)]">
              Bài nổi bật
            </p>
            <h2 className="mt-5 max-w-3xl font-serif text-3xl leading-tight text-[var(--color-ink)] sm:text-[2.5rem]">
              {featuredArticle.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
              {featuredArticle.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-[var(--color-muted)]">
              <span className="rounded-full bg-white/85 px-4 py-2 font-semibold text-[var(--color-brand)]">
                {featuredArticle.category}
              </span>
              {featuredArticle.specialtyName ? (
                <span className="rounded-full bg-[var(--color-brand)] px-4 py-2 font-semibold text-white">
                  {featuredArticle.specialtyName}
                </span>
              ) : null}
              <span className="rounded-full border border-[rgba(17,61,114,0.12)] px-4 py-2">
                {featuredArticle.readTime}
              </span>
            </div>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
              {featuredArticle.intent}
            </p>
            <ActionLink href={`/kien-thuc/${featuredArticle.slug}`} className="mt-7">
              Đọc bài nổi bật
              <ArrowRight className="ml-2 h-4 w-4" />
            </ActionLink>
          </article>

          <div className="grid gap-4">
            {editorPicks.map((article, index) => (
              <article
                key={article.slug}
                className="rounded-[1.6rem] border border-[rgba(17,61,114,0.1)] bg-white/92 p-5 shadow-[0_24px_90px_-78px_rgba(4,63,120,0.2)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                    Chọn đọc {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full bg-[var(--color-mist)] px-3 py-1 text-xs font-semibold text-[var(--color-brand)]">
                    {article.readTime}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold leading-8 text-[var(--color-ink)]">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{article.focus}</p>
                <ActionLink href={`/kien-thuc/${article.slug}`} variant="ghost" className="mt-3 px-0">
                  Xem bài viết
                  <ArrowRight className="ml-2 h-4 w-4" />
                </ActionLink>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.96fr_1.04fr]">
          <SectionHeading
            eyebrow="Bắt đầu đúng cách"
            title="Người đọc mới không cần biết quá nhiều y khoa để tìm đúng bài cần đọc."
            description="Thư viện được tổ chức để người bệnh có thể đi theo từng nhu cầu rất đời thường: chuẩn bị đi khám, hiểu dịch vụ sắp làm, hoặc tra cứu triệu chứng trước khi quyết định gặp bác sĩ."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {guideTopics.map((topic) => (
              <article
                key={topic.title}
                className="rounded-[1.55rem] border border-[rgba(17,61,114,0.1)] bg-white/92 p-5"
              >
                <Sparkles className="h-6 w-6 text-[var(--color-brand)]" />
                <h3 className="mt-4 text-xl font-semibold leading-7 text-[var(--color-ink)]">
                  {topic.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{topic.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.85rem] border border-[rgba(17,61,114,0.1)] bg-white/92 p-6">
            <div className="flex items-center gap-3">
              <Search className="h-6 w-6 text-[var(--color-brand)]" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-brand)]">
                  Lối vào nhanh
                </p>
                <h2 className="mt-2 font-serif text-3xl leading-tight text-[var(--color-ink)]">
                  Tra cứu từ đúng điều người bệnh đang lo nhất
                </h2>
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {symptomGroups.slice(0, 4).map((group) => (
                <article
                  key={group.name}
                  className="rounded-[1.4rem] bg-[var(--color-mist)]/75 p-5"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                    {group.specialty}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold leading-7 text-[var(--color-ink)]">
                    {group.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{group.service}</p>
                  <ActionLink href={group.href} variant="ghost" className="mt-3 px-0">
                    Xem hướng dẫn
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </ActionLink>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-3">
              <article className="rounded-[1.6rem] border border-[rgba(17,61,114,0.1)] bg-white/88 p-5">
                <BookOpenText className="h-7 w-7 text-[var(--color-brand)]" />
                <p className="mt-4 font-serif text-5xl leading-none text-[var(--color-ink)]">{articleCatalog.length}</p>
                <p className="mt-2 text-sm font-semibold text-[var(--color-muted)]">bài viết hiện có</p>
              </article>
              <article className="rounded-[1.6rem] border border-[rgba(17,61,114,0.1)] bg-white/88 p-5">
                <FolderTree className="h-7 w-7 text-[var(--color-brand)]" />
                <p className="mt-4 font-serif text-5xl leading-none text-[var(--color-ink)]">{categories.length}</p>
                <p className="mt-2 text-sm font-semibold text-[var(--color-muted)]">cụm chủ đề</p>
              </article>
              <article className="rounded-[1.6rem] border border-[rgba(17,61,114,0.1)] bg-white/88 p-5">
                <Stethoscope className="h-7 w-7 text-[var(--color-brand)]" />
                <p className="mt-4 font-serif text-5xl leading-none text-[var(--color-ink)]">Rõ</p>
                <p className="mt-2 text-sm font-semibold text-[var(--color-muted)]">đường đi khám</p>
              </article>
            </div>

            <div className="rounded-[1.6rem] border border-[rgba(17,61,114,0.1)] bg-[var(--color-brand)] p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
                Chủ đề được quan tâm
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {searchSuggestions.map((item) => (
                  <Link
                    key={item}
                    href={`/kien-thuc?query=${encodeURIComponent(item)}`}
                    className="rounded-full bg-white/14 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/24"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[1.9rem] border border-[rgba(17,61,114,0.1)] bg-white/94 p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-brand)]">
                Cụm nội dung
              </p>
              <h2 className="mt-2 font-serif text-3xl leading-tight text-[var(--color-ink)]">
                Mỗi nhóm bài đều có thể mở rộng thành một thư viện lớn sau này
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)]">
              Từ tim mạch, ung bướu, thai sản đến chẩn đoán hình ảnh, cấu trúc hiện tại đã sẵn sàng để mở rộng thành hàng trăm nghìn bài viết mà vẫn giữ logic điều hướng rõ ràng.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {topicClusters.map((cluster) => (
              <Link
                key={cluster.category}
                href={`/kien-thuc?category=${encodeURIComponent(cluster.category)}`}
                className="rounded-[1.4rem] bg-[var(--color-mist)]/72 p-5 transition hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-[var(--color-ink)]">{cluster.category}</h3>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[var(--color-brand)]">
                    {cluster.count} bài
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {cluster.article?.focus ?? "Đang được mở rộng thêm bài nền tảng và bài chuyên sâu."}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <ArticleBrowser
          articles={browserArticles}
          categories={categories}
          initialQuery={rawQuery}
          initialCategory={initialCategory}
        />
      </section>
    </SiteChrome>
  );
}
