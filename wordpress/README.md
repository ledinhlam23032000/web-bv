# Bản WordPress hóa cho Bệnh viện Đa khoa Hồng Phúc

Thư mục này chứa bản chuyển đổi WordPress của website hiện tại.

## Cấu trúc

- `wp-content/themes/hong-phuc`: theme custom giữ giao diện Hồng Phúc.
- `wp-content/plugins/hong-phuc-core`: plugin lõi, đăng ký Khoa, Dịch vụ, Bác sĩ, Gói khám, block kéo thả và importer dữ liệu.
- `wp-content/plugins/hong-phuc-core/assets/data/seed.json`: dữ liệu được xuất từ web Next.js hiện tại.
- `docker-compose.yml`: môi trường WordPress local ở cổng `10088`.

## Chạy local

```powershell
cd C:\Users\PC\Documents\Codex\2026-07-11\b-nh-vi-n-a-khoa\work\hong-phuc-site
.\Chay-Hong-Phuc-WordPress-10088.bat
```

Sau khi container chạy xong, mở:

- Website: `http://localhost:10088`
- Admin: `http://localhost:10088/wp-admin`

Tài khoản local đề xuất khi cài bằng WP-CLI:

- user: `admin`
- password: `HongPhuc@2026`

## Import dữ liệu demo thủ công

Bản local hiện đã được cài, bật theme/plugin và import dữ liệu. Nếu cần import thủ công lại trong WordPress admin:

1. Vào `Plugins`, bật `Hong Phuc Core`.
2. Vào `Appearance > Themes`, bật theme `Hong Phuc Hospital`.
3. Vào `Tools > Hồng Phúc Importer`.
4. Bấm `Import / Update dữ liệu demo`.

Importer sẽ tạo trang chủ, khoa, dịch vụ, bác sĩ, gói khám và 50 bài viết.

Nếu cần dựng lại từ volume trắng, chạy:

```powershell
cd C:\Users\PC\Documents\Codex\2026-07-11\b-nh-vi-n-a-khoa\work\hong-phuc-site\wordpress
docker compose up -d db wordpress
docker compose run --rm -T --no-deps wpcli wp core install --url=http://localhost:10088 --title="Benh vien Da khoa Hong Phuc" --admin_user=admin --admin_password="HongPhuc@2026" --admin_email=admin@hongphuc.local --skip-email
docker compose run --rm -T --no-deps wpcli wp plugin activate hong-phuc-core
docker compose run --rm -T --no-deps wpcli wp theme activate hong-phuc
docker compose run --rm -T --no-deps wpcli wp eval 'hp_core_import_seed();'
```

## Cách biên tập về sau

- Sửa bài viết tại `Posts`.
- Sửa khoa tại `Các khoa`.
- Sửa dịch vụ tại `Dịch vụ`.
- Sửa bác sĩ tại `Bác sĩ`.
- Sửa trang chủ tại `Pages > Trang chủ`.
- Kéo thả các khối trang chủ bằng nhóm block `Hồng Phúc`.

Thiết kế đang đi theo hướng "kéo thả có kiểm soát": người vận hành có thể đổi thứ tự section, sửa tiêu đề/mô tả và nội dung, nhưng khung nhận diện chính được theme giữ lại để tránh vỡ giao diện.
