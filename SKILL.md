---
name: hearth-design
description: Use this skill to generate well-branded interfaces and assets for Hearth (the HT Design System, powering Healthy Together / Atlas public-benefits apps), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Fast orientation
- `readme.md` — full design guide: rulebook, content fundamentals, visual foundations, iconography, component + template index.
- `styles.css` — the single global entry point (link this one file); it `@import`s everything in `tokens/`.
- `tokens/` — `fonts.css` (Geist), `primitives.css`, `palette.css` (Healthy Together hues + a11y tokens), `roles.css` (the public API — use `--ht-action`, `--ht-data`, never hue names), `base.css`.
- `components/` — 48 React component families across core / forms / feedback / surfaces / data / navigation / resident-mobile. Each has a `.d.ts` contract and a `.prompt.md` usage note. Load the compiled `_ds_bundle.js` and read components off `window.Hearth_5938e8`.
- `templates/` — full-screen starting points (Caseworker dashboard, Caseworker case detail, Resident mobile home), composed from the components.
- `foundations/` — specimen cards for colors, type, spacing.

## Hard rules (see readme.md for the full rulebook)
- Tokens only, never raw hex. Reference role names, not hue names.
- Geist everywhere; weights 400/500 only (600 retired 2026-08-01, never 700). Size and color carry hierarchy, not weight.
- White cards, 1px `--ht-hairline` on the `--ht-bg` tinted page. One primary CTA and one dark ink band per screen.
- Purple = interactive/selected; green = status only; warning family is sunflower.
- Color never signals function alone. WCAG AA + 48px touch targets are non-negotiable.
- Icons: Tabler outline webfont (`<i class="ti ti-…">`); load the CDN webfont on the host page. No emoji in UI.

## Building a screen
Compose from `components/`, never by copying a template's inner markup wholesale. The `templates/` screens show the intended composition; a new screen picks the components it needs and arranges them under these rules.
