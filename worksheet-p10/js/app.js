import { load } from './api.js';

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
    { 
        tempat: "Yogyakarta", 
        tahun: "2025", 
        kategori: "galeri",
        gambar: "perjalanan-1.jpeg", 
        alt: "Foto perjalanan saya di Yogyakarta",
        selesai: true 
    },
    { 
        tempat: "Bali", 
        tahun: "2026", 
        kategori: "galeri",
        gambar: "perjalanan-2.jpeg", 
        alt: "Foto perjalanan saya di Bali",
        selesai: true 
    },
    { 
        tempat: "Dubai", 
        tahun: "2026", 
        kategori: "favorit", 
        gambar: "perjalanan-3.jpeg", 
        alt: "Foto perjalanan saya di Dubai",
        selesai: true 
    },
];

export function tambahPerjalananBaru(itemBaru) {
    daftarPerjalanan.push(itemBaru);
}

const perjalananSelesai = daftarPerjalanan.filter(p => p.selesai);
const namaTempatSelesai = perjalananSelesai.map(p => p.tempat);

console.log("Perjalanan yang sudah dikunjungi:", namaTempatSelesai);

const container = document.querySelector('.katalog') || document.querySelector('#list');

function render(list) {
  if (!container) return;
  container.textContent = '';

  if (!list || list.length === 0) {
    container.textContent = 'Tidak ada data untuk ditampilkan.';
    return;
  }

  list.forEach(function (n) {
    const card = document.createElement('article');
    card.classList.add('kartu');

    const heading = document.createElement('h3');
    heading.textContent = n.title;

    card.appendChild(heading);
    container.appendChild(card);
  });
}

async function init() {
  try {
    if (container) {
      container.textContent = 'Memuat data...';
    }
    const data = await load();
    render(data);
  } catch (error) {
    if (container) {
      container.textContent = 'Gagal memuat data. Silakan coba lagi nanti.';
    }
    console.error("Gagal memuat:", error.message);
  }
}

init();