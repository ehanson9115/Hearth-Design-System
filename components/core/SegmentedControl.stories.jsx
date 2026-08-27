import React from 'react';
import { SegmentedControl } from './SegmentedControl.jsx';

export default {
  title: 'Core/SegmentedControl',
  component: SegmentedControl,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'a pill toggle for a small set of mutually exclusive options (2–4). Grey `--ht-grey-4` track, 3px inset; the selected segment becomes a white thumb with a soft violet-cast lift and a violet label; weight stays 500.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=157-81',
    },
  },
  argTypes: {
    options: { table: { disable: true } },
    onChange: { table: { disable: true } },
    fullWidth: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
  },
};

export const Inline = {
  args: { size: 'sm', options: ['Yes', 'No', 'Unsure'], value: 'Yes' },
};

export const FullWidthMd = {
  args: { fullWidth: true, size: 'md', options: ['Transactions', 'Payouts'], value: 'Transactions' },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <SegmentedControl value="Yes" options={['Yes', 'No', 'Unsure']} />
      <div style={{ maxWidth: 320 }}>
        <SegmentedControl fullWidth size="md" value="Transactions" options={['Transactions', 'Payouts']} />
      </div>
    </div>
  ),
};
