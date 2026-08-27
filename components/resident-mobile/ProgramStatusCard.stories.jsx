import React from 'react';
import { ProgramStatusCard } from './ProgramStatusCard.jsx';

export default {
  title: 'Resident Mobile/ProgramStatusCard',
  component: ProgramStatusCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Resident mobile "program / CTA3" card. Per-tone near-white wash with a matching 1.5px stroke, 8px radius, 8px 18px 16px padding. Head row is a 32px tinted circle icon + 17px/500 title; a full-bleed 1px hairline splits it from the 14px muted description.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=170-24',
    },
  },
  argTypes: {
    tone: {
      control: 'select',
      options: ['warning', 'neutral', 'success', 'danger'],
    },
  },
};

export const Warning = {
  args: {
    tone: 'warning',
    title: 'Your application is in review',
    children: 'We received everything on July 22. Most reviews finish within 10 business days.',
  },
};

export const Neutral = {
  args: {
    tone: 'neutral',
    title: 'Recertification due Sept 1',
    children: "You'll need to confirm your household details before then.",
  },
};

export const Success = {
  args: {
    tone: 'success',
    title: 'Your application was approved',
    children: 'Benefits start August 1. You can view your award letter under Documents.',
  },
};

export const Danger = {
  args: {
    tone: 'danger',
    title: 'Your application was denied',
    children: 'You can appeal within 90 days. Documents explains what to send.',
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360 }}>
      <ProgramStatusCard tone="warning" title="Your application is in review">
        We received everything on July 22. Most reviews finish within 10 business days.
      </ProgramStatusCard>
      <ProgramStatusCard tone="neutral" title="Recertification due Sept 1">
        You'll need to confirm your household details before then.
      </ProgramStatusCard>
      <ProgramStatusCard tone="success" title="Your application was approved">
        Benefits start August 1. You can view your award letter under Documents.
      </ProgramStatusCard>
      <ProgramStatusCard tone="danger" title="Your application was denied">
        You can appeal within 90 days. Documents explains what to send.
      </ProgramStatusCard>
    </div>
  ),
};
