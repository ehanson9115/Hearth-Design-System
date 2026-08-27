// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=23-16
// source=design-systems/hearth/components/navigation/TopNav.jsx
// component=TopNav
import figma from 'figma'
const instance = figma.selectedInstance

const stepText = instance.getString('Step')
const stepMatch = stepText && stepText.match(/(\d+)\s+of\s+(\d+)/i)
const stepNum = stepMatch ? stepMatch[1] : '6'
const ofNum = stepMatch ? stepMatch[2] : '23'
const saved = instance.getEnum('Action', {
  'Save & exit': false,
  'Saved': true,
})

export default {
  example: figma.code`
    <TopNav step={${stepNum}} of={${ofNum}} ${saved ? 'saved' : ''} />
  `,
  imports: ['import { TopNav } from "./TopNav.jsx"'],
  id: 'top-nav',
  metadata: { nestable: true },
}
