import type { Metadata } from "next";
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
import { getArticlesBySpecialty, getServicesBySpecialty, specialties } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Chuyên khoa",
  description:
    "Khám phá các cụm chuyên khoa trọng tâm của Bệnh viện Đa khoa Hồng Phúc.",
};

const specialtyIcons = [
  HeartPulse,
  Stethoscope,
  Sparkles,
  UsersRound,
  ScanHeart,
  ShieldCheck,
  Activity,
  ScanHeart,
  ShieldCheck,
  Sparkles,
];

const overviewStats = [
  {
    value: `${specialties.length}`,
    label: "cụm chuyên khoa trọng tâm",
    description: "Được tổ chức như những điểm đến nội dung, điều phối và chuyển tuyến trong cùng hệ sinh thái.",
  },
  {
    value: "2 lớp",
    label: "tiếp cận cho người bệnh",
    description: "Bắt đầu bằng triệu chứng hoặc đi thẳng vào chuyên khoa khi người bệnh đã có nhu cầu rõ ràng.",
  },
  {
    value: "1 hành trình",
    label: "khám chữa bệnh liên tục",
    description: "Từ tư vấn, cận lâm sàng, bác sĩ điều trị đến theo dõi sau khám đều cần được kết nối mạch lạc.",
  },
];

const pathwayGuides = [
  "Chưa rõ nên khám gì: bắt đầu từ Nội tổng quát hoặc tìm theo triệu chứng.",
  "Đã có kết quả cũ: mang theo để bác sĩ giảm lặp lại xét nghiệm và rút ngắn thời gian ra quyết định.",
  "Có nhiều bệnh nền: ưu tiên luồng khám có điều phối thay vì tự đăng ký từng chuyên khoa rời rạc.",
];

export default function SpecialtiesPage() {
  return (
    <SiteChrome>
      <Breadcrumbs items={[{ label: "Trang chủ", href: "/" }, { label: "Chuyên khoa" }]} />
      <PageHero
        eyebrow="Cụm chuyên khoa"
        title="Cấu trúc dịch vụ được thiết kế để người bệnh hiểu nhanh và tin tưởng sớm."
        description="Mỗi chuyên khoa vừa là điểm chạm thương hiệu, vừa là trụ cột để mở rộng nội dung chuyên sâu, landing theo nhu cầu và hệ sinh thái tìm kiếm dài hạn."
        imageSrc="/images/hospital-exterior-premium.webp"
        imageAlt="Toàn cảnh bệnh viện"
        actions={[
          { href: "/dat-lich", label: "Đặt lịch tư vấn" },
          { href: "/doi-ngu-bac-si", label: "Gặp đội ngũ bác sĩ", variant: "secondary" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="grid gap-4 md:grid-cols-3">
            {overviewStats.map((item) => (
              <article
                key={item.label}
                className="rounded-[1.6rem] border border-[var(--color-line)] bg-white/90 p-5 shadow-[0_22px_80px_-68px_rgba(19,35,48,0.36)]"
              >
                <p className="font-serif text-[2rem] leading-none text-[var(--color-brand)]">{item.value}</p>
                <h2 className="mt-3 text-lg font-semibold leading-7 text-[var(--color-ink)]">{item.label}</h2>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
              </article>
            ))}
          </div>

          <article className="rounded-[1.8rem] border border-[rgba(7,93,168,0.14)] bg-[linear-gradient(135deg,rgba(7,93,168,0.08),rgba(255,255,255,0.96))] p-6 shadow-[0_24px_90px_-72px_rgba(19,35,48,0.32)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-brand)]">
              Bắt đầu từ đâu
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-8 text-[var(--color-ink)]">
              Không chắc nên vào khoa nào cũng không sao.
            </h2>
            <div className="mt-5 space-y-3">
              {pathwayGuides.map((item) => (
                <p key={item} className="rounded-[1.2rem] bg-white/88 px-4 py-3 text-sm leading-7 text-[var(--color-muted)]">
                  {item}
                </p>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <ActionLink href="/tim-theo-trieu-chung">Tìm theo triệu chứng</ActionLink>
              <ActionLink href="/tim-bac-si" variant="secondary">
                Tra cứu bác sĩ
              </ActionLink>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Các điểm đến chuyên môn"
            title="Mỗi chuyên khoa cần đủ rõ để người bệnh biết mình đang ở đúng nơi."
            description="Thay vì chỉ giới thiệu chung, từng cụm chuyên khoa được trình bày bằng dấu hiệu thường gặp, số dịch vụ liên quan và nhịp điều phối phù hợp cho từng nhóm nhu cầu."
          />
          <ActionLink href="/dat-lich" variant="secondary">
            Đặt lịch khám chuyên khoa
          </ActionLink>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {specialties.map((specialty, index) => {
            const Icon = specialtyIcons[index % specialtyIcons.length];
            const services = getServicesBySpecialty(specialty.slug);
            const articles = getArticlesBySpecialty(specialty.slug);

            return (
              <article
                key={specialty.name}
                id={specialty.slug}
                className="rounded-[1.9rem] border border-[var(--color-line)] bg-white/92 p-6 shadow-[0_24px_90px_-72px_rgba(19,35,48,0.36)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-mist)] text-[var(--color-brand)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-[1.9rem] font-semibold leading-tight text-[var(--color-ink)]">
                        {specialty.name}
                      </h2>
                      <p className="mt-2 max-w-xl text-base leading-8 text-[var(--color-muted)]">
                        {specialty.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden rounded-[1.2rem] bg-[var(--color-panel)] px-4 py-3 text-right lg:block">
                    <p className="text-sm font-semibold text-[var(--color-brand)]">{services.length} dịch vụ</p>
                    <p className="mt-1 text-sm text-[var(--color-muted)]">{articles.length} bài viết nền</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
                  <div className="rounded-[1.5rem] bg-[var(--color-panel)] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-brand)]">
                      Vai trò trong hệ thống
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{specialty.overview}</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-white p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-brand)]">
                      Người bệnh thường tìm đến khi
                    </p>
                    <div className="mt-3 space-y-3">
                      {specialty.signs.slice(0, 3).map((sign) => (
                        <p key={sign} className="text-sm leading-7 text-[var(--color-muted)]">
                          {sign}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <ActionLink href={specialty.href}>
                    Xem chi tiết
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </ActionLink>
                  <ActionLink href="/dat-lich" variant="secondary">
                    Đặt lịch
                  </ActionLink>
                  <span className="rounded-full bg-[var(--color-mist)] px-3 py-1.5 text-xs font-semibold text-[var(--color-brand)]">
                    {services.length} dịch vụ liên quan
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-[2rem] bg-[linear-gradient(135deg,var(--color-brand-deep),var(--color-brand),#0e7dc8)] p-6 text-white shadow-[0_30px_100px_-72px_rgba(7,63,120,0.76)] sm:p-8 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">Đi tiếp theo nhu cầu</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-[2.35rem]">
              Cần bắt đầu từ gói khám, bác sĩ hay triệu chứng?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/76 sm:text-base">
              Hồng Phúc được định hướng như một bệnh viện đa khoa lớn, nên người bệnh không cần tự giải bài toán điều hướng một mình.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 lg:mt-0">
            <ActionLink href="/goi-kham" variant="secondary">
              Xem gói khám
            </ActionLink>
            <ActionLink href="/tim-theo-trieu-chung" variant="contrast">
              Tìm theo triệu chứng
            </ActionLink>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
