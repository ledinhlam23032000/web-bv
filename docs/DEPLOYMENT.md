# Deployment Notes

## Local

```bash
npm install
npx next dev --port 9999
```

## Production build

```bash
npm run lint
npm run build
npm run start
```

## Nền tảng phù hợp

### Tốt cho Next.js

- Vercel
- Hostinger web apps / Node.js hosting
- VPS có Node.js

### Không nên dùng trực tiếp cho source này

- Website builders kiểu kéo thả chỉ hỗ trợ chèn snippet
- Hosting chỉ dành cho HTML tĩnh nếu muốn giữ đầy đủ khả năng của Next.js

## Nếu bàn giao cho công cụ AI/web tool

Nên gửi đủ bộ:

1. source code repo này
2. thư mục `public/images`
3. tài liệu trong `docs/`
4. screenshot trong `docs/screenshots`
5. nếu có thì thêm một link demo public
