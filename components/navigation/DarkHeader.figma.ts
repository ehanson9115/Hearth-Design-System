// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=165-13
// source=design-systems/hearth/components/navigation/DarkHeader.jsx
// component=DarkHeader
import figma from 'figma'
const instance = figma.selectedInstance

const product = instance.findText('product')
const role = instance.findText('role')
const link = instance.findText('link')

export default {
  example: figma.code`
    <DarkHeader
      name="${product && product.type === 'TEXT' ? product.textContent : 'Healthy Together'}"
      role="${role && role.type === 'TEXT' ? role.textContent : 'Caseworker'}"
      nav={[{ label: "${link && link.type === 'TEXT' ? link.textContent : 'Queue'}", active: true, href: '#' }]}
    />
  `,
  imports: ['import { DarkHeader } from "./DarkHeader.jsx"'],
  id: 'dark-header',
  metadata: { nestable: true },
}
