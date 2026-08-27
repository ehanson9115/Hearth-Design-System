// url=https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=161-101
// source=design-systems/hearth/components/surfaces/ReviewTile.jsx
// component=ReviewTile
//
// The Figma node exposes `title`, `edit`, and a single merged `row` text
// run per key/value pair — there's no separate label/value sub-layer to
// split, so `items` and the Edit link can't be derived reliably here and
// are left out rather than guessed.
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.findText('Title')?.textContent

export default {
  example: figma.code`
    <ReviewTile title="${title}" />
  `,
  imports: ["import { ReviewTile } from './ReviewTile.jsx'"],
  id: 'review-tile',
  metadata: { nestable: true },
}
