**StepNav** — the scaffold for a multi-step form step: back link, "Step N of M · Section" label, title, hint, and a footer control row. Put a `ProgressBar` and your step's fields in `children`.

```jsx
<StepNav step={3} of={5} section="About your household"
  title="Who lives with you?"
  hint="Include everyone who shares meals or bills with you."
  onBack={goBack}
  footer={<>
    <Button variant="secondary">Back</Button>
    <StepNav.Spacer />
    <StepNav.SaveLater onClick={save} />
    <Button variant="primary">Continue</Button>
  </>}>
  <ProgressBar value={60} />
  {/* fields */}
</StepNav>
```

`StepNav.Spacer` pushes the primary CTA right; `StepNav.SaveLater` is the underlined royal link.
