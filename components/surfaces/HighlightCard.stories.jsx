import React from 'react';
import { HighlightCard } from './HighlightCard.jsx';

export default {
  title: 'Surfaces/HighlightCard',
  component: HighlightCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'the "What\'s new" promo panel: white card, violet stroke, soft rounded item rows with a trailing arrow. Lives in a sidebar or rail.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=161-92',
    },
  },
  argTypes: {
    items: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};

export const WhatsNew = {
  args: {
    items: [
      { label: 'Auto shelter flags', href: '#' },
      { label: 'Interview summaries', href: '#' },
      { label: 'Spanish transcripts', href: '#' },
    ],
  },
};

export const CustomTitle = {
  args: {
    title: 'Resources',
    icon: 'ti-bulb',
    items: [
      { label: 'Eligibility calculator', href: '#' },
      { label: 'Document checklist', href: '#' },
    ],
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <HighlightCard items={[
        { label: 'Auto shelter flags', href: '#' },
        { label: 'Interview summaries', href: '#' },
        { label: 'Spanish transcripts', href: '#' },
      ]} />
      <HighlightCard title="Resources" icon="ti-bulb" items={[
        { label: 'Eligibility calculator', href: '#' },
        { label: 'Document checklist', href: '#' },
      ]} />
    </div>
  ),
};
