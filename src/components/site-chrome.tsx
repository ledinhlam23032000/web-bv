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
import { QuickBookingWidget } from "@/components/quick-booking-widget";
import { footerGroups, navigation, siteInfo, specialties } from "@/lib/site-content";

const specialtyLinks = specialties;

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--color-paper)] pb-20 text-[var(--color-ink)] lg:pb-0">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <MobileQuickBar />
      <QuickBookingWidget />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-white/96 backdrop-blur">
      <div className="bg-[var(--color-brand-deep)] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs sm:px-6 lg:px-8">
          <div className="hidden min-w-0 items-center gap-5 md:flex">
            <span className="inline-flex min-w-0 items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" />
              <span className="truncate">{siteInfo.address}</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock3 className="h-4 w-4" />
              {siteInfo.hours}
            </span>
          </div>
          <div className="flex w-full items-center justify-between gap-4 md:w-auto md:justify-end">
            <Link href="/tim-bac-si" className="font-semibold">
              Tìm bác sĩ
            </Link>
            <Link href="/lien-he" className="inline-flex items-center gap-1 font-semibold">
              Hỗ trợ người bệnh
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-20 items-center gap-5">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[linear-gradient(135deg,var(--color-brand),var(--color-accent))] text-lg font-bold text-white shadow-[0_16px_34px_-26px_rgba(0,104,132,0.8)]">
              H
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase text-[var(--color-brand)]">
                Bệnh viện đa khoa
              </p>
              <p className="truncate font-serif text-2xl font-semibold leading-none text-[var(--color-ink)]">
                {siteInfo.shortName}
              </p>
            </div>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-7 text-sm font-semibold text-[var(--color-ink)] lg:flex">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="py-7 transition hover:text-[var(--color-brand)]">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto hidden min-w-[300px] items-center gap-2 rounded-lg border border-[var(--color-line)] bg-[var(--color-panel)] px-3 py-2 text-sm text-[var(--color-muted)] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] xl:flex">
            <Search className="h-4 w-4 text-[var(--color-brand)]" />
            <span>Tìm kiếm khoa, bác sĩ, bài viết...</span>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href={`tel:${siteInfo.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-line)] px-3 py-2 text-sm font-bold text-[var(--color-brand)] transition hover:border-[rgba(6,72,96,0.28)] hover:bg-[var(--color-panel)]"
            >
              <Phone className="h-4 w-4" />
              {siteInfo.phone}
            </a>
            <ActionLink href="/dat-lich" className="rounded-full px-5 py-3">
              <CalendarDays className="mr-2 h-4 w-4" />
              Đặt lịch
            </ActionLink>
          </div>
        </div>

        <nav className="flex gap-2 overflow-x-auto border-t border-[var(--color-line)] py-3 text-sm font-semibold whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:hidden">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="shrink-0 rounded-lg bg-[var(--color-panel)] px-3 py-2 transition hover:bg-[var(--color-mist)]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden border-t border-[var(--color-line)] py-3 lg:block">
          <div className="flex items-center gap-4 overflow-x-auto text-sm text-[var(--color-muted)] whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <span className="font-bold text-[var(--color-brand)]">17 khoa chuyên môn</span>
            {specialtyLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-[var(--color-brand)]">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[var(--color-line)] bg-[linear-gradient(180deg,var(--color-brand-deep),#042f3f)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.3fr_0.7fr_0.7fr_0.9fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-lg font-bold text-[var(--color-brand)]">
              H
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-white/70">Bệnh viện đa khoa</p>
              <p className="text-2xl font-bold leading-none">{siteInfo.shortName}</p>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/76">
            Bệnh viện đa khoa tại Hải Phòng với 17 khoa chuyên môn, tăng cường hợp tác trong khu vực
            và đồng hành cùng người bệnh trong suốt quá trình chăm sóc.
          </p>
          <div className="mt-5 space-y-2 text-sm text-white/74">
            <p>{siteInfo.address}</p>
            <p>{siteInfo.phone}</p>
            <p>{siteInfo.email}</p>
          </div>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title}>
            <p className="text-sm font-bold uppercase text-white">{group.title}</p>
            <div className="mt-4 space-y-3 text-sm text-white/72">
              {group.links.map((link) => (
                <Link key={link.href} href={link.href} className="block hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div className="rounded-lg border border-white/10 bg-white/8 p-5">
          <p className="text-sm font-bold uppercase text-white">Hỗ trợ nhanh</p>
          <h3 className="mt-3 text-xl font-bold leading-7">Đặt lịch, hỏi đường đi hoặc nhận hướng dẫn trước khi khám.</h3>
          <div className="mt-5 flex flex-wrap gap-2">
            <ActionLink href="/dat-lich" variant="contrast" className="rounded-full px-4 py-2.5">
              Đặt lịch khám
            </ActionLink>
            <ActionLink href="/lien-he" variant="ghost" className="rounded-lg px-4 py-2.5 text-white hover:bg-white/10">
              Liên hệ
            </ActionLink>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-sm text-white/58">
        © 2026 Bệnh viện Đa khoa Hồng Phúc. Nội dung sức khỏe chỉ có giá trị tham khảo và không thay thế chẩn đoán của bác sĩ.
      </div>
    </footer>
  );
}

function MobileQuickBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--color-line)] bg-white/96 px-3 py-2 shadow-[0_-12px_28px_-24px_rgba(19,35,48,0.5)] backdrop-blur lg:hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-4 gap-2">
        <QuickBarLink href={`tel:${siteInfo.phone.replace(/\s+/g, "")}`} label="Gọi" icon={Phone} />
        <QuickBarLink href="/dat-lich" label="Đặt lịch" icon={CalendarDays} />
        <QuickBarLink href="/tim-bac-si" label="Bác sĩ" icon={Search} />
        <QuickBarLink href="/lien-he" label="Liên hệ" icon={MessageCircleMore} />
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
  const className =
    "inline-flex flex-col items-center justify-center gap-1 rounded-lg bg-[var(--color-panel)] px-2 py-2 text-center text-[11px] font-bold text-[var(--color-brand)] transition active:bg-[var(--color-mist)]";

  if (href.startsWith("tel:")) {
    return (
      <a href={href} className={className}>
        <Icon className="h-4 w-4" />
        <span>{label}</span>
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </Link>
  );
}
