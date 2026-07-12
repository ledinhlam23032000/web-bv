# AI Handoff

Tài liệu này dành cho AI coding agent, đội dev, hoặc công cụ thiết kế cần hiểu nhanh website hiện tại.

## 1. Repo này là gì

Đây là một website demo cho **Bệnh viện Đa khoa Hồng Phúc** được xây bằng Next.js App Router.

Repo được tối ưu để:

- dễ review giao diện
- dễ hiểu content structure
- dễ scale số lượng trang và bài viết
- dễ thay dữ liệu demo bằng dữ liệu thật

## 2. Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide icons

## 3. Cách website được tổ chức

### UI layer

- `src/app/*`
  - route pages
- `src/components/*`
  - shell, hero, article browser, UI sections dùng lại

### Content/data layer

- `src/lib/site-content.ts`
  - file trung tâm chứa:
    - thông tin bệnh viện
    - navigation
    - quick actions
    - quality metrics
    - chuyên khoa
    - dịch vụ
    - bác sĩ
    - bài viết
    - nhóm triệu chứng
    - FAQ

### SEO layer

- `src/app/layout.tsx`
  - metadata gốc
  - JSON-LD `WebSite` + `Hospital`
- `src/app/robots.ts`
- `src/app/sitemap.ts`
- `src/lib/seo.ts`

## 4. Những route quan trọng

### Core pages

- `/`
- `/chuyen-khoa`
- `/dich-vu`
- `/tim-bac-si`
- `/doi-ngu-bac-si`
- `/hop-tac-quoc-te`
- `/kien-thuc`
- `/tim-theo-trieu-chung`
- `/dat-lich`
- `/lien-he`

### Dynamic pages

- `/chuyen-khoa/[slug]`
- `/dich-vu/[slug]`
- `/bac-si/[slug]`
- `/kien-thuc/[slug]`

## 5. Tư duy thiết kế hiện tại

Website theo hướng:

- nền sáng
- độ tương phản sạch
- card bo tròn lớn
- hero có ảnh mạnh
- nhiều khoảng thở
- motion nhẹ, không lòe loẹt
- nhìn giống website bệnh viện tư nhân/đa khoa lớn

Một số lớp motion chính:

- `media-kenburns`
- `media-float`
- `surface-drift`
- `premium-hover-card`

## 6. Screenshot tham chiếu

Các ảnh dưới đây giúp AI/dev hiểu nhanh giao diện mà không cần chạy code ngay:

- Trang chủ: [home-image-motion-pass.png](./screenshots/home-image-motion-pass.png)
- Chuyên khoa tổng: [specialties-index-pass.png](./screenshots/specialties-index-pass.png)
- Chuyên khoa Nhi: [specialty-nhi-khoa-pass.png](./screenshots/specialty-nhi-khoa-pass.png)
- Chẩn đoán hình ảnh: [specialty-imaging-pass.png](./screenshots/specialty-imaging-pass.png)
- Hợp tác quốc tế: [international-pass-2.png](./screenshots/international-pass-2.png)
- Tìm bác sĩ: [doctor-search-pass.png](./screenshots/doctor-search-pass.png)
- Đội ngũ bác sĩ: [doctor-team-pass.png](./screenshots/doctor-team-pass.png)
- Thư viện bài viết: [phase10-knowledge-final-v1.png](./screenshots/phase10-knowledge-final-v1.png)
- Chi tiết bài viết: [phase10-article-final-v1.png](./screenshots/phase10-article-final-v1.png)

## 7. Quy ước dữ liệu quan trọng

### Specialties

`specialties` là trục nội dung lớn nhất.

Mỗi item có:

- `slug`
- `name`
- `description`
- `href`
- `heroImage`
- `overview`
- `signs`
- `services`

### Services

`medicalServices` gắn với `specialtySlug`.

### Doctors

`doctorProfiles` gắn với `specialtySlug`.

### Articles

`articleCatalog` gắn với `specialtySlug`.

Điều này tạo ra mô hình mở rộng tốt:

- một chuyên khoa có thể kéo theo dịch vụ
- dịch vụ kéo theo bác sĩ
- bác sĩ và chuyên khoa kéo theo bài viết

## 8. Điều nên giữ khi chỉnh sửa tiếp

- Giữ định vị là **bệnh viện đa khoa quy mô lớn**
- Giữ cảm giác Việt Nam, sáng, hiện đại, tin cậy
- Không biến site thành landing page thẩm mỹ
- Không làm typography quá phô hoặc quá “AI”
- Không dùng ảnh lẫn lộn phong cách giữa các section quan trọng

## 9. Điều chưa làm triệt để

- Chưa có CMS thật
- Chưa có backend đặt lịch thật
- Chưa có bộ nội dung bệnh viện thật 100%
- Chưa có ảnh chụp thật của bệnh viện
- Chưa có tích hợp analytics/form submission thật

## 10. Cách tiếp quản repo nhanh nhất

1. Đọc `PROJECT-CONTEXT.md`
2. Đọc `docs/SITE-MAP.md`
3. Xem screenshot trong `docs/screenshots`
4. Mở `src/lib/site-content.ts`
5. Xem `src/app/page.tsx` và `src/components/marketing.tsx`
6. Chạy local ở cổng `9999` nếu cần tránh xung đột cổng
