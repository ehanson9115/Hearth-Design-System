**ProgramStatusCard** — resident mobile "program / CTA3" card. 1.5px amber stroke, 16px radius, `8px 18px 16px` padding. Head row is a 32px amber-tint circle icon + 17px/500 title; a full-bleed 1px hairline splits it from the 14px muted description.

```jsx
<ProgramStatusCard title="Your application is in review">
  We received everything on July 22. Most reviews finish within 10 business days.
</ProgramStatusCard>
```

Use for application status and in-review states — one per screen, near the top. `tone="neutral"` or `"success"` swaps the stroke and icon tint when the state is no longer pending. Do not stack two amber cards in one view; amber is the "needs attention" signal.
