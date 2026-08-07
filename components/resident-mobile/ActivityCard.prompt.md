**ActivityCard** — resident mobile reported-activity / checklist card. White card, 1px hairline stroke, 12px radius, 16px padding. Header is a 17px/500 title + 14px muted subtitle (optional 24px r6 rounded-square icon chip, top-aligned); a full-bleed hairline splits it from 14.5px checkbox rows with a 16px r4 box and 10px row gap.

```jsx
<ActivityCard
  icon="ti-briefcase"
  title="Job search"
  subtitle="Reported July 21–27"
  items={[
    { label: 'Applied to 3 postings', done: true },
    { label: 'Attended resume workshop', done: true },
    { label: 'Uploaded interview notes' },
  ]}
/>
```

Pass `value` on an item for a right-aligned figure ("4 hrs"). Nest it inside `HoursSummary` for the hours breakdown pattern. Checked rows go muted, never struck through — this is a resident-facing progress read, not a to-do list.
