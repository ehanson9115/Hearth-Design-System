# Hearth — the HT Design System

**CIVIC provides the structure; Hearth provides the warmth.**

Hearth exists because salespeople, product leads, and PMs build prototypes,
and those prototypes are the brand. Anything built with Hearth should look
like it came from the same design team — warm, credible, government-friendly —
without a designer in the loop. When in doubt, open
`hearth/component-kit.html` in a browser: it renders every component correctly.

Applied themes so far: **Healthy Together** (default) · **Atlas**.
Hearth serves BOTH audiences in every project: resident-facing surfaces
(mobile-first, comfortable, warm) and caseworker/admin surfaces (desktop,
compact, credible). Demos present both tracks, labeled.

## Files

- `hearth/tokens.css` — three-layer tokens (primitives → roles → themes). Always use tokens, never raw hex.
- `hearth/theme.css` — CIVIC remap + component rules. Load order: civic base → tokens.css → theme.css → app styles.
- `hearth/component-kit.html` — every component, rendered. The visual source of truth.
- `hearth/mock-caseworker-detail.html` — admin case detail (compact mode).
- `hearth/mock-dashboard-mobile.html` — admin dashboard (spacious mode) + resident mobile home.

## The three layers

1. **Primitives** — grey ladder, type scale, radii. Never referenced by components, never changed by themes.
2. **Roles** — the public API: `--ht-action` (interactive), `--ht-data` (progress/charts/numerals), surfaces (`--ht-bg`, `--ht-surface`, `--ht-head-zone`, `--ht-inset`), status families. **Components reference only this layer.**
3. **Themes** — one block per project re-pointing roles at a palette. A new project = a new theme block + logo chip. Nothing else changes.

## Theming contract

A project MAY change: palette (via its theme block), logo chip, product name.
A project MAY NOT change: accessibility floors (WCAG 2.1 AA, 48px targets), the
type scale and weight rules, spacing logic, the redundancy rule, restraint rules
(one primary CTA / one ink band per screen), voice principles, or component anatomy.

## Foundations

**Typeface:** Geist, everywhere, including inputs/buttons/SVG text. Self-host woff2 in production.
**Weights:** 400 body · 500 emphasis/buttons/labels · 600 headings. **Never 700.** CTAs never above 500.
**Tracking:** +0.01em body; -0.005 to -0.015em titles. Headlines on dark surfaces drop to 500 (optical bolding).
**Type scale (px):** 28 dashboard greeting · 22 hero · 20 page/step title · 16 section · 15 card headline/label/button · 14 body · 12.5 subtitle/hint · 10.5 caps sub-sections (inside cards only) · 11 mobile-nav labels.
**Icons:** Tabler outline set only. Never emoji in UI. Critical glyphs (checks, arrows) use plain characters or inline SVG so nothing breaks if a font CDN fails.

## Color

**Roles first:** `--ht-action` = interactive (CTAs, active nav, focus, selected); `--ht-data` = data (progress, charts, numerals, avatars). In the Healthy Together theme these resolve to violet `#4C1EA8` and royal `#4860FC`, but components must use role names so re-theming stays a one-block change.
**Redundant cues (non-negotiable):** color never signals function alone. Interactive = control shape (button, pill, bordered field) or underline; data color only in numeral/bar/chart contexts. Bare colored text with no second cue is banned.
**Purple stays purple:** inside action-tinted contexts (selected option cards) indicators use the action color — never green. Green = status meaning only (done, success, uploaded).
**Page** `#F8F7FC` (violet-tinted near-white). **Grey ladder:** g0 card · g1 header zones/inputs · g2 sidebar · g3 dividers · g4 hairlines/hover · g5 pressed.
**Ink** `#201C33`: admin top bar + the ONE live/primary panel band per screen. Ghost buttons on ink (white 12% fill, 25% border) — never action-color buttons on ink.
**Status:** vivid accents for dots/icons/checks — green `#16A34A`, sunflower `#F5B700`, red `#DC2626`. Text on tints uses darker AA steps (`#196A47` / `#7D5700` / `#B91C1C`). Warning family is SUNFLOWER: bg `#FFF3BF`, outline `#F0D25B`, solid `#FFC53D`.

## Containers (the look)

White cards, 1px hairline `#E4E4EC`, on the tinted page. Radius: 8px app · 10px dashboard · 12px editorial · 6px form controls and insets.
**Card headers (Cake-style):** grey-1 header zone with 15px/600 ink headline + 12.5px muted subtitle, hairline below. Caps eyebrows (10.5/500 muted) only for sub-sections inside a card.
**Two stroke levels:** interactive controls `#D6D5E0`; passive containers `#E4E4EC`. Both 1px.
Dense lists = hairline rows inside one panel, never box-per-item. Row hover = g2.
Marketing/editorial: open layout with hairlines, no card borders; borderless g2 tint block (12px) only to gather a group; bare green check icons.
The action-color card outline is reserved for the highlight/"What's new" pattern (promoting only).

## Density modes

**Spacious** (dashboards/home): 26px metric numerals + 12.5px muted labels, 28px greeting, 15px list-row padding.
**Compact** (work screens): 13px body, 12px rows, 19px/500 page title.
Resident surfaces are always the comfortable/warm end: 16px base, hero gradient (action→data, 135deg), reassurance copy.
**Mobile (<480px):** never compact vertically — touch targets and type sizes are the accessibility floor, not padding to reclaim. Horizontal economy only: card padding steps 18px→16px, screen edge margins 16px, decorative icon circles 32px→28px. Type does not shrink.

## Key components (see kit for exact markup)

- **Buttons:** action fill / white + NEUTRAL border secondary / tint / ghost-on-ink. ALL buttons are 10px radius, every size, both apps — never pill-shaped (pills = badges/nav chips only). 500 weight. One primary per view. Optional icon 16px: leading for subject glyphs, trailing for direction (arrows). Exception: micro-utilities living inside other components (Show/Hide in inputs, Copy chips in bands) stay 4–5px — they're accessories, not buttons. Text links are not buttons.
- **Destructive actions:** quiet, never featured — a red text link (resident) or red-text secondary button (admin), placed below and visually subordinate to constructive actions. Never a full-width outlined red button; red outlines belong to status surfaces.
- **Form fields:** 6px radius, action-color focus ring (3px, 32% alpha). Label 6px above; hint 8px below; label+hint pair tight (3px).
- **Option cards:** 6px radius, 8px indicator gap; selected = action tint + 1px action stroke + action indicator. Unchecked boxes on g1.
- **Checkboxes:** 16×16px at 4px radius, everywhere (option cards, checklist rows, forms). Radios stay 18px circles. Selected/done = solid fill (action in violet contexts, green for status) + white ✓.
- **DOB:** three separate MM/DD/YYYY fields (60/60/82px), never a date picker.
- **Errors:** red border + icon + fix-it message ("Enter all 10 digits, like (406) 555-0134"), aria-describedby.
- **Notification cards:** 15/600 title + 14 body at 1.4, 6px radius, tint bg + same-family 1px outline, vivid icon, subcopy softened toward gray. `.compact` for admin.
- **Entry card** (announcement family): tappable feature entry point — action tint bg + light stroke `#E0D3F8`, white icon circle with action-color glyph (never a solid fill tile — solids are CTAs), 15/600 ink title + 13 muted subcopy (never colored subcopy), action-color chevron/arrow REQUIRED (tappability can't be color-only). Status information never uses this — deadlines/FYIs are notification cards.
- **Badges:** dot pills (outlined, vivid dot, AA text) for changing statuses; plain pills for static tags.
- **Progress:** data-color fill on data tint track. Numbered steps = data-mid circles.
- **Transcript:** action-color caps = staff, grey caps = applicant; flagged rows = sunflower inset (outlined) + explanation note + action. Ink band header with live dot `#3DD68C`.
- **Multi-step:** back link + "Step X of Y" + progress; footer = Back / Save and finish later / Continue.
- **Success:** centered card, solid green check circle, ink headline (never green-on-green), copyable reference box, data-numbered next steps.
- **Empty states:** invitation + verb CTA — never "nothing here yet". Loading states state duration.
- **Inline hints:** reassurance/context copy ("You can save and come back. Takes about 10 minutes.") is bare muted text — never boxed, never given a status icon or status color. Containers are for status changes and interactive things; if a hint must stand apart on a long page, the most it gets is the borderless g2 tint block.
- **Decision cards** (choice screens): when 2–4 mutually exclusive paths ARE the screen (e.g. check eligibility vs. apply vs. transfer), each path gets its own card — white, INTERACTIVE stroke `#D6D5E0`, 10px radius, action-tint icon tile, 16/500 ink title in second person (1.25 leading — 500 not 600: multi-line titles read heavy at semibold; the muted subtitle carries hierarchy), subtitle 13.5px muted at 1.35 leading, chevron. Rule generalizes: any component prone to two-line titles uses 500; single-line card headlines stay 600. This is the one sanctioned box-per-item layout; it does not apply to menus of destinations (see Nav list).
- **Nav list** (mobile destinations): ONE white card, rows divided by g3 hairlines — never box-per-item. Each row: 40px action-tint icon tile (8px radius, action-color Tabler glyph — never emoji or multicolor) + 15-16/600 ink title + optional 13 muted subtitle + optional dot-pill badge + chevron (required). Rows ≥48px, pressed state g2.
- **Mobile nav:** 4 tabs max, icons + labels always visible, 48px targets, action-color active, red count badge.

## Voice (UI copy)

Warm, plain, grade 6–8 for residents. Errors say what to do, not what went wrong. Sentence case everywhere.
Banned: utilize, leverage, seamless, journey, "we're thrilled", exclamation points in system copy, bureaucratic phrases.
Sensitive fields include trust copy ("It's encrypted and never shown to staff").

## Accessibility (non-negotiable)

WCAG 2.1 AA. Text ≥4.5:1 (verified pairs live in tokens.css). Never color-only signals. 48px touch targets on mobile. Focus rings always visible. aria-describedby for errors/hints.
