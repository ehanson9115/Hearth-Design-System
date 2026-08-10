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
