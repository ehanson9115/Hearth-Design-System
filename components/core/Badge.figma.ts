// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=15-27
// source=design-systems/hearth/components/core/Badge.jsx
// component=Badge
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
// Code has no solid-fill background variant; "Solid Success" is approximated
// as the closest real combination (success tone + drawn checkmark).
const tone = instance.getEnum('Tone', {
  Success: 'success',
  Danger: 'danger',
  Info: 'info',
  Warning: 'warning',
  Neutral: 'neutral',
  'Solid Success': 'success',
})
const check = instance.getEnum('Tone', {
  Success: false,
  Danger: false,
  Info: false,
  Warning: false,
  Neutral: false,
  'Solid Success': true,
})

export default {
  example: figma.code`<Badge variant="${tone}" ${check ? 'check' : ''}>${label}</Badge>`,
  imports: ['import { Badge } from "./Badge.jsx"'],
  id: 'badge',
  metadata: { nestable: true },
}
