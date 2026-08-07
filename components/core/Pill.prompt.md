**Pill** — a single tab/filter pill. Compose several in a flex row; mark the current one `active` (violet-select fill, weight 500).

```jsx
<div style={{ display: 'flex', gap: 8 }}>
  <Pill active>Home</Pill>
  <Pill>Appointments</Pill>
  <Pill>Benefits</Pill>
  <Pill>Messages</Pill>
</div>
```

Use `as="a"` with `href` for link navigation. For an exclusive toggle of 2–4 short options use `SegmentedControl`.
