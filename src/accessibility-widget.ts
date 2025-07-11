const allowedDomains = ["jogjaprov.go.id", "www.jogjaprov.go.id", "localhost"];

if (!allowedDomains.includes(window.location.hostname)) {
  console.warn("Script hanya diizinkan untuk domain jogjaprov.go.id.");
  throw new Error("Unauthorized domain: " + window.location.hostname);
}

import "./accessibility.css";
import toggleIcon from "./toggle.png";
import judulIcon from "./judul.svg";

class AccessibilityWidget extends HTMLElement {
  private fontSize: number = 100;
  private imagesHidden: boolean = false;
  private speechEnabled: boolean = false;
  private speechSynthesis = window.speechSynthesis;

  connectedCallback(): void {
    this.render();
    this.setupEventListeners();
    this.loadGoogleTranslate();
    this.setupTextSelectionReader();
  }

  render(): void {
    this.innerHTML = `
      <div id="accessibility-toggle" class="accessibility-toggle">
        <button class="toggle-button">
          <img src="${toggleIcon}" alt="Toggle Accessibility Menu"/>
        </button>
      </div>
      <div id="accessibility-menu" class="accessibility-menu invisible opacity-0">
        <div class="menu-header">
          <h2 data-i18n="menuTitle">Menu Aksesibilitas</h2>
          <button class="close-btn">×</button>
        </div>

        <div class="menu-body">
        <div class="section">
          <label data-i18n="languageLabel">Pilih Bahasa</label>
          <div id="google_translate_element" class="translate-box"></div>
        </div>

        <div class="section">
          <label for="accessibility-profile">Pilih Profil Aksesibilitas</label>
          <select id="accessibility-profile">
            <option value="">Pilih Profil Aksesibilitas</option>
            <option value="buta-warna">Buta Warna</option>
            <option value="disleksia">Disleksia</option>
            <option value="gangguan-penglihatan">Gangguan Penglihatan</option>
            <option value="tunanetra">Tunanetra</option>
            <option value="kognitif">Kognitif & Pembelajaran</option>
            <option value="epilepsi">Kejang & Epilepsi</option>
            <option value="adhd">ADHD</option>
          </select>
        </div>

        <div class="section">
          <label for="widget-position">Posisi Widget</label>
          <select id="widget-position">
            <option value="kiri-bawah">Kiri Bawah</option>
            <option value="kanan-bawah" selected>Kanan Bawah</option>
            <option value="kiri-atas">Kiri Atas</option>
            <option value="kanan-atas">Kanan Atas</option>
            <option value="kiri-tengah">Kiri Tengah</option>
            <option value="kanan-tengah">Kanan Tengah</option>
            <option value="bawah-tengah">Bawah Tengah</option>
            <option value="atas-tengah">Atas Tengah</option>
          </select>
        </div>

        <div class="section">
          <p data-i18n="fontSizeLabel">Sesuaikan Ukuran Font</p>
          <div class="font-controls">
            <button class="btn decrease-font">-</button>
            <span id="fontSizeDisplay">100%</span>
            <button class="btn increase-font">+</button>
          </div>
        </div>

        <div class="section">
          <p data-i18n="adjustContent">Penyesuaian Konten</p>
          <div class="grid-buttons">
            ${this.generateButtons([
              [
                "highlight-title",
                `<img src="${judulIcon}" alt="Sorot Judul"/>`,
                "title",
              ],
              ["highlight-links", "🔗", "links"],
              ["dyslexia-font", "🧠", "dyslexia"],
              ["letter-spacing", "↔️", "spacing"],
              ["line-height", "📏", "lineHeight"],
              ["font-weight", "🅱️", "bold"],
            ])}
          </div>
        </div>

        <div class="section">
          <p data-i18n="adjustColor">Penyesuaian Warna</p>
          <div class="grid-buttons">
            ${this.generateButtons([
              ["dark-contrast", "🌑", "dark"],
              ["light-contrast", "🌕", "light"],
              ["high-contrast", "🔳", "contrast"],
              ["high-saturation", "🎨", "saturateHigh"],
              ["low-saturation", "🌫️", "saturateLow"],
              ["monochrome", "⚫", "mono"],
            ])}
          </div>
        </div>

        <div class="section">
          <p data-i18n="tools">Alat</p>
          <div class="grid-buttons">
            <button class="btn toggle-reader toggle-class" data-feature="reader">
              <div class="icon-wrapper">🔈</div>
              <span data-i18n="reader">Pembaca Layar</span>
            </button>
            <button class="btn toggle-images">
              <div class="icon-wrapper">🖼️</div>
              <span data-i18n="hideImages">Sembunyikan Gambar</span>
            </button>
            <button class="btn toggle-class" data-class="reading-guide">
              <div class="icon-wrapper">📘</div>
              <span data-i18n="guide">Panduan Membaca</span>
            </button>
            <button class="btn toggle-class" data-class="reading-mask">
              <div class="icon-wrapper">🕶️</div>
              <span data-i18n="mask">Masker Membaca</span>
            </button>
            <button class="btn disable-animations">
              <div class="icon-wrapper">⛔</div>
              <span data-i18n="stopAnim">Nonaktifkan Animasi</span>
            </button>
            <button class="btn toggle-class" data-class="big-cursor">
              <div class="icon-wrapper">🖱️</div>
              <span data-i18n="cursor">Kursor Besar</span>
            </button>
          </div>
        </div>

        <div class="section text-center">
          <button class="reset-btn" data-i18n="reset">Atur Ulang Pengaturan</button>
        </div>
         </div>
      </div>
    `;
  }

  generateButtons(buttons: [string, string, string][]): string {
    const labels: Record<string, string> = {
      title: "Sorot Judul",
      links: "Sorot Tautan",
      dyslexia: "Font Disleksia",
      spacing: "Jarak Huruf",
      lineHeight: "Tinggi Baris",
      bold: "Ketebalan Font",
      dark: "Kontras Gelap",
      light: "Kontras Terang",
      contrast: "Kontras Tinggi",
      saturateHigh: "Saturasi Tinggi",
      saturateLow: "Saturasi Rendah",
      mono: "Monokrom",
    };

    return buttons
      .map(
        ([cls, icon, key]) => `
      <button class="btn toggle-class" data-class="${cls}">
        <div class="icon-wrapper">${icon}</div>
        <span data-i18n="${key}">${labels[key]}</span>
      </button>
    `
      )
      .join("");
  }

  setupTextSelectionReader(): void {
    document.addEventListener("mouseup", () => {
      if (!this.speechEnabled) return;
      const selectedText = window.getSelection()?.toString().trim();
      if (selectedText) this.readText(selectedText);
    });
  }

  getSelectedTranslateLang(): string {
    const frame = document.querySelector(
      "iframe.goog-te-menu-frame"
    ) as HTMLIFrameElement | null;
    if (!frame) return "id-ID"; // default bahasa Indonesia

    try {
      const langElement = frame.contentDocument?.querySelector(
        ".goog-te-menu2-item-selected span.text"
      ) as HTMLElement;
      if (!langElement) return "id-ID";

      const langText = langElement.innerText.toLowerCase();

      // Peta bahasa ke BCP 47 codes yang dikenali speechSynthesis
      const langMap: Record<string, string> = {
        indonesian: "id-ID",
        english: "en-US",
        japanese: "ja-JP",
        korean: "ko-KR",
        dutch: "nl-NL",
        "chinese (simplified)": "zh-CN",
        "chinese (traditional)": "zh-TW",
        russian: "ru-RU",
        arabic: "ar-SA",
        german: "de-DE",
        spanish: "es-ES",
        italian: "it-IT",
        malay: "ms-MY",
        thai: "th-TH",
        vietnamese: "vi-VN",
        hindi: "hi-IN",
        french: "fr-FR",
        armenian: "hy-AM",
        belarusian: "be-BY",
        bulgarian: "bg-BG",
        catalan: "ca-ES",
        frisian: "fy-NL",
      };

      return langMap[langText] || "id-ID"; // fallback
    } catch {
      return "id-ID";
    }
  }

  readText(text: string): void {
    this.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = this.getSelectedTranslateLang(); // gunakan bahasa aktif
    utterance.rate = 1;

    this.speechSynthesis.speak(utterance);
  }

  setupEventListeners(): void {
    const $ = (selector: string) => this.querySelector(selector);
    const $$ = (selector: string) => this.querySelectorAll(selector);

    const toggleBtn = $(".toggle-button");
    const closeBtn = $(".close-btn");
    const incFont = $(".increase-font");
    const decFont = $(".decrease-font");
    const resetBtn = $(".reset-btn");
    const imgToggle = $(".toggle-images");
    const animDisable = $(".disable-animations");
    const readerToggle = $(".toggle-reader");
    const profileSelect = $(
      "#accessibility-profile"
    ) as HTMLSelectElement | null;
    const positionSelect = $("#widget-position") as HTMLSelectElement | null;

    toggleBtn?.addEventListener("click", () => this.toggleMenu());
    closeBtn?.addEventListener("click", () => this.toggleMenu());
    incFont?.addEventListener("click", () => this.adjustFontSize(10));
    decFont?.addEventListener("click", () => this.adjustFontSize(-10));
    resetBtn?.addEventListener("click", () => this.resetAccessibility());

    imgToggle?.addEventListener("click", () => {
      this.toggleImages();
      imgToggle.classList.toggle("active", this.imagesHidden);
    });

    animDisable?.addEventListener("click", () => {
      this.disableAnimations();
      animDisable.classList.toggle("active");
    });

    //
    readerToggle?.addEventListener("click", () => {
      const wasEnabled = this.speechEnabled;
      this.speechEnabled = !this.speechEnabled;
      readerToggle.classList.toggle("active", this.speechEnabled);

      if (wasEnabled && !this.speechEnabled) {
        this.speechSynthesis.cancel();
      }
    });

    $$(".toggle-class").forEach((btn) => {
      btn.addEventListener("click", () => {
        const className = (btn as HTMLElement).dataset.class;
        if (!className) return;

        const colorClasses = [
          "dark-contrast",
          "light-contrast",
          "high-contrast",
          "high-saturation",
          "low-saturation",
          "monochrome",
        ];

        // Jika termasuk dalam kategori warna (hanya satu boleh aktif)
        if (colorClasses.includes(className)) {
          const isActive = btn.classList.contains("active");
          document.body.classList.remove(...colorClasses);
          $$(".toggle-class").forEach((b) => {
            const bc = (b as HTMLElement).dataset.class;
            if (bc && colorClasses.includes(bc)) {
              b.classList.remove("active");
            }
          });

          if (!isActive) {
            document.body.classList.add(className);
            btn.classList.add("active");
          }
        } else {
          // Cek apakah fitur reading-guide atau reading-mask
          const isReadingGuide = className === "reading-guide";
          const isReadingMask = className === "reading-mask";

          if (isReadingGuide || isReadingMask) {
            // Matikan yang satunya jika sedang aktif
            const otherClass = isReadingGuide
              ? "reading-mask"
              : "reading-guide";
            document.body.classList.remove(otherClass);
            const otherBtn = document.querySelector(
              `.toggle-class[data-class="${otherClass}"]`
            );
            if (otherBtn) otherBtn.classList.remove("active");
          }

          // Toggle class saat ini
          const isActive = document.body.classList.toggle(className);
          btn.classList.toggle("active", isActive);
        }
      });
    });

    profileSelect?.addEventListener("change", (e: Event) => {
      // Matikan pembaca layar
      this.speechEnabled = false;
      this.speechSynthesis.cancel();

      // Reset tombol reader
      const readerBtn = this.querySelector(
        '.toggle-class[data-feature="reader"]'
      );
      if (readerBtn) readerBtn.classList.remove("active");

      // Reset semua class dari body dan html
      const resetClasses = [
        "highlight-title",
        "highlight-links",
        "dyslexia-font",
        "letter-spacing",
        "line-height",
        "font-weight",
        "dark-contrast",
        "light-contrast",
        "high-contrast",
        "high-saturation",
        "low-saturation",
        "monochrome",
        "reading-guide",
        "reading-mask",
        "big-cursor",
      ];
      document.body.classList.remove(...resetClasses);
      document.documentElement.classList.remove(
        ...Array.from(document.documentElement.classList).filter((cls) =>
          cls.startsWith("font-scale-")
        )
      );
      document.documentElement.classList.add("font-scale-100");

      // Reset juga class font-scale pada .content-wrapper
      const contentWrapper = document.querySelector(".content-wrapper");
      if (contentWrapper) {
        contentWrapper.classList.remove(
          ...Array.from(contentWrapper.classList).filter((cls) =>
            cls.startsWith("font-scale-")
          )
        );
        contentWrapper.classList.add("font-scale-100");
      }

      // Reset label display font jika ada
      const fontDisplay = this.querySelector("#fontSizeDisplay");
      if (fontDisplay) fontDisplay.textContent = "100%";

      // Reset semua tombol toggle
      this.querySelectorAll(".toggle-class").forEach((btn) => {
        btn.classList.remove("active");
      });

      // Fungsi aktifkan toggle tombol
      const activateToggleButton = (className: string) => {
        const btn = this.querySelector(
          `.toggle-class[data-class="${className}"]`
        );
        if (btn) {
          btn.classList.add("active");
          document.body.classList.add(className);
        }
      };

      // Ambil nilai pilihan profil
      const value = (e.target as HTMLSelectElement).value;

      // Switch berdasarkan profil
      switch (value) {
        case "":
          this.resetAccessibility(); // Reset manual tambahan jika perlu
          break;
        case "buta-warna":
          activateToggleButton("high-saturation");
          break;
        case "disleksia":
          activateToggleButton("dyslexia-font");
          break;
        case "gangguan-penglihatan":
          activateToggleButton("high-saturation");
          activateToggleButton("big-cursor");
          if (contentWrapper) {
            contentWrapper.classList.remove(
              ...Array.from(contentWrapper.classList).filter((cls) =>
                cls.startsWith("font-scale-")
              )
            );
            contentWrapper.classList.add("font-scale-130");
          }
          this.fontSize = 130;
          if (fontDisplay) fontDisplay.textContent = "130%";
          break;
        case "tunanetra":
          this.speechEnabled = true;
          if (readerBtn) readerBtn.classList.add("active");
          const lang = this.getSelectedTranslateLang();
          this.readText(
            "Fitur pembaca layar diaktifkan. Silakan blok teks untuk dibacakan."
          );
          break;
        case "kognitif":
          activateToggleButton("font-weight");
          activateToggleButton("high-contrast");
          activateToggleButton("reading-guide");
          break;
        case "epilepsi":
          activateToggleButton("low-saturation");
          break;
        case "adhd":
          activateToggleButton("low-saturation");
          activateToggleButton("reading-mask");
          break;
      }
    });

    positionSelect?.addEventListener("change", (e: Event) => {
      const value = (e.target as HTMLSelectElement).value;
      const widget = $("#accessibility-toggle") as HTMLElement;
      const menu = $("#accessibility-menu") as HTMLElement;
      if (!widget || !menu) return;

      const positions: Record<string, Partial<CSSStyleDeclaration>> = {
        "kiri-bawah": { bottom: "20px", left: "20px" },
        "kanan-bawah": { bottom: "20px", right: "20px" },
        "kiri-atas": { top: "20px", left: "20px" },
        "kanan-atas": { top: "20px", right: "20px" },
        "kiri-tengah": {
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
        },
        "kanan-tengah": {
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
        },
        "bawah-tengah": {
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
        },
        "atas-tengah": {
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
        },
      };

      Object.assign(widget.style, {
        top: "",
        bottom: "",
        left: "",
        right: "",
        transform: "",
        ...positions[value],
      });

      menu.classList.remove("open");
      widget.classList.remove("menu-open");
    });

    // Reading Guide & Mask Follow Cursor
    document.addEventListener("mousemove", (e) => {
      if (document.body.classList.contains("reading-mask")) {
        document.body.style.setProperty(
          "--reading-mask-top",
          `${e.clientY - 52}px`
        );
      }

      if (document.body.classList.contains("reading-guide")) {
        const offsetY = 10;
        document.body.style.setProperty(
          "--reading-guide-top",
          `${e.clientY - offsetY}px`
        );
        document.body.style.setProperty(
          "--reading-guide-left",
          `${e.clientX}px`
        );
      }
    });

    const toggleContainer = this.querySelector(
      "#accessibility-toggle"
    ) as HTMLElement;
    if (!toggleContainer) return;

    let isDragging = false;
    let wasDragged = false;
    let startX = 0;
    let startY = 0;
    let offsetX = 0;
    let offsetY = 0;
    const threshold = 3; // Ambang sensitivitas minimal

    toggleContainer.addEventListener("mousedown", (e: MouseEvent) => {
      isDragging = true;
      wasDragged = false;

      const rect = toggleContainer.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;

      startX = e.clientX;
      startY = e.clientY;

      toggleContainer.style.transition = "none";

      e.preventDefault(); // Cegah seleksi teks
    });

    document.addEventListener("mousemove", (e: MouseEvent) => {
      if (!isDragging) return;

      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      if (Math.abs(dx) > threshold || Math.abs(dy) > threshold) {
        wasDragged = true;

        const left = e.clientX - offsetX;
        const top = e.clientY - offsetY;

        toggleContainer.style.left = `${left}px`;
        toggleContainer.style.top = `${top}px`;
        toggleContainer.style.right = "auto";
        toggleContainer.style.bottom = "auto";
        toggleContainer.style.transform = "none";
      }
    });

    document.addEventListener("mouseup", () => {
      if (!isDragging) return;

      isDragging = false;
      toggleContainer.style.transition = "";

      if (wasDragged) {
        // Cegah klik setelah drag langsung membuka toggle
        const preventClick = (e: MouseEvent) => {
          e.stopPropagation();
          e.preventDefault();
          toggleContainer.removeEventListener("click", preventClick, true);
        };
        toggleContainer.addEventListener("click", preventClick, true);
      }
    });
  }

  toggleMenu(): void {
    const menu = this.querySelector("#accessibility-menu");
    const toggle = this.querySelector(".accessibility-toggle");
    const isOpen = menu?.classList.toggle("open");
    toggle?.classList.toggle("menu-open", isOpen ?? false);
  }

  adjustFontSize(change: number): void {
    this.fontSize = Math.min(200, Math.max(50, this.fontSize + change));

    const contentWrapper = document.querySelector(".content-wrapper");
    if (!contentWrapper) return;

    // Hapus semua class yang diawali font-scale-
    contentWrapper.classList.remove(
      ...Array.from(contentWrapper.classList).filter((cls) =>
        cls.startsWith("font-scale-")
      )
    );

    // Tambahkan class baru sesuai skala
    contentWrapper.classList.add(`font-scale-${this.fontSize}`);

    // Perbarui tampilan angka persentase
    const display = this.querySelector("#fontSizeDisplay");
    if (display) display.textContent = `${this.fontSize}%`;
  }

  toggleImages(): void {
    this.imagesHidden = !this.imagesHidden;

    const selectors = [
      ".image-wrapper",
      ".gambar",
      ".image-box",
      "figure",
      "img",
      ".carousel-slide",
      ".carousel-container",
    ];

    selectors.forEach((selector) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        el.style.display = this.imagesHidden ? "none" : "";
      });
    });
  }

  disableAnimations(): void {
    document.body.classList.toggle("no-animations");
  }

  resetAccessibility(): void {
    const resetClasses = [
      "highlight-title",
      "highlight-links",
      "dyslexia-font",
      "letter-spacing",
      "line-height",
      "font-weight",
      "dark-contrast",
      "light-contrast",
      "high-contrast",
      "high-saturation",
      "low-saturation",
      "monochrome",
      "reading-guide",
      "reading-mask",
      "big-cursor",
      "no-animations", // tambahkan ini
    ];
    document.body.classList.remove(...resetClasses);

    // Hapus font-scale-* dari .content-wrapper
    const contentWrapper = document.querySelector(".content-wrapper");
    if (contentWrapper) {
      contentWrapper.classList.remove(
        ...Array.from(contentWrapper.classList).filter((cls) =>
          cls.startsWith("font-scale-")
        )
      );
      contentWrapper.classList.add("font-scale-100");
    }

    this.fontSize = 100;
    this.imagesHidden = false;

    // Tampilkan kembali semua gambar
    document
      .querySelectorAll(
        ".image-wrapper, .gambar, .image-box, figure .carousel-container, img, .carousel-slide"
      )
      .forEach((el) => {
        (el as HTMLElement).style.display = "";
      });

    // Reset tampilan font size
    const fontDisplay = this.querySelector("#fontSizeDisplay");
    if (fontDisplay) fontDisplay.textContent = "100%";

    // Hilangkan status aktif dari semua tombol toggle
    this.querySelectorAll(".toggle-class").forEach((btn) => {
      btn.classList.remove("active");
    });
  }

  loadGoogleTranslate(): void {
    if (!(window as any).googleTranslateElementInit) {
      (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: "id",
            includedLanguages:
              "en,ja,ko,nl,zh-CN,zh-TW,ru,ar,de,es,it,ms,th,vi,hi,fr,am,be,bg,ca,fy",
            layout: (window as any).google.translate.TranslateElement
              .InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element"
        );
      };

      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    }
  }
}

customElements.define("accessibility-widget", AccessibilityWidget);
