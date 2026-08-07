**FieldGroup** — related questions contained on one white surface. 12px radius, 22px padding, 1px hairline, 20px row rhythm. It is a real `<fieldset>` with a `<legend>`, so screen readers announce the group name with every field inside it.

```jsx
<FieldGroup legend="How can we reach you?"
  description="We only use this to send updates about your application.">
  <Input label="Phone number" placeholder="(406) 555-0143" inputMode="tel" />
  <Input label="Email" placeholder="you@example.com" type="email" />
</FieldGroup>
```

Use it whenever two or more questions belong to one topic — contact details, household members, income sources. A form of eight loose fields reads as eight tasks; the same eight in three groups reads as three.

**It re-tints the controls inside it.** The group sets `--ht-field-fill` to `--ht-grey-1` and `--ht-field-max` to `none`, so its fields go full width with a tinted fill instead of white-on-white — an input has to be darker than the surface it sits on to read as an input. Nothing else needs to change on the fields; drop them in as usual.

`flush` drops the hairline for the borderless look, letting the page tint alone do the containing. Do not nest field groups, and do not put a `Panel` inside one — a group is the innermost container.
