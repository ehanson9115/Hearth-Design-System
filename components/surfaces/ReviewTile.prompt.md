**ReviewTile** — a "review your answers" group before submit: header zone with an Edit link + colon-format key/value rows. Missing values show in danger red.

```jsx
<ReviewTile title="About you" editHref="#" items={[
  { label: 'Name', value: 'Maria Alvarez' },
  { label: 'Date of birth', value: 'March 28, 1986' },
]} />

<ReviewTile title="Documents" onEdit={edit} items={[
  { label: 'Proof of address', value: 'water-bill-june.jpg' },
  { label: 'Proof of income', value: 'Not added yet', missing: true },
]} />
```

Pass `editHref` (link) or `onEdit` (handler). `missing` flags an incomplete value.
