import { load } from './api.js';

const container = document.querySelector('#list') || document.querySelector('.galeri-container');

function render(list) {
  container.textContent = '';

  if (!list || list.length === 0) {
    container.textContent = 'Tidak ada data untuk ditampilkan.';
    return;
  }

  list.forEach(function (n) {
    const card = document.createElement('article');
    const heading = document.createElement('h3');

    heading.textContent = n.title;

    card.appendChild(heading);
    container.appendChild(card);
  });
}

async function init() {
  try {
    container.textContent = 'Memuat data...';

    const data = await load();
    console.log(data);

    render(data);
  } catch (error) {
    container.textContent = 'Gagal memuat data. Silakan coba lagi nanti.';
    console.error('Error di app.js:', error.message);
  }
}

init();