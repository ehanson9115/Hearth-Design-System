**AnnouncementBar** — violet-tint bar for promoting or announcing (product news, new features). Not for status — use `NotificationCard` for that.

```jsx
<AnnouncementBar action="See how it works" onAction={open} onDismiss={close}>
  New: excess shelter deductions are now flagged automatically.
</AnnouncementBar>
```

Icon defaults to `ti-speakerphone`. `action` renders a white pill button; pass `onDismiss` for the ✕.
