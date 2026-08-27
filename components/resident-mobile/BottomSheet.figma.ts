// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=25-18
// source=design-systems/hearth/components/resident-mobile/BottomSheet.jsx
// component=BottomSheet
//
// Figma only nests one real Button instance (the primary action); the
// dismiss row is plain text ("cancel-link"), not a second Button instance.
// The dismiss action is reconstructed as `<Button variant="link">`, matching
// how this sheet is actually composed in the templates — not invented.
import figma from 'figma'
const instance = figma.selectedInstance

const titleNode = instance.findText('title')
const title = titleNode && titleNode.textContent
const subcopyNode = instance.findText('subcopy')
const subcopy = subcopyNode && subcopyNode.textContent
const primaryButton = instance.findInstance('Button')
let primaryButtonCode
if (primaryButton && primaryButton.type === 'INSTANCE') {
  primaryButtonCode = primaryButton.executeTemplate().example
}
const cancelNode = instance.findText('cancel-link')
const cancelLabel = cancelNode && cancelNode.textContent

export default {
  example: figma.code`
    <BottomSheet
      title="${title}"
      actions={
        <>
          ${primaryButtonCode}
          <Button variant="link">${cancelLabel}</Button>
        </>
      }
    >
      ${subcopy}
    </BottomSheet>
  `,
  imports: [
    "import { BottomSheet } from './BottomSheet.jsx'",
    "import { Button } from '../core/Button.jsx'",
  ],
  id: 'bottom-sheet',
  metadata: { nestable: true },
}
