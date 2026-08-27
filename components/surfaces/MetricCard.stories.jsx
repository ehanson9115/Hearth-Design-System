import React from 'react';
import { MetricCard } from './MetricCard.jsx';

export default {
  title: 'Surfaces/MetricCard',
  component: MetricCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'a glance-layer stat: big tabular number + quiet label, optional trend. Grid several across a dashboard.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=22-21',
    },
  },
  argTypes: {
    trendDir: {
      control: 'select',
      options: ['up', 'down'],
    },
    variant: {
      control: 'select',
      options: ['default', 'warn'],
    },
  },
};

export const Default = {
  args: { variant: 'default', value: '8', label: 'Pending review' },
};

export const Warn = {
  args: { value: '3', label: 'Waiting on documents', variant: 'warn' },
};

export const TrendUp = {
  args: { value: '21', trend: '4', trendDir: 'up', label: 'Completed this week' },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <MetricCard value="8" label="Pending review" />
      <MetricCard value="3" label="Waiting on documents" variant="warn" />
      <MetricCard value="21" trend="4" trendDir="up" label="Completed this week" />
    </div>
  ),
};
