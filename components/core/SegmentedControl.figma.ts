// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=157-81
// source=design-systems/hearth/components/core/SegmentedControl.jsx
// component=SegmentedControl
//
// The Figma symbol models a single segment/label; the code component is the
// assembled multi-option control (`options` array + `value`). There's no
// Figma property to derive a full option list from, so this renders the
// symbol's own label as a one-option illustrative example.
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.findText('Label')
const value = label && label.type === 'TEXT' ? label.textContent : ''

export default {
  example: figma.code`<SegmentedControl options={["${value}"]} value="${value}" />`,
  imports: ['import { SegmentedControl } from "./SegmentedControl.jsx"'],
  id: 'segmented-control',
  metadata: { nestable: true },
}
