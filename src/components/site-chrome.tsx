import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  MessageCircleMore,
  Phone,
  Search,
} from "lucide-react";
import { ActionLink } from "@/components/marketing";
import { footerGroups, navigation, siteInfo } from "@/lib/site-content";

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden pb-24 lg:pb-0">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top_left,rgba(7,93,168,0.14),transparent_26%),radial-gradient(circle_at_top_right,rgba(16,166,178,0.11),transparent_30%)]" />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <MobileQuickBar />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[28px] border border-white/80 bg-white/92 shadow-[0_24px_80px_-54px_rgba(14,38,64,0.28)] backdrop-blur">
        <div className="hidden items-center justify-between gap-4 border-b border-[var(--color-line)] bg-[linear-gradient(90deg,rgba(7,93,168,0.05),rgba(255,255,255,0.94),rgba(16,166,178,0.04))] px-5 py-3 text-sm text-[var(--color-muted)] sm:flex">
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[var(--color-brand)]" />
              {siteInfo.address}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-[var(--color-brand)]" />
              {siteInfo.hours}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="rounded-full bg-[rgba(7,93,168,0.08)] px-3 py-1 font-semibold text-[var(--color-brand)]">
              {siteInfo.emergency}
            </span>
            <Link
              href="/huong-dan-khach-hang"
              className="inline-flex items-center gap-1 font-semibold text-[var(--color-brand)]"
            >
              Hướng dẫn khách hàng
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid gap-4 px-4 py-4 sm:px-5 sm:py-5 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center">
          <div className="space-y-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-[1rem] bg-[linear-gradient(180deg,var(--color-brand),var(--color-brand-strong))] text-base font-bold text-white shadow-[0_20px_40px_-22px_rgba(17,61,114,0.9)] sm:h-14 sm:w-14 sm:rounded-[1.2rem] sm:text-lg">
                H
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-brand)] sm:text-[11px]">
                  Bệnh viện đa khoa
                </p>
                <p className="font-serif text-[1.45rem] leading-none text-[var(--color-ink)] sm:text-[1.7rem]">
                  {siteInfo.shortName}
                </p>
              </div>
            </Link>
            <p className="hidden max-w-sm text-xs leading-5 text-[var(--color-muted)] sm:block sm:text-sm">
              {siteInfo.tagline}
            </p>
          </div>

          <nav className="hidden min-w-0 items-center justify-center gap-6 text-[15px] font-medium text-[var(--color-ink)] lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-1 py-2 transition hover:text-[var(--color-brand)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap items-center gap-3 lg:flex-nowrap lg:justify-end">
            <a
              href={`tel:${siteInfo.phone.replace(/\s+/g, "")}`}
              className="hidden items-center gap-2 rounded-full border border-[var(--color-line)] bg-white px-4 py-2.5 text-sm font-semibold text-[var(--color-brand)] xl:inline-flex"
            >
              <Phone className="h-4 w-4" />
              {siteInfo.phone}
            </a>
            <ActionLink href="/dat-lich" className="whitespace-nowrap px-4 py-2.5">
              <CalendarDays className="mr-2 h-4 w-4" />
              Đặt lịch khám
            </ActionLink>
          </div>

          <nav className="flex min-w-0 items-center gap-2 overflow-x-auto border-t border-[var(--color-line)] pt-4 text-sm font-medium text-[var(--color-ink)] whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:hidden">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-full border border-[var(--color-line)] bg-[var(--color-panel)] px-3 py-2 transition hover:border-[rgba(7,93,168,0.24)] hover:text-[var(--color-brand)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[rgba(7,63,120,0.08)] bg-[linear-gradient(180deg,rgba(243,248,252,0.4),rgba(238,246,252,0.78))]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-white/80 bg-white/84 p-6 shadow-[0_24px_80px_-60px_rgba(18,44,71,0.28)] lg:grid-cols-[1.2fr_0.7fr_0.7fr_0.9fr] lg:p-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-[linear-gradient(180deg,var(--color-brand),var(--color-brand-strong))] text-lg font-bold text-white">
                H
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-brand)]">
                  Bệnh viện đa khoa
                </p>
                <p className="font-serif text-[1.7rem] leading-none text-[var(--color-ink)]">
                  {siteInfo.shortName}
                </p>
              </div>
            </div>
            <p className="max-w-xl text-[15px] leading-7 text-[var(--color-muted)]">
              Cổng thông tin bệnh viện đa khoa quy mô lớn tại Hải Phòng, định hướng phát triển
              chuyên sâu, kết nối hợp tác quốc tế trong khu vực và mở rộng thư viện nội dung y khoa
              theo mô hình bệnh viện hiện đại.
            </p>
            <div className="space-y-2 text-sm text-[var(--color-muted)]">
              <p>{siteInfo.address}</p>
              <p>{siteInfo.phone}</p>
              <p>{siteInfo.email}</p>
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-brand)] sm:text-sm">
                {group.title}
              </p>
              <div className="space-y-3 text-sm leading-6 text-[var(--color-muted)]">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block transition hover:text-[var(--color-brand)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="rounded-[1.6rem] border border-[rgba(7,93,168,0.12)] bg-[linear-gradient(180deg,rgba(7,93,168,0.08),rgba(255,255,255,0.88))] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-brand)]">
              Tiếp nhận nhanh
            </p>
            <h3 className="mt-3 text-xl font-semibold leading-7 text-[var(--color-ink)]">
              Đặt lịch, hỏi đường đi và kết nối điều phối.
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
              Người bệnh có thể bắt đầu từ nhu cầu thực tế thay vì phải tự tìm từng chuyên khoa rời rạc.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <ActionLink href="/dat-lich" className="px-4 py-2.5">
                Đặt lịch khám
              </ActionLink>
              <ActionLink href="/lien-he" variant="secondary" className="px-4 py-2.5">
                Liên hệ điều phối
              </ActionLink>
            </div>
          </div>
        </div>

        <div className="px-1 pt-5 text-sm text-[var(--color-muted)]">
          © 2026 Bệnh viện Đa khoa Hồng Phúc. Thông tin trên website phục vụ giới thiệu hệ thống, chuyên khoa và thư viện nội dung sức khỏe.
        </div>
      </div>
    </footer>
  );
}

function MobileQuickBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[rgba(16,57,68,0.08)] bg-white/96 px-3 py-3 shadow-[0_-18px_36px_-24px_rgba(19,35,48,0.35)] backdrop-blur lg:hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-4 gap-2">
        <QuickBarLink href={`tel:${siteInfo.phone.replace(/\s+/g, "")}`} label="Gọi" icon={Phone} />
        <QuickBarLink href="/dat-lich" label="Đặt lịch" icon={CalendarDays} />
        <QuickBarLink href="/tim-bac-si" label="Bác sĩ" icon={Search} />
        <QuickBarLink href="/lien-he" label="Zalo/Map" icon={MessageCircleMore} />
      </div>
    </div>
  );
}

function QuickBarLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: typeof Phone;
}) {
  const isExternalCall = href.startsWith("tel:");

  if (isExternalCall) {
    return (
      <a
        href={href}
        className="inline-flex flex-col items-center justify-center gap-1 rounded-2xl border border-[rgba(16,57,68,0.08)] bg-[var(--color-paper)] px-2 py-3 text-center text-[11px] font-semibold text-[var(--color-brand)]"
      >
        <Icon className="h-4 w-4" />
        <span>{label}</span>
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="inline-flex flex-col items-center justify-center gap-1 rounded-2xl border border-[rgba(16,57,68,0.08)] bg-[var(--color-paper)] px-2 py-3 text-center text-[11px] font-semibold text-[var(--color-brand)]"
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </Link>
  );
}
