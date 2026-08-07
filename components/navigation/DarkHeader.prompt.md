**DarkHeader** — the admin app's dark ink top bar. Admin only (resident app stays light). The violet logo chip is the single brand moment; header buttons are ghost (white 12% fill), never violet-on-ink.

```jsx
<DarkHeader name="Healthy Together" role="Caseworker"
  nav={[
    { label: 'Queue', active: true, href: '#' },
    { label: 'Residents', href: '#' },
    { label: 'Reports', href: '#' },
  ]}
  action="Send invite" onAction={invite} />
```

Logo defaults to a `ti-heart` chip (no logo file exists). Counts as an ink moment — don't also add a second dark band on the same screen unless it's a live panel.
