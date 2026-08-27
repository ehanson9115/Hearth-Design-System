import React from 'react';
import { ProgressBar } from './ProgressBar.jsx';

export default {
  title: 'Core/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'royal fill on a royal-tint track (data color in a bar context). Use for multi-step form progress.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=33-11',
    },
  },
  argTypes: {
    value: { control: 'number' },
    step: { control: 'number' },
    of: { control: 'number' },
    fullWidth: { control: 'boolean' },
  },
};

export const WithStep = {
  args: { value: 62, step: 3, of: 5, label: 'About your household' },
};

export const Simple = {
  args: { value: 40 },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <ProgressBar value={62} step={3} of={5} label="About your household" />
      <ProgressBar value={40} />
    </div>
  ),
};
