// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=33-11
// source=design-systems/hearth/components/core/ProgressBar.jsx
// component=ProgressBar
//
// Figma's "Tone" variant (Default/Success/Warning/Danger) has no
// corresponding code prop -- ProgressBar.jsx takes value/step/of/label/
// fullWidth only, with no tone/color prop -- so it's intentionally omitted
// rather than invented.
import figma from 'figma'

export default {
  example: figma.code`<ProgressBar value={40} />`,
  imports: ['import { ProgressBar } from "./ProgressBar.jsx"'],
  id: 'progress-bar',
  metadata: { nestable: true },
}
