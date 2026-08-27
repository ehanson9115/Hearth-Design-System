import React from 'react';
import { ProgramCard } from './ProgramCard.jsx';

export default {
  title: 'Surfaces/ProgramCard',
  component: ProgramCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          "One benefit program: who it's for, what it takes, and at most one CTA.",
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=20-32',
    },
  },
  argTypes: {
    ctaVariant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    tone: {
      control: 'select',
      options: ['default', 'pending'],
    },
    meta: { table: { disable: true } },
    onCta: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};

export const Offer = {
  args: {
    tone: 'default',
    logo: 'ti ti-apple',
    title: 'Women, Infants & Children',
    subtitle: 'Food benefits and nutrition support',
    meta: [
      { icon: 'ti ti-users', label: 'Pregnant people, infants & children under 5' },
      { icon: 'ti ti-clock', label: 'Apply in about 15 minutes' },
    ],
    ctaLabel: 'Apply for WIC',
    ctaVariant: 'primary',
    onCta: () => {},
  },
};

export const OfferSecondary = {
  args: {
    tone: 'default',
    logo: 'ti ti-heart',
    title: 'Medicaid',
    subtitle: 'Health coverage for low-income individuals and families',
    meta: [
      { icon: 'ti ti-clock', label: 'Apply in about 20 minutes' },
    ],
    ctaLabel: 'Learn about Medicaid',
    ctaVariant: 'secondary',
    onCta: () => {},
  },
};

export const StatusPending = {
  args: {
    tone: 'pending',
    ctaVariant: 'primary',
    logo: 'ti ti-file-text',
    title: 'Application status',
    meta: [{ label: 'We are reviewing your application' }],
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=131-182',
    },
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <ProgramCard
        logo="ti ti-apple"
        title="Women, Infants & Children"
        subtitle="Food benefits and nutrition support"
        meta={[
          { icon: 'ti ti-users', label: 'Pregnant people, infants & children under 5' },
          { icon: 'ti ti-clock', label: 'Apply in about 15 minutes' },
        ]}
        ctaLabel="Apply for WIC"
        ctaVariant="primary"
        onCta={() => {}}
      />
      <ProgramCard
        logo="ti ti-heart"
        title="Medicaid"
        subtitle="Health coverage for low-income individuals and families"
        meta={[{ icon: 'ti ti-clock', label: 'Apply in about 20 minutes' }]}
        ctaLabel="Learn about Medicaid"
        ctaVariant="secondary"
        onCta={() => {}}
      />
      <ProgramCard
        tone="pending"
        logo="ti ti-file-text"
        title="Application status"
        meta={[{ label: 'We are reviewing your application' }]}
      />
    </div>
  ),
};
