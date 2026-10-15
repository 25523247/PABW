const profil = {
    nama: "Anindya Salwa Virginia",
    peran: "Mahasiswa Informatika",
    keahlian: ["Bermain gitar", "Bernyanyi", "Renang"],
};

const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;
console.log(kalimat);

function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

export const daftarPerjalanan = [
  { tempat: "Yogyakarta", tahun: "2025", kategori: "galeri", selesai: true },
  { tempat: "Bali", tahun: "2026", kategori: "galeri", selesai: true },
  { tempat: "Dubai", tahun: "2026", kategori: "galeri", selesai: true },
];

const perjalananSelesai = daftarPerjalanan.filter(p => p.selesai);
const namaTempatSelesai = perjalananSelesai.map(p => p.tempat);

console.log("Perjalanan yang sudah dikunjungi:", namaTempatSelesai);