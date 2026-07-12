import Link from "next/link";
import { SiteChrome } from "@/components/site-chrome";

export default function NotFound() {
  return (
    <SiteChrome>
      <section className="mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-brand)]">
          404
        </p>
        <h1 className="mt-4 font-serif text-5xl text-[var(--color-ink)] sm:text-6xl">
          Trang bạn tìm không còn ở đây.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
          Bạn có thể quay về trang chủ, tìm chuyên khoa phù hợp hoặc liên hệ trực tiếp để được
          hướng dẫn nhanh hơn.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-5 py-3 text-sm font-semibold text-white"
          >
            Về trang chủ
          </Link>
          <Link
            href="/lien-he"
            className="inline-flex items-center justify-center rounded-full border border-[rgba(16,57,68,0.12)] bg-white px-5 py-3 text-sm font-semibold text-[var(--color-brand)]"
          >
            Liên hệ hỗ trợ
          </Link>
        </div>
      </section>
    </SiteChrome>
  );
}
