// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=164-98
// source=design-systems/hearth/components/surfaces/Hero.jsx
// component=Hero
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.findText('Title')?.textContent
const subtitle = instance.findText('Subtitle')?.textContent

export default {
  example: figma.code`
    <Hero title="${title}">
      ${subtitle}
    </Hero>
  `,
  imports: ["import { Hero } from './Hero.jsx'"],
  id: 'hero',
  metadata: { nestable: true },
}
