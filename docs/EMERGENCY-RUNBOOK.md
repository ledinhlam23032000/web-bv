# Emergency Runbook

Tài liệu này dùng khi web lỗi, mất máy, đổi người vận hành hoặc cần khôi phục gấp.

## 1. Nhớ trước tiên

- Website public của repo này dùng cổng `9999`.
- WordPress CMS của repo này dùng cổng `10088`.
- Không được đụng vào `localhost:3000` nếu trên máy chủ có dự án khác ở đó.
- Link `trycloudflare.com` chỉ là link xem thử tạm thời.

## 2. Kiến trúc thật của hệ thống

- Frontend public: Next.js App Router
- CMS nội dung: WordPress Docker
- Bài viết thật: REST route WordPress `/hong-phuc/v1/articles`
- Nội dung toàn site: REST route WordPress `/hong-phuc/v1/content`
- Làm mới cache khi lưu: Next route `/api/revalidate`
- Fallback khi CMS chưa sẵn: `src/lib/site-content.ts`
- Plugin CMS quan trọng: `wordpress/wp-content/plugins/hong-phuc-core/hong-phuc-core.php`

## 3. Khôi phục nhanh trên chính máy cũ

### Trường hợp web public ở `9999` không vào được

1. Mở `Chay-Hong-Phuc-9999.bat`.
2. Nếu muốn bản public có thể truy cập từ mạng nội bộ, mở `Chay-Hong-Phuc-Internet.bat`.
3. Kiểm tra lại `http://localhost:9999`.

### Tự khởi động sau khi máy tính bật lại

1. Chạy `Cai-Tu-Dong-Khoi-Dong-Hong-Phuc.bat` một lần trên tài khoản Windows vận hành máy chủ.
2. Windows Task Scheduler sẽ kiểm tra frontend `9999` sau khi đăng nhập và lặp lại mỗi phút.
3. Nếu tiến trình Next.js dừng hoặc không trả HTTP 200, watchdog sẽ mở một tiến trình độc lập và kiểm tra lại kết quả.
4. Cloudflare Tunnel và Docker vẫn phải được cấu hình tự khởi động riêng.

### Trường hợp WordPress CMS ở `10088` không vào được

1. Mở `Chay-Hong-Phuc-WordPress-10088.bat`.
2. Kiểm tra `http://localhost:10088/wp-admin/`.
3. Nếu admin vào được nhưng frontend chưa có bài viết, kiểm tra REST route:
   `http://localhost:10088/index.php?rest_route=/hong-phuc/v1/articles&per_page=5`
4. Kiểm tra API toàn site:
   `http://localhost:10088/index.php?rest_route=/hong-phuc/v1/content`

### Trường hợp link xem thử miễn phí chết

1. Mở `Chay-Link-Xem-Thu-Mien-Phi.bat`.
2. Chờ dòng URL `https://...trycloudflare.com`.
3. Copy URL mới gửi lại cho người cần xem.
4. Không đóng cửa sổ tunnel nếu muốn link còn sống.

## 4. Khôi phục trên máy mới

1. Clone repo GitHub này.
2. Cài Node.js và Docker Desktop.
3. Chạy `npm install`.
4. Chạy `cd wordpress && docker compose up -d`.
5. Chạy `npm run build`.
6. Chạy `npx next start -H 0.0.0.0 -p 9999`.
7. Kiểm tra `http://localhost:9999`.
8. Nếu cần link public tạm, chạy Cloudflare tunnel.

## 5. Khi giao diện lên nhưng bài viết không đúng

Kiểm tra theo thứ tự:

1. `WORDPRESS_API_URL` có đang trỏ về `http://localhost:10088` không.
2. `WORDPRESS_HEADLESS_ENABLED` có đang bật không.
3. Plugin `hong-phuc-core` có đang active trong WordPress không.
4. REST route `/hong-phuc/v1/articles` có trả JSON không.
5. Nếu CMS chưa sẵn, chấp nhận site dùng fallback từ `src/lib/site-content.ts`.

## 6. Khi CSS hoặc bố cục bị lỗi

1. Dừng tiến trình cũ ở `9999`.
2. Chạy lại `npm run build`.
3. Chạy lại `Chay-Hong-Phuc-9999.bat`.
4. Tải cứng trình duyệt.

## 7. File cần giữ bằng mọi giá

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
- `docs/AI-REBUILD-PROMPT.md`

## 8. Checklist xác minh sau khôi phục

- Trang chủ vào được ở `9999`
- Không đè vào dự án khác ở `3000`
- Trang `kien-thuc` vào được
- Trang bài viết chi tiết vào được
- WordPress admin vào được ở `10088`
- REST route WordPress trả dữ liệu
- Nút đặt lịch hiện bình thường
- Header, menu, font, màu không bị vỡ

## 9. Nếu phải nhờ AI cứu dự án

Đưa cho AI các thứ sau:

1. repo GitHub này
2. file `PROJECT-CONTEXT.md`
3. file `docs/AI-HANDOFF.md`
4. file `docs/AI-REBUILD-PROMPT.md`
5. file `docs/SITE-MAP.md`
6. screenshot trong `docs/screenshots/`

Sau đó yêu cầu AI làm theo đúng prompt trong `docs/AI-REBUILD-PROMPT.md`.
