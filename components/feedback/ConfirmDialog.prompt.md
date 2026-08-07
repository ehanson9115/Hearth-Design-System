**ConfirmDialog** — the desktop decision surface for irreversible caseworker actions: deny an application, close a case, delete a document. 420px card on a 45% ink scrim, tinted 40px icon, 17px/500 title, 14px muted body, right-aligned Cancel + Confirm.

```jsx
<ConfirmDialog
  tone="danger"
  title="Deny this application?"
  confirmLabel="Deny application"
  onConfirm={deny} onCancel={close}>
  Bob Stoops will be notified today and the case closes. Reopening requires a supervisor.
</ConfirmDialog>
```

**Name the consequence, not the action** — the body says who is affected and whether it can be undone; the confirm button repeats the verb ("Deny application", never "OK"). **No red fill, ever.** `tone="danger"` gives a white confirm button with red text and a red hairline; `warning` and `default` keep the primary violet. A solid red button reads as the recommended action — the destructive path should be available, not advertised. Mobile uses `BottomSheet` instead — never this. Pass `inline` to render without the scrim.
