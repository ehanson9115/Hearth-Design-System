import React from 'react';
import { ActivityCard } from './ActivityCard.jsx';

export default {
  title: 'Resident Mobile/ActivityCard',
  component: ActivityCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          "Resident mobile reported-activity / checklist card. White card, 1px hairline stroke, 12px radius, 16px padding. Header is a 17px/500 title + 14px muted subtitle (optional 24px r6 rounded-square icon chip, top-aligned); a full-bleed hairline splits it from 14.5px checkbox rows with a 16px r4 box and 10px row gap.",
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=169-27',
    },
  },
  argTypes: {
    items: { table: { disable: true } },
    onToggle: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};

export const Default = {
  args: {
    icon: 'ti-briefcase',
    title: 'Job search',
    subtitle: 'Reported July 21–27',
    items: [
      { label: 'Applied to 3 postings', done: true, value: '4 hrs' },
      { label: 'Attended resume workshop', done: true, value: '2 hrs' },
      { label: 'Uploaded interview notes' },
    ],
  },
};

export const AllComplete = {
  args: {
    icon: 'ti-school',
    title: 'Training',
    subtitle: '12 hrs reported',
    items: [
      { label: 'Certificate course', done: true, value: '12 hrs' },
    ],
  },
};
