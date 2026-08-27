import React from 'react';
import { RecordCard } from './RecordCard.jsx';

export default {
  title: 'Surfaces/RecordCard',
  component: RecordCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'one reported item (a job, an address, a household member) laid out for confirm-or-correct review. White card, 1px hairline, 12px radius, 16px padding. A 40px violet-tint rounded-square tile sits beside a 17px/500 title + 14px muted subtitle; icon-led 14px detail rows follow; a full-bleed hairline separates the confirm checkbox and the Edit / Remove actions.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=369-52',
    },
  },
  argTypes: {
    confirmed: { control: 'boolean' },
    details: { table: { disable: true } },
    onConfirm: { table: { disable: true } },
    onEdit: { table: { disable: true } },
    onRemove: { table: { disable: true } },
  },
};

export const PendingConfirmation = {
  args: {
    icon: 'ti-building',
    title: "Casey's General Stores",
    subtitle: 'Cashier / Team Member',
    details: [
      { icon: 'ti-calendar', text: 'Jun 15, 2024 – Nov 2, 2025' },
      { icon: 'ti-currency-dollar', text: '$1,240.00 / bi-weekly' },
      { icon: 'ti-alert-circle', text: 'Reason for leaving: Laid off' },
    ],
    confirmed: false,
    onConfirm: () => {},
    onEdit: () => {},
    onRemove: () => {},
  },
};

export const Confirmed = {
  args: {
    ...PendingConfirmation.args,
    confirmed: true,
  },
};

export const ActionsOnly = {
  args: {
    icon: 'ti-building',
    title: "Casey's General Stores",
    subtitle: 'Cashier / Team Member',
    details: [
      { icon: 'ti-calendar', text: 'Jun 15, 2024 – Nov 2, 2025' },
      { icon: 'ti-currency-dollar', text: '$1,240.00 / bi-weekly' },
    ],
    onEdit: () => {},
    onRemove: () => {},
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 420 }}>
      <RecordCard
        icon="ti-building"
        title="Casey's General Stores"
        subtitle="Cashier / Team Member"
        details={[
          { icon: 'ti-calendar', text: 'Jun 15, 2024 – Nov 2, 2025' },
          { icon: 'ti-currency-dollar', text: '$1,240.00 / bi-weekly' },
          { icon: 'ti-alert-circle', text: 'Reason for leaving: Laid off' },
        ]}
        confirmed={false}
        onConfirm={() => {}}
        onEdit={() => {}}
        onRemove={() => {}}
      />
      <RecordCard
        icon="ti-building"
        title="Casey's General Stores"
        subtitle="Cashier / Team Member"
        details={[
          { icon: 'ti-calendar', text: 'Jun 15, 2024 – Nov 2, 2025' },
          { icon: 'ti-currency-dollar', text: '$1,240.00 / bi-weekly' },
          { icon: 'ti-alert-circle', text: 'Reason for leaving: Laid off' },
        ]}
        confirmed={true}
        onConfirm={() => {}}
        onEdit={() => {}}
        onRemove={() => {}}
      />
      <RecordCard
        icon="ti-building"
        title="Casey's General Stores"
        subtitle="Cashier / Team Member"
        details={[
          { icon: 'ti-calendar', text: 'Jun 15, 2024 – Nov 2, 2025' },
          { icon: 'ti-currency-dollar', text: '$1,240.00 / bi-weekly' },
        ]}
        onEdit={() => {}}
        onRemove={() => {}}
      />
    </div>
  ),
};
