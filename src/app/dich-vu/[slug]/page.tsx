import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalendarDays, CheckCircle2, ClipboardCheck, UserRound } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ActionLink, PageHero, SectionHeading } from "@/components/marketing";
import { SiteChrome } from "@/components/site-chrome";
import {
  getDoctorsBySpecialty,
  getServiceBySlug,
  getSpecialtyBySlug,
  medicalServices,
  siteInfo,
} from "@/lib/site-content";

type Props = PageProps<"/dich-vu/[slug]">;

export function generateStaticParams() {
  return medicalServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.name,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const specialty = getSpecialtyBySlug(service.specialtySlug);
  const doctors = getDoctorsBySpecialty(service.specialtySlug);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.name,
    description: service.summary,
    provider: {
      "@type": "Hospital",
      name: siteInfo.name,
      telephone: siteInfo.phone,
      address: siteInfo.address,
    },
    relevantSpecialty: specialty?.name,
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
          { label: "Dịch vụ", href: "/dich-vu" },
          { label: service.name },
        ]}
      />
      <PageHero
        eyebrow={specialty?.name ?? "Dịch vụ y tế"}
        title={service.name}
        description={service.summary}
        imageSrc={specialty?.heroImage ?? "/images/consultation-premium.webp"}
        imageAlt={service.name}
        actions={[
          { href: "/dat-lich", label: "Đặt lịch dịch vụ" },
          { href: specialty?.href ?? "/chuyen-khoa", label: "Xem chuyên khoa", variant: "secondary" },
        ]}
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.82fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Dành cho ai"
            title="Dịch vụ được giải thích theo tình huống người bệnh đang gặp."
            description="Trước khi đặt lịch, người bệnh cần biết dịch vụ này phù hợp với ai, diễn ra ra sao và cần chuẩn bị gì để buổi khám không bị động."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {service.audience.map((item) => (
              <article
                key={item}
                className="rounded-lg border border-[rgba(17,61,114,0.1)] bg-white/88 p-5"
              >
                <CheckCircle2 className="h-5 w-5 text-[var(--color-accent)]" />
                <p className="mt-3 text-sm leading-7 text-[var(--color-ink)]">{item}</p>
              </article>
            ))}
          </div>

          <section className="mt-10">
            <h2 className="font-serif text-5xl leading-none text-[var(--color-ink)]">
              Quy trình dự kiến
            </h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {service.process.map((step, index) => (
                <article
                  key={step}
                  className="rounded-lg border border-[rgba(17,61,114,0.1)] bg-[var(--color-paper)] p-5"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                    Bước {index + 1}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{step}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="grid content-start gap-5">
          <section className="rounded-lg border border-[rgba(17,61,114,0.1)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(237,244,250,0.72))] p-6">
            <ClipboardCheck className="h-6 w-6 text-[var(--color-brand)]" />
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
              Chuẩn bị trước
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              {service.preparation}
            </p>
          </section>

          <section className="rounded-lg border border-[rgba(17,61,114,0.1)] bg-white/88 p-6">
            <UserRound className="h-6 w-6 text-[var(--color-brand)]" />
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
              Bác sĩ liên quan
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {doctors.map((doctor) => (
                <ActionLink key={doctor.slug} href={`/bac-si/${doctor.slug}`} variant="secondary">
                  {doctor.name}
                </ActionLink>
              ))}
            </div>
          </section>

          <section className="rounded-lg bg-[var(--color-brand)] p-6 text-white">
            <p className="font-serif text-4xl leading-none">Cần điều hướng nhanh?</p>
            <p className="mt-4 text-sm leading-7 text-white/74">
              Đội chăm sóc khách hàng có thể hỗ trợ chọn bác sĩ, khung giờ và hướng chuẩn bị trước khi đến.
            </p>
            <ActionLink href="/dat-lich" variant="contrast" className="mt-5">
              <CalendarDays className="mr-2 h-4 w-4" />
              Đặt lịch
            </ActionLink>
          </section>
        </aside>
      </section>
    </SiteChrome>
  );
}
