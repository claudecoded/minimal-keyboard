# Minimal Keyboard ⌨️

A visually stunning, high-fidelity interactive mechanical keyboard simulator built using modern, vanilla web technologies. Inspired by minimal sleek setups, this project maps physical keyboard inputs and virtual clicks into fully responsive neon glow animations accompanied by real-time synthesized mechanical switch sounds.

---

## 🚀 Live Demo
Deploy this project instantly to GitHub Pages by following the setup steps below.

---

## 🌟 Key Features
- **Instantaneous Input Response:** Maps directly to your physical keyboard layout using precise standard `KeyboardEvent.code` triggers.
- **Dynamic Neon Bloom:** Features custom CSS transitions that deliver an instant neon strike on press and a realistic, gradual "light-cooling" fade-out on release.
- **Zero-Latency Audio Synthesis:** Utilizes the cutting-edge native browser **Web Audio API** to programmatically generate realistic physical switch click soundscapes on the fly, eliminating the need for heavy external `.mp3` or `.wav` assets.
- **Fully Responsive Interactions:** Supports seamless dual-input mechanics (simultaneous mouse click dragging and standard physical typing).
- **Clean Semantic Codebase:** Written strictly in English following modern clean-code conventions, making it perfect for your open-source portfolio.

---

## 🛠️ Tech Stack & Architecture
This project is engineered strictly with native web standards to guarantee zero external dependencies and lightweight performance:

- **HTML5:** Structuring the core responsive layout container and matrix rows.
- **CSS3:** Handling custom layout design tokens (CSS variables), capsule key metrics, flex containers, and dual-layer neon `box-shadow` bloom.
- **Vanilla JavaScript:** Instantiating the browser `AudioContext` runtime, mapping low-latency listener structures, and dynamically injecting conditional active CSS visual cycles.

---

## 📂 File Architecture
```bash
├── index.html   # Main layout structure with precise data-code mappings
├── style.css    # Layout tokens, custom capsule widths, and fade-out animations
└── script.js    # Event handlers and Web Audio API synthesizer engine
```

---

## 🛠️ Installation & Local Setup

Getting a copy up and running locally takes less than a minute:

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   ```

2. **Navigate into the project folder:**
   ```bash
   cd minimal-neon-keyboard
   ```

3. **Launch the application:**
   - Simply double-click `index.html` to run it directly inside any modern web browser.
   - Alternatively, if you use VS Code, right-click `index.html` and select **"Open with Live Server"** to establish a local hot-reloading environment.

---

## 🔧 Deep Dive: Audio Synthesis Engine
Instead of utilizing audio elements that suffer from asset-loading latency, the engine relies on real-time node generation:
- **Oscillator Type:** Custom `triangle` wave frequencies.
- **Pitch Profile:** Starts at `120Hz` and drops exponentially to `10Hz` over `0.05s` to replicate physical structural switch bottoming.
- **Volume Envelope:** Fast decay curve designed to isolate crispy mechanical acoustic returns.

---

## 📝 License

Apache 2.0
