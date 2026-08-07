# Project instructions — Hearth

## /design-sync command
When the user types `/design-sync` (or asks to sync design and code), run this
procedure in one turn without asking questions:

1. **Read the receipts first**: `figma-sync.md` (last sync state, divergence
   rulings), `figma-todo.md` (Figma-side work outstanding), `readme.md` →
   *Kit ↔ code* sections.
2. **Get the current kit**: use the attached/updated `Hearth — HT Design
   System.fig` if one is attached this session; otherwise ask the user to
   attach the latest export — that's the one allowed question.
3. **Compare, honoring the rulings**:
   - Figma is source of truth for anything the file states and the project lacks.
   - NEVER sync back the documented divergences (accessibility passes) listed
     in `figma-sync.md` → *Divergences* — those flow code → Figma.
   - Check the 5 pending components (`FieldGroup`, `Stepper`, `NoticeTimeline`,
     `SideNav`, `RecordCard`): if symbols now exist, verify them against the
     specs in `figma-todo.md`, reconcile, and remove from the to-do.
4. **Apply changes**: tokens into `tokens/`, new/changed components into
   `components/` (with `.d.ts` + `.prompt.md` + `@kit` header), card updates.
5. **Write the receipt**: update `figma-sync.md` with a new dated section
   (move the old one under a history heading), refresh `figma-todo.md` and
   readme's kit-mapping tables, then run the design-system check and fix
   anything it reports.

## Standing rulings (do not re-litigate)
- Code names match kit vocabulary exactly (`Input`, `SegmentedYesNo`).
- The five components above are intentional additions, not drift.
- Accessibility-pass token values (status tints/lines, red-wash, head-zone,
  derived violet tints) stay as coded; Figma catches up.
