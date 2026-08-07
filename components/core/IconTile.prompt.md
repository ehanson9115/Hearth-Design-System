**IconTile** — the tinted chip every standalone glyph sits inside. 24px rounded square by default (radius = size/4); `circle` for round chips; `solid` for a vivid fill with a white glyph. Decorative (`aria-hidden`) — the text beside it carries the meaning.

```jsx
<IconTile icon="ti-stethoscope" />                       — 24px violet tint
<IconTile icon="ti-chart-bar" tone="data" size={40} />   — 40px royal tint, radius 10
<IconTile icon="ti-check" tone="success" solid circle size={44} />
```

Use it in list rows, quick-action rows and evidence cards instead of a bare icon — a bare 14px glyph floats; the tile gives it a consistent seat. Tint is the default; `solid` is for one emphatic chip per card at most. Don't put it inside components that already draw their own tile (RecordCard, StatusRow).
