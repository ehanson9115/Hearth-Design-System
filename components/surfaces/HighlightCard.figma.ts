// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=161-92
// source=design-systems/hearth/components/surfaces/HighlightCard.jsx
// component=HighlightCard
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.findText('Title')?.textContent
const label = instance.findText('Label')?.textContent

export default {
  example: figma.code`
    <HighlightCard title="${title}" items={[{ label: "${label}" }]} />
  `,
  imports: ["import { HighlightCard } from './HighlightCard.jsx'"],
  id: 'highlight-card',
  metadata: { nestable: true },
}
