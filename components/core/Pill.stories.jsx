import React from 'react';
import { Pill } from './Pill.jsx';

export default {
  title: 'Core/Pill',
  component: Pill,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'a single tab/filter pill. Compose several in a flex row; mark the current one `active` (violet-select fill, weight 500).',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=157-15',
    },
  },
  argTypes: {
    active: { control: 'boolean' },
    as: {
      control: 'select',
      options: ['button', 'a'],
    },
  },
};

export const Active = {
  args: { as: 'button', active: true, children: 'Home' },
};

export const Inactive = {
  args: { as: 'button', children: 'Appointments' },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Pill active>Home</Pill>
      <Pill>Appointments</Pill>
      <Pill>Benefits</Pill>
      <Pill>Messages</Pill>
    </div>
  ),
};
