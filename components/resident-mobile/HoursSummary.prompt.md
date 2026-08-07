**HoursSummary** — resident mobile expandable section card. Section header (17px/500 title + 14px muted subtitle) with an optional right-aligned total and a chevron; nested `ActivityCard`s stack beneath at 10px gap. The header itself is the toggle.

```jsx
<HoursSummary subtitle="Week of July 21" total="18 of 20 hrs">
  <ActivityCard icon="ti-briefcase" title="Job search" subtitle="6 hrs reported"
    items={[{ label: 'Applied to 3 postings', done: true, value: '4 hrs' }]} />
  <ActivityCard icon="ti-school" title="Training" subtitle="12 hrs reported"
    items={[{ label: 'Certificate course', done: true, value: '12 hrs' }]} />
</HoursSummary>
```

Section headers sit on the page background, not on a card — the nested activity cards supply the white surfaces. Pass `collapsible={false}` for an always-open breakdown.
