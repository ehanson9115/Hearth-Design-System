**Panel** — the card-with-header-zone. Cake-style header (ink headline + muted subtitle), optional action button. `band` turns the header into the dark ink band — reserved for the ONE live/primary panel per screen.

```jsx
<Panel title="Applicant" icon="ti-id" subtitle="Case 2026-499-929 · opened July 14"
  action="Copy" onAction={copy}>
  <Panel.Body>
    <p>…key/value rows…</p>
  </Panel.Body>
</Panel>

<Panel band live title="Live transcript" meta="73 messages">
  {/* transcript rows */}
</Panel>
```

`Panel.Body` is a padded region for prose; `Panel.Section` is a caps sub-header (add `divide` for a top border). Lay list rows (ChecklistRow, Transcript) directly as children, not inside Body.
