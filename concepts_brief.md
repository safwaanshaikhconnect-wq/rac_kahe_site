# Site-Wide ESLint Resolution and Brand Styling Alignment

* **Author:** safwaanshaikhconnect-wq
* **Date:** 2026-11-08

## Overview

This cleanup eliminates all 10 site-wide ESLint build errors and aligns components with the project's Navy and Gold editorial design system. It replaces unapproved violet/indigo status badges in `EventsPreview.tsx` and `app/events/page.tsx` with brand tokens (`var(--surface)`, `var(--surface-2)`, `var(--gold)`), removes developer-comment style `//` prefixes from section headers across 5 components, and normalizes internal navigation links in `Navbar.tsx` to Next.js `<Link>` elements.

## Analysis

The 7-lens Goldfish review established the following architectural conclusions:

* **Brand Token Fidelity:** Status badges currently use Tailwind zinc, indigo, and violet classes along with glassmorphism card styles that contradict the design rules in `AGENTS.md`. Replacing these with dark navy surfaces, gold typography, and a micro-cranberry indicator (≤5% page accent) honors the brand palette while visually highlighting active events.
* **Header Typography Refinement:** Removing raw `//` prefixes from headers resolves React JSX text node syntax errors and eliminates audio confusion for screen readers, while restoring an editorial appearance.
* **Navigation Architecture:** Converting raw `<a>` tags in `Navbar.tsx` to Next.js `<Link>` eliminates Next.js router warnings and ensures client-side transitions without triggering full HTML document reloads, preserving Lenis smooth scroll and GSAP scroll positions.
* **Component Parity:** The review revealed that `src/app/events/page.tsx` duplicates the exact same status badge classes found in `EventsPreview.tsx`. Both must be updated simultaneously to maintain design consistency.

## Goals vs. Non-Goals

* **In-Scope Goals:**
  * Resolve all 10 ESLint warnings/errors so `npm run lint` exits cleanly with code 0.
  * Re-skin event status badges in both `EventsPreview.tsx` and `app/events/page.tsx` to Navy and Gold design tokens.
  * Remove raw `//` prefixes from headings in `ContactCTA.tsx`, `StatsStrip.tsx`, `Footer.tsx`, `PhotoMarquee.tsx`, and `team/page.tsx`.
  * Replace internal `<a>` navigation tags in `Navbar.tsx` with Next.js `<Link>`.
  * Remove unused `Button` import in `EventsPreview.tsx`.
  * Escape unescaped single quotes in `app/events/page.tsx`.

* **Out-of-Scope Non-Goals:**
  * Rewriting data structures or altering event filtering logic in `src/lib/data.ts`.
  * Modifying GSAP scroll trigger setups or altering Lenis configuration.
  * Redesigning page layouts or adding new visual components.

## Alternatives Weighed

* **Preserving `//` with curly brace escaping (`{"// GET INVOLVED"}`):** Rejected. The Goldfish review noted that double-slash prefixes read as developer-slop and create awkward text-to-speech pauses on screen readers. Stripping the prefix to clean editorial typography better matches the brand aesthetic.
* **Restricting cleanup to `src/components/home`:** Rejected. Leaving `app/events/page.tsx` with indigo badges and unescaped quotes would leave the production build broken and visual inconsistencies on sub-pages.
* **Single global Badge variant override:** Rejected. Centralizing badge styling in `data.ts` or local status helpers ensures `EventsPreview.tsx` and `/events` remain synchronized without modifying shared UI primitives in `src/components/ui/badge.tsx`.

## Key Decisions & Staging for Next Steps

1. **Status Badge Matrix:**
   * **Upcoming:** `bg-[var(--surface-2)] text-[var(--gold)] border-[var(--border-gold)]` with a 1.5px cranberry indicator dot.
   * **Completed:** `bg-[var(--surface)] text-[var(--muted-foreground)] border-[var(--border)]`.
   * **Planning:** `bg-[var(--surface)]/60 text-[var(--foreground)]/80 border-[var(--border)]`.
2. **Next.js Link Integration:** Maintain `onClick` handlers on desktop and mobile navbar items to preserve smooth anchor scrolling on the home route while using `<Link>` for proper client routing.
3. **Execution Ready:** Move to `/egm-draft` to generate the formal file-by-file refactoring specification.

