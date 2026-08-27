// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=192-12
// source=design-systems/hearth/components/forms/SegmentedYesNo.jsx
// component=SegmentedYesNo
import figma from 'figma'
const instance = figma.selectedInstance

const selected = instance.getEnum('Selected', { 'Yes': 'yes', 'No': 'no' })
const yesNode = instance.findText('Yes')
const yesLabel = yesNode && typeof yesNode.textContent === 'string' ? yesNode.textContent : undefined
const noNode = instance.findText('No')
const noLabel = noNode && typeof noNode.textContent === 'string' ? noNode.textContent : undefined

export default {
  example: figma.code`
    <SegmentedYesNo
      value="${selected}"
      ${yesLabel ? figma.code`yesLabel="${yesLabel}"` : ''}
      ${noLabel ? figma.code`noLabel="${noLabel}"` : ''}
    />
  `,
  imports: ["import { SegmentedYesNo } from './SegmentedYesNo.jsx'"],
  id: 'segmented-yes-no',
  metadata: { nestable: true },
}
