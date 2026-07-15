import type { Metadata } from "next";
import { ActionLink, PageHero } from "@/components/marketing";
import { SiteChrome } from "@/components/site-chrome";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { guideTopics } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Hướng dẫn người bệnh",
  description: "Thông tin về chuẩn bị trước khám, bảo hiểm và quy trình đi khám tại Hồng Phúc.",
};

export default function CustomerGuidePage() {
  return (
    <SiteChrome>
      <Breadcrumbs
        items={[{ label: "Trang chủ", href: "/" }, { label: "Hướng dẫn người bệnh" }]}
      />
      <PageHero
        eyebrow="Trước khi đến khám"
        title="Chuẩn bị đầy đủ để buổi khám diễn ra thuận tiện hơn."
        description="Xem trước giấy tờ cần mang, thông tin về bảo hiểm và những lưu ý khi làm xét nghiệm, siêu âm hoặc nội soi."
        imageSrc="/images/facility.webp"
        imageAlt="Không gian tiếp đón và hướng dẫn"
        actions={[
          { href: "/dat-lich", label: "Đặt lịch khám" },
          { href: "/lien-he", label: "Liên hệ hỗ trợ", variant: "secondary" },
        ]}
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {guideTopics.map((topic) => (
            <article
              key={topic.title}
              className="rounded-[32px] border border-white/70 bg-white/82 p-6 shadow-[0_24px_90px_-68px_rgba(19,35,48,0.5)]"
            >
              <h2 className="text-2xl font-semibold leading-tight text-[var(--color-ink)]">{topic.title}</h2>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{topic.description}</p>
              <ActionLink href="/lien-he" variant="ghost" className="mt-4 px-0">
                Cần tư vấn thêm
              </ActionLink>
            </article>
          ))}
        </div>
      </section>
    </SiteChrome>
  );
}
