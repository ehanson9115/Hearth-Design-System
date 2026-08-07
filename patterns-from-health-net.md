# New patterns — Health Net CE prototype (parsed 2026-08-07)

Source: consuming project "Health Net CE Prototype" (Hearth-bound, themed to
Health Net magenta + a royal secondary). Patterns below appear there but have
no Hearth component or documented rule yet. Specs transcribed verbatim.

## Candidates to promote into Hearth

1. **IconTile** — PROMOTED 2026-08-07 (`core/IconTile`) after the MetroPlus CE
   participant app independently invented the same atom (40/44px circle form).
   Original observation: the prototype's most repeated atom (~20×): 24×24, radius 6,
   tint fill + dark-tint glyph at 14px (`royal-tint`/`royal-text` or
   `action-select`/`action`; Hearth equivalent: `--ht-action-select`/`--ht-action`
   and `--ht-royal-tint`/`--ht-royal-text`). It also CSS-overrides StatusRow,
   FileUpload and RecordCard icons down to this size — a sign our default
   icon slots read too big. Candidate: `core/IconTile` (or a documented tile
   spec + smaller default slots).

2. **`[data-divide]` utility** — `[data-divide]>*+*{border-top:1px solid var(--ht-hairline)}`.
   Divider-between-children as a rule; we just hand-rolled the same idea inside
   ChecklistRow. Candidate: ship in `tokens/base.css` and document.

3. **MeterCard** — the hours card: caps select-as-eyebrow (month picker), 40px
   numeral + unit, 6px progress bar, pace dot (8px) + label + requirement,
   icon breakdown rows (hairline-divided), full-width 48px CTA. States: active /
   paused (numeral+fill go muted) / closed month. Strongest new composite;
   nothing in Hearth covers "big number + progress + breakdown".

4. **LinkRowList** — card of tappable rows: IconTile + 15px/500 label +
   right chevron, 14px vertical padding, hairline dividers. Denser sibling of
   `EntryCard` for 3+ navigation rows (member home quick actions).

5. **FilterChips** — 36px pill buttons, 13px/500; selected = `action-wash`
   fill + `action` border + `primary-dark` text; idle = surface + border +
   muted. Used with a result-count line beneath.

6. **TagPill** — 11.5px/500 pill, 3px×10px padding: category (royal-tint /
   royal-text) and highlight ("Top match": badge-warning bg, amber-icon text,
   6px amber-vivid dot). Smaller and quieter than `Badge`.

7. **NumberedSteps** — "What happens next": 24px circled numbers
   (royal-tint fill, royal-text 12px/500) + 13.5px text rows, data-divide'd.
   Overlaps ChecklistRow's `number` chip — could be a ChecklistRow variant
   (`tone="quiet"`) rather than a new component.

8. **StatBand (ink)** — full-width ink-surface panel, 12px radius, 28×32
   padding, 3 columns split by `rgba(255,255,255,0.14)` rules; 38px/500 white
   numeral + 13px on-ink-muted caption. Deck/overview-grade stat display.

9. **Inline underline link** — `border-bottom:1px solid currentColor`,
   13px/500, no text-decoration. Used everywhere as the quiet tertiary action;
   Hearth has no documented link-as-action style.

## Worth documenting (not components)

- **Theming recipe works.** The whole re-skin is one `:root` block re-pointing
  `--ht-primary`, the royal family, greys and ink — derived tints carried the
  brand hue automatically, exactly as designed. Worth a short "Theming" section
  in readme.md with this block as the reference example.
- **Demo rail** — sticky top strip (logo + label + SegmentedControl surface
  switcher) for multi-surface prototypes. Good convention to note for templates.
- **OS-mock entry screens** (push notification lockscreen, SMS thread) — demo
  scaffolding, not system UI. Leave out.
- **Chat thread** (bubbles: out = action-wash + primary-stroke, in = surface +
  hairline; 14px radius) + inbox rows w/ unread dot — promote only if a second
  project needs messaging.
- **FAB center slot in bottom nav** — 56px raised circle, −26px margin, 3px
  white ring, action fill + labeled. Candidate `MobileBottomNav` `cta` prop.

## Compatibility note

The prototype's `_ds` snapshot predates the 2026-08-07 `YesNo` →
`SegmentedYesNo` rename — it mounts `Hearth_5938e8.YesNo` (8×, screener). Its
snapshot still works; on its next DS refresh those mounts need the new name.
