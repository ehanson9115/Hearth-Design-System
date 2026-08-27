import React from 'react';
import { SegmentedYesNo } from './SegmentedYesNo.jsx';

export default {
  title: 'Forms/SegmentedYesNo',
  component: SegmentedYesNo,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          "a binary question as two equal 44px tap targets. Neither side starts selected; the chosen side gets the violet tint + 1px stroke.",
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=192-12',
    },
  },
  argTypes: {
    value: {
      control: 'select',
      options: ['yes', 'no'],
    },
    onChange: { table: { disable: true } },
    yesLabel: { table: { disable: true } },
    noLabel: { table: { disable: true } },
  },
};

// Deliberate default: value is left unset so the component's own default
// (`null`) applies, neither option selected. This is ratified behavior,
// not a state to "fix" with a picked default.
export const Default = {
  args: {},
};

export const Answered = {
  args: {
    value: 'yes',
  },
};
