// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=368-392
// source=design-systems/hearth/components/navigation/SideNav.jsx
// component=SideNav
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`
    <SideNav
      groups={[
        {
          label: 'Cases',
          items: [
            { icon: 'ti-layout-dashboard', label: 'Dashboard', active: true },
            { icon: 'ti-users', label: 'Participants', meta: '42' },
            { icon: 'ti-clipboard-list', label: 'Applications', meta: '8' },
          ],
        },
        {
          label: 'Admin',
          items: [
            { icon: 'ti-settings', label: 'Settings' },
          ],
        },
      ]}
    />
  `,
  imports: ['import { SideNav } from "./SideNav.jsx"'],
  id: 'side-nav',
  metadata: { nestable: false },
}
