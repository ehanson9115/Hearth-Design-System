import React from 'react';
import { IconTile } from './IconTile.jsx';

export default {
  title: 'Core/IconTile',
  component: IconTile,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'the tinted chip every standalone glyph sits inside. 24px rounded square by default (radius = size/4); `circle` for round chips; `solid` for a vivid fill with a white glyph. Decorative (`aria-hidden`); the text beside it carries the meaning.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=363-1585',
    },
  },
  argTypes: {
    tone: {
      control: 'select',
      options: ['action', 'data', 'success', 'warning', 'danger'],
    },
    solid: { control: 'boolean' },
    circle: { control: 'boolean' },
    size: { control: 'number' },
  },
};

export const Default = {
  args: { tone: 'action', icon: 'ti-stethoscope' },
};

export const DataTone = {
  args: { icon: 'ti-chart-bar', tone: 'data', size: 40 },
};

export const Solid = {
  args: { icon: 'ti-check', tone: 'success', solid: true, circle: true, size: 44 },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <IconTile icon="ti-stethoscope" />
      <IconTile icon="ti-chart-bar" tone="data" size={40} />
      <IconTile icon="ti-check" tone="success" solid circle size={44} />
      <IconTile icon="ti-alert-triangle" tone="warning" />
      <IconTile icon="ti-alert-circle" tone="danger" solid />
    </div>
  ),
};
