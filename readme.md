# Hearth — the HT Design System

> CIVIC provides the structure; Hearth provides the warmth.

Hearth is the design system behind **Healthy Together**, a public-benefits
platform with two faces of one system:

- **Resident app** — a warm, calm, mobile-first experience for people applying
  for and managing benefits (SNAP/food assistance, housing support, Medicaid-style
  coverage). Larger type, gentle language, no jargon.
- **Caseworker / admin app** — a denser desktop workspace for the staff who
  review applications: dashboards, case detail, live interview transcripts,
  action-item checklists, data tables.

The system is theme-driven. One token layer powers multiple applied themes
(**Healthy Together** default, **Atlas**, plus `ht-resident` / `ht-admin`
variants). A new project is a new theme block re-pointing roles — nothing else
changes.

The **mock files** in the source (`mock-dashboard-mobile.html`,
`mock-caseworker-detail.html`) are Healthy Together / Atlas screens: *examples of
the system applied*, not the system itself. Build new screens by composing
**Components** — never by copying a mock.

---

## Sources

> **Sync status (2026-08-01):** reconciled against the design critique ruling.
> Three corrections applied: the page background was a porting typo (`#FCFBFE`)
> and is back to the canonical **`#F8F7FC`** violet-tinted near-white everywhere;
> **weight 600 is retired** — Geist now ships 400/500 only, swept across all
> components, specimens, templates and the webfont import; and the homepage
> thumbnail drops the multicolor swatch strip for the plain violet heart-chip +
> wordmark described in *Logo / brand mark*.
> Three rulings ratified as canon: the `SegmentedYesNo` two-option exception, the motion
> rules (140–150ms transitions, 0.9s spinner, 1.4s skeleton, no bounces), and all
> components added since the last review — `ConfirmDialog`, `Stepper`, `Skeleton`,
> `ActionSheet`, `Avatar`, `Eyebrow`, `ProgramTag`, `IconTile`, `SideNav` — with one
> amendment: `ConfirmDialog`'s destructive confirm is a **red-text secondary
> button, never a red fill** (`Button variant="danger"` was changed accordingly,
> so the fix applies wherever it is used).
>
> The `hearth/` source folder is still **not mounted** in this workspace and
> `CLAUDE.md` is not at the root, so component ports have not been diffed against
> the live codebase since 2026-07-23. Re-attach the folder — or paste the changed
> files — before trusting the port descriptions below.

Last read as a read-only mounted codebase at `hearth/`:

- `hearth/tokens.css` — Hearth tokens **v2**: primitives → roles → theme. The
  canonical token source; ported here into `tokens/`.
- `hearth/theme.css` — theme remap + element-level type/form rules. Note: it
  remaps a `civic-*` token layer from an unshipped `civic.css`; since `civic.css`
  was not provided, Hearth here publishes the self-contained `--ht-*` roles as the
  public API (which the rulebook already mandates: "use role names").
- `hearth/component-kit.html` — the full component kit; the ground truth for every
  component's markup, spacing, and states. All components here are ported from it.
- `hearth/mock-dashboard-mobile.html`, `hearth/mock-caseworker-detail.html` —
  applied example screens.
- **`CLAUDE.md`** — the full rulebook (provided 2026-07-23). Every rule below is
  sourced from it; component anatomy, density modes, and voice principles follow it
  verbatim.

---

## Rulebook (non-negotiable)

- **Tokens only, never raw hex.** Reference **role names** (`--ht-action`,
  `--ht-data`), not hue names (`--ht-primary`, `--ht-royal`).
- **Geist everywhere.** Weights **400 / 500 only** — 600 was retired 2026-08-01,
  and 700 was never allowed. A card title and its label share weight 500; size,
  color and tracking carry the hierarchy.
- **Destructive actions are never a red fill.** `Button variant="danger"` is a
  white bordered button with red text and a red hairline, used only as the
  confirm inside a `ConfirmDialog`. A solid red button reads as the recommended
  action — the destructive path should be available, not advertised.
- **Containers:** white cards, **1px `--ht-hairline` (#E4E4EC)** strokes, on the
  **`--ht-bg` (#F8F7FC)** violet-tinted page.
- **One primary CTA per screen. One dark ink band per screen** (the live/primary
  panel only).
- **Purple stays purple** in selected states; **green is status-only**.
- **The primary hue is a single knob.** `--ht-primary-wash / -tint / -select`,
  `--ht-primary-dark`, the focus ring and the shadow casts are all `color-mix`
  derivations of `--ht-primary` — re-point that one token and a product gets its
  own tints, selected states, ring and shadows. Never hardcode a tint hex.
- **Status cards are outlined, not filled.** The saturated hue is the 1px
  stroke; the fill is the near-white `--ht-*-wash` step. The `--ht-*-bg` mid
  tints are for badge pills and icon circles only — at card scale they read as
  an emergency. Notification `info` uses the **action** family, so it follows the
  product's primary; royal stays reserved for data.
- **Icon chips are small rounded squares** — 24px, 6px radius, glyph ≈60%,
  top-aligned with the row's first text line. Never a large circle
  (ratified 2026-08-04): circles are reserved for people (`Avatar`) and the
  white-on-tint announcement anatomy (`AnnouncementBar`, `EntryCard`).
  Applied to `DocumentsCard`, `TransactionRow`, `ActivityCard` rows/headers.
- **Warning family is sunflower.**
- **Color never signals function alone** — interactive elements carry a control
  shape or underline; status carries a dot + label; data color lives in
  numeral/bar/chart contexts. **One exception (ratified 2026-08-01):** `SegmentedYesNo`
  marks its selected side with tint + 1px stroke and no indicator — a two-option
  pair is read as a unit, so the fill is unambiguous. Three or more options still
  require option cards with indicators (`OptionCard`).
- **WCAG AA** contrast and **48px touch targets** are non-negotiable. Text on
  white always uses the darker AA text step, not the vivid accent.

---

## Content fundamentals

Copy is **plain, calm, and reassuring** — written for people under stress
navigating government benefits.

- **Voice:** second person, warm and direct. "We use this to check which programs
  you qualify for." "You don't need to do anything else today."
- **Reduce anxiety:** state what's happening and what (if anything) is needed.
  "Your application is in review — no action needed today."
- **Fix-it errors,** never scolding. "Enter all 10 digits, like (406) 555-0134."
- **Casing:** sentence case for everything — headlines, buttons, labels. CAPS only
  for tiny sub-section eyebrows *inside* a card (10.5px / 500 / +0.07em tracking).
- **Numbers are concrete and honest:** "Gross $4,000/mo vs. $3,380/mo threshold.
  Preliminary only — not a final determination."
- **No emoji.** No exclamatory marketing tone. Iconography carries affect instead.
- **Admin copy** is terser and more clinical than resident copy, but never cold.

---

## Visual foundations

- **Color vibe:** violet-forward, warm-neutral. A single **brand violet #4C1EA8**
  (Action) with a **royal blue #4860FC** secondary (Data). Everything neutral is a
  violet-cast grey; even shadows are violet-tinted (`rgba(59,22,131,…)`).
- **Backgrounds:** flat. The page is #F8F7FC. **No photography, no illustration, no
  texture/pattern, no repeating motifs.** The only gradient is the
  **hero** — a 135° violet→royal fill — used sparingly on welcome/hero blocks.
- **Cards:** white, **1px hairline** stroke, **no drop shadow by default** (borders
  do the separating). Shadows are reserved for lifted/floating surfaces (phone
  frames, popovers) and are soft + violet-tinted.
- **Radii:** 6 (controls/alerts) · 8 (cards, panels, buttons) · 12
  (editorial/highlight). Pills use 999px. The old 10px tier is retired —
  `--ht-r-dash` is a deprecated alias of `--ht-r-card`.
- **The one ink band:** a single dark `#201C33` band per screen marks the live /
  primary panel (e.g. live transcript header, admin top bar). Never more than one.
- **Selected state:** violet tint fill + **1px** violet stroke (the tint carries the
  state, so the ring stays light — not Iowa's 2px).
- **Hover:** subtle — controls gain a violet 1px ring or a grey-1/tint fill; rows
  tint to grey-2. **Press:** darker fill (`--ht-action-hover`), no shrink/scale.
- **Focus:** always visible — 3px violet ring `rgba(76,30,168,0.32)`.
- **Animation:** restrained, and canon as of 2026-08-01. 140–150ms
  background/box-shadow transitions; a 0.9s spinner and a 1.4s skeleton pulse.
  No bounces, no parallax.
- **Transparency/blur:** essentially none, except white-on-ink ghost buttons
  (white 12% fill, 25% border) and the flag insets. No glass/blur effects.
- **Status accents:** vivid for dots/icons/checks (green #16A34A, sunflower
  #F5B700, red #DC2626); text-on-white steps down to the AA-safe darker value.

---

## Iconography

- **Tabler Icons**, loaded as a **webfont** — the source uses
  `@tabler/icons-webfont@3` via jsDelivr CDN (with an older `2.44.0` fallback).
  Rendered as `<i class="ti ti-{name}">`. Stroke style, ~1.75px, rounded joins.
- Common glyphs seen in the source: `ti-heart` (the brand mark), `ti-calendar`,
  `ti-upload`, `ti-message`/`ti-mail`, `ti-clipboard-list`, `ti-alert-triangle`,
  `ti-circle-check`, `ti-circle-x`, `ti-info-circle`, `ti-speakerphone`, `ti-wand`,
  `ti-users`, `ti-file-text`, `ti-home`.
- Components that render icons (Button, NotificationCard) take a **Tabler class
  string** (e.g. `icon="ti-calendar"`); **the host page must load the Tabler
  webfont** (all cards/UI kits here do).
- **No emoji.** No custom SVG icon set. Unicode is used only for tiny inline
  affordances in the source (▲ trend arrow, ✓ check, → arrow) — prefer Tabler
  glyphs for anything semantic.
- **This is a CDN link, not copied binaries** — Tabler is not vendored into
  `assets/`. Flag: if you need offline/self-hosted icons, vendor the Tabler webfont.

## Logo / brand mark

- **No logo file exists** in the source. The "mark" is a Tabler **`ti-heart`**
  glyph in a solid-violet rounded chip, next to the wordmark **"Healthy Together"**
  (or the theme's product name). We have **not** invented a logo — the thumbnail and
  headers render the name in Geist with the heart-chip convention.
- Flag: if there is a real Hearth / Healthy Together logo, drop it into `assets/`
  and we'll wire it in.

---

## Index / manifest

Root:
- `styles.css` — **the single entry point** consumers link. `@import` list only.
- `tokens/` — `fonts.css` (Geist via Google Fonts), `primitives.css`,
  `palette.css`, `roles.css`, `base.css`.
- `thumbnail.html` — homepage tile.
- `foundations/` — 8 specimen cards: `palette-brand`, `palette-grey`,
  `palette-status`, `palette-surfaces` (Colors) · `type-scale`, `type-weights`
  (Type) · `radii`, `elevation` (Spacing).
- `components/` — reusable primitives (below).
- `templates/` — full-screen starting points (below).
- `SKILL.md` — Agent-Skills-compatible entry.
- `readme.md` — this guide.

### Components (all 48 built)
Namespace: `window.Hearth_5938e8`. Mount with `const { Name } = window.Hearth_5938e8`.
(48 components; 53 exports once compound subparts are counted.)
- **core/** — `Button`, `Badge`, `Avatar`, `Pill`, `SegmentedControl`, `ProgressBar`,
  `Eyebrow`, `ProgramTag`, `IconTile`
- **forms/** — `Input`, `FieldGroup`, `Select`, `OptionCard`, `FileUpload`,
  `StepNav`, `SegmentedYesNo`, `Stepper`
- **feedback/** — `NotificationCard`, `AnnouncementBar`, `StatusCard`, `Skeleton`,
  `Toast`, `ConfirmDialog`, `SuccessHero`
- **surfaces/** — `Hero`, `MetricCard`, `HighlightCard`, `Panel` (+ `Panel.Body`,
  `Panel.Section`), `ChecklistRow`, `ReviewTile`, `EntryCard`, `RecordCard`,
  `ProgramCard`
- **data/** — `DataTable` (+ `DataTable.Name`), `ActivityList`, `Transcript`,
  `NoticeTimeline`
- **navigation/** — `DarkHeader`, `SideNav`, `MobileBottomNav`, `TopNav`
- **resident-mobile/** — `ProgramStatusCard`, `ActivityCard`, `DocumentsCard`,
  `HoursSummary`, `StatusRow`, `BottomSheet`, `TransactionRow`, `ActionSheet`
  (mobile resident patterns from the Figma DS file)

Each family has one `@dsCard` in its directory (Design System tab) and every
component ships a `.d.ts` props contract + `.prompt.md` usage note. The old
`@startingPoint` tags were removed on 2026-07-31 — consuming projects no longer
offer them; the three templates replaced them.

#### Kit name → code name

No name drift remains. `FormField` was renamed `Input` on 2026-08-03 and
`YesNo` was renamed `SegmentedYesNo` on 2026-08-07 (kit: `Segmented / Yes-No`) —
design and code now share one vocabulary. Note the component is still NOT a
`SegmentedControl` variant: it keeps the ratified two-option selection rule
(tint + stroke, no indicator).

#### Intentional additions (no Figma symbol)

Confirmed project-only, all built for cases the kit doesn't cover. Not drift —
they need drawing in Figma, not renaming here.

| Component | Exists because |
|---|---|
| `forms/FieldGroup` | Multi-field rows (city / state / ZIP) need one shared label, hint and error, which a stack of `Input`s can't express. |
| `forms/Stepper` | Household counts are a ± control, not a text input. Kit has no numeric stepper. |
| `data/NoticeTimeline` | Notice history is a dated vertical sequence; `ActivityList` is an avatar feed and reads wrong for it. |
| `navigation/SideNav` | The caseworker suite needs persistent desktop navigation. The kit only draws mobile `Bottom nav` and `Top nav`. |
| `surfaces/RecordCard` | Employment/income records need per-entry confirm + edit + remove. `EntryCard` is a single tappable row. |
| `core/IconTile` | Added 2026-08-07: two consuming projects (Health Net CE, MetroPlus CE participant app) independently invented a tinted icon-chip atom — the convergence promoted it to canon. Rounded square (radius = size/4), circle and solid forms. |

The DOB / masked-input patterns from the kit are **compositions of `Input`**
(three fields for DOB; `oninput` masks for phone/SSN), not separate components.

All additions above are specced for the Figma side in `figma-todo.md`.

### Still to build (next turns)
(Complete.) Both products are covered by templates below.

### Templates (starting points)
Full-screen compositions consuming projects can copy or follow. Each lives in
`templates/<slug>/` with a `<Slug>.dc.html` entry and a sibling `ds-base.js`
(loads this DS). They show in the consuming project's **Templates** picker.
- **Caseworker — Dashboard** (`templates/caseworker-dashboard/`) — spacious admin
  dashboard: dark header, sidebar + What's new, greeting, announcement bar, metric
  row, activity feed, caseload panel.
- **Caseworker — Case detail** (`templates/caseworker-case-detail/`) — case screen:
  applicant panel, action-item checklist, live transcript with a flagged turn.
- **Resident — Mobile home** (`templates/resident-mobile-home/`) — resident app
  home in a phone frame: gradient hero, status alert, next appointment, quick
  actions, bottom tab bar.

The two mock files map to these: `mock-caseworker.html` → Case detail;
`mock-dashboard-mobile.html` → Dashboard + Resident mobile home.

### Intentional additions
- **`forms/FieldGroup`**, **`forms/Stepper`**, **`data/NoticeTimeline`**,
  **`navigation/SideNav`**, **`surfaces/RecordCard`** (confirmed 2026-08-03) —
  built for cases the kit doesn't cover; no Figma symbol exists yet. Rationale
  per component in *Intentional additions (no Figma symbol)* above; drawing
  specs in `figma-todo.md`. These are additions awaiting Figma-side work, not
  naming drift.
- **`resident-mobile/`** (6 components: 4 added 2026-07-31 AM, 2 more the same
  day) — `ProgramStatusCard`, `ActivityCard`, `DocumentsCard`, `HoursSummary`,
  then `StatusRow` and `BottomSheet` from the same **Figma DS mobile resident
  patterns** (the presentation-deck exports). They follow the kit's card anatomy
  (hairline stroke, 16px padding, full-bleed dividers) and add no new tokens.
  Two spec deviations worth knowing: `ProgramStatusCard`'s divider runs full-bleed
  to the amber stroke, and `DocumentsCard`'s amber count badge is inline at 12.5px
  rather than reusing `Badge` (12px).
- **`forms/SegmentedYesNo`** (as `YesNo`) and **`core/Eyebrow`** (added 2026-07-31) — ported from the
  Figma DS additions of 2026-07-27 (Yes/No binary control, 6px radius, starts
  neither-selected; Eyebrow page/card levels 13px/10.5px per the kit's `.eyebrow`
  / `.sub-eyebrow` classes).
- **Figma-only components ported 2026-07-31 PM** — `core/ProgramTag` (violet
  identity pill — identity, not status), `feedback/Toast` (ink confirmation;
  check is `#3DD68C`, the on-ink success green — vivid green reads muddy on
  ink), `navigation/TopNav` (step-flow header with royal progress rail),
  `surfaces/EntryCard` (violet-tint doorway card; shares AnnouncementBar's
  `#E0D3F8` tint-line literal), `resident-mobile/TransactionRow` (amount over
  AA status word) and `resident-mobile/ActionSheet` (keeps the OS conventions
  on purpose: 13px radius, 20px type — the two sanctioned deviations from the
  radius/type scales). After this pass the Figma library and this project are
  1:1 on the resident side.
- Every other component maps to a family in `component-kit.html`. Components render
  Tabler glyphs directly via a class string; a dedicated `Icon` wrapper was not
  added (the class-string approach matches the source). If one becomes worthwhile
  it will be listed here with a reason.

---

## Caveats / substitutions
- **Fonts:** Geist is loaded from **Google Fonts** (exact family — not a
  substitute). The rulebook says self-host woff2 in production; swap
  `tokens/fonts.css` for self-hosted `@font-face` when the files are available.
- **Icons:** Tabler outline set via CDN (not vendored). See Iconography.
- **Amber (resolved):** `--ht-amber-vivid #F5B700` is canonical for dots-on-white
  and solid accents; `--ht-amber-icon #A16207` is the darker gold for glyphs on an
  amber tint (a11y). Badge fills use the lightened `--ht-badge-*` set so no status
  pill reads heavier than the others.
- **CIVIC layer:** `theme.css` remaps a `--civic-*` layer from an unshipped
  `civic.css`. Per the rulebook, Hearth publishes the self-contained `--ht-*` roles
  as the public API, so the CIVIC remap is not required by these components.
