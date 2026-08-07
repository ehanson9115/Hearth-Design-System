# SuccessHero

The confirmation medallion — 92px ring in the tone's tint, 72px disc in its vivid, white glyph — with optional title, description and actions stacked below, centered.

**Tones.** `success` (green) for a real outcome: submitted, approved, verified. `accent` (violet) for a neutral milestone: saved, sent, scheduled. Nothing else gets a medallion — a warning or error is a StatusCard, not a hero.

**Rules.**
- One per screen, at the top of a confirmation view. A medallion mid-page reads as decoration.
- Say what happens next in `description`, not just what happened. "We'll text you within 3 business days" beats "Your application was received."
- Actions go in `children` — one primary Button at most.
- The medallion is fixed at 92/72px. It is the same size on mobile and desktop; don't scale it.

```jsx
<SuccessHero tone="success" title="Application submitted"
  description="We'll text (406) 555-0134 within 3 business days about your WIC appointment.">
  <Button variant="secondary">Back to home</Button>
</SuccessHero>
```
