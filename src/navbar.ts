import './navbar.css';
import diskominfoIcon from './diskominfo.png';

function renderNavbar(): string {
  return `
    <nav class="navbar transparent">
      <div class="navbar-left">
        <div class="navbar-logo">
          <img id="navbar-logo-img" src="${diskominfoIcon}" alt="Logo Diskominfo Jogja" />
        </div>
        <div class="logo-text">
          <div>Dinas Komunikasi dan Informatika</div>
          <div>Daerah Istimewa Yogyakarta</div>
        </div>
      </div>

      <button id="navbar-toggle" class="navbar-toggle">
        <span class="icon-menu">☰</span>
        <span class="icon-close" style="display: none;">✕</span>
      </button>

      <ul class="navbar-menu">
        <li><a href="#">Beranda</a></li>

        <li class="dropdown">
          <a href="#">Profil</a>
          <ul class="dropdown-menu">
            <li><a href="#">Visi & Misi</a></li>
            <li><a href="#">Struktur Organisasi</a></li>
          </ul>
        </li>

        <li class="dropdown">
          <a href="#">Program & Kegiatan</a>
          <ul class="dropdown-menu">
            <li><a href="#">Program Kerja</a></li>
            <li><a href="#">Agenda</a></li>
          </ul>
        </li>

        <li class="dropdown">
          <a href="#">Layanan</a>
          <ul class="dropdown-menu">
            <li><a href="#">Helpdesk</a></li>
            <li><a href="#">Pengaduan</a></li>
          </ul>
        </li>

        <li><a href="#">Berita</a></li>
        <li><a href="#">Galeri</a></li>
        <li><a href="#">Kontak</a></li>
        <li><a href="#">Kebijakan</a></li>
        <li><a href="#" aria-label="Pencarian"><strong>🔍</strong></a></li>
      </ul>
    </nav>
  `;
}

class MainNavbar extends HTMLElement {
  connectedCallback(): void {
    this.innerHTML = renderNavbar();

    const toggle = this.querySelector<HTMLButtonElement>('#navbar-toggle');
    const menu = this.querySelector('.navbar-menu');
    const iconMenu = toggle?.querySelector('.icon-menu') as HTMLElement;
    const iconClose = toggle?.querySelector('.icon-close') as HTMLElement;

    toggle?.addEventListener('click', () => {
      const isOpen = menu?.classList.toggle('open');

      if (menu?.classList.contains('open')) {
        iconMenu.style.display = 'none';
        iconClose.style.display = 'inline';
      } else {
        iconMenu.style.display = 'inline';
        iconClose.style.display = 'none';
      }
    });

    // Mobile dropdown toggle (click instead of hover)
    const dropdownLinks = this.querySelectorAll('.dropdown > a');

    dropdownLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();

          const dropdownItem = (e.currentTarget as HTMLElement).closest('.dropdown');

          // Close other open dropdowns
          this.querySelectorAll('.dropdown.open').forEach(openItem => {
            if (openItem !== dropdownItem) {
              openItem.classList.remove('open');
            }
          });

          dropdownItem?.classList.toggle('open');
        }
      });
    });

    // Scroll behavior
    window.addEventListener('scroll', () => {
      const navbar = this.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar?.classList.add('scrolled');
        navbar?.classList.remove('transparent');
      } else {
        navbar?.classList.add('transparent');
        navbar?.classList.remove('scrolled');
      }
    });
  }
}

customElements.define('main-navbar', MainNavbar);
