import React from 'react';
import { Button } from '../core/Button.jsx';
import { SuccessHero } from './SuccessHero.jsx';

export default {
  title: 'Feedback/SuccessHero',
  component: SuccessHero,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          "The confirmation medallion: 92px ring in the tone's tint, 72px disc in its vivid, white glyph, with optional title, description and actions stacked below, centered.",
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=34-13',
    },
  },
  argTypes: {
    tone: {
      control: 'select',
      options: ['success', 'accent'],
    },
    children: { table: { disable: true } },
  },
};

export const Success = {
  args: {
    tone: 'success',
    title: 'Application submitted',
    description:
      "We'll text (406) 555-0134 within 3 business days about your WIC appointment.",
    children: <Button variant="secondary">Back to home</Button>,
  },
};

export const Accent = {
  args: {
    tone: 'accent',
    icon: 'ti ti-check',
    title: 'Changes saved',
    description: 'Your updates were saved. You can come back and edit them anytime.',
    children: <Button variant="secondary">Back to home</Button>,
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
      <SuccessHero
        tone="success"
        title="Application submitted"
        description="We'll text (406) 555-0134 within 3 business days about your WIC appointment."
      >
        <Button variant="secondary">Back to home</Button>
      </SuccessHero>
      <SuccessHero
        tone="accent"
        title="Changes saved"
        description="Your updates were saved. You can come back and edit them anytime."
      >
        <Button variant="secondary">Back to home</Button>
      </SuccessHero>
    </div>
  ),
};
