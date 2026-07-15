import type { Metadata } from "next";
import { Mail, MapPin, Phone, TimerReset } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ActionLink, PageHero, SectionHeading } from "@/components/marketing";
import { SiteChrome } from "@/components/site-chrome";
import { siteInfo } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: "Thông tin liên hệ và hỗ trợ người bệnh tại Bệnh viện Đa khoa Hồng Phúc.",
};

const contactCards = [
  { label: "Tổng đài tư vấn", value: siteInfo.phone, icon: Phone },
  { label: "Địa chỉ", value: siteInfo.address, icon: MapPin },
  { label: "Giờ hoạt động", value: siteInfo.hours, icon: TimerReset },
  { label: "Email hỗ trợ", value: siteInfo.email, icon: Mail },
];

const supportSteps = [
  "Mô tả ngắn gọn nhu cầu: đặt lịch, hỏi đường đi, hỏi chuẩn bị trước khám hay hỗ trợ cấp cứu.",
  "Cung cấp độ tuổi, triệu chứng chính, bệnh nền và thời điểm muốn đến viện để được hướng dẫn nhanh hơn.",
  "Giữ lại đơn thuốc, kết quả cũ và số điện thoại liên hệ để nhân viên hỗ trợ nắm đầy đủ thông tin.",
];

const emergencyNotes = [
  "Đau ngực dữ dội, khó thở, lơ mơ, co giật hoặc chấn thương nặng.",
  "Trẻ sốt cao kèm li bì, nôn nhiều, co giật hoặc mất nước.",
  "Người bệnh có bệnh nền nặng và tình trạng xấu đi nhanh trong vài giờ gần đây.",
];

export default function ContactPage() {
  return (
    <SiteChrome>
      <Breadcrumbs items={[{ label: "Trang chủ", href: "/" }, { label: "Liên hệ" }]} />
      <PageHero
        eyebrow="Liên hệ"
        title="Liên hệ Hồng Phúc khi bạn cần đặt lịch hoặc hỗ trợ y tế."
        description="Tìm nhanh số tổng đài, địa chỉ, giờ làm việc và hướng dẫn cần thiết trước khi đến bệnh viện."
        imageSrc="/images/building.webp"
        imageAlt="Bệnh viện nhìn từ trên cao"
        actions={[
          { href: "/dat-lich", label: "Đặt lịch ngay" },
          { href: `tel:${siteInfo.phone.replace(/\s+/g, "")}`, label: "Gọi tổng đài", variant: "secondary" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <SectionHeading
              eyebrow="Kênh hỗ trợ"
              title="Chọn đúng kênh để được hỗ trợ nhanh hơn."
              description="Bạn có thể gọi tổng đài để đặt lịch, hỏi cách chuẩn bị trước khám hoặc nhận hướng dẫn khi có tình huống cần cấp cứu."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {contactCards.map((card) => {
                const Icon = card.icon;

                return (
                  <article
                    key={card.label}
                    className="rounded-[1.8rem] border border-[var(--color-line)] bg-white/92 p-6 shadow-[0_22px_80px_-68px_rgba(19,35,48,0.28)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-mist)] text-[var(--color-brand)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-brand)]">
                      {card.label}
                    </p>
                    <p className="mt-3 text-xl leading-8 text-[var(--color-ink)]">{card.value}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="space-y-5">
            <article className="rounded-[2rem] bg-[linear-gradient(135deg,var(--color-brand-deep),var(--color-brand),#0f78c2)] p-6 text-white shadow-[0_30px_100px_-72px_rgba(7,63,120,0.72)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">Hỗ trợ người bệnh</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-[2.2rem]">
                Gọi hoặc đặt lịch sẽ hiệu quả hơn nếu chuẩn bị đúng thông tin.
              </h2>
              <div className="mt-5 space-y-3">
                {supportSteps.map((item) => (
                  <p key={item} className="rounded-[1.25rem] bg-white/10 px-4 py-3 text-sm leading-7 text-white/78">
                    {item}
                  </p>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <ActionLink href="/dat-lich" variant="contrast">
                  Đặt lịch khám
                </ActionLink>
                <ActionLink href="/huong-dan-khach-hang" variant="secondary">
                  Xem hướng dẫn
                </ActionLink>
              </div>
            </article>

            <article className="rounded-[1.8rem] border border-[rgba(7,93,168,0.14)] bg-[linear-gradient(135deg,rgba(7,93,168,0.08),rgba(255,255,255,0.96))] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-brand)]">
                Khi nào nên vào thẳng cấp cứu
              </p>
              <div className="mt-4 space-y-3">
                {emergencyNotes.map((item) => (
                  <p key={item} className="rounded-[1.2rem] bg-white/88 px-4 py-3 text-sm leading-7 text-[var(--color-muted)]">
                    {item}
                  </p>
                ))}
              </div>
            </article>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-[var(--color-line)] bg-white/92 p-6 shadow-[0_24px_80px_-70px_rgba(19,35,48,0.24)] sm:p-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-brand)]">
                Trước khi gọi
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-8 text-[var(--color-ink)]">
                Chuẩn bị đúng sẽ giúp bệnh viện hỗ trợ nhanh hơn.
              </h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                Khi cung cấp đủ thông tin ban đầu, bạn sẽ được hướng dẫn đúng chuyên khoa, khung giờ và những điều cần chuẩn bị trước khi đến.
              </p>
            </div>
            <div className="grid gap-3">
              <p className="rounded-[1.2rem] bg-[var(--color-panel)] px-4 py-3 text-sm leading-7 text-[var(--color-muted)]">
                Họ tên và số điện thoại liên hệ của người bệnh hoặc người nhà.
              </p>
              <p className="rounded-[1.2rem] bg-[var(--color-panel)] px-4 py-3 text-sm leading-7 text-[var(--color-muted)]">
                Triệu chứng chính, thời điểm xuất hiện và các bệnh nền quan trọng nếu có.
              </p>
              <p className="rounded-[1.2rem] bg-[var(--color-panel)] px-4 py-3 text-sm leading-7 text-[var(--color-muted)]">
                Kết quả xét nghiệm, phim chụp hoặc đơn thuốc gần nhất để bác sĩ và nhân viên hỗ trợ nắm nhanh tình trạng.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
