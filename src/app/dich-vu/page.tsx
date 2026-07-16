import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, ClipboardList, SearchCheck, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ActionLink, PageHero, SectionHeading } from "@/components/marketing";
import { SiteChrome } from "@/components/site-chrome";
import { getCmsContent, getCmsPageMetadata, resolveCmsHero } from "@/lib/cms-content";

export async function generateMetadata(): Promise<Metadata> {
  return getCmsPageMetadata("dich-vu", { title: "Dịch vụ y tế", description: "Danh mục dịch vụ y tế tại Bệnh viện Đa khoa Hồng Phúc, được sắp xếp theo chuyên khoa và nhu cầu thăm khám." });
}

const servicePillars = [
  {
    icon: SearchCheck,
    title: "Đúng chỉ định",
    description: "Bác sĩ chỉ định dịch vụ dựa trên triệu chứng và tình trạng cụ thể, tránh thực hiện kiểm tra không cần thiết.",
  },
  {
    icon: ClipboardList,
    title: "Chuẩn bị rõ ràng",
    description: "Người bệnh cần biết trước có phải nhịn ăn, mang kết quả cũ hay sắp xếp người thân đi cùng hay không.",
  },
  {
    icon: ShieldCheck,
    title: "Đi tiếp sau kết quả",
    description: "Sau khi có kết quả, người bệnh được giải thích và hướng dẫn tái khám, chuyển chuyên khoa hoặc theo dõi tại nhà.",
  },
];

const serviceVisuals = [
  "/images/consultation-premium.webp",
  "/images/diagnostic-imaging-premium.webp",
  "/images/medical-council-premium.webp",
  "/images/pediatrics-consultation-premium.webp",
  "/images/facility.webp",
  "/images/bedside.webp",
  "/images/hospital-lobby-premium.webp",
  "/images/medical-leadership.webp",
];

export default async function ServicesPage() {
  const { medicalServices, specialties } = await getCmsContent();
  const getSpecialtyBySlug = (slug: string) => specialties.find((specialty) => specialty.slug === slug);
  const { pages } = await getCmsContent();
  const hero = resolveCmsHero(pages["dich-vu"] ?? null, {
    eyebrow: "Dịch vụ y tế",
    title: "Hiểu rõ dịch vụ trước khi đặt lịch khám.",
    description: "Tìm hiểu dịch vụ phù hợp với ai, cần chuẩn bị gì, được thực hiện như thế nào và chuyên khoa nào phụ trách.",
    imageSrc: "/images/facility.webp",
    imageAlt: "Cơ sở vật chất y tế tại Bệnh viện Đa khoa Hồng Phúc",
    actions: [{ href: "/dat-lich", label: "Đặt lịch tư vấn" }, { href: "/tim-theo-trieu-chung", label: "Tìm theo triệu chứng", variant: "secondary" }],
  });
  return (
    <SiteChrome>
      <Breadcrumbs items={[{ label: "Trang chủ", href: "/" }, { label: "Dịch vụ y tế" }]} />
      <PageHero {...hero} />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {servicePillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article
                key={pillar.title}
                className="premium-hover-card rounded-lg border border-[var(--color-line)] bg-white/90 p-5 shadow-[var(--shadow-soft)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-mist)] text-[var(--color-brand)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-xl font-semibold text-[var(--color-ink)]">{pillar.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{pillar.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Danh mục dịch vụ"
            title="Chọn dịch vụ theo nhu cầu thăm khám của bạn."
            description="Mỗi dịch vụ đều nêu rõ đối tượng phù hợp, cách chuẩn bị và chuyên khoa liên quan để bạn dễ lựa chọn hơn."
          />
          <div className="flex flex-wrap gap-2">
            {specialties.slice(0, 6).map((specialty) => (
              <span
                key={specialty.slug}
                className="rounded-md border border-[var(--color-line)] bg-white px-3 py-1.5 text-xs font-semibold text-[var(--color-brand)]"
              >
                {specialty.name}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-3">
          {medicalServices.map((service, index) => {
            const specialty = getSpecialtyBySlug(service.specialtySlug);

            return (
              <article
                key={service.slug}
                className="premium-hover-card overflow-hidden rounded-lg border border-[var(--color-line)] bg-white/92 shadow-[var(--shadow-soft)]"
              >
                <div className="relative h-48 overflow-hidden bg-[var(--color-mist)]">
                  <Image
                    src={serviceVisuals[index % serviceVisuals.length] ?? specialty?.heroImage ?? "/images/consultation-premium.webp"}
                    alt={service.name}
                    fill
                    sizes="(max-width: 1280px) 100vw, 33vw"
                    className="object-cover transition duration-700 hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(5,44,58,0.3))]" />
                </div>
                <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-brand)]">
                  {specialty?.name ?? "Dịch vụ y tế"}
                </p>
                <h2 className="mt-4 text-[1.9rem] font-semibold leading-tight text-[var(--color-ink)]">
                  {service.name}
                </h2>
                <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{service.summary}</p>

                <div className="mt-5 rounded-lg bg-[var(--color-panel)] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                    Phù hợp cho
                  </p>
                  <div className="mt-3 space-y-2">
                    {service.audience.slice(0, 2).map((item) => (
                      <p key={item} className="flex gap-2 text-sm leading-7 text-[var(--color-muted)]">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--color-brand)]" />
                        <span>{item}</span>
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mt-4 rounded-lg border border-[var(--color-line)] bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                    Chuẩn bị trước khi đến
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{service.preparation}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <ActionLink href={`/dich-vu/${service.slug}`}>Xem chi tiết</ActionLink>
                  {specialty ? (
                    <ActionLink href={specialty.href} variant="secondary">
                      Xem chuyên khoa
                    </ActionLink>
                  ) : null}
                </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-lg border border-[var(--color-line)] bg-[linear-gradient(135deg,rgba(0,135,165,0.08),rgba(255,255,255,0.94))] p-6 shadow-[var(--shadow-soft)] sm:p-8 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-brand)]">
              Tư vấn chọn dịch vụ
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[var(--color-ink)] sm:text-[2.2rem]">
              Chưa biết nên bắt đầu từ dịch vụ hay chuyên khoa?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              Nếu chưa biết nên chọn dịch vụ nào, bạn có thể mô tả triệu chứng hoặc mục tiêu tầm soát để được nhân viên bệnh viện hướng dẫn.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 lg:mt-0">
            <ActionLink href="/tim-theo-trieu-chung">Tìm theo triệu chứng</ActionLink>
            <ActionLink href="/dat-lich" variant="secondary">
              Đặt lịch tư vấn
            </ActionLink>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
