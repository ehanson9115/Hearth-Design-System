**NoticeTimeline** — the record of what the agency sent and when. Collapsible card with a `--ht-head-zone` header (icon + title + count + chevron), then a dotted rail of notices. Each entry is a 15px/500 title, a 13px muted `timestamp · channel` line, and a 14px body. Newest first; index 0 gets the violet dot, the rest are `--ht-grey-4`.

```jsx
<NoticeTimeline items={[
  { title: 'Eligibility approved', when: 'Mar 14 at 09:30 AM', channel: 'Email',
    body: 'Your application for Medicaid and SNAP has been approved. Benefits begin April 1, 2026.' },
  { title: 'Renewal due soon', when: 'Mar 9 at 02:15 PM', channel: 'Portal',
    body: 'Your Medicaid coverage expires May 31. Renew by May 15 to avoid a gap.' },
]} />

**Channels are icon + muted text, never coloured.** Email / SMS / Portal / Mail / Phone infer their icon from the label. Giving each channel its own hue would make colour carry meaning on its own, which the redundancy rule forbids — and three saturated hues in one card reads as three severities. The only colour on the rail is the violet dot marking the newest notice.
