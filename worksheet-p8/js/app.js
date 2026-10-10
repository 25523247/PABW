
const perjalanan = [
    {
        tempat: "Yogyakarta",
        tahun: 2025,
        teman: "Teman",
        lama: 1
    },
    {
        tempat: "Bali",
        tahun: 2026,
        teman: "Teman",
        lama: 5
    },
    {
        tempat: "Dubai",
        tahun: 2026,
        teman: "Keluarga",
        lama: 3
    }
];

const perjalananTerbaru = perjalanan.filter(
    item => item.tahun === 2026
);

const cariPerjalanan = perjalanan.find(
    item => item.tempat === "Bali"
);

console.log("Semua perjalanan:", perjalanan);
console.log("Perjalanan tahun 2026:", perjalananTerbaru);
console.log("Hasil pencarian Bali:", cariPerjalanan);
