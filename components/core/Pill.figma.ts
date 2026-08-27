// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=157-15
// source=design-systems/hearth/components/core/Pill.jsx
// component=Pill
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.findText('Label')
const children = label && label.type === 'TEXT' ? label.textContent : ''
const active = instance.getEnum('State', {
  Default: false,
  Active: true,
})

export default {
  example: figma.code`<Pill active={${active}}>${children}</Pill>`,
  imports: ['import { Pill } from "./Pill.jsx"'],
  id: 'pill',
  metadata: { nestable: true },
}
