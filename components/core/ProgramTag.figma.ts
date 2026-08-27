// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=38-3
// source=design-systems/hearth/components/core/ProgramTag.jsx
// component=ProgramTag
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.findText('Label')
const children = label && label.type === 'TEXT' ? label.textContent : ''

export default {
  example: figma.code`<ProgramTag>${children}</ProgramTag>`,
  imports: ['import { ProgramTag } from "./ProgramTag.jsx"'],
  id: 'program-tag',
  metadata: { nestable: true },
}
