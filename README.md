# PABW - Worksheet Pertemuan 3

## Rencana Pertemuan 3

### Judul
Jejak Perjalanan Saya

### Deskripsi
Kumpulan foto dan catatan singkat dari beberapa perjalanan yang pernah saya lakukan.

### Navigasi
1. Galeri Perjalanan
2. Tambah Perjalanan
3. Tentang Saya

### Bagian Utama
1. Galeri Perjalanan
2. Tambah Perjalanan

### Kolom Tabel
- Tempat
- Tahun
- Teman Perjalanan
- Lama Tinggal

### Kolom Form
- Tempat
- Tahun
- Lama Tinggal

### Gambar
perjalanan-1.jpg

## Penggunaan AI

## Pengungkapan AI

Saya menggunakan Ai sebagai bantuan untuk memahami beberapa konsep HTML5 dan mengecek struktur kode. 
Pemilihan topik, isi halaman, data perjalanan, dan penyesuaian akhir saya kerjakan sendiri.


## Pertemuan 4 — Design token halaman profil

- Berkas gaya yang akan dibuat: tokens.css, base.css,
  layout.css, komponen.css, tema.css
- Warna utama: #3A5A40 (hijau), dipilih karena memberikan
  tampilan hijau yang sesuai dengan desain halaman perjalanan.

### Token yang saya tetapkan

| Token | Nilai | Untuk apa |
|---|---|---|
| --color-primary | #3A5A40 | tombol, tautan, penanda |
| --color-fg | #344E41 | warna teks utama |
| --color-bg | #F5F7EF | latar halaman |
| --color-surface | #BBD58E | latar kartu |
| --color-border | #5A9F68 | garis dan batas elemen |
| --color-danger | #B94A48 | pesan atau tanda kesalahan |
| --color-focus | #5A9F68 | penanda fokus |
| --radius-md | 0.5rem | sudut tombol dan kartu |
| --space-4 | 1rem | jarak standar antar elemen |

Kriteria selesai saya: mengubah --color-primary di satu baris
harus mengubah warna tombol, tautan, judul, dan garis fokus.

## Pertemuan 8 — JavaScript Modern ES6+, Struktur Data, dan Array Methods

- **Bagian yang dikerjakan sendiri:** Menyusun konsep logika dasar, mendefinisikan objek `profil` serta array `daftarProyek` beserta isinya sesuai topik halaman saya, mengetik seluruh kode di `app.js`, melakukan pengujian di *Console* browser, serta mengunggah (*commit* & *push*) kode ke repositori GitHub.
- **Bagian yang dibantu AI:** Mendapatkan panduan struktur penulisan kode untuk fungsi murni, penjelasan penggunaan array methods (`map`, `filter`)

## Pertemuan 9 — DOM, Events, and Interactivity

Modular Architecture: Memisahkan logika data (app.js) dan logika render DOM serta interaksi (event handling) ke dom.js menggunakan ES6 modules.

Dynamic DOM Manipulation: Membangun kartu secara programatik menggunakan document.createElement dan mengisi teks dengan aman via textContent.

Event Delegation: Mengimplementasikan event delegation pada kontainer #filter untuk menyaring kategori kartu secara efisien.

Form-Based Data Ingestion: Menangkap input form secara dinamis, mencegah reload halaman (preventDefault), menambahkan objek baru ke array, dan merender ulang tampilan secara real-time.

Pengungkapan AI (AI Disclosure)

Bantuan AI: Saya menggunakan AI sebagai bantuan untuk memahami beberapa konsep HTML5, mengecek struktur kode, mengorganisasi event delegation, dan memformat dokumentasi/laporan worksheet.

Kontribusi Pribadi: Pemilihan topik, isi halaman, data perjalanan, desain token, logika JavaScript, dan penyesuaian akhir dikerjakan dan diverifikasi sendiri.