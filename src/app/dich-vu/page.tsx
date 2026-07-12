import type { Metadata } from "next";
import { CheckCircle2, ClipboardList, SearchCheck, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ActionLink, PageHero, SectionHeading } from "@/components/marketing";
import { SiteChrome } from "@/components/site-chrome";
import { getSpecialtyBySlug, medicalServices, specialties } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Dịch vụ y tế",
  description:
    "Danh mục dịch vụ y tế mẫu của Bệnh viện Đa khoa Hồng Phúc, được tổ chức theo chuyên khoa và nhu cầu thăm khám.",
};

const servicePillars = [
  {
    icon: SearchCheck,
    title: "Đúng chỉ định",
    description: "Trang dịch vụ phải trả lời rõ khi nào nên làm, khi nào chưa cần làm và dịch vụ đó giải quyết câu hỏi lâm sàng gì.",
  },
  {
    icon: ClipboardList,
    title: "Chuẩn bị rõ ràng",
    description: "Người bệnh cần biết trước có phải nhịn ăn, mang kết quả cũ hay sắp xếp người thân đi cùng hay không.",
  },
  {
    icon: ShieldCheck,
    title: "Đi tiếp sau kết quả",
    description: "Sau mỗi dịch vụ phải có hướng dẫn tiếp theo: đọc kết quả, tái khám, chuyển chuyên khoa hay theo dõi tại nhà.",
  },
];

export default function ServicesPage() {
  return (
    <SiteChrome>
      <Breadcrumbs items={[{ label: "Trang chủ", href: "/" }, { label: "Dịch vụ y tế" }]} />
      <PageHero
        eyebrow="Dịch vụ y tế"
        title="Mỗi dịch vụ cần trả lời rõ: ai nên dùng, quy trình ra sao và bước tiếp theo là gì."
        description="Trang dịch vụ được dựng như một lớp thông tin có thể mở rộng, kết nối trực tiếp với chuyên khoa, bác sĩ, gói khám và luồng đặt lịch."
        imageSrc="/images/facility.webp"
        imageAlt="Cơ sở vật chất y tế tại Bệnh viện Đa khoa Hồng Phúc"
        actions={[
          { href: "/dat-lich", label: "Đặt lịch tư vấn" },
          { href: "/tim-theo-trieu-chung", label: "Tìm theo triệu chứng", variant: "secondary" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {servicePillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article
                key={pillar.title}
                className="rounded-[1.6rem] border border-[var(--color-line)] bg-white/90 p-5 shadow-[0_22px_80px_-70px_rgba(19,35,48,0.32)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-mist)] text-[var(--color-brand)]">
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
            title="Danh sách dịch vụ được tổ chức như các trang đích phục vụ nhu cầu tìm kiếm thật."
            description="Mỗi ô dịch vụ cho thấy nhóm người bệnh phù hợp, phần chuẩn bị cần thiết và chuyên khoa liên quan để người đọc không bị đứt mạch sau khi xem xong."
          />
          <div className="flex flex-wrap gap-2">
            {specialties.slice(0, 6).map((specialty) => (
              <span
                key={specialty.slug}
                className="rounded-full border border-[var(--color-line)] bg-white px-3 py-1.5 text-xs font-semibold text-[var(--color-brand)]"
              >
                {specialty.name}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-3">
          {medicalServices.map((service) => {
            const specialty = getSpecialtyBySlug(service.specialtySlug);

            return (
              <article
                key={service.slug}
                className="rounded-[1.8rem] border border-[var(--color-line)] bg-white/92 p-6 shadow-[0_24px_90px_-72px_rgba(19,35,48,0.34)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-brand)]">
                  {specialty?.name ?? "Dịch vụ y tế"}
                </p>
                <h2 className="mt-4 text-[1.9rem] font-semibold leading-tight text-[var(--color-ink)]">
                  {service.name}
                </h2>
                <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{service.summary}</p>

                <div className="mt-5 rounded-[1.4rem] bg-[var(--color-panel)] p-4">
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

                <div className="mt-4 rounded-[1.4rem] border border-[var(--color-line)] bg-white p-4">
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
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-[2rem] border border-[rgba(7,93,168,0.14)] bg-[linear-gradient(135deg,rgba(7,93,168,0.08),rgba(255,255,255,0.94))] p-6 sm:p-8 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-brand)]">
              Điều phối dịch vụ
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[var(--color-ink)] sm:text-[2.2rem]">
              Chưa biết nên bắt đầu từ dịch vụ hay chuyên khoa?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              Đội điều phối có thể bắt đầu từ triệu chứng hoặc mục tiêu tầm soát, sau đó gợi ý đúng dịch vụ thay vì để người bệnh tự đoán.
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
