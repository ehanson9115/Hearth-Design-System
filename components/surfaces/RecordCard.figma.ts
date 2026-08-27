// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=369-52
// source=design-systems/hearth/components/surfaces/RecordCard.jsx
// component=RecordCard
import figma from 'figma'
const instance = figma.selectedInstance

const confirmed = instance.getEnum('Confirmed', {
  false: false,
  true: true,
})
const title = instance.findText('title')?.textContent
const subtitle = instance.findText('subtitle')?.textContent

export default {
  example: figma.code`
    <RecordCard
      icon="ti-building"
      title="${title ?? 'Metro General Hospital'}"
      ${subtitle ? figma.code`subtitle="${subtitle}"` : ''}
      details={[
        { icon: 'ti-calendar', text: 'Jan 2024 – present' },
        { icon: 'ti-cash', text: '$4,200 / month' },
      ]}
      confirmed={${confirmed}}
      onConfirm={(v) => setConfirmed(v)}
      onEdit={() => {}}
      onRemove={() => {}}
    />
  `,
  imports: ['import { RecordCard } from "./RecordCard.jsx"'],
  id: 'record-card',
  metadata: { nestable: true },
}
