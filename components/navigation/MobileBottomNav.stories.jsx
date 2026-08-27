import React from 'react';
import { MobileBottomNav } from './MobileBottomNav.jsx';

export default {
  title: 'Navigation/MobileBottomNav',
  component: MobileBottomNav,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          "The resident app's bottom tab bar. 48px targets, labels always visible (never icon-only), active tab in violet, optional red count badge.",
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=25-2',
    },
  },
  argTypes: {
    items: { table: { disable: true } },
  },
};

export const Default = {
  args: {
    items: [
      { label: 'Home', icon: 'ti-home', active: true, href: '#' },
      { label: 'Appointments', icon: 'ti-calendar', href: '#' },
      { label: 'Benefits', icon: 'ti-heart', href: '#' },
      { label: 'Messages', icon: 'ti-mail', badge: 2, href: '#' },
    ],
  },
};

export const ThreeTabs = {
  args: {
    items: [
      { label: 'Home', icon: 'ti-home', active: true, href: '#' },
      { label: 'Benefits', icon: 'ti-heart', href: '#' },
      { label: 'Messages', icon: 'ti-mail', badge: 2, href: '#' },
    ],
  },
};
