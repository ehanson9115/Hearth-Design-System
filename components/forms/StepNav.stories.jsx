import React from 'react';
import { StepNav } from './StepNav.jsx';
import { Button } from '../core/Button.jsx';
import { ProgressBar } from '../core/ProgressBar.jsx';

export default {
  title: 'Forms/StepNav',
  component: StepNav,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          "The headline block of a multi-step form step: back link, 'Step N of M' label, title, hint. Put a `ProgressBar` and your step's fields in `children`. It renders no action buttons — Back and Continue belong under the content, in a sibling of this block.",
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rL6ZmEg0OhxMPuvQmtpNH8/Hearth-%E2%80%94-HT-Design-System?node-id=164-20',
    },
  },
  argTypes: {
    step: { control: 'number' },
    of: { control: 'number' },
    section: { control: 'text' },
    onBack: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};

export const Default = {
  render: () => (
    <StepNav
      step={3}
      of={5}
      section="About your household"
      title="Who lives with you?"
      hint="Include everyone who shares meals or bills with you."
      onBack={() => {}}
    >
      <ProgressBar value={60} />
    </StepNav>
  ),
};

export const NoSection = {
  name: 'No section (short flow)',
  render: () => (
    <StepNav
      step={2}
      of={3}
      title="What's your address?"
      hint="We'll use this to find your local office."
      onBack={() => {}}
    >
      <ProgressBar value={66} />
    </StepNav>
  ),
  parameters: { docs: { description: { story:
    'With `section` omitted the counter sits left, exactly as before — short flows do not need the eyebrow.' } } },
};

export const FirstStep = {
  render: () => (
    <StepNav
      step={1}
      of={5}
      title="What's your name?"
      hint="We'll use this to start your application."
    >
      <ProgressBar value={20} />
    </StepNav>
  ),
};

export const WithActionsBelow = {
  name: 'With actions below (correct composition)',
  render: () => (
    <div style={{ maxWidth: 460 }}>
      <StepNav
        step={3}
        of={5}
        title="Who lives with you?"
        hint="Include everyone who shares meals or bills with you."
        onBack={() => {}}
      >
        <ProgressBar value={60} />
      </StepNav>
      {/* Sibling of StepNav, not a child — in a real screen this is the sticky
          bottom bar, pinned to the viewport below the scrolling step body. */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 20,
                    paddingTop: 16, borderTop: '1px solid var(--ht-grey-3)' }}>
        <Button variant="secondary">Back</Button>
        <span style={{ flex: 1 }} />
        <Button variant="primary">Continue</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'StepNav owns the headline only. The action row is a sibling, so it stays with the step content — in a real screen it is a viewport-sticky bottom bar rather than an in-header footer.',
      },
    },
  },
};
