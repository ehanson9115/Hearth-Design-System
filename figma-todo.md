# Figma to-do — 6 components to draw (+ file fixes below)

_Checked at the 2026-08-07 sync: none have symbols yet. `IconTile` added later the same day._

These five exist in code and ship in the templates, but the Figma file has no
symbol for them. They are confirmed intentional (see `readme.md` → *Intentional
additions*); the gap is Figma-side. Specs below are transcribed from the built
components so the Figma work is mechanical.

All five use the existing Theme variables — no new tokens needed. Geist
throughout; weights 400/500 only.

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
- **MetricCard trend text (a11y, 2026-08-12).** Trend now uses
  `green/text` / `red/text`, not the vivid steps (13px text on white needs the
  AA step). Update the symbol's trend color.

- **Finish or remove the draft `Status=Status3` Transaction row variant**
  (node 221:353, added since 2026-08-03). It's a numbered-tile row but the
  variant name is the autogenerated "Status3" and the numeral is off-token
  (14px/400 black). If numbered rows are wanted, name the variant and use
  `text/heading` + the 24px tile at radius 6; note `ChecklistRow`'s numbered
  kind already covers this in code.
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
