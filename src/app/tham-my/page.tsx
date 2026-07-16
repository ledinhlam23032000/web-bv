import type { Metadata } from "next";
import { PageHero } from "@/components/marketing";
import { SiteChrome } from "@/components/site-chrome";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { getCmsContent, getCmsPageMetadata, resolveCmsHero } from "@/lib/cms-content";

export async function generateMetadata(): Promise<Metadata> {
  return getCmsPageMetadata("tham-my", { title: "Khoa Tạo hình thẩm mỹ", description: "Dịch vụ phẫu thuật tạo hình và thẩm mỹ tại Bệnh viện Đa khoa Hồng Phúc, chú trọng an toàn, riêng tư và tư vấn rõ ràng." });
}

export default async function AestheticPage() {
  const { aestheticServices, pages } = await getCmsContent();
  const hero = resolveCmsHero(pages["tham-my"] ?? null, { eyebrow: "Khoa Tạo hình thẩm mỹ", title: "Phẫu thuật tạo hình và thẩm mỹ trong môi trường bệnh viện đa khoa.", description: "Mỗi trường hợp được bác sĩ thăm khám riêng, đánh giá sức khỏe và lập kế hoạch chăm sóc sau phẫu thuật.", imageSrc: "/images/consultation.webp", imageAlt: "Tư vấn riêng tư", actions: [{ href: "/lien-he", label: "Gửi yêu cầu tư vấn" }, { href: "/dat-lich", label: "Đặt lịch tư vấn riêng", variant: "secondary" }] });
  return (
    <SiteChrome>
      <Breadcrumbs
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Khoa Tạo hình thẩm mỹ" },
        ]}
      />
      <PageHero {...hero} />
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
