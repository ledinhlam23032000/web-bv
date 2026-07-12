import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { getSiteUrl, resolveAbsoluteUrl } from "@/lib/seo";
import { siteInfo, specialties } from "@/lib/site-content";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteInfo.name,
    url: resolveAbsoluteUrl("/"),
    description: siteInfo.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${resolveAbsoluteUrl("/kien-thuc")}?query={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: siteInfo.name,
    url: resolveAbsoluteUrl("/"),
    description: siteInfo.description,
    telephone: siteInfo.phone,
    email: siteInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteInfo.address,
      addressCountry: "VN",
    },
    areaServed: "Hải Phòng",
    medicalSpecialty: specialties.map((item) => item.name),
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Bệnh viện Đa khoa Hồng Phúc",
    template: "%s | Bệnh viện Đa khoa Hồng Phúc",
  },
  description:
    "Bệnh viện đa khoa quy mô lớn tại Hải Phòng với hệ chuyên khoa sâu, hợp tác chuyên môn quốc tế trong khu vực, đặt lịch khám và thư viện kiến thức y khoa.",
  keywords: [
    "Bệnh viện Đa khoa Hồng Phúc",
    "bệnh viện đa khoa Hải Phòng",
    "khám chuyên khoa",
    "đặt lịch khám",
    "hợp tác quốc tế y tế",
    "kiến thức sức khỏe",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bệnh viện Đa khoa Hồng Phúc",
    description:
      "Cổng thông tin bệnh viện đa khoa với chuyên khoa sâu, hợp tác chuyên môn quốc tế, đặt lịch khám và thư viện y khoa.",
    url: "/",
    siteName: "Bệnh viện Đa khoa Hồng Phúc",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bệnh viện Đa khoa Hồng Phúc",
    description:
      "Bệnh viện đa khoa tại Hải Phòng với chuyên khoa sâu, hợp tác chuyên môn quốc tế và thư viện kiến thức sức khỏe.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${beVietnamPro.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
