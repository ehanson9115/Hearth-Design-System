import React from 'react';
import { Input } from './Input.jsx';

export default {
  title: 'Forms/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          "a complete labelled control (input / textarea / select) with hint, error, and optional character counter. Use for every form input so spacing and error treatment stay consistent.",
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=19-22',
    },
  },
  argTypes: {
    as: {
      control: 'select',
      options: ['input', 'textarea', 'select'],
    },
    options: { table: { disable: true } },
    invalid: { control: 'boolean' },
    showCount: { control: 'boolean' },
    maxLength: { control: 'number' },
    fill: {
      control: 'select',
      options: ['tint', 'white'],
    },
    fullWidth: { control: 'boolean' },
    id: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};

export const Default = {
  args: {
    as: 'input',
    label: 'Date of birth',
    placeholder: 'MM/DD/YYYY',
    hint: 'We use this to check which programs you qualify for.',
  },
};

export const SelectVariant = {
  args: {
    as: 'select',
    label: 'Preferred language',
    options: ['English', 'Español', 'Tiếng Việt'],
  },
};

export const Textarea = {
  args: {
    as: 'textarea',
    label: 'Anything else we should know?',
    maxLength: 500,
    showCount: true,
  },
};

export const WithError = {
  args: {
    as: 'input',
    label: 'Phone number',
    defaultValue: '406-555',
    error: 'Enter all 10 digits, like (406) 555-0134.',
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 380 }}>
      <Input label="Date of birth" placeholder="MM/DD/YYYY"
        hint="We use this to check which programs you qualify for." />
      <Input as="select" label="Preferred language"
        options={['English', 'Español', 'Tiếng Việt']} />
      <Input as="textarea" label="Anything else we should know?"
        maxLength={500} showCount />
      <Input label="Phone number" defaultValue="406-555"
        error="Enter all 10 digits, like (406) 555-0134." />
    </div>
  ),
};
