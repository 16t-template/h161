# 161_react

Phần mềm Quản lý Doanh nghiệp (ERP System) xây dựng bằng **React + TypeScript + Vite + Tailwind CSS + Lucide Icons**.

## 🚀 Tính năng & Phân hệ đã xây dựng

1. **Giao diện Đăng nhập (`/dang-nhap`)**:
   - Xác thực người dùng, hỗ trợ ẩn/hiện mật khẩu, ghi nhớ đăng nhập, quên mật khẩu.
2. **Trang chủ Dashboard (`/`)**:
   - Lời chào động theo thời gian thực (*Buổi sáng, Chiều, Tối*).
   - Thẻ phân hệ tương tác (*Tổng quan, Tài chính, Hệ thống, Thông tin bản quyền, Cài đặt*).
3. **Phân hệ Tài chính (`/tai-chinh`)**:
   - 10 nhóm chức năng thuộc 3 khối nghiệp vụ (*Đề xuất & Kế hoạch, Danh mục, Báo cáo*).
4. **Quản lý Đề xuất Chi phí (`/tai-chinh/de-xuat-chi-phi`)**:
   - Bảng dữ liệu đa tính năng, ghim cột checkbox/mã/thao tác, chuyển đổi chế độ xem lưới/bảng.
   - Drawer Thêm/Sửa đề xuất với tính năng tự động tính tổng dòng chi phí.
   - Drawer Chi tiết đề xuất với luồng trình duyệt, in ấn, chuyển bản ghi linh hoạt.
5. **Cài đặt Hệ thống (`/cai-dat`)**:
   - 8 màu chủ đạo, chế độ Sáng/Tối/Hệ thống, 6 phông chữ tiếng Việt, cỡ chữ, định dạng ngày giờ, định dạng số tiền tệ, cấu hình bảng, tự động lưu `localStorage`.
6. **Layout & Header/Sidebar chung**:
   - Đồng hồ thời gian thực tiếng Việt, chuông thông báo, menu tài khoản người dùng, breadcrumb đa cấp độ, sidebar thu gọn mở rộng và drawer cho mobile.

## 🛠️ Hướng dẫn cài đặt & khởi chạy

1. Cài đặt các gói phụ thuộc:
```bash
npm install
```

2. Khởi chạy môi trường phát triển (Dev Server):
```bash
npm run dev
```

3. Biên dịch dự án (Production Build):
```bash
npm run build
```

## Triển khai Cloudflare Workers

Dự án dùng `wrangler.jsonc` để phục vụ giao diện từ `dist` và chuyển `/api/*`
vào `worker/index.js`. Không chỉ upload thư mục `dist`: cách đó thiếu backend
đăng nhập và Google Sheets. `vercel.json` chỉ áp dụng khi triển khai trên Vercel.

### Cloudflare Dashboard (Worker `h161`)

1. Kết nối repository chứa các thay đổi này, đặt thư mục gốc là thư mục có `package.json`.
2. Build command: `npm run build`.
3. Deploy command: `npx wrangler deploy` (không dùng lệnh chỉ upload assets).
4. Trong Settings → Variables and Secrets, thêm **Secret** tên
   `GOOGLE_SERVICE_ACCOUNT`, giá trị là toàn bộ nội dung JSON trong file
   `service-account.json` ở máy bạn. Đây là secret phía server, không thêm tiền tố
   `VITE_` và không commit file khóa lên Git.
5. Triển khai lại Worker. Tài khoản dịch vụ phải có quyền truy cập Google Sheet.

### Chạy thử và triển khai bằng CLI

```bash
npm run build
npm run preview:cloudflare
```

Để thử kết nối Google Sheets cục bộ, tạo `.dev.vars` (đã được Git bỏ qua):

```dotenv
GOOGLE_SERVICE_ACCOUNT='{"type":"service_account","client_email":"...","private_key":"-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n","token_uri":"https://oauth2.googleapis.com/token"}'
```

Dùng thông tin thật từ file khóa của bạn; không đưa secret vào `wrangler.jsonc`.
Đăng nhập đúng tài khoản Cloudflare rồi triển khai:

```bash
npx wrangler login
npx wrangler secret put GOOGLE_SERVICE_ACCOUNT
npm run deploy:cloudflare
```

Sau triển khai, `/api/sheets/status` phải trả JSON; gửi JSON rỗng `{}` bằng POST
đến `/api/sheets/login` phải trả `400` với thông báo thiếu tên tài khoản, thay vì
`405`. Endpoint status chỉ kiểm tra định tuyến API, chưa xác minh quyền truy cập
Google Sheets. Đăng nhập bằng tài khoản hợp lệ để kiểm tra kết nối đầy đủ.
