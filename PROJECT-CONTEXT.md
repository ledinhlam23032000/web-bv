# Project Context

## Mục tiêu

Đây là website demo cho **Bệnh viện Đa khoa Hồng Phúc**.

Mục tiêu của repo không chỉ là dựng giao diện đẹp, mà còn tạo ra một nền web:

- nhìn giống một bệnh viện đa khoa lớn, hiện đại, nghiêm túc
- dễ mở rộng thành nhiều chuyên khoa, nhiều dịch vụ, nhiều bác sĩ
- có thư viện bài viết đủ cấu trúc để phát triển SEO và nội dung lâu dài
- đủ rõ để AI agent hoặc đội dev khác có thể tiếp quản nhanh

## Định vị hình ảnh

- Không đi theo phong cách bệnh viện châu Âu lạnh và tối giản quá mức
- Không làm màu mè kiểu landing page mỹ phẩm
- Hướng tới cảm giác:
  - sạch
  - hiện đại
  - sang
  - đáng tin
  - phù hợp với bệnh viện Việt Nam quy mô lớn

Màu chủ đạo hiện tại:

- trắng
- xanh dương y tế
- xanh cyan nhấn nhẹ

Font hiện tại:

- `Be Vietnam Pro`

## Nguyên tắc nội dung

- Website được kể như một **bệnh viện đa khoa lớn**
- Có nhấn vào **hợp tác quốc tế về chuyên môn**
- Có nhiều cụm nội dung để sau này phát triển thành thư viện bài viết lớn
- Không đóng khung như một phòng khám gia đình nhỏ

## Trạng thái hiện tại

Repo đang ở trạng thái:

- đã có homepage hoàn chỉnh
- đã có các landing page lõi cho chuyên khoa, bác sĩ, dịch vụ, bài viết
- đã có ảnh minh họa demo tương đối đồng bộ
- đã có metadata, schema, sitemap, robots
- đã có bộ tài liệu handoff cho AI/dev

## File quan trọng nhất

- `src/app/page.tsx`
  - homepage
- `src/lib/site-content.ts`
  - toàn bộ dữ liệu demo trung tâm
- `src/components/marketing.tsx`
  - page hero, section heading, CTA patterns
- `src/app/globals.css`
  - theme, motion nhẹ, bề mặt thị giác
- `docs/AI-HANDOFF.md`
  - tài liệu đọc nhanh cho AI/dev

## Khi tiếp tục phát triển

Nếu cần nâng cấp tiếp, nên ưu tiên theo thứ tự:

1. thay nội dung demo bằng nội dung thật
2. tách dữ liệu ra CMS hoặc nguồn nội dung có cấu trúc
3. thêm ảnh chụp thật của bệnh viện
4. nâng cấp form đặt lịch, tìm bác sĩ, tìm theo triệu chứng thành logic thật
5. tinh chỉnh thêm visual polish ở các trang phụ
