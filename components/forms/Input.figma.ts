// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=19-22
// source=design-systems/hearth/components/forms/Input.jsx
// component=Input
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const value = instance.getString('Value')
const state = instance.getEnum('State', {
  'Default': 'default',
  'Focus': 'focus',
  'Filled': 'filled',
  'Error': 'error',
})
const isError = state === 'error'
const messageNode = instance.findText('message')
const errorMessage = isError && messageNode && typeof messageNode.textContent === 'string'
  ? messageNode.textContent
  : undefined

export default {
  example: figma.code`
    <Input
      label="${label}"
      value="${value}"
      ${errorMessage ? figma.code`error="${errorMessage}"` : ''}
    />
  `,
  imports: ["import { Input } from './Input.jsx'"],
  id: 'input',
  metadata: { nestable: true },
}
