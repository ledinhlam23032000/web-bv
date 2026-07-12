import type { Metadata } from "next";
import { CheckCircle2, Globe2, GraduationCap, Network, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ActionLink, PageHero, SectionHeading } from "@/components/marketing";
import { SiteChrome } from "@/components/site-chrome";
import {
  internationalPrograms,
  siteInfo,
  technologyCapabilities,
  trustPillars,
} from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Hợp tác quốc tế",
  description:
    "Hợp tác chuyên môn quốc tế, hội chẩn, đào tạo, chuyển giao kỹ thuật và chuẩn vận hành tại Bệnh viện Đa khoa Hồng Phúc.",
};

const icons = [Globe2, GraduationCap, ShieldCheck, Network];

export default function InternationalPartnershipPage() {
  return (
    <SiteChrome>
      <Breadcrumbs items={[{ label: "Trang chủ", href: "/" }, { label: "Hợp tác quốc tế" }]} />
      <PageHero
        eyebrow="Hợp tác quốc tế"
        title="Hợp tác quốc tế để nâng năng lực chuyên môn và chất lượng chăm sóc."
        description={`${siteInfo.name} phát triển các chương trình hội chẩn, đào tạo, chuyển giao kỹ thuật và chuẩn hóa quy trình cùng các đối tác chuyên môn trong khu vực.`}
        imageSrc="/images/medical-council-premium.webp"
        imageAlt="Đội ngũ chuyên gia trong chương trình hợp tác quốc tế"
        actions={[
          { href: "/dat-lich", label: "Đặt lịch tư vấn" },
          { href: "/chuyen-khoa", label: "Xem chuyên khoa", variant: "secondary" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeading
            eyebrow="Bốn trụ cột hợp tác"
            title="Kết nối chuyên môn khu vực, phục vụ người bệnh tại Hải Phòng."
            description="Các hoạt động hợp tác tập trung vào hội chẩn, đào tạo, cập nhật kỹ thuật, chuẩn hóa hồ sơ và nâng chất lượng chăm sóc sau khám."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {internationalPrograms.map((program, index) => {
              const Icon = icons[index % icons.length];
              return (
                <article
                  key={program.title}
                  className="rounded-[1.7rem] border border-[rgba(17,61,114,0.1)] bg-white/88 p-6 shadow-[0_24px_90px_-76px_rgba(22,32,43,0.45)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-mist)] text-[var(--color-brand)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold leading-8 text-[var(--color-ink)]">{program.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{program.description}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] bg-[var(--color-brand)] p-6 text-white sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/64">
              Năng lực trọng tâm
            </p>
            <h2 className="mt-4 font-serif text-5xl leading-none">
              Từ kỹ thuật, dữ liệu đến chăm sóc sau khám.
            </h2>
            <div className="mt-8 grid gap-4">
              {technologyCapabilities.map((capability) => (
                <p key={capability} className="flex gap-3 text-sm leading-7 text-white/78">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                  <span>{capability}</span>
                </p>
              ))}
            </div>
          </div>
          <div className="grid gap-5">
            {trustPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-[1.7rem] border border-[rgba(17,61,114,0.1)] bg-white/88 p-6"
              >
                <h3 className="text-2xl font-semibold text-[var(--color-ink)]">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] border border-[rgba(17,61,114,0.1)] bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(237,244,250,0.82))] p-6 sm:p-8 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-brand)]">
              Dành cho người bệnh cần hồ sơ chuyên sâu
            </p>
            <h2 className="mt-3 max-w-3xl font-serif text-4xl leading-none text-[var(--color-ink)] sm:text-5xl">
              Cần hội chẩn, ý kiến thứ hai hoặc chuẩn bị hồ sơ điều trị?
            </h2>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 lg:mt-0">
            <ActionLink href="/dat-lich">Đặt lịch tư vấn</ActionLink>
            <ActionLink href="/lien-he" variant="secondary">
              Liên hệ điều phối
            </ActionLink>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
