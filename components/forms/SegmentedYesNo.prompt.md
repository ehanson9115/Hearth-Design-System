**SegmentedYesNo** — a binary question as two equal 44px tap targets. Neither side starts selected; the chosen side gets the violet tint + 1px stroke.

```jsx
const [smokes, setSmokes] = React.useState(null);

<SegmentedYesNo value={smokes} onChange={setSmokes} />
```

Drive `value` (`'yes' | 'no' | null`) from parent state; put the question in a normal field label above it. Use for true binary questions only — three or more choices is `OptionCard`; inline filters are `SegmentedControl`.

**No radio indicator here — ratified 2026-08-01 as the one exception to the redundant-cue rule.** With exactly two options side by side, the pair is read as a unit and the filled side is unambiguous even in greyscale. Add the indicator back and it starts to look like a two-item `OptionCard` list, which is a different control. Three or more options do need the indicator — that is what `OptionCard` is for.
