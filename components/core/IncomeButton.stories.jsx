import React from 'react';
import { IncomeButton } from './IncomeButton.jsx';
import { Button } from './Button.jsx';

export default {
  title: 'Core/IncomeButton',
  component: IncomeButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Income-verification handoff button — "Continue with" plus a partner wordmark. Deeper violet than a primary Button, because it hands the resident to a third party rather than advancing the step.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=552-3197',
    },
  },
  argTypes: {
    provider: { control: 'select', options: ['truv', 'argyle'] },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export const Truv = { args: { provider: 'truv' } };
export const Argyle = { args: { provider: 'argyle' } };

export const BothProviders = {
  name: 'Both providers',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
      <IncomeButton provider="truv" />
      <IncomeButton provider="argyle" />
    </div>
  ),
  parameters: { docs: { description: { story:
    'Stack one per provider the state has enabled. The two wordmarks are different widths and heights — that is the artwork, not a bug; matching their box heights would mismatch their cap heights.' } } },
};

export const FullWidth = {
  args: { provider: 'truv', fullWidth: true },
  render: (args) => (
    <div style={{ maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 8 }}>
      <IncomeButton {...args} />
      <IncomeButton provider="argyle" fullWidth />
    </div>
  ),
};

export const Disabled = {
  args: { provider: 'truv', disabled: true },
  parameters: { docs: { description: { story:
    'The wordmark uses `currentColor`, so it greys with the label rather than staying white on the grey fill.' } } },
};

export const NextToAPrimary = {
  name: 'Next to a primary Button',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start' }}>
      <IncomeButton provider="truv" />
      <Button variant="primary">Enter pay stubs manually</Button>
    </div>
  ),
  parameters: { docs: { description: { story:
    'Both are 44px with an 8px radius, so they stack without a seam — and the handoff still reads as the deeper, separate class of action.' } } },
};
