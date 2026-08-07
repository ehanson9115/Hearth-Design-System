**ProgressBar** — royal fill on a royal-tint track (data color in a bar context). Use for multi-step form progress.

```jsx
<ProgressBar value={62} step={3} of={5} label="About your household" />
<ProgressBar value={40} />
```

`value` is a 0–100 percentage. Pass `step`/`of` for the "Step 3 of 5" caption, `label` for trailing text.
