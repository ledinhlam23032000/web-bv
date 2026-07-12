import type { Metadata } from "next";
import { PageHero } from "@/components/marketing";
import { SiteChrome } from "@/components/site-chrome";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { aestheticServices } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Trung tâm phẫu thuật tạo hình thẩm mỹ",
  description:
    "Hướng trình bày dịch vụ thẩm mỹ theo cách kín đáo, tinh tế và đáng tin trong hệ sinh thái Hồng Phúc.",
};

export default function AestheticPage() {
  return (
    <SiteChrome>
      <Breadcrumbs
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Trung tâm phẫu thuật tạo hình thẩm mỹ" },
        ]}
      />
      <PageHero
        eyebrow="Trung tâm thẩm mỹ"
        title="Nhóm dịch vụ thẩm mỹ cần một giọng điệu riêng: kín đáo hơn, tinh tế hơn, nhưng vẫn rõ chuyên môn."
        description="Trang này giúp Hồng Phúc tách bạch mạch trải nghiệm thẩm mỹ khỏi luồng khám chữa bệnh đại trà, đồng thời giữ cùng một chuẩn mực thương hiệu và niềm tin."
        imageSrc="/images/consultation.webp"
        imageAlt="Tư vấn riêng tư"
        actions={[
          { href: "/lien-he", label: "Gửi yêu cầu tư vấn" },
          { href: "/dat-lich", label: "Đặt lịch kín đáo", variant: "secondary" },
        ]}
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {aestheticServices.map((service) => (
            <article
              key={service.name}
              className="rounded-[32px] border border-white/70 bg-white/82 p-6 shadow-[0_24px_90px_-68px_rgba(19,35,48,0.5)]"
            >
              <h2 className="font-serif text-3xl leading-tight text-[var(--color-ink)]">{service.name}</h2>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{service.description}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteChrome>
  );
}
