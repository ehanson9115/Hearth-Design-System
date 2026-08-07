**TransactionRow** — one purchase or deposit: small rounded-square icon chip (24px, r6, top-aligned), store + quiet meta line, right-aligned amount over a status word (green "Settled" / amber "Pending"). Stack rows inside a card — hairlines divide automatically.

```jsx
<TransactionRow title="Safeway — WIC purchase" meta="Jul 24 · 3 items"
  amount="$8.15" status="settled" />
<TransactionRow title="Benefit deposit" meta="Jul 1 · 9:42 AM"
  amount="+$391.00" status="pending" icon="ti-building-bank" />
```

Status is a colored word, not a badge — amounts stay the visual anchor. For non-money status lists use `StatusRow`.
