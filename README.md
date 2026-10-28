# 👥 Silhouette Quiz (Game Tebak Gambar Bayangan)

Aplikasi kuis tebak objek interaktif (*Silhouette Quiz*) berbasis JavaScript yang menggunakan efek filter siluet hitam pekat (`brightness(0)`) pada gambar objek asli untuk ditebak oleh pemain.

---

## 🎯 Konsep Pembelajaran RPL / Pemrograman Web

1. **CSS Image Filtering (`brightness(0)`):**
   Memanfaatkan properti filter visual CSS secara dinamis untuk menggelapkan gambar objek menjadi siluet hitam pekat serta menghilangkannya saat jawaban terbuka.
2. **Dynamic Multiple Choice Generation:**
   Mengambil kunci jawaban benar dari array objek data serta mengombinasikannya dengan 3 pilihan pengecoh acak.
3. **DOM State & Class Toggle:**
   Mengontrol status kelas `.revealed` pada pembungkus gambar guna memicu transisi warna asli objek secara mulus.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Panel skor, area gambar siluet, grid pilihan opsi, & tombol lanjut
├── style.css        # Desain Neobrutalism pink-pop, filter brightness(0), & animasi kartu
└── script.js        # Logika array acak, generator kuis gambar, & manajemen DOM