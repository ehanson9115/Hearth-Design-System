// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=131-182
// source=design-systems/hearth/components/surfaces/ProgramCard.jsx
// component=ProgramCard
//
// Separate Figma node ("Program card/CTA3") for ProgramCard's compact
// status form — ctaLabel omitted, tone="pending". Same code component as
// ProgramCard.figma.ts, different node and different rendered shape.
//
// This node's second text line ("We are reviewing your application") reads
// as a single status line under the title, which ProgramCard.jsx renders via
// `subtitle` (one line, right under the title) — not `meta` (an array of
// icon+label fact rows below the divider rule). Mapped to `subtitle`.
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.findText('title')?.textContent
const subtitleNode = instance
  .findLayers((n) => n.type === 'TEXT' && n.name !== 'title', { traverseInstances: false })[0]
const subtitle = subtitleNode && subtitleNode.textContent

export default {
  example: figma.code`
    <ProgramCard
      tone="pending"
      title="${title}"
      ${subtitle ? `subtitle="${subtitle}"` : ''}
    />
  `,
  imports: ["import { ProgramCard } from './ProgramCard.jsx'"],
  id: 'program-card-status',
  metadata: { nestable: true },
}
