import React from 'react';
import { FieldGroup } from './FieldGroup.jsx';
import { Input } from './Input.jsx';

export default {
  title: 'Forms/FieldGroup',
  component: FieldGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          "related questions contained on one white surface. 12px radius, 22px padding, 1px hairline, 20px row rhythm. It is a real `<fieldset>` with a `<legend>`, so screen readers announce the group name with every field inside it.",
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=365-27',
    },
  },
  argTypes: {
    flush: { control: 'boolean' },
    gap: { control: 'number' },
    children: { table: { disable: true } },
  },
};

export const Default = {
  args: {
    legend: 'How can we reach you?',
    description: 'We only use this to send updates about your application.',
    children: (
      <>
        <Input label="Phone number" placeholder="(406) 555-0143" inputMode="tel" />
        <Input label="Email" placeholder="you@example.com" type="email" />
      </>
    ),
  },
};

export const Flush = {
  args: {
    ...Default.args,
    flush: true,
  },
};
