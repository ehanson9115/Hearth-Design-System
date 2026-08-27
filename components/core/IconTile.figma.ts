// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=363-1585
// source=design-systems/hearth/components/core/IconTile.jsx
// component=IconTile
import figma from 'figma'
const instance = figma.selectedInstance

const tone = instance.getEnum('Tone', {
  Action: 'action',
  Data: 'data',
  Success: 'success',
  Warning: 'warning',
  Danger: 'danger',
})
const solid = instance.getEnum('Solid', {
  false: false,
  true: true,
})
const circle = instance.getEnum('Shape', {
  Square: false,
  Circle: true,
})
const size = instance.getEnum('Size', {
  '24': 24,
  '40': 40,
})

export default {
  example: figma.code`
    <IconTile
      icon="ti-stethoscope"
      ${tone !== 'action' ? figma.code`tone="${tone}"` : ''}
      ${solid ? 'solid' : ''}
      ${circle ? 'circle' : ''}
      ${size !== 24 ? figma.code`size={${size}}` : ''}
    />
  `,
  imports: ['import { IconTile } from "./IconTile.jsx"'],
  id: 'icon-tile',
  metadata: { nestable: true },
}
