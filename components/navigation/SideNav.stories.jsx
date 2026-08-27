import React from 'react';
import { SideNav } from './SideNav.jsx';

export default {
  title: 'Navigation/SideNav',
  component: SideNav,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The caseworker rail. Labelled groups of icon + label rows with an optional trailing count or time, one active row in the action-select tint.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=368-392',
    },
  },
  argTypes: {
    groups: { table: { disable: true } },
    width: { control: 'number' },
    footer: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};

export const Default = {
  args: {
    groups: [
      {
        label: 'Menu',
        items: [
          { icon: 'ti-layout-dashboard', label: 'Dashboard', active: true },
          { icon: 'ti-list-check', label: 'My queue', meta: '8' },
          { icon: 'ti-users', label: 'Residents' },
        ],
      },
      {
        label: 'Views',
        items: [
          { icon: 'ti-clock', label: 'Pending review', meta: '8' },
          { icon: 'ti-check', label: 'Completed', meta: '21' },
        ],
      },
    ],
  },
};
