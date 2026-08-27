import React from 'react';
import { Select } from './Select.jsx';

export default {
  title: 'Forms/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          "The bare 48px dropdown control: grey-1 fill, 6px radius, `--ht-border` stroke, 15px value text, 13px side padding.",
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=63-25',
    },
  },
  argTypes: {
    options: { table: { disable: true } },
    onChange: { table: { disable: true } },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    id: { table: { disable: true } },
  },
};

export const Default = {
  args: {
    options: ['Montana', 'Idaho', 'Wyoming'],
    placeholder: 'Select state…',
  },
};

export const Filled = {
  args: {
    options: ['Montana', 'Idaho', 'Wyoming'],
    defaultValue: 'Montana',
    placeholder: 'Select state…',
  },
};

export const Invalid = {
  args: {
    options: ['Montana', 'Idaho', 'Wyoming'],
    placeholder: 'Select state…',
    invalid: true,
  },
};

export const Disabled = {
  args: {
    options: ['Montana', 'Idaho', 'Wyoming'],
    defaultValue: 'Montana',
    disabled: true,
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 320 }}>
      <Select options={['Montana', 'Idaho', 'Wyoming']} placeholder="Select state…" />
      <Select options={['Montana', 'Idaho', 'Wyoming']} defaultValue="Montana" />
      <Select options={['Montana', 'Idaho', 'Wyoming']} placeholder="Select state…" invalid />
      <Select options={['Montana', 'Idaho', 'Wyoming']} defaultValue="Montana" disabled />
    </div>
  ),
};
