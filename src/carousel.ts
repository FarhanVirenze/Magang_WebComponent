import './carousel.css';
import carouselImage from './carousel.png';
import kantorImage from './kantor.png';
import kantor2Image from './kantor2.png';

function renderCarousel(): string {
  return `
    <div class="carousel-container">
      <!-- Slides -->
      <div class="carousel-slide active">
        <img src="${kantorImage}" alt="Slide 1" />
      </div>
      <div class="carousel-slide">
        <img src="${kantor2Image}" alt="Slide 2" />
      </div>
      <div class="carousel-slide">
        <img src="${carouselImage}" alt="Slide 3" />
      </div>

      <!-- Navigation Arrows -->
      <button class="carousel-arrow left">&#10094;</button>
      <button class="carousel-arrow right">&#10095;</button>

      <!-- Dots -->
      <div class="carousel-dots">
        <div class="carousel-dot active" data-index="0"></div>
        <div class="carousel-dot" data-index="1"></div>
        <div class="carousel-dot" data-index="2"></div>
      </div>
    </div>
  `;
}

class ImageCarousel extends HTMLElement {
  private index = 0;
  private intervalTime = 5000;
  private intervalId?: number;

  connectedCallback(): void {
    this.innerHTML = renderCarousel();
    this.setupEventListeners();
    this.startCarousel();
  }

  setupEventListeners(): void {
    this.querySelector(".carousel-arrow.left")?.addEventListener("click", () => {
      this.prevSlide();
      this.resetInterval();
    });

    this.querySelector(".carousel-arrow.right")?.addEventListener("click", () => {
      this.nextSlide();
      this.resetInterval();
    });

    this.querySelectorAll<HTMLElement>(".carousel-dot").forEach(dot => {
      dot.addEventListener("click", () => {
        const index = parseInt(dot.dataset.index || "0");
        this.showSlide(index);
        this.resetInterval();
      });
    });
  }

  startCarousel(): void {
    this.intervalId = window.setInterval(() => this.nextSlide(), this.intervalTime);
  }

  resetInterval(): void {
    if (this.intervalId) clearInterval(this.intervalId);
    this.startCarousel();
  }

  showSlide(index: number): void {
    const slides = this.querySelectorAll<HTMLDivElement>(".carousel-slide");
    const dots = this.querySelectorAll<HTMLElement>(".carousel-dot");

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    this.index = index;
  }

  nextSlide(): void {
    const slides = this.querySelectorAll(".carousel-slide");
    this.index = (this.index + 1) % slides.length;
    this.showSlide(this.index);
  }

  prevSlide(): void {
    const slides = this.querySelectorAll(".carousel-slide");
    this.index = (this.index - 1 + slides.length) % slides.length;
    this.showSlide(this.index);
  }

  disconnectedCallback(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}

customElements.define('image-carousel', ImageCarousel);
