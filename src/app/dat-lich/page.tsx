import type { Metadata } from "next";
import { CalendarDays, Clock3, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/marketing";
import { SiteChrome } from "@/components/site-chrome";
import { siteInfo } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Đặt lịch khám",
  description: "Đặt lịch khám tại Bệnh viện Đa khoa Hồng Phúc.",
};

const inputClassName =
  "w-full rounded-2xl border border-[rgba(7,93,168,0.14)] bg-white px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-muted)] focus:border-[rgba(7,93,168,0.42)]";

export default function AppointmentPage() {
  return (
    <SiteChrome>
      <Breadcrumbs items={[{ label: "Trang chủ", href: "/" }, { label: "Đặt lịch khám" }]} />
      <PageHero
        eyebrow="Đặt lịch khám"
        title="Gửi nhu cầu khám để đội điều phối sắp xếp chuyên khoa phù hợp."
        description="Người bệnh có thể chọn chuyên khoa, bác sĩ, khung giờ mong muốn hoặc mô tả triệu chứng. Đội chăm sóc khách hàng sẽ liên hệ xác nhận và hướng dẫn chuẩn bị trước khi đến viện."
        imageSrc="/images/consultation.webp"
        imageAlt="Bác sĩ tư vấn cho người bệnh"
        actions={[
          { href: `tel:${siteInfo.phone.replace(/\s+/g, "")}`, label: "Gọi tổng đài" },
          { href: "/lien-he", label: "Cần hỗ trợ thêm", variant: "secondary" },
        ]}
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <form className="rounded-[34px] border border-[rgba(7,93,168,0.1)] bg-white p-6 shadow-[0_24px_90px_-68px_rgba(4,63,120,0.5)] sm:p-8">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                Thông tin đặt lịch
              </p>
              <h2 className="font-serif text-4xl text-[var(--color-ink)]">Gửi yêu cầu khám</h2>
              <p className="text-sm leading-7 text-[var(--color-muted)]">
                Điền thông tin cơ bản để Hồng Phúc hỗ trợ chọn đúng chuyên khoa, giảm thời gian chờ và chuẩn bị hồ sơ tốt hơn.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <input className={inputClassName} placeholder="Họ và tên" />
              <input className={inputClassName} placeholder="Số điện thoại" />
              <input className={inputClassName} placeholder="Email" />
              <input className={inputClassName} placeholder="Chuyên khoa mong muốn" />
              <input className={inputClassName} placeholder="Ngày mong muốn" />
              <input className={inputClassName} placeholder="Khung giờ ưu tiên" />
              <textarea
                className={`${inputClassName} min-h-32 sm:col-span-2`}
                placeholder="Mô tả ngắn triệu chứng hoặc nhu cầu thăm khám"
              />
            </div>
            <button
              type="button"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_-22px_rgba(7,93,168,0.9)] transition hover:-translate-y-0.5 hover:bg-[var(--color-brand-strong)]"
            >
              <CalendarDays className="mr-2 h-4 w-4" />
              Gửi yêu cầu đặt lịch
            </button>
          </form>
          <div className="grid gap-5">
            {[
              {
                icon: Clock3,
                title: "Xác nhận lịch rõ ràng",
                description:
                  "Đội điều phối liên hệ lại để xác nhận chuyên khoa, khung giờ và những giấy tờ cần mang theo.",
              },
              {
                icon: ShieldCheck,
                title: "Thông tin gọn và riêng tư",
                description:
                  "Biểu mẫu chỉ yêu cầu những thông tin cần thiết cho việc sắp lịch và chuẩn bị trước buổi khám.",
              },
              {
                icon: CalendarDays,
                title: "Hướng dẫn trước khi đến viện",
                description:
                  "Nếu dịch vụ cần nhịn ăn, chuẩn bị kết quả cũ hoặc đến sớm hơn giờ hẹn, người bệnh sẽ được nhắc trước.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-[30px] border border-[rgba(7,93,168,0.1)] bg-white p-6 shadow-[0_24px_90px_-68px_rgba(4,63,120,0.42)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-mist)] text-[var(--color-brand)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-[var(--color-ink)]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
