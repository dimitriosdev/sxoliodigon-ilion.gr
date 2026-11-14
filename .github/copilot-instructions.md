# Project Rules: Σχολή Οδηγών Ίλιον

- **Stack:** Next.js 16 (App Router), TypeScript (`noUncheckedIndexedAccess: true`), Tailwind CSS v4.
- **Static Architecture:** Zero databasesor heavy animation packages (no GSAP, no Framer Motion). Everything builds statically for Vercel.
- **Design System:** Dark editorial aesthetic (`#0B0B0C` background, `#131316` cards, `border-white/10` hairlines, `#F59E0B` amber accents, rounded pill badges, asymmetric sticky grids).
- **SEO & LLM Optimization:**
  - Use `Manrope` from `next/font/google` (`subsets: ['greek', 'latin']`).
  - Use semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, and native `<details>`/`<summary>` for FAQs).
  - Never hide text with `display: none` before scroll; use GPU-composited `opacity` + `translateY` transitions only.
  - All user-facing copy must be natural, direct Greek tailored to Ilion, Athens (`https://www.facebook.com/sxoli.odigon.ilion/`).
