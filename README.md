# 🪙 BudgedIn — Aplikasi Manajemen Keuangan Pintar untuk Mahasiswa

**BudgedIn** adalah *Progressive Web Application (PWA)* modern yang dirancang khusus untuk membantu mahasiswa dalam melacak pemasukan, pengeluaran, anggaran bulanan, target tabungan, serta memantau kesehatan finansial mereka secara praktis, baik melalui HP (*mobile-first*) maupun komputer.

---

## ✨ Fitur Utama

* **📊 Dashboard Finansial Interaktif**  
  Tampilan ringkasan keuangan yang dinamis dengan visualisasi grafik (menggunakan Recharts) serta riwayat transaksi terbaru Anda.
  
* **💸 Manajemen Transaksi Lengkap**  
  Pencatatan pengeluaran & pemasukan, kategorisasi kustom, pencarian transaksi, pemfilteran berdasarkan jenis/kategori, serta pengurutan data secara rapi.
  
* **🛡️ Kontrol Anggaran (Budgets) Cerdas**  
  Kelola alokasi dana per kategori tiap bulan. Sistem akan memberikan status alokasi anggaran secara dinamis mulai dari **Safe** (Aman), **Warning** (Peringatan), **Critical** (Kritis), hingga **Over Budget** (Melebihi Anggaran).

* **🎯 Target Tabungan (Savings Goals)**  
  Tentukan target finansial jangka panjang Anda (misalnya membeli laptop atau menabung untuk liburan), catat kontribusi tabungan secara bertahap, dan pantau kemajuan target hingga selesai.

* **🔔 Notifikasi Real-time & Cerdas**  
  Notifikasi instan yang didukung oleh teknologi *Server-Sent Events (SSE)* untuk pembaruan data secara langsung. Sistem juga memantau aktivitas pengeluaran secara cerdas untuk mencegah pengiriman notifikasi peringatan yang duplikat dalam bulan yang sama.

* **📱 Progressive Web App (PWA) Ready**  
  Aplikasi dapat diinstal langsung di layar beranda ponsel atau desktop Anda, didukung oleh *Service Worker* untuk waktu muat (*load*) yang instan dan kapabilitas offline.

* **🔒 Autentikasi Supabase & Keamanan API**  
  Keamanan tingkat lanjut menggunakan integrasi Supabase Auth (Sign In, Sign Up, Reset Password) dengan validasi token JWT di sisi backend. Validasi data menggunakan Zod, pencegahan *rate limiting*, serta header HTTP yang aman (Helmet).

---

## 🛠️ Teknologi yang Digunakan

### Frontend (Klien)
* **Framework:** Next.js 15 (React 19) dengan App Router
* **Styling:** Tailwind CSS & Lucide Icons (untuk ikon)
* **Manajemen State Klien:** Zustand (state lokal/sesi) & TanStack React Query v5 (state server/real-time cache)
* **Form & Validasi:** React Hook Form + Zod
* **Grafik Visualisasi:** Recharts
* **Notifikasi Toast:** Sonner

### Backend (Server)
* **Runtime:** Node.js v20+ dengan Express.js (TypeScript)
* **ORM:** Prisma v6
* **Keamanan:** Helmet (HTTP Headers), CORS, dan Express Rate Limit
* **Event System:** Node.js EventEmitter (untuk sistem SSE)
* **Logging:** Pino & Pino-HTTP

### Layanan Cloud & Database
* **Database:** PostgreSQL (Hosted di Supabase via PgBouncer)
* **Autentikasi:** Supabase Auth (JWT-based)
* **Hosting:** Vercel (Frontend) & Railway (Backend)

---

## 📂 Struktur Repositori

Proyek ini dibangun menggunakan struktur **Monorepo** yang memisahkan folder frontend dan backend, namun berada dalam satu repositori yang sama:

```text
BudgedIn/
├── backend/                  # Aplikasi API Express (Node.js + TS)
│   ├── src/
│   │   ├── controllers/      # Logika HTTP & request handler
│   │   ├── services/         # Logika bisnis (business logic)
│   │   ├── repositories/     # Akses data (Prisma query)
│   │   ├── routes/           # Endpoint API routing
│   │   ├── lib/              # Inisialisasi library (Prisma, Supabase, Events)
│   │   ├── middlewares/      # Auth & Error middlewares
│   │   ├── validators/       # Validasi skema input (Zod)
│   │   └── server.ts         # Entry point server
│   ├── Dockerfile            # Konfigurasi container backend
│   └── railway.toml          # Pengaturan deploy ke Railway
│
├── frontend/                 # Aplikasi Next.js PWA (Next.js v15)
│   ├── src/
│   │   ├── app/              # Folder routing Next.js App Router
│   │   ├── components/       # Komponen UI global (sidebar, header, protected layout, dll.)
│   │   ├── features/         # Komponen & modul berdasarkan halaman fitur
│   │   ├── hooks/            # Custom React Hooks (termasuk useRealtimeEvents)
│   │   ├── services/         # Integrasi API klien
│   │   └── stores/           # Zustand state store
│   ├── public/               # Asset statis & Service Worker
│   ├── Dockerfile            # Konfigurasi container frontend
│   └── vercel.json           # Pengaturan deploy ke Vercel
│
├── prisma/                   # Skema database Prisma ORM global
│   └── schema.prisma
│
├── docs/                     # Dokumentasi desain arsitektur & API
└── docker-compose.yml        # Konfigurasi orkestrasi Docker lokal
```

---

## 🚀 Panduan Memulai (Local Setup)

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek BudgedIn di komputer lokal Anda:

### 1. Prasyarat
* Pasang **Node.js** versi 20 ke atas.
* Akun **Supabase** aktif (untuk database PostgreSQL dan Autentikasi).

### 2. Kloning Repositori
```bash
git clone https://github.com/havis239/BudgedIn.git
cd BudgedIn
```

### 3. Instalasi Dependensi
Jalankan perintah ini di root direktori untuk menginstal seluruh dependensi backend dan frontend secara otomatis:
```bash
npm install
```

### 4. Konfigurasi Environment Variables (`.env`)

#### Konfigurasi Backend (`/backend/.env`):
Buat berkas `.env` di dalam folder `backend/` dan isi sebagai berikut:
```env
PORT=4000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000

# Database Supabase (Masukkan kredensial dari dashboard Supabase Anda)
DATABASE_URL="postgresql://[user]:[password]@[host]:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://[user]:[password]@[host]:5432/postgres"

# Supabase API & Auth Config
SUPABASE_URL="https://[id-proyek].supabase.co"
SUPABASE_ANON_KEY="[anon_key_supabase]"
SUPABASE_SERVICE_ROLE_KEY="[service_role_key_supabase]"
SUPABASE_JWT_SECRET="[jwt_secret_dari_supabase_settings]"

# JWT Config
JWT_AUDIENCE="authenticated"
JWT_ISSUER="https://[id-proyek].supabase.co/auth/v1"
```

#### Konfigurasi Frontend (`/frontend/.env`):
Buat berkas `.env` di dalam folder `frontend/` dan isi sebagai berikut:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1
NEXT_PUBLIC_SUPABASE_URL="https://[id-proyek].supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="[anon_key_supabase]"
```

### 5. Sinkronisasi Database
Jalankan perintah ini untuk menyelaraskan skema database Prisma Anda ke database Supabase:
```bash
npx prisma db push
```

### 6. Menjalankan Aplikasi Secara Lokal
Anda dapat menjalankan backend dan frontend sekaligus dari direktori utama (*root*) menggunakan perintah:

* **Menjalankan Frontend:**
  ```bash
  npm run dev:frontend
  ```
  *(Aplikasi web Next.js akan berjalan di `http://localhost:3000`)*

* **Menjalankan Backend:**
  ```bash
  npm run dev:backend
  ```
  *(Aplikasi server API akan berjalan di `http://localhost:4000`)*

---

## 🛠️ Perintah Pengembangan (Development Commands)

Berikut adalah beberapa perintah praktis yang dapat dijalankan di direktori utama:

* `npm run build` — Melakukan build produksi untuk frontend dan backend secara bersamaan.
* `npm run lint` — Menjalankan pemeriksaan kode (linter) untuk mendeteksi kesalahan sintaks.
* `npm run test` — Menjalankan uji unit (*unit testing*) di sisi backend menggunakan Vitest.

---

## 🌐 Panduan Deploy ke Cloud
Untuk mempublikasikan aplikasi ini agar dapat diakses publik, ikuti panduan lengkap pada berkas [deployment_guide.md](docs/deployment.md) (atau lihat panduan cepat di bawah):
* **Frontend** dideploy ke **Vercel** dengan mengarahkan direktori utama proyek ke subfolder `frontend`.
* **Backend** dideploy ke **Railway** dengan mengarahkan direktori utama proyek ke subfolder `backend`.
* **Database & Auth** berjalan di server cloud **Supabase**.

---

## 📄 Lisensi

Proyek ini dilindungi di bawah lisensi MIT. Silakan gunakan dan kembangkan sesuai kebutuhan akademis maupun komersial Anda.
