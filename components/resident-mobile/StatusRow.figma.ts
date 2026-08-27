// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=16-44
// source=design-systems/hearth/components/resident-mobile/StatusRow.jsx
// component=StatusRow
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.getString('Title')
const subtitle = instance.getString('Meta')
const badge = instance.findInstance('Badge')
let badgeCode
if (badge && badge.type === 'INSTANCE') {
  badgeCode = badge.executeTemplate().example
}

export default {
  example: figma.code`<StatusRow title="${title}" subtitle="${subtitle}" badge={${badgeCode}} />`,
  imports: ["import { StatusRow } from './StatusRow.jsx'"],
  id: 'status-row',
  metadata: { nestable: true },
}
