**Transcript** — a live interview transcript. Caseworker turns show in violet; flagged turns follow the outlined status convention — a near-white amber wash with a vivid amber stroke — and carry the flag note inset on the mid tint. Put it inside a `Panel band live` — that dark band is the screen's one ink moment.

```jsx
<Panel band live title="Live transcript" meta="73 messages">
  <Transcript messages={[
    { speaker: 'Caseworker', worker: true, time: '1:53 PM',
      text: 'And what do you pay in rent or mortgage each month?' },
    { speaker: 'Applicant', time: '1:55 PM',
      text: "It's about $2,350 all in — mortgage, taxes, insurance.",
      flag: { text: 'High shelter costs — check deduction', action: 'Add note' } },
  ]} onFlagAction={addNote} />
</Panel>
```

Each message: `speaker`, `worker`, `time`, `text`, optional `flag: {text, action}`.

The two amber steps are doing different jobs and must not be swapped: the turn is a **wash** so a flagged line stays readable in a long scroll, and the note inside it is the **mid tint** so it reads as a distinct band on top. Flag only the turns a caseworker must act on — four flagged turns in one transcript is the same as none.
