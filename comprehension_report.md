# Goldfish Review Report: Stage 6 Comprehension Test

**Target:** `docs/designs/site-wide-eslint-and-brand-alignment.md` (lines 1..229)  
**Reviewer:** `egm-comprehension`  

---

### What this proposes
This specification proposes resolving site-wide ESLint infractions and bringing visual styling into compliance with District 3206 Navy and Gold brand guidelines across landing and sub-page components. It eliminates an unused import in `EventsPreview.tsx`, escapes an apostrophe entity in `src/app/events/page.tsx`, strips decorative `//` comment prefixes from JSX text nodes across five components, and converts navigation anchor tags in `Navbar.tsx` into Next.js `<Link>` components with smooth-scrolling click interception. In addition, it re-skins event status badges and cards across `EventsPreview.tsx` and `src/app/events/page.tsx` from hardcoded Tailwind indigo/violet classes to semantic Navy and Gold CSS variables with an active cranberry indicator dot.

### How the existing system works, per this document
According to this document, the codebase currently triggers 10 ESLint errors and warnings across CI/build checks due to an unused `Button` import, an unescaped entity (`KAHE's`), raw `//` text rendered in JSX headings, and plain `<a>` tags in `Navbar.tsx` that bypass Next.js client routing and risk full-page reloads. Visually, event preview cards and dedicated event listings diverge from brand rules by using Tailwind indigo and violet utility classes and glassmorphism styling. Finally, navbar anchor links jump or rely on default browser behavior rather than harmonizing Next.js client routing with Lenis smooth-scrolling handlers.

---

### Findings

#### 1. Unstated Prerequisite & Runtime Failure: `(window as any).lenis` is Never Populated on `window`
* **Severity**: Major
* **Affected Scope**: Technical Plan: Architectural Flow (lines 74, 84), Section 3 "Navigation Anchor Normalization" (lines 120–123), and Phase 2 Step 8 (lines 204–205).
* **Discrepancy Description & Rationale**: The architecture diagram and code snippet specify checking `(window as any).lenis` and invoking `(window as any).lenis.scrollTo(targetEl, { offset: -64, duration: 1.1 })`. However, in the existing codebase (`src/components/layout/SmoothScroll.tsx`), the `Lenis` instance is instantiated as an internal local variable inside `useEffect` and is never exposed or attached to the global `window` object. As written, `(window as any).lenis` will evaluate to `undefined` at runtime. The plan should retain the existing `handleNavClick` method in `Navbar.tsx` rather than introducing unverified `window` globals.

#### 2. Functional Regression: `handleAnchorClick` Omits Mobile Drawer and Active State Handlers
* **Severity**: Major
* **Affected Scope**: Section 3 (lines 115–126) and Phase 2 Step 8 (lines 200–205).
* **Discrepancy Description & Rationale**: The proposed replacement click handler omits `setMenuOpen(false)` and `setActiveSection(...)` present in the existing `handleNavClick`. Clicking a link inside the mobile drawer would leave the drawer covering the screen.

#### 3. Ambiguous CTA Navigation Target: `/contact` Page vs `/#contact` Anchor
* **Severity**: Major
* **Affected Scope**: Section 3 (line 114) and Phase 2 Step 8 (lines 202–203).
* **Discrepancy Description & Rationale**: The plan specifies `<Link href="/contact">` for desktop CTA while the existing code points to `/#contact`. The navigation target should be consistent.

#### 4. Undefined Architecture for Status Badge Indicator Injection
* **Severity**: Major
* **Affected Scope**: Section 1 "Status Badge & Card Re-skinning" (lines 93–96) and Phase 3 Steps 9 & 10 (lines 213, 220).
* **Discrepancy Description & Rationale**: The JSX renders `<Badge variant="outline" className={status.className}>{status.label}</Badge>`. The document should specify whether the cranberry indicator dot is passed inside `<Badge>` or handled via a dedicated component/helper.

#### 5. Wrong Line Reference and Missed Indigo Text Class in `EventsPreview.tsx`
* **Severity**: Major
* **Affected Scope**: Section 1 (line 101) and Phase 3 Step 9 (lines 214–215).
* **Discrepancy Description & Rationale**: The event card container in `EventsPreview.tsx` is at line 77 (not line 58), and line 89 contains `group-hover:text-indigo-200` which must also be updated to brand tokens (`group-hover:text-[var(--gold)]`).

#### 6. Accounting Alignment
* **Severity**: Nit
* **Affected Scope**: Overview (line 11), The Problem (lines 16–17), Goals (line 23).
* **Discrepancy Description & Rationale**: Aligns the error accounting to explicitly list all 5 files containing JSX textnode comments.
