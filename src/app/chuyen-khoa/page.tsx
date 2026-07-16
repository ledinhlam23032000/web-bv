import type { Metadata } from "next";
import Image from "next/image";
import {
  Activity,
  ArrowRight,
  HeartPulse,
  ScanHeart,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UsersRound,
} from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ActionLink, PageHero, SectionHeading } from "@/components/marketing";
import { SiteChrome } from "@/components/site-chrome";
import { getCmsContent, getCmsPageMetadata, resolveCmsHero } from "@/lib/cms-content";

export async function generateMetadata(): Promise<Metadata> {
  return getCmsPageMetadata("chuyen-khoa", { title: "Hệ thống 17 khoa chuyên môn", description: "Tìm hiểu 17 khoa chuyên môn và các lĩnh vực chuyên sâu tại Bệnh viện Đa khoa Hồng Phúc." });
}

const specialtyIcons = [
  HeartPulse,
  Stethoscope,
  Sparkles,
  UsersRound,
  ScanHeart,
  ShieldCheck,
  Activity,
  ScanHeart,
];

const specialtyGroups = [
  {
    name: "Khối lâm sàng",
    description: "Trực tiếp thăm khám, điều trị, theo dõi và phục hồi cho người bệnh.",
  },
  {
    name: "Khối cận lâm sàng",
    description: "Cung cấp kết quả xét nghiệm và hình ảnh để hỗ trợ bác sĩ chẩn đoán, theo dõi điều trị.",
  },
  {
    name: "Khối hỗ trợ điều trị và an toàn",
    description: "Bảo đảm thuốc, gây mê hồi sức và phòng ngừa nhiễm khuẩn trong toàn bệnh viện.",
  },
];

const pathwayGuides = [
  "Chưa rõ nên khám ở đâu: bắt đầu từ Khoa Nội hoặc mô tả triệu chứng khi đặt lịch.",
  "Có dấu hiệu nguy hiểm: đến Khoa Hồi sức cấp cứu hoặc gọi bệnh viện để được hướng dẫn ngay.",
  "Đã có chỉ định: chọn đúng khoa trên phiếu và mang theo kết quả, đơn thuốc, phim chụp cũ.",
];

export default async function SpecialtiesPage() {
  const { articleCatalog, medicalServices, pages, specialties } = await getCmsContent();
  const getServicesBySpecialty = (slug: string) => medicalServices.filter((service) => service.specialtySlug === slug);
  const getArticlesBySpecialty = (slug: string) => articleCatalog.filter((article) => article.specialtySlug === slug);
  const overviewStats = [
    { value: `${specialties.length}`, label: "khoa chuyên môn", description: "Cơ cấu đúng theo hoạt động hiện có của Bệnh viện Đa khoa Hồng Phúc." },
    { value: `${specialtyGroups.length}`, label: "khối phối hợp", description: "Lâm sàng, cận lâm sàng và hỗ trợ điều trị cùng kết nối quanh người bệnh." },
    { value: `${articleCatalog.length}`, label: "bài viết sức khỏe", description: "Được phân lại theo khoa chủ quản và lĩnh vực chuyên sâu để dễ tìm kiếm." },
  ];
  const hero = resolveCmsHero(pages["chuyen-khoa"] ?? null, {
    eyebrow: "Hệ thống chuyên khoa",
    title: "17 khoa chuyên môn cùng phối hợp trong một hành trình chăm sóc.",
    description: "Tìm hiểu phạm vi chuyên môn, dịch vụ, bác sĩ và kiến thức sức khỏe của từng khoa.",
    imageSrc: "/images/doctor-team-premium.webp",
    imageAlt: "Hệ thống chuyên khoa Bệnh viện Đa khoa Hồng Phúc",
    actions: [{ href: "/dat-lich", label: "Đặt lịch khám" }, { href: "/tim-theo-trieu-chung", label: "Tìm theo triệu chứng", variant: "secondary" }],
  });
  const internalMedicine = specialties.find((specialty) => specialty.slug === "noi");

  return (
    <SiteChrome>
      <Breadcrumbs items={[{ label: "Trang chủ", href: "/" }, { label: "Chuyên khoa" }]} />
      <PageHero {...hero} />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {overviewStats.map((item) => (
            <article
              key={item.label}
              className="premium-hover-card rounded-lg border border-[var(--color-line)] bg-white/92 p-5 shadow-[var(--shadow-soft)]"
            >
              <p className="font-serif text-[2.15rem] leading-none text-[var(--color-brand)]">{item.value}</p>
              <h2 className="mt-3 text-lg font-semibold text-[var(--color-ink)]">{item.label}</h2>
              <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.06fr_0.94fr]">
          {internalMedicine ? (
            <article className="relative overflow-hidden rounded-lg bg-[linear-gradient(135deg,var(--color-brand-deep),var(--color-brand),#0e7dc8)] p-6 text-white shadow-[var(--shadow-lift)] sm:p-8">
              <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
              <p className="relative text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                Khoa đa lĩnh vực
              </p>
              <h2 className="relative mt-3 font-serif text-4xl leading-tight sm:text-5xl">Khoa Nội</h2>
              <p className="relative mt-4 max-w-3xl text-base leading-8 text-white/78">
                {internalMedicine.overview}
              </p>
              <div className="relative mt-6 flex flex-wrap gap-2">
                {internalMedicine.focusAreas.map((area) => (
                  <span key={area} className="rounded-full border border-white/18 bg-white/10 px-3.5 py-2 text-sm font-semibold">
                    {area}
                  </span>
                ))}
              </div>
              <div className="relative mt-7 flex flex-wrap gap-3">
                <ActionLink href={internalMedicine.href} variant="contrast">
                  Xem Khoa Nội
                  <ArrowRight className="ml-2 h-4 w-4" />
                </ActionLink>
                <ActionLink href="/dat-lich" variant="secondary">
                  Đặt lịch Khoa Nội
                </ActionLink>
              </div>
            </article>
          ) : null}

          <article className="rounded-lg border border-[var(--color-line)] bg-[linear-gradient(145deg,rgba(0,135,165,0.08),rgba(255,255,255,0.98))] p-6 shadow-[var(--shadow-soft)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-brand)]">
              Chọn điểm bắt đầu
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-8 text-[var(--color-ink)]">
              Không chắc nên vào khoa nào cũng không sao.
            </h2>
            <div className="mt-5 space-y-3">
              {pathwayGuides.map((item, index) => (
                <div key={item} className="flex gap-3 rounded-lg bg-white/90 p-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)] text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-7 text-[var(--color-muted)]">{item}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="border-y border-[var(--color-line)] bg-[var(--color-panel)]/72">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Danh mục khoa"
            title="17 khoa được sắp xếp theo vai trò trong hành trình điều trị."
            description="Mỗi trang khoa giới thiệu phạm vi chuyên môn, dấu hiệu thường gặp, dịch vụ, bác sĩ và bài viết liên quan."
          />

          <div className="mt-10 space-y-12">
            {specialtyGroups.map((group) => {
              const departments = specialties.filter((specialty) => specialty.group === group.name);

              return (
                <section key={group.name}>
                  <div className="mb-5 flex flex-col gap-2 border-b border-[var(--color-line)] pb-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h2 className="text-2xl font-semibold text-[var(--color-ink)]">{group.name}</h2>
                      <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{group.description}</p>
                    </div>
                    <span className="text-sm font-semibold text-[var(--color-brand)]">{departments.length} khoa</span>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {departments.map((specialty, index) => {
                      const Icon = specialtyIcons[(specialties.indexOf(specialty) + index) % specialtyIcons.length];
                      const services = getServicesBySpecialty(specialty.slug);
                      const articles = getArticlesBySpecialty(specialty.slug);

                      return (
                        <article
                          key={specialty.slug}
                          id={specialty.slug}
                          className="premium-hover-card group overflow-hidden rounded-lg border border-[var(--color-line)] bg-white/94 shadow-[var(--shadow-soft)]"
                        >
                          <div className="relative h-40 overflow-hidden bg-[var(--color-mist)]">
                            <Image
                              src={specialty.heroImage}
                              alt={specialty.name}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                              className="object-cover transition duration-700 group-hover:scale-[1.04]"
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(5,44,58,0.48))]" />
                            <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/92 text-[var(--color-brand)] shadow-lg">
                              <Icon className="h-5 w-5" />
                            </div>
                          </div>

                          <div className="p-5">
                            <h3 className="text-2xl font-semibold leading-tight text-[var(--color-ink)]">
                              {specialty.name}
                            </h3>
                            <p className="mt-3 min-h-20 text-sm leading-7 text-[var(--color-muted)]">
                              {specialty.description}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                              {specialty.focusAreas.slice(0, 3).map((area) => (
                                <span key={area} className="rounded-md bg-[var(--color-mist)] px-2.5 py-1.5 text-xs font-semibold text-[var(--color-brand)]">
                                  {area}
                                </span>
                              ))}
                              {specialty.focusAreas.length > 3 ? (
                                <span className="rounded-md border border-[var(--color-line)] px-2.5 py-1.5 text-xs font-semibold text-[var(--color-muted)]">
                                  +{specialty.focusAreas.length - 3}
                                </span>
                              ) : null}
                            </div>

                            <div className="mt-5 flex items-center justify-between border-t border-[var(--color-line)] pt-4">
                              <p className="text-xs font-semibold text-[var(--color-muted)]">
                                {services.length} dịch vụ · {articles.length} bài viết
                              </p>
                              <ActionLink href={specialty.href} variant="ghost" className="px-0">
                                Xem khoa
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </ActionLink>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-[linear-gradient(135deg,var(--color-brand-deep),var(--color-brand),#0e7dc8)] p-6 text-white shadow-[var(--shadow-lift)] sm:p-8 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">Cần hỗ trợ chọn khoa</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-[2.35rem]">
              Hãy mô tả triệu chứng, chúng tôi sẽ hướng dẫn điểm bắt đầu.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/76 sm:text-base">
              Bộ phận tiếp nhận có thể tư vấn khoa phù hợp trước khi bạn đến viện, đặc biệt khi triệu chứng liên quan đến nhiều lĩnh vực.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 lg:mt-0">
            <ActionLink href="/tim-theo-trieu-chung" variant="contrast">
              Tìm theo triệu chứng
            </ActionLink>
            <ActionLink href="/dat-lich" variant="secondary">
              Đặt lịch khám
            </ActionLink>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
