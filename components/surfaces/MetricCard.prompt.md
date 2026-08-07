**MetricCard** — a glance-layer stat: big tabular number + quiet label, optional trend. Grid several across a dashboard.

```jsx
<MetricCard value="8" label="Pending review" />
<MetricCard value="3" label="Waiting on documents" variant="warn" />
<MetricCard value="21" trend="4" trendDir="up" label="Completed this week" />
```

`variant="warn"` tints the number amber-brown for attention. The value stays neutral/data-colored — never a status color.
