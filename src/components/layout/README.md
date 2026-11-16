# Global Layout Components

## Overview
Root structure and orchestration components providing application shell layout, persistent navigation, brand footer, and Lenis smooth scrolling synchronized with GSAP.

## Interface
- `Footer`: Institutional footer containing Rotary District 3206 affiliation, sponsor club details, navigation links, and social links (`Footer.tsx:16`).
- `Navbar`: Fixed/scrolled header featuring mobile sheet toggle, desktop anchor links, and active section intersection spy (`Navbar.tsx:18`).
- `SmoothScroll`: Wrapper component integrating Lenis inertia scrolling with the GSAP ticker engine (`SmoothScroll.tsx:8`).

## Invariants
- `[SmoothScroll.tsx]`: Must bypass Lenis instantiation if `window.matchMedia("(prefers-reduced-motion: reduce)").matches` evaluates to true.
- `[SmoothScroll.tsx]`: Must remove `updateTicker` from `gsap.ticker` and invoke `lenis.destroy()` on component unmount.
- `[Navbar.tsx]`: Must only activate home page section intersection observers when `pathname === "/"`.

## Side Effects
- `[SmoothScroll.tsx]`: Hooks into `gsap.ticker`, sets `gsap.ticker.lagSmoothing(0)`, and intercepts browser wheel events via Lenis.
- `[Navbar.tsx]`: Adds a passive scroll event listener to `window` and instantiates multiple DOM `IntersectionObserver` instances.

## Verification
- Run: `npm run build`

