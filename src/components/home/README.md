# Home Section Components

## Overview
Presentation-layer modules rendering the editorial, scroll-driven sections of the Rotaract KAHE landing page. Implements fluid responsive typography, dark editorial aesthetics (Navy `#050B1A` and Gold `#D4A62A`), and GSAP/ScrollTrigger viewport reveal effects.

## Interface
- `AboutPreview`: Component rendering club narrative, mission, and three core pillars (`AboutPreview.tsx:16`).
- `ContactCTA`: Call-to-action banner linking to membership application and contact touchpoints (`ContactCTA.tsx:5`).
- `EventsPreview`: Slices and showcases the top 3 upcoming or recent club events from data store (`EventsPreview.tsx:39`).
- `Hero`: Primary above-the-fold entrance banner with staggered typography animation (`Hero.tsx:9`).
- `HistoryPreview`: Presidential timeline and charter lineage overview (`HistoryPreview.tsx:10`).
- `PhotoMarquee`: Continuous animated marquee carousel of club photo archives (`PhotoMarquee.tsx:64`).
- `ProjectsPreview`: Highlights signature district and community impact projects (`ProjectsPreview.tsx:10`).
- `StatsStrip`: Grid showcasing club milestones, active members, and volunteer metrics (`StatsStrip.tsx:8`).
- `TeamPreview`: Leadership grid previewing executive board members (`TeamPreview.tsx:10`).

## Invariants
- `[Hero.tsx / AboutPreview.tsx / StatsStrip.tsx / ProjectsPreview.tsx / HistoryPreview.tsx / TeamPreview.tsx]`: Must check `window.matchMedia("(prefers-reduced-motion: reduce)").matches` prior to instantiating GSAP ScrollTrigger animations; must revert GSAP contexts on unmount.
- `[EventsPreview.tsx]`: Limits preview items strictly to `EVENTS.slice(0, 3)`.
- `[PhotoMarquee.tsx]`: Duplicates `CLUB_PHOTOS` array once to maintain an unbroken infinite horizontal loop.
- `[ProjectsPreview.tsx]`: Designates `PROJECTS[0]` as the primary hero feature and `PROJECTS.slice(1, 3)` as secondary list items.

## Side Effects
- `[AboutPreview.tsx, Hero.tsx, HistoryPreview.tsx, ProjectsPreview.tsx, StatsStrip.tsx, TeamPreview.tsx]`: Registers `ScrollTrigger` plugin with global `gsap` instance during client runtime mount.
- `[ContactCTA.tsx]`: Dispatches `mailto:${CLUB.socials.email}` external client action upon interaction.

## Verification
- Run: `npm run build`

