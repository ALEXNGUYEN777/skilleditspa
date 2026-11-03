# Landing page đã chỉnh sửa

Giải nén toàn bộ ZIP. Trang chủ: index.html. Trình chỉnh sửa: editor.html.

## GitHub Pages
Đưa toàn bộ tệp và thư mục lên repository. Settings → Pages → Deploy from a branch → main → /(root).

## Vercel
Import repository GitHub. Framework: Other. Build command: để trống. Output Directory: .

## Chỉnh sửa
Mở editor.html, chọn trang, chọn chữ để chỉnh nội dung/cỡ/màu, chọn ảnh hoặc video để thay bằng ảnh/video. Lưu bản nháp chỉ lưu trên trình duyệt hiện tại. Xuất ZIP để lưu mọi thay đổi và tiếp tục sửa trên máy khác. ZIP xuất ra không có nút trình chỉnh sửa trên trang dành cho khách. Ảnh/video tải lên được tách thành tệp trong assets/uploads khi xuất ZIP, giúp HTML gọn và dễ sửa trên GitHub; nội dung dùng URL cần duy trì đường dẫn còn hoạt động. Chọn YouTube và dán link watch, youtu.be hoặc Shorts để nhúng video. Video YouTube cần có quyền cho phép nhúng. Chọn Video MP4 / WebM nếu dùng link tệp trực tiếp. Video lớn có thể vượt dung lượng lưu nháp; khi đó hãy xuất ZIP.

Giá, thông tin liên hệ và QR là các mục độc lập. Kiểm tra tính đồng nhất trước khi triển khai. Biểu mẫu cần dịch vụ xử lý riêng nếu dự án chưa có backend.

Không cần Node.js, npm hay bước build.
