**NotificationCard** — inline alert, outlined. The saturated hue is the 1px stroke; the fill is a near-white wash; the icon and AA-contrast text carry the meaning. Because the fill barely tints, several of these can stack in a feed without any one shouting.

```jsx
<NotificationCard variant="info" title="Your renewal is coming up">
  Renew by August 15 to keep your coverage.
</NotificationCard>
<NotificationCard variant="success" title="Application submitted">
  We'll send you a message within 3 business days.
</NotificationCard>
<NotificationCard variant="warning" title="One document still needed">
  Upload proof of address to finish your application.
</NotificationCard>
<NotificationCard variant="danger" compact title="Over income limit">
  Gross $4,000/mo vs. $3,380/mo threshold. Preliminary only.
</NotificationCard>
```

`info` is **the product's primary hue, not a fixed violet** — stroke `--ht-action`, fill `--ht-action-wash`, both derived from `--ht-primary` by `color-mix`. Re-point primary to blue and info cards go blue with it. Royal stays reserved for data (progress, charts, numeric chips); an informational notice is not data. `compact` only tightens the box; the colors are identical.

The stroke is the one place a vivid status hue is allowed to run at full strength across a large element, and it works because it is 1px. Do not fill one of these cards with its `--ht-*-bg` mid tint — that is the badge/icon-circle step, and at card scale it reads as an emergency. The `--ht-*-wash` fills exist for exactly this.

Default icons per variant: info `ti-info-circle`, success `ti-circle-check`, warning `ti-alert-triangle`, danger `ti-circle-x` — override with `icon`. Amber icons use `--ht-amber-icon` (deep gold), never vivid amber: yellow never clears 3:1 on a light fill. Requires the Tabler webfont on the host page.
