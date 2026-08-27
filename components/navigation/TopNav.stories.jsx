import React from 'react';
import { TopNav } from './TopNav.jsx';

export default {
  title: 'Navigation/TopNav',
  component: TopNav,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The mobile header for multi-step flows: back, a centered "Step x of y" in data royal, a save-and-exit action, and a progress rail along the bottom edge.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=23-16',
    },
  },
  argTypes: {
    step: { control: 'number' },
    of: { control: 'number' },
    progress: { control: 'number' },
    saved: { control: 'boolean' },
    backLabel: { table: { disable: true } },
    actionLabel: { table: { disable: true } },
    savedLabel: { table: { disable: true } },
    onBack: { table: { disable: true } },
    onAction: { table: { disable: true } },
  },
};

export const Default = {
  args: { step: 6, of: 23 },
};

export const Saved = {
  args: { step: 6, of: 23, saved: true },
};
