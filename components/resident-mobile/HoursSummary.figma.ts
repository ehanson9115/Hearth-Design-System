// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=171-153
// source=design-systems/hearth/components/resident-mobile/HoursSummary.jsx
// component=HoursSummary
import figma from 'figma'
const instance = figma.selectedInstance

const titleNode = instance.findText('Title')
const title = titleNode && titleNode.textContent
const totalNode = instance.findText('total')
const total = totalNode && totalNode.textContent
const subtitleNode = instance.findText('Subtitle')
const subtitle = subtitleNode && subtitleNode.textContent
const activityCard = instance.findInstance('ActivityCard')
let activityCardCode
if (activityCard && activityCard.type === 'INSTANCE') {
  activityCardCode = activityCard.executeTemplate().example
}

export default {
  example: figma.code`
    <HoursSummary title="${title}" subtitle="${subtitle}" total="${total}">
      ${activityCardCode}
    </HoursSummary>
  `,
  imports: ["import { HoursSummary } from './HoursSummary.jsx'"],
  id: 'hours-summary',
  metadata: { nestable: true },
}
