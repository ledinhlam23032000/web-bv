# Project Context

## Mục tiêu

Đây là website demo cho **Bệnh viện Đa khoa Hồng Phúc** theo hướng:

- nhìn giống một bệnh viện đa khoa lớn tại Việt Nam
- có cảm giác hiện đại, sạch, sang, đáng tin
- đủ cấu trúc để phát triển lâu dài về SEO, nội dung, khoa, dịch vụ, bác sĩ
- đủ rõ để AI hoặc đội dev khác tiếp quản nhanh khi xảy ra sự cố

## Định vị hình ảnh

- Không làm theo phong cách bệnh viện châu Âu lạnh và vô hồn.
- Không làm kiểu landing page thẩm mỹ bóng bẩy quá mức.
- Màu chủ đạo là trắng, xanh y tế, xanh cyan nhấn vừa phải.
- Font trọng tâm là `Be Vietnam Pro`.
- Cảm giác phải giống một bệnh viện Việt Nam quy mô lớn, không phải phòng khám nhỏ.

## Kiến trúc hiện tại

- Frontend public: Next.js App Router
- Cổng public local: `9999`
- CMS nội dung: WordPress Docker
- Cổng WordPress local: `10088`
- Cầu nối headless: `src/lib/headless-wordpress.ts`
- Plugin headless WordPress: `wordpress/wp-content/plugins/hong-phuc-core/hong-phuc-core.php`
- Dữ liệu fallback nội bộ: `src/lib/site-content.ts`

## Quy tắc vận hành không được quên

- Không được đụng vào `localhost:3000` nếu máy đang có dự án khác dùng cổng này.
- Khi cần bản public của repo này, mặc định chạy ở `9999`.
- WordPress của repo này là CMS nội bộ và mặc định ở `10088`.
- Link `trycloudflare.com` chỉ là link xem thử tạm, không phải deployment bền vững.

## Phạm vi chuyên môn hiện tại

Site hiện bám theo đúng 17 khoa thực tế sau:

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

## Trạng thái hiện tại

- Đã có homepage hoàn chỉnh.
- Đã có các trang lõi cho chuyên khoa, dịch vụ, bác sĩ, bài viết, liên hệ và đặt lịch.
- Đã có lớp headless WordPress để lấy bài viết thật nếu WordPress chạy.
- Đã có dữ liệu fallback để site vẫn lên khi WordPress chưa sẵn sàng.
- Đã có batch file phục vụ chạy local, chạy bản public nội bộ và tạo link xem thử miễn phí.

## File quan trọng nhất

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
- `scripts/start-personal-server.ps1`
- `scripts/start-free-preview.ps1`
- `docs/EMERGENCY-RUNBOOK.md`
- `docs/AI-REBUILD-PROMPT.md`

## Ưu tiên nếu tiếp tục phát triển

1. Thay dần nội dung demo bằng nội dung thật.
2. Bổ sung ảnh chụp thật của bệnh viện.
3. Chuẩn hóa WordPress như CMS chính cho bài viết, dịch vụ và bác sĩ.
4. Nâng cấp form đặt lịch thành workflow thật.
5. Tối ưu visual polish từng trang nhưng không phá định vị hiện tại.
