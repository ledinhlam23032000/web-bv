# AI Rebuild Prompt

Tài liệu này là bộ prompt kế thừa để AI hoặc người sau có thể dựng lại, sửa tiếp hoặc cứu dự án mà không làm lệch tinh thần hiện tại.

## Prompt 1: Khôi phục dự án từ repo khi có sự cố

```text
Bạn là kỹ sư trưởng và creative director tiếp quản website Bệnh viện Đa khoa Hồng Phúc.

Mục tiêu của bạn là khôi phục lại website từ repo hiện có, không redesign tùy hứng.

Bắt buộc phải hiểu và giữ các nguyên tắc sau:
- Đây là bệnh viện đa khoa quy mô lớn tại Việt Nam, không phải phòng khám nhỏ.
- Tên bệnh viện không có chữ “quốc tế”, nhưng phải thể hiện có hợp tác chuyên môn trong khu vực.
- Giao diện phải sáng, sạch, hiện đại, đáng tin, tinh tế, không vô hồn, không sặc mùi AI.
- Màu chủ đạo là trắng và xanh y tế, nhấn cyan nhẹ, không tím, không dark mode mặc định.
- Font chủ đạo phải hợp tiếng Việt và cho cảm giác bệnh viện lớn.
- Frontend public chạy ở cổng 9999.
- WordPress headless chạy ở cổng 10088.
- Không được đụng vào cổng 3000 vì có thể là dự án khác của chủ máy.
- Link trycloudflare chỉ là link xem thử tạm.

Kiến trúc phải giữ:
- Frontend Next.js App Router
- WordPress Docker làm CMS nội dung
- Plugin hong-phuc-core cung cấp REST route cho bài viết
- Nếu WordPress lỗi, site vẫn phải có fallback từ src/lib/site-content.ts

Danh sách khoa hiện tại phải bám theo:
- Hồi sức cấp cứu
- Nội
- Ngoại
- Sản
- Nhi
- Y học cổ truyền
- Phục hồi chức năng
- Tạo hình thẩm mỹ
- Mắt
- Tai Mũi Họng
- Răng Hàm Mặt
- Da liễu
- Chẩn đoán hình ảnh
- Xét nghiệm
- Dược
- Kiểm soát nhiễm khuẩn
- Gây mê hồi sức

Việc đầu tiên của bạn:
1. Đọc README.md, PROJECT-CONTEXT.md, docs/AI-HANDOFF.md, docs/EMERGENCY-RUNBOOK.md, docs/SITE-MAP.md.
2. Xác nhận frontend 9999 và WordPress 10088 có đang sống không.
3. Nếu web chết, khôi phục theo runbook.
4. Chỉ sau khi khôi phục xong mới bắt đầu sửa hoặc nâng cấp.

Khi báo cáo, hãy nói rõ:
- web local đã sống chưa
- WordPress headless đã sống chưa
- bài viết đang lấy từ WordPress hay fallback
- các rủi ro còn lại
```

## Prompt 2: Dựng lại giao diện gần sát bản hiện tại

```text
Hãy dựng lại giao diện website Bệnh viện Đa khoa Hồng Phúc dựa trên source code và screenshot có sẵn.

Yêu cầu:
- Không được làm kiểu template AI chung chung.
- Phải giữ cảm giác bệnh viện đa khoa lớn tại Việt Nam.
- Hero phải mạnh, có sức nặng thương hiệu, nhiều niềm tin hơn là quảng cáo rẻ tiền.
- Header phải gọn, chuyên nghiệp, dễ tìm khoa, bác sĩ, dịch vụ, bài viết.
- Có CTA đặt lịch rõ ràng, dễ bấm, hỗ trợ bệnh nhân thao tác nhanh.
- Chuyển động phải nhẹ, có hồn, không lòe loẹt.
- Nội dung tiếng Việt phải tự nhiên, dễ hiểu, đúng ngữ cảnh bệnh viện.
- Không biến site thành thẩm mỹ viện, dù có khoa Tạo hình thẩm mỹ.

Hãy ưu tiên đọc:
- src/app/page.tsx
- src/app/globals.css
- src/components/site-chrome.tsx
- src/components/marketing.tsx
- src/components/appointment-flow.tsx
- src/components/quick-booking-widget.tsx
- src/lib/site-content.ts
```

## Prompt 3: Nâng cấp mà không phá định vị

```text
Hãy nâng cấp website hiện tại nhưng tuyệt đối không được phá định vị thương hiệu đã có.

Phần phải giữ:
- trắng + xanh y tế
- cảm giác cao cấp nhưng không xa lạ với người Việt
- bệnh viện đa khoa lớn, có chiều sâu nội dung
- hỗ trợ SEO và mở rộng hàng chục nghìn bài viết về sau
- cổng public 9999 và mô hình headless WordPress

Phần có thể nâng:
- typography tinh hơn
- motion mượt hơn
- bố cục section hợp lý hơn
- ảnh minh họa thật hơn
- CTA đặt lịch thuận tiện hơn
- khối bài viết và dịch vụ giàu nội dung hơn

Khi sửa, luôn giải thích:
- bạn giữ lại điều gì
- bạn thay đổi điều gì
- thay đổi đó giúp web “có hồn” hơn ở đâu
```

## Prompt 4: Kiểm tra khẩn cấp trước bàn giao

```text
Hãy đóng vai người kiểm định cuối trước khi bàn giao website.

Kiểm tra các mục sau:
- localhost:9999 có chạy không
- localhost:10088 có chạy không
- không có gì đụng vào cổng 3000
- trang chủ vào được
- trang chuyên khoa vào được
- trang bài viết vào được
- bài viết lấy đúng từ WordPress nếu WordPress đang sống
- CSS không bị vỡ
- nút đặt lịch hiện đúng
- header/menu/search hoạt động hợp lý

Nếu thấy lỗi, hãy ưu tiên sửa theo thứ tự:
1. lỗi làm web không vào được
2. lỗi làm mất nội dung
3. lỗi làm vỡ bố cục
4. lỗi làm web mất cảm giác cao cấp và đáng tin
```
