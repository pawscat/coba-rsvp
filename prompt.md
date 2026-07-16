# Spesifikasi Proyek: Integrasi RSVP + QR Check-in ke Website Undangan Pernikahan

## 1. Konteks Proyek

Website undangan pernikahan digital (React + Vite, SPA statis) untuk acara **Nida & Ismaiel**, tanggal **14 Juni 2026**, sudah selesai dibangun dan berjalan (live di `thewedding-ismaielnida.online`). Situs ini berisi section-section berikut, dalam urutan scroll:

1. Cover (nama tamu dari parameter URL, mis. `?to=Nama+Tamu`)
2. Ayat Al-Qur'an pembuka
3. Profil mempelai (Nida & Ismaiel + orang tua masing-masing)
4. Save The Date (detail Akad Nikah & Tasyakuran: tanggal, lokasi, link Google Maps)
5. **Buku Tamu** — form sederhana (nama + status hadir + pesan ucapan), submit ke Google Apps Script yang menulis ke Google Sheet
6. Wedding Gift (nomor rekening bank)
7. Penutup

Situs mendukung parameter URL `?v=putra` untuk menampilkan detail lokasi resepsi versi keluarga mempelai pria (dua lokasi acara berbeda: pihak wanita dan pihak pria).

**Tujuan proyek ini:** mengganti section "Buku Tamu" yang sekarang sederhana (Google Apps Script + Google Sheet) dengan sistem **RSVP resmi + QR code check-in**, sambil mempertahankan situs undangan tetap sebagai SPA statis (tidak dimigrasi ke framework server-side seperti Next.js).

---

## 2. Keputusan Arsitektur (Sudah Difinalisasi — Jangan Diubah Tanpa Konfirmasi)

| Aspek | Keputusan |
|---|---|
| Situs undangan utama | **Tetap statis** (React + Vite seperti sekarang), hosting bebas (Vercel/Netlify/hosting biasa) |
| Backend & Database | **Supabase** (Postgres + Auth), menggantikan Google Apps Script sepenuhnya |
| Logic server-side (generate QR/PDF, kirim email) | **Supabase Edge Functions** — bukan Next.js API routes |
| 1 QR mewakili | **1 orang** (bukan 1 keluarga/rombongan) |
| Akses scanner (petugas check-in di lokasi) | **Wajib login** |
| Role sistem | **2 role**: `admin` dan `scanner`. Admin bisa menambahkan akun scanner baru |
| Dashboard admin | Real-time (lihat siapa sudah RSVP & siapa sudah check-in), dengan **fitur export ke Excel/CSV** |
| Aplikasi scanner + dashboard admin | **Aplikasi terpisah** dari situs undangan utama (mis. subdomain `admin.thewedding-ismaielnida.online`), React + Vite biasa yang connect langsung ke Supabase client SDK — tetap tidak butuh Next.js karena Supabase Auth berjalan baik di client-side |
| Skala | Target awal **100 tamu** |
| Notifikasi | Email saja (bukan WhatsApp bot — di luar scope, kompleksitas tambahan tidak diperlukan untuk skala ini) |

---

## 3. Alur Sistem End-to-End

1. Tamu membuka link undangan → scroll ke section RSVP baru
2. Tamu isi form RSVP: **nama, no HP, email, konfirmasi kehadiran (Hadir/Ragu/Maaf), pesan ucapan**
3. Data masuk ke tabel `guests` di Supabase
4. Jika konfirmasi = **Hadir**: sistem generate **QR code unik (UUID v4)** per tamu
5. Sistem generate **PDF** berisi: nama tamu, detail acara (tanggal, lokasi), dan QR code
6. PDF dikirim otomatis ke email tamu (via Resend)
7. Hari-H: petugas (role `scanner`) login ke aplikasi scanner terpisah
8. Petugas scan QR tamu menggunakan kamera HP (browser, tanpa install app)
9. Sistem validasi UUID terhadap database:
   - **Valid & belum check-in** → tampilkan nama tamu + centang hijau, update `checked_in = true`
   - **Sudah pernah check-in** → tampilkan warning "sudah check-in sebelumnya jam [waktu]" (mencegah screenshot QR dipakai berkali-kali)
   - **UUID tidak ditemukan** → tampilkan error
10. Admin memantau semua status RSVP & check-in secara real-time dari dashboard, dan bisa export data ke Excel/CSV kapan saja

---

## 4. Skema Database (Supabase Postgres)

### Tabel `users` (menggunakan Supabase Auth, bukan tabel manual — gunakan `auth.users` bawaan Supabase + tabel profil tambahan)

```sql
create table public.user_profiles (
  id uuid references auth.users(id) primary key,
  role text not null check (role in ('admin', 'scanner')),
  full_name text,
  created_at timestamptz default now()
);
```

### Tabel `guests`

```sql
create table public.guests (
  id uuid primary key default gen_random_uuid(), -- ini juga jadi isi QR code
  name text not null,
  phone text not null,
  email text not null,
  message text,
  attendance_status text not null check (attendance_status in ('Hadir', 'Ragu', 'Maaf')),
  qr_sent boolean default false,
  checked_in boolean default false,
  checked_in_at timestamptz,
  checked_in_by uuid references public.user_profiles(id),
  created_at timestamptz default now()
);
```

### Row Level Security (RLS)
- Tabel `guests`: insert publik diperbolehkan (siapa saja bisa submit RSVP dari situs), tapi select/update **hanya untuk user yang sudah login** dengan role `admin` atau `scanner` (scanner hanya boleh update `checked_in`, `checked_in_at`, `checked_in_by`; admin punya akses penuh).
- Tabel `user_profiles`: hanya `admin` yang bisa insert/update (menambahkan akun scanner baru).

---

## 5. Komponen yang Perlu Dibangun

### A. Edit di Situs Undangan Existing (React + Vite, statis)
- Ganti section "Buku Tamu" (form lama: nama + status + ucapan, submit ke Google Apps Script) menjadi form RSVP baru dengan field: **nama, no HP, email, konfirmasi kehadiran, pesan ucapan**
- Pertahankan gaya visual & animasi yang sudah ada (tema gold/blush/sage, Framer Motion, dsb — lihat referensi warna di bagian 6)
- Ganti `fetch(ce.rsvpEndpoint)` (Google Apps Script) menjadi pemanggilan Supabase client SDK (`@supabase/supabase-js`) untuk insert ke tabel `guests`
- Tampilkan pesan konfirmasi sukses setelah submit (mis. "Terima kasih, konfirmasi kehadiranmu sudah kami terima. QR code akan dikirim ke email kamu.")

### B. Supabase Edge Functions
- **`submit-rsvp`** (atau trigger database) — setelah insert baru dengan `attendance_status = 'Hadir'`:
  1. Generate QR code dari `id` (UUID) tamu — gunakan library `qrcode`
  2. Generate PDF berisi QR + nama tamu + detail acara — gunakan `@react-pdf/renderer` atau library PDF generation yang kompatibel dengan Deno (runtime Edge Functions)
  3. Kirim email via Resend API dengan PDF terlampir
  4. Update `qr_sent = true`
- **`check-in`** — endpoint dipanggil oleh aplikasi scanner setelah scan QR:
  1. Terima `id` (UUID) dari hasil scan
  2. Lookup ke tabel `guests`
  3. Jika ditemukan & `checked_in = false` → update jadi `true`, isi `checked_in_at` dan `checked_in_by`, return data tamu
  4. Jika sudah `checked_in = true` → return data tamu + timestamp check-in sebelumnya (untuk ditampilkan sebagai warning)
  5. Jika tidak ditemukan → return error

### C. Aplikasi Scanner + Dashboard Admin (Proyek Terpisah, React + Vite)
- **Halaman Login** — Supabase Auth (email + password), redirect sesuai role:
  - Role `scanner` → halaman scanner saja
  - Role `admin` → dashboard admin (dengan akses ke halaman scanner juga jika perlu)
- **Halaman Scanner**:
  - Akses kamera HP via `html5-qrcode`
  - Setelah scan berhasil, panggil Edge Function `check-in`
  - Tampilkan hasil: nama tamu + status (berhasil check-in / sudah check-in sebelumnya / tidak ditemukan)
- **Dashboard Admin**:
  - Tabel semua tamu: nama, no HP, email, status kehadiran, status check-in, waktu check-in
  - Update real-time menggunakan Supabase Realtime subscription (tidak perlu refresh manual)
  - Statistik ringkas: total RSVP, total konfirmasi Hadir/Ragu/Maaf, total sudah check-in
  - Tombol **export ke Excel/CSV**
  - Halaman **kelola akun scanner**: admin bisa menambahkan akun baru dengan role `scanner` (buat user baru via Supabase Auth Admin API, lalu insert ke `user_profiles`)

---

## 6. Referensi Desain (Wajib Diikuti, Jangan Menebak Sendiri)

Situs undangan existing menggunakan tema **elegan, minimalis, nuansa islami-modern**. Palet warna (CSS custom properties yang sudah ada di `assets/style.css`):

```css
--color-blush: #f7d9e3
--color-rose: #e6a4bc
--color-rosedeep: #be6e88
--color-sage: #c2d2bb
--color-sky: #d2e4f0
--color-skydeep: #7fa8cc
--color-gold: #c7a66b
--color-gold-light: #ead7a8
--color-gold-deep: #8f6c30
--color-ivory: #fbf7f2
--color-ink: #3a2c34
--color-ink-soft: #6a5660
--color-white: #fff
```

Font: **Cormorant Garamond**, **Fraunces**, **Jost**, **Marck Script** (Google Fonts, sudah di-load di `index.html`).

Untuk aplikasi scanner + dashboard admin (proyek terpisah), **gunakan palet warna yang sama** supaya konsisten secara brand, tapi dengan pendekatan UI yang lebih fungsional/dashboard-style (bukan harus semewah situs utama) — prioritaskan clarity dan kecepatan penggunaan karena akan dipakai petugas di lapangan pada hari-H.

---

## 7. Batasan & Hal yang TIDAK Termasuk Scope

- **Tidak** ada integrasi WhatsApp/bot WA — notifikasi email saja
- **Tidak** perlu migrasi situs undangan ke Next.js atau framework server-side lain
- **Tidak** perlu backend custom di luar Supabase (tidak pakai server Node.js terpisah, semua logic server-side lewat Edge Functions)
- 1 QR = 1 orang saja, **bukan** 1 QR untuk rombongan/keluarga

---

## 8. Rencana Pengerjaan Bertahap (Kerjakan Per Modul, Jangan Sekaligus)

Ikuti urutan ini. Setiap modul selesai → review dulu sebelum lanjut ke modul berikutnya:

1. **Rekonstruksi source code** situs undangan dari hasil build (lihat detail di bagian 10) — hasilkan project Vite + React yang rapi dan bisa di-build ulang, tampilan harus identik dengan versi live yang sekarang
2. **Setup Supabase**: buat project, jalankan schema SQL (tabel `guests`, `user_profiles`), setup RLS policies
3. **Edge Function `submit-rsvp`**: generate QR + PDF + kirim email (test dengan data dummy dulu sebelum terhubung ke form asli)
4. **Edit form RSVP di situs undangan hasil rekonstruksi**: ganti Buku Tamu lama, hubungkan ke Supabase
5. **Aplikasi Scanner**: halaman login + scan QR + panggil Edge Function `check-in`
6. **Dashboard Admin**: tabel real-time, statistik, kelola akun scanner
7. **Fitur export Excel/CSV** di dashboard admin
8. Testing end-to-end dengan data dummy skala kecil (5-10 tamu) sebelum dianggap selesai

---

## 9. Environment Variables yang Dibutuhkan

```
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=   # hanya untuk Edge Functions, jangan expose ke client
RESEND_API_KEY=
```

---

## 10. Instruksi Penggunaan Dokumen Ini (Untuk Agent/Antigravity)

- **Lokasi file**: hasil build situs undangan yang ada sekarang sudah tersedia di folder **`/undangan`** dalam project ini (berisi `index.html`, `assets/main.js`, `assets/style.css`, `music.mp3`, `og.png`). Gunakan ini sebagai sumber untuk proses rekonstruksi di bawah.
- **Catatan penting**: source code asli situs undangan (folder `src/` sebelum di-build) **tidak tersedia**. Yang ada hanya hasil build produksi di folder `/undangan` tersebut. Karena itu, langkah pertama sebelum mengedit apa pun adalah **merekonstruksi source code** dari hasil build ini:
  - Baca dan petakan struktur section dari `main.js` (cover, ayat, profil mempelai, save the date, buku tamu, wedding gift, penutup) beserta komponen-komponennya
  - Tulis ulang sebagai source code React yang rapi dan readable (bagi jadi komponen-komponen terpisah per section), gunakan `style.css` yang ada sebagai referensi kelas Tailwind/CSS custom yang dipakai
  - Setup ulang sebagai project Vite standar (`npm create vite`) dengan struktur folder `src/` yang jelas, supaya ke depannya mudah diedit dan di-build ulang
  - Setelah source code hasil rekonstruksi ini di-review dan dikonfirmasi oleh user cocok dengan tampilan aslinya, baru lanjut ke modul-modul di bagian 8
- **Jangan kerjakan semua modul sekaligus.** Ikuti urutan di **bagian 8 (Rencana Pengerjaan Bertahap)** satu per satu. Setelah satu modul selesai, berhenti dan tunggu review/konfirmasi dari user sebelum lanjut ke modul berikutnya.
- Buat rencana/plan dulu untuk modul yang sedang dikerjakan sebelum menulis kode, agar user bisa mengoreksi arah sebelum eksekusi penuh.
- Jangan mengubah keputusan arsitektur di **bagian 2** tanpa konfirmasi eksplisit dari user.
