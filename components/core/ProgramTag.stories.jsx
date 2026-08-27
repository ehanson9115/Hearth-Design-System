import React from 'react';
import { ProgramTag } from './ProgramTag.jsx';

export default {
  title: 'Core/ProgramTag',
  component: ProgramTag,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'a violet pill naming which program something belongs to (WIC, SNAP, FMNP). Identity, not status: it stays violet in every state, and status stays with `Badge`.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=38-3',
    },
  },
  argTypes: {
    dot: { control: 'boolean' },
  },
};

export const Wic = {
  args: { children: 'WIC' },
};

export const Snap = {
  args: { children: 'SNAP' },
};

export const NoDot = {
  args: { dot: false, children: 'FMNP' },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <ProgramTag>WIC</ProgramTag>
      <ProgramTag>SNAP</ProgramTag>
      <ProgramTag dot={false}>FMNP</ProgramTag>
    </div>
  ),
};
