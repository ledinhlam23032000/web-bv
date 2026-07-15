# Bệnh viện Đa khoa Hồng Phúc

Đây là repo bàn giao cho website demo của **Bệnh viện Đa khoa Hồng Phúc** theo mô hình:

- giao diện public bằng Next.js
- CMS nội dung bằng WordPress chạy local/headless
- ưu tiên cảm giác bệnh viện đa khoa lớn tại Việt Nam, sáng, sạch, hiện đại, đáng tin
- sẵn cấu trúc để mở rộng SEO, bài viết, khoa, dịch vụ, bác sĩ và nội dung hợp tác chuyên môn

## Đọc trước khi làm gì

- Nếu chỉ gửi 1 tài liệu cho AI kế nhiệm: [docs/SUPER-PROMPT.md](./docs/SUPER-PROMPT.md)
- Bối cảnh dự án: [PROJECT-CONTEXT.md](./PROJECT-CONTEXT.md)
- Handoff kỹ thuật cho AI/dev: [docs/AI-HANDOFF.md](./docs/AI-HANDOFF.md)
- Runbook khẩn cấp: [docs/EMERGENCY-RUNBOOK.md](./docs/EMERGENCY-RUNBOOK.md)
- Prompt kế thừa để AI dựng lại: [docs/AI-REBUILD-PROMPT.md](./docs/AI-REBUILD-PROMPT.md)
- Sơ đồ trang và phạm vi nội dung: [docs/SITE-MAP.md](./docs/SITE-MAP.md)
- Hướng dẫn chạy máy cá nhân làm máy chủ tạm: [docs/PERSONAL-PC-SERVER.md](./docs/PERSONAL-PC-SERVER.md)
- Ghi chú triển khai: [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md)

## Kiến trúc hiện tại

- Frontend public: Next.js 16 tại `http://localhost:9999`
- CMS nội dung: WordPress Docker tại `http://localhost:10088`
- Headless bridge: `src/lib/headless-wordpress.ts`
- Plugin WordPress phục vụ REST và redirect public: `wordpress/wp-content/plugins/hong-phuc-core/hong-phuc-core.php`
- Dữ liệu fallback nội bộ: `src/lib/site-content.ts`

## Quy ước bắt buộc

- Không được đụng vào `http://localhost:3000` nếu trên máy đang có dự án khác của chủ máy dùng cổng này.
- Bản public của repo này phải chạy ở `9999`.
- WordPress của repo này phải chạy ở `10088`.
- Link `trycloudflare.com` chỉ là link tạm để xem thử, hết hiệu lực khi tunnel tắt.

## Cách chạy nhanh

### Chạy giao diện public

- Mở [Chay-Hong-Phuc-9999.bat](C:/Users/PC/Documents/Codex/2026-07-11/b-nh-vi-n-a-khoa/work/hong-phuc-site/Chay-Hong-Phuc-9999.bat)

### Chạy WordPress CMS

- Mở [Chay-Hong-Phuc-WordPress-10088.bat](C:/Users/PC/Documents/Codex/2026-07-11/b-nh-vi-n-a-khoa/work/hong-phuc-site/Chay-Hong-Phuc-WordPress-10088.bat)

### Chạy đầy đủ để chia sẻ trong mạng nội bộ

- Mở [Chay-Hong-Phuc-Internet.bat](C:/Users/PC/Documents/Codex/2026-07-11/b-nh-vi-n-a-khoa/work/hong-phuc-site/Chay-Hong-Phuc-Internet.bat)

### Tạo link xem thử miễn phí

- Mở [Chay-Link-Xem-Thu-Mien-Phi.bat](C:/Users/PC/Documents/Codex/2026-07-11/b-nh-vi-n-a-khoa/work/hong-phuc-site/Chay-Link-Xem-Thu-Mien-Phi.bat)

## Khoa thực tế hiện dùng trong site

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

## Mục tiêu của repo GitHub này

- lưu trạng thái code hiện tại của web
- lưu tài liệu phục hồi khi sự cố xảy ra
- lưu prompt để AI kế nhiệm có thể dựng lại đúng tinh thần hiện tại
- giúp người mới tiếp quản không phải mò lại từ đầu
