// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=170-24
// source=design-systems/hearth/components/resident-mobile/ProgramStatusCard.jsx
// component=ProgramStatusCard
import figma from 'figma'
const instance = figma.selectedInstance

const tone = instance.getEnum('Tone', { 'Warning': 'amber', 'Success': 'success' })
const titleNode = instance.findText('Title')
const title = titleNode && titleNode.textContent
const bodyNode = instance.findText('body')
const body = bodyNode && bodyNode.textContent

export default {
  example: figma.code`<ProgramStatusCard tone="${tone}" title="${title}">${body}</ProgramStatusCard>`,
  imports: ["import { ProgramStatusCard } from './ProgramStatusCard.jsx'"],
  id: 'program-status-card',
  metadata: { nestable: true },
}
