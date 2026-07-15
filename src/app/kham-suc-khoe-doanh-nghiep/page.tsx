import type { Metadata } from "next";
import { PageHero } from "@/components/marketing";
import { SiteChrome } from "@/components/site-chrome";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { enterprisePrograms } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Khám sức khỏe doanh nghiệp",
  description: "Chương trình khám sức khỏe theo đoàn và tư vấn gói khám phù hợp cho doanh nghiệp.",
};

export default function EnterpriseHealthPage() {
  return (
    <SiteChrome>
      <Breadcrumbs
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Khám sức khỏe doanh nghiệp" },
        ]}
      />
      <PageHero
        eyebrow="Khối doanh nghiệp"
        title="Khám sức khỏe doanh nghiệp được tổ chức gọn, linh hoạt và dễ theo dõi."
        description="Hồng Phúc tư vấn danh mục khám theo độ tuổi, tính chất công việc và quy mô nhân sự; đồng thời hỗ trợ xếp lịch, trả kết quả và báo cáo sức khỏe tổng hợp."
        imageSrc="/images/building.webp"
        imageAlt="Không gian bệnh viện và doanh nghiệp"
        actions={[
          { href: "/lien-he", label: "Gửi yêu cầu báo giá" },
          { href: "/dat-lich", label: "Đặt lịch tư vấn", variant: "secondary" },
        ]}
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {enterprisePrograms.map((program) => (
            <article
              key={program.name}
              className="rounded-[32px] border border-white/70 bg-white/82 p-6 shadow-[0_24px_90px_-68px_rgba(19,35,48,0.5)]"
            >
              <h2 className="font-serif text-3xl leading-tight text-[var(--color-ink)]">{program.name}</h2>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{program.description}</p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--color-ink)]">
                {program.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </SiteChrome>
  );
}
