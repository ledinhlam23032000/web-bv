import type { Metadata } from "next";
import Image from "next/image";
import { BrainCircuit, GraduationCap, HeartHandshake } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ActionLink, PageHero } from "@/components/marketing";
import { SiteChrome } from "@/components/site-chrome";
import { getCmsContent, getCmsPageMetadata, resolveCmsHero } from "@/lib/cms-content";

export async function generateMetadata(): Promise<Metadata> {
  return getCmsPageMetadata("doi-ngu-bac-si", { title: "Đội ngũ bác sĩ", description: "Đội ngũ bác sĩ và chuyên gia tại Bệnh viện Đa khoa Hồng Phúc." });
}

const valuePoints = [
  {
    title: "Phối hợp liên chuyên khoa",
    description:
      "Các bác sĩ cùng trao đổi trong một kế hoạch chăm sóc, nhất là khi triệu chứng liên quan đến nhiều chuyên khoa.",
    icon: BrainCircuit,
  },
  {
    title: "Giải thích rõ ràng",
    description:
      "Bác sĩ ưu tiên giải thích mục tiêu chỉ định, ý nghĩa kết quả và kế hoạch theo dõi để người bệnh dễ hiểu.",
    icon: GraduationCap,
  },
  {
    title: "Đồng hành sau khám",
    description:
      "Lịch tái khám, thuốc, xét nghiệm cần theo dõi và dấu hiệu cần quay lại được trình bày rõ sau buổi khám.",
    icon: HeartHandshake,
  },
];

export default async function DoctorsPage() {
  const { doctorProfiles, pages } = await getCmsContent();
  const hero = resolveCmsHero(pages["doi-ngu-bac-si"] ?? null, { eyebrow: "Đội ngũ bác sĩ", title: "Bác sĩ chuyên sâu từng lĩnh vực, phối hợp khi người bệnh cần nhiều chuyên khoa.", description: "Xem lĩnh vực chuyên môn, kinh nghiệm, lịch khám và các dịch vụ liên quan của từng bác sĩ.", imageSrc: "/images/doctor-team-premium.webp", imageAlt: "Đội ngũ bác sĩ Bệnh viện Đa khoa Hồng Phúc", actions: [{ href: "/dat-lich", label: "Đặt lịch với bác sĩ" }, { href: "/chuyen-khoa", label: "Xem theo khoa", variant: "secondary" }] });
  return (
    <SiteChrome>
      <Breadcrumbs
        items={[{ label: "Trang chủ", href: "/" }, { label: "Đội ngũ bác sĩ" }]}
      />
      <PageHero {...hero} />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          {doctorProfiles.map((doctor) => (
            <article
              key={doctor.name}
              className="grid gap-5 rounded-[32px] border border-[rgba(7,93,168,0.1)] bg-white p-5 shadow-[0_24px_90px_-68px_rgba(4,63,120,0.5)] sm:grid-cols-[150px_1fr] sm:items-center"
            >
              <div className="relative h-48 overflow-hidden rounded-[24px] bg-[var(--color-mist)] sm:h-44">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  sizes="180px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                  {doctor.role}
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-[var(--color-ink)]">{doctor.name}</h2>
                <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{doctor.focus}</p>
                <p className="mt-3 text-sm font-semibold text-[var(--color-ink)]">Lịch khám: {doctor.schedule}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <ActionLink href={`/bac-si/${doctor.slug}`}>Xem hồ sơ</ActionLink>
                  <ActionLink href="/dat-lich" variant="secondary">
                    Đặt lịch
                  </ActionLink>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {valuePoints.map((point) => {
            const Icon = point.icon;
            return (
              <article
                key={point.title}
                className="rounded-[30px] border border-[rgba(7,93,168,0.08)] bg-[var(--color-paper)] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-mist)] text-[var(--color-brand)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-[var(--color-ink)]">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {point.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </SiteChrome>
  );
}
