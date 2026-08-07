**SideNav** — the caseworker rail. 220px wide, `--ht-sidebar-bg` with a 1px `--ht-border` right edge. Groups carry an 11px/500 uppercase label; rows are 13px icon + label with an optional trailing count or time. The active row takes the `--ht-action-select` tint at weight 500 and its meta turns action violet.

```jsx
<SideNav
  groups={[
    { label: 'Menu', items: [
      { icon: 'ti-layout-dashboard', label: 'Dashboard', active: true },
      { icon: 'ti-list-check', label: 'My queue', meta: '8' },
      { icon: 'ti-users', label: 'Residents' },
    ]},
    { label: 'Views', items: [
      { icon: 'ti-clock', label: 'Pending review', meta: '8' },
      { icon: 'ti-check', label: 'Completed', meta: '21' },
    ]},
  ]}
  footer={<HighlightCard items={whatsNew} />}
/>
```

One active row per rail. Pair with `DarkHeader` above and put the page `main` beside it in a `grid-template-columns: 220px 1fr`. Counts are plain muted text, never badges — the rail is navigation, not status.
