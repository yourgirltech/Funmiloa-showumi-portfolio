# Funmilola Showumi — Portfolio

A premium, editorial-style frontend engineering portfolio built with React 19, TypeScript, Vite, Tailwind CSS v4, Framer Motion, GSAP-ready hooks, and Lenis smooth scroll.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (typically http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/
    layout/     # Navbar, Footer, Cursor, Loader, SmoothScroll
    sections/   # Hero, About, Skills, Projects, Approach, Services, Contact
    ui/         # MagneticButton, RevealText, SectionHeading, DeviceMockup
  data/         # Content: skills, projects, services, approach steps
  types/        # Shared TypeScript interfaces
  index.css     # Design tokens (colors, type, animation) via Tailwind v4 @theme
```

## Design tokens

Colors, fonts, and animation timings live in `src/index.css` under `@theme`.
Palette: warm white, ivory, champagne, stone, sage, slate, charcoal —
sage is used throughout as the signature accent (buttons, tags, glows, dividers).


## Contact form (Web3Forms)

The contact form sends submissions straight to my email via
(https://web3forms.com) 
## Notes

- Respects `prefers-reduced-motion`.
- Cursor and parallax effects are disabled automatically on touch devices.
