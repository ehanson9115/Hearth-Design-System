// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=167-51
// source=design-systems/hearth/components/data/DataTable.jsx
// component=DataTable
import figma from 'figma'
const instance = figma.selectedInstance

const badge = instance.findInstance('Badge')
let badgeCode
if (badge && badge.type === 'INSTANCE') {
  badgeCode = badge.executeTemplate().example
}

export default {
  example: figma.code`
    <DataTable
      rowKey="id"
      columns={[
        { key: 'resident', header: 'Resident', render: (r) => <DataTable.Name sub={r.id}>{r.name}</DataTable.Name> },
        { key: 'program', header: 'Program' },
        { key: 'documents', header: 'Documents', align: 'right' },
        { key: 'status', header: 'Status', align: 'right', render: () => ${badgeCode} },
      ]}
      rows={[
        { id: 'Case #48291', resident: 'Maria Alvarez', program: 'SNAP', documents: '4 of 5' },
      ]}
    />
  `,
  imports: ['import { DataTable } from "./DataTable.jsx"'],
  id: 'data-table',
  metadata: { nestable: true },
}
