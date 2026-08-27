// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=22-9
// source=design-systems/hearth/components/surfaces/EntryCard.jsx
// component=EntryCard
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.findText('title')?.textContent
const subtitle = instance.findText('subtitle')?.textContent

export default {
  example: figma.code`
    <EntryCard title="${title}"${subtitle ? ` subtitle="${subtitle}"` : ''} />
  `,
  imports: ["import { EntryCard } from './EntryCard.jsx'"],
  id: 'entry-card',
  metadata: { nestable: true },
}
