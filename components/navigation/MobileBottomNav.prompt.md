**MobileBottomNav** — the resident app's bottom tab bar. 48px targets, labels always visible (never icon-only), active tab in violet, optional red count badge.

```jsx
<MobileBottomNav items={[
  { label: 'Home', icon: 'ti-home', active: true, href: '#' },
  { label: 'Appointments', icon: 'ti-calendar', href: '#' },
  { label: 'Benefits', icon: 'ti-heart', href: '#' },
  { label: 'Messages', icon: 'ti-mail', badge: 2, href: '#' },
]} />
```

Column count adapts to the number of items. Requires the Tabler webfont.
