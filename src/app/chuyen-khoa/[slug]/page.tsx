import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AlertCircle, ArrowRight, CalendarDays, CheckCircle2, UserRound } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ActionLink, PageHero, SectionHeading } from "@/components/marketing";
import { SiteChrome } from "@/components/site-chrome";
import { getArticleContent } from "@/lib/article-details";
import { getCmsContent } from "@/lib/cms-content";
import { getArticleSlug } from "@/lib/site-content";

type Props = PageProps<"/chuyen-khoa/[slug]">;

function toSectionId(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "d")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function generateStaticParams() {
  const { specialties } = await getCmsContent();
  return specialties.map((specialty) => ({ slug: specialty.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { specialties } = await getCmsContent();
  const specialty = specialties.find((item) => item.slug === slug);

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
  const content = await getCmsContent();
  const { articleCatalog, doctorProfiles, medicalServices, siteInfo, specialties } = content;
  const specialty = specialties.find((item) => item.slug === slug);

  if (!specialty) {
    notFound();
  }

  const doctors = doctorProfiles.filter((doctor) => doctor.specialtySlug === specialty.slug);
  const services = medicalServices.filter((service) => service.specialtySlug === specialty.slug);
  const articles = articleCatalog.filter((article) => article.specialtySlug === specialty.slug).slice(0, 3);
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
        eyebrow={specialty.group}
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
          <section className="mb-10 rounded-lg border border-[rgba(17,61,114,0.1)] bg-[linear-gradient(145deg,rgba(0,135,165,0.08),rgba(255,255,255,0.96))] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-brand)]">
              Lĩnh vực chuyên môn
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-8 text-[var(--color-ink)]">
              Phạm vi hoạt động của {specialty.name}
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {specialty.focusAreas.map((area) => (
                <span
                  key={area}
                  id={toSectionId(area)}
                  className="scroll-mt-32 rounded-full border border-[var(--color-line)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-brand)]"
                >
                  {area}
                </span>
              ))}
            </div>
          </section>

          <SectionHeading
            eyebrow="Khi nào nên đi khám"
            title="Những dấu hiệu thường gặp cần được bác sĩ đánh giá."
            description="Nếu đang có một trong các dấu hiệu dưới đây, bạn có thể đặt lịch khám hoặc liên hệ để được hướng dẫn chọn dịch vụ phù hợp."
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
            <h2 className="font-serif text-4xl leading-none text-[var(--color-ink)]">
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
                      {service.focusArea ? (
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]">
                          {service.focusArea}
                        </p>
                      ) : null}
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
            <h2 className="font-serif text-4xl leading-none text-[var(--color-ink)]">
              Bác sĩ phụ trách
            </h2>
            {doctors.length > 0 ? (
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
            ) : (
              <div className="mt-6 rounded-lg border border-[var(--color-line)] bg-white/88 p-5">
                <p className="text-base font-semibold text-[var(--color-ink)]">
                  Bệnh viện sẽ sắp xếp bác sĩ phù hợp khi xác nhận lịch.
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                  Danh sách hồ sơ bác sĩ của khoa đang được cập nhật. Bạn vẫn có thể đặt lịch theo khoa hoặc theo triệu chứng.
                </p>
                <ActionLink href="/dat-lich" variant="secondary" className="mt-4">
                  Đặt lịch theo khoa
                </ActionLink>
              </div>
            )}
          </section>

          {articles.length > 0 ? (
            <section className="rounded-lg border border-[rgba(17,61,114,0.1)] bg-white/88 p-6">
              <h2 className="font-serif text-4xl leading-none text-[var(--color-ink)]">
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
              Chọn đúng chuyên khoa
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-5xl leading-[0.96]">
              Đặt lịch đúng nơi giúp buổi khám hiệu quả hơn.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/74">
              Nếu triệu chứng chưa rõ, nhân viên tư vấn có thể hỗ trợ lựa chọn bác sĩ hoặc dịch vụ phù hợp trước khi bạn đến bệnh viện.
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
