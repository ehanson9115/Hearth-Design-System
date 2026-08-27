// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=23-17
// source=design-systems/hearth/components/feedback/Toast.jsx
// component=Toast
import figma from 'figma'
const instance = figma.selectedInstance

const message = instance.getString('Message')

export default {
  example: figma.code`<Toast>${message}</Toast>`,
  imports: ['import { Toast } from "./Toast.jsx"'],
  id: 'toast',
  metadata: { nestable: true },
}
