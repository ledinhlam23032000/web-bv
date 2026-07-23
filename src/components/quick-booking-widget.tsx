"use client";

import { FormEvent, MouseEvent as ReactMouseEvent, useEffect, useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  MessageCircleMore,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  X,
} from "lucide-react";
import type { CmsContent } from "@/lib/cms-content";

const fieldClass =
  "w-full rounded-2xl border border-[var(--color-line)] bg-white px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-muted)] focus:border-[var(--color-brand)] focus:ring-4 focus:ring-[rgba(0,135,165,0.11)]";

export function QuickBookingWidget({
  packageOptions,
  siteInfo,
  specialties,
}: Pick<CmsContent, "packageOptions" | "siteInfo" | "specialties">) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    function handleDocumentClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (!anchor || anchor.dataset.bookingFullLink === "true") return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      try {
        const url = new URL(anchor.href);
        if (url.origin === window.location.origin && url.pathname === "/dat-lich") {
          event.preventDefault();
          setSubmitted(false);
          setOpen(true);
        }
      } catch {
        // Ignore malformed links and let the browser handle them normally.
      }
    }

    document.addEventListener("click", handleDocumentClick, true);
    return () => document.removeEventListener("click", handleDocumentClick, true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", handleKeydown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [open]);

  function handleFloatingClick(event: ReactMouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setSubmitted(false);
    setOpen(true);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={handleFloatingClick}
        data-quick-booking-trigger="true"
        data-analytics-event="quick_booking_open"
        className="group fixed bottom-24 right-4 z-[70] flex items-center gap-2 rounded-full bg-[var(--color-brand)] p-2 text-white shadow-[0_22px_70px_-32px_rgba(0,104,132,0.92)] transition hover:-translate-y-1 hover:bg-[var(--color-brand-strong)] lg:bottom-8 lg:right-8"
        aria-label="Mở đặt lịch nhanh"
      >
        <span className="absolute inset-0 -z-10 rounded-full bg-[var(--color-brand)] opacity-30 blur-xl transition group-hover:scale-125" />
        <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-[var(--color-brand)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)]">
          <CalendarDays className="h-6 w-6" />
        </span>
        <span className="hidden pr-4 text-sm font-bold leading-tight sm:block">
          Đặt lịch
          <span className="block text-xs font-semibold text-white/76">nhanh</span>
        </span>
      </button>

      {open ? (
        <div className="fixed inset-0 z-[90] flex items-end justify-center bg-[rgba(5,31,42,0.55)] p-3 backdrop-blur-sm lg:items-center lg:justify-end lg:p-6">
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Đóng đặt lịch nhanh"
            onClick={() => setOpen(false)}
          />
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="quick-booking-title"
            className="relative max-h-[92vh] w-full overflow-y-auto rounded-[2rem] bg-white shadow-[0_34px_120px_-54px_rgba(0,0,0,0.72)] lg:max-w-[520px]"
          >
            <div className="relative overflow-hidden rounded-t-[2rem] bg-[linear-gradient(135deg,var(--color-brand-deep),var(--color-brand),#0a9bb6)] p-6 text-white">
              <span className="spotlight-orb -right-8 top-6 h-28 w-28 bg-white/20" />
              <div className="relative flex items-start justify-between gap-5">
                <div>
                  <p className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-gold-soft)]">
                    <Sparkles className="h-3.5 w-3.5" />
                    Đặt lịch nhanh
                  </p>
                  <h2 id="quick-booking-title" className="mt-4 font-serif text-3xl font-semibold leading-tight">
                    Đặt lịch khám nhanh chỉ trong vài bước.
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-white/78">
                    Chỉ cần để lại một vài thông tin cơ bản. Nhân viên bệnh viện sẽ gọi lại để xác nhận nhu cầu và thời gian phù hợp.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/12 transition hover:bg-white/20"
                  aria-label="Đóng"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <div className="grid grid-cols-3 gap-2 text-center">
                <MiniTrust icon={Clock3} title="Nhanh" value="Phản hồi trong giờ làm việc" />
                <MiniTrust icon={ShieldCheck} title="Rõ ràng" value="Được hướng dẫn trước khi đến" />
                <MiniTrust icon={Stethoscope} title="Dễ dàng" value="Chưa rõ khoa vẫn có thể đặt" />
              </div>

              <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-[var(--color-ink)]">Họ và tên</span>
                    <input className={fieldClass} placeholder="Nguyễn Văn A" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-[var(--color-ink)]">Số điện thoại</span>
                    <input className={fieldClass} placeholder="09..." inputMode="tel" />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-[var(--color-ink)]">Nhu cầu khám</span>
                  <select className={fieldClass} defaultValue={specialties[0]?.name}>
                    {specialties.map((specialty) => (
                      <option key={specialty.slug}>{specialty.name}</option>
                    ))}
                    {packageOptions.slice(0, 3).map((item) => (
                      <option key={item.name}>{item.name}</option>
                    ))}
                    <option>Chưa rõ, cần được tư vấn</option>
                  </select>
                </label>

                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-[var(--color-ink)]">Thời gian ưu tiên</span>
                    <select className={fieldClass}>
                      <option>Sáng hôm nay</option>
                      <option>Chiều hôm nay</option>
                      <option>Ngày mai</option>
                      <option>Cuối tuần</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-[var(--color-ink)]">Kênh xác nhận</span>
                    <select className={fieldClass}>
                      <option>Gọi điện</option>
                      <option>Zalo</option>
                      <option>Email</option>
                    </select>
                  </label>
                </div>

                <button
                  type="submit"
                  data-analytics-event="quick_booking_submit"
                  className="flex w-full items-center justify-center rounded-full bg-[var(--color-brand)] px-5 py-4 text-sm font-bold text-white shadow-[0_18px_42px_-30px_rgba(0,104,132,0.92)] transition hover:-translate-y-0.5 hover:bg-[var(--color-brand-strong)]"
                >
                  Gửi yêu cầu đặt lịch nhanh
                  <ChevronRight className="ml-2 h-4 w-4" />
                </button>

                {submitted ? (
                  <div className="flex gap-3 rounded-2xl border border-[rgba(69,173,139,0.26)] bg-[var(--color-accent-soft)] p-4 text-sm leading-7 text-[var(--color-ink)]">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[var(--color-accent)]" />
                    <p>
                      Yêu cầu của bạn đã được ghi nhận. Nhân viên bệnh viện sẽ liên hệ để xác nhận lịch hẹn.
                    </p>
                  </div>
                ) : null}
              </form>

              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                <a
                  href={`tel:${siteInfo.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center justify-center rounded-full border border-[var(--color-line)] px-4 py-3 text-sm font-bold text-[var(--color-brand)]"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Gọi {siteInfo.phone}
                </a>
                <a
                  href="/lien-he"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--color-line)] px-4 py-3 text-sm font-bold text-[var(--color-ink)]"
                >
                  <MessageCircleMore className="mr-2 h-4 w-4 text-[var(--color-brand)]" />
                  Nhắn hỗ trợ
                </a>
              </div>

              <a
                href="/dat-lich"
                data-booking-full-link="true"
                className="mt-4 inline-flex w-full items-center justify-center text-sm font-bold text-[var(--color-brand)]"
              >
                Đặt lịch với đầy đủ thông tin
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}

function MiniTrust({
  icon: Icon,
  title,
  value,
}: {
  icon: typeof Clock3;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-[var(--color-panel)] p-3">
      <Icon className="mx-auto h-5 w-5 text-[var(--color-brand)]" />
      <p className="mt-2 text-xs font-bold text-[var(--color-ink)]">{title}</p>
      <p className="mt-1 text-[11px] leading-4 text-[var(--color-muted)]">{value}</p>
    </div>
  );
}
