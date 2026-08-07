**BottomSheet** — a focused decision without leaving the screen: grab handle, one 17px question-title, muted body, stacked actions (primary on top, quiet dismiss under it).

```jsx
<BottomSheet title="Cancel this appointment?"
  actions={<>
    <Button variant="primary" fullWidth>Yes, cancel it</Button>
    <Button variant="link">Keep appointment</Button>
  </>}>
  Tuesday, July 28 at 10:30 AM. You can book a new time right after.
</BottomSheet>
```

Renders in-flow (cards, phone-frame mocks); in a real app, fix it to the bottom inside your own scrim. One decision per sheet — if it needs a form, use a full step instead.
