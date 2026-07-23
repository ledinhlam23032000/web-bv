# Analytics cho website Hồng Phúc

Website dùng Google Analytics 4 để theo dõi lượt xem và các tương tác chính. Mã đo lường không được ghi cứng vào mã nguồn; website chỉ tải Google Analytics khi biến môi trường `NEXT_PUBLIC_GA_MEASUREMENT_ID` có mã hợp lệ dạng `G-XXXXXXXXXX`.

## Số liệu có thể xem

- Lượt xem trang và đường dẫn người dùng đã xem.
- Người dùng, phiên truy cập, thiết bị và nguồn truy cập do GA4 cung cấp.
- Bấm gọi tổng đài: `call_click`.
- Bấm đặt lịch: `booking_click`.
- Gửi biểu mẫu đặt lịch nhanh: `quick_booking_submit`.
- Gửi biểu mẫu đặt lịch đầy đủ: `appointment_submit`.
- Tìm bác sĩ: `find_doctor_click`.
- Mở bài viết: `article_open`.

Không gửi họ tên, số điện thoại, nội dung ghi chú, triệu chứng hoặc bất kỳ giá trị nào người bệnh nhập vào biểu mẫu.
Các sự kiện đặt lịch hiện đo lượt bấm trên bản demo; chúng chưa đại diện cho một lịch hẹn đã được bệnh viện xác nhận.

## Bật GA4

1. Đăng nhập [Google Analytics](https://analytics.google.com/).
2. Tạo tài khoản hoặc property cho Bệnh viện Đa khoa Hồng Phúc.
3. Tạo Web data stream với địa chỉ `https://benhviendakhoahongphuc.com`.
4. Sao chép Measurement ID dạng `G-...` trong phần Data streams.
5. Mở `.env.production.local` trên máy chủ và thêm:

   ```env
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

6. Build và khởi động lại frontend ở cổng `9999`.

Dữ liệu mới thường cần một khoảng thời gian ngắn để xuất hiện. Dùng mục Realtime để kiểm tra ngay khi mở website ở một cửa sổ ẩn danh.

## Xem số liệu

- Vào [Google Analytics](https://analytics.google.com/) > Reports > Realtime để xem người đang truy cập.
- Vào Reports > Acquisition để xem nguồn truy cập.
- Vào Reports > Engagement > Pages and screens để xem trang được xem nhiều.
- Vào Reports > Engagement > Events để xem các sự kiện tương tác.

Google Analytics thu thập dữ liệu thống kê như số người dùng, phiên, vị trí gần đúng, trình duyệt và thiết bị. Cần công khai chính sách quyền riêng tư phù hợp trước khi vận hành chính thức.
