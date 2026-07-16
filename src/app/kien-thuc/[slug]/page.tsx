import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  HelpCircle,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ActionLink } from "@/components/marketing";
import { SiteChrome } from "@/components/site-chrome";
import { getArticleContent } from "@/lib/article-details";
import type { ArticleDetailSection } from "@/lib/article-details";
import { getCmsContent } from "@/lib/cms-content";
import { getKnowledgeArticleBySlug, getKnowledgeArticles, type KnowledgeArticle } from "@/lib/headless-wordpress";
import { getArticleSlug } from "@/lib/site-content";

type Props = PageProps<"/kien-thuc/[slug]">;

type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "prompt"; text: string }
  | { type: "list"; items: string[] };

export async function generateStaticParams() {
  const articles = await getKnowledgeArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resolvedArticle = await getKnowledgeArticleBySlug(slug);

  if (!resolvedArticle) {
    return {};
  }

  const { article, content } = resolvedArticle;
  const title = content?.title ?? article.title;
  const description = content?.excerpt ?? article.summary;

  return {
    title,
    description,
    alternates: {
      canonical: `/kien-thuc/${article.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
    },
  };
}

function makeArticleSections(article: KnowledgeArticle): ArticleDetailSection[] {
  return [
    {
      heading: "Tổng quan",
      paragraphs: [
        `${article.title} là chủ đề người bệnh thường tìm kiếm khi muốn hiểu rõ tình trạng sức khỏe trước khi quyết định đi khám. Nội dung này được viết theo hướng dễ hiểu, tránh thuật ngữ không cần thiết và tập trung vào những câu hỏi thực tế: dấu hiệu nào nên chú ý, khi nào cần gặp bác sĩ và buổi khám thường được thực hiện như thế nào.`,
        article.summary,
      ],
    },
    {
      heading: "Khi nào nên đi khám?",
      paragraphs: [
        "Người bệnh nên chủ động đặt lịch khi triệu chứng kéo dài, lặp lại nhiều lần, ảnh hưởng tới sinh hoạt hoặc đi kèm dấu hiệu bất thường như đau tăng dần, sốt, khó thở, sụt cân, mệt nhiều, rối loạn ăn ngủ hoặc kết quả xét nghiệm ngoài giới hạn bình thường.",
        "Với các tình huống cấp tính như đau ngực dữ dội, khó thở, lơ mơ, co giật, chấn thương nặng hoặc trẻ nhỏ sốt cao kèm li bì, người nhà nên liên hệ cấp cứu hoặc đưa người bệnh tới cơ sở y tế ngay thay vì chờ lịch khám thông thường.",
      ],
    },
    {
      heading: "Tại Hồng Phúc, người bệnh được hỗ trợ thế nào?",
      paragraphs: [
        "Tại Bệnh viện Đa khoa Hồng Phúc, người bệnh được tiếp nhận thông tin ban đầu, tư vấn chuyên khoa phù hợp, thăm khám và thực hiện xét nghiệm hoặc chẩn đoán hình ảnh khi cần. Sau đó, bác sĩ giải thích kết quả bằng ngôn ngữ dễ hiểu và hướng dẫn bước tiếp theo.",
        "Với các trường hợp cần phối hợp nhiều chuyên khoa, hồ sơ có thể được rà soát bởi bác sĩ liên quan để giảm tình trạng người bệnh phải tự đi vòng quanh nhiều điểm khám. Mục tiêu là mỗi lần đến viện đều có câu trả lời cụ thể hơn, không chỉ là thêm một kết quả xét nghiệm.",
      ],
    },
    {
      heading: "Chuẩn bị trước buổi khám",
      paragraphs: [
        "Người bệnh nên mang theo giấy tờ tùy thân, đơn thuốc đang dùng, kết quả xét nghiệm hoặc phim chụp cũ nếu có. Nếu bài viết liên quan tới xét nghiệm máu, siêu âm bụng, nội soi hoặc thủ thuật, hãy hỏi trước về việc nhịn ăn, uống nước, sử dụng thuốc hay cần người thân đi cùng. Không tự ngừng thuốc khi chưa có hướng dẫn của bác sĩ.",
        "Trước khi gặp bác sĩ, nên ghi lại ba điều: triệu chứng bắt đầu từ khi nào, yếu tố nào làm triệu chứng nặng hơn hoặc nhẹ đi, và câu hỏi quan trọng nhất muốn được giải đáp. Việc chuẩn bị này giúp cuộc khám ngắn gọn nhưng hiệu quả hơn.",
      ],
    },
  ];
}

function makeFaq(article: KnowledgeArticle) {
  return [
    {
      question: `Bài viết về ${article.category.toLowerCase()} này có thay thế tư vấn bác sĩ không?`,
      answer:
        "Không. Bài viết giúp người đọc hiểu vấn đề và chuẩn bị trước khi đi khám, nhưng chẩn đoán và điều trị cần dựa trên thăm khám trực tiếp, tiền sử bệnh và kết quả cận lâm sàng phù hợp.",
    },
    {
      question: "Tôi chưa biết nên khám chuyên khoa nào thì bắt đầu từ đâu?",
      answer:
        "Bạn có thể bắt đầu bằng Khoa Nội hoặc mô tả triệu chứng khi đặt lịch. Nhân viên tư vấn sẽ hỗ trợ chọn khoa, bác sĩ hoặc dịch vụ phù hợp trước khi bạn đến bệnh viện.",
    },
    {
      question: "Có cần mang kết quả khám cũ không?",
      answer:
        "Nên mang theo nếu có. Kết quả cũ giúp bác sĩ so sánh tiến triển, tránh lặp lại xét nghiệm không cần thiết và xây dựng kế hoạch theo dõi chính xác hơn.",
    },
  ];
}

function toHeadingId(heading: string, index: number) {
  const slug = heading
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "d")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug ? `${slug}-${index + 1}` : `muc-${index + 1}`;
}

function getUseCase(article: KnowledgeArticle) {
  return article.summary;
}

const readerTypesByCategory: Record<string, string> = {
  "Giới thiệu": "Người bệnh và gia đình muốn tìm hiểu về Hồng Phúc trước khi lựa chọn nơi khám.",
  "Hệ thống y tế": "Người muốn hiểu cách nhiều chuyên khoa cùng phối hợp trong một kế hoạch chăm sóc.",
  "Hợp tác quốc tế": "Người quan tâm đến hội chẩn, đào tạo và chuyển giao kỹ thuật trong bệnh viện.",
  "Hướng dẫn người bệnh": "Người sắp đến Hồng Phúc khám lần đầu hoặc cần chuẩn bị lại hồ sơ tái khám.",
  "Nội tổng quát": "Người có triệu chứng kéo dài, nhiều bệnh nền hoặc chưa rõ nên bắt đầu khám từ khoa nào.",
  "Doanh nghiệp": "Bộ phận nhân sự, công đoàn và đơn vị đang chuẩn bị chương trình khám cho người lao động.",
  "Nội Tim mạch": "Người có triệu chứng tim mạch, yếu tố nguy cơ hoặc đang theo dõi bệnh tim mạch lâu dài.",
  "Dịch vụ": "Người sắp thực hiện một dịch vụ y tế và muốn biết cách chuẩn bị trước khi đến viện.",
  "Nội Ung bướu": "Người cần tầm soát theo nguy cơ, đang chờ kết quả hoặc đồng hành cùng người thân điều trị.",
  "Nội Tiêu hóa - Gan mật": "Người có triệu chứng dạ dày, đường ruột, gan mật hoặc đang chuẩn bị nội soi tiêu hóa.",
  "Sản phụ khoa": "Phụ nữ muốn chủ động chăm sóc sức khỏe phụ khoa và sức khỏe sinh sản.",
  "Thai sản": "Mẹ bầu và gia đình muốn theo dõi các mốc khám, siêu âm và xét nghiệm trong thai kỳ.",
  "Sức khỏe sinh sản": "Các cặp vợ chồng đang chuẩn bị mang thai hoặc cần đánh giá khả năng sinh sản.",
  "Nhi khoa": "Cha mẹ hoặc người chăm sóc trẻ sơ sinh, trẻ nhỏ và trẻ trong độ tuổi đi học.",
  "Nội Cơ xương khớp": "Người bị đau khớp, đau lưng, chấn thương hoặc gặp khó khăn khi vận động.",
  "Nội tiết - Chuyển hóa": "Người đang theo dõi đường huyết, tuyến giáp hoặc các rối loạn chuyển hóa.",
  "Gói khám": "Người muốn chọn danh mục kiểm tra phù hợp với tuổi, bệnh nền và nguy cơ cá nhân.",
  "Triệu chứng": "Người đang có dấu hiệu bất thường và cần biết khi nào nên đi khám.",
  "Chẩn đoán hình ảnh": "Người được chỉ định siêu âm, X-quang, chụp cắt lớp vi tính hoặc cộng hưởng từ.",
  "Xét nghiệm": "Người sắp làm xét nghiệm hoặc muốn hiểu ý nghĩa cơ bản của kết quả.",
  "Hồi sức cấp cứu": "Người bệnh và người nhà cần chuẩn bị cho tình huống phải đến cấp cứu.",
  "Kiểm soát nhiễm khuẩn": "Người bệnh, người nhà và người chăm sóc muốn cùng bệnh viện giảm nguy cơ lây nhiễm trong quá trình điều trị.",
  "Tạo hình thẩm mỹ": "Người đang tìm hiểu phẫu thuật tạo hình, phục hồi sau chấn thương hoặc can thiệp thẩm mỹ.",
};

function getReaderType(article: KnowledgeArticle, specialtyName?: string) {
  const readerType = readerTypesByCategory[article.category];
  if (readerType) {
    return readerType;
  }

  if (specialtyName) {
    return `Người bệnh đang chuẩn bị khám hoặc theo dõi tại chuyên khoa ${specialtyName.toLowerCase()}.`;
  }

  return "Người bệnh và người nhà muốn tìm hiểu thông tin cơ bản trước khi trao đổi với bác sĩ.";
}

function toNaturalPhrase(heading: string) {
  const phrase = heading
    .replace(/^\d+[.)]\s*/, "")
    .replace(/[?!.:]+$/, "")
    .trim();

  return phrase ? `${phrase.charAt(0).toLocaleLowerCase("vi-VN")}${phrase.slice(1)}` : "nội dung cần lưu ý";
}

function getMeaningfulHeadings(sections: ArticleDetailSection[]) {
  return sections
    .map((section) => section.heading.trim())
    .filter((heading) => heading && heading.toLocaleLowerCase("vi-VN") !== "nội dung chính");
}

function makeReadingSignals(
  article: KnowledgeArticle,
  sections: ArticleDetailSection[],
  specialtyName?: string,
) {
  const headings = getMeaningfulHeadings(sections);
  const organizationTopics = new Set([
    "Giới thiệu",
    "Hệ thống y tế",
    "Hợp tác quốc tế",
    "Hướng dẫn người bệnh",
    "Doanh nghiệp",
    "An toàn người bệnh",
  ]);

  return [
    `Bạn đang quan tâm đến chủ đề: ${article.title}`,
    headings[0]
      ? `Bạn muốn tìm hiểu ${toNaturalPhrase(headings[0])}.`
      : "Bạn muốn hiểu vấn đề rõ hơn trước khi quyết định đi khám.",
    specialtyName && !organizationTopics.has(article.category)
      ? `Bạn muốn chuẩn bị câu hỏi trước khi trao đổi với bác sĩ ${specialtyName.toLowerCase()}.`
      : "Bạn muốn chuẩn bị câu hỏi trước khi trao đổi với bác sĩ hoặc nhân viên bệnh viện.",
  ];
}

function makeKeyTakeaways(
  article: KnowledgeArticle,
  sections: ArticleDetailSection[],
) {
  const headings = getMeaningfulHeadings(sections);

  return [
    article.summary,
    headings[1]
      ? `Một nội dung đáng chú ý là ${toNaturalPhrase(headings[1])}.`
      : "Nếu triệu chứng kéo dài, tăng dần hoặc khiến bạn lo lắng, nên trao đổi trực tiếp với bác sĩ.",
    "Thông tin có giá trị nhất khi được dùng để chuẩn bị trước buổi khám, không thay thế đánh giá trực tiếp của bác sĩ.",
  ];
}

function toContentBlocks(paragraphs: string[]): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  let listBuffer: string[] = [];

  function flushListBuffer() {
    if (listBuffer.length >= 3) {
      blocks.push({ type: "list", items: listBuffer });
    } else {
      listBuffer.forEach((item) => blocks.push({ type: "paragraph", text: item }));
    }
    listBuffer = [];
  }

  for (const rawParagraph of paragraphs) {
    const paragraph = rawParagraph.trim();

    if (!paragraph) {
      continue;
    }

    const isPrompt = /^\d+\./.test(paragraph) || (paragraph.endsWith("?") && paragraph.length <= 110);
    const isListCandidate =
      !isPrompt &&
      paragraph.length <= 92 &&
      !paragraph.includes(":") &&
      !/[;:]/.test(paragraph);

    if (isPrompt) {
      flushListBuffer();
      blocks.push({ type: "prompt", text: paragraph });
      continue;
    }

    if (isListCandidate) {
      listBuffer.push(paragraph);
      continue;
    }

    flushListBuffer();
    blocks.push({ type: "paragraph", text: paragraph });
  }

  flushListBuffer();
  return blocks;
}

export default async function KnowledgeArticlePage({ params }: Props) {
  const { slug } = await params;
  const cms = await getCmsContent();
  const allArticles = await getKnowledgeArticles();
  const resolvedArticle = await getKnowledgeArticleBySlug(slug);

  if (!resolvedArticle) {
    notFound();
  }

  const { article, content } = resolvedArticle;
  const { doctorProfiles, guideTopics, medicalServices, siteInfo, specialties } = cms;
  const displayTitle = content?.title ?? article.title;
  const displaySummary = content?.excerpt ?? article.summary;
  const specialty = specialties.find((item) => item.slug === article.specialtySlug);
  const relatedServices = medicalServices.filter((item) => item.specialtySlug === article.specialtySlug).slice(0, 3);
  const relatedDoctors = doctorProfiles.filter((item) => item.specialtySlug === article.specialtySlug).slice(0, 2);
  const relatedArticles = allArticles
    .filter((item) => item.specialtySlug === article.specialtySlug)
    .filter((item) => item.title !== article.title)
    .slice(0, 3);
  const sections: ArticleDetailSection[] = content?.sections.length ? content.sections : makeArticleSections(article);
  const introParagraphs: string[] = content?.intro ?? [];
  const tocItems = [
    ...(introParagraphs.length > 0 ? [{ id: "mo-dau", label: "Mở đầu" }] : []),
    ...sections.map((section, index) => ({
      id: toHeadingId(section.heading, index),
      label: section.heading,
    })),
  ];
  const faq = makeFaq(article);
  const readingSignals = makeReadingSignals(article, sections, specialty?.name);
  const keyTakeaways = makeKeyTakeaways(article, sections);
  const useCase = getUseCase(article);
  const readerType = getReaderType(article, specialty?.name);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      headline: displayTitle,
      description: displaySummary,
      about: specialty?.name ?? article.category,
      medicalAudience: "Patient",
      publisher: {
        "@type": "Hospital",
        name: siteInfo.name,
        telephone: siteInfo.phone,
        address: siteInfo.address,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <SiteChrome>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Kiến thức", href: "/kien-thuc" },
          { label: displayTitle },
        ]}
      />

      <article>
        <header className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-[rgba(7,93,168,0.13)] bg-[radial-gradient(circle_at_18%_12%,rgba(16,166,178,0.14),transparent_32%),linear-gradient(135deg,#ffffff_0%,#eef7ff_54%,#d7ecff_100%)] p-6 shadow-[0_34px_120px_-82px_rgba(4,63,120,0.48)] sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.42fr] lg:items-end">
              <div>
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full bg-white/88 px-4 py-2 text-sm font-semibold text-[var(--color-brand)]">
                    {article.category}
                  </span>
                  {specialty ? (
                    <span className="rounded-full bg-[var(--color-brand)] px-4 py-2 text-sm font-semibold text-white">
                      {specialty.name}
                    </span>
                  ) : null}
                </div>
                <h1 className="mt-6 max-w-4xl font-serif text-3xl leading-tight text-[var(--color-ink)] sm:text-4xl lg:text-5xl">
                  {displayTitle}
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
                  {displaySummary}
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <article className="rounded-[1.35rem] border border-white/70 bg-white/82 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                      Bạn sẽ biết
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{useCase}</p>
                  </article>
                  <article className="rounded-[1.35rem] border border-white/70 bg-white/82 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                      Dành cho
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{readerType}</p>
                  </article>
                  <article className="rounded-[1.35rem] border border-white/70 bg-white/82 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                      Thời lượng đọc
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                      {article.readTime}
                    </p>
                  </article>
                </div>
              </div>

              <aside className="rounded-[1.8rem] border border-white/75 bg-white/82 p-5 backdrop-blur">
                <div className="flex items-center gap-3 text-sm font-semibold text-[var(--color-brand)]">
                  <Clock3 className="h-5 w-5" />
                  {article.readTime}
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  Nội dung chỉ có giá trị tham khảo, giúp người bệnh chuẩn bị câu hỏi trước khi trao đổi trực tiếp với bác sĩ.
                </p>
                <ActionLink href="/dat-lich" className="mt-5 w-full">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  Đặt lịch tư vấn
                </ActionLink>
              </aside>
            </div>
          </div>
        </header>

        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-8">
          <div className="rounded-[1.7rem] border border-[rgba(7,93,168,0.1)] bg-white/92 p-6 shadow-[0_24px_100px_-84px_rgba(4,63,120,0.46)] sm:p-8">
            <section className="rounded-[1.7rem] bg-[var(--color-mist)]/78 p-6">
              <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
                <div>
                  <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                    <Sparkles className="h-4 w-4" />
                    Bạn nên đọc bài này nếu
                  </div>
                  <div className="mt-4 grid gap-3">
                    {readingSignals.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-[1.2rem] bg-white/88 p-4">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                        <p className="text-sm leading-7 text-[var(--color-muted)]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-[1.4rem] border border-[rgba(7,93,168,0.08)] bg-white/90 p-5">
                  <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                    <ShieldCheck className="h-4 w-4" />
                    Điểm cần nhớ
                  </div>
                  <div className="mt-4 space-y-4">
                    {keyTakeaways.map((item) => (
                      <p key={item} className="text-sm leading-7 text-[var(--color-muted)]">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <div className="mt-8 max-w-none">
              {introParagraphs.length > 0 ? (
                <section id="mo-dau" className="scroll-mt-28 border-b border-[rgba(7,93,168,0.1)] pb-8">
                  <h2 className="font-serif text-2xl leading-tight text-[var(--color-ink)] sm:text-3xl">
                    Mở đầu
                  </h2>
                  <div className="mt-5 space-y-4">
                    {introParagraphs.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-8 text-[var(--color-muted)]">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ) : null}
              {sections.map((section, index) => {
                const blocks = toContentBlocks(section.paragraphs);

                return (
                  <section
                    key={section.heading}
                    id={toHeadingId(section.heading, index)}
                    className="scroll-mt-28 border-b border-[rgba(7,93,168,0.1)] py-8 first:pt-0 last:border-0 last:pb-0"
                  >
                    <h2 className="font-serif text-2xl leading-tight text-[var(--color-ink)] sm:text-3xl">
                      {section.heading}
                    </h2>
                    <div className="mt-5 space-y-4">
                      {blocks.map((block, blockIndex) => {
                        if (block.type === "prompt") {
                          return (
                            <h3
                              key={`${section.heading}-prompt-${blockIndex}`}
                              className="pt-2 text-xl font-semibold leading-8 text-[var(--color-ink)]"
                            >
                              {block.text}
                            </h3>
                          );
                        }

                        if (block.type === "list") {
                          return (
                            <div
                              key={`${section.heading}-list-${blockIndex}`}
                              className="grid gap-3 rounded-[1.35rem] bg-[var(--color-mist)]/76 p-5"
                            >
                              {block.items.map((item) => (
                                <div key={item} className="flex items-start gap-3">
                                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                                  <p className="text-base leading-7 text-[var(--color-muted)]">{item}</p>
                                </div>
                              ))}
                            </div>
                          );
                        }

                        return (
                          <p
                            key={`${section.heading}-paragraph-${blockIndex}`}
                            className="text-base leading-8 text-[var(--color-muted)]"
                          >
                            {block.text}
                          </p>
                        );
                      })}
                    </div>
                  </section>
                );
              })}
            </div>

            <section className="mt-10 rounded-[1.7rem] bg-[var(--color-brand)] p-6 text-white">
              <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/72">
                    Cần bác sĩ đánh giá kỹ hơn?
                  </p>
                  <h2 className="mt-3 font-serif text-3xl leading-tight">
                    Nếu còn băn khoăn, hãy để bác sĩ đánh giá trực tiếp tình trạng của bạn.
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/78">
                    Nhân viên Hồng Phúc có thể hỗ trợ chọn bác sĩ, chuyên khoa và dịch vụ liên quan để buổi khám tập trung vào vấn đề bạn đang quan tâm.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <ActionLink href="/dat-lich" variant="contrast">
                    Đặt lịch khám
                  </ActionLink>
                  <ActionLink href="/tim-bac-si" variant="contrast">
                    Xem bác sĩ
                  </ActionLink>
                </div>
              </div>
            </section>

            <section className="mt-10 rounded-[1.7rem] bg-[var(--color-mist)] p-6">
              <div className="flex items-start gap-3">
                <HelpCircle className="mt-1 h-6 w-6 shrink-0 text-[var(--color-brand)]" />
                <div>
                  <h2 className="font-serif text-2xl leading-tight text-[var(--color-ink)] sm:text-3xl">
                    Câu hỏi thường gặp
                  </h2>
                  <div className="mt-5 grid gap-4">
                    {faq.map((item) => (
                      <article key={item.question} className="rounded-[1.2rem] bg-white/88 p-5">
                        <h3 className="text-lg font-semibold text-[var(--color-ink)]">{item.question}</h3>
                        <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{item.answer}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          <aside className="grid content-start gap-5 lg:sticky lg:top-6">
            <section className="rounded-[1.7rem] border border-[rgba(7,93,168,0.1)] bg-white/92 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                Trong bài viết
              </p>
              <nav className="mt-4 grid gap-2">
                {tocItems.slice(0, 10).map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="rounded-2xl px-3 py-2 text-sm font-medium leading-6 text-[var(--color-muted)] transition hover:bg-[var(--color-mist)] hover:text-[var(--color-brand)]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </section>

            {specialty ? (
              <section className="rounded-[1.7rem] border border-[rgba(7,93,168,0.1)] bg-white/92 p-6">
                <Stethoscope className="h-6 w-6 text-[var(--color-brand)]" />
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                  Chuyên khoa liên quan
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-[var(--color-ink)]">{specialty.name}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{specialty.description}</p>
                <ActionLink href={specialty.href} variant="secondary" className="mt-5">
                  Xem chuyên khoa
                  <ArrowRight className="ml-2 h-4 w-4" />
                </ActionLink>
              </section>
            ) : null}

            <section className="rounded-[1.7rem] border border-[rgba(7,93,168,0.1)] bg-white/92 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                Chuẩn bị thêm
              </p>
              <div className="mt-4 grid gap-3">
                {guideTopics.map((topic) => (
                  <div key={topic.title} className="rounded-[1.2rem] bg-[var(--color-mist)]/72 p-4">
                    <p className="text-base font-semibold leading-7 text-[var(--color-ink)]">{topic.title}</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{topic.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {relatedServices.length > 0 ? (
              <section className="rounded-[1.7rem] border border-[rgba(7,93,168,0.1)] bg-white/92 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                  Dịch vụ nên xem
                </p>
                <div className="mt-5 grid gap-3">
                  {relatedServices.map((service) => (
                    <ActionLink key={service.slug} href={`/dich-vu/${service.slug}`} variant="ghost" className="justify-start px-0">
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      {service.name}
                    </ActionLink>
                  ))}
                </div>
              </section>
            ) : null}

            {relatedDoctors.length > 0 ? (
              <section className="rounded-[1.7rem] border border-[rgba(7,93,168,0.1)] bg-[var(--color-brand)] p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                  Bác sĩ liên quan
                </p>
                <div className="mt-5 grid gap-3">
                  {relatedDoctors.map((doctor) => (
                    <ActionLink key={doctor.slug} href={`/bac-si/${doctor.slug}`} variant="contrast">
                      {doctor.name}
                    </ActionLink>
                  ))}
                </div>
              </section>
            ) : null}
          </aside>
        </section>

        {relatedArticles.length > 0 ? (
          <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-brand)]">
                  Đọc tiếp
                </p>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-[var(--color-ink)]">
                  Bài viết cùng chuyên khoa
                </h2>
              </div>
              <ActionLink href="/kien-thuc" variant="secondary">
                Xem thư viện
              </ActionLink>
            </div>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {relatedArticles.map((item) => (
                <article key={item.title} className="rounded-[1.7rem] border border-[rgba(7,93,168,0.1)] bg-white/92 p-6">
                  <span className="rounded-full bg-[var(--color-mist)] px-3 py-1 text-sm font-semibold text-[var(--color-brand)]">
                    {item.category}
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold leading-8 text-[var(--color-ink)]">
                    {getArticleContent(getArticleSlug(item))?.title ?? item.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-[var(--color-muted)]">
                    {getArticleContent(getArticleSlug(item))?.excerpt ?? item.summary}
                  </p>
                  <ActionLink href={`/kien-thuc/${getArticleSlug(item)}`} variant="ghost" className="mt-4 px-0">
                    Đọc bài viết
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </ActionLink>
                </article>
              ))}
            </div>
          </section>
        ) : null}
      </article>
    </SiteChrome>
  );
}
