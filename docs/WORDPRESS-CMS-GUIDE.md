# Hướng dẫn quản trị 100% nội dung website bằng WordPress

Website public vẫn dùng giao diện Next.js tại `http://localhost:9999`. WordPress tại `http://localhost:10088/wp-admin/` là nơi quản trị nội dung, hình ảnh, thứ tự hiển thị và SEO.

## Đăng nhập local

- Địa chỉ: `http://localhost:10088/wp-admin/`
- Tài khoản demo: `admin`
- Mật khẩu demo: `HongPhuc@2026`

Đổi mật khẩu trước khi đưa máy chủ ra Internet.

## Sửa từng nhóm nội dung

- `Hồng Phúc CMS`: tên bệnh viện, tổng đài, địa chỉ, giờ làm việc, email, logo, SEO mặc định, menu, footer và các khối nội dung dùng chung.
- `Trang`: tiêu đề lớn, mô tả, ảnh đầu trang, hai nút hành động, SEO và thứ tự khối Gutenberg của từng trang.
- `Các khoa`: phạm vi khoa, mô tả, ảnh, dấu hiệu nên đi khám và lĩnh vực chuyên sâu.
- `Dịch vụ`: khoa phụ trách, đối tượng phù hợp, quy trình và hướng dẫn chuẩn bị.
- `Bác sĩ`: chức danh, khoa, ảnh, giới thiệu, kinh nghiệm, lịch khám và nội dung hồ sơ.
- `Gói khám`: mô tả và danh mục hạng mục.
- `Bài viết`: tiêu đề, đường dẫn, ảnh đại diện, chuyên mục, nội dung, mô tả ngắn và SEO bài viết.

## Trang chủ kéo thả có kiểm soát

Mở `Trang > Trang chủ`. Các khối Hồng Phúc có thể đổi thứ tự hoặc xóa khỏi trang. Frontend sẽ giữ nguyên thiết kế của từng khối nhưng tôn trọng thứ tự và trạng thái bật/tắt trong Gutenberg.

Nội dung chi tiết của danh sách khoa, dịch vụ, bác sĩ, gói khám và bài viết được lấy từ các mục tương ứng trong WordPress. Nội dung dùng chung được sửa ở `Hồng Phúc CMS`.

## Thời gian cập nhật

Khi bấm `Cập nhật`, WordPress tự thông báo cho frontend xóa bộ nhớ đệm. Thay đổi thường xuất hiện ngay; nếu kết nối tạm gián đoạn, frontend tự kiểm tra lại sau tối đa khoảng 30 giây.

## Quy tắc an toàn

- Không dùng `Công cụ > Hồng Phúc Importer` sau khi đã nhập nội dung thật. Importer chỉ dành cho cài mới hoặc phục hồi khẩn cấp và có thể ghi đè dữ liệu cùng đường dẫn.
- Sao lưu cả cơ sở dữ liệu MariaDB và thư mục `wordpress/uploads`.
- Không sửa cổng `3000`; dự án này chỉ dùng frontend `9999` và WordPress `10088`.
- WordPress quản trị toàn bộ nội dung. CSS, hiệu ứng, component và logic hệ thống vẫn do Codex sửa trong mã nguồn để bảo vệ chất lượng giao diện.

## Kiểm tra nhanh

- Website: `http://localhost:9999/`
- WordPress: `http://localhost:10088/wp-admin/`
- API toàn site: `http://localhost:10088/index.php?rest_route=/hong-phuc/v1/content`
- API bài viết: `http://localhost:10088/index.php?rest_route=/hong-phuc/v1/articles&per_page=10`

