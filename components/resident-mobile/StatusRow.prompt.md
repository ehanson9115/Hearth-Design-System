**StatusRow** — one item's standing at a glance: violet icon tile, title, quiet date line, trailing status badge. Stack rows inside a card — hairlines divide automatically.

```jsx
<StatusRow icon="ti-school" title="Annual training"
  subtitle="Completed Apr 28, 2026"
  badge={<Badge variant="success">Complete</Badge>} />
<StatusRow icon="ti-school" title="Recertification"
  subtitle="Due Aug 15, 2026"
  badge={<Badge variant="warning">Scheduled</Badge>} />
```

The badge is a node — compose `Badge` so status stays dot + AA text. Use `ChecklistRow` for to-dos and `ActivityList` for caseworker feeds; this row is for status-at-a-glance lists.
