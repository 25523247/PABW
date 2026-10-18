import { daftarPerjalanan, tambahPerjalananBaru } from './app.js';

const container = document.querySelector(".katalog");
const filterContainer = document.querySelector("#filter");
const formTambah = document.querySelector("#tambah form");

function buildCard(perjalanan) {
  const article = document.createElement("article");
  article.className = "kartu";

  const figure = document.createElement("figure");

  const img = document.createElement("img");
  img.src = perjalanan.gambar || "perjalanan-1.jpeg";
  img.alt = perjalanan.alt || `Foto perjalanan saya di ${perjalanan.tempat}`;
  img.width = 300;
  img.height = 300;
  img.loading = "lazy";

  const figcaption = document.createElement("figcaption");
  figcaption.textContent = `Perjalanan saya di ${perjalanan.tempat} (${perjalanan.tahun})`;

  figure.append(img, figcaption);
  article.append(figure);

  return article;
}

function render(list) {
  container.textContent = "";

  if (list.length === 0) {
    return;
  }

  list.forEach((item) => {
    container.append(buildCard(item));
  });
}

render(daftarPerjalanan);

if (filterContainer) {
  filterContainer.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    const filterValue = button.getAttribute("data-filter");

    if (filterValue === "all" || !filterValue) {
      render(daftarPerjalanan);
    } else {
      const filteredData = daftarPerjalanan.filter(
        (item) => item.kategori === filterValue
      );
      render(filteredData);
    }
  });
}

if (formTambah) {
  formTambah.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const inputTempat = document.querySelector("#tempat").value;
    const inputTahun = document.querySelector("#tahun").value;
    const inputLama = document.querySelector("#lama").value;

    const itemBaru = {
      tempat: inputTempat,
      tahun: inputTahun,
      lama: inputLama,
      kategori: "galeri",
      selesai: true
    };

    tambahPerjalananBaru(itemBaru);
    render(daftarPerjalanan);

    formTambah.reset();
  });
}