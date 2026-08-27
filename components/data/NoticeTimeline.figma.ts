// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=367-45
// source=design-systems/hearth/components/data/NoticeTimeline.jsx
// component=NoticeTimeline
import figma from 'figma'
const instance = figma.selectedInstance

const open = instance.getEnum('Open', {
  true: true,
  false: false,
})
const title = instance.findText('title')?.textContent

export default {
  example: figma.code`
    <NoticeTimeline
      title="${title ?? 'Notices'}"
      collapsible
      defaultOpen={${open}}
      items={[
        {
          title: 'Renewal reminder sent',
          when: 'Mar 14 at 09:30 AM',
          channel: 'Email',
          body: 'Your WIC benefits are up for renewal. Please schedule an appointment.',
        },
        {
          title: 'Appointment confirmed',
          when: 'Mar 10 at 02:15 PM',
          channel: 'SMS',
        },
      ]}
    />
  `,
  imports: ['import { NoticeTimeline } from "./NoticeTimeline.jsx"'],
  id: 'notice-timeline',
  metadata: { nestable: true },
}
