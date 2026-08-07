# Select

The bare 48px dropdown control: grey-1 fill, 6px radius, `--ht-border` stroke, 15px value text, 13px side padding.

**Use with Input.** A labelled form question is `<Input label=… >` around a `Select` — Input owns the label, hint and error message; Select owns the control and the menu. Standalone Select belongs in toolbars and filter rows where the surrounding UI already says what it filters.

**Rules.**
- Placeholder sits in `--ht-text-subtle` and reads as an instruction ("Select state…"), never as a fake value.
- `invalid` draws the red stroke only. The message is Input's job — a red border with no sentence tells the resident nothing.
- Selected option carries `--ht-action-select` **plus** a check glyph: purple-for-selected never signals alone.
- Keyboard is part of the contract: Enter/Space/↓ opens, ↑↓ moves, Enter picks, Esc closes, click-outside dismisses. Don't reimplement it with a div.
- Over ~12 options, a searchable pattern beats a scrolling menu — Select caps at 264px and starts scrolling.

```jsx
<Input label="State">
  <Select options={['Montana', 'Idaho', 'Wyoming']} value={state} onChange={setState}
    placeholder="Select state…" />
</Input>
```
