**StepNav** — the headline block of a multi-step form step: back link, an optional section eyebrow paired with the "Step N of M" counter on one row, title, hint. Put a `ProgressBar` and your step's fields in `children`.

```jsx
<StepNav step={3} of={5} section="About your household"
  title="Who lives with you?"
  hint="Include everyone who shares meals or bills with you."
  onBack={goBack}>
  <ProgressBar value={60} />
  {/* fields */}
</StepNav>
```

**It renders no action buttons.** Back and Continue go under the step content — put them in a sticky bottom bar that is a *sibling* of `StepNav`, not a child, so the controls stay with the content instead of riding up into the headline. There is no footer slot and no save-and-finish-later link.

`section` is an uppercase `Eyebrow` at the left of the counter row, with the counter pushed right — it names which part of a long form you're in without costing a line above the title. Leave it off short flows. Never render it as a muted clause after the counter; that competes with the title directly beneath.
