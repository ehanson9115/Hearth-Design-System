**EntryCard** — a violet-tint doorway into a flow: white icon circle, title, quiet subtitle, trailing →. The tint says "start here", so keep at most one or two per screen.

```jsx
<EntryCard icon="ti-calendar-repeat" title="Recertification"
  subtitle="Your certification ends July 12, 2026" onClick={start} />
<EntryCard href="/appointments" icon="ti-calendar-plus"
  title="Book an appointment" subtitle="Next opening: Tuesday" />
```

It's an invitation, not a status — pending/approved states belong on `StatusRow` or `NotificationCard`. Same anatomy as `AnnouncementBar`, but it navigates instead of announcing.
