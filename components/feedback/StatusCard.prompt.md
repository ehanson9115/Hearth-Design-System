**StatusCard** — a centered white card for whole-screen states: success, loading (spinner), empty, error. Copy invites the next action; pass a `Button` as `action`.

```jsx
<StatusCard variant="success" title="Application submitted">
  We sent a copy to your email. You don't need to do anything else today.
</StatusCard>

<StatusCard variant="loading" title="Checking what you qualify for">
  This takes about 10 seconds. Don't close the app.
</StatusCard>

<StatusCard variant="empty" icon="ti-calendar" title="No appointments yet"
  action={<Button>Book appointment</Button>}>
  When you book one, it will show up here with reminders.
</StatusCard>
```

Default icons: success `ti-check`, empty `ti-inbox`, error `ti-alert-circle`; loading renders the spinner. Pair with `Skeleton` for content placeholders.

The `action` slot renders its child full-width (it passes `fullWidth` to the `Button` for you, so `<Button>Book appointment</Button>` is enough) — one unmistakable next step at the 44px `md` height. Pass `fullWidth={false}` explicitly to opt out. Use a single `Button`; if you need a secondary escape, put a plain text link below the card rather than a second button.
