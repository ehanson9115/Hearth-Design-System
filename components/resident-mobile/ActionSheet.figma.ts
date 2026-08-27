// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=41-2
// source=design-systems/hearth/components/resident-mobile/ActionSheet.jsx
// component=ActionSheet
import figma from 'figma'
const instance = figma.selectedInstance

const takePhotoNode = instance.findText('Take photo')
const takePhoto = takePhotoNode && takePhotoNode.textContent
const chooseNode = instance.findText('Choose from library')
const choose = chooseNode && chooseNode.textContent
const removeNode = instance.findText('Remove')
const remove = removeNode && removeNode.textContent
const cancelNode = instance.findText('Cancel')
const cancelLabel = cancelNode && cancelNode.textContent

export default {
  example: figma.code`
    <ActionSheet
      actions={[
        { label: "${takePhoto}" },
        { label: "${choose}" },
        { label: "${remove}", destructive: true },
      ]}
      cancelLabel="${cancelLabel}"
    />
  `,
  imports: ["import { ActionSheet } from './ActionSheet.jsx'"],
  id: 'action-sheet',
  metadata: { nestable: true },
}
