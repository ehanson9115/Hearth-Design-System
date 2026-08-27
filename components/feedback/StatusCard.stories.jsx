import React from 'react';
import { Button } from '../core/Button.jsx';
import { StatusCard } from './StatusCard.jsx';

export default {
  title: 'Feedback/StatusCard',
  component: StatusCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A centered white card for whole-screen states: success, loading (spinner), empty, error. Copy invites the next action; pass a `Button` as `action`.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=159-30',
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'loading', 'empty', 'error'],
    },
    action: { table: { disable: true } },
  },
};

export const Success = {
  args: {
    variant: 'success',
    title: 'Application submitted',
    children: "We sent a copy to your email. You don't need to do anything else today.",
  },
};

export const Loading = {
  args: {
    variant: 'loading',
    title: 'Checking what you qualify for',
    children: "This takes about 10 seconds. Don't close the app.",
  },
};

export const Empty = {
  args: {
    variant: 'empty',
    icon: 'ti-calendar',
    title: 'No appointments yet',
    children: 'When you book one, it will show up here with reminders.',
    action: <Button>Book appointment</Button>,
  },
};

export const Error = {
  args: {
    variant: 'error',
    title: 'Something went wrong',
    children: 'We could not load this page. Try again in a few minutes.',
    action: <Button>Try again</Button>,
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <StatusCard variant="success" title="Application submitted">
        We sent a copy to your email. You don't need to do anything else today.
      </StatusCard>
      <StatusCard variant="loading" title="Checking what you qualify for">
        This takes about 10 seconds. Don't close the app.
      </StatusCard>
      <StatusCard
        variant="empty"
        icon="ti-calendar"
        title="No appointments yet"
        action={<Button>Book appointment</Button>}
      >
        When you book one, it will show up here with reminders.
      </StatusCard>
      <StatusCard
        variant="error"
        title="Something went wrong"
        action={<Button>Try again</Button>}
      >
        We could not load this page. Try again in a few minutes.
      </StatusCard>
    </div>
  ),
};
