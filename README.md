# Tugas Pemrograman Web - Perulangan & Percabangan JavaScript

Aplikasi web sederhana untuk menghitung Nilai Akhir mahasiswa/siswa beserta penentuan **Predikat (Grade)** menggunakan konsep dasar JavaScript: **Perulangan (`for`)** dan **Percabangan (`if-else`) dengan 5 kondisi**.

##  Struktur File
.
├── index.html   # Struktur antarmuka web (UI)
├── style.css    # Tampilan dan tata letak halaman
├── script.js   # Logika perulangan, penanganan form, dan percabangan
└── README.md    # Dokumentasi tugas

---

##  Penjelasan Logika Program

### 1. Perulangan (`for`)
Perulangan digunakan pada saat pertama kali halaman dimuat untuk rendering daftar bobot penilaian ke elemen HTML `<ul>` secara dinamis dari sebuah *Array of Objects*.

```javascript
for (let i = 0; i < bobotPenilaian.length; i++) {
    let li = document.createElement("li");
    li.textContent = `${bobotPenilaian[i].nama}: ${bobotPenilaian[i].persentase}`;
    listElement.appendChild(li);
}
