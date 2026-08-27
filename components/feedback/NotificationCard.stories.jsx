import React from 'react';
import { NotificationCard } from './NotificationCard.jsx';

export default {
  title: 'Feedback/NotificationCard',
  component: NotificationCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Inline alert, outlined. The saturated hue is the 1px stroke; the fill is a near-white wash; the icon and AA-contrast text carry the meaning. Because the fill barely tints, several of these can stack in a feed without any one shouting.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=21-22',
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger'],
    },
    compact: { control: 'boolean' },
  },
};

export const Info = {
  args: {
    variant: 'info',
    title: 'Your renewal is coming up',
    children: 'Renew by August 15 to keep your coverage.',
  },
};

export const Success = {
  args: {
    variant: 'success',
    title: 'Application submitted',
    children: "We'll send you a message within 3 business days.",
  },
};

export const Warning = {
  args: {
    variant: 'warning',
    title: 'One document still needed',
    children: 'Upload proof of address to finish your application.',
  },
};

export const Danger = {
  args: {
    variant: 'danger',
    compact: true,
    title: 'Over income limit',
    children: 'Gross $4,000/mo vs. $3,380/mo threshold. Preliminary only.',
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 420 }}>
      <NotificationCard variant="info" title="Your renewal is coming up">
        Renew by August 15 to keep your coverage.
      </NotificationCard>
      <NotificationCard variant="success" title="Application submitted">
        We'll send you a message within 3 business days.
      </NotificationCard>
      <NotificationCard variant="warning" title="One document still needed">
        Upload proof of address to finish your application.
      </NotificationCard>
      <NotificationCard variant="danger" compact title="Over income limit">
        Gross $4,000/mo vs. $3,380/mo threshold. Preliminary only.
      </NotificationCard>
    </div>
  ),
};
