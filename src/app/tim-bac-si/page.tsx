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
  { value: `${doctorProfiles.length}`, label: "hồ sơ bác sĩ nổi bật" },
  { value: `${specialties.length}`, label: "cụm chuyên khoa liên quan" },
  { value: "1 luồng", label: "đặt lịch và điều phối" },
];

const selectionGuides = [
  "Chọn theo chuyên khoa nếu bạn đã biết rõ vấn đề mình đang cần kiểm tra.",
  "Chọn theo thế mạnh lâm sàng nếu bạn muốn gặp bác sĩ phù hợp với ca bệnh cụ thể hơn.",
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
              className="rounded-[1.6rem] border border-[var(--color-line)] bg-white/90 p-5 shadow-[0_22px_80px_-68px_rgba(19,35,48,0.3)]"
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
            title="Hồ sơ bác sĩ cần đủ chiều sâu để tạo niềm tin, không chỉ để liệt kê tên."
            description="Mỗi hồ sơ bên dưới được tổ chức theo vai trò chuyên môn, thế mạnh lâm sàng, lịch tiếp nhận và lối vào đặt lịch rõ ràng."
          />
          <ActionLink href="/dat-lich" variant="secondary">
            Đặt lịch cùng điều phối
          </ActionLink>
        </div>

        <div className="grid gap-6 lg:grid-cols-[360px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-[1.8rem] border border-[var(--color-line)] bg-white/92 p-6 shadow-[0_24px_90px_-72px_rgba(19,35,48,0.28)]">
              <Search className="h-6 w-6 text-[var(--color-brand)]" />
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                Lọc theo chuyên khoa
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {specialties.map((specialty) => (
                  <span
                    key={specialty.name}
                    className="rounded-full border border-[var(--color-line)] bg-[var(--color-paper)] px-4 py-2 text-sm text-[var(--color-ink)]"
                  >
                    {specialty.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-[1.8rem] border border-[rgba(7,93,168,0.14)] bg-[linear-gradient(135deg,rgba(7,93,168,0.08),rgba(255,255,255,0.96))] p-6">
              <div className="flex items-center gap-2 text-[var(--color-brand)]">
                <Users2 className="h-5 w-5" />
                <p className="text-sm font-semibold uppercase tracking-[0.2em]">Tiêu chí chọn bác sĩ</p>
              </div>
              <div className="mt-4 space-y-3">
                {selectionGuides.map((item) => (
                  <p key={item} className="rounded-[1.2rem] bg-white/90 px-4 py-3 text-sm leading-7 text-[var(--color-muted)]">
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
                className="grid gap-5 rounded-[1.9rem] border border-[var(--color-line)] bg-white/92 p-5 shadow-[0_24px_90px_-72px_rgba(19,35,48,0.32)] md:grid-cols-[180px_1fr]"
              >
                <div className="relative min-h-[230px] overflow-hidden rounded-[1.5rem] bg-[var(--color-mist)] md:min-h-full">
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
                      <div className="rounded-[1.2rem] bg-[var(--color-panel)] px-4 py-3">
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
