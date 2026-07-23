"use client";

import { useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Clock3,
  PackageCheck,
  Phone,
  Search,
  ShieldCheck,
  Stethoscope,
  UserRound,
} from "lucide-react";
import type { CmsContent } from "@/lib/cms-content";

type AppointmentIntent = "specialty" | "doctor" | "symptom" | "package";

const intentOptions: Array<{
  id: AppointmentIntent;
  label: string;
  description: string;
  icon: typeof Stethoscope;
}> = [
  {
    id: "specialty",
    label: "Theo khoa",
    description: "Chọn khoa bạn muốn khám, sau đó chọn dịch vụ hoặc bác sĩ.",
    icon: Stethoscope,
  },
  {
    id: "doctor",
    label: "Theo bác sĩ",
    description: "Chọn bác sĩ bạn muốn gặp hoặc xem lịch khám phù hợp.",
    icon: UserRound,
  },
  {
    id: "symptom",
    label: "Theo triệu chứng",
    description: "Mô tả vấn đề đang gặp nếu bạn chưa rõ nên khám khoa nào.",
    icon: Search,
  },
  {
    id: "package",
    label: "Theo gói khám",
    description: "Chọn gói tầm soát, khám định kỳ hoặc khám sức khỏe doanh nghiệp.",
    icon: PackageCheck,
  },
];

const patientTypes = ["Người lớn", "Trẻ em", "Thai phụ", "Người cao tuổi", "Đoàn khám doanh nghiệp"];
const timeSlots = ["07:30 - 09:00", "09:00 - 11:00", "13:30 - 15:00", "15:00 - 17:00", "Sau 17:00"];

const fieldClass =
  "w-full rounded-lg border border-[var(--color-line)] bg-white px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-muted)] focus:border-[var(--color-brand)] focus:ring-4 focus:ring-[rgba(0,135,165,0.1)]";

export function AppointmentFlow({
  doctorProfiles,
  medicalServices,
  packageOptions,
  siteInfo,
  specialties,
  symptomGroups,
}: Pick<
  CmsContent,
  "doctorProfiles" | "medicalServices" | "packageOptions" | "siteInfo" | "specialties" | "symptomGroups"
>) {
  const [intent, setIntent] = useState<AppointmentIntent>("specialty");
  const [specialtySlug, setSpecialtySlug] = useState(specialties[0]?.slug ?? "");
  const [doctorSlug, setDoctorSlug] = useState(doctorProfiles[0]?.slug ?? "");
  const [serviceSlug, setServiceSlug] = useState(medicalServices[0]?.slug ?? "");
  const [packageName, setPackageName] = useState(packageOptions[0]?.name ?? "");
  const [symptomName, setSymptomName] = useState(symptomGroups[0]?.name ?? "");
  const [submitted, setSubmitted] = useState(false);

  const selectedSpecialty = specialties.find((item) => item.slug === specialtySlug) ?? specialties[0];
  const selectedDoctor = doctorProfiles.find((item) => item.slug === doctorSlug) ?? doctorProfiles[0];
  const selectedService = medicalServices.find((item) => item.slug === serviceSlug) ?? medicalServices[0];
  const selectedPackage = packageOptions.find((item) => item.name === packageName) ?? packageOptions[0];
  const selectedSymptom = symptomGroups.find((item) => item.name === symptomName) ?? symptomGroups[0];
  const specialtyServices = medicalServices.filter((item) => item.specialtySlug === specialtySlug);
  const specialtyDoctors = doctorProfiles.filter((item) => item.specialtySlug === specialtySlug);

  function handleDoctorChange(nextSlug: string) {
    setDoctorSlug(nextSlug);
    const doctor = doctorProfiles.find((item) => item.slug === nextSlug);
    if (doctor) {
      setSpecialtySlug(doctor.specialtySlug);
    }
  }

  function handleSpecialtyChange(nextSlug: string) {
    setSpecialtySlug(nextSlug);
    const firstService = medicalServices.find((item) => item.specialtySlug === nextSlug);
    const firstDoctor = doctorProfiles.find((item) => item.specialtySlug === nextSlug);
    if (firstService) setServiceSlug(firstService.slug);
    if (firstDoctor) setDoctorSlug(firstDoctor.slug);
  }

  const summaryTitle =
    intent === "doctor"
      ? selectedDoctor?.name
      : intent === "symptom"
        ? selectedSymptom?.name
        : intent === "package"
          ? selectedPackage?.name
          : selectedSpecialty?.name;

  const summaryDescription =
    intent === "doctor"
      ? selectedDoctor?.focus
      : intent === "symptom"
        ? `${selectedSymptom?.specialty} - ${selectedSymptom?.service}`
        : intent === "package"
          ? selectedPackage?.description
          : selectedService?.summary;

  return (
    <section className="section-band">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <aside className="rounded-lg bg-[linear-gradient(180deg,var(--color-brand-deep),#073344)] p-6 text-white shadow-[var(--shadow-soft)] lg:sticky lg:top-36">
            <p className="text-sm font-bold uppercase text-[var(--color-gold-soft)]">
              Hỗ trợ đặt lịch
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight">
              Chọn cách đặt lịch phù hợp nhất với nhu cầu của bạn.
            </h2>
            <div className="mt-7 space-y-4">
              {[
                "Chọn cách đặt lịch phù hợp",
                "Điền thông tin liên hệ",
                "Nhận xác nhận lịch và hướng dẫn chuẩn bị",
              ].map((item, index) => (
                <div key={item} className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/12 text-sm font-bold">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-7 text-white/78">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-white/12 pt-5">
              <a
                href={`tel:${siteInfo.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold text-[var(--color-brand)]"
              >
                <Phone className="h-4 w-4" />
                {siteInfo.phone}
              </a>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Nếu có dấu hiệu cấp cứu hoặc cần khám trong ngày, vui lòng gọi tổng đài để được hướng dẫn ngay.
              </p>
            </div>
          </aside>

          <div>
            <div className="mb-6 max-w-3xl">
              <p className="editorial-rule text-sm font-bold uppercase text-[var(--color-brand)]">
                Bạn muốn đặt lịch theo cách nào?
              </p>
              <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[var(--color-ink)]">
                Bắt đầu từ khoa, bác sĩ, triệu chứng hoặc gói khám.
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                Chọn một phương án phù hợp để biểu mẫu chỉ hỏi những thông tin thật sự cần cho lịch hẹn của bạn.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3 xl:grid-cols-4">
              {intentOptions.map((option) => {
                const Icon = option.icon;
                const active = intent === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => {
                      setIntent(option.id);
                      setSubmitted(false);
                    }}
                    className={[
                      "rounded-lg border p-3 text-left transition sm:p-4",
                      active
                        ? "border-[var(--color-brand)] bg-[var(--color-brand-deep)] text-white shadow-[var(--shadow-soft)]"
                        : "border-[var(--color-line)] bg-white text-[var(--color-ink)] hover:border-[var(--color-brand)]",
                    ].join(" ")}
                  >
                    <Icon className={active ? "h-5 w-5 text-[var(--color-gold-soft)] sm:h-6 sm:w-6" : "h-5 w-5 text-[var(--color-brand)] sm:h-6 sm:w-6"} />
                    <span className="mt-3 block text-sm font-bold sm:mt-4 sm:text-base">{option.label}</span>
                    <span className={active ? "mt-2 block text-xs leading-5 text-white/74 sm:text-sm sm:leading-6" : "mt-2 block text-xs leading-5 text-[var(--color-muted)] sm:text-sm sm:leading-6"}>
                      {option.description}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_0.64fr]">
              <form className="clinical-card rounded-lg p-5 sm:p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-[var(--color-ink)]">Họ và tên</span>
                    <input className={fieldClass} placeholder="Nguyễn Văn A" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-[var(--color-ink)]">Số điện thoại</span>
                    <input className={fieldClass} placeholder="09..." />
                  </label>

                  {intent === "doctor" ? (
                    <label className="block sm:col-span-2">
                      <span className="mb-2 block text-sm font-bold text-[var(--color-ink)]">Bác sĩ mong muốn</span>
                      <select className={fieldClass} value={doctorSlug} onChange={(event) => handleDoctorChange(event.target.value)}>
                        {doctorProfiles.map((doctor) => (
                          <option key={doctor.slug} value={doctor.slug}>
                            {doctor.name} - {doctor.role}
                          </option>
                        ))}
                      </select>
                    </label>
                  ) : null}

                  {intent === "symptom" ? (
                    <label className="block sm:col-span-2">
                      <span className="mb-2 block text-sm font-bold text-[var(--color-ink)]">Triệu chứng chính</span>
                      <select className={fieldClass} value={symptomName} onChange={(event) => setSymptomName(event.target.value)}>
                        {symptomGroups.map((group) => (
                          <option key={group.name} value={group.name}>
                            {group.name}
                          </option>
                        ))}
                      </select>
                    </label>
                  ) : null}

                  {intent === "package" ? (
                    <label className="block sm:col-span-2">
                      <span className="mb-2 block text-sm font-bold text-[var(--color-ink)]">Gói khám</span>
                      <select className={fieldClass} value={packageName} onChange={(event) => setPackageName(event.target.value)}>
                        {packageOptions.map((item) => (
                          <option key={item.name} value={item.name}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </label>
                  ) : null}

                  {intent === "specialty" ? (
                    <>
                      <label className="block">
                        <span className="mb-2 block text-sm font-bold text-[var(--color-ink)]">Khoa khám</span>
                        <select className={fieldClass} value={specialtySlug} onChange={(event) => handleSpecialtyChange(event.target.value)}>
                          {specialties.map((specialty) => (
                            <option key={specialty.slug} value={specialty.slug}>
                              {specialty.name}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-sm font-bold text-[var(--color-ink)]">Dịch vụ liên quan</span>
                        <select className={fieldClass} value={serviceSlug} onChange={(event) => setServiceSlug(event.target.value)}>
                          {(specialtyServices.length > 0 ? specialtyServices : medicalServices).map((service) => (
                            <option key={service.slug} value={service.slug}>
                              {service.name}
                            </option>
                          ))}
                        </select>
                      </label>
                    </>
                  ) : null}

                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-[var(--color-ink)]">Đối tượng đặt lịch</span>
                    <select className={fieldClass}>
                      {patientTypes.map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-[var(--color-ink)]">Khung giờ ưu tiên</span>
                    <select className={fieldClass}>
                      {timeSlots.map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-[var(--color-ink)]">Ngày mong muốn</span>
                    <input className={fieldClass} type="date" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-[var(--color-ink)]">Kênh xác nhận</span>
                    <select className={fieldClass}>
                      <option>Gọi điện</option>
                      <option>Zalo</option>
                      <option>Email</option>
                    </select>
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-sm font-bold text-[var(--color-ink)]">Thông tin cần bệnh viện hỗ trợ</span>
                    <textarea
                      className={`${fieldClass} min-h-28`}
                      placeholder="Ví dụ: đã có kết quả xét nghiệm cũ, muốn khám buổi sáng, cần hỗ trợ người cao tuổi..."
                    />
                  </label>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSubmitted(true)}
                    data-analytics-event="appointment_submit"
                    className="inline-flex items-center rounded-lg bg-[var(--color-brand)] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[var(--color-brand-strong)]"
                  >
                    <CalendarDays className="mr-2 h-4 w-4" />
                    Gửi yêu cầu đặt lịch
                  </button>
                  <label className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-muted)]">
                    <input type="checkbox" className="h-4 w-4 accent-[var(--color-brand)]" />
                    Cần hỗ trợ trong ngày
                  </label>
                </div>

                {submitted ? (
                  <div className="mt-5 flex gap-3 rounded-lg border border-[rgba(69,173,139,0.24)] bg-[var(--color-accent-soft)] p-4 text-sm leading-7 text-[var(--color-ink)]">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[var(--color-accent)]" />
                    <p>
                      Yêu cầu của bạn đã được ghi nhận. Nhân viên bệnh viện sẽ liên hệ để xác nhận lịch hẹn và hướng dẫn trước khi đến.
                    </p>
                  </div>
                ) : null}
              </form>

              <aside className="rounded-lg border border-[var(--color-line)] bg-white p-5 shadow-[var(--shadow-soft)]">
                <p className="text-sm font-bold uppercase text-[var(--color-brand)]">Tóm tắt lịch hẹn</p>
                <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight text-[var(--color-ink)]">
                  {summaryTitle}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{summaryDescription}</p>

                <div className="mt-5 space-y-3 border-t border-[var(--color-line)] pt-5">
                  <SummaryItem icon={Clock3} title="Thời gian phản hồi" value="Trong giờ hành chính hoặc nhanh hơn nếu cần hỗ trợ trong ngày" />
                  <SummaryItem icon={ShieldCheck} title="Chuẩn bị trước khám" value="Mang kết quả cũ, đơn thuốc đang dùng và giấy tờ tùy thân" />
                  <SummaryItem icon={ClipboardList} title="Bác sĩ hoặc khoa phù hợp" value={intent === "doctor" ? selectedSpecialty?.name : specialtyDoctors[0]?.name ?? "Nhân viên bệnh viện sẽ tư vấn bác sĩ phù hợp"} />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SummaryItem({
  icon: Icon,
  title,
  value,
}: {
  icon: typeof Clock3;
  title: string;
  value?: string;
}) {
  return (
    <div className="flex gap-3">
      <Icon className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
      <div>
        <p className="text-sm font-bold text-[var(--color-ink)]">{title}</p>
        <p className="mt-1 text-sm leading-6 text-[var(--color-muted)]">{value}</p>
      </div>
    </div>
  );
}
