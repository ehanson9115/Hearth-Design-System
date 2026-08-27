import React from 'react';
import { Stepper } from './Stepper.jsx';

export default {
  title: 'Forms/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          "a small count as two 44px tap targets around a tabular value. 8px radius, `--ht-border` stroke, hover brings the violet edge in. Buttons disable at `min`/`max` rather than disappearing.",
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=364-31',
    },
  },
  argTypes: {
    value: { control: 'number' },
    onChange: { table: { disable: true } },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
  },
};

export const Default = {
  args: {
    value: 1,
    min: 1,
    max: 12,
    label: 'people applying',
  },
};

export const WithUnit = {
  args: {
    value: 6,
    min: 0,
    max: 40,
    unit: 'hrs',
    label: 'hours worked',
  },
};

export const AtMin = {
  args: {
    value: 1,
    min: 1,
    max: 12,
    label: 'people applying',
  },
};

export const AtMax = {
  args: {
    value: 12,
    min: 1,
    max: 12,
    label: 'people applying',
  },
};
