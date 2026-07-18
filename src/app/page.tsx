import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Award,
  BookOpenText,
  Building2,
  CalendarDays,
  ChevronRight,
  CircleAlert,
  Globe2,
  HeartHandshake,
  HeartPulse,
  Microscope,
  Phone,
  ScanSearch,
  Search,
  ShieldCheck,
  Stethoscope,
  UsersRound,
} from "lucide-react";
import { ActionLink, SectionHeading } from "@/components/marketing";
import { SiteChrome } from "@/components/site-chrome";
import { getCmsBlock, getCmsContent, getCmsPageMetadata } from "@/lib/cms-content";
import { getArticleSlug } from "@/lib/site-content";

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

const serviceVisuals = [
  "/images/consultation-premium.webp",
  "/images/diagnostic-imaging-premium.webp",
  "/images/medical-council-premium.webp",
  "/images/pediatrics-consultation-premium.webp",
  "/images/facility.webp",
  "/images/bedside.webp",
];

function blockText(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim() ? value : fallback;
}

export async function generateMetadata(): Promise<Metadata> {
  return getCmsPageMetadata("trang-chu", {
    title: "Bệnh viện Đa khoa Hồng Phúc",
    description: "Bệnh viện đa khoa tại Hải Phòng với hệ thống chuyên khoa, đặt lịch khám và thư viện kiến thức sức khỏe.",
    canonical: "/",
  });
}

export default async function Home() {
  const content = await getCmsContent();
  const {
    articleCatalog,
    doctorProfiles,
    featuredDepartments,
    featuredSpaces,
    medicalServices,
    packageOptions,
    qualityMetrics,
    quickActions,
    siteInfo,
    specialties,
    symptomGroups,
    technologyCapabilities,
    trustPillars,
  } = content;
  const homePage = content.pages["trang-chu"] ?? null;
  const hero = getCmsBlock(homePage, "hong-phuc/hero")?.attributes ?? {};
  const cta = getCmsBlock(homePage, "hong-phuc/cta")?.attributes ?? {};
  const blockOrder = new Map(homePage?.blocks.map((block, index) => [block.name, index]));
  const sectionStyle = (name: string) => {
    if (!homePage) return undefined;
    const order = blockOrder.get(name);
    return order === undefined ? { display: "none" } : { order };
  };
  const heroActions = quickActions.slice(0, 4).map((action, index) => ({
    ...action,
    title: action.label,
    icon: [Phone, CalendarDays, Stethoscope, HeartPulse][index] ?? Stethoscope,
  }));
  const campaignBadges = technologyCapabilities.slice(0, 4);
  const trustReasons = trustPillars.map((item, index) => ({
    ...item,
    icon: [Stethoscope, ShieldCheck, Microscope, HeartHandshake][index % 4],
  }));
  const certifications = qualityMetrics.slice(0, 3).map((item) => ({
    label: item.label,
    title: `${item.value} ${item.label}`,
    description: item.description,
  }));
  const serviceHighlights = [
    "kham-noi-tong-quat",
    "kham-ngoai-tong-quat",
    "kham-san-phu-khoa",
    "kham-nhi-tong-quat",
    "sieu-am-tong-quat",
    "cap-cuu-24-7",
  ]
    .map((slug) => medicalServices.find((service) => service.slug === slug))
    .filter((service): service is (typeof medicalServices)[number] => Boolean(service));
  const leadingArticles = articleCatalog.slice(0, 6);
  const marqueeItems = technologyCapabilities;
  const experienceScenes = featuredSpaces.map((scene, index) => ({
    eyebrow: ["Tiếp đón", "Hội chẩn", "Chuyên môn"][index] ?? "Không gian",
    title: scene.title,
    image: scene.image,
    href: ["/huong-dan-khach-hang", "/hop-tac-quoc-te", "/tim-bac-si"][index] ?? "/lien-he",
  }));
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: siteInfo.name,
    description: siteInfo.description,
    telephone: siteInfo.phone,
    email: siteInfo.email,
    address: { "@type": "PostalAddress", streetAddress: siteInfo.address, addressCountry: "VN" },
    medicalSpecialty: specialties.map((item) => item.name),
    areaServed: "Hải Phòng",
  };
  return (
    <SiteChrome>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col">
      <section style={sectionStyle("hong-phuc/hero")} className="relative min-h-[620px] overflow-hidden bg-[var(--color-brand-deep)]">
        <span className="spotlight-orb left-[8%] top-[18%] h-32 w-32 bg-[rgba(69,173,139,0.34)]" />
        <span className="spotlight-orb bottom-[12%] right-[12%] h-44 w-44 bg-[rgba(200,145,46,0.22)] [animation-delay:1.5s]" />
        <Image
          src={blockText(hero.image, "/images/hospital-lobby-premium.webp")}
          alt={blockText(hero.title, siteInfo.name)}
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="media-kenburns object-cover opacity-62"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,45,66,0.92),rgba(0,80,110,0.74),rgba(0,80,110,0.18))]" />
        <div className="relative mx-auto flex min-h-[620px] max-w-7xl flex-col justify-center px-4 py-14 pb-20 text-white sm:px-6 sm:pb-14 lg:px-8">
          <p className="text-sm font-bold uppercase text-[var(--color-accent-soft)]">
            {blockText(hero.eyebrow, siteInfo.tagline)}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            {blockText(hero.title, siteInfo.name)}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/84 sm:text-xl">
            {blockText(hero.description, siteInfo.description)}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ActionLink href={blockText(hero.primaryUrl, "/dat-lich")} variant="contrast" className="rounded-full px-5 py-3">
              <CalendarDays className="mr-2 h-4 w-4" />
              {blockText(hero.primaryLabel, "Đặt lịch khám")}
            </ActionLink>
            <ActionLink href={blockText(hero.secondaryUrl, "/tim-theo-trieu-chung")} variant="ghost" className="rounded-full border border-white/24 px-5 py-3 text-white hover:bg-white/12">
              <Search className="mr-2 h-4 w-4" />
              {blockText(hero.secondaryLabel, "Tìm theo triệu chứng")}
            </ActionLink>
          </div>
          <div className="mt-6 flex max-w-4xl flex-wrap gap-2">
            {campaignBadges.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/82 backdrop-blur"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
                {item}
              </span>
            ))}
          </div>
          <div className="mt-10 grid max-w-4xl gap-3 sm:grid-cols-3">
            {qualityMetrics.slice(0, 3).map((metric) => (
              <div key={metric.label} className="border-l border-white/28 pl-4">
                <p className="text-3xl font-bold">{metric.value}</p>
                <p className="mt-1 text-sm leading-6 text-white/76">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-10 right-[max(2rem,calc((100vw-80rem)/2))] hidden w-[360px] lg:block">
          <div className="image-depth-card media-float h-[230px] rounded-lg">
            <Image
              src="/images/doctor-team-premium.webp"
              alt="Đội ngũ bác sĩ đa chuyên khoa"
              fill
              sizes="360px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-gold-soft)]">Đội ngũ</p>
              <p className="mt-2 font-serif text-2xl font-semibold leading-tight">{qualityMetrics[1] ? `${qualityMetrics[1].value} ${qualityMetrics[1].label}` : "Đội ngũ đa chuyên khoa"}</p>
            </div>
          </div>
          <div className="absolute -left-16 -top-14 rounded-lg border border-white/24 bg-white/92 p-4 text-[var(--color-ink)] shadow-[var(--shadow-lift)]">
            <p className="text-xs font-bold uppercase text-[var(--color-brand)]">Hôm nay</p>
            <p className="mt-1 text-2xl font-bold">{siteInfo.hours.split(",")[0]}</p>
            <p className="mt-1 text-xs text-[var(--color-muted)]">Tiếp nhận khám trong ngày</p>
          </div>
        </div>
      </section>

      <section style={sectionStyle("hong-phuc/hero")} className="overflow-hidden border-y border-white/10 bg-[var(--color-brand-deep)] text-white">
        <div className="marquee-track py-3 text-sm font-bold uppercase tracking-[0.18em] text-white/78">
          {[0, 1].map((copy) => (
            <div key={copy} className="marquee-group" aria-hidden={copy === 1}>
              {marqueeItems.map((item) => (
                <span key={`${copy}-${item}`} className="marquee-item">
                  <span className="h-2 w-2 rounded-full bg-[var(--color-gold)]" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section style={sectionStyle("hong-phuc/quick-actions")} className="relative z-10 mx-auto max-w-6xl px-4 py-7 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-[1.75rem] border border-[var(--color-line)] bg-white shadow-[0_24px_80px_-52px_rgba(25,48,61,0.46)] md:grid-cols-4">
          {heroActions.map((action) => {
            const Icon = action.icon;
            const isPhone = action.href.startsWith("tel:");
            const content = (
              <>
                <Icon className="h-7 w-7 text-[var(--color-brand)]" />
                <div>
                  <h2 className="font-bold text-[var(--color-ink)]">{action.title}</h2>
                  <p className="mt-1 text-sm leading-6 text-[var(--color-muted)]">{action.description}</p>
                </div>
              </>
            );

            if (isPhone) {
              return (
                <a
                  key={action.title}
                  href={action.href}
                  className="flex gap-4 border-b border-[var(--color-line)] p-5 transition hover:bg-[var(--color-panel)] md:border-b-0 md:border-r"
                >
                  {content}
                </a>
              );
            }

            return (
              <Link
                key={action.title}
                href={action.href}
                className="flex gap-4 border-b border-[var(--color-line)] p-5 transition hover:bg-[var(--color-panel)] last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
              >
                {content}
              </Link>
            );
          })}
        </div>
      </section>

      <section style={sectionStyle("hong-phuc/trust-section")} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div className="relative min-h-[520px] overflow-hidden rounded-lg bg-[var(--color-mist)]">
            <Image
              src="/images/doctor-team-premium.webp"
              alt="Đội ngũ bác sĩ Hồng Phúc"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-top"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Tại sao nên chọn Hồng Phúc?"
              title="Sự an tâm bắt đầu từ chuyên môn vững và cách chăm sóc chu đáo."
              description="Tại Hồng Phúc, người bệnh được hướng dẫn rõ từ khi đặt lịch, gặp bác sĩ, thực hiện kiểm tra đến lúc nhận kết quả và theo dõi sau khám."
            />
            <div className="mt-9 grid gap-7 sm:grid-cols-2">
              {trustReasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <article key={reason.title}>
                    <Icon className="h-10 w-10 text-[var(--color-brand)]" />
                    <h3 className="mt-4 text-xl font-bold text-[var(--color-ink)]">{reason.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{reason.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section style={sectionStyle("hong-phuc/care-spaces")} className="section-band overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Không gian chăm sóc"
              title="Mỗi khu vực đều được tổ chức quanh sự an toàn và thoải mái của người bệnh."
              description="Từ sảnh tiếp đón, phòng khám, khu chẩn đoán hình ảnh đến không gian dành cho trẻ em, người bệnh luôn được hướng dẫn để buổi khám diễn ra thuận tiện hơn."
            />
            <ActionLink href="/huong-dan-khach-hang" variant="secondary">
              Xem quy trình đi khám
              <ArrowRight className="ml-2 h-4 w-4" />
            </ActionLink>
          </div>

          <div className="grid gap-4 lg:grid-cols-12">
            {experienceScenes.map((scene, index) => (
              <Link
                key={scene.title}
                href={scene.href}
                className={[
                  "image-depth-card kinetic-card group min-h-[260px] rounded-lg bg-[var(--color-brand-deep)]",
                  index === 0 ? "lg:col-span-7 lg:min-h-[460px]" : "",
                  index === 1 ? "lg:col-span-5 lg:min-h-[460px]" : "",
                  index > 1 ? "lg:col-span-4" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <Image
                  src={scene.image}
                  alt={scene.title}
                  fill
                  sizes={index < 2 ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 33vw"}
                  className="object-cover transition duration-700 group-hover:scale-[1.045]"
                />
                <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-gold-soft)]">{scene.eyebrow}</p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold leading-tight">{scene.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={sectionStyle("hong-phuc/quality-band")} className="bg-[var(--color-brand)] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase text-white/70">Năng lực và chất lượng</p>
            <h2 className="mt-3 text-4xl font-bold leading-tight lg:text-5xl">
              Chất lượng được duy trì bằng quy trình rõ ràng và sự phối hợp giữa các khoa.
            </h2>
            <ActionLink href="/hop-tac-quoc-te" variant="ghost" className="mt-7 border border-white/24 text-white hover:bg-white/10">
              Xem hợp tác chuyên môn
              <ArrowRight className="ml-2 h-4 w-4" />
            </ActionLink>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {certifications.map((item, index) => (
              <article key={item.title} className="rounded-lg bg-white p-5 text-[var(--color-ink)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-mist)] text-[var(--color-brand)]">
                  {index === 0 ? <ShieldCheck className="h-6 w-6" /> : null}
                  {index === 1 ? <Globe2 className="h-6 w-6" /> : null}
                  {index === 2 ? <Award className="h-6 w-6" /> : null}
                </div>
                <p className="mt-5 text-xs font-bold uppercase text-[var(--color-brand)]">{item.label}</p>
                <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={sectionStyle("hong-phuc/department-overview")} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <div className="relative min-h-[420px] overflow-hidden rounded-lg bg-[var(--color-mist)]">
              <Image
                src="/images/hospital-exterior-premium.webp"
                alt="Ngoại thất Bệnh viện Đa khoa Hồng Phúc"
                fill
                unoptimized
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="17 khoa chuyên môn"
              title="Mỗi khoa một nhiệm vụ rõ ràng, cùng phối hợp trong một kế hoạch chăm sóc."
              description="Từ Khoa Nội, Ngoại, Sản, Nhi đến Xét nghiệm, Chẩn đoán hình ảnh, Dược và Kiểm soát nhiễm khuẩn, các bước được kết nối để người bệnh không phải tự xoay xở giữa nhiều nơi."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {featuredDepartments.map((department) => (
                <article key={department.title} className="rounded-lg border border-[var(--color-line)] p-4">
                  <h3 className="font-bold text-[var(--color-ink)]">{department.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{department.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={sectionStyle("hong-phuc/service-showcase")} className="bg-[var(--color-panel)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Dịch vụ và chuyên khoa"
              title="Tìm dịch vụ phù hợp với nhu cầu của bạn."
              description="Mỗi dịch vụ đều có thông tin về đối tượng phù hợp, cách chuẩn bị, chuyên khoa thực hiện và những bước thường diễn ra trong buổi khám."
            />
            <div className="flex max-w-md items-center gap-3 rounded-lg border border-[var(--color-line)] bg-white px-4 py-3 text-sm text-[var(--color-muted)]">
              <Search className="h-5 w-5 text-[var(--color-brand)]" />
              <span>Tìm chuyên khoa, triệu chứng, dịch vụ...</span>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {serviceHighlights.map((service, index) => (
              <article key={service.slug} className="kinetic-card overflow-hidden rounded-lg bg-white shadow-[0_18px_60px_-52px_rgba(25,48,61,0.35)]">
                <div className="relative h-44 overflow-hidden bg-[var(--color-mist)]">
                  <Image
                    src={serviceVisuals[index % serviceVisuals.length]}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(5,44,58,0.34))]" />
                </div>
                <div className="p-5">
                <p className="text-xs font-bold uppercase text-[var(--color-brand)]">Dịch vụ</p>
                <h3 className="mt-2 text-xl font-bold text-[var(--color-ink)]">{service.name}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{service.summary}</p>
                <ActionLink href={`/dich-vu/${service.slug}`} variant="ghost" className="mt-4 px-0">
                  Xem dịch vụ
                  <ChevronRight className="ml-1 h-4 w-4" />
                </ActionLink>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {specialties.slice(0, 8).map((specialty, index) => {
              const Icon = specialtyIcons[index % specialtyIcons.length];
              return (
                <Link
                  key={specialty.slug}
                  href={specialty.href}
                  className="rounded-lg border border-[var(--color-line)] bg-white p-5 transition hover:border-[var(--color-brand)]"
                >
                  <Icon className="h-8 w-8 text-[var(--color-brand)]" />
                  <h3 className="mt-4 text-lg font-bold text-[var(--color-ink)]">{specialty.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{specialty.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section style={sectionStyle("hong-phuc/packages-symptoms")} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="Gói khám sức khỏe"
              title="Chủ động kiểm tra sức khỏe theo tuổi và nguy cơ."
              description="Bạn có thể chọn gói khám cá nhân, sức khỏe phụ nữ, tầm soát ung thư hoặc khám doanh nghiệp. Nhân viên bệnh viện sẽ tư vấn những hạng mục phù hợp trước khi đặt lịch."
            />
            <div className="mt-8 grid gap-4">
              {packageOptions.slice(0, 3).map((pkg) => (
                <article key={pkg.name} className="rounded-lg border border-[var(--color-line)] p-5">
                  <h3 className="text-xl font-bold text-[var(--color-ink)]">{pkg.name}</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{pkg.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {pkg.includes.slice(0, 3).map((item) => (
                      <span key={item} className="rounded-md bg-[var(--color-mist)] px-2.5 py-1 text-xs font-bold text-[var(--color-brand)]">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-lg bg-[var(--color-brand-deep)] p-6 text-white">
            <p className="text-sm font-bold uppercase text-white/70">Tìm theo triệu chứng</p>
            <h3 className="mt-3 text-3xl font-bold leading-tight">
              Mô tả điều bạn đang gặp để được gợi ý chuyên khoa phù hợp.
            </h3>
            <div className="mt-6 grid gap-3">
              {symptomGroups.slice(0, 6).map((group) => (
                <Link key={group.name} href={group.href} className="rounded-lg bg-white/8 p-4 hover:bg-white/12">
                  <span className="font-bold text-white">{group.name}</span>
                  <span className="mt-1 block text-sm leading-6 text-white/74">
                    {group.specialty} - {group.service}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={sectionStyle("hong-phuc/doctor-showcase")} className="bg-[var(--color-panel)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionHeading
                eyebrow="Đội ngũ chuyên gia"
              title="Tìm hiểu bác sĩ trước khi đặt lịch khám."
              description="Xem lĩnh vực chuyên sâu, kinh nghiệm, lịch khám dự kiến và các dịch vụ liên quan của từng bác sĩ."
              />
              <ActionLink href="/tim-bac-si" variant="secondary" className="mt-7">
                Xem toàn bộ bác sĩ
                <ArrowRight className="ml-2 h-4 w-4" />
              </ActionLink>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {doctorProfiles.slice(0, 4).map((doctor) => (
                <article key={doctor.slug} className="grid grid-cols-[112px_1fr] gap-4 rounded-lg bg-white p-4">
                  <div className="relative min-h-32 overflow-hidden rounded-lg bg-[var(--color-mist)]">
                    <Image src={doctor.image} alt={doctor.name} fill sizes="120px" className="object-cover object-top" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-[var(--color-brand)]">{doctor.role}</p>
                    <h3 className="mt-1 text-xl font-bold leading-7 text-[var(--color-ink)]">{doctor.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{doctor.focus}</p>
                    <ActionLink href={`/bac-si/${doctor.slug}`} variant="ghost" className="mt-3 px-0">
                      Xem hồ sơ
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </ActionLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={sectionStyle("hong-phuc/article-showcase")} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Thư viện kiến thức y khoa"
              title="Thông tin y khoa dễ hiểu cho người bệnh và gia đình."
              description="Bài viết giúp bạn nhận biết dấu hiệu cần lưu ý, hiểu mục đích của các xét nghiệm và chuẩn bị tốt hơn trước khi gặp bác sĩ."
            />
            <div className="mt-8 rounded-lg border border-[var(--color-line)] p-5">
              <BookOpenText className="h-8 w-8 text-[var(--color-brand)]" />
              <h3 className="mt-4 text-2xl font-bold text-[var(--color-ink)]">{leadingArticles[0]?.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{leadingArticles[0]?.summary}</p>
            </div>
          </div>
          <div className="grid gap-3">
            {leadingArticles.slice(1, 6).map((article) => (
              <Link key={article.title} href={`/kien-thuc/${getArticleSlug(article)}`} className="rounded-lg border border-[var(--color-line)] p-4 transition hover:border-[var(--color-brand)]">
                <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase text-[var(--color-brand)]">
                  <span>{article.category}</span>
                  <span className="text-[var(--color-muted)]">{article.readTime}</span>
                </div>
                <h3 className="mt-2 text-lg font-bold leading-7 text-[var(--color-ink)]">{article.title}</h3>
                <p className="mt-1 text-sm leading-6 text-[var(--color-muted)]">{article.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={sectionStyle("hong-phuc/cta")} className="bg-[var(--color-brand)] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase text-white/70">Bắt đầu đặt lịch khám</p>
            <h2 className="mt-3 text-4xl font-bold leading-tight">{blockText(cta.title, "Chưa biết nên chọn chuyên khoa, bác sĩ hay gói khám?")}</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <ActionLink href={blockText(cta.buttonUrl, "/dat-lich")} variant="contrast">
              <CalendarDays className="mr-2 h-4 w-4" />
              {blockText(cta.buttonLabel, "Đặt lịch khám")}
            </ActionLink>
            <ActionLink href="/lien-he" variant="ghost" className="border border-white/24 text-white hover:bg-white/10">
              <CircleAlert className="mr-2 h-4 w-4" />
              Cấp cứu 24/7
            </ActionLink>
          </div>
        </div>
      </section>
      </div>
    </SiteChrome>
  );
}
