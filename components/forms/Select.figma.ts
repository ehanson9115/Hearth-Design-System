// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=63-25
// source=design-systems/hearth/components/forms/Select.jsx
// component=Select
import figma from 'figma'
const instance = figma.selectedInstance

const state = instance.getEnum('State', {
  'Default': 'default',
  'Focused': 'focused',
  'Open': 'open',
})
const placeholderNode = instance.findText('Select state…')
const placeholder = placeholderNode && typeof placeholderNode.textContent === 'string'
  ? placeholderNode.textContent
  : undefined
const selectedNode = instance.findText('Montana')
const defaultValue = state === 'open' && selectedNode && typeof selectedNode.textContent === 'string'
  ? selectedNode.textContent
  : undefined

export default {
  example: figma.code`
    <Select
      ${placeholder ? figma.code`placeholder="${placeholder}"` : ''}
      ${defaultValue ? figma.code`defaultValue="${defaultValue}"` : ''}
    />
  `,
  imports: ["import { Select } from './Select.jsx'"],
  id: 'select',
  metadata: { nestable: true },
}
