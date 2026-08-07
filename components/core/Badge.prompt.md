**Badge** — status dot-pills and tag pills. Status uses a vivid dot + label so color never signals meaning alone.

```jsx
<Badge variant="success">Approved</Badge>
<Badge variant="warning">Pending review</Badge>
<Badge variant="danger">Over income limit</Badge>
<Badge variant="info">In progress</Badge>
<Badge variant="brand">High relevance</Badge>
<Badge variant="neutral">Standard</Badge>
<Badge variant="outline">60+ / Disabled</Badge>
```

Status variants (`success`/`warning`/`danger`/`info`) are outlined tinted pills with a leading dot. Tag variants (`brand`/`neutral`/`outline`) are plain. Override the dot with `dot={false}`/`dot`.
