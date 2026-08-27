import React from 'react';
import { OptionCard } from './OptionCard.jsx';

export default {
  title: 'Forms/OptionCard',
  component: OptionCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          "a large tap-target choice, radio or checkbox. Selected = violet tint + 1px violet stroke. Use for single/multi-select question steps.",
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=18-33',
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['radio', 'checkbox'],
    },
    selected: { control: 'boolean' },
    onSelect: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};

export const RadioSelected = {
  args: {
    type: 'radio',
    title: 'Text message',
    selected: true,
    description: "We'll text this number: (406) 555-0134",
  },
};

export const RadioUnselected = {
  args: {
    type: 'radio',
    title: 'Email',
    description: 'Best if you check email often',
  },
};

export const CheckboxSelected = {
  args: {
    type: 'checkbox',
    title: 'Food assistance',
    selected: true,
  },
};

export const CheckboxUnselected = {
  args: {
    type: 'checkbox',
    title: 'Housing support',
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320 }}>
      <OptionCard title="Text message" selected
        description="We'll text this number: (406) 555-0134" />
      <OptionCard title="Email" description="Best if you check email often" />
      <OptionCard type="checkbox" title="Food assistance" selected />
      <OptionCard type="checkbox" title="Housing support" />
    </div>
  ),
};
