"use client";

import Link from "next/link";
import { ArrowRight, Search, SlidersHorizontal, Sparkles } from "lucide-react";
import { useDeferredValue, useMemo, useState } from "react";

const ALL_CATEGORY = "Tất cả";

export type ArticleBrowserItem = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  specialtyName?: string;
  readTime: string;
  intent: string;
  focus: string;
};

type ArticleBrowserProps = {
  articles: ArticleBrowserItem[];
  categories: string[];
  initialQuery?: string;
  initialCategory?: string;
};

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\u0111/g, "d")
    .replace(/\u0110/g, "d")
    .toLowerCase();
}

export function ArticleBrowser({
  articles,
  categories,
  initialQuery = "",
  initialCategory = ALL_CATEGORY,
}: ArticleBrowserProps) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const deferredQuery = useDeferredValue(query);

  const filteredArticles = useMemo(() => {
    const normalizedQuery = normalize(deferredQuery.trim());

    return articles.filter((article) => {
      const matchesCategory = category === ALL_CATEGORY || article.category === category;
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
  }, [articles, category, deferredQuery]);

  return (
    <section className="mt-10">
      <div className="rounded-[1.9rem] border border-[rgba(17,61,114,0.1)] bg-white/94 p-4 shadow-[0_24px_90px_-78px_rgba(4,63,120,0.32)] sm:p-5">
        <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
          <label className="flex min-h-14 items-center gap-3 rounded-full bg-[var(--color-mist)] px-5 text-[var(--color-muted)]">
            <Search className="h-5 w-5 shrink-0 text-[var(--color-brand)]" />
            <span className="sr-only">Tìm bài viết</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Tìm theo triệu chứng, bệnh lý, chuyên khoa..."
              className="w-full bg-transparent text-sm font-medium text-[var(--color-ink)] outline-none placeholder:text-[var(--color-muted)] sm:text-base"
            />
          </label>
          <div className="flex items-center gap-2 rounded-full border border-[rgba(17,61,114,0.1)] bg-white px-4 py-3 text-sm font-semibold text-[var(--color-brand)]">
            <SlidersHorizontal className="h-4 w-4" />
            {filteredArticles.length} bài phù hợp
          </div>
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {[ALL_CATEGORY, ...categories].map((item) => {
            const isActive = item === category;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={[
                  "shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition",
                  isActive
                    ? "bg-[var(--color-brand)] text-white"
                    : "bg-[var(--color-mist)] text-[var(--color-brand)] hover:bg-[var(--color-brand-soft)]",
                ].join(" ")}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredArticles.map((article, index) => (
          <article
            key={article.slug}
            className="group rounded-[1.55rem] border border-[rgba(17,61,114,0.1)] bg-white/94 p-5 shadow-[0_24px_90px_-76px_rgba(22,32,43,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_90px_-70px_rgba(17,61,114,0.28)]"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-3">
                <span className="inline-flex rounded-full bg-[var(--color-mist)] px-3 py-1 text-sm font-semibold text-[var(--color-brand)]">
                  {article.category}
                </span>
                {article.specialtyName ? (
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]/70">
                    {article.specialtyName}
                  </p>
                ) : null}
              </div>
              <span className="rounded-full border border-[rgba(17,61,114,0.08)] px-3 py-1 text-xs font-semibold text-[var(--color-muted)]">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h2 className="mt-4 text-xl font-bold leading-8 text-[var(--color-ink)] transition group-hover:text-[var(--color-brand)]">
              {article.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{article.intent}</p>
            <p className="mt-4 line-clamp-4 text-sm leading-7 text-[var(--color-muted)]">
              {article.summary}
            </p>

            <div className="mt-5 rounded-[1.2rem] bg-[var(--color-mist)]/75 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-brand)]">
                <Sparkles className="h-4 w-4" />
                Phù hợp để bắt đầu từ
              </div>
              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{article.focus}</p>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-[var(--color-muted)]">
              <span>{article.readTime}</span>
              {article.specialtyName ? <span>{article.specialtyName}</span> : null}
            </div>

            <Link
              href={`/kien-thuc/${article.slug}`}
              className="mt-5 inline-flex items-center rounded-full border border-transparent px-0 py-2 text-sm font-semibold text-[var(--color-brand)] transition hover:border-[rgba(17,61,114,0.08)] hover:px-3"
            >
              Đọc bài viết
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>

      {filteredArticles.length === 0 ? (
        <div className="mt-8 rounded-[1.5rem] border border-[rgba(17,61,114,0.1)] bg-white/92 p-8 text-center">
          <p className="text-lg font-semibold text-[var(--color-ink)]">Chưa tìm thấy bài viết phù hợp</p>
          <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
            Hãy thử nhập triệu chứng ngắn hơn hoặc chọn lại nhóm chủ đề để hệ thống gợi ý sát hơn.
          </p>
        </div>
      ) : null}
    </section>
  );
}
