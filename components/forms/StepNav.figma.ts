// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=164-20
// source=design-systems/hearth/components/forms/StepNav.jsx
// component=StepNav
import figma from 'figma'
const instance = figma.selectedInstance

const titleNode = instance.findText('Title')
const title = titleNode && typeof titleNode.textContent === 'string' ? titleNode.textContent : undefined
const hintNode = instance.findText('hint')
const hint = hintNode && typeof hintNode.textContent === 'string' ? hintNode.textContent : undefined
const backNode = instance.findText('back')
const hasBack = backNode && backNode.type === 'TEXT'

const progress = instance.findInstance('Progress')
let progressCode
if (progress && progress.type === 'INSTANCE') {
  progressCode = progress.executeTemplate().example
}

export default {
  example: figma.code`
    <StepNav
      ${title ? figma.code`title="${title}"` : ''}
      ${hint ? figma.code`hint="${hint}"` : ''}
      ${hasBack ? figma.code`onBack={() => {}}` : ''}
    >
      ${progressCode}
    </StepNav>
  `,
  imports: ["import { StepNav } from './StepNav.jsx'"],
  id: 'step-nav',
  metadata: { nestable: true },
}
