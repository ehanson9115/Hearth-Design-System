**Input** — a complete labelled control (input / textarea / select) with hint, error, and optional character counter. Use for every form input so spacing and error treatment stay consistent.

```jsx
<Input label="Date of birth" placeholder="MM/DD/YYYY"
  hint="We use this to check which programs you qualify for." />

<Input as="select" label="Preferred language"
  options={['English', 'Español', 'Tiếng Việt']} />

<Input as="textarea" label="Anything else we should know?"
  maxLength={500} showCount />

<Input label="Phone number" defaultValue="406-555"
  error="Enter all 10 digits, like (406) 555-0134." />
```

6px radius, violet focus ring, red-pip fix-it errors. Label 6px above, hint 8px below. All extra props pass through to the control (`type`, `placeholder`, `onChange`, `inputMode`, …).
