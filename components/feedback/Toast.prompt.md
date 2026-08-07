**Toast** — a brief ink confirmation for something that just worked: "Document uploaded." Green check + white text on the dark ink surface.

```jsx
<Toast>Document uploaded</Toast>
<Toast check={false}>Saved</Toast>
```

Keep the message to a few words — it confirms, it doesn't explain. Renders in-flow; in an app, position it fixed near the bottom and dismiss it after ~3s. For anything needing action or detail, use `NotificationCard` instead.
