// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=16-19
// source=design-systems/hearth/components/resident-mobile/TransactionRow.jsx
// component=TransactionRow
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.getString('Title')
const meta = instance.getString('Meta')
const amount = instance.getString('Value')
const status = instance.getEnum('Status', { 'Pending': 'pending', 'Settled': 'settled' })

export default {
  example: figma.code`<TransactionRow title="${title}" meta="${meta}" amount="${amount}" status="${status}" />`,
  imports: ["import { TransactionRow } from './TransactionRow.jsx'"],
  id: 'transaction-row',
  metadata: { nestable: true },
}
