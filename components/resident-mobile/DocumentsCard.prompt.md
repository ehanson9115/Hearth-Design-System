**DocumentsCard** — resident mobile documents card. White card, 1px hairline stroke, 12px radius, 16px padding. Header row is a 17px/500 title with a right-aligned amber dot badge (12.5px) for the outstanding count; 14px muted subtitle beneath. Doc rows pair a 24px r6 rounded-square icon chip (top-aligned — never a large circle) with a 15px/500 title + 13px muted subtitle. A full-width 44px, 8px-radius primary button closes the card.

```jsx
<DocumentsCard
  badge="3 missing"
  subtitle="We still need these before your review can finish."
  docs={[
    { title: 'Photo ID', subtitle: 'Added July 18' },
    { title: 'Proof of income', subtitle: 'Last 30 days of pay stubs', missing: true },
    { title: 'Proof of address', subtitle: 'Utility bill or lease', missing: true },
  ]}
  onCta={handleUpload}
/>
```

`missing` rows get the amber-tint chip. The CTA is the one primary button on the screen — 44px is the resident-app minimum hit target, don't shrink it.
