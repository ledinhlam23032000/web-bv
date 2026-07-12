import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalendarDays, GraduationCap, ShieldCheck, Stethoscope } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ActionLink } from "@/components/marketing";
import { SiteChrome } from "@/components/site-chrome";
import {
  doctorProfiles,
  getDoctorBySlug,
  getServiceBySlug,
  getSpecialtyBySlug,
  siteInfo,
} from "@/lib/site-content";

type Props = PageProps<"/bac-si/[slug]">;

export function generateStaticParams() {
  return doctorProfiles.map((doctor) => ({ slug: doctor.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);

  if (!doctor) {
    return {};
  }

  return {
    title: doctor.name,
    description: doctor.focus,
  };
}

export default async function DoctorDetailPage({ params }: Props) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);

  if (!doctor) {
    notFound();
  }

  const specialty = getSpecialtyBySlug(doctor.specialtySlug);
  const relatedServices = doctor.relatedServices
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter(Boolean);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    description: doctor.focus,
    medicalSpecialty: specialty?.name,
    worksFor: {
      "@type": "Hospital",
      name: siteInfo.name,
      telephone: siteInfo.phone,
      address: siteInfo.address,
    },
  };

  return (
    <SiteChrome>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Tìm bác sĩ", href: "/tim-bac-si" },
          { label: doctor.name },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch">
          <div className="relative min-h-[620px] overflow-hidden rounded-lg bg-[var(--color-mist)] shadow-[0_30px_100px_-72px_rgba(22,32,43,0.5)]">
            <Image
              src={doctor.image}
              alt={doctor.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="object-cover object-top"
            />
          </div>

          <div className="flex flex-col justify-between rounded-lg border border-[rgba(17,61,114,0.1)] bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(237,244,250,0.76))] p-6 shadow-[0_30px_120px_-80px_rgba(22,32,43,0.36)] sm:p-8 lg:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-brand)]">
                Hồ sơ chuyên gia
              </p>
              <h1 className="mt-4 font-serif text-4xl leading-tight text-[var(--color-ink)] sm:text-5xl">
                {doctor.name}
              </h1>
              <p className="mt-5 text-2xl font-semibold text-[var(--color-brand)]">{doctor.role}</p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">{doctor.bio}</p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {doctor.credentials.map((credential) => (
                <article
                  key={credential}
                  className="rounded-lg border border-[rgba(17,61,114,0.1)] bg-white/82 p-4"
                >
                  <GraduationCap className="h-5 w-5 text-[var(--color-accent)]" />
                  <p className="mt-3 text-sm font-medium leading-7 text-[var(--color-ink)]">{credential}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <ActionLink href="/dat-lich">
                <CalendarDays className="mr-2 h-4 w-4" />
                Đặt lịch với bác sĩ
              </ActionLink>
              <ActionLink href={specialty?.href ?? "/chuyen-khoa"} variant="secondary">
                Xem chuyên khoa
              </ActionLink>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.86fr] lg:px-8">
        <div className="rounded-lg border border-[rgba(17,61,114,0.1)] bg-white/88 p-6">
          <ShieldCheck className="h-6 w-6 text-[var(--color-brand)]" />
          <h2 className="mt-4 font-serif text-5xl leading-none text-[var(--color-ink)]">
            Cách tiếp cận điều trị
          </h2>
          <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
            {doctor.name} ưu tiên giải thích rõ nguy cơ, lựa chọn chỉ định vừa đủ và xây dựng
            kế hoạch theo dõi để người bệnh hiểu mình cần làm gì ở từng giai đoạn.
          </p>
        </div>

        <aside className="grid gap-5">
          <section className="rounded-lg border border-[rgba(17,61,114,0.1)] bg-white/88 p-6">
            <CalendarDays className="h-6 w-6 text-[var(--color-brand)]" />
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
              Lịch khám dự kiến
            </p>
            <p className="mt-4 text-2xl font-semibold text-[var(--color-ink)]">{doctor.schedule}</p>
          </section>

          <section className="rounded-lg border border-[rgba(17,61,114,0.1)] bg-white/88 p-6">
            <Stethoscope className="h-6 w-6 text-[var(--color-brand)]" />
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
              Dịch vụ liên quan
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {relatedServices.map((service) =>
                service ? (
                  <ActionLink key={service.slug} href={`/dich-vu/${service.slug}`} variant="secondary">
                    {service.name}
                  </ActionLink>
                ) : null,
              )}
            </div>
          </section>
        </aside>
      </section>
    </SiteChrome>
  );
}
