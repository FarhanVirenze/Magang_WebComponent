import './container.css';
import situsImage from './situs.png';

function renderContainer(): string {
  return `
    <main class="container">
      <h1>Selamat Datang di Portal Aksesibilitas</h1>
      <p>
        Halaman ini adalah simulasi antarmuka web Diskominfo Jogja yang telah dilengkapi dengan fitur aksesibilitas.
        Anda dapat menyesuaikan ukuran huruf, kontras warna, dan preferensi visual lainnya menggunakan widget di sebelah kanan layar.
      </p>

      <a href="https://diskominfo.jogjaprov.go.id/" class="button" target="_blank" rel="noopener noreferrer">
        Kunjungi Situs Resmi
      </a>

      <figure>
        <img src="${situsImage}" alt="Tangkapan layar banner situs resmi Diskominfo Jogja" class="responsive-img" />
      </figure>
    </main>
  `;
}

class MainContainer extends HTMLElement {
  connectedCallback(): void {
    this.innerHTML = renderContainer();
  }
}

customElements.define('main-container', MainContainer);
