**FileUpload** — resident document capture. The default is a stacked set of **capture-source buttons** — Camera / Photos / Files — each a white surface with a 2px dashed accent border (never a grey fill). This is the rule for mobile document upload. Below the buttons, uploaded files list as rows with the vivid-green uploaded state.

```jsx
<FileUpload
  hint="A photo of the VOC card or letter for this person."
  onChoose={(source) => pick(source)}
  files={[{ name: 'water-bill-june.jpg', size: '1.2 MB', status: 'Uploaded' }]}
  onRemove={remove} />
```

- `sources` defaults to the built-in Camera / Photos / Files set. Pass your own array to relabel, or `sources={null}` to fall back to a single "Choose file" dropzone (desktop / drag).
- `onChoose(source)` receives the tapped source's `value`.
- `hint` renders a helper line above the buttons; `accept` sets the dropzone helper line in fallback mode.
- Don't wrap this in its own bordered card when it already sits inside one — render it flush (no container-in-container).
