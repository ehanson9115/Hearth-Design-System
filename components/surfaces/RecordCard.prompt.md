**RecordCard** — one reported item (a job, an address, a household member) laid out for confirm-or-correct review. White card, 1px hairline, 12px radius, 16px padding. A 40px violet-tint rounded-square tile sits beside a 17px/500 title + 14px muted subtitle; icon-led 14px detail rows follow; a full-bleed hairline separates the confirm checkbox and the Edit / Remove actions.

```jsx
<RecordCard
  icon="ti-building"
  title="Casey's General Stores"
  subtitle="Cashier / Team Member"
  details={[
    { icon: 'ti-calendar', text: 'Jun 15, 2024 – Nov 2, 2025' },
    { icon: 'ti-currency-dollar', text: '$1,240.00 / bi-weekly' },
    { icon: 'ti-alert-circle', text: 'Reason for leaving: Laid off' },
  ]}
  confirmed={ok} onConfirm={setOk} onEdit={edit} onRemove={remove} />
```

Built for renewal and change-report flows, where the resident is checking work we already did rather than entering it fresh. The checkbox turns green because it means *verified*, not *selected* — green is status meaning only. Remove is the one red element; keep it a text action, never a red button. Omit `onConfirm` and the footer becomes actions only.
