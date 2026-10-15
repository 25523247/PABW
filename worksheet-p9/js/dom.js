import { daftarPerjalanan } from './app.js';

const container = document.querySelector(".katalog");

function buildCard(perjalanan) {
  const article = document.createElement("article");
  article.className = "kartu";

  const p = document.createElement("p");
  p.textContent = `Perjalanan saya di ${perjalanan.tempat} (${perjalanan.tahun})`;
  
  article.append(p);
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