-- Tabel user_profiles
create table public.user_profiles (
  id uuid references auth.users(id) primary key,
  role text not null check (role in ('admin', 'scanner')),
  full_name text,
  created_at timestamptz default now()
);

-- Tabel guests
create table public.guests (
  id uuid primary key default gen_random_uuid(),
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

-- Row Level Security (RLS)
alter table public.user_profiles enable row level security;
alter table public.guests enable row level security;

-- ==========================================
-- RLS: guests
-- ==========================================

-- 1. Publik bisa submit RSVP (insert)
create policy "Public can insert guests" on public.guests
  for insert with check (true);

-- 2. User login (admin/scanner) bisa melihat daftar tamu (select)
create policy "Authenticated users can read guests" on public.guests
  for select using (auth.role() = 'authenticated');

-- 3. Admin punya akses penuh (update/delete)
create policy "Admins have full access to guests" on public.guests
  for all using (
    exists (
      select 1 from public.user_profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- 4. Scanner hanya boleh update (logic update column ada di aplikasi/edge function)
create policy "Scanners can update guests" on public.guests
  for update using (
    exists (
      select 1 from public.user_profiles
      where id = auth.uid() and role = 'scanner'
    )
  );

-- ==========================================
-- RLS: user_profiles
-- ==========================================

-- 1. User bisa melihat profilnya sendiri (penting agar pengecekan role berjalan)
create policy "Users can read own profile" on public.user_profiles
  for select using (auth.uid() = id);

-- 2. Admin bisa melihat semua profil
create policy "Admins can read all profiles" on public.user_profiles
  for select using (
    exists (
      select 1 from public.user_profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- 3. Hanya admin yang bisa insert/update/delete profil
create policy "Admins can manage profiles" on public.user_profiles
  for insert with check (
    exists (
      select 1 from public.user_profiles
      where id = auth.uid() and role = 'admin'
    )
  );

create policy "Admins can update profiles" on public.user_profiles
  for update using (
    exists (
      select 1 from public.user_profiles
      where id = auth.uid() and role = 'admin'
    )
  );

create policy "Admins can delete profiles" on public.user_profiles
  for delete using (
    exists (
      select 1 from public.user_profiles
      where id = auth.uid() and role = 'admin'
    )
  );
