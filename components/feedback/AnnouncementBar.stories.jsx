import React from 'react';
import { AnnouncementBar } from './AnnouncementBar.jsx';

export default {
  title: 'Feedback/AnnouncementBar',
  component: AnnouncementBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Violet-tint bar for promoting or announcing (product news, new features). Not for status; use `NotificationCard` for that.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=22-4',
    },
  },
  argTypes: {
    action: { table: { disable: true } },
    onAction: { table: { disable: true } },
    onDismiss: { table: { disable: true } },
  },
};

export const Default = {
  args: {
    children: 'New: excess shelter deductions are now flagged automatically.',
  },
};

export const WithAction = {
  args: {
    action: 'See how it works',
    onAction: () => {},
    children: 'New: excess shelter deductions are now flagged automatically.',
  },
};

export const Dismissible = {
  args: {
    action: 'See how it works',
    onAction: () => {},
    onDismiss: () => {},
    children: 'New: excess shelter deductions are now flagged automatically.',
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <AnnouncementBar>New: excess shelter deductions are now flagged automatically.</AnnouncementBar>
      <AnnouncementBar action="See how it works" onAction={() => {}}>
        New: excess shelter deductions are now flagged automatically.
      </AnnouncementBar>
      <AnnouncementBar action="See how it works" onAction={() => {}} onDismiss={() => {}}>
        New: excess shelter deductions are now flagged automatically.
      </AnnouncementBar>
    </div>
  ),
};
