import React from 'react';
import { HoursSummary } from './HoursSummary.jsx';
import { ActivityCard } from './ActivityCard.jsx';

export default {
  title: 'Resident Mobile/HoursSummary',
  component: HoursSummary,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          "Resident mobile expandable section card. Section header (17px/500 title + 14px muted subtitle) with an optional right-aligned total and a chevron; nested `ActivityCard`s stack beneath at 10px gap. The header itself is the toggle.",
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=171-153',
    },
  },
  argTypes: {
    collapsible: { control: 'boolean' },
    defaultOpen: { control: 'boolean' },
    children: { table: { disable: true } },
  },
};

export const Default = {
  args: {
    subtitle: 'Week of July 21',
    total: '18 of 20 hrs',
    children: (
      <>
        <ActivityCard
          icon="ti-briefcase"
          title="Job search"
          subtitle="6 hrs reported"
          items={[{ label: 'Applied to 3 postings', done: true, value: '4 hrs' }]}
        />
        <ActivityCard
          icon="ti-school"
          title="Training"
          subtitle="12 hrs reported"
          items={[{ label: 'Certificate course', done: true, value: '12 hrs' }]}
        />
      </>
    ),
  },
};

export const Collapsed = {
  args: {
    ...Default.args,
    defaultOpen: false,
  },
};
