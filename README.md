# Bệnh viện Đa khoa Hồng Phúc

Website demo cho Bệnh viện Đa khoa Hồng Phúc, xây dựng bằng Next.js theo hướng:

- bệnh viện đa khoa quy mô lớn tại Việt Nam
- tông trắng - xanh, cảm giác sạch, cao cấp, tinh tế
- dễ mở rộng thêm chuyên khoa, dịch vụ, bác sĩ và thư viện bài viết
- có lớp SEO cơ bản để phát triển nội dung dài hạn

Repo này đã được chuẩn bị để người đọc mới, AI coding agent hoặc đội triển khai có thể hiểu nhanh cấu trúc, giao diện và mục tiêu của website.

## Xem nhanh

- Tài liệu bối cảnh dự án: [PROJECT-CONTEXT.md](./PROJECT-CONTEXT.md)
- Handoff chi tiết cho AI/dev: [docs/AI-HANDOFF.md](./docs/AI-HANDOFF.md)
- Sơ đồ trang và tuyến nội dung: [docs/SITE-MAP.md](./docs/SITE-MAP.md)
- Hướng dẫn deploy: [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md)

## Công nghệ

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Dữ liệu nội dung demo lưu nội bộ trong `src/lib/site-content.ts`

## Chạy local

Cách nhanh:

```bash
npm install
npm run dev
```

Mặc định Next.js sẽ chạy ở `http://localhost:3000`.

Nếu máy bạn đã có dự án khác dùng cổng `3000`, nên chạy bản demo ở `9999`:

```bash
npx next dev --port 9999
```

## Build kiểm tra

```bash
npm run lint
npm run build
```

## Cấu trúc chính

```text
src/app/                 App Router pages
src/components/          Site chrome, hero, browser, section UI
src/lib/site-content.ts  Nội dung demo trung tâm cho chuyên khoa/dịch vụ/bài viết
src/lib/seo.ts           URL tuyệt đối và helper SEO
public/images/           Ảnh minh họa demo
docs/                    Tài liệu handoff cho AI/dev
```

## Ghi chú quan trọng

- Đây là bản demo định hướng cao cấp cho bệnh viện đa khoa, không phải CMS hoàn chỉnh.
- Nội dung bài viết hiện dùng dữ liệu mẫu có cấu trúc để dễ thay bằng nội dung thật sau này.
- Nhiều ảnh là ảnh demo/AI-generated để phục vụ review thiết kế giai đoạn đầu.
