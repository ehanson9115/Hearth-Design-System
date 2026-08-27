// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=34-13
// source=design-systems/hearth/components/feedback/SuccessHero.jsx
// component=SuccessHero
import figma from 'figma'
const instance = figma.selectedInstance

const tone = instance.getEnum('Tone', {
  Success: 'success',
  Accent: 'accent',
})

export default {
  example: figma.code`<SuccessHero tone="${tone}" />`,
  imports: ['import { SuccessHero } from "./SuccessHero.jsx"'],
  id: 'success-hero',
  metadata: { nestable: true },
}
