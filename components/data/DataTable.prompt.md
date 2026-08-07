**DataTable** — hairline rows, hover tint, right-aligned numerics. Compose `Badge` for status cells and `DataTable.Name` for stacked name/ID cells.

```jsx
<DataTable rowKey="id"
  columns={[
    { key: 'resident', header: 'Resident',
      render: r => <DataTable.Name sub={r.id}>{r.name}</DataTable.Name> },
    { key: 'status', header: 'Status',
      render: r => <Badge variant={r.tone}>{r.status}</Badge> },
    { key: 'assigned', header: 'Assigned' },
    { key: 'updated', header: 'Updated', align: 'right' },
  ]}
  rows={residents} />
```

Set `align: 'right'` on numeric/time columns. Keep it a recreation surface — abbreviate long row sets.

**Column widths.** The first column is the identity column and is always the widest — 34% with a 180px floor, so names and stacked case IDs never wrap. Put the name cell first. Set `width` on a column (px number or CSS length) to override; once any column declares a width the table renders a `<colgroup>` and you should size the rest too.
