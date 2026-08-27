import React from 'react';
import { DocumentsCard } from './DocumentsCard.jsx';

export default {
  title: 'Resident Mobile/DocumentsCard',
  component: DocumentsCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          "Resident mobile documents card. White card, 1px hairline stroke, 12px radius, 16px padding. Header row is a 17px/500 title with a right-aligned amber dot badge (12.5px) for the outstanding count; 14px muted subtitle beneath. Doc rows pair a 24px r6 rounded-square icon chip (top-aligned, never a large circle) with a 15px/500 title + 13px muted subtitle. A full-width 44px, 8px-radius primary button closes the card.",
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=171-33',
    },
  },
  argTypes: {
    docs: { table: { disable: true } },
    onCta: { table: { disable: true } },
  },
};

export const Default = {
  args: {
    badge: '3 missing',
    subtitle: 'We still need these before your review can finish.',
    docs: [
      { title: 'Photo ID', subtitle: 'Added July 18' },
      { title: 'Proof of income', subtitle: 'Last 30 days of pay stubs', missing: true },
      { title: 'Proof of address', subtitle: 'Utility bill or lease', missing: true },
    ],
  },
};

export const AllComplete = {
  args: {
    subtitle: "You're all caught up; nothing else is needed right now.",
    docs: [
      { title: 'Photo ID', subtitle: 'Added July 18' },
      { title: 'Proof of income', subtitle: 'Added July 20' },
      { title: 'Proof of address', subtitle: 'Added July 20' },
    ],
    cta: 'Add another document',
  },
};
