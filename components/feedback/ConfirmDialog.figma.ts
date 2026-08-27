// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=193-2
// source=design-systems/hearth/components/feedback/ConfirmDialog.jsx
// component=ConfirmDialog
import figma from 'figma'
const instance = figma.selectedInstance

const titleNode = instance.findText('title')
const title = titleNode && typeof titleNode.textContent === 'string' ? titleNode.textContent : undefined
const bodyNode = instance.findText('subcopy')
const body = bodyNode && typeof bodyNode.textContent === 'string' ? bodyNode.textContent : undefined
const cancelNode = instance.findText('Keep it')
const cancelLabel = cancelNode && typeof cancelNode.textContent === 'string' ? cancelNode.textContent : undefined
const confirmNode = instance.findText('Remove document')
const confirmLabel = confirmNode && typeof confirmNode.textContent === 'string' ? confirmNode.textContent : undefined

export default {
  example: figma.code`
    <ConfirmDialog
      tone="danger"
      title="${title}"
      cancelLabel="${cancelLabel}"
      confirmLabel="${confirmLabel}"
    >
      ${body}
    </ConfirmDialog>
  `,
  imports: ['import { ConfirmDialog } from "./ConfirmDialog.jsx"'],
  id: 'confirm-dialog',
  metadata: { nestable: true },
}
