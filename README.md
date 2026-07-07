# Nature Adventure Landing Page

A cinematic, fantasy-inspired nature adventure landing page built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx       – root layout, fonts (Playfair Display + Inter), SEO metadata
  page.tsx         – composes all sections
  globals.css      – Tailwind base + glassmorphism/accessibility utilities
components/
  Navbar.tsx       – fixed transparent nav, slide-down entrance, mobile menu
  Hero.tsx         – original layered SVG scene (mountains, lake, birds, grass,
                     traveler, fog, sunset) with scroll parallax + letter-reveal title
  Destinations.tsx – 3 destination cards, lift + glow hover
  Experiences.tsx  – 4 icon cards
  Gallery.tsx      – masonry-style image grid
  Testimonials.tsx – glassmorphism quote cards
  Newsletter.tsx   – client-side signup form (wire up to a real API before shipping)
  Footer.tsx       – 4-column footer + copyright
lib/
  data.ts          – all section content, kept separate from markup
```

## Design tokens

| Token       | Value     |
|-------------|-----------|
| Primary     | `#2D1B69` |
| Secondary   | `#6A4C93` |
| Accent      | `#F8A94A` |
| Highlight   | `#FFD27D` |
| Background  | `#0F172A` |
| Text        | `#FFFFFF` |
| Text (muted)| `#CBD5E1` |
| Radius      | `16px`    |
| Headings    | Playfair Display |
| Body        | Inter             |

## Notes

- The hero illustration is 100% original SVG/CSS artwork (no external images), animated
  with a mix of Framer Motion (scroll parallax, letter reveal) and Tailwind keyframe
  utilities (floating clouds, flying birds, swaying grass, idle traveler).
- All interactive elements have visible keyboard focus states and respect
  `prefers-reduced-motion`.
- Swap the gradient placeholders in `Destinations`, `Gallery`, and card backgrounds for
  `next/image` real photography when available — the markup already includes
  descriptive `alt`/`aria-label` text for each.
- Newsletter form currently simulates a submission client-side; connect it to your
  email provider's API route before going to production.
