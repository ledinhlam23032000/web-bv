import type { Metadata } from "next";
import { Be_Vietnam_Pro, Noto_Serif } from "next/font/google";
import { getCmsContent } from "@/lib/cms-content";
import { getSiteUrl, resolveAbsoluteUrl } from "@/lib/seo";
import { SiteAnalytics } from "@/components/site-analytics";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

const notoSerif = Noto_Serif({
  variable: "--font-display",
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700", "800"],
});

export async function generateMetadata(): Promise<Metadata> {
  const { siteInfo } = await getCmsContent();
  const seoTitle = siteInfo.seo?.title || siteInfo.name;
  const seoDescription = siteInfo.seo?.description || siteInfo.description;
  const socialImage = siteInfo.seo?.socialImage;

  return {
    metadataBase: new URL(getSiteUrl()),
    title: { default: seoTitle, template: `%s | ${siteInfo.name}` },
    description: seoDescription,
    keywords: [siteInfo.name, "bệnh viện đa khoa Hải Phòng", "khám chuyên khoa", "đặt lịch khám", "kiến thức sức khỏe"],
    alternates: { canonical: "/" },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: "/",
      siteName: siteInfo.name,
      locale: "vi_VN",
      type: "website",
      images: socialImage ? [socialImage] : undefined,
    },
    twitter: { card: "summary_large_image", title: seoTitle, description: seoDescription, images: socialImage ? [socialImage] : undefined },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { siteInfo, specialties } = await getCmsContent();
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
      address: { "@type": "PostalAddress", streetAddress: siteInfo.address, addressCountry: "VN" },
      areaServed: "Hải Phòng",
      medicalSpecialty: specialties.map((item) => item.name),
    },
  ];

  return (
    <html
      lang="vi"
      data-scroll-behavior="smooth"
      className={`${beVietnamPro.variable} ${notoSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        {children}
        <SiteAnalytics />
      </body>
    </html>
  );
}
