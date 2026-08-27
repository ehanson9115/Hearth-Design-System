// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=168-26
// source=design-systems/hearth/components/data/Transcript.jsx
// component=Transcript
import figma from 'figma'
const instance = figma.selectedInstance

const speaker = instance.findText('speaker')
const body = instance.findText('body')
const noteText = instance.findText('note-text')
const noteAction = instance.findText('note-action')

export default {
  example: figma.code`
    <Transcript
      messages={[
        {
          speaker: "${speaker && speaker.type === 'TEXT' ? speaker.textContent : 'Caseworker'}",
          worker: true,
          time: '1:53 PM',
          text: '${body && body.type === 'TEXT' ? body.textContent : 'And what do you pay in rent or mortgage each month?'}',
        },
        {
          speaker: 'Applicant',
          time: '1:55 PM',
          text: "It's about $2,350 all in: mortgage, taxes, insurance.",
          ${noteText && noteText.type === 'TEXT' ? figma.code`flag: { text: "${noteText.textContent}", action: "${noteAction && noteAction.type === 'TEXT' ? noteAction.textContent : 'Add note'}" },` : ''}
        },
      ]}
    />
  `,
  imports: ['import { Transcript } from "./Transcript.jsx"'],
  id: 'transcript',
  metadata: { nestable: true },
}
