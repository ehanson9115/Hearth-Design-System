import React from 'react';
import { NoticeTimeline } from './NoticeTimeline.jsx';

const items = [
  {
    title: 'Eligibility approved',
    when: 'Mar 14 at 09:30 AM',
    channel: 'Email',
    body: 'Your application for Medicaid and SNAP has been approved. Benefits begin April 1, 2026.',
  },
  {
    title: 'Renewal due soon',
    when: 'Mar 9 at 02:15 PM',
    channel: 'Portal',
    body: 'Your Medicaid coverage expires May 31. Renew by May 15 to avoid a gap.',
  },
];

export default {
  title: 'Data/NoticeTimeline',
  component: NoticeTimeline,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The record of what the agency sent and when: collapsible card header, then a dotted rail of notices.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=367-45',
    },
  },
  argTypes: {
    title: { table: { disable: true } },
    items: { table: { disable: true } },
    collapsible: { control: 'boolean' },
    defaultOpen: { control: 'boolean' },
    showCount: { control: 'boolean' },
  },
};

export const Default = {
  args: { items },
};

export const Collapsed = {
  args: { items, defaultOpen: false },
};
