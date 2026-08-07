**HighlightCard** — the "What's new" promo panel: white card, violet stroke, soft rounded item rows with a trailing arrow. Lives in a sidebar or rail.

```jsx
<HighlightCard items={[
  { label: 'Auto shelter flags', href: '#' },
  { label: 'Interview summaries', href: '#' },
  { label: 'Spanish transcripts', href: '#' },
]} />
```

`title` defaults to "What's new" with a `ti-wand` icon. Provide `items` (each `href` or `onClick`) or custom `children`.
