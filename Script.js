// 1. CONTOH PERULANGAN (FOR LOOP)
// Mengisi daftar bobot penilaian ke elemen HTML secara otomatis saat web dibuka
const bobotPenilaian = [
    { nama: "Tugas", persentase: "20%" },
    { nama: "UTS", persentase: "35%" },
    { nama: "UAS", persentase: "45%" }
];

const listElement = document.getElementById("daftar-bobot");

for (let i = 0; i < bobotPenilaian.length; i++) {
    let li = document.createElement("li");
    li.textContent = `${bobotPenilaian[i].nama}: ${bobotPenilaian[i].persentase}`;
    listElement.appendChild(li);
}


// 2. FUNGSI UTAMA & PERCABANGAN (IF - ELSE IF - ELSE)
function hitungNilai() {
    // Mengambil nilai dari input form HTML
    let nilaiTugas = parseFloat(document.getElementById("tugas").value);
    let nilaiUTS = parseFloat(document.getElementById("uts").value);
    let nilaiUAS = parseFloat(document.getElementById("uas").value);

    // Validasi sederhana agar input tidak kosong / di luar rentang
    if (isNaN(nilaiTugas) || isNaN(nilaiUTS) || isNaN(nilaiUAS)) {
        alert("Harap isi semua kolom nilai terlebih dahulu!");
        return;
    }

    // Menghitung Nilai Akhir sesuai bobot
    let nilaiAkhir = (nilaiTugas * 0.20) + (nilaiUTS * 0.35) + (nilaiUAS * 0.45);

    // Variabel untuk menampung hasil percabangan
    let predikat = "";
    let keterangan = "";

    // PERCABANGAN DENGAN 5 KONDISI
    if (nilaiAkhir >= 85) {
        // Kondisi 1
        predikat = "A";
        keterangan = "Sangat Baik (Lulus)";
    } else if (nilaiAkhir >= 75) {
        // Kondisi 2
        predikat = "B";
        keterangan = "Baik (Lulus)";
    } else if (nilaiAkhir >= 65) {
        // Kondisi 3
        predikat = "C";
        keterangan = "Cukup (Lulus)";
    } else if (nilaiAkhir >= 50) {
        // Kondisi 4
        predikat = "D";
        keterangan = "Kurang (Perlu Perbaikan)";
    } else {
        // Kondisi 5
        predikat = "E";
        keterangan = "Gagal (Tidak Lulus)";
    }

    // Menampilkan hasil perhitungan dan predikat ke halaman HTML
    document.getElementById("nilai-akhir").innerText = nilaiAkhir.toFixed(2);
    document.getElementById("predikat").innerText = predikat;
    document.getElementById("keterangan").innerText = keterangan;
    
    // Menampilkan kontainer hasil yang sebelumnya tersembunyi
    document.getElementById("hasil").style.display = "block";
}