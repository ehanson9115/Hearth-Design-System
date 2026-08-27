// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=25-2
// source=design-systems/hearth/components/navigation/MobileBottomNav.jsx
// component=MobileBottomNav
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`
    <MobileBottomNav
      items={[
        { label: 'Home', icon: 'ti-home', active: true, href: '#' },
        { label: 'Benefits', icon: 'ti-heart', href: '#' },
        { label: 'Scan', icon: 'ti-viewfinder', href: '#' },
        { label: 'Inbox', icon: 'ti-mail', href: '#' },
        { label: 'Card', icon: 'ti-credit-card', href: '#' },
      ]}
    />
  `,
  imports: ['import { MobileBottomNav } from "./MobileBottomNav.jsx"'],
  id: 'mobile-bottom-nav',
  metadata: { nestable: true },
}
