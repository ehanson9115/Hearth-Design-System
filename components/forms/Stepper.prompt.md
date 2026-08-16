**Stepper** — a small count as two 44px tap targets around a tabular value. 8px radius, `--ht-border` stroke, hover brings the violet edge in. Buttons disable at `min`/`max` rather than disappearing.

```jsx
<Input label="How many people are applying today?">
  <Stepper value={n} onChange={setN} min={1} max={12} label="people applying" />
</Input>
```

For household-scale numbers only — roughly 1–20. Past that the tapping cost outweighs the affordance and an `Input` number input is kinder. Always pass `label` so the buttons read as "Increase people applying" rather than "plus".

`fullWidth` stretches the control to its container on mobile forms — buttons at the edges, value centered between (matches the kit's full-width Stepper variants).
