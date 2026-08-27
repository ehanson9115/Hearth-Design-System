**DarkHeader** — the admin app's dark ink top bar. Admin only (resident app stays light). The brand mark is the single brand moment; header buttons are ghost (white 12% fill), never violet-on-ink.

```jsx
<DarkHeader name="Healthy Together" role="Caseworker"
  nav={[
    { label: 'Queue', active: true, href: '#' },
    { label: 'Residents', href: '#' },
    { label: 'Reports', href: '#' },
  ]}
  action="Send invite" onAction={invite} />
```

Logo defaults to `HTMark` — the real Healthy Together product icon, inline SVG so it stays crisp at 26px. It carries its own white ground, so it replaces the violet chip rather than sitting on it. Another brand passes its own node as `logo`; `logoIcon` still takes a Tabler glyph and restores the solid-violet chip. Counts as an ink moment — don't also add a second dark band on the same screen unless it's a live panel.
