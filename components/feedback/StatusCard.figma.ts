// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=159-30
// source=design-systems/hearth/components/feedback/StatusCard.jsx
// component=StatusCard
import figma from 'figma'
const instance = figma.selectedInstance

const variant = instance.getEnum('Variant', {
  Loading: 'loading',
  Empty: 'empty',
  Success: 'success',
})
const titleNode = instance.findText('Title')
const title = titleNode && typeof titleNode.textContent === 'string' ? titleNode.textContent : undefined
const bodyNode = instance.findText('Body')
const body = bodyNode && typeof bodyNode.textContent === 'string' ? bodyNode.textContent : undefined
const button = instance.findInstance('Button')
let actionCode
if (button && button.type === 'INSTANCE') {
  actionCode = button.executeTemplate().example
}

export default {
  example: figma.code`
    <StatusCard
      variant="${variant}"
      title="${title}"
      ${actionCode ? figma.code`action={${actionCode}}` : ''}
    >
      ${body}
    </StatusCard>
  `,
  imports: ['import { StatusCard } from "./StatusCard.jsx"'],
  id: 'status-card',
  metadata: { nestable: true },
}
