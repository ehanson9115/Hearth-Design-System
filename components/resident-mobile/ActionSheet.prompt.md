**ActionSheet** — the OS-style choice list for quick contextual decisions: photo source, remove a document. One rounded group of 20px actions, destructive rows in AA red, then a separate bolder Cancel.

```jsx
<ActionSheet
  actions={[
    { label: 'Take photo', onClick: openCamera },
    { label: 'Choose from library', onClick: openLibrary },
    { label: 'Remove', destructive: true, onClick: remove },
  ]}
  onCancel={close}
/>
```

Renders in-flow; in an app, fix it to the bottom inside your own scrim. Use `BottomSheet` when the decision needs a title + explanation; ActionSheet is for choices that explain themselves.
