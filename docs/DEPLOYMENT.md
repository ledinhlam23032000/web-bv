# Deployment Notes

## 1. Chạy local đúng cách

- Frontend public của repo này chạy ở `9999`.
- WordPress local của repo này chạy ở `10088`.
- Không dùng `3000` nếu trên máy chủ có dự án khác của chủ máy.

## 2. Cách chạy nhanh

### Chỉ chạy frontend để review giao diện

```bash
npm install
npm run build
npx next start -p 9999
```

### Chạy frontend public nội bộ bằng script

- `scripts/start-personal-server.ps1`
- hoặc `Chay-Hong-Phuc-Internet.bat`

### Chạy WordPress CMS

```bash
cd wordpress
docker compose up -d
```

## 3. Public tạm để review

- Dùng `Chay-Link-Xem-Thu-Mien-Phi.bat`.
- Script này mở Cloudflare Quick Tunnel để sinh ra link `trycloudflare.com`.
- Đây là link tạm để xem thử, không phải deployment ổn định lâu dài.

## 4. Hướng triển khai dài hạn

### Phù hợp nhất

- VPS có Node.js + Docker
- Host có thể chạy Next.js và giữ riêng WordPress CMS
- Mô hình headless WordPress hoặc CMS tương đương

### Có thể cân nhắc

- Headless WordPress + frontend riêng
- VPS tự quản với reverse proxy và domain thật

### Không nên dùng trực tiếp cho source này

- Website builder kéo thả không hỗ trợ đúng App Router và headless flow
- Hosting HTML tĩnh nếu vẫn muốn giữ toàn bộ hành vi hiện tại của Next.js

## 5. Khi bàn giao cho AI hoặc đội khác

Phải gửi đủ:

1. toàn bộ source code repo
2. thư mục `docs/`
3. thư mục `wordpress/`
4. ảnh trong `public/` và `docs/screenshots/`
5. prompt trong `docs/AI-REBUILD-PROMPT.md`
6. runbook trong `docs/EMERGENCY-RUNBOOK.md`
