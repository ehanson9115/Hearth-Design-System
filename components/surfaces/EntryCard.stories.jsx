import React from 'react';
import { EntryCard } from './EntryCard.jsx';

export default {
  title: 'Surfaces/EntryCard',
  component: EntryCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'a violet-tint doorway into a flow: white icon circle, title, quiet subtitle, trailing →. The tint says "start here", so keep at most one or two per screen.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=22-9',
    },
  },
  argTypes: {
    onClick: { table: { disable: true } },
  },
};

export const Recertification = {
  args: {
    icon: 'ti-calendar-repeat',
    title: 'Recertification',
    subtitle: 'Your certification ends July 12, 2026',
  },
};

export const AsLink = {
  args: {
    href: '/appointments',
    icon: 'ti-calendar-plus',
    title: 'Book an appointment',
    subtitle: 'Next opening: Tuesday',
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360 }}>
      <EntryCard icon="ti-calendar-repeat" title="Recertification" subtitle="Your certification ends July 12, 2026" />
      <EntryCard href="/appointments" icon="ti-calendar-plus" title="Book an appointment" subtitle="Next opening: Tuesday" />
    </div>
  ),
};
