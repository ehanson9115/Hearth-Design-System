import React from 'react';
import { TransactionRow } from './TransactionRow.jsx';

export default {
  title: 'Resident Mobile/TransactionRow',
  component: TransactionRow,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'One purchase or deposit: small rounded-square icon chip (24px, r6, top-aligned), store + quiet meta line, right-aligned amount over a status word (green "Settled" / amber "Pending"). Stack rows inside a card; hairlines divide automatically.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=16-19',
    },
  },
  argTypes: {
    status: {
      control: 'select',
      options: ['settled', 'pending'],
    },
    onClick: { table: { disable: true } },
  },
};

export const Settled = {
  args: {
    title: 'Safeway, WIC purchase',
    meta: 'Jul 24 · 3 items',
    amount: '$8.15',
    status: 'settled',
  },
};

export const Pending = {
  args: {
    title: 'Benefit deposit',
    meta: 'Jul 1 · 9:42 AM',
    amount: '+$391.00',
    status: 'pending',
    icon: 'ti-building-bank',
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ maxWidth: 360 }}>
      <TransactionRow title="Safeway, WIC purchase" meta="Jul 24 · 3 items" amount="$8.15" status="settled" />
      <TransactionRow title="Benefit deposit" meta="Jul 1 · 9:42 AM" amount="+$391.00" status="pending" icon="ti-building-bank" />
    </div>
  ),
};
