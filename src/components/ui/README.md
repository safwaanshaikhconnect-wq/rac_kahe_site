# UI Primitives

## Overview
Reusable, accessible atomic UI primitives constructed with `@base-ui/react`, Tailwind CSS v4, and `class-variance-authority` (CVA) styling variants.

## Interface
- `Badge`, `badgeVariants`: Pill badge component for category tags, event statuses, and avenue markers (`badge.tsx:51`).
- `Button`, `buttonVariants`: Primary interactive action button wrapping `@base-ui/react/button` with full size and variant matrix (`button.tsx:57`).
- `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardAction`, `CardContent`, `CardFooter`: Card container layout primitives with adaptive data-slot padding and image clipping (`card.tsx:94`).
- `NavigationMenu`, `NavigationMenuList`, `NavigationMenuItem`, `NavigationMenuTrigger`, `NavigationMenuContent`, `NavigationMenuLink`, `NavigationMenuViewport`, `NavigationMenuIndicator`: WAI-ARIA compliant accessible navigation hierarchy (`navigation-menu.tsx:157`).
- `Separator`: Visual and semantic horizontal/vertical separator primitive (`separator.tsx:24`).

## Invariants
- `[button.tsx]`: Applies `data-slot="button"` on the root element to support compound selector styling.
- `[card.tsx]`: Enforces internal card spacing variables (`--card-spacing`) and auto-radiuses first/last image children via child selectors.
- `[badge.tsx / button.tsx]`: Strict variant styling managed via `class-variance-authority`.

## Side Effects
- `None`

## Verification
- Run: `npm run build`

