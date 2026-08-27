import React from 'react';
import { Skeleton } from './Skeleton.jsx';

export default {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Pulsing placeholder lines for loading content. Rows stagger and shrink by default.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=158-6',
    },
  },
  argTypes: {
    rows: { control: 'number' },
    widths: { table: { disable: true } },
  },
};

export const Default = {
  args: { rows: 3 },
};

export const CustomWidths = {
  args: { rows: 4, widths: ['100%', '90%', '70%', '50%'] },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Skeleton rows={3} />
      <Skeleton rows={4} widths={['100%', '90%', '70%', '50%']} />
    </div>
  ),
};
