**ProgramStatusCard** — resident mobile "program / CTA3" card. Per-tone near-white wash with a matching 1.5px stroke, `--ht-r-card` (8px) radius, `8px 18px 16px` padding. Head row is a 32px tinted circle icon + 17px/500 title; a full-bleed 1px hairline splits it from the 14px muted description.

```jsx
<ProgramStatusCard title="Your application is in review">
  We received everything on July 22. Most reviews finish within 10 business days.
</ProgramStatusCard>
```

Four tones, each stating its own wash, stroke and icon tint: `warning` (default — in review / action pending), `neutral` (a dated obligation, no alarm), `success` (approved), `danger` (denied or expired). The wash tier is deliberate — `-bg` is for chips and inline status fills, not a page-level card.

Use for application status — one per screen, near the top. Don't stack two `warning` cards in one view; warning is the "needs attention" signal. `tone="amber"` is the old name for `warning` and still works.
