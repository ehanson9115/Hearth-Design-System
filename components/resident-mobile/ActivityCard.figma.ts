// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=169-27
// source=design-systems/hearth/components/resident-mobile/ActivityCard.jsx
// component=ActivityCard
import figma from 'figma'
const instance = figma.selectedInstance

const titleNode = instance.findText('Title')
const title = titleNode && titleNode.textContent
const subtitleNode = instance.findText('Subtitle')
const subtitle = subtitleNode && subtitleNode.textContent
const labelNode = instance.findText('label')
const label = labelNode && labelNode.textContent
const valueNode = instance.findText('value')
const value = valueNode && valueNode.textContent

export default {
  example: figma.code`
    <ActivityCard
      title="${title}"
      subtitle="${subtitle}"
      items={[{ label: "${label}", value: "${value}" }]}
    />
  `,
  imports: ["import { ActivityCard } from './ActivityCard.jsx'"],
  id: 'activity-card',
  metadata: { nestable: true },
}
