// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=20-32
// source=design-systems/hearth/components/surfaces/ProgramCard.jsx
// component=ProgramCard
//
// The nested Button instance isn't exposed as a component property, so its
// Label text is read via a traversing findText() rather than getInstanceSwap.
// Meta rows are read generically (any non-title/subtitle text layer at the
// top level) since each CTA variant names them after their own content.
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.findText('title')?.textContent
const subtitle = instance.findText('subtitle')?.textContent
const ctaVariant = instance.getEnum('CTA', {
  Primary: 'primary',
  Secondary: 'secondary',
})
const ctaLabelNode = instance.findText('Continue', { traverseInstances: true })
const ctaLabel = ctaLabelNode && ctaLabelNode.type === 'TEXT' ? ctaLabelNode.textContent : undefined
const metaLines = instance
  .findLayers((n) => n.type === 'TEXT' && n.name !== 'title' && n.name !== 'subtitle', {
    traverseInstances: false,
  })
  .map((n) => n.textContent)
const metaCode = metaLines.length
  ? `[${metaLines.map((l) => `{ label: ${JSON.stringify(l)} }`).join(', ')}]`
  : undefined

export default {
  example: figma.code`
    <ProgramCard
      title="${title}"
      ${subtitle ? `subtitle="${subtitle}"` : ''}
      ${metaCode ? figma.code`meta={${metaCode}}` : ''}
      ${ctaLabel ? `ctaLabel="${ctaLabel}"` : ''}
      ctaVariant="${ctaVariant}"
    />
  `,
  imports: ["import { ProgramCard } from './ProgramCard.jsx'"],
  id: 'program-card',
  metadata: { nestable: true },
}
