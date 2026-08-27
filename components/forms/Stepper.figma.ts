// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=364-31
// source=design-systems/hearth/components/forms/Stepper.jsx
// component=Stepper
import figma from 'figma'
const instance = figma.selectedInstance

// State=Min/Max means one button is disabled — that's driven by value/min/max in code.
const state = instance.getEnum('State', {
  Default: 'default',
  Min: 'min',
  Max: 'max',
})
const valueText = instance.findText('value')?.textContent
const value = valueText ? parseInt(valueText, 10) : 1

export default {
  example: figma.code`
    <Stepper
      value={${value}}
      min={${state === 'min' ? value : 0}}
      max={${state === 'max' ? value : 10}}
      onChange={(n) => setValue(n)}
    />
  `,
  imports: ['import { Stepper } from "./Stepper.jsx"'],
  id: 'stepper',
  metadata: { nestable: true },
}
