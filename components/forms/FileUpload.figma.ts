// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=163-22
// source=design-systems/hearth/components/forms/FileUpload.jsx
// component=FileUpload
import figma from 'figma'
const instance = figma.selectedInstance

const state = instance.getEnum('State', { 'Empty': 'empty', 'Uploaded': 'uploaded' })
const labelNode = instance.findText('label')
const buttonLabel = labelNode && typeof labelNode.textContent === 'string' ? labelNode.textContent : undefined
const descNode = instance.findText('desc')
const accept = descNode && typeof descNode.textContent === 'string' ? descNode.textContent : undefined

let filesLiteral
if (state === 'uploaded') {
  const filenameNode = instance.findText('filename')
  const metaNode = instance.findText('meta')
  const statusNode = instance.findText('status')
  const filename = filenameNode && typeof filenameNode.textContent === 'string' ? filenameNode.textContent : ''
  const meta = metaNode && typeof metaNode.textContent === 'string' ? metaNode.textContent : ''
  const status = statusNode && typeof statusNode.textContent === 'string' ? statusNode.textContent : ''
  filesLiteral = `[{ name: '${filename}', size: '${meta}', status: '${status}' }]`
}

export default {
  example: figma.code`
    <FileUpload
      sources={null}
      ${buttonLabel ? figma.code`buttonLabel="${buttonLabel}"` : ''}
      ${accept ? figma.code`accept="${accept}"` : ''}
      ${filesLiteral ? figma.code`files={${filesLiteral}}` : ''}
    />
  `,
  imports: ["import { FileUpload } from './FileUpload.jsx'"],
  id: 'file-upload',
  metadata: { nestable: true },
}
