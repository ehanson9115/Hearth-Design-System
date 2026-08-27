// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=171-33
// source=design-systems/hearth/components/resident-mobile/DocumentsCard.jsx
// component=DocumentsCard
//
// The Figma anatomy nests real `Badge` and `Button` instances, but the code
// component renders neither — `badge` is a plain string and the CTA is a
// hand-styled <button>, not the shared Button. Only their literal text is
// pulled out here; they are not wired as instance-swaps.
import figma from 'figma'
const instance = figma.selectedInstance

const titleNode = instance.findText('Title')
const title = titleNode && titleNode.textContent
const badgeNode = instance.findText('Approved', { traverseInstances: true, path: ['Badge'] })
const badge = badgeNode && badgeNode.textContent
const subtitleNode = instance.findText('Subtitle')
const subtitle = subtitleNode && subtitleNode.textContent
const docTitleNode = instance.findText('doc-title')
const docTitle = docTitleNode && docTitleNode.textContent
const docSubNode = instance.findText('doc-sub')
const docSubtitle = docSubNode && docSubNode.textContent
const ctaNode = instance.findText('Continue', { traverseInstances: true, path: ['Button'] })
const cta = ctaNode && ctaNode.textContent

export default {
  example: figma.code`
    <DocumentsCard
      title="${title}"
      badge="${badge}"
      subtitle="${subtitle}"
      docs={[{ title: "${docTitle}", subtitle: "${docSubtitle}" }]}
      cta="${cta}"
      onCta={() => {}}
    />
  `,
  imports: ["import { DocumentsCard } from './DocumentsCard.jsx'"],
  id: 'documents-card',
  metadata: { nestable: true },
}
