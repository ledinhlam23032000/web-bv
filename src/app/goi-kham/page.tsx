import type { Metadata } from "next";
import { CheckCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ActionLink, PageHero } from "@/components/marketing";
import { SiteChrome } from "@/components/site-chrome";
import { packageOptions } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Gói khám",
  description: "Các gói khám sức khỏe tại Bệnh viện Đa khoa Hồng Phúc.",
};

export default function PackagesPage() {
  return (
    <SiteChrome>
      <Breadcrumbs items={[{ label: "Trang chủ", href: "/" }, { label: "Gói khám" }]} />
      <PageHero
        eyebrow="Gói khám và chương trình chăm sóc"
        title="Lộ trình kiểm tra sức khỏe được xây dựng theo từng nhóm nhu cầu."
        description="Hồng Phúc tổ chức các gói khám cho cá nhân, phụ nữ, nhóm nguy cơ ung bướu, người bận rộn và doanh nghiệp, với tư vấn trước khám và hướng dẫn sau khi có kết quả."
        imageSrc="/images/consultation.webp"
        imageAlt="Tư vấn về gói khám sức khỏe"
        actions={[
          { href: "/dat-lich", label: "Đặt lịch theo gói khám" },
          { href: "/lien-he", label: "Nhận tư vấn riêng", variant: "secondary" },
        ]}
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {packageOptions.map((pkg) => (
            <article
              key={pkg.name}
              className="rounded-[34px] border border-[rgba(7,93,168,0.1)] bg-white p-6 shadow-[0_24px_90px_-68px_rgba(4,63,120,0.48)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                Gói dịch vụ nổi bật
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-[var(--color-ink)]">
                {pkg.name}
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{pkg.description}</p>
              <ul className="mt-6 space-y-3">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-7 text-[var(--color-ink)]">
                    <CheckCheck className="mt-1 h-4 w-4 text-[var(--color-brand)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <ActionLink href="/dat-lich">Đặt lịch ngay</ActionLink>
          <ActionLink href="/dich-vu" variant="secondary">
            Xem dịch vụ liên quan
          </ActionLink>
        </div>
      </section>
    </SiteChrome>
  );
}
