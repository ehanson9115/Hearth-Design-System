import React from 'react';
import { Eyebrow } from './Eyebrow.jsx';

export default {
  title: 'Core/Eyebrow',
  component: Eyebrow,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          "the tiny uppercase label above a title (10.5px/500, +0.07em tracking; all eyebrows render at one size since the 2026-08-12 unification). `page` sits above page and section titles; `card` marks sub-sections *inside* a card, the one place CAPS is allowed in card copy.",
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=63-7',
    },
  },
  argTypes: {
    level: {
      control: 'select',
      options: ['page', 'card'],
    },
  },
};

export const Page = {
  args: { level: 'page', children: 'Your benefits' },
};

export const Card = {
  args: { level: 'card', children: 'Recent activity' },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <Eyebrow>Your benefits</Eyebrow>
        <h2 style={{ margin: '4px 0 0' }}>Food assistance</h2>
      </div>
      <Eyebrow level="card">Recent activity</Eyebrow>
    </div>
  ),
};
