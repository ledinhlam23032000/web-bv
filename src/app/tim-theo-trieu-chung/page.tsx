import type { Metadata } from "next";
import { ActionLink, PageHero } from "@/components/marketing";
import { SiteChrome } from "@/components/site-chrome";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { symptomGroups } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Tìm theo triệu chứng",
  description:
    "Gợi ý chuyên khoa và dịch vụ phù hợp theo nhóm triệu chứng thường gặp.",
};

export default function SymptomPage() {
  return (
    <SiteChrome>
      <Breadcrumbs
        items={[{ label: "Trang chủ", href: "/" }, { label: "Tìm theo triệu chứng" }]}
      />
      <PageHero
        eyebrow="Bắt đầu từ điều người bệnh đang gặp"
        title="Chưa biết nên khám khoa nào? Hãy bắt đầu từ triệu chứng."
        description="Các nhóm triệu chứng dưới đây giúp người bệnh định hướng chuyên khoa, dịch vụ liên quan và bước tiếp theo trước khi đặt lịch khám."
        imageSrc="/images/consultation.webp"
        imageAlt="Tư vấn trước thăm khám"
        actions={[
          { href: "/dat-lich", label: "Đặt lịch theo nhu cầu" },
          { href: "/tim-bac-si", label: "Tìm bác sĩ trước", variant: "secondary" },
        ]}
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          {symptomGroups.map((group, index) => (
            <article
              key={group.name}
              id={group.href.split("#")[1]}
              className="rounded-[32px] border border-[rgba(7,93,168,0.1)] bg-white p-6 shadow-[0_24px_90px_-68px_rgba(4,63,120,0.45)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                Nhóm triệu chứng {index + 1}
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--color-ink)]">
                {group.name}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                Chuyên khoa phù hợp: <span className="font-semibold text-[var(--color-ink)]">{group.specialty}</span>
              </p>
              <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                Dịch vụ nên tham khảo: {group.service}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ActionLink href="/chuyen-khoa">Xem chuyên khoa</ActionLink>
                <ActionLink href="/dich-vu" variant="secondary">
                  Xem dịch vụ
                </ActionLink>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteChrome>
  );
}
