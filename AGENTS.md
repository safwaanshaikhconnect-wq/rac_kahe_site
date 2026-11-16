<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project: Rotaract Club of Karpagam Academy of Higher Education
Website for a student service club (Coimbatore, Tamil Nadu). District 3206.

## Look and feel
- Rich navy and gold theme, cinematic, editorial. Reference: studionamma.com (dark, scroll-driven), produx.design (oversized typography).
- Color Palette:
  - Background: rich deep navy `#050B1A`
  - Surfaces: surface `#0B1730`, surface-2 `#13264D`
  - Accents: gold `#D4A62A`, gold-light `#F1D98B` (accents only: key words, numbers, dividers, buttons, active nav — no shiny/metallic gradients)
  - Typography: ivory `#F5F1E6` (primary text), muted `#A9B4C8` (WCAG AA contrast maintained)
  - Cranberry: `#D41B5C` strictly for tiny accents (hover dots, tiny markers, max 5% of page)
- Photo overlays: navy gradient (stronger at bottom/left for text legibility) so faces stay bright.
- Max 2 fonts: one display (bold, tight tracking), one clean sans for body.
- Oversized headlines (clamp-based fluid type). Generous spacing. 12-column grid.

## Banned (anti-slop)
- No purple/blue gradient blobs, glassmorphism cards, emoji icons, or stock illustrations.
- No "Welcome to our website", "Unleash", "Empower", "Elevate", "Seamless" copy.
- No placeholder lorem ipsum, and NEVER invent statistics, names, or dates. Use clearly marked [TODO] placeholders.
- No 3-identical-cards-in-a-row layouts everywhere. Vary section layouts.

## Motion
- GSAP + ScrollTrigger and Lenis smooth scroll. Text reveals, count-up numbers, image parallax.
- Respect prefers-reduced-motion. No WebGL/3D.

## Tech
- [Next.js or Astro] + Tailwind. Semantic HTML, responsive from 360px, images WebP and lazy-loaded.
- Lighthouse Performance/Accessibility > 90.

## Workflow
- Ask clarifying questions before coding. Build one section at a time and show a screenshot for review.