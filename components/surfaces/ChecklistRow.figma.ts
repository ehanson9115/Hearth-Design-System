// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=161-19
// source=design-systems/hearth/components/surfaces/ChecklistRow.jsx
// component=ChecklistRow
import figma from 'figma'
const instance = figma.selectedInstance

const kind = instance.getEnum('Kind', {
  Checkbox: 'checkbox',
  Done: 'done',
  Numbered: 'numbered',
})
const text = instance.findText('Text')?.textContent
const number = kind === 'numbered' ? instance.findText('number')?.textContent : undefined

export default {
  example: figma.code`
    <ChecklistRow${number ? ` number={${number}}` : ''}${kind === 'done' ? ' done' : ''}>
      ${text}
    </ChecklistRow>
  `,
  imports: ["import { ChecklistRow } from './ChecklistRow.jsx'"],
  id: 'checklist-row',
  metadata: { nestable: true },
}
