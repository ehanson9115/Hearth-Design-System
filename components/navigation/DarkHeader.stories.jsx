import React from 'react';
import { DarkHeader } from './DarkHeader.jsx';

export default {
  title: 'Navigation/DarkHeader',
  component: DarkHeader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          "The admin app's dark ink top bar. Admin only (resident app stays light). The violet logo chip is the single brand moment; header buttons are ghost, never violet-on-ink.",
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=165-13',
    },
  },
  argTypes: {
    nav: { table: { disable: true } },
    onAction: { table: { disable: true } },
    rounded: { control: 'boolean' },
    children: { table: { disable: true } },
  },
};

export const Default = {
  args: {
    name: 'Healthy Together',
    role: 'Caseworker',
    nav: [
      { label: 'Queue', active: true, href: '#' },
      { label: 'Residents', href: '#' },
      { label: 'Reports', href: '#' },
    ],
    action: 'Send invite',
  },
};

export const Rounded = {
  args: { ...Default.args, rounded: true },
};
