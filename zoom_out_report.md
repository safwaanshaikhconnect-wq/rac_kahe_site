# Goldfish Review Report: Stage 5 Initial Zoom Out Review

**Target:** `docs/designs/site-wide-eslint-and-brand-alignment.md` (lines 1..229)  
**Standards Applied:** `zoom-out-standard.md` (Code Minimization, YAGNI, Architectural Necessity, Contradiction Resolution)  
**Synthesizer:** EGM Synthesizer Persona  

---

## Reviewer Status

| Reviewer | Status |
| :--- | :--- |
| `egm-zoom-out` | completed |
| `egm-inventive-catalyst` | completed |

---

## Executive Summary & Severity Breakdown

* 🔴 **Blocker (1)**: Non-existent `(window as any).lenis` call and redundant anchor interception in `Navbar.tsx` creating dead code and breaking mobile drawer teardown.
* 🟡 **Major (2)**: 
  1. Dual-site `STATUS_MAP` maintenance violating DRY and recreating the exact vector for future visual drift.
  2. Unconstrained `animate-pulse` and missing `aria-hidden` on cranberry status indicator violating accessibility and motion guidelines.
* 🟢 **Nit (2)**: 
  1. Accidental dropping of `mb-2` margin in kicker replacement specification.
  2. Documenting subtractive trimming vs CSS pseudo-elements for the `//` prefix removal.

---

## Prioritized Findings

### 1. Phantom `window.lenis` Invocation & Redundant Anchor Interception - Severity: 🔴 Blocker
* **Scope:** Lines 71–75, 112–126 (Section 3), 198–206 (Phase 2, Item 8)
* **Finding:** The spec introduces a custom `handleAnchorClick` invoking `(window as any).lenis.scrollTo(...)`. In `src/components/layout/SmoothScroll.tsx`, Lenis is instantiated strictly inside a local React `useEffect` and is **never** assigned to global `window`. Calling `(window as any).lenis` evaluates to `undefined`, causing the handler to silently fail. Furthermore, `Navbar.tsx` already contains a functional `handleNavClick` (lines 64–80) that calculates scroll offset, updates `activeSection`, and closes the mobile drawer. 
* **Remediation:** Remove `handleAnchorClick` and the speculative `window.lenis` binding. Simply swap `<a>` to Next.js `<Link>` and retain the existing `handleNavClick`.

### 2. Dual-Site Badge Map Duplication & Drift Vulnerability - Severity: 🟡 Major
* **Scope:** Lines 88–103 (Section 1), 147–152 (Alternative C), 209–222 (Phase 3, Items 9 & 10)
* **Finding:** The plan duplicates `STATUS_MAP` across both `EventsPreview.tsx` and `app/events/page.tsx`, repeating the exact duplication pattern that originally caused the visual drift.
* **Remediation:** Apply TRIZ Principle 24 (Intermediary). Export a shared `EVENT_STATUS_STYLES` dictionary from `src/lib/data.ts` (or a dedicated `EventBadge` component) so both views share a single source of truth.

### 3. Missing `prefers-reduced-motion` & Screen Reader Semantics on Cranberry Dot - Severity: 🟡 Major
* **Scope:** Lines 93–96 (Section 1), 213 (Phase 3, Item 9)
* **Finding:** The pulsing cranberry indicator runs an infinite CSS pulse without honoring user motion preferences, violating `AGENTS.md` and WCAG 2.2.2. It also lacks `aria-hidden="true"`.
* **Remediation:** Add `aria-hidden="true"` and `motion-reduce:animate-none`:
  ```tsx
  <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-[var(--cranberry)] mr-1.5 inline-block animate-pulse motion-reduce:animate-none" />
  ```

### 4. Layout Spacing Regression on Section Kicker Replacement - Severity: 🟢 Nit
* **Scope:** Lines 102, 215 (Phase 3, Item 9)
* **Finding:** Line 102 specifies replacing `text-indigo-400` with gold styling but accidentally omits `mb-2`, collapsing the margin above the section heading.
* **Remediation:** Retain `mb-2` explicitly in the class string.

### 5. Deliberate Subtractive Trimming - Severity: 🟢 Nit
* **Scope:** Lines 104–111 (Section 2)
* **Finding:** Affirm that deleting `// ` prefixes is a deliberate institutional visual upgrade rather than merely an ESLint workaround.

