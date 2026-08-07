**ActivityList** — a recent-activity feed: initials avatar + event line + quiet timestamp, optional trailing `Badge`. Lives inside a `Panel`.

```jsx
<ActivityList items={[
  { name: 'Bob Stoops', text: 'interview completed', when: '2:04 PM',
    badge: <Badge variant="warning">Pending review</Badge> },
  { name: 'Maria Alvarez', text: 'uploaded proof of address', when: '1:38 PM' },
  { name: 'Sam Ortiz', text: 'approved, notice sent', when: '11:20 AM' },
]} />
```

Uses the `Avatar` primitive. `text` renders after an em dash; the name is emphasized.
