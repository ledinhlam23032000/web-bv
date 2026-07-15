# AI Handoff

Tài liệu này dành cho AI coding agent, đội dev hoặc người tiếp quản cần hiểu nhanh website hiện tại.

## 1. Repo này là gì

Đây là website demo cho **Bệnh viện Đa khoa Hồng Phúc** với giao diện public bằng Next.js và lớp CMS nội dung bằng WordPress headless.

Repo được tổ chức để:

- dễ khôi phục khi site lỗi
- dễ tiếp quản khi đổi người làm
- dễ mở rộng bài viết, dịch vụ, bác sĩ, chuyên khoa
- dễ thay dữ liệu demo bằng dữ liệu thật

## 2. Stack và kiến trúc

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide icons
- WordPress Docker làm CMS nội bộ
- Plugin `hong-phuc-core` cung cấp REST route cho frontend

## 3. Kiến trúc chạy thật

- Frontend public local: `http://localhost:9999`
- WordPress local: `http://localhost:10088`
- Batch chạy frontend: `Chay-Hong-Phuc-9999.bat`
- Batch chạy CMS: `Chay-Hong-Phuc-WordPress-10088.bat`
- Script chạy public nội bộ: `scripts/start-personal-server.ps1`
- Script tạo link xem thử tạm: `scripts/start-free-preview.ps1`

## 4. Điều không được làm

- Không được chiếm cổng `3000` nếu trên máy có dự án khác của chủ máy đang dùng cổng này.
- Không được biến site thành phòng khám nhỏ, landing page thẩm mỹ hoặc web bệnh viện châu Âu lạnh lẽo.
- Không được bỏ mất định vị bệnh viện đa khoa quy mô lớn tại Việt Nam.
- Không được làm typography quá to, quá nặng hoặc quá “AI”.

## 5. Định vị hình ảnh phải giữ

- nền sáng
- tương phản sạch
- xanh y tế trên nền trắng
- cảm giác có quy mô
- có chuyển động nhẹ, tinh tế
- nội dung dày nhưng vẫn gọn
- giống website bệnh viện lớn, không giống template AI vô hồn

## 6. Khoa hiện tại phải bám theo

- Khoa Hồi sức cấp cứu
- Khoa Nội
- Khoa Ngoại
- Khoa Sản
- Khoa Nhi
- Khoa Y học cổ truyền
- Khoa Phục hồi chức năng
- Khoa Tạo hình thẩm mỹ
- Khoa Mắt
- Khoa Tai Mũi Họng
- Khoa Răng Hàm Mặt
- Khoa Da liễu
- Khoa Chẩn đoán hình ảnh
- Khoa Xét nghiệm
- Khoa Dược
- Khoa Kiểm soát nhiễm khuẩn
- Khoa Gây mê hồi sức

## 7. Route quan trọng

- `/`
- `/chuyen-khoa`
- `/chuyen-khoa/[slug]`
- `/dich-vu`
- `/dich-vu/[slug]`
- `/tim-bac-si`
- `/doi-ngu-bac-si`
- `/bac-si/[slug]`
- `/kien-thuc`
- `/kien-thuc/[slug]`
- `/tim-theo-trieu-chung`
- `/dat-lich`
- `/goi-kham`
- `/hop-tac-quoc-te`
- `/kham-suc-khoe-doanh-nghiep`
- `/tham-my`
- `/huong-dan-khach-hang`
- `/lien-he`

## 8. File quan trọng

- `src/app/page.tsx`
- `src/app/globals.css`
- `src/components/site-chrome.tsx`
- `src/components/marketing.tsx`
- `src/components/appointment-flow.tsx`
- `src/components/quick-booking-widget.tsx`
- `src/lib/site-content.ts`
- `src/lib/headless-wordpress.ts`
- `wordpress/docker-compose.yml`
- `wordpress/wp-content/plugins/hong-phuc-core/hong-phuc-core.php`

## 9. Dữ liệu và nguồn nội dung

- `src/lib/site-content.ts` là nguồn fallback nội bộ cho thông tin bệnh viện, khoa, dịch vụ, bác sĩ, nhóm triệu chứng và một phần bài viết.
- `src/lib/headless-wordpress.ts` ưu tiên lấy bài viết từ WordPress qua REST route `/hong-phuc/v1/articles`.
- Nếu WordPress không phản hồi, site vẫn chạy bằng dữ liệu fallback.

## 10. Tài liệu phải đọc thêm

- [../PROJECT-CONTEXT.md](../PROJECT-CONTEXT.md)
- [EMERGENCY-RUNBOOK.md](./EMERGENCY-RUNBOOK.md)
- [AI-REBUILD-PROMPT.md](./AI-REBUILD-PROMPT.md)
- [SITE-MAP.md](./SITE-MAP.md)
- [PERSONAL-PC-SERVER.md](./PERSONAL-PC-SERVER.md)
