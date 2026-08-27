import React from 'react';
import { ReviewTile } from './ReviewTile.jsx';

export default {
  title: 'Surfaces/ReviewTile',
  component: ReviewTile,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'a "review your answers" group before submit: header zone with an Edit link + colon-format key/value rows. Missing values show in danger red.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=161-101',
    },
  },
  argTypes: {
    onEdit: { table: { disable: true } },
    items: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};

export const AboutYou = {
  args: {
    title: 'About you',
    editHref: '#',
    items: [
      { label: 'Name', value: 'Maria Alvarez' },
      { label: 'Date of birth', value: 'March 28, 1986' },
    ],
  },
};

export const WithMissingValue = {
  args: {
    title: 'Documents',
    onEdit: () => {},
    items: [
      { label: 'Proof of address', value: 'water-bill-june.jpg' },
      { label: 'Proof of income', value: 'Not added yet', missing: true },
    ],
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 420 }}>
      <ReviewTile title="About you" editHref="#" items={[
        { label: 'Name', value: 'Maria Alvarez' },
        { label: 'Date of birth', value: 'March 28, 1986' },
      ]} />
      <ReviewTile title="Documents" onEdit={() => {}} items={[
        { label: 'Proof of address', value: 'water-bill-june.jpg' },
        { label: 'Proof of income', value: 'Not added yet', missing: true },
      ]} />
    </div>
  ),
};
