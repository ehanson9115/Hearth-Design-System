# New template: Resident — Sign in / Create account (2026-08-30)

`templates/wic-sign-in/` — the identity-lookup pattern as a starting point,
registered in the manifest so Claude Design's Templates picker offers it.
This is the composition behind the contained-fields rulebook line: one
field-group card (48px inputs on grey-1), single primary CTA, no password.
Prompted login/account screens in consuming projects now have both the RULE
(readme) and the COMPOSITION (this template) to follow. Note: the kit's
Figma screens are reference for humans; Claude Design reads this package —
the two carry the same pattern by construction.

# Screens re-composed from library components (2026-08-30)

Per Emma's ruling, the 10 new WIC/Farmer screens now compose from existing
kit components instead of drawings wherever a 1:1 symbol exists: Buttons
(Primary/Secondary + the new Disabled state — farmer keypad CTA included),
Badges (Active/10-days-left/Open-today; "Scheduled" moved to Tone=Info royal,
which is MORE canon than the drawn violet — royal is the informational
family), and IconTiles (Health records shield + recert amber, Home quick-row
tiles with glyph swaps). 467 solid fills/strokes bound to kit variables
(grey ladder, violet/royal/status families); farmer-theme literals kept
(the green family has no kit variables by design — farmer keeps its own
theme). Remaining drawings are pieces with no symbol yet: the 5-tab nav +
scan FAB (promotion candidate — appears on 5 screens), date tile, wallet
cards, sheets, the map. Button icon-slot and sm/desktop sizes are still
kit gaps; when those land, CTAs can regain their leading icons as instances.

---

# Kit screens batch 2 — WIC mobile (2026-08-28)

Six more frames on **Screen — WIC Participant** (from the live prototype;
notice banner intentionally omitted from Home per Emma):

`WIC — Create account (identity lookup)` 645:21 (contained field card — this
pattern is now a rulebook line: form fields are ALWAYS contained) ·
`WIC — Home` 646:23 (violet hero #9A72F0→#490BBC, frosted still-buy card with
illustrated food tiles, upcoming-visit card, quick rows, nav) ·
`WIC — Switch household (sheet)` (scrim + bottom sheet, selected household =
tint + 1px action stroke per canon, phone-link info band) ·
`WIC — Appointment detail` (green outlined Confirmed banner, icon-led detail
rows, calendar CTA + violet-stroke secondary, red text cancel) ·
`WIC — Health records` (certification card + Active chip, recert prompt with
sm buttons, health-notes rows) · `WIC — Farmers Market Finder` (stylized map:
street grid, river, park, FMNP-green pins, zoom/locate controls, search pill;
markets sheet with open-today card + deep-green directions CTA).

---

# Kit screens added — WIC + Farmer mobile (2026-08-27)

Four mobile screens added to the kit's Screens section, rebuilt as native
Figma compositions from the live wic-mt2 prototype (localhost captures used
as reference; icon glyphs are org-library instances):

- **Screen — WIC Participant** page gains `WIC — Wallet` (633:2: stacked
  WIC/FMNP wallet cards, benefit periods with levelled badge chips, manage-card
  row, 5-tab nav with scan FAB) and `WIC — Updates` (636:12: amber outlined
  safety-alert card, needs-your-attention rows with status rings + date steps).
- New page **Screen — WIC Farmer** (638:21): `Farmer — Home` (640:10: deep-green
  hero #1D9E75→#04342C, glass chips, floating quick-action card, selling
  locations, green 5-tab nav) and `Farmer — New sale (amount)` (keypad step).

WIC screens use Hearth violet; farmer keeps its green theme per the standing
ruling. Values honor current canon (12px radius cap, deepened badge chips,
never-truncate — one prototype truncation was rewritten). These are
compositions, not components — no code counterpart expected.

---

# Sync incident + reconciliation — 2026-08-27

A 2026-08-25 session pushed straight to isapp/ht-design canon (bf66b9d:
lighter surfaces incl. page #FCFBFE / sidebar grey-1 / inset grey-2 /
muted grey-1 / head-zone 35%, the --ht-disabled-* trio, --ht-shadow-rail,
card shadow-sm, IncomeButton, Storybook stories) without updating this
mirror. ht-design PR #524, built FROM this stale mirror, then wholesale-
reverted those roles.css changes on merge — briefly breaking disabled
Button rendering in the deployed Storybook (Button.jsx referenced the
deleted --ht-disabled-* tokens).

Reconciled same day: ht-design #530 restores the 8/25 roles.css lines
merged with the 10 mapping-gap roles; this mirror re-synced wholesale
from canon (06de058); claude.ai/design project patched (it had the 8/25
state except the clobbered roles.css); ht-platform #3765 re-pinned.

**Standing rule from this:** before building any canon PR from this
mirror, pull isapp/ht-design's design-systems/hearth/ forward first —
other sessions commit to canon directly and this mirror is downstream.

---

# Figma sync — 2026-08-14 (Storybook design links + Code Connect)

Not a token/component sync — this pass wires up the two Figma↔code loops that
were previously entirely manual (this file). Direction: infrastructure, both ways.

**Storybook → Figma.** Added `@storybook/addon-designs` (registered in
`.storybook/main.js`); every mapped component's `.stories.jsx` now carries a
`parameters.design.figma` link to its canonical Figma node, alongside existing
`docs` params. `ProgramCard.stories.jsx`'s `StatusPending` story links the
`Program card/CTA3` node specifically.

**Figma → code (Code Connect).** Added `figma.config.json` (parserless
`.figma.ts` templates, `include: components/**/*.figma.ts`) and 44 template
files — one per mapped component (some components have two, see below). CI:
`.github/workflows/hearth-code-connect.yml` publishes on push to main
(path-filtered), manual dispatch, and a Monday 09:00 UTC cron, reusing the
`FIGMA_TOKEN` secret civic's equivalent workflow already uses. No build step
needed (parserless templates don't require parsing the JSX).

**Coverage:** 40 of Hearth's 48 code components now have a Code Connect
template (44 files: `Eyebrow`/`EyebrowCard` and `ProgramCard`/`ProgramCardStatus`
each split into two templates for their two distinct Figma nodes). The 7
components with no Figma symbol (`FieldGroup`, `Stepper`, `NoticeTimeline`,
`SideNav`, `RecordCard`, `IconTile`, `Avatar` — all already tracked in
`figma-todo.md`) were skipped, not stubbed.

**New duplicate-node findings** (join the existing `Input` duplicate below —
none deleted, all just flagged for Figma-side cleanup):
- `FileUpload` has two structurally-identical component sets (`163:22`,
  `278:1700`) on the same page. Connected `163:22`; `278:1700` is unmapped.
- `Skeleton` has two identically-named, property-less components on different
  pages (`193:10` on "Notification Cards", `158:6` on "States"). Connected
  `158:6` (topically correct home); `193:10` looks like a misplaced duplicate.

**Gaps surfaced while authoring templates** (approximations, not blockers —
worth a design/code decision, not urgent):
- `Badge`'s Figma `Tone=Solid Success` has no code equivalent (`Badge.jsx` has
  no solid-fill variant); approximated as `variant="success" check`.
- `SegmentedControl`'s Figma symbol models a single segment/label; the code
  component renders the whole multi-option control. The template is
  illustrative only — real usage needs manual authoring beyond what Code
  Connect can generate.
- `ReviewTile`'s Figma node merges each row's label and value into one text
  run with no sub-layer split, so only `title` could be mapped; `items` and
  the Edit action are omitted rather than guessed.

---

# Figma sync — 2026-08-12 (code -> Figma push)

Emma's design-QA rulings (ht-design PR #375) pushed INTO the kit
(rL6ZmEg0OhxMPuvQmtpNH8) via the Figma MCP. Direction: code -> Figma.

**Variables updated (Primitives):** violet/100 -> #EAE4F5 (12% rule),
violet/150 -> #DFD7EF (18%), royal/100 -> #E9ECFF (12%), green/100 ->
#D4F0DF, sunflower/100 -> #FDEFC7, red/100 -> #FBD3D3. **Variables
created (Theme):** the 8 badge/* fill+line pairs at the levelled depths
(VariableID:283:2-9) — closes the "missing from Figma" badge gap.

**Symbols updated:** Badge set 15:27 (4 semantic tones rebound to
badge/* vars; Neutral 112:137 -> grey/5 + #C9C8D3 ring) · Button
Secondary 15:6/15:8 (violet #C6B7E3 stroke @1.5) · Entry card 22:9
(stroke -> #C6B7E3) · Eyebrow Level=Page 63:3 (13 -> 10.5/+7%) ·
Program tag 38:3 (violet/150 fill + ring) · Program card 20:2/20:17
logo slots (violet fallback) + CTA3 131:184 (amber-vivid ring) ·
ReviewTile 161:101 (dividers -> grey/3, label 500 head / value 400).

**No kit counterpart (skipped, still code-only):** MetricCard trend
element (kit card has no trend), Avatar (no symbol anywhere — kit gap),
RecordCard (no symbol; pending draw), Button Link/Danger/desktop-size
variants, SegmentedControl md size. These stay in figma-todo.md.

**Truth audit (same day, second pass):** swept the whole file for
now-false content. Retired weights corrected — 49 text nodes set Geist
SemiBold/Bold -> Medium across Lists, Mobile Patterns, Notification
Cards, Cards & Panels (incl. two straight Bold headings), Panels,
Resident Cards, Step Flow, States, Admin Header, Button, Action Sheet,
Pills & Controls, Getting Started, and the three composed Screens
pages (600 retired 2026-08-01; the 2026-07-31 title-weight pass
predated the ruling). Deleted both unfinished Transaction-row drafts:
variant `Status=Status3` (221:353, zero instances) and the spec frame
`Mobile-Patterns / Transaction row` (238:397) — ChecklistRow's numbered
kind covers the use case in code. No stale hex labels exist (the file
annotates by token name). Left alone on purpose: `Screen-WIC-Participant`
(600/700 pending Emma's weight decision) and the `To Add` scratch page.

**Known drift left in place:** several kit titles still carry Geist
SemiBold from the 2026-07-31 title-weight pass; the 2026-08-01 ruling
retired 600 — needs its own sweep, not bundled here.

---

# Figma sync — 2026-08-07

Source: **Hearth — HT Design System** (`.fig` attached 2026-08-07), all 33
pages in scope (one new page since last sync). Tokens re-exported verbatim to
`tokens/fig-tokens.css` (103/103 — Primitives 56, Theme 47; new generator
format writes FLOAT tokens unitless — verified nothing in the project consumes
the fig-* layer directly, so no breakage).

**Direction (per CLAUDE.md rulings):** Figma is source of truth for what the
project lacks; documented accessibility divergences never sync back.

## What changed in the kit since 2026-08-03

| Change | Disposition |
|---|---|
| New variable `status/bg` = `rgba(255,243,191,0.2)` (20% sunflower wash) | Imported into `fig-tokens.css` as provenance. Conceptually the kit's answer to our `--ht-amber-wash`; ours stays opaque (`#FEF4D8`) per the a11y ruling — translucent washes stack unpredictably over tinted surfaces. Role mapping left open. |
| New 3rd `Transaction row` variant `Status=Status3` (node 221:353) | **Draft — not synced.** Numbered-tile row (24px tile, radius 6, grey-3 fill) but the variant is unnamed ("Status3") and uses off-token values (14px/400 black numeral). Listed in figma-todo. |
| New spec frame `Mobile-Patterns / Transaction row` (238:397) | Same numbered-row exploration, 0.5px dividers, inconsistent tile radii (3/4). Draft; not synced. |
| New page `To-Add` | Scratch: 6 reference screenshots (Aug 5–7), one warning-Badge usage ("3 missing"), a 700-weight "Welcome" frame. No canon content. |
| New page `Screen-WIC-Participant` (Splash 186:82, Sign-in, Home 190:2) | **New product surface, not yet coded.** Montana "Healthy Together" WIC participant app: violet→royal gradient hero, glass chips (white 14% fill + 22% inset stroke), on-ink balance meter, date-tile appointment card, Transaction rows, Bottom nav. Uses Geist 600/700 — the retired weights — so it needs a weight decision before code adopts it. Candidate template `templates/wic-participant/`; queued, not built this sync. |

## Still outstanding Figma-side (unchanged)

- The 5 pending components (`FieldGroup`, `Stepper`, `NoticeTimeline`,
  `SideNav`, `RecordCard`) — still no symbols.
- Duplicate `Input` set — still present.
- `Select / Dropdown` State=Open — still an empty frame.
- Divergences 1–5 below — kit still carries pre-pass values.
- `Segmented / Yes-No` — unchanged in the kit; code renamed to
  `SegmentedYesNo` (2026-08-07) so the two now match.

## Code-side changes this sync

- `tokens/fig-tokens.css` regenerated (103 tokens, both modes).
- No component changes required — no new canon symbols to port.

---

# Sync history

## 2026-08-03 (full import)

Source: full file, all 32 pages. Figma Variables exported verbatim to
`tokens/fig-tokens.css` (imported first in `styles.css` as a provenance layer —
different namespace from `--ht-*`, so nothing collides).

**Direction:** Figma is source of truth for anything the file states and the
project lacked. It is *not* allowed to revert a documented accessibility pass —
those divergences are listed below as work for the Figma side.

## Confirmed identical

Grey ladder 0–5, violet 500/700, royal 500/700/100/200/line, green vivid/text,
sunflower vivid/text/solid/note/icon, red vivid/text/100/line, page tint, ink
head/text/surface, on-ink muted/subtle, grey border/border-strong/muted/subtle,
the three radius tiers (6 control / 8 button+card / 12 block) and the 16px hero
tier, and the 12.5px caption step. Type is Geist throughout; the kit's `Inter`
usage (17×, 12px) is annotation text on the spec pages, not product type.

## Pulled from Figma into the project

| Added | Value | Note |
|---|---|---|
| `--ht-space-2xs … --ht-space-2xl` | 4 / 8 / 12 / 16 / 20 / 24 / 32 px | The kit's `space/*` primitives. The project had no spacing scale at all — components carried literals. |
| `--ht-primary-stroke` → `--ht-action-stroke` | `#E0D3F8` | Figma `violet/stroke`. Tint-button and selected-card strokes were previously ad-hoc. |
| `--ht-grey-head` | `#E7E7EE` | Figma `grey/head`. Registered as a primitive; see divergence 4 below for why `--ht-head-zone` still doesn't point at it. |
| `--ht-shadow-float` | `0 4px 30px` brand @ 9% | Figma's `rgba(76,30,168,0.09)`, used 12× — the wide soft cast on cards sitting directly on the page tint. Distinct from `--ht-shadow-md`. |

## Built from Figma (3 families the project was missing)

- **`surfaces/ProgramCard`** — from `Program card` (CTA: Primary/Secondary) and
  the `Program card/CTA3` symbol. 16px radius, `--ht-shadow-float`, 44px logo
  slot, 17px/500 title at −0.005em, 14px subtitle, `--ht-grey-3` divider, 18px
  icon + 14px meta rows, full-width 44px CTA. The CTA3 symbol becomes the
  `ctaLabel`-omitted status form: 32px slot, `gap:8`, `8px 18px 16px` padding,
  and `tone="pending"` for the sunflower stroke + `--ht-amber-solid` slot.
- **`forms/Select`** — from `Select / Dropdown` (State: 3). 48px tall, 6px radius,
  `--ht-grey-1` fill, `--ht-border` inset stroke, **13px** side padding, 15px/400
  value, 10×5 chevron at 1.5px. Figma's `State=Open` frame is empty, so the menu
  is designed here to system rules: 8px radius, `--ht-shadow-lg`, 40px rows,
  `--ht-action-select` + check glyph on the selected row.
- **`feedback/SuccessHero`** — from `Success hero` (Tone: Success/Accent). 92px
  ring in the tone's tint, 72px disc inset 10px in its vivid, white glyph.
  Optional title/description/actions below are an addition; the Figma component
  is the medallion alone.

## Divergences — the project is ahead, Figma needs updating

These are the 2026-07-22 and 2026-08-03 accessibility passes. The Figma file
still carries the pre-pass values. **Do not sync these back into the project.**

1. **Status tint fills.** Figma `green/100` `#E6F6EB` and `sunflower/100`
   `#FFF3BF`; project `--ht-green-bg` `#E4F7EC` and `--ht-amber-bg` `#FEF4D8`.
   The 2026-08-03 pass levelled all four status tints to one depth against the
   page — Figma's green reads sage-olive and its amber reads highlighter, so a
   warning card sits heavier than the same info card.
2. **Status tint lines.** Figma `green/line` `#BFE3CD`, `sunflower/line`
   `#F0D25B`; project `#ABE3C4`, `#F0D585`.
3. **`red/soft`.** Figma `#FEF5F5`; project `--ht-red-wash` `#FEF3F3`.
4. **Head-zone fill.** Figma `surface/head-zone` → `grey/head` `#E7E7EE`; the
   project computes `--ht-head-zone` as `grey-4` at 45% (≈`#F2F1F6`) because the
   header hairline does the separating and the darker band read as a second
   surface. The token now exists either way — the role mapping is the open
   question.
5. **Violet tints.** Figma `violet/100` `#F2ECFD` and `violet/150` `#E7DDFA` are
   literals; the project derives both from `--ht-primary` via `color-mix` so a
   re-pointed brand hue carries its own tints (≈`#F1EDF8`, `#E6E0F3`). Keep the
   derivation; the ~5/1000 delta is invisible and the flexibility is the point.

## Missing from Figma entirely

Project-side tokens with no kit equivalent, all from accessibility or theming
work: `--ht-text-on-tint` (`#52525E`, labels on grey/tinted fills — the muted
step only reaches 3.82:1 there), `--ht-live` (`#3DD68C`, the pulse green that
survives the dark ink band), the wash trio (`--ht-green-wash` / `-amber-wash` /
`-red-wash` for outlined status cards), the four `--ht-badge-*` fill/line pairs,
`--ht-r-chip` (4px), and the three brand-cast shadows. Worth adding to the kit so
the two stay comparable.

## Naming drift (resolved)

`FormField` was **renamed to `Input`** on 2026-08-03 to match the kit — design and
code now say the same word. (The kit carries two identical `Input` sets; the
duplicate should be deleted Figma-side.)

`YesNo` was renamed `SegmentedYesNo` (2026-08-07) to match the kit's
`Segmented / Yes-No`. Despite the name, it is not a `SegmentedControl` variant —
it keeps the ratified two-option selection rule (tint + stroke, no indicator).

The project also carries 5 components the kit has no symbol for: `FieldGroup`,
`Stepper`, `NoticeTimeline`, `SideNav`, `RecordCard`. These are confirmed
intentional and specced for drawing in `figma-todo.md`.

## Coverage

- **Component families: 48 of 45** built (all 21 variant sets + all 25 standalone
  symbols, plus 5 project-only additions the kit doesn't define).
- **Text styles: 0 of 0** — the file defines no TEXT or EFFECT styles; type is
  set per-node, so the size ladder in `tokens/primitives.css` was verified
  against raw node usage (13/11/14/12/15/12.5px) instead. `fig-typography.css`
  generated empty and was deleted.
- **Token collections: 102 of 102** variables exported (Primitives 55, Theme 47;
  single mode, "Healthy Together").
