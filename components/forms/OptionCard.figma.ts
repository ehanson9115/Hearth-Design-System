// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=18-33
// source=design-systems/hearth/components/forms/OptionCard.jsx
// component=OptionCard
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.getString('Title')
const type = instance.getEnum('Type', { 'Checkbox': 'checkbox', 'Survey': 'radio' })
const selected = instance.getEnum('State', { 'Default': false, 'Selected': true })
const descNode = instance.findText('description')
const description = descNode && typeof descNode.textContent === 'string' ? descNode.textContent : undefined

export default {
  example: figma.code`
    <OptionCard
      type="${type}"
      title="${title}"
      ${description ? figma.code`description="${description}"` : ''}
      ${selected ? 'selected' : ''}
    />
  `,
  imports: ["import { OptionCard } from './OptionCard.jsx'"],
  id: 'option-card',
  metadata: { nestable: true },
}
