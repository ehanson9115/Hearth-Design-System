// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=63-7
// source=design-systems/hearth/components/core/Eyebrow.jsx
// component=Eyebrow
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.findText('SECTION LABEL')
const children = label && label.type === 'TEXT' ? label.textContent : ''

export default {
  example: figma.code`<Eyebrow level="page">${children}</Eyebrow>`,
  imports: ['import { Eyebrow } from "./Eyebrow.jsx"'],
  id: 'eyebrow-page',
  metadata: { nestable: true },
}
