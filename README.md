# IA03 — User Registration API with React Frontend

_Project này là bài tập IA03: mô phỏng hệ thống đăng ký người dùng gồm một backend (NestJS + MongoDB) và frontend (React + Vite + Tailwind + React Query)._

---

## Thông tin sinh viên
- Họ và tên: Trương Lê Anh Vũ
- MSSV: 22120443
- Repository bài làm (Github): https://github.com/tlavu2004/csc13114-ia03

---

## Bảng điểm tự đánh giá

| Tiêu chí       | Mô tả                                                             | Điểm   | Mức độ hoàn thành |
|----------------|-------------------------------------------------------------------|--------|-------------------|
| **Backend**    | Implementation API Endpoint (/register)                           | 2      | 100%              |
| **Frontend**   | Implementation Error Handling                                     | 2      | 100%              |
|                | Routing (Home, Login, Sign Up)                                    | 1      | 100%              |
|                | Sign Up Page (Form, Validation, API Integration with React Query) | 2      | 100%              |
|                | Login Page (Form, Validation, UI with shadcn/ui or equivalent)    | 2      | 100%              |
| **Deployment** | Public host deployment                                            | 1      | 100%              |

---

## Địa chỉ host:
- Backend - Render: https://csc13114-ia03-backend.onrender.com
- Frontend - Vercel: https://csc13114-ia03-22120443.vercel.app

---

## Mục tiêu

- Backend: cung cấp API **POST** `/user/register` để đăng ký người dùng, hash mật khẩu, validate input.
- Frontend: giao diện Register / Login / Home, dùng React Hook Form + React Query để gọi API và hiển thị trạng thái.

---

## Thư mục chính

- `backend/` — NestJS server (port mặc định 3000)
- `frontend/` — React + Vite app (dev server mặc định 5173)

---

## Chạy dự án (local)

### 1. Clone repository về máy

```bash
git clone https://github.com/tlavu2004/csc13114-ia03.git
cd csc13114-ia03
```

### 2. Backend

- Vào thư mục `backend/`
  ```bash
  cd backend
  npm install

  # Thiết lập biến môi trường: MONGODB_URI
  npm run start:dev
  ```

### 3. Frontend

- Vào thư mục `frontend/`
  ```bash
  cd frontend
  npm install

  # Chỉnh .env.development.local VITE_API_URL nếu backend chạy ở port khác (tuỳ chọn).
  npm run dev
  ```

---

## Chạy dự án trên nền tảng host
[Nhấn vào đây](https://csc13114-ia03-22120443.vercel.app)

---

## Endpoint chính

- **POST** `/user/register` — đăng ký người dùng
  - Body JSON: `{ "email": "...", "password": "..." }`
  - Trả về: `{ message: 'User registered successfully', user: { id, email, createdAt } }`

---

## Biến môi trường quan trọng
- Backend: `MONGODB_URI` (MongoDB connection string), `PORT` (tuỳ chọn), `ALLOWED_ORIGINS` (CSV các origin được phép CORS)
- Frontend: `VITE_API_URL` (ví dụ `http://localhost:3000`)

---

## Ghi chú
- Validator password trên cả frontend và backend đã được đồng bộ (ít nhất 8 ký tự, tối thiểu 1 chữ hoa, 1 chữ thường, 1 số, 1 ký tự đặc biệt, không có khoảng trắng).
