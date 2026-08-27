// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=365-27
// source=design-systems/hearth/components/forms/FieldGroup.jsx
// component=FieldGroup
import figma from 'figma'
const instance = figma.selectedInstance

const legend = instance.findText('legend')?.textContent
const description = instance.findText('description')?.textContent
const flush = instance.getEnum('Flush', {
  false: false,
  true: true,
})

export default {
  example: figma.code`
    <FieldGroup
      legend="${legend ?? 'Contact information'}"
      ${description ? figma.code`description="${description}"` : ''}
      ${flush ? 'flush' : ''}
    >
      <Input label="Email" />
      <Input label="Phone" />
    </FieldGroup>
  `,
  imports: ['import { FieldGroup } from "./FieldGroup.jsx"'],
  id: 'field-group',
  metadata: { nestable: true },
}
