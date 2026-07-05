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

## Content

Replace placeholder project details in `src/data/projects.ts`, and swap the
monogram placeholder in `Hero.tsx` for a real portrait photo when ready
(look for the `FS` monogram inside the glass card).

## Contact form (Web3Forms)

The contact form sends submissions straight to your email via
[Web3Forms](https://web3forms.com) — no backend or account required beyond
generating a key.

1. Go to https://web3forms.com, enter your email, click "Create Access Key."
2. Copy the key it emails you.
3. Open `src/components/sections/Contact.tsx` and paste it into:
   ```ts
   const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE'
   ```
4. Rebuild/redeploy. Submissions will land in your inbox.

## Notes

- Respects `prefers-reduced-motion`.
- Cursor and parallax effects are disabled automatically on touch devices.
- All copy is frontend-focused per the brief (no backend/accounting mentions).
