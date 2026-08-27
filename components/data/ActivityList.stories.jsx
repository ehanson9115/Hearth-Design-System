import React from 'react';
import { ActivityList } from './ActivityList.jsx';
import { Badge } from '../core/Badge.jsx';

export default {
  title: 'Data/ActivityList',
  component: ActivityList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A recent-activity feed: initials avatar + event line + quiet timestamp, optional trailing Badge. Lives inside a Panel.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=166-18',
    },
  },
  argTypes: {
    items: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};

export const Default = {
  args: {
    items: [
      {
        name: 'Bob Stoops',
        text: 'interview completed',
        when: '2:04 PM',
        badge: <Badge variant="warning">Pending review</Badge>,
      },
      { name: 'Maria Alvarez', text: 'uploaded proof of address', when: '1:38 PM' },
      { name: 'Sam Ortiz', text: 'approved, notice sent', when: '11:20 AM' },
    ],
  },
};

export const WithoutBadges = {
  args: {
    items: [
      { name: 'Dana Kim', text: 'submitted renewal', when: '9:12 AM' },
      { name: 'Maria Alvarez', text: 'uploaded proof of address', when: 'Yesterday' },
      { name: 'Sam Ortiz', text: 'approved, notice sent', when: 'Yesterday' },
    ],
  },
};
