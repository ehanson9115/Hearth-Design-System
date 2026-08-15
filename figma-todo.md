# Figma to-do — DRAWN 2026-08-12 (file fixes below)

**All 7 unsymbolled components were built in the kit on 2026-08-12** from the
draw-sheet + the specs below, as token-true variant sets with descriptions:

| Component | Set / node | Page |
|---|---|---|
| `Avatar` | `362:20` (Size sm/md/lg × Content Initials/Image) | Avatar |
| `IconTile` | `363:1585` (Tone×Size×Shape + solid Action/Success, 24 variants) | Icons |
| `Stepper` | `364:31` (State Default/Min/Max) | Stepper (new) |
| `FieldGroup` | `365:27` (Flush false/true, real Input instances) | Field Group (new) |
| `NoticeTimeline` | card `367:45` (Open) + item `366:27` (Latest) | Notice Timeline (new) |
| `SideNav` | rail `368:392` + item `368:20` (Default/Hover/Active) | Side Nav (new) |
| `RecordCard` | `369:52` (Confirmed false/true; uses IconTile instance) | Record Card (new) |

Next /design-sync should verify them against these specs and then this file can
shrink to just the section below. Original drawing specs kept for reference.


---

## 1. `FieldGroup` — forms

**Why:** multi-field questions (city / state / ZIP; phone + email) need one
shared label, hint and error. A stack of `Input`s can't express that, and
assistive tech needs a real `<fieldset>`/`<legend>` so the group name is
announced with every field inside.

**Anatomy** — vertical auto-layout, gap 20, padding 22, fill `surface/card`,
1px `border/hairline`, radius `radius/block` (12).

| Part | Spec |
|---|---|
| Legend | 17px / 500, `-0.005em`, `text/heading`, margin-bottom 2 |
| Description | 14px / 400, line-height 1.45, `text/muted`, sits 14 above the first field |
| Slot | the group's `Input`s, gap 20 |

**Variants:** `Flush: false | true` — flush makes the border transparent (the
group sits inside an already-bordered surface).

**Note for Figma:** inside a group, `Input` fills switch to `grey/1` so a
contained input never sits white-on-white. Worth a note on the symbol.

---

## 2. `Stepper` — forms

**Why:** household counts are a ± control, not a text input. Typing "3" into a
keyboard-summoning field is the wrong affordance for a number between 1 and 12.

**Anatomy** — horizontal auto-layout, gap 10, align center.

| Part | Spec |
|---|---|
| − / + buttons | 44×44, radius `radius/card` (8), fill `surface/card`, 1px `border/interactive`, glyph 19px `text/heading` |
| Value | 17px / 500, `text/heading`, tabular numerals, min-width 32, centered |
| Unit (optional) | 14px / 400, `text/muted`, 2 left of the value |

**States:** hover — fill `grey/1`, border `action/default`. Disabled (at min or
max) — 40% opacity. Focus — 3px `action/default` @ 32% ring.

**Variants:** `State: Default | Min | Max` (min/max disable one button).

---

## 3. `NoticeTimeline` — data

**Why:** notice history is a dated vertical sequence with a channel per entry.
`ActivityList` is an avatar feed — using it here reads as people talking rather
than the agency's send record.

**Anatomy** — card: fill `surface/card`, 1px `border/hairline`, radius
`radius/block` (12), clipped.

| Part | Spec |
|---|---|
| Header | padding 13×16, fill `surface/head-zone`, 1px bottom `border/divider`; leading icon 17px `action/default`; title 15px / 500 `text/heading`; chevron 17px `text/muted` at the right |
| Body | padding 16 |
| Rail dot | 10×10 circle at left 3 / top 5, `grey/4` — `action/default` on the newest entry |
| Rail line | 1px `border/divider`, left 7.5, from top 19 to the next item; none on the last |
| Item | padding-left 22, padding-bottom 18 (0 on last) |
| Item title | 15px / 500, `text/heading` |
| When + channel | 13px / 400 `text/muted`, gap 6; channel icon 14px |
| Body copy | 14px / 400, line-height 1.5, `text/primary` |

**Variants:** `Open: true | false` (chevron rotates 180°), `Latest: true | false`
on the item symbol.

---

## 4. `SideNav` — navigation

**Why:** the caseworker suite is a desktop product with persistent navigation.
The kit only draws mobile `Bottom nav` and `Top nav`, so every admin screen
currently invents its own sidebar.

**Anatomy** — vertical auto-layout, padding 14×10, fill `surface/sidebar`,
1px right `border/interactive`.

| Part | Spec |
|---|---|
| Group label | 11px / 500, `+0.07em`, uppercase, `text/muted`, padding 0 8, margin-bottom 6 |
| Item | padding 8×10, radius `radius/control` (6), 13px / 400, `text/primary`, gap 8; icon 15px |
| Item spacing | 2 between items, 16 between groups |
| Count / meta | right-aligned, 12px, `text/muted`, tabular numerals |

**States:** hover — fill `grey/3`. Active — fill `action/selected`, text
`action/text-dark`, weight 500, meta in `action/default`. Focus — 3px ring.

**Variants:** `State: Default | Hover | Active`.

---

## 5. `RecordCard` — surfaces

**Why:** employment and income records need per-entry **confirm / edit /
remove**. `EntryCard` is a single tappable row and has nowhere to put three
actions or a confirmation state.

**Anatomy** — fill `surface/card`, 1px `border/hairline`, radius `radius/block`
(12), padding 16.

| Part | Spec |
|---|---|
| Icon tile | 40×40, radius 10, fill `action/tint`, glyph 19px `action/default` |
| Title | 17px / 500, `text/heading` |
| Subtitle | 14px / 400, `text/muted`, 1 below |
| Detail rows | gap 6, 14px / 400 `text/primary`; icon 15px `text/subtle` |
| Rule | 1px `border/divider`, full-bleed (margin −16 horizontal), 14 above/below |
| Confirm control | 18×18 box, radius 4, `grey/0` fill + 1px `border/interactive`; **checked** → fill `status/success-vivid`, white check, no stroke. Label 15px / 500 `text/heading`, gap 10 |

**Variants:** `Confirmed: false | true`.

**Note for Figma:** the confirm control is deliberately a checkbox, not a
toggle — confirming a record is an assertion about data, not a setting.

---

## 6. `IconTile` — core

**Why:** two consuming projects independently invented a tinted icon chip
(Health Net CE: 24px rounded square; MetroPlus CE app: 40/44px circle). The
convergence promoted it to canon on 2026-08-07.

**Anatomy** — square tile, radius = size/4 (24 → 6, 40 → 10); `Circle` variant
uses full radius. Glyph ≈ 58% of tile, centered.

| Variant axis | Values |
|---|---|
| Tone | Action (violet tint/glyph) · Data (royal) · Success (green) · Warning (amber tint + `sunflower/icon` glyph) · Danger (red wash + red text) |
| Solid | false (tint fill) / true (vivid fill, white glyph) — Action/Success mainly |
| Shape | Square (default) / Circle |
| Size | 24 default; 40 matches `RecordCard`'s tile |

Decorative only — pairs with adjacent text; never carries meaning alone.

---

## Also worth fixing in the file

- **EntryCard outline darkened (code, 2026-08-12, Emma).** Border is now
  `color-mix(in srgb, var(--ht-action) 32%, white)` (≈`#C6B7E3` on the default
  violet) instead of the shared `#E0D3F8` tint-line literal. Restroke the Figma
  `Entry card` symbol to match. **Open question:** `AnnouncementBar` still uses
  the old `#E0D3F8` line — decide whether the announcement anatomy follows or
  keeps the lighter stroke.
- **ReviewTile rows: dividers + emphasis swap (code, 2026-08-12, Emma).** Rows
  are now separated by 1px `grey/3` dividers (9px vertical padding per row),
  and the key/value emphasis swapped: label = `text/heading` at 500, value =
  `text/primary` at 400 (missing values stay `red/text`, now 400 — color
  carries the alarm). Update the Figma `ReviewTile` rows to match.
- **ProgramCard pending slot ring (code, 2026-08-12, Emma).** The logo slot's
  grey hairline inset ring now switches to `amber/vivid` in the pending tone —
  a grey ring on the sunflower slot read as dirt. Update the Figma
  `Program card/CTA3` pending variant.
- **ProgramCard icon fallback is now violet (code, 2026-08-12, Emma).** When
  the 44px logo slot holds an icon instead of a real logo image, it renders
  `action/tint` fill + `action/default` glyph + 1px `action/stroke` inset ring
  (was grey-3/muted/hairline — read as empty). Slots holding an `<img>` keep
  the neutral grey + hairline containment. Update the `Program card` symbol's
  icon-placeholder state.
- **RecordCard Remove drops its trash icon (code, 2026-08-12, Emma).** The
  danger action is the red underlined text alone. The drawing spec in §5 is
  unaffected (it never included the icon).
- **Button Secondary + Danger strokes thickened to 1.5px (code, 2026-08-12,
  Emma).** The 1px `border/interactive` stroke read too faint on white
  secondaries; both bordered variants now carry 1.5px (they pair inside
  `ConfirmDialog`, so they move together). Restroke the kit's Button
  Secondary and Danger variants.
- **Tint chips darkened: Avatar, ProgramTag, Badge brand/neutral (code,
  2026-08-12, Emma).** The formula from EntryCard generalizes: tinted chips
  get a 1px inset ring at 32% of their family hue and a one-step-darker fill.
  Avatar: fill 20% data-mix (was royal-200), ring 32% data-mix. ProgramTag:
  fill `action/select` (was tint), ring 32% action-mix. Badge Brand: same as
  ProgramTag. Badge Neutral: fill `grey/5` (was grey-4), ring 55%
  border-strong mix. Status badges already had their `badge/*-line` rings —
  unchanged. Update the kit's Avatar, Program tag, and Badge symbols.
- **Eyebrows unified at 10.5px (code, 2026-08-12, Emma).** The 13px `page`
  level is retired — all eyebrows are 10.5/500/+0.07em uppercase. The
  component keeps the `level` prop for compatibility; it no longer changes
  size. Update the kit's Eyebrow set (Level=Page symbol) and any specs
  quoting 13px.
- **SegmentedControl md height 44 -> 42 (code, 2026-08-12, Emma).** The md
  (mobile) size felt oversized; 42px buttons + 3px track = 48px total, the
  touch-target floor. Update the kit's SegmentedControl md variant.
- **GLOBAL tint rule deepened (code, 2026-08-12, Emma).** Tints read too
  light everywhere. New rule: `primary-tint` = 12% mix (was 8), `primary-
  select` = 18% (was 14); `royal-tint` is now rule-derived at 12% (was
  literal #EEF0FE); status tints deepened one step — green/bg #D4F0DF,
  amber/bg #FDEFC7, red/bg #FBD3D3. All AA pairs re-verified (green-text
  5.43, amber-text 5.67, red-text 4.73, action-on-select 7.34). Figma
  variables to update: violet/100, violet/150, royal/100, green/100,
  sunflower/100, red/100 — this supersedes the tint values in the
  2026-08-03 a11y levelling (the LEVELLING principle stands; the depth
  moved one step).
- **Button Link variant pinned to 13px (code, 2026-08-12, Emma).** Text
  links no longer inherit the button size ladder — always 13px underlined
  (matches the standing 13px text-link ruling). Update the kit's Button
  Link variant.
- **Button Secondary stroke is violet now (code, 2026-08-12, Emma).**
  1.5px `color-mix(action 32%, white)` replaces the grey `border/interactive`
  stroke — secondaries read as brand actions, not neutral chrome. Update the
  kit's Button Secondary variant (with the 1.5px width from earlier today).
- **NEW Button size `desktop` (code, 2026-08-12, Emma).** 38px min-height,
  14px text, 8x16 padding — the caseworker/admin density default, sitting
  between `md` (44px, resident/touch — the tap-target floor, unchanged
  default) and `sm` (34px, in-card compact). Desktop admin norms run
  32-40px; sm's 13px text whispers on data-heavy screens. Add a Size axis
  (or a Desktop variant) to the kit's Button set.
- **Semantic badge fills levelled to the new depth (code, 2026-08-12,
  Emma).** The four `badge/*` fill+line pairs deepened to match today's
  darker brand/neutral badges: success #CCEED9/#96D5AE, warning
  #FEEDB2/#ECCC5E, danger #FBE0E0/#F0C1C1, info #E5E8FE/#CBD2FD. All text
  pairs re-verified AA (lowest 5.19:1). Dots stay status-only; pill vs
  chip shapes unchanged (principled). Update the kit's badge/* variables.
- **MetricCard trend text (a11y, 2026-08-12).** Trend now uses
  `green/text` / `red/text`, not the vivid steps (13px text on white needs the
  AA step). Update the symbol's trend color.

- ~~Draft `Status=Status3` Transaction row~~ — **removed 2026-08-12** (both the
  variant 221:353 and spec frame 238:397; zero instances existed, and
  ChecklistRow's numbered kind covers it in code).
- **WIC participant screens use retired weights.** `Screen-WIC-Participant`
  sets Geist 600/700 throughout; the ratified type rule is 400/500 only.
  Decide before the screens get coded as a template.
- **Duplicate `Input` set.** The kit has two identical `Input` component sets
  (State: 4 each). One should be deleted so the code↔kit mapping is 1:1.
- **`State=Open` on `Select / Dropdown` is an empty frame.** The open menu was
  built to system rules in code (8px radius, `--ht-shadow-lg`, 40px rows,
  `action/selected` + check on the selected row). Draw it to match, or treat the
  code as the reference.
- **Five stale token values** — see `figma-sync.md` → *Divergences*. The status
  tints and lines in the file predate the accessibility pass.
