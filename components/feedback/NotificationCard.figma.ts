// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=21-22
// source=design-systems/hearth/components/feedback/NotificationCard.jsx
// component=NotificationCard
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.getString('Title')
const body = instance.getString('Body')
// "Tone5" is an unnamed draft variant with no code counterpart (same pattern
// as "Status3"/"Tone3" elsewhere in this file) — intentionally unmapped.
// Figma's "Dismissible" boolean also has no code counterpart —
// NotificationCard.jsx takes no dismissible/onDismiss prop — omitted rather
// than invented.
const variant = instance.getEnum('Tone', {
  Info: 'info',
  Danger: 'danger',
  Success: 'success',
  Warning: 'warning',
})

export default {
  example: figma.code`
    <NotificationCard variant="${variant}" title="${title}">
      ${body}
    </NotificationCard>
  `,
  imports: ['import { NotificationCard } from "./NotificationCard.jsx"'],
  id: 'notification-card',
  metadata: { nestable: true },
}
