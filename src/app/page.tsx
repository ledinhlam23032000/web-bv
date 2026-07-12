import Image from "next/image";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  Globe2,
  HeartPulse,
  Microscope,
  ScanSearch,
  Search,
  ShieldCheck,
  Stethoscope,
  UsersRound,
} from "lucide-react";
import { ActionLink, SectionHeading } from "@/components/marketing";
import { SiteChrome } from "@/components/site-chrome";
import {
  articleCatalog,
  doctorProfiles,
  faqItems,
  featuredSpaces,
  internationalPrograms,
  packageOptions,
  patientJourney,
  patientStories,
  qualityMetrics,
  quickActions,
  searchSuggestions,
  signatureCenters,
  siteInfo,
  specialties,
  symptomGroups,
  technologyCapabilities,
  trustPillars,
} from "@/lib/site-content";

const specialtyIcons = [
  HeartPulse,
  ShieldCheck,
  UsersRound,
  Stethoscope,
  ScanSearch,
  Microscope,
  Building2,
  Globe2,
];

const quickActionIcons = [CalendarDays, Stethoscope, Search, CircleAlert];

const carePillars = [
  {
    icon: HeartPulse,
    title: "Điều phối khám theo nhu cầu thật",
    description:
      "Người bệnh bắt đầu từ triệu chứng, mục tiêu tầm soát hoặc bác sĩ mong muốn, sau đó được sắp lộ trình phù hợp.",
  },
  {
    icon: Globe2,
    title: "Kết nối chuyên môn trong khu vực",
    description:
      "Các chương trình hợp tác quốc tế được thể hiện qua đào tạo, hội chẩn và chuẩn hóa quy trình cho các ca cần đánh giá sâu.",
  },
  {
    icon: ShieldCheck,
    title: "Cấp cứu và hỗ trợ 24/7",
    description:
      "Từ tiếp nhận ban đầu đến hướng dẫn di chuyển và chuẩn bị hồ sơ, người bệnh luôn có điểm liên hệ rõ ràng.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hospital",
  name: siteInfo.name,
  description: siteInfo.description,
  telephone: siteInfo.phone,
  email: siteInfo.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteInfo.address,
    addressCountry: "VN",
  },
  medicalSpecialty: specialties.map((item) => item.name),
  areaServed: "Hải Phòng",
};

export default function Home() {
  const leadingArticles = articleCatalog.slice(0, 8);

  return (
    <SiteChrome>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.3rem] border border-[rgba(7,93,168,0.12)] bg-[linear-gradient(135deg,#ffffff_0%,#eef7ff_40%,#dbf0ff_100%)] shadow-[0_42px_140px_-86px_rgba(4,63,120,0.7)]">
          <div className="surface-drift absolute right-0 top-0 h-72 w-72 rounded-full bg-[rgba(16,166,178,0.16)] blur-3xl" />
          <div className="surface-drift absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[rgba(7,93,168,0.14)] blur-3xl [animation-delay:-3s]" />

          <div className="relative grid gap-6 p-4 sm:gap-8 sm:p-7 lg:grid-cols-[0.94fr_1.06fr] lg:p-8">
            <div className="flex flex-col justify-between gap-8 py-2 sm:gap-10 sm:py-4 lg:py-6">
              <div>
                <div className="mb-5 flex flex-wrap gap-2 sm:mb-6 sm:gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(17,61,114,0.12)] bg-white/78 px-3.5 py-1.5 text-xs font-semibold text-[var(--color-brand)] sm:px-4 sm:py-2 sm:text-sm">
                    <Globe2 className="h-4 w-4" />
                    Quy mô đa khoa, hợp tác quốc tế
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(186,135,71,0.18)] bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-[var(--color-ink)] sm:px-4 sm:py-2 sm:text-sm">
                    <CircleAlert className="h-4 w-4 text-[var(--color-accent)]" />
                    {siteInfo.emergency}
                  </span>
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--color-brand)] sm:text-sm">
                  Bệnh viện Đa khoa Hồng Phúc
                </p>
                <h1 className="mt-4 max-w-4xl font-serif text-[2.25rem] leading-[1.06] text-[var(--color-ink)] sm:mt-5 sm:text-[3rem] lg:text-[3.7rem]">
                  <span className="sm:hidden">Đa khoa chuyên sâu tại Hải Phòng.</span>
                  <span className="hidden sm:inline">Đa khoa chuyên sâu, kết nối chuyên môn quốc tế.</span>
                </h1>
                <p className="mt-5 max-w-2xl text-[1.02rem] leading-8 text-[var(--color-muted)] sm:mt-6 sm:text-lg sm:leading-9">
                  Hồng Phúc được xây dựng theo định hướng bệnh viện đa khoa quy mô lớn, tổ chức theo các trung tâm chuyên sâu,
                  có khả năng điều phối đa chuyên khoa và từng bước mở rộng hợp tác chuyên môn trong khu vực.
                </p>
              </div>

              <div className="rounded-[1.7rem] border border-[rgba(17,61,114,0.1)] bg-white/90 p-4 shadow-[0_26px_90px_-76px_rgba(22,32,43,0.56)] backdrop-blur">
                <div className="flex flex-col gap-3 md:flex-row md:items-center">
                  <div className="flex min-h-13 flex-1 items-center gap-3 rounded-full bg-[var(--color-mist)] px-4 text-[var(--color-muted)] sm:px-5">
                    <Search className="h-5 w-5 text-[var(--color-brand)]" />
                    <span className="text-sm sm:text-[15px]">
                      Tìm bác sĩ, chuyên khoa, triệu chứng, dịch vụ hoặc bài viết...
                    </span>
                  </div>
                  <ActionLink href="/tim-theo-trieu-chung" className="min-h-11 px-5">
                    Tìm hướng khám
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </ActionLink>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-2 px-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                    Phổ biến
                  </span>
                  {searchSuggestions.slice(0, 5).map((suggestion) => (
                    <span
                      key={suggestion}
                      className="rounded-full border border-[rgba(17,61,114,0.08)] bg-white px-3 py-1.5 text-xs font-medium text-[var(--color-muted)]"
                    >
                      {suggestion}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_250px]">
              <div className="relative min-h-[480px] overflow-hidden rounded-[1.85rem] bg-[var(--color-brand)] shadow-[0_34px_100px_-72px_rgba(22,32,43,0.7)]">
                <Image
                  src="/images/hospital-lobby-premium.webp"
                  alt="Sảnh tiếp đón Bệnh viện Đa khoa Hồng Phúc"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="media-kenburns object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,30,48,0.03),rgba(10,30,48,0.62))]" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_28%)]" />
                <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)] shadow-[0_14px_30px_-22px_rgba(4,63,120,0.65)]">
                  Điều phối trung tâm
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/68">
                    Khu tiếp đón Hồng Phúc
                  </p>
                  <h2 className="mt-3 max-w-lg text-2xl font-semibold leading-tight sm:text-[1.9rem]">
                    Điều phối khám chữa bệnh như một hành trình, không phải một lượt xếp hàng.
                  </h2>
                </div>
              </div>
              <div className="grid gap-3">
                {carePillars.map((pillar, index) => {
                  const Icon = pillar.icon;

                  return (
                    <article
                      key={pillar.title}
                      className={[
                        "premium-hover-card rounded-[1.45rem] border p-4 shadow-[0_18px_70px_-64px_rgba(22,32,43,0.45)]",
                        index === 1
                          ? "border-[rgba(7,93,168,0.14)] bg-[linear-gradient(180deg,var(--color-brand),#0d70c5)] text-white"
                          : "border-white/80 bg-white/88 text-[var(--color-ink)]",
                      ].join(" ")}
                    >
                      <div
                        className={[
                          "flex h-10 w-10 items-center justify-center rounded-2xl",
                          index === 1 ? "bg-white/14 text-white" : "bg-[var(--color-mist)] text-[var(--color-brand)]",
                        ].join(" ")}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <h2 className="mt-4 text-base font-semibold leading-6">
                        {pillar.title}
                      </h2>
                      <p className={["mt-2 text-sm leading-6", index === 1 ? "text-white/78" : "text-[var(--color-muted)]"].join(" ")}>
                        {pillar.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {quickActions.map((action, index) => {
            const Icon = quickActionIcons[index % quickActionIcons.length];

            return (
              <article
                key={action.label}
                className="premium-hover-card rounded-[1.45rem] border border-[rgba(17,61,114,0.1)] bg-white/92 p-4 shadow-[0_20px_80px_-70px_rgba(22,32,43,0.42)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--color-mist)] text-[var(--color-brand)]">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                  Truy cập nhanh
                </p>
                <h2 className="mt-2 text-[1.08rem] font-semibold leading-7 text-[var(--color-ink)]">{action.label}</h2>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{action.description}</p>
                <ActionLink href={action.href} variant="ghost" className="mt-3 px-0 py-0">
                  Bắt đầu
                  <ChevronRight className="ml-1 h-4 w-4" />
                </ActionLink>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,var(--color-brand-deep),var(--color-brand),#0e7dc8)] text-white shadow-[0_34px_110px_-76px_rgba(7,63,120,0.78)]">
          <div className="grid gap-0 lg:grid-cols-4">
            {qualityMetrics.map((metric) => (
              <article
                key={metric.label}
                className="border-b border-white/10 px-5 py-6 last:border-b-0 lg:border-b-0 lg:border-r lg:border-white/10 lg:last:border-r-0 lg:px-6"
              >
                <p className="font-serif text-[2.1rem] leading-none text-white">{metric.value}</p>
                <h2 className="mt-3 text-lg font-semibold text-white">{metric.label}</h2>
                <p className="mt-2 text-sm leading-7 text-white/76">{metric.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <SectionHeading
            eyebrow="Trung tâm mũi nhọn"
            title="Các trung tâm chuyên sâu được kết nối trong cùng một hành trình khám chữa bệnh."
            description="Từ tim mạch, ung bướu, sản nhi, tiêu hóa đến chẩn đoán hình ảnh và cấp cứu, người bệnh được điều phối theo nhu cầu thực tế thay vì phải tự tìm từng điểm đến riêng lẻ."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {signatureCenters.map((center) => (
              <article
                key={center.title}
                className="rounded-[1.6rem] border border-[rgba(17,61,114,0.1)] bg-[var(--color-paper)] p-5"
              >
                <h3 className="text-xl font-semibold leading-7 text-[var(--color-ink)]">{center.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{center.summary}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {specialties.slice(0, 8).map((specialty, index) => {
            const Icon = specialtyIcons[index % specialtyIcons.length];
            return (
              <article
                key={specialty.name}
                className="premium-hover-card group rounded-[1.6rem] border border-[rgba(17,61,114,0.1)] bg-white/90 p-5 shadow-[0_24px_90px_-76px_rgba(22,32,43,0.52)] transition hover:border-[rgba(17,61,114,0.22)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-mist)] text-[var(--color-brand)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-[1.35rem] font-semibold leading-8 text-[var(--color-ink)]">{specialty.name}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {specialty.description}
                </p>
                <ActionLink href={specialty.href} variant="ghost" className="mt-4 px-0">
                  Xem chuyên khoa
                  <ArrowRight className="ml-2 h-4 w-4" />
                </ActionLink>
              </article>
            );
          })}
        </div>
        <div className="mt-8">
          <ActionLink href="/chuyen-khoa" variant="secondary">
            Xem toàn bộ chuyên khoa
            <ArrowRight className="ml-2 h-4 w-4" />
          </ActionLink>
        </div>
      </section>

      <section className="bg-[var(--color-brand)] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/68">
              Hợp tác quốc tế
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Hợp tác quốc tế được thể hiện qua hội chẩn, đào tạo và chuyển giao chuyên môn.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/76">
              Hồng Phúc định hướng kết nối với các chuyên gia và đơn vị y tế trong khu vực, giúp đội ngũ cập nhật kỹ thuật, chuẩn hóa quy trình và mở rộng năng lực hội chẩn cho những ca cần đánh giá chuyên sâu.
            </p>
            <div className="mt-8 grid gap-3 text-sm leading-7 text-white/82">
              {technologyCapabilities.slice(0, 4).map((item) => (
                <p key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {internationalPrograms.map((program) => (
              <article
                key={program.title}
                className="rounded-[1.7rem] border border-white/14 bg-white/8 p-6 backdrop-blur"
              >
                <Globe2 className="h-6 w-6 text-[var(--color-accent)]" />
                <h3 className="mt-4 text-2xl font-semibold leading-8">{program.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/72">{program.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <SectionHeading
              eyebrow="Cơ sở vật chất & dịch vụ"
              title="Không gian khám chữa bệnh rõ ràng, sạch sẽ và dễ di chuyển."
              description="Từ tiếp đón, tư vấn, cận lâm sàng đến theo dõi sau khám, mỗi điểm chạm được tổ chức để người bệnh và người nhà dễ nắm thông tin."
            />
            <div className="mt-8 grid gap-5">
              {trustPillars.map((pillar) => (
                <article key={pillar.title} className="rounded-[1.6rem] border border-[rgba(17,61,114,0.1)] bg-white/88 p-5">
                  <h3 className="text-2xl font-semibold text-[var(--color-ink)]">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="grid gap-5">
            {featuredSpaces.map((space) => (
              <article key={space.title} className="premium-hover-card grid overflow-hidden rounded-[1.8rem] border border-[rgba(17,61,114,0.1)] bg-white/88 shadow-[0_24px_90px_-76px_rgba(22,32,43,0.5)] md:grid-cols-[0.42fr_0.58fr]">
                <div className="relative min-h-56 bg-[var(--color-mist)]">
                  <Image
                    src={space.image}
                    alt={space.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 28vw"
                    className="media-kenburns media-kenburns-gentle object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold leading-8 text-[var(--color-ink)]">{space.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{space.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[rgba(17,61,114,0.08)] bg-white/72">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <SectionHeading
              eyebrow="Gói khám & chương trình"
              title="Gói khám được xây dựng theo nhu cầu của từng nhóm người bệnh."
              description="Người bận rộn, phụ nữ, nhóm nguy cơ ung thư, người cao tuổi và doanh nghiệp đều có lộ trình kiểm tra, tư vấn và theo dõi riêng."
            />
            <div className="grid gap-5 md:grid-cols-2">
              {packageOptions.map((pkg) => (
                <article key={pkg.name} className="rounded-[1.6rem] border border-[rgba(17,61,114,0.1)] bg-[var(--color-paper)] p-5">
                  <h3 className="font-serif text-2xl leading-tight text-[var(--color-ink)]">{pkg.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{pkg.description}</p>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--color-ink)]">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--color-brand)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="Đội ngũ chuyên gia"
              title="Đội ngũ bác sĩ được giới thiệu bằng chuyên môn và lịch tiếp nhận rõ ràng."
              description="Người bệnh có thể xem chuyên khoa, thế mạnh lâm sàng, lịch khám và dịch vụ liên quan trước khi đặt lịch."
            />
            <div className="mt-8 grid gap-5">
              {doctorProfiles.slice(0, 3).map((doctor) => (
                <article
                  key={doctor.slug}
                  className="grid gap-5 rounded-[1.7rem] border border-[rgba(17,61,114,0.1)] bg-white/88 p-4 shadow-[0_22px_80px_-70px_rgba(22,32,43,0.5)] sm:grid-cols-[128px_1fr] sm:items-center"
                >
                  <div className="relative h-40 overflow-hidden rounded-[1.3rem] bg-[var(--color-mist)] sm:h-36">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      sizes="160px"
                      className="media-float object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                      {doctor.role}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-[var(--color-ink)]">{doctor.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{doctor.focus}</p>
                    <ActionLink href={`/bac-si/${doctor.slug}`} variant="ghost" className="mt-3 px-0">
                      Xem hồ sơ bác sĩ
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </ActionLink>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="grid content-start gap-5">
            {patientJourney.map((journey) => (
              <article key={journey.step} className="rounded-[1.7rem] border border-[rgba(17,61,114,0.1)] bg-white/88 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                  {journey.step}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-[var(--color-ink)]">{journey.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{journey.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,rgba(237,244,250,0.72),rgba(255,253,250,0.92))]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.96fr_1.04fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Thư viện kiến thức y khoa"
              title="Thông tin sức khỏe dễ hiểu trước khi người bệnh đặt lịch."
              description="Các bài viết được tổ chức theo chuyên khoa, triệu chứng, bệnh lý và dịch vụ, giúp người đọc hiểu vấn đề của mình và biết nên bắt đầu từ đâu."
            />
            <div className="mt-8 grid gap-3">
              {leadingArticles.slice(0, 5).map((article) => (
                <article key={article.title} className="rounded-[1.4rem] border border-[rgba(17,61,114,0.1)] bg-white/88 p-5">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--color-muted)]">
                    <span className="rounded-full bg-[var(--color-mist)] px-3 py-1 text-[var(--color-brand)]">
                      {article.category}
                    </span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold leading-7 text-[var(--color-ink)]">{article.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{article.summary}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="grid gap-5">
            <div className="rounded-[1.8rem] border border-[rgba(17,61,114,0.1)] bg-[var(--color-brand)] p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/62">
                Tìm theo triệu chứng
              </p>
              <h3 className="mt-4 font-serif text-3xl leading-tight">
                Để người bệnh bắt đầu bằng ngôn ngữ của họ.
              </h3>
              <div className="mt-6 grid gap-3">
                {symptomGroups.slice(0, 4).map((group) => (
                  <p key={group.name} className="rounded-2xl bg-white/8 p-4 text-sm leading-6 text-white/78">
                    <span className="font-semibold text-white">{group.name}</span>
                    <br />
                    {group.specialty} - {group.service}
                  </p>
                ))}
              </div>
            </div>
            {patientStories.map((story) => (
              <blockquote
                key={story.name}
                className="rounded-[1.7rem] border border-[rgba(17,61,114,0.1)] bg-white/88 p-6"
              >
                <p className="font-serif text-2xl leading-tight text-[var(--color-ink)]">“{story.quote}”</p>
                <footer className="mt-5 text-sm leading-7 text-[var(--color-muted)]">
                  <span className="font-semibold text-[var(--color-brand)]">{story.name}</span>
                  <br />
                  {story.service}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {faqItems.map((faq) => (
            <article
              key={faq.question}
              className="rounded-[1.7rem] border border-[rgba(17,61,114,0.1)] bg-white/88 p-6"
            >
              <h3 className="text-xl font-semibold leading-7 text-[var(--color-ink)]">{faq.question}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{faq.answer}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-[2rem] bg-[var(--color-brand)] p-6 text-white sm:p-8 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/64">
              Bắt đầu hành trình khám
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
              Cần chọn chuyên khoa, bác sĩ hay gói khám?
            </h2>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 lg:mt-0">
            <ActionLink href="/dat-lich" variant="secondary">
              <CalendarDays className="mr-2 h-4 w-4" />
              Đặt lịch khám
            </ActionLink>
            <ActionLink href="/tim-theo-trieu-chung" variant="ghost" className="text-white hover:bg-white/10">
              Tìm theo triệu chứng
            </ActionLink>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
