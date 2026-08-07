**ChecklistRow** — a row for action-item panels. Numbered rows (`number`) are follow-up questions with a royal chip; plain rows are checkbox documents, struck through with a vivid-green check when `done`.

```jsx
<Panel title="Action items" icon="ti-clipboard-list" subtitle="2 questions · 2 documents remaining">
  <Panel.Section>Follow-up questions</Panel.Section>
  <ChecklistRow number={1}>Confirm out-of-pocket medical costs.</ChecklistRow>
  <ChecklistRow number={2}>Request 30 days of pay stubs.</ChecklistRow>
  <Panel.Section divide>Documents to request</Panel.Section>
  <ChecklistRow done>Government-issued photo ID</ChecklistRow>
  <ChecklistRow>Mortgage statement</ChecklistRow>
</Panel>
```

Rows auto-divide with a hairline when stacked. Drive `done` from state for interactive checklists.
