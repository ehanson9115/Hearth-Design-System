// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=166-18
// source=design-systems/hearth/components/data/ActivityList.jsx
// component=ActivityList
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`
    <ActivityList
      items={[
        { name: 'Bob Stoops', text: 'interview completed', when: '2:04 PM' },
        { name: 'Maria Alvarez', text: 'uploaded proof of address', when: '1:38 PM' },
      ]}
    />
  `,
  imports: ['import { ActivityList } from "./ActivityList.jsx"'],
  id: 'activity-list',
  metadata: { nestable: true },
}
