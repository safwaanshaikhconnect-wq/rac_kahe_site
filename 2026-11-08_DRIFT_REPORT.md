# EGM Drift Report (2026-11-08)

Subsystem: `src/components`

## src/components/home/README.md
- **Color Token Architectural Divergence** (`EventsPreview.tsx`):
  - `STATUS_MAP` (lines 10–29) and section category header (line 48) utilize hardcoded Tailwind violet/indigo palettes (`bg-indigo-900/60`, `text-indigo-300`, `bg-violet-900/60`, `text-violet-300`, `text-indigo-400`).
  - This diverges from the project's global design contract and `AGENTS.md` mandate requiring the Navy & Gold color tokens (`var(--surface)`, `var(--surface-2)`, `var(--gold)`, and neutral muted borders).
## src/components/layout/README.md
- No drift detected.

## src/components/ui/README.md
- No drift detected.

## src/components/README.md
- **Subsystem Theme Invariance**:
  - `src/components/home/EventsPreview.tsx` violates the global invariant requiring strict adherence to Navy `#050B1A` and Gold `#D4A62A` theme CSS variables due to legacy violet/indigo styling.

