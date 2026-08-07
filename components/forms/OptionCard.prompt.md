**OptionCard** — a large tap-target choice, radio or checkbox. Selected = violet tint + 1px violet stroke. Use for single/multi-select question steps.

```jsx
<OptionCard title="Text message" selected
  description="We'll text this number: (406) 555-0134" onSelect={pick} />
<OptionCard title="Email" description="Best if you check email often" onSelect={pick} />

<OptionCard type="checkbox" title="Food assistance" selected onSelect={toggle} />
<OptionCard type="checkbox" title="Housing support" onSelect={toggle} />
```

`type` switches the round radio indicator for a square checkbox. Description is optional. Drive `selected` from parent state; `onSelect` receives `value`.
