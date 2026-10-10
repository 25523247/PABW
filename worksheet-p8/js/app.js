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