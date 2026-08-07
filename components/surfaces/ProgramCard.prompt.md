# ProgramCard

One benefit program: who it's for, what it takes, and at most one CTA.

**Two forms.**
- **Offer** (`ctaLabel` set) — 44px logo slot, title + subtitle, divider, meta rows, full-width Button.
- **Status** (`ctaLabel` omitted) — 32px logo slot, tighter padding, no button. For a program already applied for. Add `tone="pending"` for the sunflower stroke and solid gold logo slot when it's in review.

**Rules.**
- Only the program you're steering toward gets `ctaVariant="primary"`. Every other card in the same list is `secondary` — one primary CTA per view.
- `meta` rows are facts that decide eligibility or effort ("Pregnant people, infants & children under 5", "Apply in about 15 minutes"). Not marketing.
- `logo` is a theme asset — pass the program's real mark as an `<img>`. A Tabler class is the fallback, not the target.
- 16px radius (`--ht-r-xl`) and `--ht-shadow-float`: this card floats on the page tint, unlike the flat white panels inside a dashboard.

```jsx
<ProgramCard
  logo={<img src="./wic.png" alt="" />}
  title="Women, Infants & Children"
  subtitle="Food benefits and nutrition support"
  meta={[
    { icon: 'ti ti-users', label: 'Pregnant people, infants & children under 5' },
    { icon: 'ti ti-clock', label: 'Apply in about 15 minutes' },
  ]}
  ctaLabel="Apply for WIC" onCta={start} />

<ProgramCard tone="pending" logo="ti ti-file-text" title="Application status"
  meta={[{ label: 'We are reviewing your application' }]} />
```
