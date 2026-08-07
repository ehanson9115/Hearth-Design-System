**SegmentedControl** — a pill toggle for a small set of mutually exclusive options (2–4). Grey `--ht-grey-4` track, 3px inset; the selected segment becomes a white thumb with a soft violet-cast lift, violet label, weight 500 → 600.

```jsx
<SegmentedControl value={ans} onChange={setAns}
  options={['Yes', 'No', 'Unsure']} />

<SegmentedControl fullWidth size="md" value={tab} onChange={setTab}
  options={['Transactions', 'Payouts']} />
```

Controlled via `value` + `onChange`. Two shapes of the same control:

- **Inline (default)** — hugs its content at 34px. A filter or an answer sitting next to other things.
- **`fullWidth` + `size="md"`** — equal segments across the container at a 44px touch height. This is the view switcher above a list or a pane; it should match the width of the content it governs.

For larger tab sets use `Pill`. This is the only control in Hearth where a white surface means "selected" — everywhere else white is just the card, so don't borrow the thumb treatment elsewhere.
