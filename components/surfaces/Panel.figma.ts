// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=162-36
// source=design-systems/hearth/components/surfaces/Panel.jsx
// component=Panel
//
// `band`/`live` are boolean props with no corresponding Figma property on
// this node, so they're omitted here rather than guessed.
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.findText('Title')?.textContent
const subtitle = instance.findText('subtitle')?.textContent
const action = instance.findText('action')?.textContent
const meta = instance.findText('label')?.textContent
const row = instance.findInstance('ChecklistRow')
let rowCode
if (row && row.type === 'INSTANCE') {
  rowCode = row.executeTemplate().example
}

export default {
  example: figma.code`
    <Panel
      title="${title}"
      ${subtitle ? `subtitle="${subtitle}"` : ''}
      ${action ? `action="${action}"` : ''}
      ${meta ? `meta="${meta}"` : ''}
    >
      ${rowCode}
    </Panel>
  `,
  imports: ["import { Panel } from './Panel.jsx'"],
  id: 'panel',
  metadata: { nestable: true },
}
