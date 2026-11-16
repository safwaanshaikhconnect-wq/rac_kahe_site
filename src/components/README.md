# Components Subsystem Blueprint

## System Overview
The `src/components` tree contains all UI presentation components, section orchestrators, and layout infrastructure for the Rotaract KAHE web portal. Built on Next.js App Router, Tailwind CSS v4, Base UI, GSAP ScrollTrigger, and Lenis smooth scrolling.

## Subdirectories & System Boundaries
- **home**: [./home/README.md](./home/README.md) - Section-level presentation blocks for the editorial landing page (Hero, About, Stats, Projects, History, Team, Moments, Contact).
- **layout**: [./layout/README.md](./layout/README.md) - Global application shell components, site navigation bar, footer, and Lenis kinetic scroll integration.
- **ui**: [./ui/README.md](./ui/README.md) - Atomic design system primitives based on `@base-ui/react` and `class-variance-authority` (Button, Card, Badge, NavigationMenu, Separator).

## Global Invariants
- **Accessibility & Motion Preference**: Any component implementing GSAP animations or Lenis scrolling must query `window.matchMedia("(prefers-reduced-motion: reduce)").matches` and provide an immediate, accessible fallback.
- **Responsive Geometry**: Layouts must preserve structural integrity from 360px mobile viewports up to large desktop screens.
- **Design System Fidelity**: Components must strictly use theme CSS variables (`--background`, `--surface`, `--gold`, `--border`) adhering to the Navy & Gold aesthetic defined in `AGENTS.md`.

## Global Side Effects
- Mutates global scroll behavior via Lenis intercepting native browser wheel events.
- Registers global animation tickers and listeners on `gsap.ticker` and `window`.

## System Verification
- Run: `npm run build`

