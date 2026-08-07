**Button** — Hearth's primary interactive control. Use for any commit/navigate action; exactly one `primary` per view.

```jsx
<Button variant="primary" icon="ti-calendar">Book appointment</Button>
<Button variant="secondary">View details</Button>
<Button variant="tint">Save for later</Button>
<Button variant="link" href="#">Learn what's covered</Button>
```

Variants: `primary` (violet solid), `secondary` (white + hairline), `tint` (violet-tint fill), `ghost` (dark ink headers only — white 12% fill), `link` (royal underline). Sizes: `md` (default, 44px min touch target), `sm` (compact/admin). Weight is always 500 — color and shape carry emphasis. Icons take a Tabler class (`icon`, `iconRight`); the host page must load the Tabler Icons webfont.
