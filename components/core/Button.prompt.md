**Button** — Hearth's primary interactive control. Use for any commit/navigate action; exactly one `primary` per view.

```jsx
<Button variant="primary" icon="ti-calendar">Book appointment</Button>
<Button variant="secondary">View details</Button>
<Button variant="tint">Save for later</Button>
<Button variant="link" href="#">Learn what's covered</Button>
```

Variants: `primary` (violet solid), `secondary` (white + hairline), `tint` (violet-tint fill), `ghost` (dark ink headers only — white 12% fill), `link` (royal underline). Sizes: `md` (default, 44px min touch target — resident/mobile surfaces), `desktop` (38px — the caseworker/admin default; desktop-density screens should use this), `sm` (34px — compact in-card actions). Weight is always 500 — color and shape carry emphasis. Icons take a Tabler class (`icon`, `iconRight`); the host page must load the Tabler Icons webfont.

`disabled` greys the control rather than fading it: filled variants (`primary`, `tint`) drop to `--ht-disabled-bg` with muted text, bordered variants (`secondary`, `danger`) keep the white face and grey the stroke, `ghost` stays white-alpha for dark ink, `link` greys the text and underline. A disabled `href` renders a `<button>`, not an anchor. Always name the blocker in adjacent text — a silent disabled button is a dead end.
