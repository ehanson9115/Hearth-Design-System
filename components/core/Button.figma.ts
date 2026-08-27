// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=15-14
// source=design-systems/hearth/components/core/Button.jsx
// component=Button
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const variant = instance.getEnum('Style', {
  Primary: 'primary',
  Secondary: 'secondary',
  Tint: 'tint',
})

export default {
  example: figma.code`<Button variant="${variant}">${label}</Button>`,
  imports: ['import { Button } from "./Button.jsx"'],
  id: 'button',
  metadata: { nestable: true },
}
