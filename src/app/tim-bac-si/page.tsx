import Image from "next/image";
import type { Metadata } from "next";
import { CalendarDays, Clock3, Search, Stethoscope, Users2 } from "lucide-react";
import { ActionLink, PageHero, SectionHeading } from "@/components/marketing";
import { SiteChrome } from "@/components/site-chrome";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { doctorProfiles, specialties } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Tìm bác sĩ",
  description:
    "Tra cứu bác sĩ theo chuyên khoa, thế mạnh điều trị và lịch khám tại Bệnh viện Đa khoa Hồng Phúc.",
};

const doctorStats = [
  { value: `${doctorProfiles.length}`, label: "hồ sơ bác sĩ tiêu biểu" },
  { value: `${specialties.length}`, label: "khoa chuyên môn" },
  { value: "Dễ dàng", label: "đặt lịch và nhận xác nhận" },
];

const selectionGuides = [
  "Chọn theo khoa nếu bạn đã biết rõ vấn đề mình đang cần kiểm tra.",
    "Chọn theo lĩnh vực chuyên sâu nếu bạn muốn tìm bác sĩ phù hợp với vấn đề sức khỏe cụ thể.",
  "Chọn theo lịch khám và khả năng theo dõi lâu dài nếu bạn đang điều trị liên tục hoặc có bệnh nền.",
];

export default function FindDoctorPage() {
  return (
    <SiteChrome>
      <Breadcrumbs items={[{ label: "Trang chủ", href: "/" }, { label: "Tìm bác sĩ" }]} />
      <PageHero
        eyebrow="Tra cứu bác sĩ"
        title="Chọn đúng bác sĩ cho nhu cầu thăm khám của bạn."
        description="Mỗi hồ sơ được trình bày theo chuyên môn, thế mạnh lâm sàng, lịch khám và dịch vụ liên quan để người bệnh dễ đưa ra quyết định hơn."
        imageSrc="/images/doctor-team-premium.webp"
        imageAlt="Đội ngũ bác sĩ Bệnh viện Đa khoa Hồng Phúc"
        actions={[
          { href: "/dat-lich", label: "Đặt lịch với bác sĩ" },
          { href: "/tim-theo-trieu-chung", label: "Tìm theo triệu chứng", variant: "secondary" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {doctorStats.map((item) => (
            <article
              key={item.label}
              className="premium-hover-card rounded-lg border border-[var(--color-line)] bg-white/90 p-5 shadow-[var(--shadow-soft)]"
            >
              <p className="font-serif text-[2rem] leading-none text-[var(--color-brand)]">{item.value}</p>
              <p className="mt-3 text-lg font-semibold leading-7 text-[var(--color-ink)]">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Danh bạ bác sĩ"
            title="Tìm hiểu chuyên môn và lịch khám của từng bác sĩ."
            description="Mỗi hồ sơ giới thiệu chức danh, lĩnh vực chuyên sâu, kinh nghiệm và lịch khám dự kiến để bạn có thêm thông tin trước khi lựa chọn."
          />
          <ActionLink href="/dat-lich" variant="secondary">
            Đặt lịch với bác sĩ
          </ActionLink>
        </div>

        <div className="grid gap-6 lg:grid-cols-[360px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-lg border border-[var(--color-line)] bg-white/92 p-6 shadow-[var(--shadow-soft)]">
              <Search className="h-6 w-6 text-[var(--color-brand)]" />
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                Lọc theo khoa
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {specialties.map((specialty) => (
                  <span
                    key={specialty.name}
                    className="rounded-lg border border-[var(--color-line)] bg-[var(--color-paper)] px-4 py-2 text-sm text-[var(--color-ink)]"
                  >
                    {specialty.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-lg border border-[var(--color-line)] bg-[linear-gradient(135deg,rgba(0,135,165,0.08),rgba(255,255,255,0.96))] p-6 shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-2 text-[var(--color-brand)]">
                <Users2 className="h-5 w-5" />
                <p className="text-sm font-semibold uppercase tracking-[0.2em]">Tiêu chí chọn bác sĩ</p>
              </div>
              <div className="mt-4 space-y-3">
                {selectionGuides.map((item) => (
                  <p key={item} className="rounded-lg bg-white/90 px-4 py-3 text-sm leading-7 text-[var(--color-muted)]">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </aside>

          <div className="grid gap-5">
            {doctorProfiles.map((doctor) => (
              <article
                key={doctor.slug}
                className="premium-hover-card grid gap-5 rounded-lg border border-[var(--color-line)] bg-white/92 p-5 shadow-[var(--shadow-soft)] md:grid-cols-[180px_1fr]"
              >
                <div className="relative min-h-[230px] overflow-hidden rounded-lg bg-[var(--color-mist)] md:min-h-full">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    sizes="220px"
                    className="object-cover object-top"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                      <Stethoscope className="h-4 w-4" />
                      {doctor.role}
                    </p>
                    <h2 className="mt-3 text-[2rem] font-semibold leading-tight text-[var(--color-ink)]">
                      {doctor.name}
                    </h2>
                    <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{doctor.focus}</p>

                    <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_auto] lg:items-start">
                      <div className="space-y-2">
                        {doctor.credentials.slice(0, 3).map((item) => (
                          <p key={item} className="text-sm leading-7 text-[var(--color-muted)]">
                            {item}
                          </p>
                        ))}
                      </div>
                      <div className="rounded-lg bg-[var(--color-panel)] px-4 py-3">
                        <p className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand)]">
                          <Clock3 className="h-4 w-4" />
                          {doctor.schedule}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <ActionLink href="/dat-lich">
                      <CalendarDays className="mr-2 h-4 w-4" />
                      Đặt lịch
                    </ActionLink>
                    <ActionLink href={`/bac-si/${doctor.slug}`} variant="secondary">
                      Xem hồ sơ
                    </ActionLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
