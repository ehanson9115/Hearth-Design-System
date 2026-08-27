# Tooling files — what they are and why they live here

This package is both a consumable design system and the working copy of a
design-tool sync (claude.ai/design ↔ Figma ↔ code). A few files at the
package root belong to that tooling. They are **inputs consumed in place by
relative path**, not build artifacts — do not gitignore, regenerate, or move
them without updating everything listed below.

| File | What it is | Consumed by |
|---|---|---|
| `_ds_bundle.js` | The compiled component bundle (all 48 families, Babel-compiled, exported on `window.Hearth_5938e8`). The runtime counterpart of `components/**/*.jsx`. | Every specimen card (`components/*/*.card.html`, `foundations/**/*.card.html`) via `../../_ds_bundle.js`, and every template via `templates/*/ds-base.js`. 14 relative references total. |
| `_ds_manifest.json` | The design-system manifest: component index with source paths, specimen-card registry, template registry, and the full token table with values and provenance. | The design-tool loader; paths in it are package-root-relative. |
| `_adherence.oxlintrc.json` | Generated lint rules that enforce the system on consuming projects — token-only colors/spacing, declared component props, Geist-only fonts. | Consuming projects' design-adherence checks (oxlint). |
| `.thumbnail` (root and `templates/*/`) | Captured preview images for the package and each template. | `_ds_manifest.json` thumbnail entries; the design tool's gallery. |
| `templates/*/ds-base.js` | Tiny loader that resolves the package root and injects `styles.css` + `_ds_bundle.js` into a template page. | Each template's `*.dc.html` entry. |

## Storybook

The browsable component reference, deployed to
`https://isapp.github.io/ht-design/hearth/` by
`.github/workflows/design-systems-storybook.yml` (one workflow builds this and
CIVIC's Storybook together; the two share one Pages site).

```bash
pnpm install     # once
pnpm dev         # local dev server on :6007 (CIVIC's uses :6006)
pnpm build       # static build to storybook-static/ (gitignored)
```

- Config lives in `.storybook/`; stories are co-located next to each component
  (`components/<family>/<Name>.stories.jsx`) plus token pages under
  `foundations/`.
- A new component needs a sibling `.stories.jsx` alongside its `.d.ts` and
  `.prompt.md`. Story args come from the `.prompt.md` example; keep argTypes
  minimal (controls for enum/boolean/number props, callbacks and data props
  hidden), matching the Button story.
- `.storybook/preview.jsx` bootstraps `window.Hearth_5938e8` with every
  component, mirroring `_ds_bundle.js`. Components that read that namespace at
  render time (ConfirmDialog's default action row) depend on it.
- Press `d` anywhere in Storybook to toggle dark mode. The toggle flips a
  `.dark` class on the story frame plus the manager chrome; component visuals
  follow the token layer, which is single mode today, so they keep their light
  values until `tokens/` defines dark overrides.

## Editing rules

- Component changes go in `components/**/*.jsx` (with the sibling `.d.ts` and
  `.prompt.md`), then the bundle is recompiled by the design tooling — never
  hand-edit `_ds_bundle.js`.
- Token changes go in `tokens/` (edit `primitives.css` / `palette.css` /
  `roles.css`; `fig-tokens.css` is a verbatim Figma export, provenance only).
- The layout mirrors the standalone repo
  (`ehanson9115/Hearth-Design-System`) and the design-project source of
  truth. Keeping the tree identical is what makes the Figma/code sync
  (`figma-sync.md`, `figma-todo.md`) mechanical — structural changes here
  should land in both places or neither.
