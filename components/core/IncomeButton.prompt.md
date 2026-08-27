**IncomeButton** — the income-verification handoff. "Continue with" plus a partner **wordmark** (Truv or Argyle), not a text label.

```jsx
<IncomeButton provider="truv" onClick={startTruv} />
<IncomeButton provider="argyle" onClick={startArgyle} />
```

44px tall and `--ht-r-card` radius, so it stacks flush with a `Button` `md`. The fill is `--ht-action-hover` — deliberately a step deeper than a primary Button: this sends the resident to a third party, so it should not read as the step's own CTA. Stack one per provider the state has enabled.

The wordmarks are inline SVG using `currentColor`, so a disabled button greys the logo with the label instead of leaving a white mark stranded on grey. The accessible name is built from the label *and* the provider — the wordmark is artwork, so without that a screen reader would announce two identical "Continue with" buttons.

Don't retitle it to "Verify income with…" — the partner name is the whole point of the handoff, and the wordmark carries the trust.
