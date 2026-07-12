import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AlertCircle, ArrowRight, CalendarDays, CheckCircle2, UserRound } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ActionLink, PageHero, SectionHeading } from "@/components/marketing";
import { SiteChrome } from "@/components/site-chrome";
import { getArticleContent } from "@/lib/article-details";
import {
  getDoctorsBySpecialty,
  getArticleSlug,
  getArticlesBySpecialty,
  getServicesBySpecialty,
  getSpecialtyBySlug,
  siteInfo,
  specialties,
} from "@/lib/site-content";

type Props = PageProps<"/chuyen-khoa/[slug]">;

export function generateStaticParams() {
  return specialties.map((specialty) => ({ slug: specialty.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const specialty = getSpecialtyBySlug(slug);

  if (!specialty) {
    return {};
  }

  return {
    title: specialty.name,
    description: specialty.description,
  };
}

export default async function SpecialtyDetailPage({ params }: Props) {
  const { slug } = await params;
  const specialty = getSpecialtyBySlug(slug);

  if (!specialty) {
    notFound();
  }

  const doctors = getDoctorsBySpecialty(specialty.slug);
  const services = getServicesBySpecialty(specialty.slug);
  const articles = getArticlesBySpecialty(specialty.slug).slice(0, 3);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalSpecialty",
    name: specialty.name,
    description: specialty.description,
    provider: {
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
          { label: "Chuyên khoa", href: "/chuyen-khoa" },
          { label: specialty.name },
        ]}
      />
      <PageHero
        eyebrow="Chuyên khoa"
        title={specialty.name}
        description={specialty.overview}
        imageSrc={specialty.heroImage}
        imageAlt={specialty.name}
        actions={[
          { href: "/dat-lich", label: "Đặt lịch chuyên khoa" },
          { href: "/tim-bac-si", label: "Tìm bác sĩ", variant: "secondary" },
        ]}
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Khi nào nên đi khám"
            title="Bắt đầu từ triệu chứng người bệnh đang thật sự gặp."
            description="Những dấu hiệu dưới đây giúp người xem tự định vị nhu cầu trước khi đặt lịch, đồng thời giúp đội tư vấn điều hướng đúng chuyên khoa hơn."
          />
          <div className="mt-8 grid gap-4">
            {specialty.signs.map((sign) => (
              <article
                key={sign}
                className="flex gap-4 rounded-lg border border-[rgba(17,61,114,0.1)] bg-white/88 p-5"
              >
                <AlertCircle className="mt-1 h-5 w-5 shrink-0 text-[var(--color-accent)]" />
                <p className="text-base leading-8 text-[var(--color-ink)]">{sign}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <section className="rounded-lg border border-[rgba(17,61,114,0.1)] bg-white/88 p-6">
            <h2 className="font-serif text-5xl leading-none text-[var(--color-ink)]">
              Dịch vụ liên quan
            </h2>
            <div className="mt-6 grid gap-4">
              {services.map((service) => (
                <article
                  key={service.slug}
                  className="rounded-lg border border-[rgba(17,61,114,0.1)] bg-[var(--color-paper)] p-5"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--color-ink)]">{service.name}</h3>
                      <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                        {service.summary}
                      </p>
                      <ActionLink href={`/dich-vu/${service.slug}`} variant="ghost" className="mt-3 px-0">
                        Xem dịch vụ
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </ActionLink>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-[rgba(17,61,114,0.1)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(237,244,250,0.72))] p-6">
            <h2 className="font-serif text-5xl leading-none text-[var(--color-ink)]">
              Bác sĩ phụ trách
            </h2>
            <div className="mt-6 grid gap-4">
              {doctors.map((doctor) => (
                <article
                  key={doctor.slug}
                  className="rounded-lg border border-[rgba(17,61,114,0.1)] bg-white/88 p-5"
                >
                  <div className="flex items-start gap-3">
                    <UserRound className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                    <div>
                      <p className="text-xl font-semibold text-[var(--color-ink)]">{doctor.name}</p>
                      <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{doctor.focus}</p>
                      <ActionLink href={`/bac-si/${doctor.slug}`} variant="secondary" className="mt-4">
                        Xem hồ sơ
                      </ActionLink>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {articles.length > 0 ? (
            <section className="rounded-lg border border-[rgba(17,61,114,0.1)] bg-white/88 p-6">
              <h2 className="font-serif text-5xl leading-none text-[var(--color-ink)]">
                Bài viết liên quan
              </h2>
              <div className="mt-6 grid gap-4">
                {articles.map((article) => (
                  <article
                    key={article.title}
                    className="rounded-lg border border-[rgba(17,61,114,0.1)] bg-[var(--color-paper)] p-5"
                  >
                    <p className="text-sm font-semibold text-[var(--color-brand)]">{article.category}</p>
                    <h3 className="mt-3 text-xl font-semibold leading-7 text-[var(--color-ink)]">
                      {getArticleContent(getArticleSlug(article))?.title ?? article.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-[var(--color-muted)]">
                      {getArticleContent(getArticleSlug(article))?.excerpt ?? article.summary}
                    </p>
                    <ActionLink href={`/kien-thuc/${getArticleSlug(article)}`} variant="ghost" className="mt-3 px-0">
                      Đọc bài viết
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </ActionLink>
                  </article>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </section>

      <section className="bg-[var(--color-brand)] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/68">
              Ưu tiên điều hướng đúng
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-5xl leading-[0.96]">
              Một lịch hẹn tốt bắt đầu từ đúng chuyên khoa.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/74">
              Nếu triệu chứng chưa rõ, đội tư vấn có thể hỗ trợ lựa chọn bác sĩ hoặc dịch vụ phù hợp trước khi bạn đến bệnh viện.
            </p>
          </div>
          <ActionLink href="/dat-lich" variant="contrast">
            <CalendarDays className="mr-2 h-4 w-4" />
            Đặt lịch ngay
          </ActionLink>
        </div>
      </section>
    </SiteChrome>
  );
}
