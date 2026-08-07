**TopNav** — the mobile header for multi-step flows: back on the left, "Step x of y" centered in royal, "Save & exit" on the right, and a 4px royal progress rail along the bottom edge.

```jsx
<TopNav step={6} of={23} onBack={goBack} onAction={saveAndExit} />
<TopNav step={6} of={23} saved />
```

Set `saved` after a save succeeds — the action flips to a green check + "Saved". Progress defaults to `step/of`; pass `progress` (0–100) to override. For desktop admin, use `DarkHeader`; for resident tabs, `MobileBottomNav`.
