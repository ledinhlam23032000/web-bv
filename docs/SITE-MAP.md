# Site Map

## 1. Nhóm định vị thương hiệu

- `/`
- `/hop-tac-quoc-te`
- `/kham-suc-khoe-doanh-nghiep`
- `/tham-my`

## 2. Nhóm chuyên môn

- `/chuyen-khoa`
- `/chuyen-khoa/[slug]`
- `/dich-vu`
- `/dich-vu/[slug]`
- `/tim-bac-si`
- `/doi-ngu-bac-si`
- `/bac-si/[slug]`
- `/goi-kham`

## 3. Nhóm điều hướng người bệnh

- `/tim-theo-trieu-chung`
- `/dat-lich`
- `/lien-he`
- `/huong-dan-khach-hang`

## 4. Nhóm nội dung SEO

- `/kien-thuc`
- `/kien-thuc/[slug]`

## 5. Danh sách khoa hiện tại

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

## 6. Mô hình liên kết nội dung

- `specialties` là trục lõi.
- `medicalServices` gắn với `specialtySlug`.
- `doctorProfiles` gắn với `specialtySlug`.
- `articleCatalog` là fallback tĩnh, còn WordPress là nguồn bài viết mở rộng chính.

## 7. Luồng người dùng chính

- Trang chủ -> Tìm theo triệu chứng -> Chuyên khoa -> Dịch vụ/Bác sĩ -> Đặt lịch
- Trang chủ -> Tìm bác sĩ -> Hồ sơ bác sĩ -> Đặt lịch
- Google/Trang chủ -> Kiến thức -> Bài viết -> CTA sang chuyên khoa hoặc dịch vụ
- Trang chủ -> Chuyên khoa / Hợp tác quốc tế / Đội ngũ bác sĩ
