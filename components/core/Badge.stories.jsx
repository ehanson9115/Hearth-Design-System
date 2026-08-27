import React from 'react';
import { Badge } from './Badge.jsx';

export default {
  title: 'Core/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'status dot-pills and tag pills. Status uses a vivid dot + label so color never signals meaning alone.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=15-27',
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'warning', 'danger', 'info', 'brand', 'neutral', 'outline'],
    },
    dot: { control: 'boolean' },
    chip: { control: 'boolean' },
    check: { control: 'boolean' },
  },
};

export const Success = {
  args: { variant: 'success', children: 'Approved' },
};

export const Warning = {
  args: { variant: 'warning', children: 'Pending review' },
};

export const Danger = {
  args: { variant: 'danger', children: 'Over income limit' },
};

export const Info = {
  args: { variant: 'info', children: 'In progress' },
};

export const Brand = {
  args: { variant: 'brand', children: 'High relevance' },
};

export const Neutral = {
  args: { variant: 'neutral', children: 'Standard' },
};

export const Outline = {
  args: { variant: 'outline', children: '60+ / Disabled' },
};

export const Chip = {
  args: { variant: 'info', chip: true, children: 'OCR: High confidence' },
};

export const Check = {
  args: { variant: 'success', check: true, children: 'Match confirmed' },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge variant="success">Approved</Badge>
      <Badge variant="warning">Pending review</Badge>
      <Badge variant="danger">Over income limit</Badge>
      <Badge variant="info">In progress</Badge>
      <Badge variant="brand">High relevance</Badge>
      <Badge variant="neutral">Standard</Badge>
      <Badge variant="outline">60+ / Disabled</Badge>
    </div>
  ),
};
