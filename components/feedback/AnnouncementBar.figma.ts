// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=22-4
// source=design-systems/hearth/components/feedback/AnnouncementBar.jsx
// component=AnnouncementBar
import figma from 'figma'
const instance = figma.selectedInstance

const messageNode = instance.findText('message')
const message = messageNode && typeof messageNode.textContent === 'string' ? messageNode.textContent : undefined
const actionNode = instance.findText('See how it works')
const actionLabel = actionNode && typeof actionNode.textContent === 'string' ? actionNode.textContent : undefined

export default {
  example: figma.code`
    <AnnouncementBar action="${actionLabel}">
      ${message}
    </AnnouncementBar>
  `,
  imports: ['import { AnnouncementBar } from "./AnnouncementBar.jsx"'],
  id: 'announcement-bar',
  metadata: { nestable: true },
}
