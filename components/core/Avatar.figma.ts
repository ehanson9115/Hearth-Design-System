// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=362-20
// source=design-systems/hearth/components/core/Avatar.jsx
// component=Avatar
import figma from 'figma'
const instance = figma.selectedInstance

const size = instance.getEnum('Size', {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
})
const hasSrc = instance.getEnum('Content', {
  Initials: false,
  Image: true,
})
const nameText = instance.findText('initials')?.textContent

export default {
  example: figma.code`
    <Avatar
      name="${nameText ?? 'Maria Alvarez'}"
      ${size !== 'md' ? figma.code`size="${size}"` : ''}
      ${hasSrc ? 'src="/path/to/photo.jpg"' : ''}
    />
  `,
  imports: ['import { Avatar } from "./Avatar.jsx"'],
  id: 'avatar',
  metadata: { nestable: true },
}
