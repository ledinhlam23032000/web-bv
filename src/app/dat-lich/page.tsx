import type { Metadata } from "next";
import { CalendarCheck2, Clock3, Headphones, ShieldCheck } from "lucide-react";
import { AppointmentFlow } from "@/components/appointment-flow";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/marketing";
import { SiteChrome } from "@/components/site-chrome";
import { siteInfo } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Đặt lịch khám",
  description: "Đặt lịch khám tại Bệnh viện Đa khoa Hồng Phúc.",
};

const assuranceItems = [
  {
    icon: Headphones,
    title: "Có nhân viên hỗ trợ",
    description: "Bạn vẫn có thể đặt lịch khi chưa rõ nên chọn khoa nào.",
  },
  {
    icon: CalendarCheck2,
    title: "Xác nhận trước khi đến",
    description: "Lịch hẹn, giấy tờ và lưu ý chuẩn bị được nhắc lại trước buổi khám.",
  },
  {
    icon: ShieldCheck,
    title: "Thông tin vừa đủ",
    description: "Biểu mẫu chỉ hỏi những thông tin cần thiết để xếp lịch và hướng dẫn ban đầu.",
  },
  {
    icon: Clock3,
    title: "Hỗ trợ khám trong ngày",
    description: "Nếu cần khám sớm, bạn có thể gọi tổng đài để được kiểm tra lịch gần nhất.",
  },
];

export default function AppointmentPage() {
  return (
    <SiteChrome>
      <Breadcrumbs items={[{ label: "Trang chủ", href: "/" }, { label: "Đặt lịch khám" }]} />
      <PageHero
        eyebrow="Đặt lịch khám"
        title="Chọn cách đặt lịch thuận tiện nhất với nhu cầu của bạn."
        description="Người bệnh có thể đặt theo khoa, bác sĩ, triệu chứng hoặc gói khám. Nhân viên bệnh viện sẽ xác nhận lịch và hướng dẫn chuẩn bị trước khi đến viện."
        imageSrc="/images/consultation.webp"
        imageAlt="Bác sĩ tư vấn cho người bệnh"
        actions={[
          { href: `tel:${siteInfo.phone.replace(/\s+/g, "")}`, label: "Gọi tổng đài" },
          { href: "/tim-theo-trieu-chung", label: "Tìm theo triệu chứng", variant: "secondary" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {assuranceItems.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="premium-hover-card rounded-lg border border-[var(--color-line)] bg-white p-5 shadow-[var(--shadow-soft)]">
                <Icon className="h-7 w-7 text-[var(--color-brand)]" />
                <h2 className="mt-4 text-lg font-bold text-[var(--color-ink)]">{item.title}</h2>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <AppointmentFlow />
    </SiteChrome>
  );
}
